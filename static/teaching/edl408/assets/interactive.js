const PYODIDE_BASE = 'https://cdn.jsdelivr.net/pyodide/v314.0.6/full/';

const enableButton = document.querySelector('#enable-python');
const runAllButton = document.querySelector('#run-all-python');
const resetButton = document.querySelector('#reset-python');
const sessionTools = document.querySelector('#python-session-tools');
const statusLine = document.querySelector('#python-status');

let pyodide = null;
let running = false;
let interactiveCells = [];

function browserCompatibleCode(code) {
  const lines = code.split('\n');
  const converted = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '%%capture' || trimmed.startsWith('%matplotlib')) {
      converted.push(`# ${line}  (aðlagað fyrir vafra)`);
      continue;
    }
    if (/^!pip\s+install\s+ipympl\b/.test(trimmed)) {
      converted.push('# ipympl er ekki nauðsynlegt í vafraútgáfunni');
      continue;
    }
    const wget = trimmed.match(/^!wget\s+(\S+)/);
    if (wget) {
      const url = wget[1];
      const filename = url.split('/teaching/edl408/').pop();
      converted.push('from pyodide.http import pyfetch');
      converted.push(`_response = await pyfetch(${JSON.stringify(url)})`);
      converted.push(`with open(${JSON.stringify(filename)}, 'wb') as _download:`);
      converted.push('    _download.write(await _response.bytes())');
      continue;
    }
    if (trimmed === 'from google.colab import output') {
      converted.push('# Google Colab er ekki notað í vafraútgáfunni');
      continue;
    }
    if (trimmed === 'output.enable_custom_widget_manager()') {
      converted.push('# Sérstakur Colab-widget manager er ekki nauðsynlegur hér');
      continue;
    }
    if (trimmed === 'from ipywidgets import Image') {
      converted.push('# ipywidgets.Image er ekki notað af útreikningunum hér');
      continue;
    }
    converted.push(line);
  }
  return converted.join('\n');
}

function setStatus(message) {
  if (statusLine) statusLine.textContent = message;
}

function loadScript(source) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = source;
    script.onload = resolve;
    script.onerror = () => reject(new Error('Ekki tókst að sækja Python-umhverfið.'));
    document.head.appendChild(script);
  });
}

function setBusy(isBusy) {
  running = isBusy;
  document.querySelectorAll('.cell-run-button, #run-all-python').forEach((button) => {
    button.disabled = isBusy;
  });
}

function makeCellsEditable() {
  interactiveCells = [...document.querySelectorAll('.notebook .code_cell')].map((cell, index) => {
    const inputArea = cell.querySelector('.input_area');
    const pre = inputArea?.querySelector('pre');
    if (!inputArea || !pre) return null;

    const code = pre.textContent.replace(/^\s*\n/, '').replace(/\s+$/, '');
    const editor = document.createElement('textarea');
    editor.className = 'python-editor';
    editor.value = code;
    editor.rows = Math.min(28, Math.max(3, code.split('\n').length));
    editor.setAttribute('aria-label', `Python-kóði, reitur ${index + 1}`);

    const toolbar = document.createElement('div');
    toolbar.className = 'cell-toolbar';
    const runButton = document.createElement('button');
    runButton.type = 'button';
    runButton.className = 'cell-run-button';
    runButton.textContent = 'Keyra';
    toolbar.appendChild(runButton);

    const output = document.createElement('div');
    output.className = 'live-output';
    output.hidden = true;
    output.setAttribute('aria-live', 'polite');

    inputArea.replaceChildren(editor);
    cell.classList.add('interactive-cell');
    cell.insertBefore(toolbar, cell.firstChild);
    cell.appendChild(output);

    const staticOutputs = [...cell.querySelectorAll('.output_wrapper')];
    const record = { cell, editor, output, runButton, staticOutputs };
    runButton.addEventListener('click', () => runCell(record));
    return record;
  }).filter(Boolean);
}

function renderOutput(record, text, images, error = false) {
  record.output.replaceChildren();
  record.output.classList.toggle('is-error', error);
  if (text) {
    const pre = document.createElement('pre');
    pre.textContent = text;
    record.output.appendChild(pre);
  }
  images.forEach((base64, index) => {
    const image = document.createElement('img');
    image.src = `data:image/png;base64,${base64}`;
    image.alt = `Graf úr Python-reit ${index + 1}`;
    record.output.appendChild(image);
  });
  record.output.hidden = !text && images.length === 0;
}

async function captureFigures() {
  const payload = await pyodide.runPythonAsync(`
import base64 as _base64
import io as _io
import json as _json
import matplotlib.pyplot as _plt
_images = []
for _number in _plt.get_fignums():
    _figure = _plt.figure(_number)
    _buffer = _io.BytesIO()
    _figure.savefig(_buffer, format="png", bbox_inches="tight", dpi=120)
    _images.append(_base64.b64encode(_buffer.getvalue()).decode("ascii"))
    _plt.close(_figure)
_json.dumps(_images)
  `);
  return JSON.parse(String(payload));
}

async function runCell(record, keepBusy = false) {
  if (running && !keepBusy) return;
  if (!keepBusy) setBusy(true);
  record.runButton.textContent = 'Keyri…';
  record.staticOutputs.forEach((output) => { output.hidden = true; });
  record.output.hidden = false;
  record.output.classList.remove('is-error');
  record.output.textContent = 'Keyri kóða…';

  const stdout = [];
  const stderr = [];
  pyodide.setStdout({ batched: (text) => stdout.push(text) });
  pyodide.setStderr({ batched: (text) => stderr.push(text) });

  try {
    const code = browserCompatibleCode(record.editor.value);
    await pyodide.loadPackagesFromImports(code);
    const result = await pyodide.runPythonAsync(code);
    const resultText = result === undefined || result === null ? '' : String(result);
    if (result && typeof result.destroy === 'function') result.destroy();
    const images = await captureFigures();
    const text = [...stdout, ...stderr, resultText].filter(Boolean).join('\n');
    renderOutput(record, text, images);
  } catch (error) {
    renderOutput(record, String(error), [], true);
  } finally {
    record.runButton.textContent = 'Keyra';
    if (!keepBusy) setBusy(false);
  }
}

async function enablePython() {
  if (!enableButton || pyodide) return;
  enableButton.disabled = true;
  enableButton.textContent = 'Hleð Python…';
  setStatus('Sæki Python og vísindapakka. Þetta getur tekið nokkrar sekúndur í fyrsta skipti.');
  try {
    await loadScript(`${PYODIDE_BASE}pyodide.js`);
    pyodide = await globalThis.loadPyodide({ indexURL: PYODIDE_BASE });
    await pyodide.loadPackage(['numpy', 'scipy', 'matplotlib']);
    await pyodide.runPythonAsync("import matplotlib; matplotlib.use('Agg')");
    makeCellsEditable();
    enableButton.hidden = true;
    sessionTools.hidden = false;
    setStatus('Python er tilbúið. Reitirnir deila sömu keyrslulotu; keyrðu þá í réttri röð.');
  } catch (error) {
    enableButton.disabled = false;
    enableButton.textContent = 'Reyna aftur';
    setStatus(String(error));
  }
}

enableButton?.addEventListener('click', enablePython);
runAllButton?.addEventListener('click', async () => {
  if (!pyodide || running) return;
  setBusy(true);
  setStatus('Keyri alla Python-reiti í röð…');
  for (const record of interactiveCells) await runCell(record, true);
  setBusy(false);
  setStatus('Öllum Python-reitum hefur verið keyrt.');
});
resetButton?.addEventListener('click', () => window.location.reload());
