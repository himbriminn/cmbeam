(() => {
  const cards = [
    ["Fylki", "np.array([1, 2, 3])", "array", "NumPy-fylki geymir tölur í skipulegri, hraðvirkri gagnagerð. Öll stök hafa venjulega sömu gagnategund.", "[1, 2, 3] → ndarray"],
    ["Núllfylki", "np.zeros((2, 3))", "zeros", "Býr til fylki af tiltekinni lögun þar sem öll stök eru núll. Hentar vel til að taka frá minni fyrir niðurstöður.", "2 raðir × 3 dálkar"],
    ["Einingafylki", "np.ones((2, 3))", "ones", "Býr til fylki þar sem öll stök eru einn. Með margföldun má auðveldlega fylla fylki með öðru föstu gildi.", "5 * np.ones(4) → [5, 5, 5, 5]"],
    ["Talnaruna", "np.arange(0, 10, 2)", "arange", "Myndar reglulega talnarunu með upphafsgildi, lokamörkum og skrefstærð. Lokamörkin sjálf eru ekki tekin með.", "[0, 2, 4, 6, 8]"],
    ["Jafnt bil", "np.linspace(0, 1, 5)", "linspace", "Skiptir bili í fyrirfram ákveðinn fjölda jafndreifðra punkta. Báðir endapunktar eru sjálfgefið teknir með.", "[0, 0.25, 0.5, 0.75, 1]"],
    ["Slembitölur", "np.random.rand(2, 3)", "random", "Býr til slembitölur. Slembifræ tryggir að sama tilraun megi endurtaka.", "rng = np.random.default_rng(42)"],
    ["Lögun", "a.shape", "shape", "Lögun segir hversu mörg stök eru eftir hverjum ás fylkisins.", "(3, 4) merkir 3 raðir og 4 dálka"],
    ["Endurmótun", "a.reshape(2, 6)", "reshape", "Breytir lögun fylkis án þess að breyta röð gagnanna. Heildarfjöldi staka verður að haldast sá sami.", "12 stök → 2 × 6"],
    ["Fjöldi vídda", "a.ndim", "ndim", "Segir hversu marga ása eða víddir fylkið hefur.", "vigur: 1 · tafla: 2 · gagnateningur: 3"],
    ["Gagnategund", "a.dtype", "dtype", "Gagnategundin segir hvernig hvert stak er geymt, til dæmis sem heiltala eða kommutala.", "int64 · float64 · bool"],
    ["Stakaval", "a[1, 2]", "index", "Velur eitt stak með staðsetningu þess. Talning hefst á núlli.", "a[0] er fyrsta stakið"],
    ["Sneið", "a[1:4]", "slice", "Velur samfelldan hluta fylkis. Upphafið er tekið með en lokavísirinn ekki.", "vísar 1, 2 og 3"],
    ["Skilyrt val", "a[a > 0]", "mask", "Boolean-gríma velur aðeins þau stök sem uppfylla skilyrði.", "neikvæð gildi síast frá"],
    ["Útvíkkun", "a + 5", "broadcast", "Broadcasting gerir NumPy kleift að framkvæma aðgerð á fylkjum af samhæfðum lögunum án handvirkra lykkja.", "5 leggst við hvert stak"],
    ["Summa", "np.sum(a)", "sum", "Leggur saman stök fylkis. Með axis má velja hvort lagt sé saman eftir röðum eða dálkum.", "np.sum(a, axis=0)"],
    ["Meðaltal", "np.mean(a)", "mean", "Reiknar reiknað meðaltal allra staka eða eftir tilteknum ás.", "summa / fjöldi"],
    ["Staðalfrávik", "np.std(a)", "std", "Mælir dreifingu gagnanna um meðaltalið. Lítið gildi merkir að gögnin liggja þétt saman.", "σ = √meðaltal((x−μ)²)"],
    ["Lágmark og hámark", "np.min(a), np.max(a)", "minmax", "Finnur minnsta og stærsta gildi fylkis.", "gildin sjálf"],
    ["Staðsetning útgilda", "np.argmin(a), np.argmax(a)", "arg", "Skilar vísi minnsta eða stærsta staksins, ekki gildinu sjálfu.", "hvar er toppurinn?"],
    ["Sameining", "np.concatenate((a, b))", "concat", "Tengir fylki saman eftir ás sem þegar er til.", "a + b eftir axis"],
    ["Skipting", "np.split(a, 3)", "split", "Skiptir einu fylki í nokkra hluta. Hlutarnir þurfa að passa við valda skiptingu.", "eitt fylki → þrjú fylki"],
    ["Stöflun", "np.vstack((a, b))", "stack", "Staflar fylkjum lóðrétt eða lárétt og getur þannig búið til nýjan ás.", "vstack: fleiri raðir"],
    ["Einingafylki", "np.eye(3)", "eye", "Býr til ferningsfylki með einum á hornalínunni og núllum annars staðar.", "I · a = a"],
    ["Fylkjamargföldun", "A @ B", "matmul", "Margfaldar fylki samkvæmt reglum línulegrar algebru. Innri víddir fylkjanna verða að passa.", "(m×n) @ (n×p) → (m×p)"]
  ];
  const app = document.getElementById("flashcards-app");
  if (!app) return;
  const card = document.getElementById("flashcards-card");
  const title = document.getElementById("flashcard-title");
  const backTitle = document.getElementById("flashcard-back-title");
  const code = document.getElementById("flashcard-code");
  const desc = document.getElementById("flashcard-description");
  const example = document.getElementById("flashcard-example");
  const graphic = document.getElementById("flashcard-graphic");
  const counter = document.getElementById("flashcards-counter");
  const dots = document.getElementById("flashcards-dots");
  let index = 0;

  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button"; dot.className = "flashcards-dot";
    dot.setAttribute("aria-label", `Spjald ${i + 1}`);
    dot.addEventListener("click", () => show(i));
    dots.appendChild(dot);
  });

  function graphicHTML(kind) {
    const svg = body => `<svg class="np-concept" viewBox="0 0 240 130" role="img" aria-hidden="true">${body}</svg>`;
    const cell = (x,y,v,cls="") => `<g class="${cls}"><rect x="${x}" y="${y}" width="34" height="30" rx="4"/><text x="${x+17}" y="${y+20}">${v}</text></g>`;
    const arrow = (x1,y1,x2,y2) => `<path class="ink-line arrow" d="M${x1} ${y1} L${x2} ${y2}"/>`;
    const diagrams = {
      array: () => svg(`<path class="bracket" d="M46 19H35v92h11M194 19h11v92h-11"/>${[3,7,2,9,4,6].map((v,i)=>cell(51+(i%3)*47,29+Math.floor(i/3)*42,v)).join("")}<text class="caption" x="120" y="125">2 × 3 ndarray</text>`),
      zeros: () => svg(`${[0,0,0,0,0,0].map((v,i)=>cell(49+(i%3)*47,22+Math.floor(i/3)*40,v,"muted")).join("")}<path class="memory" d="M26 15v91M214 15v91"/><text class="caption" x="120" y="123">minni tekið frá og núllstillt</text>`),
      ones: () => svg(`${[1,1,1,1,1,1].map((v,i)=>cell(49+(i%3)*47,22+Math.floor(i/3)*40,v,"filled")).join("")}<path class="accent-line" d="M45 102h150"/><text class="caption" x="120" y="123">sama upphafsgildi alls staðar</text>`),
      arange: () => svg(`<path class="ink-line arrow" d="M28 69H211"/>${[0,2,4,6,8].map((v,i)=>`<g><circle cx="${43+i*38}" cy="69" r="8"/><text x="${43+i*38}" y="48">${v}</text></g>`).join("")}<path class="accent-line" d="M43 91h38m0 0h38m0 0h38m0 0h38"/><text class="caption" x="120" y="119">skref = 2 · 10 er ekki tekið með</text>`),
      linspace: () => svg(`<path class="ink-line" d="M30 67H210"/>${[0,.25,.5,.75,1].map((v,i)=>`<g><circle class="filled-dot" cx="${30+i*45}" cy="67" r="7"/><text x="${30+i*45}" y="47">${v}</text></g>`).join("")}<path class="measure" d="M30 87v8h180v-8M75 87v8M120 87v8M165 87v8"/><text class="caption" x="120" y="119">5 punktar · 4 jafnstór bil</text>`),
      random: () => svg(`<rect class="die" x="35" y="22" width="72" height="72" rx="12"/>${[[52,39],[89,39],[70,58],[52,77],[89,77]].map(p=>`<circle class="filled-dot" cx="${p[0]}" cy="${p[1]}" r="6"/>`).join("")}<path class="accent-line arrow" d="M119 58h35"/>${[.77,.12,.43].map((v,i)=>cell(161,18+i*35,v)).join("")}<text class="caption" x="120" y="121">slembigjafi → endurtakanleg fylki</text>`),
      shape: () => svg(`${[1,2,3,4,5,6,7,8,9,10,11,12].map((v,i)=>cell(48+(i%4)*38,18+Math.floor(i/4)*33,"")).join("")}<path class="measure" d="M48 8h148M48 5v7M196 5v7"/><text x="122" y="8">4 dálkar</text><path class="measure" d="M35 18v96M32 18h7M32 114h7"/><text class="vertical" x="22" y="69">3 raðir</text>`),
      reshape: () => svg(`${[1,2,3,4,5,6].map((v,i)=>cell(12+i*36,22,v)).join("")}${arrow(113,58,113,82)}${[1,2,3,4,5,6].map((v,i)=>cell(55+(i%3)*43,87+Math.floor(i/3)*0,v)).join("")}<text class="caption" x="120" y="126">1 × 6 → 2 × 3 · röðin helst</text>`),
      ndim: () => svg(`<path class="ink-line" d="M22 93h47"/><text x="45" y="113">1D</text><rect x="88" y="56" width="54" height="38" rx="4"/><path class="grid-line" d="M115 56v38M88 75h54"/><text x="115" y="113">2D</text><path class="cube" d="M170 52l28-15 24 16v37l-28 16-24-16zM170 52l24 16 28-15M194 68v38"/><text x="196" y="124">3D</text>`),
      dtype: () => svg(`<g class="type-card"><rect x="17" y="28" width="58" height="59" rx="8"/><text x="46" y="57">42</text><text class="caption" x="46" y="78">int</text></g><g class="type-card"><rect x="91" y="28" width="58" height="59" rx="8"/><text x="120" y="57">3.14</text><text class="caption" x="120" y="78">float</text></g><g class="type-card"><rect x="165" y="28" width="58" height="59" rx="8"/><text x="194" y="57">T</text><text class="caption" x="194" y="78">bool</text></g><path class="accent-line" d="M27 103h186"/><text class="caption" x="120" y="122">eitt geymslusnið fyrir allt fylkið</text>`),
      index: () => svg(`<text class="axis-label" x="75" y="18">0</text><text class="axis-label" x="114" y="18">1</text><text class="axis-label" x="153" y="18">2</text><text class="axis-label" x="30" y="49">0</text><text class="axis-label" x="30" y="83">1</text>${[5,8,2,7,4,9].map((v,i)=>cell(57+(i%3)*39,27+Math.floor(i/3)*34,v,i===4?"selected":"")).join("")}<path class="accent-line arrow" d="M169 82h42"/><text class="caption" x="190" y="103">a[1,1] = 4</text>`),
      slice: () => svg(`${[0,1,2,3,4,5].map((v,i)=>cell(9+i*37,43,v,i>=1&&i<4?"selected":"")).join("")}<path class="brace" d="M46 87q0 10 10 10h89q10 0 10-10"/><text class="caption" x="101" y="118">a[1:4] velur 1, 2 og 3</text>`),
      mask: () => svg(`${[-3,2,-1,5,0,4].map((v,i)=>cell(9+i*37,28,v,v>0?"accepted":"rejected")).join("")}<text class="rule" x="120" y="79">a &gt; 0</text>${arrow(83,88,83,105)}${arrow(157,88,157,105)}<text class="caption" x="120" y="124">[2, 5, 4] fara í gegn</text>`),
      broadcast: () => svg(`${[1,2,3].map((v,i)=>cell(20+i*39,22,v)).join("")}<text class="operator" x="151" y="46">+</text><g class="scalar"><circle cx="188" cy="35" r="20"/><text x="188" y="42">5</text></g>${arrow(111,66,111,86)}${[6,7,8].map((v,i)=>cell(64+i*39,91,v,"filled")).join("")}<text class="caption" x="120" y="128">5 er útvíkkað yfir hvert stak</text>`),
      sum: () => svg(`${[2,4,1,3,5,6].map((v,i)=>cell(28+(i%3)*39,18+Math.floor(i/3)*34,v)).join("")}<path class="accent-line arrow" d="M155 50h29"/><text class="sigma" x="207" y="65">Σ</text><text class="caption" x="207" y="88">= 21</text><text class="caption" x="92" y="120">öll stök falla saman í eina summu</text>`),
      mean: () => svg(`<path class="ink-line" d="M22 92H218"/>${[26,52,37,76,63].map((h,i)=>`<rect class="data-bar" x="${34+i*36}" y="${92-h}" width="18" height="${h}"/>`).join("")}<path class="mean-line" d="M25 47H215"/><text class="caption" x="190" y="40">μ = 50,8</text>`),
      std: () => svg(`<path class="bell" d="M18 100C57 100 68 28 120 28s63 72 102 72"/><path class="mean-line" d="M120 22v83"/><path class="measure" d="M75 83v12h90V83"/><text x="120" y="113">±σ</text><circle class="filled-dot" cx="88" cy="67" r="5"/><circle class="filled-dot" cx="151" cy="63" r="5"/>`),
      minmax: () => svg(`<path class="ink-line" d="M22 99H218"/>${[42,76,28,91,57].map((h,i)=>`<rect class="data-bar ${i===2?"min":i===3?"max":""}" x="${34+i*36}" y="${99-h}" width="18" height="${h}"/>`).join("")}<text class="caption" x="115" y="84">min</text><text class="caption" x="169" y="13">max</text>`),
      arg: () => svg(`${[4,8,3,11,6].map((v,i)=>cell(22+i*40,44,v,i===3?"selected":"")).join("")}<text class="axis-label" x="39" y="34">0</text><text class="axis-label" x="79" y="34">1</text><text class="axis-label" x="119" y="34">2</text><text class="axis-label" x="159" y="34">3</text><text class="axis-label" x="199" y="34">4</text><path class="accent-line arrow" d="M159 84v22"/><text class="caption" x="159" y="124">argmax = 3</text>`),
      concat: () => svg(`${[1,2,3].map((v,i)=>cell(13+i*36,28,v)).join("")}<text class="operator" x="132" y="51">+</text>${[4,5].map((v,i)=>cell(153+i*36,28,v,"accent-cell")).join("")}${arrow(118,67,118,88)}${[1,2,3,4,5].map((v,i)=>cell(29+i*36,93,v,i>2?"accent-cell":"")).join("")}`),
      split: () => svg(`${[1,2,3,4,5,6].map((v,i)=>cell(9+i*37,22,v)).join("")}<path class="cut" d="M83 15v47M157 15v47"/>${arrow(46,72,46,93)}${arrow(120,72,120,93)}${arrow(194,72,194,93)}<text class="caption" x="46" y="116">[1,2]</text><text class="caption" x="120" y="116">[3,4]</text><text class="caption" x="194" y="116">[5,6]</text>`),
      stack: () => svg(`${[1,2,3].map((v,i)=>cell(18+i*36,16,v)).join("")}${[4,5,6].map((v,i)=>cell(18+i*36,59,v,"accent-cell")).join("")}${arrow(143,55,174,55)}${[1,2,3,4,5,6].map((v,i)=>cell(187+(i%3)*0,5+Math.floor(i/3)*34,"")).join("")}<path class="stacked-block" d="M178 13h45v34h-45zM178 57h45v34h-45z"/><text class="caption" x="120" y="122">nýjar raðir eftir lóðrétta stöflun</text>`),
      eye: () => svg(`${[1,0,0,0,1,0,0,0,1].map((v,i)=>cell(54+(i%3)*43,8+Math.floor(i/3)*34,v,v===1?"diagonal":"muted")).join("")}<path class="accent-line" d="M52 5l132 105"/><text class="caption" x="120" y="127">einar á hornalínu · núll annars staðar</text>`),
      matmul: () => svg(`<g class="matrix"><path class="bracket" d="M24 21H15v70h9M83 21h9v70h-9"/><text x="39" y="48">a b</text><text x="39" y="75">c d</text></g><text class="operator" x="112" y="61">@</text><g class="matrix"><path class="bracket" d="M139 21h-9v70h9M198 21h9v70h-9"/><text x="154" y="48">e f</text><text x="154" y="75">g h</text></g><path class="accent-line" d="M27 32h53M143 32v48"/><text class="caption" x="120" y="118">röð · dálkur → eitt stak</text>`)
    };
    return (diagrams[kind] || diagrams.array)();
  }
  function show(next) {
    index = (next + cards.length) % cards.length;
    card.classList.remove("is-flipped");
    const [t,c,g,d,e] = cards[index];
    title.textContent=t; backTitle.textContent=t; code.textContent=c; desc.textContent=d; example.textContent=e;
    graphic.innerHTML=graphicHTML(g);
    counter.textContent=`${index + 1} / ${cards.length}`;
    [...dots.children].forEach((dot,i)=>dot.classList.toggle("active",i===index));
  }
  function flip(){ card.classList.toggle("is-flipped"); }
  card.addEventListener("click", flip);
  document.getElementById("flashcards-prev").addEventListener("click",()=>show(index-1));
  document.getElementById("flashcards-next").addEventListener("click",()=>show(index+1));
  async function fullscreen(){ if(!document.fullscreenElement) await app.requestFullscreen(); else await document.exitFullscreen(); }
  document.getElementById("flashcards-fullscreen").addEventListener("click",fullscreen);
  document.addEventListener("keydown",e=>{
    if(e.key==="ArrowLeft"){e.preventDefault();show(index-1);}
    if(e.key==="ArrowRight"){e.preventDefault();show(index+1);}
    if(e.key===" " && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();flip();}
    if(e.key.toLowerCase()==="f"){e.preventDefault();fullscreen();}
  });
  let startX=0;
  card.addEventListener("touchstart",e=>startX=e.changedTouches[0].clientX,{passive:true});
  card.addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>55)show(index+(dx<0?1:-1));},{passive:true});
  show(0);
})();
