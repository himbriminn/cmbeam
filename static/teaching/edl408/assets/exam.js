(() => {
  const exams = {
  1: { title: "NumPy og kafli 1", questions: [
    { q: "Hvaða skipun er venjulega notuð til að flytja NumPy inn undir heitinu np?", a: ["import numpy as np", "include numpy as np", "from numpy import all as np", "load numpy into np"], c: 0 },
    { q: "Hvað býr np.array([1, 2, 3]) til?", a: ["Þrívítt fylki", "Einfalt NumPy-fylki með þremur stökum", "Python-mengi", "Gagnaramma"], c: 1 },
    { q: "Hvaða eigindi segir til um lögun fylkis?", a: ["array.size", "array.type", "array.shape", "array.length"], c: 2 },
    { q: "Hvað skilar np.arange(0, 6, 2)?", a: ["[0, 2, 4]", "[0, 2, 4, 6]", "[2, 4, 6]", "[0, 1, 2, 3, 4, 5]"], c: 0 },
    { q: "Hvaða fall býr til 5 jafndreifð gildi frá 0 til 1, þar með talin endagildin?", a: ["np.arange(0, 1, 5)", "np.linspace(0, 1, 5)", "np.range(0, 1, 5)", "np.spacing(0, 1, 5)"], c: 1 },
    { q: "Hvað gerir np.zeros((2, 3))?", a: ["Býr til 2 × 3 fylki af núllum", "Býr til sex handahófstölur", "Eyðir sex stökum", "Býr til 3 × 2 einingafylki"], c: 0 },
    { q: "Ef a = np.array([10, 20, 30]), hvert er gildi a[1]?", a: ["10", "20", "30", "Villa, því NumPy byrjar að telja í 1"], c: 1 },
    { q: "Hvað velur sneiðin a[1:4] úr einvíðu fylki?", a: ["Stök með vísa 1, 2 og 3", "Stök með vísa 1, 2, 3 og 4", "Aðeins stak 4", "Fyrstu fjögur stökin"], c: 0 },
    { q: "Hvað gerist þegar 2 * a er reiknað fyrir tölulegt NumPy-fylki a?", a: ["Fylkið er endurtekið tvisvar", "Hvert stak er margfaldað með 2", "Aðeins fyrsta stakið er margfaldað", "NumPy leyfir ekki margföldun með tölu"], c: 1 },
    { q: "Hvað lýsir best vigruðum (vectorized) NumPy-aðgerðum?", a: ["Þær vinna á heilu fylki án sýnilegrar Python-lykkju", "Þær breyta alltaf fylki í vigur", "Þær virka aðeins á 3D-fylki", "Þær krefjast list comprehension"], c: 0 },
    { q: "Hvaða segð velur öll gildi í a sem eru stærri en 0?", a: ["a.where(> 0)", "a[a > 0]", "a.select(0)", "a[0 > a]"], c: 1 },
    { q: "Hvað skilar np.mean(a)?", a: ["Miðgildi", "Stærsta gildi", "Meðaltal", "Staðalfrávik"], c: 2 },
    { q: "Hvaða fall reiknar staðalfrávik gilda í fylki?", a: ["np.var(a)", "np.std(a)", "np.mean(a)", "np.diff(a)"], c: 1 },
    { q: "Hvað gerir a.reshape(2, 3) þegar a inniheldur sex stök?", a: ["Breytir a í 2 × 3 fylki", "Velur stök 2 og 3", "Bætir fimm stökum við a", "Reiknar tvær og þrjár afleiður"], c: 0 },
    { q: "Hvaða skilyrði þarf venjulega að vera uppfyllt svo reshape virki?", a: ["Nýja lögunin þarf að hafa sama heildarfjölda staka", "Fylkið þarf að innihalda aðeins heiltölur", "Fyrsta víddin þarf að vera stærri", "Fylkið þarf fyrst að vera raðað"], c: 0 },
    { q: "Hvað gerir np.concatenate([a, b]) fyrir samhæf einvíð fylki?", a: ["Leggur a og b saman stak fyrir stak", "Tengir fylkin enda í enda", "Finnur sameiginleg stök", "Margfaldar fylkin"], c: 1 },
    { q: "Hvað er broadcasting í NumPy?", a: ["Að senda fylki yfir net", "Reglur sem leyfa aðgerðir á fylkjum með samhæfar en ólíkar lögunir", "Að prenta fylki á skjá", "Að breyta öllum gildum í heiltölur"], c: 1 },
    { q: "Hvað táknar NaN oftast í gagnasafni?", a: ["Neikvætt heiltölugildi", "Gildi sem vantar eða er óskilgreint", "Nafn fylkis", "Náttúrulegan logra"], c: 1 },
    { q: "Hvaða fall má nota til að finna hvar gildi eru NaN?", a: ["np.isnan(a)", "np.nanfind(a)", "np.isempty(a)", "np.missing(a)"], c: 0 },
    { q: "Af hverju er gagnlegt að skoða tímaraðir með NumPy?", a: ["NumPy getur geymt og reiknað skilvirkt á röðum mæligilda", "NumPy raðar alltaf gögnum sjálfkrafa eftir dagsetningu", "NumPy fjarlægir allar mæliskekkjur", "NumPy umbreytir öllum tímaröðum í myndir"], c: 0 }
  ]},
  2: { title: "Aðhvarfsgreining", questions: [
    { q: "Hvert er meginmarkmið aðhvarfsgreiningar?", a: ["Að máta líkan að mæligögnum", "Að raða gögnum í stafrófsröð", "Að umbreyta öllum gildum í heiltölur", "Að fjarlægja allar óvissur úr mælingum"], c: 0 },
    { q: "Hvenær telst líkan línulegt í aðhvarfsgreiningu?", a: ["Þegar grafið er bein lína", "Þegar líkanið er línulegt í óháðu breytunni x", "Þegar líkanið er línulegt í stikunum sem á að ákvarða", "Þegar aðeins ein stika kemur fyrir"], c: 2 },
    { q: "Hver þessara líkana er ólínulegt í stikunum β₁ og β₂?", a: ["β₁ + β₂x", "β₁x² + β₂x", "β₁ + β₂sin(x)", "β₁tan(β₂x)"], c: 3 },
    { q: "Hvað lágmarkar aðferð minnstu fervika?", a: ["Summu mæligildanna", "Summu fervika leifanna", "Fjölda stika í líkaninu", "Stærsta einstaka mæligildið"], c: 1 },
    { q: "Hvað er leif (residual) fyrir mælingu i?", a: ["Munurinn yᵢ − f(xᵢ; θ)", "Margfeldið yᵢf(xᵢ; θ)", "Meðaltal allra x-gilda", "Afleiða líkansins"], c: 0 },
    { q: "Hvaða SciPy-fall er sérstaklega ætlað almennri ólínulegri líkanmátun?", a: ["scipy.stats.linregress", "scipy.optimize.curve_fit", "scipy.linalg.det", "scipy.fft.fftfreq"], c: 1 },
    { q: "Hvað gerir scipy.stats.linregress fyrst og fremst?", a: ["Mátar beina línu að tveimur gagnarunum", "Leysir hvaða ólínulega líkan sem er", "Reiknar Fourier-ummyndun", "Finnur eigingildi fylkis"], c: 0 },
    { q: "Hvað táknar kí-kvaðrat stærðin yfirleitt í líkanmátun?", a: ["Samanlagðan, oft óvissuveginn, mismun líkans og gagna", "Fjölda mælipunkta í öðru veldi", "Hallatölu beinnar línu", "Líkur á að öll gögn séu nákvæm"], c: 0 },
    { q: "Af hverju skipta upphafsgildi oft máli í ólínulegri mátun?", a: ["Þau ákveða fjölda mælipunkta", "Bestunarlandslag getur haft staðbundin lágmörk", "Þau breyta einingum gagnanna", "Þau gera líkanið sjálfkrafa línulegt"], c: 1 },
    { q: "Hver er réttur munur á bestun og aðhvarfsgreiningu?", a: ["Hugtökin eru alltaf nákvæmlega þau sömu", "Bestun leitar að há- eða lággildi markfalls; aðhvarfsgreining notar slíka leit til að máta líkan að gögnum", "Aðhvarfsgreining virkar aðeins án gagna", "Bestun má aðeins nota á beinar línur"], c: 1 }
  ]},
  3: { title: "Tíðniróf og Fourier-ummyndanir", questions: [
    { q: "Hvað sýnir Fourier-ummyndun tímaröðar?", a: ["Hvernig merkið skiptist milli tíðniþátta", "Aðeins fyrsta mæligildið", "Nákvæma orsök alls suðs", "Dagsetningu hverrar mælingar"], c: 0 },
    { q: "Hver eru tengsl horntíðni ω og tíðni f?", a: ["ω = f/2π", "ω = 2πf", "ω = f²", "ω = 1/f"], c: 1 },
    { q: "Hvað stendur DFT fyrir?", a: ["Differential Function Test", "Discrete Fourier Transform", "Direct Frequency Timing", "Data Filtering Table"], c: 1 },
    { q: "Hver er helsti reiknilegi kostur FFT yfir beina DFT-útreikninga?", a: ["FFT þarf engin gögn", "FFT minnkar reiknitíma úr um N² í um N log N", "FFT gefur alltaf aðeins eina tíðni", "FFT fjarlægir sjálfkrafa allt suð"], c: 1 },
    { q: "Hvaða NumPy-fall reiknar hraða Fourier-ummyndun?", a: ["np.fft.fft", "np.signal.transform", "np.fourier.series", "np.linalg.frequency"], c: 0 },
    { q: "Hvað gerir np.fft.fftfreq(n, d)?", a: ["Skilar tíðnistökum fyrir FFT", "Finnur stærsta útslagið", "Endurraðar tímaröð eftir tíma", "Reiknar meðaltal merkisins"], c: 0 },
    { q: "Hvernig birtist hreint sínusmerki í tvíhliða tíðnirófi?", a: ["Sem toppar við jákvæða og neikvæða tíðni", "Sem fast gildi við allar tíðnir", "Aðeins sem toppur við núlltíðni", "Það hverfur alveg"], c: 0 },
    { q: "Hvar birtist fasti (DC-þáttur) í tíðnirófi?", a: ["Við hæstu mögulegu tíðni", "Við núlltíðni", "Við Nyquist-tíðni eingöngu", "Jafnt yfir allar tíðnir"], c: 1 },
    { q: "Hvað er tíðniupplausn FFT þegar mælitíðni er fₛ og punktarnir eru N?", a: ["N/fₛ", "fₛ/N", "fₛN", "1/(fₛN)"], c: 1 },
    { q: "Hvað er tíðnileki (spectral leakage)?", a: ["Orka einnar tíðni dreifist yfir nálæg tíðnistök vegna endanlegs mæliglugga", "Gögn tapast úr tölvuminni", "Neikvæðar tíðnir verða jákvæðar", "FFT skilar aðeins núllum"], c: 0 }
  ]},
  4: { title: "Tíðniróf og földun", questions: [
    { q: "Hvernig er földun tveggja falla f og g táknuð?", a: ["f + g", "f * g", "f / g", "f − g"], c: 1 },
    { q: "Hvað gerir np.convolve(a, v)?", a: ["Reiknar strjála földun runanna", "Reiknar aðeins summu a", "Raðar v í stærðarröð", "Finnur Fourier-tíðnir án földunar"], c: 0 },
    { q: "Hvernig má túlka hlaupandi meðaltal?", a: ["Sem földun með jöfnum, normalíseruðum glugga", "Sem ólínulega aðhvarfsgreiningu", "Sem afleiðu tímaraðar", "Sem slembitölugjafa"], c: 0 },
    { q: "Hvað gerist venjulega þegar gluggi hlaupandi meðaltals er stækkaður?", a: ["Merkið verður sléttara en hraðar breytingar deyfast meira", "Meira hátíðnisuð kemst í gegn", "Fjöldi stika verður alltaf núll", "Tímaröðin verður nákvæmlega óbreytt"], c: 0 },
    { q: "Hvað segir földunarsetningin?", a: ["Fourier-ummyndun földunar er margfeldi Fourier-ummyndanna", "Földun og samlagning eru alltaf eins", "Fourier-ummyndun földunar er afleiða merkisins", "Földun virkar aðeins á fasta"], c: 0 },
    { q: "Hvað skilar mode='same' í np.convolve?", a: ["Úttaki með sömu lengd og stærra inntakið", "Allri fullri földuninni án tillits til lengdar", "Aðeins einu gildi", "Engu nema fylkin séu jafnlöng"], c: 0 },
    { q: "Hver er Fourier-ummyndun afleiðunnar f′(t)?", a: ["iωF(ω)", "F(ω)/iω í öllum tilvikum", "F(ω)²", "F(0)"], c: 0 },
    { q: "Hvað segir regla Parsevals fyrir strjálar raðir?", a: ["Orka í tíma- og tíðnirúmi er jafngild með réttri normalíseringu", "Allar Fourier-ummyndanir hafa sömu orku", "Földun varðveitir alltaf lengd", "Suð hefur enga orku"], c: 0 },
    { q: "Hvaða tíðnir hleypir lághleypisía helst í gegn?", a: ["Tíðnum neðan við valin mörk", "Aðeins hæstu tíðninni", "Engum tíðnum", "Öllum tíðnum með nákvæmlega sama styrk"], c: 0 },
    { q: "Til hvers er Hann-gluggi meðal annars notaður?", a: ["Til að mýkja enda mæliglugga og draga úr tíðnileka", "Til að auka fjölda stika í líkani", "Til að breyta öllum gögnum í heiltölur", "Til að reikna eingöngu núlltíðni"], c: 0 }
  ]}
  };
  const chapterMatch = window.location.pathname.match(/\/kaflar\/(?:gagnaurvinnsla|adhvarfsgreining|tidnirof-og-fourier-ummyndanir|tidnirof-og-foldun)\/prof/);
  const chapterBySlug = { "gagnaurvinnsla": 1, "adhvarfsgreining": 2, "tidnirof-og-fourier-ummyndanir": 3, "tidnirof-og-foldun": 4 };
  const slug = chapterMatch ? chapterMatch[0].split("/teaching/edl408/")[2] : "gagnaurvinnsla";
  const exam = exams[chapterBySlug[slug]];
  const questions = exam.questions;

  const form = document.querySelector("#numpy-exam");
  if (!form) return;
  const container = document.querySelector("#exam-questions");
  const error = document.querySelector("#exam-error");
  const confirmation = document.querySelector("#send-confirmation");
  const result = document.querySelector("#exam-result");
  const recipient = document.querySelector("#recipient-email");
  let pendingScore = null;

  recipient.value = localStorage.getItem("edl408-exam-recipient") || "";
  questions.forEach((item, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "exam-question";
    fieldset.innerHTML = `<legend><span>${index + 1}</span>${item.q}</legend>` + item.a.map((answer, answerIndex) =>
      `<label><input type="radio" name="q${index}" value="${answerIndex}"><span>${answer}</span></label>`
    ).join("");
    container.appendChild(fieldset);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    error.hidden = true;
    const name = document.querySelector("#student-name").value.trim();
    const email = recipient.value.trim();
    const selections = questions.map((_, index) => form.querySelector(`input[name="q${index}"]:checked`));
    const missing = selections.reduce((list, selection, index) => selection ? list : [...list, index + 1], []);
    if (!name || !recipient.validity.valid || missing.length) {
      const parts = [];
      if (!name) parts.push("skráðu nafn");
      if (!recipient.validity.valid) parts.push("skráðu gilt netfang viðtakanda");
      if (missing.length) parts.push(`svaraðu spurningum ${missing.join(", ")}`);
      error.textContent = `Áður en þú getur skilað: ${parts.join(" og ")}.`;
      error.hidden = false;
      error.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    localStorage.setItem("edl408-exam-recipient", email);
    const score = selections.reduce((sum, selection, index) => sum + (Number(selection.value) === questions[index].c ? 1 : 0), 0);
    pendingScore = score;
    const answerLines = selections.map((selection, index) => {
      const chosen = Number(selection.value);
      return `${index + 1}. ${questions[index].a[chosen]}`;
    });
    const body = [
      `EÐL408 — Próf úr ${exam.title}`, "", `Nafn: ${name}`, `Niðurstaða: ${score}/${questions.length} (${Math.round(score / questions.length * 100)}%)`, "", "Svör:", ...answerLines
    ].join("\n");
    const subject = `EÐL408 próf — ${name}`;
    confirmation.hidden = false;
    confirmation.scrollIntoView({ behavior: "smooth", block: "center" });
    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  document.querySelector("#confirm-sent").addEventListener("click", () => {
    if (pendingScore === null) return;
    const percent = Math.round(pendingScore / questions.length * 100);
    result.innerHTML = `<p class="result-kicker">Niðurstaða</p><h2>${pendingScore} af ${questions.length} rétt</h2><p>Þú fékkst <strong>${percent}%</strong> á prófinu.</p>`;
    result.hidden = false;
    confirmation.hidden = true;
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  });
})();
