document.addEventListener("DOMContentLoaded", () => {
  const s = document.getElementById("search");
  const items = document.querySelectorAll(".code, .paidcode");

  s.oninput = () => {
    const q = s.value.toLowerCase();
    items.forEach(i => {
      i.style.display = i.textContent.toLowerCase().includes(q)
        ? ""
        : "none";
    });
  };
});
function copyCODE() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pro HTML Editor</title>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Fira Code', monospace;
            background-color: #1e1e2f;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            height: 100vh;
        }

        header {
            background-color: #2c2c3e;
            padding: 15px 20px;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            border-bottom: 2px solid #444;
        }

        main {
            display: flex;
            flex: 1;
            overflow: hidden;
        }

        .editor-container {
            width: 50%;
            display: flex;
            flex-direction: column;
            border-right: 2px solid #444;
        }

        textarea {
            flex: 1;
            background-color: #1e1e2f;
            color: #ffffff;
            border: none;
            padding: 15px;
            font-size: 16px;
            resize: none;
            outline: none;
        }

        textarea::placeholder {
            color: #888;
        }

        .preview-container {
            width: 50%;
            background-color: #fff;
            overflow: auto;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
            background-color: #fff;
        }

        @media(max-width: 900px){
            main {
                flex-direction: column;
            }
            .editor-container, .preview-container {
                width: 100%;
                height: 50%;
            }
        }
    </style>
</head>
<body>
    <header>Pro HTML Editor</header>
    <main>
        <div class="editor-container">
            <textarea id="editor" placeholder="Write your HTML code here..."></textarea>
        </div>
        <div class="preview-container">
            <iframe id="preview"></iframe>
        </div>
    </main>

    <script>
        const editor = document.getElementById('editor');
        const preview = document.getElementById('preview');

        // Initial HTML content
        editor.value = "<!-- Write your HTML here -->";

        function updatePreview() {
            preview.srcdoc = editor.value; // Only HTML preview
        }

        editor.addEventListener('input', updatePreview);

        // Initial render
        updatePreview();
    </script>
</body>
</html>


  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}



 function copyCODE2() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>TOP SOFT Super Search</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: #111;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
  background: linear-gradient(135deg, #0078ff, #ff0044);
  background-size: 400% 400%;
  animation: gradientShift 8s ease-in-out infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Floating glowing TOP SOFT text */
.floating-title {
  font-size: 3.5em;
  font-weight: 800;
  letter-spacing: 2px;
  color: white;
  text-shadow:
    0 0 15px rgba(255,255,255,0.6),
    0 0 35px rgba(0,120,255,0.7),
    0 0 60px rgba(255,0,100,0.6);
  animation: floatTitle 4s ease-in-out infinite, glowShift 3s ease-in-out infinite alternate;
  transform: rotateX(10deg);
  margin-top: 50px;
  z-index: 2;
}
@keyframes floatTitle {
  0%, 100% { transform: translateY(0) rotateX(8deg); }
  50% { transform: translateY(-15px) rotateX(-8deg); }
}
@keyframes glowShift {
  0% { text-shadow: 0 0 20px rgba(0,120,255,0.5); }
  100% { text-shadow: 0 0 40px rgba(255,0,100,0.7); }
}

/* Search section */
.container {
  position: relative;
  z-index: 2;
  text-align: center;
  transform-style: preserve-3d;
  animation: floatUp 6s ease-in-out infinite;
}
@keyframes floatUp {
  0%, 100% { transform: translateY(0) rotateX(3deg); }
  50% { transform: translateY(-10px) rotateX(-3deg); }
}

/* 3D Search Box */
.search-box {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255,255,255,0.6);
  border-radius: 25px;
  box-shadow: 0 10px 35px rgba(255, 0, 80, 0.25),
              inset 0 0 25px rgba(255,255,255,0.4);
  padding: 25px 35px;
  margin-top: 25px;
  width: 95%;
  max-width: 850px;
  transform: rotateX(6deg);
}

.search-box input {
  width: 100%;
  padding: 16px 24px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #333;
  background: rgba(255,255,255,0.95);
  border-radius: 30px;
  text-align: center;
  box-shadow: inset 0 0 15px rgba(0,0,0,0.05);
  transition: 0.3s;
}
.search-box input:focus {
  box-shadow: 0 0 30px rgba(0,120,255,0.4), inset 0 0 10px rgba(0,120,255,0.2);
  transform: scale(1.05);
}

.search-box button {
  margin-top: 18px;
  background: linear-gradient(90deg, #0078ff, #ff0044);
  color: #fff;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 25px rgba(255,0,80,0.3);
}
.search-box button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 45px rgba(255,0,100,0.5);
}

/* Loader */
.loader {
  margin: 25px auto;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 6px solid rgba(0,120,255,0.1);
  border-top: 6px solid #0078ff;
  border-right: 6px solid #ff0044;
  animation: spin 1.2s linear infinite, glowShift 1.5s ease-in-out infinite;
  display: none;
}
@keyframes spin {
  from { transform: rotate3d(1,1,0,0deg); }
  to { transform: rotate3d(1,1,0,360deg); }
}

/* 3D Bing Results Frame */
iframe {
  margin-top: 35px;
  width: 98%;
  max-width: 1600px;
  height: 800px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 60px rgba(0,120,255,0.35);
  display: none;
  background: rgba(255,255,255,0.4);
  animation: fadeIn 1s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 768px) {
  .floating-title { font-size: 2.2em; }
  .search-box input { font-size: 16px; }
  iframe { height: 600px; width: 95%; }
}
</style>
</head>
<body onload="setTimeout(() => document.getElementById('query').focus(), 200)">

<div class="floating-title">TOP SOFT</div>

<div class="container">
  <div class="search-box" onclick="focusInput()">
    <input type="text" id="query" placeholder="Search with TOP SOFT..." />
    <button onclick="search()">Search</button>
  </div>

  <div class="loader" id="loader"></div>
  <iframe id="resultsFrame" title="Search Results"></iframe>
</div>

<script>
const input = document.getElementById("query");
const frame = document.getElementById("resultsFrame");
const loader = document.getElementById("loader");

function focusInput() { input.focus(); }

function search() {
  const q = input.value.trim();
  if (!q) return;
  loader.style.display = "block";
  frame.style.display = "none";
  frame.src = "https://www.bing.com/search?q=" + encodeURIComponent(q);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

frame.addEventListener("load", () => {
  loader.style.display = "none";
  frame.style.display = "block";
});

input.addEventListener("keypress", e => {
  if (e.key === "Enter") search();
});
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));



 }
 function copyCODE3() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio Builder</title>

<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet">

<style>
body{
    margin:0;
    font-family:'Fira Code',monospace;
    background:#1e1e2f;
    color:#fff;
}
header{
    padding:20px;
    text-align:center;
    font-size:2rem;
    font-weight:bold;
    background:#2c3e50;
}
main{
    max-width:900px;
    margin:20px auto;
    padding:10px;
}
.controls{
    display:flex;
    gap:10px;
    margin-bottom:15px;
}
button{
    padding:10px 16px;
    border:none;
    border-radius:6px;
    background:#2563eb;
    color:#fff;
    font-weight:bold;
    cursor:pointer;
}
button:hover{
    background:#1d4ed8;
}
.section{
    background:#2a2a3e;
    padding:15px;
    border-radius:10px;
    margin-bottom:15px;
    box-shadow:0 4px 12px rgba(0,0,0,.25);
}
.section .title{
    font-size:1.3rem;
    font-weight:bold;
    margin-bottom:8px;
    outline:none;
}
.section textarea{
    width:100%;
    height:70px;
    padding:10px;
    border-radius:6px;
    border:none;
    background:#1e1e2f;
    color:#fff;
    resize:vertical;
}
</style>
</head>

<body>

<header>Pro Portfolio Builder</header>

<main>
    <div class="controls">
        <button onclick="addSection()">Add Section</button>
        <button onclick="exportPortfolio()">Export HTML</button>
    </div>

    <div id="builder"></div>
</main>

<script>
const builder = document.getElementById("builder");

function addSection(){
    builder.insertAdjacentHTML("beforeend",
        '<div class="section">' +
            '<div class="title" contenteditable="true">Section Title</div>' +
            '<textarea placeholder="Write content..."></textarea>' +
        '</div>'
    );
}

function exportPortfolio(){
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Portfolio</title></head><body style="font-family:Arial;padding:20px;">';

    document.querySelectorAll(".section").forEach(section=>{
        const title = section.querySelector(".title").innerText;
        const content = section.querySelector("textarea").value;

        html += '<section style="margin-bottom:30px;">';
        html += '<div style="font-size:22px;font-weight:bold;">' + title + '</div>';
        html += '<p>' + content + '</p>';
        html += '</section>';
    });

    html += '</body></html>';

    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([html],{type:"text/html"}));
    link.download = "portfolio.html";
    link.click();
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
    

}
function copyCODE5() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Pro University Calculator</title>

<style>
body{
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#0b0e1a;
    font-family:Segoe UI, sans-serif;
}
.calculator{
    width:360px;
    padding:22px;
    border-radius:25px;
    background:linear-gradient(145deg,#14194a,#070a1f);
    box-shadow:25px 25px 60px #000;
}
#screen{
    width:100%;
    height:70px;
    border:none;
    border-radius:15px;
    background:#020312;
    color:#00ffd0;
    font-size:26px;
    padding:15px;
    box-shadow:inset 0 0 15px #00ffd040;
}
.grid{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:10px;
    margin-top:18px;
}
button{
    height:52px;
    border:none;
    border-radius:14px;
    background:#21265a;
    color:white;
    font-size:14px;
    cursor:pointer;
    box-shadow:4px 4px 15px #000;
}
button:active{
    transform:translateY(3px);
    box-shadow:inset 3px 3px 8px #000;
}
.op{background:#3f3aff}
.eq{
    grid-column:span 2;
    background:#00ffb7;
    color:#000;
    font-weight:700;
}
.clr{background:#ff3e5b}
.fn{background:#2a2e64}
</style>
</head>

<body>
<div class="calculator">

<input id="screen" readonly>

<div class="grid">
<button class="fn" onclick="add('(')">(</button>
<button class="fn" onclick="add(')')">)</button>
<button class="fn" onclick="add('pi')">π</button>
<button class="fn" onclick="add('e')">e</button>
<button class="clr" onclick="clearScreen()">C</button>

<button onclick="add('7')">7</button>
<button onclick="add('8')">8</button>
<button onclick="add('9')">9</button>
<button class="op" onclick="add('/')">÷</button>
<button class="fn" onclick="add('%')">%</button>

<button onclick="add('4')">4</button>
<button onclick="add('5')">5</button>
<button onclick="add('6')">6</button>
<button class="op" onclick="add('*')">×</button>
<button class="fn" onclick="power()">xʸ</button>

<button onclick="add('1')">1</button>
<button onclick="add('2')">2</button>
<button onclick="add('3')">3</button>
<button class="op" onclick="add('-')">−</button>
<button class="fn" onclick="factorial()">n!</button>

<button onclick="add('0')">0</button>
<button onclick="add('.')">.</button>
<button class="eq" onclick="calculate()">=</button>
<button class="op" onclick="add('+')">+</button>

<button class="fn" onclick="sqrtBtn()">√</button>
<button class="fn" onclick="add('sin(')">sin</button>
<button class="fn" onclick="add('cos(')">cos</button>
<button class="fn" onclick="add('tan(')">tan</button>

<button class="fn" onclick="add('log(')">log</button>
<button class="fn" onclick="add('ln(')">ln</button>
</div>

</div>

<script>
'use strict';

/* constants */
const pi = Math.PI;
const e  = Math.E;
const screen = document.getElementById("screen");

/* input */
function add(v){
    screen.value += v;
}

function clearScreen(){
    screen.value = "";
}

/* math functions */
function sin(x){ return Math.sin(x); }
function cos(x){ return Math.cos(x); }
function tan(x){ return Math.tan(x); }
function log(x){ return Math.log10(x); }
function ln(x){ return Math.log(x); }

/* extra */
function sqrtBtn(){
    try{
        screen.value = Math.sqrt(Number(screen.value));
    }catch{
        screen.value="Error";
    }
}

function power(){
    add('');
}

function factorial(){
    try{
        let n = Number(eval(screen.value));
        let r = 1;
        for(let i=1;i<=n;i++) r *= i;
        screen.value = r;
    }catch{
        screen.value="Error";
    }
}

/* calculate */
function calculate(){
    try{
        screen.value = eval(screen.value);
    }catch{
        screen.value = "Error";
    }
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE6() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Virtual Pet Simulation</title>
<style>
  body {
    background-color: #222;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
  }
  #pet {
    font-size: 100px;
    margin: 20px;
  }
  .stats {
    margin: 10px 0;
  }
  button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    transform: scale(1.1);
  }
  #feed { background-color: #ff4d4d; }
  #play { background-color: #4dff4d; }
  #sleep { background-color: #4d4dff; }
</style>
</head>
<body>

<h1>My Virtual Pet</h1>
<div id="pet">🐶</div>

<div class="stats">Hunger: <span id="hunger">50</span>/100</div>
<div class="stats">Happiness: <span id="happiness">50</span>/100</div>
<div class="stats">Energy: <span id="energy">50</span>/100</div>

<button id="feed">Feed 🍖</button>
<button id="play">Play ⚽</button>
<button id="sleep">Sleep 💤</button>

<script>
let hunger = 50;
let happiness = 50;
let energy = 50;

const hungerSpan = document.getElementById('hunger');
const happinessSpan = document.getElementById('happiness');
const energySpan = document.getElementById('energy');
const pet = document.getElementById('pet');

// Update stats
function updateStats() {
  hungerSpan.textContent = hunger;
  happinessSpan.textContent = happiness;
  energySpan.textContent = energy;

  // Change pet emoji based on mood
  if (happiness > 70 && energy > 50) pet.textContent = '😃';
  else if (hunger > 80) pet.textContent = '😖';
  else if (energy < 20) pet.textContent = '😴';
  else pet.textContent = '🙂';
}

// Actions
document.getElementById('feed').onclick = () => {
  hunger -= 20;
  if (hunger < 0) hunger = 0;
  energy += 10;
  if (energy > 100) energy = 100;
  updateStats();
}

document.getElementById('play').onclick = () => {
  happiness += 20;
  if (happiness > 100) happiness = 100;
  energy -= 15;
  if (energy < 0) energy = 0;
  hunger += 10;
  if (hunger > 100) hunger = 100;
  updateStats();
}

document.getElementById('sleep').onclick = () => {
  energy += 30;
  if (energy > 100) energy = 100;
  hunger += 15;
  if (hunger > 100) hunger = 100;
  updateStats();
}

// Pet stats decrease over time
setInterval(() => {
  hunger += 1;
  if (hunger > 100) hunger = 100;
  happiness -= 1;
  if (happiness < 0) happiness = 0;
  energy -= 1;
  if (energy < 0) energy = 0;
  updateStats();
}, 3000); // every 3 seconds

updateStats();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE7() {
  const code = `<!-- @ts-nocheck -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Top-Soft PDF Toolkit</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body{
  margin:0;
  padding:2rem 1rem;
  font-family:'Poppins',sans-serif;
  background:#f0f4ff;
  color:#333;
  display:flex;
  flex-direction:column;
  align-items:center;
  min-height:100vh;
}

h1{
  font-size:2.5rem;
  font-weight:600;
  color:#1a3c9a;
  margin-bottom:.3rem;
  text-align:center;
}

.subtitle{
  font-size:1.1rem;
  color:#555;
  max-width:400px;
  text-align:center;
  margin-bottom:2rem;
}

#dropZone{
  width:100%;
  max-width:480px;
  height:180px;
  border:3px dashed #4a7df0;
  background:#d8e1ff;
  border-radius:20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-size:1.3rem;
  color:#1a3c9a;
  cursor:pointer;
  box-shadow:0 8px 20px rgba(74,125,240,.3);
  transition:.3s;
}

#dropZone.dragover{
  background:#a9c3ff;
  border-color:#143f94;
}

#dropZone svg{
  width:48px;
  height:48px;
  margin-bottom:12px;
  fill:#1a3c9a;
}

#fileList{
  margin-top:1rem;
  width:100%;
  max-width:480px;
}

#actions{
  margin-top:2rem;
  display:flex;
  gap:1rem;
  flex-wrap:wrap;
  justify-content:center;
}

button{
  padding:.8rem 1.6rem;
  font-size:1.1rem;
  border:none;
  border-radius:14px;
  background:linear-gradient(135deg,#4a7df0,#1a3c9a);
  color:#fff;
  cursor:pointer;
  box-shadow:0 5px 15px rgba(26,60,154,.4);
}

button:disabled{
  background:#a0b3e6;
  cursor:not-allowed;
  box-shadow:none;
}
</style>
</head>

<body>

<h1>📄 Top-Soft PDF Toolkit</h1>
<p class="subtitle">Drag & drop PDF or image files below to merge or convert.</p>

<div id="dropZone">
  <svg viewBox="0 0 64 64">
    <path d="M32 2a5 5 0 0 0-5 5v26h-7l11 11 11-11h-7V7a5 5 0 0 0-5-5zm17 44H15a3 3 0 0 0-3 3v5a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5v-5a3 3 0 0 0-3-3z"/>
  </svg>
  Drop PDFs or Images Here
</div>

<div id="fileList"></div>

<div id="actions" style="display:none">
  <button id="mergeBtn" disabled>Merge PDFs</button>
  <button id="compressBtn" disabled>Compress PDFs</button>
  <button id="convertBtn" disabled>Images → PDF</button>
  <button id="downloadBtn" disabled>Download</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.min.js"></script>
<script>
// @ts-nocheck
/* global PDFLib */

const PDFDocument = PDFLib.PDFDocument;

const dropZone = document.getElementById('dropZone');
const fileList = document.getElementById('fileList');
const actions = document.getElementById('actions');
const mergeBtn = document.getElementById('mergeBtn');
const compressBtn = document.getElementById('compressBtn');
const convertBtn = document.getElementById('convertBtn');
const downloadBtn = document.getElementById('downloadBtn');

let files = [];
let processedBlob = null;

function updateUI(){
  if(files.length===0){
    actions.style.display='none';
    fileList.textContent='';
    return;
  }
  actions.style.display='flex';
  fileList.textContent='Files: '+files.map(f=>f.name).join(', ');
  mergeBtn.disabled=!files.some(f=>f.type==='application/pdf');
  compressBtn.disabled=!files.some(f=>f.type==='application/pdf');
  convertBtn.disabled=!files.some(f=>f.type.startsWith('image/'));
}

dropZone.ondragover=e=>{e.preventDefault();dropZone.classList.add('dragover');};
dropZone.ondragleave=e=>{e.preventDefault();dropZone.classList.remove('dragover');};
dropZone.ondrop=e=>{
  e.preventDefault();
  dropZone.classList.remove('dragover');
  files=files.concat([...e.dataTransfer.files]);
  processedBlob=null;
  updateUI();
};

dropZone.onclick=()=>{
  const i=document.createElement('input');
  i.type='file';
  i.multiple=true;
  i.accept='.pdf,image/*';
  i.onchange=e=>{
    files=files.concat([...e.target.files]);
    processedBlob=null;
    updateUI();
  };
  i.click();
};

mergeBtn.onclick=async()=>{
  processedBlob=await mergePDFs(files);
  enableDownload('merged.pdf');
};

compressBtn.onclick=async()=>{
  processedBlob=await mergePDFs(files);
  enableDownload('compressed.pdf');
};

convertBtn.onclick=async()=>{
  processedBlob=await imagesToPDF(files);
  enableDownload('converted.pdf');
};

downloadBtn.onclick=()=>{
  if(!processedBlob)return;
  const url=URL.createObjectURL(processedBlob);
  const a=document.createElement('a');
  a.href=url;
  a.download=downloadBtn.dataset.name||'file.pdf';
  a.click();
  URL.revokeObjectURL(url);
};

function enableDownload(name){
  downloadBtn.disabled=false;
  downloadBtn.dataset.name=name;
}

async function mergePDFs(list){
  const pdf=await PDFDocument.create();
  for(const f of list){
    if(f.type!=='application/pdf')continue;
    const data=await f.arrayBuffer();
    const d=await PDFDocument.load(data);
    const pages=await pdf.copyPages(d,d.getPageIndices());
    pages.forEach(p=>pdf.addPage(p));
  }
  return new Blob([await pdf.save()],{type:'application/pdf'});
}

async function imagesToPDF(list){
  const pdf=await PDFDocument.create();
  for(const f of list){
    if(!f.type.startsWith('image/'))continue;
    const data=await f.arrayBuffer();
    const img=f.type==='image/png'
      ?await pdf.embedPng(data)
      :await pdf.embedJpg(data);
    const page=pdf.addPage([img.width,img.height]);
    page.drawImage(img,{x:0,y:0,width:img.width,height:img.height});
  }
  return new Blob([await pdf.save()],{type:'application/pdf'});
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE8() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Faded-Text Scanner – Top-Soft</title>

  <!-- OCR engine -->
  <script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"></script>

  <style>
    body{
      margin:0;
      font-family:sans-serif;
      background:#0f172a;
      color:#f8fafc;
      display:flex;
      justify-content:center;
      align-items:flex-start;
      padding:2rem;
    }
    .card{
      background:#1e293b;
      padding:1.5rem 2rem;
      border-radius:1.25rem;
      max-width:900px;
      width:100%;
      box-shadow:0 4px 40px #0005;
    }
    h1{font-size:1.75rem;margin:0 0 1rem;font-weight:700}
    input,button,textarea{
      width:100%;
      margin-top:1rem;
      border-radius:.65rem;
      border:none;
    }
    input{padding:1rem;background:#334155;color:#f8fafc}
    button{
      padding:1rem;
      font-weight:600;
      background:#3b82f6;
      cursor:pointer;
      transition:.2s;
      color:white;
    }
    button:disabled{opacity:.4;cursor:not-allowed}
    canvas{
      margin-top:.75rem;
      max-width:100%;
      border:2px dashed #334155
    }
    textarea{
      height:12rem;
      background:#0f172a;
      padding:1rem;
      color:#f8fafc;
      resize:vertical;
    }
  </style>
</head>
<body>

<div class="card">
  <h1>📄 Faded-Text Scanner</h1>

  <input id="imageInput" type="file" accept="image/*" />
  <canvas id="preview" hidden></canvas>

  <button id="scanBtn" disabled>🔍 Enhance & Extract</button>

  <textarea id="output" placeholder="Recognised text will appear here…" readonly></textarea>

  <button id="openrouterBtn" disabled>🪄 Clean Up with AI</button>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {

  const imgInput = document.getElementById("imageInput");
  const canvas   = document.getElementById("preview");
  const scanBtn  = document.getElementById("scanBtn");
  const outBox   = document.getElementById("output");
  const aiBtn    = document.getElementById("openrouterBtn");

  if (!imgInput || !canvas || !scanBtn || !outBox || !aiBtn) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let snapshot = null;

  /* -------- 1. pick image ---------- */
  imgInput.addEventListener("change", async () => {
    const file = imgInput.files && imgInput.files[0];
    if (!file) return;

    snapshot = await createImageBitmap(file);
    canvas.width  = snapshot.width;
    canvas.height = snapshot.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(snapshot, 0, 0);

    canvas.hidden = false;
    scanBtn.disabled = false;
  });

  /* -------- 2. boost contrast ---------- */
  function enhanceImage() {
    if (!snapshot) return;
    ctx.filter = "grayscale(100%) contrast(300%) brightness(180%)";
    ctx.drawImage(snapshot, 0, 0);
    ctx.filter = "none";
  }

  /* -------- 3. OCR ---------- */
  scanBtn.addEventListener("click", async () => {
    if (!snapshot || typeof Tesseract === "undefined") return;

    enhanceImage();
    outBox.value = "Reading… please wait ⏳";
    scanBtn.disabled = true;

    const worker = await Tesseract.createWorker("eng");
    const result = await worker.recognize(canvas);
    await worker.terminate();

    const text = (result && result.data && result.data.text) 
      ? result.data.text.trim()
      : "";

    outBox.value = text || "[Nothing recognised]";
    scanBtn.disabled = false;
    aiBtn.disabled = !text;
  });

  /* -------- 4. Clean with OpenRouter ---------- */
  aiBtn.addEventListener("click", async () => {
    aiBtn.disabled = true;
    aiBtn.textContent = "AI thinking…";

    try {
      const prompt =
        "The following OCR output may contain mistakes.\n" +
        "Please correct spelling, remove artefacts, and format it nicely:\n\n" +
        outBox.value;

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer YOUR_OPENROUTER_KEY_HERE",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 1024
        })
      });

      const data = await res.json();
      const reply =
        data &&
        data.choices &&
        data.choices[0] &&
        data.choices[0].message &&
        data.choices[0].message.content
          ? data.choices[0].message.content.trim()
          : "";

      outBox.value = reply || "[AI returned nothing]";
    } catch (err) {
      alert("OpenRouter request failed");
    }

    aiBtn.textContent = "🪄 Clean Up with AI";
    aiBtn.disabled = false;
  });
});
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}


function copyCODE9() {
  const code = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>3D Profile Maker — Embed for Google Sites</title>

<style>
:root{
  --card-w:340px;
  --card-h:420px;
  --radius:22px;
  --accent:linear-gradient(135deg,#6dd5ed,#2193b0);
  font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;
}
body{
  margin:0;
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:linear-gradient(180deg,#0f172a,#071029);
  color:#fff;
  padding:20px;
}
.wrap{display:grid;grid-template-columns:1fr 420px;gap:24px;width:100%;max-width:1100px}
@media(max-width:920px){.wrap{grid-template-columns:1fr}}

.controls{
  background:rgba(255,255,255,.03);
  padding:18px;
  border-radius:14px;
}
.row{display:flex;gap:8px;margin-bottom:10px}
.field{flex:1;display:flex;flex-direction:column}
label{font-size:12px;margin-bottom:6px;color:#cbd5e1}
input,textarea,select{
  background:transparent;
  border:1px solid rgba(255,255,255,.1);
  color:#fff;
  padding:10px;
  border-radius:8px;
}
textarea{resize:vertical}
button{
  background:#0ea5a4;
  border:none;
  padding:10px 12px;
  border-radius:10px;
  font-weight:bold;
  cursor:pointer;
}
button.secondary{
  background:transparent;
  color:#cbe7ff;
  border:1px solid rgba(255,255,255,.1);
}

.preview-wrap{display:flex;flex-direction:column;gap:12px;align-items:center}

.card-3d{width:var(--card-w);height:var(--card-h);perspective:1200px}
.card{
  width:100%;
  height:100%;
  background:var(--accent);
  border-radius:var(--radius);
  transform-style:preserve-3d;
  transition:transform .3s ease;
  box-shadow:0 20px 40px rgba(0,0,0,.7);
}
.card-inner{
  position:absolute;
  inset:0;
  padding:18px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}
.avatar{
  width:96px;
  height:96px;
  border-radius:50%;
  border:4px solid rgba(255,255,255,.2);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:32px;
  font-weight:bold;
  background-size:cover;
}
.name{font-size:20px;font-weight:700}
.role,.bio{font-size:13px;opacity:.9}
.chip{
  background:rgba(255,255,255,.1);
  padding:6px 10px;
  border-radius:999px;
  font-size:12px;
}
</style>
</head>

<body>

<div class="wrap">

<div class="controls">
<h2>3D Profile Maker</h2>

<div class="row">
<div class="field">
<label>Full Name</label>
<input id="name" value="Abrarion">
</div>
<div class="field">
<label>Role</label>
<input id="role" value="Web Developer">
</div>
</div>

<div class="row">
<div class="field">
<label>Bio</label>
<textarea id="bio">Loves building playful web apps.</textarea>
</div>
</div>

<div class="row">
<div class="field">
<label>Avatar</label>
<input type="file" id="avatar" accept="image/*">
</div>
<div class="field">
<label>Background</label>
<select id="bg">
<option value="gradient">Gradient</option>
<option value="sunset">Sunset</option>
<option value="violet">Violet</option>
<option value="solid">Dark</option>
</select>
</div>
</div>

<button id="generate">✅ Generate Photo</button>
<button id="download" class="secondary">⬇ Download Last</button>
</div>

<div class="preview-wrap">
<div class="card-3d">
<div class="card" id="card">
<div class="card-inner">
<div style="display:flex;gap:14px;align-items:center">
<div class="avatar" id="avatarImg">A</div>
<div>
<div class="name" id="namePreview"></div>
<div class="role" id="rolePreview"></div>
</div>
</div>

<div>
<div class="bio" id="bioPreview"></div>
<div style="display:flex;justify-content:space-between;margin-top:14px">
<div class="chip">🌐 abrarion.example</div>
<div class="chip">✉ hello@me.com</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>

<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script>
var nameInput=document.getElementById("name");
var roleInput=document.getElementById("role");
var bioInput=document.getElementById("bio");
var avatarInput=document.getElementById("avatar");
var bgSelect=document.getElementById("bg");

var namePreview=document.getElementById("namePreview");
var rolePreview=document.getElementById("rolePreview");
var bioPreview=document.getElementById("bioPreview");
var avatarImg=document.getElementById("avatarImg");
var card=document.getElementById("card");

function update(){
  namePreview.innerHTML=nameInput.value;
  rolePreview.innerHTML=roleInput.value;
  bioPreview.innerHTML=bioInput.value;
  avatarImg.innerHTML=nameInput.value.charAt(0).toUpperCase();
}
nameInput.oninput=roleInput.oninput=bioInput.oninput=update;
update();

avatarInput.onchange=function(e){
  var f=e.target.files[0];
  if(!f)return;
  var r=new FileReader();
  r.onload=function(ev){
    avatarImg.style.backgroundImage="url('"+ev.target.result+"')";
    avatarImg.innerHTML="";
  };
  r.readAsDataURL(f);
};

bgSelect.onchange=function(){
  var v=bgSelect.value;
  if(v==="sunset")card.style.background="linear-gradient(135deg,#ff9a9e,#fad0c4)";
  else if(v==="violet")card.style.background="linear-gradient(135deg,#7f00ff,#e100ff)";
  else if(v==="solid")card.style.background="#0b1220";
  else card.style.background="linear-gradient(135deg,#6dd5ed,#2193b0)";
};

var lastImage=null;
document.getElementById("generate").onclick=function(){
  html2canvas(card).then(function(canvas){
    lastImage=canvas.toDataURL("image/png");
    var a=document.createElement("a");
    a.href=lastImage;
    a.download="profile-card.png";
    a.click();
  });
};
document.getElementById("download").onclick=function(){
  if(!lastImage){alert("Generate first");return;}
  var a=document.createElement("a");
  a.href=lastImage;
  a.download="profile-card.png";
  a.click();
};
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE10() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Language Maker Pro</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
body{
  margin:0;
  background:#050b18;
  color:#e8f2ff;
  font-family:system-ui, sans-serif;
}
.container{
  max-width:1100px;
  margin:30px auto;
  padding:20px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
}
.card{
  background:#0b1222;
  border-radius:14px;
  padding:16px;
  box-shadow:0 10px 30px rgba(0,0,0,.4);
}
h1,h2{
  margin:0 0 10px;
}
textarea{
  width:100%;
  min-height:160px;
  resize:vertical;
  background:#050b18;
  color:#cfe7ff;
  border:1px solid #1f2a44;
  border-radius:10px;
  padding:10px;
  font-family:monospace;
}
button{
  background:#4cc9f0;
  color:#032030;
  border:none;
  padding:10px 14px;
  border-radius:10px;
  cursor:pointer;
  font-weight:700;
}
button.secondary{
  background:#1f2a44;
  color:#cfe7ff;
}
.row{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin-top:10px;
}
.output{
  background:#050b18;
  border:1px solid #1f2a44;
  border-radius:10px;
  padding:10px;
  min-height:120px;
  white-space:pre-wrap;
}
.small{
  font-size:12px;
  color:#8fa4c7;
}
input[type="file"]{
  display:none;
}
@media(max-width:900px){
  .container{grid-template-columns:1fr;}
}
</style>
</head>

<body>

<div class="container">
  <div class="card">
    <h1>Language Maker</h1>
    <p class="small">Max 50 rules • Format: <b>english = custom</b></p>

    <textarea id="dictInput" placeholder="hi = sioa
nothing = sioal"></textarea>

    <div class="row">
      <button onclick="applyDictionary()">Apply</button>
      <button class="secondary" onclick="loadExample()">Example</button>
      <button class="secondary" onclick="exportJSON()">Export JSON</button>
      <button class="secondary" onclick="triggerImport()">Import JSON</button>
      <input type="file" id="fileInput" accept="application/json">
    </div>

    <p id="dictStatus" class="small"></p>
  </div>

  <div class="card">
    <h2>Translate Custom → English</h2>

    <textarea id="customText" placeholder="sioa sioal"></textarea>

    <div class="row">
      <button onclick="translateText()">Translate</button>
      <button class="secondary" onclick="clearAll()">Clear</button>
    </div>

    <div class="output" id="result"></div>
  </div>
</div>

<script>
"use strict";

var dictionary = {};
var reverseDictionary = {};

function applyDictionary(){
  var lines = document.getElementById("dictInput").value.split("\n");
  dictionary = {};
  reverseDictionary = {};
  var count = 0;

  for(var i = 0; i < lines.length; i++){
    var line = lines[i].trim();
    if(!line) continue;
    if(line.indexOf("=") === -1) continue;

    var parts = line.split("=");
    if(parts.length !== 2) continue;

    var english = parts[0].trim().toLowerCase();
    var custom = parts[1].trim().toLowerCase();

    if(!english || !custom) continue;

    dictionary[english] = custom;
    reverseDictionary[custom] = english;
    count++;

    if(count > 50){
      document.getElementById("dictStatus").textContent =
        "❌ Maximum 50 rules allowed";
      return;
    }
  }

  document.getElementById("dictStatus").textContent =
    "✅ Dictionary loaded (" + count + " rules)";
}

function translateText(){
  var input = document.getElementById("customText").value.trim();
  if(!input){
    document.getElementById("result").textContent = "";
    return;
  }

  var words = input.split(/\s+/);
  var output = [];

  for(var i = 0; i < words.length; i++){
    var w = words[i].toLowerCase();
    output.push(reverseDictionary[w] || words[i]);
  }

  document.getElementById("result").textContent = output.join(" ");
}

function exportJSON(){
  var json = JSON.stringify(dictionary, null, 2);
  var blob = new Blob([json], { type: "application/json" });
  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "language-dictionary.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function triggerImport(){
  document.getElementById("fileInput").click();
}

document.getElementById("fileInput").addEventListener("change", function(e){
  var file = e.target.files[0];
  if(!file) return;

  var reader = new FileReader();
  reader.onload = function(){
    try{
      var obj = JSON.parse(reader.result);
      var lines = [];
      var count = 0;

      for(var key in obj){
        if(obj.hasOwnProperty(key)){
          lines.push(key + " = " + obj[key]);
          count++;
          if(count >= 50) break;
        }
      }
      document.getElementById("dictInput").value = lines.join("\n");
      applyDictionary();
    }catch(err){
      alert("Invalid JSON file");
    }
  };
  reader.readAsText(file);
}, false);

function loadExample(){
  document.getElementById("dictInput").value =
"hi = sioa\nnothing = sioal\ncat = meow\ndog = woof";
  applyDictionary();
}

function clearAll(){
  document.getElementById("customText").value = "";
  document.getElementById("result").textContent = "";
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE11() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TOP WORD</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: #e4e4e4;
    }

    /* Top title bar */
    .topbar {
      background-color: #2b579a;
      color: white;
      padding: 10px 20px;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      height: 45px;
    }

    .toolbar {
      display: flex;
      flex-wrap: wrap;
      background: #f5f5f5;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .toolbar select,
    .toolbar input[type="color"],
    .toolbar button {
      margin: 4px;
      padding: 6px;
      border: 1px solid #ccc;
      background: white;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
    }

    .editor-container {
      background: white;
      margin: 20px auto;
      max-width: 900px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      min-height: 600px;
      padding: 20px;
      outline: none;
    }
  </style>
</head>
<body>

<div class="topbar">TOP WORD</div>

<div class="toolbar">
  <select id="fontName">
    <option value="Arial">Arial</option>
    <option value="Verdana">Verdana</option>
    <option value="Georgia">Georgia</option>
    <option value="Courier New">Courier New</option>
    <option value="Times New Roman">Times New Roman</option>
  </select>

  <select id="fontSize">
    <option value="1">8pt</option>
    <option value="2">10pt</option>
    <option value="3" selected>12pt</option>
    <option value="4">14pt</option>
    <option value="5">18pt</option>
    <option value="6">24pt</option>
    <option value="7">36pt</option>
  </select>

  <button onclick="execCmd('bold')"><b>B</b></button>
  <button onclick="execCmd('italic')"><i>I</i></button>
  <button onclick="execCmd('underline')"><u>U</u></button>

  <input type="color" onchange="execCmdWithArg('foreColor', this.value)">
  <input type="color" onchange="execCmdWithArg('hiliteColor', this.value)">

  <button onclick="execCmd('justifyLeft')">Left</button>
  <button onclick="execCmd('justifyCenter')">Center</button>
  <button onclick="execCmd('justifyRight')">Right</button>

  <button onclick="saveAsJson()">💾 Save JSON</button>
  <input type="file" id="jsonInput" accept=".json" onchange="loadJson()" />
</div>

<div id="editor" class="editor-container" contenteditable="true">
  Start typing here...
</div>

<script>
  function execCmd(command) {
    document.execCommand(command, false, null);
  }

  function execCmdWithArg(command, arg) {
    document.execCommand(command, false, arg);
  }

  document.getElementById("fontName").addEventListener("change", function () {
    execCmdWithArg("fontName", this.value);
  });

  document.getElementById("fontSize").addEventListener("change", function () {
    execCmdWithArg("fontSize", this.value);
  });

  function saveAsJson() {
    const content = document.getElementById("editor").innerHTML;
    const blob = new Blob([JSON.stringify({ content })], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "topword-document.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function loadJson() {
    const file = document.getElementById("jsonInput").files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const data = JSON.parse(e.target.result);
          document.getElementById("editor").innerHTML = data.content || "";
        } catch {
          alert("Invalid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  }
</script>

</body>
</html>




  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE12() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Clean File Manager</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
:root {
  --bg:#0f172a;
  --panel:#020617;
  --border:#1e293b;
  --accent:#6366f1;
  --text:#e5e7eb;
  --muted:#94a3b8;
}

*{box-sizing:border-box}

body{
  margin:0;
  background:var(--bg);
  color:var(--text);
  font-family:system-ui,Segoe UI,Roboto,sans-serif;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
}

.app{
  width:90%;
  max-width:1100px;
  height:80vh;
  display:grid;
  grid-template-columns:280px 1fr;
  background:var(--panel);
  border-radius:14px;
  overflow:hidden;
  border:1px solid var(--border);
}

.sidebar{
  padding:16px;
  border-right:1px solid var(--border);
}

.sidebar h2{
  margin:0 0 12px;
}

button,input{
  width:100%;
  padding:8px 10px;
  border-radius:8px;
  background:#020617;
  color:var(--text);
  border:1px solid var(--border);
  margin-bottom:8px;
}

button{
  background:linear-gradient(135deg,var(--accent),#22d3ee);
  border:none;
  font-weight:600;
  cursor:pointer;
}

button.secondary{
  background:#020617;
  border:1px solid var(--border);
}

.main{
  padding:16px;
  display:flex;
  flex-direction:column;
}

.toolbar{
  display:flex;
  gap:8px;
  margin-bottom:10px;
}

.list{
  flex:1;
  overflow:auto;
  border:1px solid var(--border);
  border-radius:10px;
}

.row{
  display:grid;
  grid-template-columns:40px 1fr 90px;
  padding:10px;
  border-bottom:1px solid var(--border);
  cursor:pointer;
}

.row:hover{background:#020617}

.preview{
  margin-top:10px;
  min-height:120px;
  background:#020617;
  border:1px solid var(--border);
  border-radius:10px;
  padding:10px;
  white-space:pre-wrap;
  overflow:auto;
}

.small{font-size:12px;color:var(--muted)}
.path{margin-bottom:8px;font-weight:600}
</style>
</head>

<body>
<div class="app">
  <div class="sidebar">
    <h2>📁 File Manager</h2>
    <button id="newFile">New File</button>
    <button id="newFolder">New Folder</button>
    <button id="back" class="secondary">Go Back</button>
    <p class="small">Local browser storage</p>
  </div>

  <div class="main">
    <div class="path" id="path">/</div>
    <div class="toolbar">
      <input id="search" placeholder="Search">
      <button id="refresh" class="secondary">Refresh</button>
    </div>

    <div class="list" id="list"></div>
    <div class="preview" id="preview">Select a file</div>
  </div>
</div>

<script>
// @ts-nocheck

var data = {};
var cwd = "/";
var list = document.getElementById("list");
var preview = document.getElementById("preview");
var pathView = document.getElementById("path");
var search = document.getElementById("search");

function save(){
  localStorage.setItem("file-manager-data", JSON.stringify(data));
}
function load(){
  data = JSON.parse(localStorage.getItem("file-manager-data") || "{}");
}
function norm(p){ return p.replace(/\/+/g,"/"); }

function render(){
  list.innerHTML="";
  pathView.textContent = cwd;

  var q = search.value.toLowerCase();

  for(var key in data){
    if(!key.startsWith(cwd)) continue;

    var name = key.replace(cwd,"").split("/")[0];
    if(!name || (q && !name.toLowerCase().includes(q))) continue;

    var row = document.createElement("div");
    row.className="row";
    row.innerHTML =
      "<div>"+(data[key].dir?"📁":"📄")+"</div>"+
      "<div>"+name+"</div>"+
      "<div class='small'>"+(data[key].dir?"Folder":"File")+"</div>";

    row.onclick = function(k){
      return function(){ openItem(k); };
    }(key);

    list.appendChild(row);
  }
}

function openItem(path){
  var item = data[path];
  if(!item) return;

  if(item.dir){
    cwd = norm(path + "/");
    preview.textContent = "Opened folder";
    render();
  }else{
    preview.textContent = item.content;
  }
}

document.getElementById("newFile").onclick=function(){
  var name = prompt("File name?");
  if(!name) return;
  var content = prompt("Content?","") || "";
  data[norm(cwd+name)] = {dir:false,content:content};
  save(); render();
};

document.getElementById("newFolder").onclick=function(){
  var name = prompt("Folder name?");
  if(!name) return;
  data[norm(cwd+name+"/")] = {dir:true,content:""};
  save(); render();
};

document.getElementById("back").onclick=function(){
  if(cwd=="/") return;
  cwd = cwd.split("/").slice(0,-2).join("/") + "/";
  cwd = norm(cwd);
  render();
};

document.getElementById("refresh").onclick = render;
search.oninput = render;

load();
render();
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE13() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Calm Relax Timer</title>
<style>
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #a8edea, #fed6e3);
    transition: background 0.4s ease;
  }
  .box {
    background: rgba(255,255,255,0.7);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    text-align: center;
    width: 340px;
  }
  input {
    width: 70px;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #bbb;
    border-radius: 10px;
    margin: 5px;
    text-align: center;
  }
  button {
    margin-top: 20px;
    padding: 12px 22px;
    font-size: 1.1rem;
    border: none;
    border-radius: 12px;
    background: #4facfe;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background: #00c6fe;
  }
  .time {
    margin-top: 25px;
    font-size: 3rem;
    color: #333;
  }
</style>
</head>

<body>
<div class="box">
  <h2>Relax Timer</h2>
  <div>
    <input id="min" type="number" min="0" placeholder="Min" />
    <input id="sec" type="number" min="0" max="59" placeholder="Sec" />
  </div>
  <button id="startBtn" type="button">Start</button>
  <div id="display" class="time">00:00</div>
</div>

<!-- WORKING ONLINE AUDIO LINKS -->
<audio id="calm" preload="auto" loop>
  <source src="https://files.catbox.moe/0zb7g9.mp3" type="audio/mpeg">
</audio>

<audio id="funk" preload="auto">
  <source src="https://files.catbox.moe/9q0ilj.mp3" type="audio/mpeg">
</audio>

<script>
(function () {

  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  const display = document.getElementById("display");
  const startBtn = document.getElementById("startBtn");

  const calm = document.getElementById("calm");
  const funk = document.getElementById("funk");

  let total = 0;
  let counter = null;

  function update(t) {
    const m = String(Math.floor(t / 60)).padStart(2, "0");
    const s = String(t % 60).padStart(2, "0");
    display.textContent = m + ":" + s;
  }

  startBtn.addEventListener("click", () => {

    // stop previous timer
    if (counter) {
      clearInterval(counter);
    }

    // stop audio
    calm.pause(); calm.currentTime = 0;
    funk.pause(); funk.currentTime = 0;

    const m = parseInt(min.value, 10) || 0;
    const s = parseInt(sec.value, 10) || 0;

    total = m * 60 + s;
    if (total <= 0) {
      alert("Set a valid time.");
      return;
    }

    update(total);

    // Play calm music only after user click (allowed)
    calm.play().catch(() => {});

    counter = setInterval(() => {
      total--;
      update(total);

      if (total <= 0) {
        clearInterval(counter);
        calm.pause();
        calm.currentTime = 0;

        // Change theme
        document.body.style.background = "linear-gradient(to bottom, #ff512f, #dd2476)";

        // Play funk alarm
        funk.currentTime = 0;
        funk.play().catch(() => {});

        // Stop funk after 20 seconds
        setTimeout(() => {
          funk.pause();
          funk.currentTime = 0;
          document.body.style.background = "linear-gradient(to bottom, #a8edea, #fed6e3)";
        }, 20000);
      }

    }, 1000);
  });

})();
</script>
</body>
</html>

  

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE14() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reaction Timer</title>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, #8EC5FC, #E0C3FC);
        color: #222;
    }

    h1 {
        margin-bottom: 20px;
    }

    #timerButton {
        width: 300px;
        height: 150px;
        font-size: 24px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        transition: background-color 0.2s;
        margin-bottom: 20px;
    }

    .wait {
        background-color: #f1c40f;
    }

    .ready {
        background-color: #2ecc71;
        color: #fff;
    }

    #result, #compare {
        margin-top: 10px;
        font-size: 18px;
    }

</style>
</head>
<body>

<h1>Reaction Timer</h1>

<button id="timerButton" class="wait">Start</button>

<div id="result">Reaction: —</div>
<div id="compare">Improvement: —</div>

<script>
"use strict";

(function () {
    const button = document.getElementById("timerButton");
    const resultBox = document.getElementById("result");
    const compareBox = document.getElementById("compare");

    let timeoutId = null;
    let startTime = 0;
    let lastScore = null;

    function startWaiting() {
        button.textContent = "Wait...";
        button.className = "wait";

        const delay = Math.floor(Math.random() * 2000) + 2000;

        timeoutId = setTimeout(() => {
            button.textContent = "CLICK!";
            button.className = "ready";
            startTime = Date.now();
        }, delay);
    }

    function handleClick() {
        if (button.classList.contains("wait")) {
            clearTimeout(timeoutId);
            button.textContent = "Too Early!";
            resultBox.textContent = "Reaction: —";
            compareBox.textContent = "Improvement: —";
            setTimeout(startWaiting, 1200);
            return;
        }

        if (button.classList.contains("ready")) {
            const reaction = Date.now() - startTime;
            resultBox.textContent = "Reaction: " + reaction + " ms";

            if (lastScore === null) {
                compareBox.textContent = "Improvement: —";
            } else {
                const diff = lastScore - reaction;
                if (diff > 0) {
                    compareBox.textContent = "Improved by " + diff + " ms";
                } else if (diff < 0) {
                    compareBox.textContent = "Slower by " + Math.abs(diff) + " ms";
                } else {
                    compareBox.textContent = "Same speed as before";
                }
            }

            lastScore = reaction;

            button.textContent = "Start Again";
            button.className = "wait";
            return;
        }

        startWaiting();
    }

    button.addEventListener("click", handleClick);
})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE15() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Footstep Counter</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    body {
      font-family: system-ui, Arial, sans-serif;
      background: #0f172a;
      color: #e5e7eb;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .app {
      background: #020617;
      padding: 24px;
      border-radius: 14px;
      width: 320px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    }

    h1 {
      margin-top: 0;
      font-size: 22px;
    }

    .steps {
      font-size: 48px;
      font-weight: 700;
      margin: 20px 0;
    }

    button {
      width: 100%;
      padding: 12px;
      margin-top: 10px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
    }

    .start {
      background: #22c55e;
      color: #022c22;
    }

    .reset {
      background: #ef4444;
      color: #450a0a;
    }

    .status {
      margin-top: 12px;
      font-size: 14px;
      opacity: 0.85;
    }
  </style>
</head>

<body>
  <div class="app">
    <h1>Footstep Counter</h1>

    <div id="stepCount" class="steps">0</div>

    <button id="startBtn" class="start">Start Tracking</button>
    <button id="resetBtn" class="reset">Reset</button>

    <div id="status" class="status">Waiting for permission…</div>
  </div>

  <script>
    "use strict";

    (function () {
      var stepCount = 0;
      var lastMagnitude = 0;
      var lastStepTime = 0;
      var threshold = 12;
      var minInterval = 300;
      var isTracking = false;

      var stepEl = document.getElementById("stepCount");
      var statusEl = document.getElementById("status");
      var startBtn = document.getElementById("startBtn");
      var resetBtn = document.getElementById("resetBtn");

      function updateSteps() {
        stepEl.textContent = String(stepCount);
      }

      function handleMotion(event) {
        if (!isTracking || !event.accelerationIncludingGravity) {
          return;
        }

        var acc = event.accelerationIncludingGravity;
        var magnitude = Math.sqrt(
          (acc.x || 0) * (acc.x || 0) +
          (acc.y || 0) * (acc.y || 0) +
          (acc.z || 0) * (acc.z || 0)
        );

        var now = Date.now();

        if (
          magnitude > threshold &&
          lastMagnitude <= threshold &&
          now - lastStepTime > minInterval
        ) {
          stepCount += 1;
          lastStepTime = now;
          updateSteps();
        }

        lastMagnitude = magnitude;
      }

      function startTracking() {
        if (typeof DeviceMotionEvent === "undefined") {
          statusEl.textContent = "Motion sensors not supported on this device.";
          return;
        }

        if (
          typeof DeviceMotionEvent.requestPermission === "function"
        ) {
          DeviceMotionEvent.requestPermission()
            .then(function (response) {
              if (response === "granted") {
                window.addEventListener("devicemotion", handleMotion);
                isTracking = true;
                statusEl.textContent = "Tracking steps…";
              } else {
                statusEl.textContent = "Permission denied.";
              }
            })
            .catch(function () {
              statusEl.textContent = "Permission request failed.";
            });
        } else {
          window.addEventListener("devicemotion", handleMotion);
          isTracking = true;
          statusEl.textContent = "Tracking steps…";
        }
      }

      function resetSteps() {
        stepCount = 0;
        lastMagnitude = 0;
        lastStepTime = 0;
        updateSteps();
      }

      startBtn.addEventListener("click", startTracking);
      resetBtn.addEventListener("click", resetSteps);
    })();
  </script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE16() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lung Breath Test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        * {
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            margin: 0;
            padding: 0;
            background-color: #0f172a;
            color: #e5e7eb;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .app {
            background-color: #020617;
            width: 100%;
            max-width: 420px;
            padding: 24px;
            border-radius: 14px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        h1 {
            margin-top: 0;
            text-align: center;
            font-size: 22px;
        }

        p {
            font-size: 14px;
            line-height: 1.5;
            color: #cbd5f5;
        }

        .timer {
            text-align: center;
            font-size: 48px;
            font-weight: bold;
            margin: 20px 0;
        }

        button {
            width: 100%;
            padding: 14px;
            font-size: 16px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            background-color: #2563eb;
            color: #ffffff;
        }

        button:disabled {
            background-color: #475569;
            cursor: not-allowed;
        }

        .result {
            margin-top: 20px;
            padding: 14px;
            border-radius: 10px;
            background-color: #020617;
            border: 1px solid #334155;
            display: none;
        }

        .note {
            margin-top: 16px;
            font-size: 12px;
            color: #94a3b8;
        }
    </style>
</head>
<body>

<div class="app">
    <h1>Lung Breath Test</h1>

    <p>
        Take a deep breath, then hold it for as long as you safely can.
        Press <strong>Start</strong> when you begin holding your breath.
        Press <strong>Stop</strong> when you need to breathe again.
    </p>

    <div class="timer" id="timer">0.0</div>

    <button id="startButton">Start Test</button>
    <button id="stopButton" disabled>Stop</button>

    <div class="result" id="resultBox"></div>

    <div class="note">
        This is an educational screening tool only.
        It is not a medical diagnosis.
        If you have breathing concerns, consult a healthcare professional.
    </div>
</div>

<script>
    "use strict";

    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    var timerDisplay = document.getElementById("timer");
    var resultBox = document.getElementById("resultBox");

    var startTime = 0;
    var intervalId = null;

    function startTest() {
        resultBox.style.display = "none";
        timerDisplay.textContent = "0.0";

        startTime = Date.now();
        intervalId = window.setInterval(updateTimer, 100);

        startButton.disabled = true;
        stopButton.disabled = false;
    }

    function stopTest() {
        if (intervalId !== null) {
            window.clearInterval(intervalId);
            intervalId = null;
        }

        var elapsedMs = Date.now() - startTime;
        var seconds = elapsedMs / 1000;

        showResult(seconds);

        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function updateTimer() {
        var elapsedMs = Date.now() - startTime;
        var seconds = elapsedMs / 1000;
        timerDisplay.textContent = seconds.toFixed(1);
    }

    function showResult(seconds) {
        var message = "";
        var rounded = seconds.toFixed(1);

        if (seconds < 20) {
            message = "Below average breath-hold capacity.";
        } else if (seconds >= 20 && seconds < 40) {
            message = "Average breath-hold capacity.";
        } else if (seconds >= 40 && seconds < 60) {
            message = "Good breath-hold capacity.";
        } else {
            message = "Excellent breath-hold capacity.";
        }

        resultBox.innerHTML =
            "<strong>Time:</strong> " + rounded + " seconds<br>" +
            "<strong>Assessment:</strong> " + message;

        resultBox.style.display = "block";
    }

    startButton.addEventListener("click", startTest);
    stopButton.addEventListener("click", stopTest);
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE17() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Wi-Fi Speed Test</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      margin: 0;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .card {
      width: 100%;
      max-width: 420px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      text-align: center;
    }

    h1 {
      margin-top: 0;
      font-size: 24px;
      letter-spacing: 1px;
    }

    .speed {
      font-size: 48px;
      font-weight: bold;
      margin: 20px 0;
    }

    .unit {
      font-size: 16px;
      opacity: 0.8;
    }

    button {
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 10px;
      background: #00c6ff;
      background: linear-gradient(to right, #0072ff, #00c6ff);
      color: #ffffff;
      font-size: 16px;
      cursor: pointer;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .status {
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.9;
    }

    .tip-box {
      margin-top: 20px;
      padding: 14px;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.25);
      font-size: 14px;
      line-height: 1.5;
    }

    .label {
      font-weight: bold;
      margin-bottom: 6px;
      display: block;
    }
  </style>
</head>

<body>
  <div class="card">
    <h1>Wi-Fi Speed Test</h1>

    <div class="speed" id="speedValue">0
      <span class="unit">Mbps</span>
    </div>

    <button id="startBtn">Start Test</button>

    <div class="status" id="statusText">Ready to test your connection</div>

    <div class="tip-box" id="tipBox">
      <span class="label">Tip</span>
      Start the test to get advice based on your internet speed.
    </div>
  </div>

  <script>
    (function () {
      "use strict";

      var startBtn = document.getElementById("startBtn");
      var speedValue = document.getElementById("speedValue");
      var statusText = document.getElementById("statusText");
      var tipBox = document.getElementById("tipBox");

      function getTip(speed) {
        if (speed < 5) {
          return "Your internet speed is very slow. Move closer to the router, stop background downloads, or restart your modem.";
        }
        if (speed < 15) {
          return "Your speed is okay for browsing, but video streaming may buffer. Try using fewer connected devices.";
        }
        if (speed < 40) {
          return "Good speed. You can stream HD videos and attend online classes smoothly.";
        }
        return "Excellent speed. Perfect for gaming, 4K streaming, and large downloads.";
      }

      startBtn.addEventListener("click", function () {
        startBtn.disabled = true;
        statusText.textContent = "Testing download speed...";
        speedValue.textContent = "0";

        var image = new Image();
        var imageSizeBytes = 5000000; // 5 MB
        var startTime = new Date().getTime();

        image.onload = function () {
          var endTime = new Date().getTime();
          var durationSeconds = (endTime - startTime) / 1000;
          var bitsLoaded = imageSizeBytes * 8;
          var speedMbps = (bitsLoaded / durationSeconds / 1024 / 1024).toFixed(2);

          speedValue.textContent = speedMbps;
          statusText.textContent = "Test completed";
          tipBox.innerHTML = "<span class='label'>Tip</span>" + getTip(Number(speedMbps));
          startBtn.disabled = false;
        };

        image.onerror = function () {
          statusText.textContent = "Test failed. Check your connection.";
          tipBox.innerHTML = "<span class='label'>Tip</span>Try again when your internet is stable.";
          startBtn.disabled = false;
        };

        image.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg?cache=" + Math.random();
      });
    })();
  </script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE18() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Smart Text Cleaner</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    * {
      box-sizing: border-box;
      font-family: "Segoe UI", Roboto, Arial, sans-serif;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .container {
      width: 100%;
      max-width: 780px;
      background: #ffffff;
      border-radius: 14px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
      padding: 26px;
    }

    .header {
      text-align: center;
      margin-bottom: 20px;
    }

    .header h1 {
      margin: 0;
      font-size: 26px;
      color: #1f2933;
    }

    .header p {
      margin-top: 6px;
      font-size: 14px;
      color: #6b7280;
    }

    textarea {
      width: 100%;
      min-height: 240px;
      padding: 16px;
      font-size: 15px;
      line-height: 1.6;
      border-radius: 10px;
      border: 1px solid #d1d5db;
      resize: vertical;
      outline: none;
      background: #f9fafb;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    textarea:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
      background: #ffffff;
    }

    .buttons {
      display: flex;
      gap: 14px;
      margin-top: 18px;
      flex-wrap: wrap;
    }

    button {
      flex: 1;
      padding: 12px;
      font-size: 15px;
      font-weight: 600;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
    }

    button:active {
      transform: scale(0.98);
    }

    .clean {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #ffffff;
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
    }

    .clean:hover {
      background: linear-gradient(135deg, #1e40af, #1d4ed8);
    }

    .reset {
      background: #e5e7eb;
      color: #111827;
    }

    .reset:hover {
      background: #d1d5db;
    }

    .info {
      margin-top: 18px;
      padding: 12px;
      background: #f3f4f6;
      border-radius: 10px;
      font-size: 13px;
      color: #374151;
      text-align: center;
    }

    @media (max-width: 600px) {
      .header h1 {
        font-size: 22px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>Smart Text Cleaner</h1>
      <p>Clean, format, and normalize text in one tap</p>
    </div>

    <textarea id="textInput" placeholder="Paste your text here..."></textarea>

    <div class="buttons">
      <button id="cleanBtn" class="clean">Clean Text</button>
      <button id="resetBtn" class="reset">Reset</button>
    </div>

    <div class="info">
      Removes extra spaces, fixes line breaks, removes emojis and symbols, and converts text to Proper Case.
    </div>
  </div>

  <script>
    (function () {
      var textInput = document.getElementById("textInput");
      var cleanBtn = document.getElementById("cleanBtn");
      var resetBtn = document.getElementById("resetBtn");

      function removeEmojis(text) {
        return text.replace(/[\u{1F300}-\u{1FAFF}]/gu, "");
      }

      function removeSymbols(text) {
        return text.replace(/[^a-zA-Z0-9\s.,!?'\-]/g, "");
      }

      function fixSpaces(text) {
        return text.replace(/\s+/g, " ").trim();
      }

      function fixLineBreaks(text) {
        return text.replace(/\n\s*\n+/g, "\n");
      }

      function toProperCase(text) {
        return text.toLowerCase().replace(/\b\w/g, function (char) {
          return char.toUpperCase();
        });
      }

      function cleanText() {
        var text = textInput.value;

        text = removeEmojis(text);
        text = removeSymbols(text);
        text = fixLineBreaks(text);
        text = fixSpaces(text);
        text = toProperCase(text);

        textInput.value = text;
      }

      function resetText() {
        textInput.value = "";
      }

      cleanBtn.addEventListener("click", cleanText);
      resetBtn.addEventListener("click", resetText);
    })();
  </script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE19() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Study Difficulty Decider</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: #eef2f7;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .card {
      width: 100%;
      max-width: 520px;
      background: #ffffff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

    h1 {
      margin-top: 0;
      text-align: center;
      font-size: 22px;
    }

    .question {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: bold;
    }

    select {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: none;
    }

    select:focus {
      border-color: #4a90e2;
    }

    button {
      width: 100%;
      margin-top: 15px;
      padding: 12px;
      font-size: 15px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      background: #4a90e2;
      color: #ffffff;
    }

    button:hover {
      background: #3a78c2;
    }

    .result {
      margin-top: 18px;
      padding: 12px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      border-radius: 6px;
      display: none;
    }

    .revise {
      background: #fff4cc;
      color: #7a5d00;
    }

    .practice {
      background: #e0f4ff;
      color: #004e7a;
    }

    .skip {
      background: #ffe4e4;
      color: #7a0000;
    }
  </style>
</head>

<body>
  <div class="card">
    <h1>Study Difficulty Decider</h1>

    <div class="question">
      <label for="difficulty">Topic Difficulty</label>
      <select id="difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>

    <div class="question">
      <label for="time">Time Left</label>
      <select id="time">
        <option value="low">Very Little</option>
        <option value="medium">Some Time</option>
        <option value="high">Plenty of Time</option>
      </select>
    </div>

    <div class="question">
      <label for="confidence">Your Confidence</label>
      <select id="confidence">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>

    <button id="decideBtn">Decide</button>

    <div id="result" class="result"></div>
  </div>

  <script>
    (function () {
      var difficultyEl = document.getElementById("difficulty");
      var timeEl = document.getElementById("time");
      var confidenceEl = document.getElementById("confidence");
      var decideBtn = document.getElementById("decideBtn");
      var resultEl = document.getElementById("result");

      function decideAction() {
        var difficulty = difficultyEl.value;
        var time = timeEl.value;
        var confidence = confidenceEl.value;
        var action = "";

        if (confidence === "low" && difficulty !== "easy") {
          action = "Revise";
        } else if (time === "high" && confidence !== "high") {
          action = "Practice";
        } else if (time === "low" && difficulty === "hard") {
          action = "Skip for now";
        } else if (confidence === "high") {
          action = "Practice";
        } else {
          action = "Revise";
        }

        resultEl.className = "result";
        resultEl.style.display = "block";

        if (action === "Revise") {
          resultEl.className += " revise";
        } else if (action === "Practice") {
          resultEl.className += " practice";
        } else {
          resultEl.className += " skip";
        }

        resultEl.textContent = action;
      }

      decideBtn.addEventListener("click", decideAction);
    })();
  </script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE20() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Exam Readiness Checker</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .card {
      width: 100%;
      max-width: 540px;
      background: #ffffff;
      border-radius: 10px;
      padding: 22px;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
    }

    h1 {
      margin-top: 0;
      text-align: center;
      font-size: 22px;
    }

    .field {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: bold;
    }

    input[type="number"],
    select {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      outline: none;
    }

    input:focus,
    select:focus {
      border-color: #3b82f6;
    }

    button {
      width: 100%;
      margin-top: 15px;
      padding: 12px;
      font-size: 15px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      background: #3b82f6;
      color: #ffffff;
    }

    button:hover {
      background: #2563eb;
    }

    .result {
      margin-top: 18px;
      padding: 14px;
      border-radius: 6px;
      display: none;
    }

    .status {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 6px;
      text-align: center;
    }

    .focus {
      font-size: 14px;
      text-align: center;
    }

    .ready {
      background: #e6fffa;
      color: #065f46;
    }

    .risky {
      background: #fff7ed;
      color: #9a3412;
    }

    .not-ready {
      background: #fee2e2;
      color: #7f1d1d;
    }
  </style>
</head>

<body>
  <div class="card">
    <h1>Exam Readiness Checker</h1>

    <div class="field">
      <label for="coverage">Syllabus Coverage (%)</label>
      <input type="number" id="coverage" min="0" max="100" placeholder="0 - 100">
    </div>

    <div class="field">
      <label for="confidence">Confidence Level</label>
      <select id="confidence">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>

    <div class="field">
      <label for="days">Days Left for Exam</label>
      <input type="number" id="days" min="0" placeholder="e.g. 7">
    </div>

    <button id="checkBtn">Check Readiness</button>

    <div id="result" class="result">
      <div id="status" class="status"></div>
      <div id="focus" class="focus"></div>
    </div>
  </div>

  <script>
    (function () {
      var coverageEl = document.getElementById("coverage");
      var confidenceEl = document.getElementById("confidence");
      var daysEl = document.getElementById("days");
      var checkBtn = document.getElementById("checkBtn");
      var resultEl = document.getElementById("result");
      var statusEl = document.getElementById("status");
      var focusEl = document.getElementById("focus");

      function checkReadiness() {
        var coverage = Number(coverageEl.value);
        var confidence = confidenceEl.value;
        var days = Number(daysEl.value);

        var statusText = "";
        var focusText = "";

        if (coverage >= 80 && confidence === "high" && days >= 3) {
          statusText = "Ready";
          focusText = "Do light revision and practice past questions.";
          resultEl.className = "result ready";
        } else if (coverage >= 50 && days > 0) {
          statusText = "Risky";
          focusText = "Revise weak topics and practice daily.";
          resultEl.className = "result risky";
        } else {
          statusText = "Not Ready";
          focusText = "Focus on core chapters and basic concepts today.";
          resultEl.className = "result not-ready";
        }

        statusEl.textContent = statusText;
        focusEl.textContent = focusText;
        resultEl.style.display = "block";
      }

      checkBtn.addEventListener("click", checkReadiness);
    })();
  </script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE21() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Study Method Selector</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: #eef2f7;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .card {
      width: 100%;
      max-width: 520px;
      background: #ffffff;
      border-radius: 10px;
      padding: 22px;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
    }

    h1 {
      margin-top: 0;
      text-align: center;
      font-size: 22px;
    }

    .field {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: bold;
    }

    select,
    input[type="number"] {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      outline: none;
    }

    select:focus,
    input:focus {
      border-color: #4a90e2;
    }

    button {
      width: 100%;
      margin-top: 15px;
      padding: 12px;
      font-size: 15px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      background: #4a90e2;
      color: #ffffff;
    }

    button:hover {
      background: #3a78c2;
    }

    .result {
      margin-top: 18px;
      padding: 14px;
      border-radius: 6px;
      display: none;
      text-align: center;
    }

    .method {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 6px;
    }

    .hint {
      font-size: 14px;
    }

    .recall {
      background: #e6fffa;
      color: #065f46;
    }

    .reading {
      background: #f0f9ff;
      color: #075985;
    }

    .practice {
      background: #fff7ed;
      color: #9a3412;
    }
  </style>
</head>

<body>
  <div class="card">
    <h1>Study Method Selector</h1>

    <div class="field">
      <label for="subject">Subject Type</label>
      <select id="subject">
        <option value="math">Math / Problem-based</option>
        <option value="theory">Theory / Reading-based</option>
      </select>
    </div>

    <div class="field">
      <label for="time">Time Available (minutes)</label>
      <input type="number" id="time" min="1" placeholder="e.g. 30">
    </div>

    <div class="field">
      <label for="energy">Energy Level</label>
      <select id="energy">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>

    <button id="selectBtn">Select Study Method</button>

    <div id="result" class="result">
      <div id="method" class="method"></div>
      <div id="hint" class="hint"></div>
    </div>
  </div>

  <script>
    (function () {
      var subjectEl = document.getElementById("subject");
      var timeEl = document.getElementById("time");
      var energyEl = document.getElementById("energy");
      var selectBtn = document.getElementById("selectBtn");
      var resultEl = document.getElementById("result");
      var methodEl = document.getElementById("method");
      var hintEl = document.getElementById("hint");

      function selectMethod() {
        var subject = subjectEl.value;
        var time = Number(timeEl.value);
        var energy = energyEl.value;

        var methodText = "";
        var hintText = "";

        if (subject === "math") {
          if (energy === "high") {
            methodText = "Practice";
            hintText = "Solve problems and check mistakes immediately.";
            resultEl.className = "result practice";
          } else {
            methodText = "Active Recall";
            hintText = "Review formulas, then test yourself.";
            resultEl.className = "result recall";
          }
        } else {
          if (time >= 30 && energy !== "low") {
            methodText = "Active Recall";
            hintText = "Read briefly, then write what you remember.";
            resultEl.className = "result recall";
          } else {
            methodText = "Reading";
            hintText = "Read key points and summaries only.";
            resultEl.className = "result reading";
          }
        }

        methodEl.textContent = methodText;
        hintEl.textContent = hintText;
        resultEl.style.display = "block";
      }

      selectBtn.addEventListener("click", selectMethod);
    })();
  </script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE22() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Color Palette Generator</title>
<style>
body { font-family: Arial; display: flex; flex-direction: column; align-items: center; background: #f0f4f8; padding: 50px; }
h1 { color: #333; }
.palette { display: flex; margin-top: 20px; }
.color-box { width: 100px; height: 100px; margin: 5px; border-radius: 10px; display: flex; justify-content: center; align-items: center; color: #fff; font-weight: bold; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.2);}
button { margin-top: 20px; padding: 10px 20px; border: none; border-radius: 8px; background: #007acc; color: #fff; cursor: pointer; }
button:hover { background: #005fa3; }
</style>
</head>
<body>
<h1>Color Palette Generator</h1>
<div class="palette" id="palette"></div>
<button onclick="generatePalette()">Generate Palette</button>
<script>
function randomColor() { return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'); }
function generatePalette() {
    const paletteDiv = document.getElementById('palette');
    paletteDiv.innerHTML = '';
    for(let i=0;i<5;i++){
        const color = randomColor();
        const box = document.createElement('div');
        box.className = 'color-box';
        box.style.background = color;
        box.textContent = color;
        box.onclick = ()=>navigator.clipboard.writeText(color);
        paletteDiv.appendChild(box);
    }
}
generatePalette();
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE23() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Regex Tester</title>
<style>
body { font-family: monospace; display: flex; flex-direction: column; align-items: center; padding: 50px; background: #e0f7fa; }
input, textarea { width: 80%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ccc; font-family: monospace; }
h1 { color: #00796b; }
#result { background: #fff; padding: 10px; border-radius: 5px; width: 80%; min-height: 50px; }
button { padding: 8px 15px; border: none; border-radius: 5px; background: #00796b; color: #fff; cursor: pointer; }
</style>
</head>
<body>
<h1>Regex Tester</h1>
<input type="text" id="pattern" placeholder="Enter regex pattern (without / /)">
<textarea id="text" placeholder="Enter text to test..."></textarea>
<button onclick="testRegex()">Test</button>
<div id="result"></div>
<script>
function testRegex() {
    const pattern = document.getElementById('pattern').value;
    const text = document.getElementById('text').value;
    let regex;
    try { regex = new RegExp(pattern, 'g'); } 
    catch(e){ document.getElementById('result').textContent = 'Invalid regex'; return; }
    const matches = text.match(regex);
    document.getElementById('result').textContent = matches ? matches.join(', ') : 'No match found';
}
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE24() {
  const code = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dev Toolbox</title>
<style>
body{font-family:system-ui;background:#020617;color:#e5e7eb;padding:30px}
textarea{width:100%;height:120px;background:#0f172a;color:#e5e7eb;padding:10px;border:none}
button{margin:5px;padding:8px 12px;background:#38bdf8;color:#000;border:none}
.box{margin-top:20px}
</style>
</head>
<body>

<h2>Developer Toolbox</h2>
<textarea id="text"></textarea>

<div class="box">
<button onclick="formatJSON()">Format JSON</button>
<button onclick="encode()">Base64 Encode</button>
<button onclick="decode()">Base64 Decode</button>
<button onclick="checksum()">Checksum</button>
<button onclick="copy()">Copy</button>
</div>

<script>
function formatJSON(){
  try{
    text.value=JSON.stringify(JSON.parse(text.value),null,2);
  }catch{alert("Invalid JSON")}
}
function encode(){ text.value=btoa(text.value) }
function decode(){ text.value=atob(text.value) }
function checksum(){
  let sum=0;
  for(let c of text.value) sum+=c.charCodeAt(0);
  alert("Checksum: "+sum);
}
function copy(){ navigator.clipboard.writeText(text.value) }
const text=document.getElementById("text");
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE25() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SEO Analyzer – VS Code Proof</title>

<style>
body {
  font-family: system-ui, Arial, sans-serif;
  background: #0f172a;
  color: #e5e7eb;
  padding: 30px;
}

h1 { margin-bottom: 5px; }

textarea {
  width: 100%;
  height: 240px;
  background: #020617;
  color: #e5e7eb;
  border: none;
  padding: 12px;
  resize: vertical;
  font-family: monospace;
  font-size: 14px;
}

button {
  margin-top: 12px;
  padding: 10px 18px;
  background: #38bdf8;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

#output {
  margin-top: 20px;
  background: #020617;
  padding: 16px;
  border-radius: 8px;
}

.good { color: #4ade80; }
.bad  { color: #f87171; }
.info { color: #93c5fd; }

hr {
  border: none;
  border-top: 1px solid #1e293b;
  margin: 12px 0;
}
</style>
</head>

<body>

<h1>Client-Side SEO Analyzer</h1>
<p class="info">Paste full HTML source below</p>

<textarea id="htmlInput" placeholder="<!DOCTYPE html> ..."></textarea>
<button id="analyzeBtn">Analyze SEO</button>

<div id="output"></div>

<script>
(function () {

  var button = document.getElementById("analyzeBtn");
  var output = document.getElementById("output");

  button.addEventListener("click", runSEO);

  function runSEO() {
    output.innerHTML = "";
    var html = document.getElementById("htmlInput").value;

    if (!html || html.trim().length === 0) {
      print("No HTML provided.", "bad");
      return;
    }

    var doc;
    try {
      doc = new DOMParser().parseFromString(html, "text/html");
    } catch (e) {
      print("HTML parsing failed.", "bad");
      return;
    }

    var score = 100;

    score -= checkTitle(doc);
    score -= checkMeta(doc);
    score -= checkHeadings(doc);
    score -= checkImages(doc);
    score -= checkWordCount(doc);
    score -= checkLinks(doc);
    score -= checkOpenGraph(doc);
    analyzeKeywords(doc);

    print("SEO Score: " + Math.max(score, 0) + " / 100", score >= 70 ? "good" : "bad");
  }

  /* ---------- CHECKS ---------- */

  function checkTitle(doc) {
    var t = doc.getElementsByTagName("title")[0];
    if (!t || !t.textContent) {
      print("Missing <title> tag", "bad");
      return 15;
    }
    var len = t.textContent.trim().length;
    if (len < 30 || len > 60) {
      print("Title length issue (" + len + " chars)", "bad");
      return 10;
    }
    print("Title OK (" + len + " chars)", "good");
    return 0;
  }

  function checkMeta(doc) {
    var metas = doc.getElementsByTagName("meta");
    var desc = null;

    for (var i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute("name") === "description") {
        desc = metas[i];
        break;
      }
    }

    if (!desc || !desc.getAttribute("content")) {
      print("Missing meta description", "bad");
      return 15;
    }

    var len = desc.getAttribute("content").trim().length;
    if (len < 70 || len > 160) {
      print("Meta description length issue (" + len + " chars)", "bad");
      return 10;
    }

    print("Meta description OK", "good");
    return 0;
  }

  function checkHeadings(doc) {
    var h1 = doc.getElementsByTagName("h1").length;
    print("H1 count: " + h1, h1 === 1 ? "good" : "bad");
    return h1 === 1 ? 0 : 10;
  }

  function checkImages(doc) {
    var imgs = doc.getElementsByTagName("img");
    var missing = 0;

    for (var i = 0; i < imgs.length; i++) {
      if (!imgs[i].getAttribute("alt")) missing++;
    }

    if (missing > 0) {
      print(missing + " images missing alt text", "bad");
      return 10;
    }

    print("All images have alt text", "good");
    return 0;
  }

  function checkWordCount(doc) {
    var text = doc.body && doc.body.textContent ? doc.body.textContent : "";
    var words = text.trim().split(/\s+/).filter(Boolean).length;

    print("Word count: " + words, words >= 300 ? "good" : "bad");
    return words >= 300 ? 0 : 10;
  }

  function checkLinks(doc) {
    var links = doc.getElementsByTagName("a");
    var internal = 0, external = 0;

    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href") || "";
      if (href.indexOf("http") === 0) external++;
      else if (href.length > 0) internal++;
    }

    print("Internal links: " + internal, "info");
    print("External links: " + external, "info");

    return internal > 0 ? 0 : 5;
  }

  function checkOpenGraph(doc) {
    var og = doc.querySelector('meta[property="og:title"]');
    if (!og) {
      print("Missing Open Graph tags", "bad");
      return 5;
    }
    print("Open Graph tags found", "good");
    return 0;
  }

  function analyzeKeywords(doc) {
    var text = doc.body && doc.body.textContent ? doc.body.textContent.toLowerCase() : "";
    var words = text.match(/\b[a-z]{4,}\b/g) || [];
    var freq = {};
    for (var i = 0; i < words.length; i++) {
      freq[words[i]] = (freq[words[i]] || 0) + 1;
    }

    var sorted = Object.keys(freq).sort(function (a, b) {
      return freq[b] - freq[a];
    });

    if (sorted.length > 0) {
      print("Top keywords: " + sorted.slice(0, 5).join(", "), "info");
    }
  }

  function print(msg, cls) {
    var p = document.createElement("p");
    p.className = cls;
    p.textContent = msg;
    output.appendChild(p);
  }

})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE26() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>HTML Security Analyzer</title>
<style>
body {
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: #e5e7eb;
  padding: 20px;
}
h1 {
  text-align: center;
  color: #38bdf8;
}
textarea {
  width: 100%;
  height: 220px;
  background: #020617;
  color: #e5e7eb;
  border: 1px solid #334155;
  padding: 12px;
  font-family: monospace;
}
button {
  margin-top: 15px;
  padding: 12px 20px;
  background: #38bdf8;
  color: #020617;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background: #0ea5e9;
}
.result {
  margin-top: 20px;
  background: #020617;
  padding: 15px;
  border-left: 5px solid #38bdf8;
}
.warning {
  color: #f87171;
}
.safe {
  color: #4ade80;
}
.score {
  font-size: 20px;
  margin-top: 10px;
}
</style>
</head>
<body>

<h1>🔐 HTML Security Analyzer</h1>

<textarea id="code" placeholder="Paste your HTML code here..."></textarea>
<button id="analyzeBtn">Analyze Security</button>

<div class="result" id="output"></div>

<script>
"use strict";

(function () {
  const textarea = document.getElementById("code");
  const button = document.getElementById("analyzeBtn");
  const output = document.getElementById("output");

  button.addEventListener("click", analyze);

  function analyze() {
    const html = textarea.value;
    let issues = [];
    let risk = 0;

    if (/<script[\s>]/i.test(html)) {
      issues.push("Inline <script> detected (XSS risk)");
      risk += 25;
    }

    if (/on[a-z]+\s*=/i.test(html)) {
      issues.push("Inline event handlers detected (onclick, onerror, etc.)");
      risk += 20;
    }

    if (/javascript:/i.test(html)) {
      issues.push("javascript: URL detected");
      risk += 20;
    }

    if (/style\s*=/i.test(html)) {
      issues.push("Inline styles detected (CSP bypass risk)");
      risk += 10;
    }

    if (!/content-security-policy/i.test(html)) {
      issues.push("Missing Content-Security-Policy meta tag");
      risk += 25;
    }

    renderResult(issues, risk);
  }

  function renderResult(issues, risk) {
    output.textContent = "";
    
    if (issues.length === 0) {
      const p = document.createElement("p");
      p.className = "safe";
      p.textContent = "✔ No major security issues detected";
      output.appendChild(p);
    } else {
      issues.forEach(function (issue) {
        const p = document.createElement("p");
        p.className = "warning";
        p.textContent = "⚠ " + issue;
        output.appendChild(p);
      });
    }

    const level =
      risk < 20 ? "LOW" :
      risk < 50 ? "MEDIUM" : "HIGH";

    const score = document.createElement("div");
    score.className = "score";
    score.textContent = "Risk Score: " + risk + " / 100 — " + level;
    output.appendChild(score);
  }
})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE27() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Keyboard Beat Machine</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
  background:#000;
  color:#fff;
  font-family:system-ui;
  min-height:100vh;
}
.unlock{
  position:fixed;
  inset:0;
  background:#000;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.6rem;
  cursor:pointer;
  z-index:10;
}
header{text-align:center;padding:20px}
.controls{
  display:flex;
  justify-content:center;
  gap:10px;
  margin-bottom:15px;
}
button{
  padding:10px 16px;
  background:#111;
  border:1px solid #333;
  color:#fff;
  border-radius:6px;
  cursor:pointer;
}
button.active{
  background:#00ffaa;
  color:#000;
}
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(60px,1fr));
  gap:10px;
  padding:20px;
  max-width:900px;
  margin:auto;
}
.key{
  height:60px;
  background:#111;
  border-radius:8px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;
}
.key.flash{
  background:#00ffaa;
  color:#000;
  box-shadow:0 0 20px #00ffaa;
}
</style>
</head>

<body>

<div class="unlock" id="unlock">ENABLE SOUND</div>

<header>
  <h1>Keyboard Beat Machine</h1>
  <p>Mash keys · Record · Replay</p>
</header>

<div class="controls">
  <button id="recordBtn">● Record</button>
  <button id="playBtn">▶ Replay</button>
  <button id="clearBtn">✖ Clear</button>
</div>

<div class="grid" id="grid"></div>

<script>
/* ================= AUDIO ================= */
let audioCtx;
let unlocked = false;

/* HARD UNLOCK */
unlock.onclick = () => {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // test beep
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.frequency.value = 440;
  g.gain.value = 0.4;
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start();
  o.stop(audioCtx.currentTime + 0.15);

  unlocked = true;
  unlock.remove();
};

/* ================= KEYS ================= */
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
const grid = document.getElementById("grid");
const keyEls = {};

chars.forEach(k=>{
  const d=document.createElement("div");
  d.className="key";
  d.textContent=k;
  grid.appendChild(d);
  keyEls[k]=d;
});

/* ================= SOUND ================= */
function playSound(code){
  if(!unlocked) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type="square";
  osc.frequency.value = 120 + (code % 30) * 25;
  gain.gain.value = 0.3;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.18);
}

/* ================= VISUAL ================= */
function flash(k){
  const el=keyEls[k];
  if(!el) return;
  el.classList.add("flash");
  setTimeout(()=>el.classList.remove("flash"),120);
}

/* ================= RECORDING ================= */
let recording=false;
let startTime=0;
let recorded=[];

/* ================= KEYBOARD ================= */
document.addEventListener("keydown",e=>{
  const k=e.key.toUpperCase();
  if(!keyEls[k]) return;

  playSound(k.charCodeAt(0));
  flash(k);

  if(recording){
    recorded.push({
      key:k,
      time:performance.now()-startTime
    });
  }
});

/* ================= CONTROLS ================= */
recordBtn.onclick=()=>{
  recording=!recording;
  recordBtn.classList.toggle("active",recording);

  if(recording){
    recorded=[];
    startTime=performance.now();
    recordBtn.textContent="● Recording";
  }else{
    recordBtn.textContent="● Record";
  }
};

playBtn.onclick=()=>{
  if(!recorded.length) return;

  recorded.forEach(ev=>{
    setTimeout(()=>{
      playSound(ev.key.charCodeAt(0));
      flash(ev.key);
    },ev.time);
  });
};

clearBtn.onclick=()=>{
  recorded=[];
};
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE28() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Keyboard Beat Machine</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
/* ===== RESET ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}

/* ===== BODY ===== */
body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, #111 0%, #000 60%),
    linear-gradient(120deg, #0f0f0f, #050505);
  color: #fff;
  font-family: system-ui, sans-serif;
  overflow-x: hidden;
}

/* ===== HEADER ===== */
header {
  text-align: center;
  padding: 24px 16px;
}

header h1 {
  font-size: 2.2rem;
  letter-spacing: 2px;
}

header p {
  opacity: 0.7;
  margin-top: 6px;
}

/* ===== CONTROLS ===== */
.controls {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap;
}

button {
  background: linear-gradient(145deg, #1e1e1e, #0a0a0a);
  color: #fff;
  border: 1px solid #333;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 12px #00ffaa55;
}

button.active {
  background: linear-gradient(145deg, #00ffaa, #007755);
  color: #000;
}

/* ===== KEY GRID ===== */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 10px;
  padding: 20px;
  max-width: 900px;
  margin: auto;
}

.key {
  height: 60px;
  border-radius: 10px;
  background:
    linear-gradient(145deg, #181818, #0a0a0a);
  border: 1px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

/* ===== FLASH EFFECT ===== */
.key.flash {
  animation: flash 0.15s ease;
}

@keyframes flash {
  0% {
    background: #00ffaa;
    color: #000;
    box-shadow: 0 0 20px #00ffaa;
  }
  100% {
    background:
      linear-gradient(145deg, #181818, #0a0a0a);
    color: #fff;
    box-shadow: none;
  }
}

/* ===== RIPPLE ===== */
.key::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, #00ffaa66 0%, transparent 70%);
  opacity: 0;
}

.key.flash::after {
  opacity: 1;
  animation: ripple 0.25s ease;
}

@keyframes ripple {
  from { transform: scale(0.3); }
  to { transform: scale(1.5); opacity: 0; }
}

/* ===== FOOTER ===== */
footer {
  text-align: center;
  padding: 14px;
  opacity: 0.5;
  font-size: 0.85rem;
}
</style>
</head>

<body>

<header>
  <h1>KEYBOARD BEAT MACHINE</h1>
  <p>Mash keys · Record · Replay</p>
</header>

<div class="controls">
  <button id="recordBtn">● Record</button>
  <button id="playBtn">▶ Replay</button>
  <button id="clearBtn">✖ Clear</button>
</div>

<div class="grid" id="grid"></div>

<footer>
  No libraries · One file · VS Code safe
</footer>

<script>
/* ===== AUDIO SETUP ===== */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioCtx();

/* ===== KEY LIST ===== */
const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
const grid = document.getElementById("grid");

/* ===== STATE ===== */
let recording = false;
let recordStart = 0;
let recordedEvents = [];

/* ===== CREATE KEYS ===== */
const keyElements = {};

keys.forEach(k => {
  const div = document.createElement("div");
  div.className = "key";
  div.textContent = k;
  grid.appendChild(div);
  keyElements[k] = div;
});

/* ===== SOUND FUNCTION ===== */
function playSound(char) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  const base = char.charCodeAt(0);
  osc.type = "square";
  osc.frequency.value = 120 + (base % 24) * 20;

  gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.25);
}

/* ===== FLASH VISUAL ===== */
function flashKey(char) {
  const el = keyElements[char];
  if (!el) return;
  el.classList.remove("flash");
  void el.offsetWidth;
  el.classList.add("flash");
}

/* ===== KEY HANDLER ===== */
document.addEventListener("keydown", e => {
  const key = e.key.toUpperCase();
  if (!keys.includes(key)) return;

  audioCtx.resume();
  playSound(key);
  flashKey(key);

  if (recording) {
    recordedEvents.push({
      key,
      time: performance.now() - recordStart
    });
  }
});

/* ===== RECORD ===== */
recordBtn.onclick = () => {
  recording = !recording;
  recordBtn.classList.toggle("active", recording);

  if (recording) {
    recordedEvents = [];
    recordStart = performance.now();
    recordBtn.textContent = "● Recording";
  } else {
    recordBtn.textContent = "● Record";
  }
};

/* ===== REPLAY ===== */
playBtn.onclick = () => {
  if (!recordedEvents.length) return;

  audioCtx.resume();
  recordedEvents.forEach(ev => {
    setTimeout(() => {
      playSound(ev.key);
      flashKey(ev.key);
    }, ev.time);
  });
};

/* ===== CLEAR ===== */
clearBtn.onclick = () => {
  recordedEvents = [];
};
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE29() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Key Impact Machine</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{
  width:100%;
  height:100%;
}
body{
  background:radial-gradient(circle at top,#111,#000 70%);
  color:#fff;
  font-family:system-ui;
  overflow:hidden;
  outline:none;
}

/* HEADER */
header{
  position:fixed;
  top:0;
  width:100%;
  padding:14px;
  text-align:center;
  z-index:5;
}
header h1{letter-spacing:3px;font-size:1.4rem}
header p{opacity:.6;font-size:.85rem}

/* CONTROLS */
.controls{
  position:fixed;
  bottom:14px;
  width:100%;
  display:flex;
  justify-content:center;
  gap:10px;
  z-index:5;
}
button{
  padding:10px 18px;
  background:#111;
  border:1px solid #333;
  color:#fff;
  border-radius:20px;
  cursor:pointer;
}
button.active{
  background:#00ffaa;
  color:#000;
}

/* STAGE */
.stage{
  position:absolute;
  inset:0;
}

/* KEY CARD */
.card{
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%) scale(0.6);
  padding:40px 60px;
  font-size:3rem;
  font-weight:800;
  border-radius:20px;
  background:linear-gradient(135deg,var(--c1),var(--c2));
  color:#000;
  box-shadow:0 0 60px var(--c1);
  animation:pop 0.6s ease forwards;
}

@keyframes pop{
  0%{opacity:0;transform:translate(-50%,-50%) scale(0.4)}
  60%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}
  100%{opacity:0;transform:translate(-50%,-80%) scale(1)}
}

/* SHAKE */
.shake{
  animation:shake 0.2s;
}
@keyframes shake{
  0%{transform:translate(0,0)}
  25%{transform:translate(4px,-4px)}
  50%{transform:translate(-4px,4px)}
  75%{transform:translate(3px,-3px)}
  100%{transform:translate(0,0)}
}
</style>
</head>

<body tabindex="0">

<header>
  <h1>KEY IMPACT MACHINE</h1>
  <p>Click anywhere if keys stop · Record · Replay</p>
</header>

<div class="stage" id="stage"></div>

<div class="controls">
  <button id="recordBtn">● Record</button>
  <button id="playBtn">▶ Replay</button>
  <button id="clearBtn">✖ Clear</button>
</div>

<script>
/* FORCE FOCUS (VS CODE FIX) */
document.body.focus();
document.addEventListener("click",()=>document.body.focus());

const stage=document.getElementById("stage");
let recording=false;
let startTime=0;
let recorded=[];

/* COLOR */
function randColor(){
  var h = Math.floor(Math.random() * 360);
  return [
    "hsl(" + h + ",90%,60%)",
    "hsl(" + (h + 40) + ",90%,50%)"
  ];
}


/* VISUAL */
function trigger(key){
  const [c1,c2]=randColor();
  const card=document.createElement("div");
  card.className="card";
  card.textContent=key;
  card.style.setProperty("--c1",c1);
  card.style.setProperty("--c2",c2);
  stage.appendChild(card);

  document.body.classList.add("shake");
  setTimeout(()=>document.body.classList.remove("shake"),200);
  setTimeout(()=>card.remove(),600);
}

/* KEYBOARD */
document.addEventListener("keydown",e=>{
  if(!document.hasFocus()) return;
  const k=e.key.toUpperCase();
  if(k.length!==1) return;

  trigger(k);

  if(recording){
    recorded.push({key:k,time:performance.now()-startTime});
  }
});

/* CONTROLS */
recordBtn.onclick=()=>{
  recording=!recording;
  recordBtn.classList.toggle("active",recording);
  if(recording){
    recorded=[];
    startTime=performance.now();
    recordBtn.textContent="● Recording";
  }else{
    recordBtn.textContent="● Record";
  }
};

playBtn.onclick=()=>{
  recorded.forEach(ev=>{
    setTimeout(()=>trigger(ev.key),ev.time);
  });
};

clearBtn.onclick=()=>recorded=[];
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE30() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Click Explosion Simulator</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{
  margin:0;
  padding:0;
  overflow:hidden;
  background:#000;
  height:100vh;
  font-family:system-ui;
  color:#fff;
}
header{
  position:fixed;
  top:0;
  width:100%;
  text-align:center;
  padding:14px;
  z-index:5;
}
header h1{letter-spacing:2px;font-size:1.4rem;}
header p{opacity:.6;font-size:.85rem;}
button{
  padding:10px 16px;
  margin:0 5px;
  border-radius:10px;
  border:1px solid #333;
  background:#111;
  color:#fff;
  cursor:pointer;
}
button.active{background:#0f0;color:#000;}
.controls{
  position:fixed;
  bottom:14px;
  width:100%;
  text-align:center;
  z-index:5;
}
.particle{
  position:absolute;
  width:10px;
  height:10px;
  border-radius:50%;
  pointer-events:none;
  opacity:1;
}
</style>
</head>
<body>

<header>
<h1>Click Explosion Simulator</h1>
<p>Click anywhere to explode · Record · Replay</p>
</header>

<div class="controls">
<button id="recordBtn">● Record</button>
<button id="playBtn">▶ Replay</button>
<button id="clearBtn">✖ Clear</button>
</div>

<script>
let recording=false;
let startTime=0;
let recorded=[];

/* ===== PARTICLE EXPLOSION ===== */
function explode(x,y){
  for(var i=0;i<12;i++){
    var p=document.createElement("div");
    p.className="particle";
    var size=5+Math.random()*10;
    p.style.width=p.style.height=size+"px";
    p.style.background="hsl("+Math.floor(Math.random()*360)+",80%,60%)";
    p.style.left=x+"px";
    p.style.top=y+"px";
    document.body.appendChild(p);

    // random direction and speed
    var dx=(Math.random()-0.5)*300;
    var dy=(Math.random()-0.5)*300;

    (function(p,dx,dy){
      var start=performance.now();
      function anim(time){
        var t=(time-start)/600; 
        if(t>1){p.remove();return;}
        p.style.left=x+dx*t+"px";
        p.style.top=y+dy*t+"px";
        p.style.opacity=1-t;
        requestAnimationFrame(anim);
      }
      requestAnimationFrame(anim);
    })(p,dx,dy);
  }
}

/* ===== CLICK HANDLER ===== */
document.addEventListener("click",e=>{
  explode(e.clientX,e.clientY);
  if(recording){
    recorded.push({x:e.clientX,y:e.clientY,time:performance.now()-startTime});
  }
});

/* ===== CONTROLS ===== */
const recordBtn=document.getElementById("recordBtn");
const playBtn=document.getElementById("playBtn");
const clearBtn=document.getElementById("clearBtn");

recordBtn.onclick=function(){
  recording=!recording;
  recordBtn.classList.toggle("active",recording);
  if(recording){recorded=[];startTime=performance.now();recordBtn.textContent="● Recording";}
  else{recordBtn.textContent="● Record";}
}

playBtn.onclick=function(){
  for(var i=0;i<recorded.length;i++){
    (function(ev){
      setTimeout(function(){
        explode(ev.x,ev.y);
      },ev.time);
    })(recorded[i]);
  }
}

clearBtn.onclick=function(){
  recorded=[];
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE31() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Mouse Painter & Explosion Machine</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{
  margin:0;
  padding:0;
  overflow:hidden;
  background:#111;
  height:100vh;
  font-family:system-ui;
  cursor:crosshair;
}
header{
  position:fixed;
  top:0;
  width:100%;
  padding:14px;
  text-align:center;
  z-index:5;
  color:#fff;
}
header h1{letter-spacing:2px;font-size:1.4rem}
header p{opacity:.7;font-size:.85rem}
.controls{
  position:fixed;
  bottom:14px;
  width:100%;
  text-align:center;
  z-index:5;
}
button{
  padding:10px 16px;
  margin:0 5px;
  border-radius:10px;
  border:1px solid #333;
  background:#222;
  color:#fff;
  cursor:pointer;
}
button.active{background:#0f0;color:#000;}
.particle, .trail{
  position:absolute;
  border-radius:50%;
  pointer-events:none;
}
</style>
</head>
<body tabindex="0">

<header>
<h1>Mouse Painter & Explosion Machine</h1>
<p>Move mouse → trails | Click → explosions | Record & Replay</p>
</header>

<div class="controls">
<button id="recordBtn">● Record</button>
<button id="playBtn">▶ Replay</button>
<button id="clearBtn">✖ Clear</button>
</div>

<script>
document.body.focus(); // VS CODE fix
document.addEventListener("click",()=>document.body.focus());

let recording=false;
let startTime=0;
let recorded=[];

/* RANDOM COLOR HELPER */
function randColor(){
  var h=Math.floor(Math.random()*360);
  return "hsl("+h+",90%,60%)";
}

/* ===== MOUSE TRAIL ===== */
document.addEventListener("mousemove",e=>{
  const trail=document.createElement("div");
  trail.className="trail";
  trail.style.width=trail.style.height="8px";
  trail.style.background=randColor();
  trail.style.left=e.clientX+"px";
  trail.style.top=e.clientY+"px";
  document.body.appendChild(trail);
  setTimeout(()=>trail.remove(),500);

  if(recording){
    recorded.push({type:"move",x:e.clientX,y:e.clientY,time:performance.now()-startTime});
  }
});

/* ===== CLICK EXPLOSION ===== */
document.addEventListener("click",e=>{
  for(var i=0;i<10;i++){
    var p=document.createElement("div");
    p.className="particle";
    var size=5+Math.random()*10;
    p.style.width=p.style.height=size+"px";
    p.style.background=randColor();
    p.style.left=e.clientX+"px";
    p.style.top=e.clientY+"px";
    document.body.appendChild(p);

    var dx=(Math.random()-0.5)*300;
    var dy=(Math.random()-0.5)*300;

    (function(p,dx,dy){
      var start=performance.now();
      function anim(time){
        var t=(time-start)/600; 
        if(t>1){p.remove();return;}
        p.style.left=parseFloat(e.clientX)+dx*t+"px";
        p.style.top=parseFloat(e.clientY)+dy*t+"px";
        p.style.opacity=1-t;
        requestAnimationFrame(anim);
      }
      requestAnimationFrame(anim);
    })(p,dx,dy);

    if(recording){
      recorded.push({type:"click",x:e.clientX,y:e.clientY,time:performance.now()-startTime});
    }
  }
});

/* ===== CONTROLS ===== */
const recordBtn=document.getElementById("recordBtn");
const playBtn=document.getElementById("playBtn");
const clearBtn=document.getElementById("clearBtn");

recordBtn.onclick=function(){
  recording=!recording;
  recordBtn.classList.toggle("active",recording);
  if(recording){recorded=[];startTime=performance.now();recordBtn.textContent="● Recording";}
  else{recordBtn.textContent="● Record";}
}

playBtn.onclick=function(){
  recorded.forEach(ev=>{
    setTimeout(()=>{
      if(ev.type=="move"){
        const t=document.createElement("div");
        t.className="trail";
        t.style.width=t.style.height="8px";
        t.style.background=randColor();
        t.style.left=ev.x+"px";
        t.style.top=ev.y+"px";
        document.body.appendChild(t);
        setTimeout(()=>t.remove(),500);
      } else if(ev.type=="click"){
        for(var i=0;i<10;i++){
          var p=document.createElement("div");
          p.className="particle";
          var size=5+Math.random()*10;
          p.style.width=p.style.height=size+"px";
          p.style.background=randColor();
          p.style.left=ev.x+"px";
          p.style.top=ev.y+"px";
          document.body.appendChild(p);
          var dx=(Math.random()-0.5)*300;
          var dy=(Math.random()-0.5)*300;
          (function(p,dx,dy){
            var start=performance.now();
            function anim(time){
              var t=(time-start)/600; 
              if(t>1){p.remove();return;}
              p.style.left=parseFloat(ev.x)+dx*t+"px";
              p.style.top=parseFloat(ev.y)+dy*t+"px";
              p.style.opacity=1-t;
              requestAnimationFrame(anim);
            }
            requestAnimationFrame(anim);
          })(p,dx,dy);
        }
      }
    },ev.time);
  });
}

clearBtn.onclick=function(){recorded=[];}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE32() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Keyboard Behavior Visualizer</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root {
  --bg: #0e0f13;
  --panel: #151822;
  --accent: #4cc9f0;
  --accent2: #f72585;
  --text: #eaeaf0;
  --muted: #8b8fa8;
}

* {
  box-sizing: border-box;
  font-family: Inter, system-ui, sans-serif;
}

body {
  margin: 0;
  background: radial-gradient(circle at top, #1a1d2b, #0e0f13);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  width: 95%;
  max-width: 900px;
  background: var(--panel);
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 30px 80px rgba(0,0,0,0.6);
}

h1 {
  margin: 0 0 6px;
  font-size: 26px;
  letter-spacing: 0.5px;
}

.subtitle {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 18px;
}

textarea {
  width: 100%;
  height: 120px;
  resize: none;
  background: #0e1018;
  color: var(--text);
  border: 1px solid #22263a;
  border-radius: 12px;
  padding: 14px;
  font-size: 15px;
  outline: none;
}

textarea:focus {
  border-color: var(--accent);
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.stat {
  background: #101322;
  border-radius: 14px;
  padding: 14px;
  text-align: center;
  border: 1px solid #1f2440;
}

.stat h2 {
  margin: 0;
  font-size: 22px;
  color: var(--accent);
}

.stat p {
  margin: 6px 0 0;
  font-size: 12px;
  color: var(--muted);
}

.visualizer {
  margin-top: 22px;
  height: 120px;
  background: #0c0f1b;
  border-radius: 14px;
  display: flex;
  align-items: flex-end;
  gap: 4px;
  padding: 10px;
  overflow: hidden;
  border: 1px solid #1f2440;
}

.bar {
  width: 8px;
  background: linear-gradient(180deg, var(--accent), var(--accent2));
  border-radius: 4px 4px 0 0;
  transition: height 0.15s ease;
}

.footer {
  margin-top: 14px;
  font-size: 12px;
  color: var(--muted);
  text-align: center;
}
</style>
</head>

<body>
<div class="app">
  <h1>Keyboard Behavior Visualizer</h1>
  <div class="subtitle">This analyzes how you type, not what you type.</div>

  <textarea id="input" placeholder="Start typing here..."></textarea>

  <div class="stats">
    <div class="stat">
      <h2 id="speed">0</h2>
      <p>Keys / minute</p>
    </div>
    <div class="stat">
      <h2 id="pauses">0</h2>
      <p>Long pauses</p>
    </div>
    <div class="stat">
      <h2 id="backs">0</h2>
      <p>Backspaces</p>
    </div>
    <div class="stat">
      <h2 id="bursts">0</h2>
      <p>Speed bursts</p>
    </div>
  </div>

  <div class="visualizer" id="visualizer"></div>

  <div class="footer">Fully offline · Single HTML file · No tracking</div>
</div>

<script>
const input = document.getElementById("input");
const speedEl = document.getElementById("speed");
const pausesEl = document.getElementById("pauses");
const backsEl = document.getElementById("backs");
const burstsEl = document.getElementById("bursts");
const viz = document.getElementById("visualizer");

let keyTimes = [];
let lastKeyTime = null;
let pauses = 0;
let backs = 0;
let bursts = 0;

const MAX_BARS = 60;

function addBar(height) {
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.height = height + "%";
  viz.appendChild(bar);

  if (viz.children.length > MAX_BARS) {
    viz.removeChild(viz.firstChild);
  }
}

input.addEventListener("keydown", e => {
  const now = Date.now();

  if (lastKeyTime) {
    const diff = now - lastKeyTime;

    if (diff > 800) pauses++;
    if (diff < 120) bursts++;

    addBar(Math.min(100, Math.max(10, 600 / diff)));
  }

  if (e.key === "Backspace") backs++;

  lastKeyTime = now;
  keyTimes.push(now);

  // keep last 60 seconds
  keyTimes = keyTimes.filter(t => now - t < 60000);

  speedEl.textContent = keyTimes.length;
  pausesEl.textContent = pauses;
  backsEl.textContent = backs;
  burstsEl.textContent = bursts;
});
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE33() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Human Annoyance Tester</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root {
  --bg: #0b0d12;
  --card: #141827;
  --accent: #ff6b6b;
  --accent2: #4dabf7;
  --text: #f1f3f5;
  --muted: #9aa0b4;
}

* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, Segoe UI, sans-serif;
}

body {
  margin: 0;
  background: radial-gradient(circle at top, #1a1f36, #0b0d12);
  min-height: 100vh;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  width: 95%;
  max-width: 900px;
  background: var(--card);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 40px 90px rgba(0,0,0,.7);
}

h1 {
  margin: 0;
  font-size: 28px;
}

.sub {
  margin-top: 6px;
  color: var(--muted);
  font-size: 14px;
}

.controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 22px;
}

.control {
  background: #0f1322;
  border: 1px solid #22284a;
  border-radius: 14px;
  padding: 14px;
}

.control label {
  font-size: 13px;
  color: var(--muted);
}

.control input {
  width: 100%;
  margin-top: 8px;
}

.value {
  text-align: right;
  font-size: 12px;
  color: var(--accent2);
}

.demo {
  margin-top: 26px;
  padding: 20px;
  background: #0d1020;
  border-radius: 16px;
  border: 1px solid #232a52;
}

button {
  background: linear-gradient(135deg, var(--accent), #ff8787);
  border: none;
  color: #000;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: transform .15s ease, filter .15s ease;
}

button:active {
  transform: scale(.95);
}

.fake-content {
  margin-top: 18px;
  display: grid;
  gap: 10px;
}

.card {
  height: 16px;
  background: linear-gradient(90deg, #1a1f3a, #242a55, #1a1f3a);
  background-size: 200% 100%;
  border-radius: 10px;
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  0% { background-position: 0% }
  100% { background-position: 200% }
}

.status {
  margin-top: 14px;
  font-size: 13px;
  color: var(--muted);
  text-align: center;
}

.annoyance {
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  color: var(--accent);
}
</style>
</head>

<body>
<div class="app">
  <h1>Human Annoyance Tester</h1>
  <div class="sub">Simulate bad UX to feel real user frustration.</div>

  <div class="controls">
    <div class="control">
      <label>Click Delay (ms)</label>
      <input type="range" min="0" max="3000" value="800" id="delay">
      <div class="value" id="delayVal">800ms</div>
    </div>

    <div class="control">
      <label>Random Freeze Chance</label>
      <input type="range" min="0" max="100" value="20" id="freeze">
      <div class="value" id="freezeVal">20%</div>
    </div>

    <div class="control">
      <label>UI Jank Level</label>
      <input type="range" min="0" max="100" value="30" id="jank">
      <div class="value" id="jankVal">30%</div>
    </div>
  </div>

  <div class="demo">
    <button id="actionBtn">Submit Form</button>

    <div class="fake-content" id="content"></div>

    <div class="annoyance" id="annoyance">Annoyance: 0%</div>
    <div class="status" id="status">Waiting for interaction…</div>
  </div>
</div>

<script>
const delay = document.getElementById("delay");
const freeze = document.getElementById("freeze");
const jank = document.getElementById("jank");

const delayVal = document.getElementById("delayVal");
const freezeVal = document.getElementById("freezeVal");
const jankVal = document.getElementById("jankVal");

const btn = document.getElementById("actionBtn");
const content = document.getElementById("content");
const status = document.getElementById("status");
const annoyance = document.getElementById("annoyance");

function updateVals() {
  delayVal.textContent = delay.value + "ms";
  freezeVal.textContent = freeze.value + "%";
  jankVal.textContent = jank.value + "%";
}
updateVals();

[delay, freeze, jank].forEach(i => i.oninput = updateVals);

function buildSkeleton() {
  content.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const c = document.createElement("div");
    c.className = "card";
    content.appendChild(c);
  }
}

btn.onclick = () => {
  status.textContent = "Processing...";
  btn.disabled = true;
  buildSkeleton();

  let annoyanceScore = Math.min(
    100,
    Number(delay.value)/30 +
    Number(freeze.value)/2 +
    Number(jank.value)/2
  );

  annoyance.textContent = "Annoyance: " + Math.round(annoyanceScore) + "%";

  if (Math.random() * 100 < freeze.value) {
    status.textContent = "Page frozen...";
    setTimeout(() => {
      status.textContent = "Recovered from freeze";
    }, 1500);
  }

  setTimeout(() => {
    content.innerHTML = "";
    status.textContent = "Action completed (finally).";
    btn.disabled = false;
  }, Number(delay.value));
};

setInterval(() => {
  if (Math.random() * 100 < jank.value) {
    document.body.style.transform = "translateX(1px)";
    setTimeout(() => document.body.style.transform = "", 50);
  }
}, 400);
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE34() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline Code Minifier & Cleaner</title>
<style>
body{
  font-family:Arial, sans-serif;
  background:#0f1220;
  color:#fff;
  margin:0;
  padding:20px;
}
h1{text-align:center}
textarea{
  width:100%;
  height:200px;
  background:#11142a;
  color:#fff;
  border:1px solid #333;
  padding:10px;
  box-sizing:border-box;
}
button{
  padding:10px 20px;
  margin:10px 5px 10px 0;
  border:none;
  background:#4f7cff;
  color:#fff;
  cursor:pointer;
}
button:hover{opacity:.9}
.stats{
  margin-top:10px;
  font-size:14px;
  opacity:.8;
}
.section{margin-top:20px}
</style>
</head>
<body>

<h1>Offline HTML / CSS / JS Minifier</h1>

<div class="section">
<h3>Input Code</h3>
<textarea id="input" placeholder="Paste HTML, CSS, or JS here"></textarea>
</div>

<button onclick="minify()">Minify</button>
<button onclick="beautify()">Clean / Beautify</button>

<div class="section">
<h3>Output</h3>
<textarea id="output" placeholder="Result appears here"></textarea>
<div class="stats" id="stats"></div>
</div>

<script>
function minify(){
  let code = input.value;
  let originalSize = code.length;

  code = code
    .replace(/<!--[\s\S]*?-->/g,'')        // HTML comments
    .replace(/\/\*[\s\S]*?\*\//g,'')       // CSS/JS comments
    .replace(/\n+/g,'')
    .replace(/\s{2,}/g,' ')
    .replace(/\s*([{}:;,])\s*/g,'$1');

  output.value = code;
  stats.innerText =
    "Original: " + originalSize +
    " chars | Minified: " + code.length +
    " chars | Saved: " + (originalSize - code.length);
}

function beautify(){
  let code = input.value;
  let formatted = '';
  let indent = 0;

  for(let i=0;i<code.length;i++){
    let c = code[i];
    if(c === '{'){
      indent++;
      formatted += '{\n' + '  '.repeat(indent);
    }else if(c === '}'){
      indent--;
      formatted += '\n' + '  '.repeat(indent) + '}';
    }else if(c === ';'){
      formatted += ';\n' + '  '.repeat(indent);
    }else{
      formatted += c;
    }
  }

  output.value = formatted;
  stats.innerText =
    "Beautified length: " + formatted.length + " chars";
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE35() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SEO Meta Generator</title>
<style>
body{
  font-family:Arial, sans-serif;
  background:#0d1117;
  color:#e6edf3;
  padding:20px;
  margin:0;
}
h1{text-align:center}
input, textarea{
  width:100%;
  padding:10px;
  margin:6px 0;
  background:#161b22;
  color:#e6edf3;
  border:1px solid #30363d;
  box-sizing:border-box;
}
button{
  padding:10px 18px;
  background:#238636;
  border:none;
  color:white;
  cursor:pointer;
  margin-top:10px;
}
button:hover{opacity:.9}
.section{margin-top:20px}
.output{
  white-space:pre-wrap;
  background:#010409;
  padding:10px;
  border:1px solid #30363d;
}
.warn{color:#f85149}
.good{color:#3fb950}
small{opacity:.7}
</style>
</head>
<body>

<h1>SEO Meta Generator & Validator</h1>

<div class="section">
<label>Page Title</label>
<input id="title" placeholder="Best Free Website Code Marketplace">
<small>Recommended: 50–60 characters</small>

<label>Meta Description</label>
<textarea id="desc" rows="3" placeholder="Copy free or buy premium website source code built by experienced developers."></textarea>
<small>Recommended: 140–160 characters</small>

<label>Page URL (Canonical)</label>
<input id="url" placeholder="https://example.com/page">
</div>

<button onclick="generate()">Generate & Validate</button>

<div class="section">
<h3>Validation Report</h3>
<div id="report"></div>
</div>

<div class="section">
<h3>Generated Meta Tags</h3>
<div class="output" id="output"></div>
</div>

<script>
function generate(){
  var t = document.getElementById('title').value.trim();
  var d = document.getElementById('desc').value.trim();
  var u = document.getElementById('url').value.trim();
  var r = "";

  // Title check
  if(t.length < 30)
    r += "<div class='warn'>[ERROR] Title too short</div>";
  else if(t.length > 60)
    r += "<div class='warn'>[ERROR] Title too long</div>";
  else
    r += "<div class='good'>[OK] Title length OK</div>";

  // Description check
  if(d.length < 140)
    r += "<div class='warn'>[ERROR] Description too short</div>";
  else if(d.length > 160)
    r += "<div class='warn'>[ERROR] Description too long</div>";
  else
    r += "<div class='good'>[OK] Description length OK</div>";

  // URL check
  if(u.indexOf("http") !== 0)
    r += "<div class='warn'>[ERROR] Canonical URL missing or invalid</div>";
  else
    r += "<div class='good'>[OK] Canonical URL OK</div>";

  document.getElementById('report').innerHTML = r;

  // Generate meta tags
  var metaTags = "<title>" + t + "</title>\n" +
    "<meta name=\"description\" content=\"" + d + "\">\n" +
    "<link rel=\"canonical\" href=\"" + u + "\">\n\n" +
    "<meta property=\"og:title\" content=\"" + t + "\">\n" +
    "<meta property=\"og:description\" content=\"" + d + "\">\n" +
    "<meta property=\"og:url\" content=\"" + u + "\">\n" +
    "<meta property=\"og:type\" content=\"website\">\n\n" +
    "<meta name=\"robots\" content=\"index, follow\">";

  document.getElementById('output').innerText = metaTags;
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE36() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline Website Performance Analyzer</title>
<style>
body{
  font-family:Arial,sans-serif;
  background:#0d1117;
  color:#e6edf3;
  margin:0;
  padding:20px;
}
h1{text-align:center}
textarea,button{
  width:100%;
  margin:6px 0;
  padding:10px;
  background:#161b22;
  color:#e6edf3;
  border:1px solid #30363d;
  box-sizing:border-box;
}
button{
  cursor:pointer;
  background:#238636;
  color:#fff;
  border:none;
}
button:hover{opacity:.9}
#report{
  margin-top:10px;
  padding:10px;
  background:#010409;
  border:1px solid #30363d;
  white-space:pre-wrap;
}
.warn{color:#f85149;}
.good{color:#3fb950;}
</style>
</head>
<body>

<h1>Offline Website Performance Analyzer</h1>

<label>Paste your website HTML here:</label>
<textarea id="input" rows="12" placeholder="Paste full HTML code"></textarea>

<button onclick="analyze()">Analyze Performance</button>

<h3>Report:</h3>
<div id="report"></div>

<script>
function analyze(){
  var code = document.getElementById('input').value;
  var report = "";
  var score = 100;

  // Inline CSS check
  var inlineCSS = code.match(/style\s*=/gi);
  if(inlineCSS && inlineCSS.length>0){
    report += "[WARN] Inline CSS detected: "+inlineCSS.length+" places\n";
    score -= inlineCSS.length*2;
  } else report += "[GOOD] No inline CSS detected\n";

  // Image alt check
  var imgs = code.match(/<img\s+[^>]*>/gi);
  var missingAlt=0;
  if(imgs){
    for(var i=0;i<imgs.length;i++){
      if(!/alt\s*=/.test(imgs[i])) missingAlt++;
    }
  }
  if(missingAlt>0){
    report += "[WARN] "+missingAlt+" image(s) missing alt attribute\n";
    score -= missingAlt*2;
  } else report += "[GOOD] All images have alt attributes\n";

  // Empty links check
  var links = code.match(/<a\s+[^>]*>/gi);
  var emptyLinks=0;
  if(links){
    for(var i=0;i<links.length;i++){
      if(/>\s*<\/a>/.test(links[i]+"")) emptyLinks++;
    }
  }
  if(emptyLinks>0){
    report += "[WARN] "+emptyLinks+" empty link(s) found\n";
    score -= emptyLinks*1;
  } else report += "[GOOD] No empty links\n";

  // Deprecated tags
  var deprecated = code.match(/<font\b|<center\b/gi);
  if(deprecated){
    report += "[WARN] Deprecated HTML tags found: "+deprecated.length+"\n";
    score -= deprecated.length*2;
  } else report += "[GOOD] No deprecated tags\n";

  // Large inline scripts
  var scripts = code.match(/<script[^>]*>[\s\S]*?<\/script>/gi);
  var largeScripts=0;
  if(scripts){
    for(var i=0;i<scripts.length;i++){
      if(scripts[i].length>500) largeScripts++;
    }
  }
  if(largeScripts>0){
    report += "[WARN] "+largeScripts+" large inline script(s) detected (>500 chars)\n";
    score -= largeScripts*2;
  } else report += "[GOOD] No large inline scripts\n";

  report += "\nOverall Score: "+Math.max(score,0)+"/100";
  document.getElementById('report').innerText = report;
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE37() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Procedural Particle Chaos Simulator</title>
<style>
  body { margin:0; overflow:hidden; background:#111; cursor:pointer; }
  canvas { display:block; }
  #info {
    position:absolute; top:10px; left:10px; color:white; font-family:Arial; background:rgba(0,0,0,0.5); padding:5px; border-radius:5px;
  }
</style>
</head>
<body>
<canvas id="canvas"></canvas>
<div id="info">Click anywhere to add more chaos particles!</div>

<script>
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; });

// Particle class
class Particle {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = (Math.random()-0.5)*4;
    this.vy = (Math.random()-0.5)*4;
    this.size = Math.random()*5+2;
    this.color = 'hsl(' + (Math.random()*360) + ',100%,50%)';
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;

    if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

let particles = [];
const PARTICLE_COUNT = 100;
for(let i=0;i<PARTICLE_COUNT;i++){
  particles.push(new Particle(Math.random()*canvas.width, Math.random()*canvas.height));
}

// Animation loop
function animate(){
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<particles.length;i++){
    particles[i].update();
    particles[i].draw();
    for(let j=i+1;j<particles.length;j++){
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist<100){
        ctx.beginPath();
        ctx.strokeStyle = 'hsla(' + (Math.random()*360) + ',100%,50%,0.3)';
        ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(particles[j].x,particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}

animate();

// Add particles on click
canvas.addEventListener('click', e=>{
  for(let i=0;i<20;i++){
    particles.push(new Particle(e.clientX+Math.random()*50-25, e.clientY+Math.random()*50-25));
  }
});
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE38() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline Flashcards</title>
<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px 10px;
  min-height: 100vh;
  color: #fff;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
}

.container {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  width: 90%;
  max-width: 600px;
  backdrop-filter: blur(10px);
}

input, button {
  padding: 12px;
  margin: 8px 0;
  width: 100%;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
}

input {
  background: rgba(255,255,255,0.2);
  color: #fff;
}

input::placeholder {
  color: #eee;
}

input:focus {
  background: rgba(255,255,255,0.4);
}

button {
  background: #ff6f61;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

button:hover {
  background: #ff856f;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

#flashcards {
  margin-top: 20px;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.flashcard {
  background: linear-gradient(120deg, #ff6f61, #fdbb2d);
  color: #fff;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.flashcard:hover {
  transform: translateY(-5px) rotateX(5deg);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}
</style>
</head>
<body>

<h1>Offline Flashcards</h1>

<div class="container">
<input type="text" id="question" placeholder="Enter question">
<input type="text" id="answer" placeholder="Enter answer">
<button onclick="addCard()">Add Flashcard</button>
<button onclick="shuffleCards()">Shuffle Flashcards</button>
</div>

<div id="flashcards"></div>

<script>
// Load flashcards from localStorage
let cards = [];
if(localStorage.getItem('flashcards')){
  cards = JSON.parse(localStorage.getItem('flashcards'));
  renderCards();
}

// Add new flashcard
function addCard(){
  const q = document.getElementById('question').value.trim();
  const a = document.getElementById('answer').value.trim();
  if(q && a){
    cards.push({question:q, answer:a});
    localStorage.setItem('flashcards', JSON.stringify(cards));
    renderCards();
    document.getElementById('question').value="";
    document.getElementById('answer').value="";
  }
}

// Render flashcards
function renderCards(){
  const container = document.getElementById('flashcards');
  container.innerHTML="";
  for(let i=0;i<cards.length;i++){
    const card = document.createElement('div');
    card.className="flashcard";
    card.innerText = cards[i].question;
    card.flipped = false;
    card.onclick = function(){
      card.flipped = !card.flipped;
      card.innerText = card.flipped ? cards[i].answer : cards[i].question;
    };
    container.appendChild(card);
  }
}

// Shuffle flashcards
function shuffleCards(){
  for(let i=cards.length-1;i>0;i--){
    const j = Math.floor(Math.random()* (i+1));
    const temp = cards[i]; cards[i]=cards[j]; cards[j]=temp;
  }
  renderCards();
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE39() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline Habit Tracker</title>
<style>
body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  margin:0; padding:20px; color:#fff; display:flex; flex-direction:column; align-items:center;
}
h1 { margin-bottom:20px; text-shadow:2px 2px 5px rgba(0,0,0,0.3);}
.container { background: rgba(255,255,255,0.1); padding:20px; border-radius:15px; width:90%; max-width:600px; backdrop-filter: blur(10px); }
input, button { padding:10px; margin:5px 0; width:100%; border-radius:8px; border:none; font-size:16px; }
button { background:#ff7e5f; cursor:pointer; font-weight:bold; transition:0.2s; }
button:hover { background:#feb47b; }
#habits { margin-top:20px; display:flex; flex-direction:column; gap:10px; }
.habit { display:flex; justify-content:space-between; align-items:center; background: rgba(0,0,0,0.2); padding:10px; border-radius:10px; transition:0.3s; }
.habit.done { background: rgba(0,255,0,0.3); }
.habit button { width:40px; background:#ff6b6b; border-radius:50%; font-weight:bold; color:#fff; padding:5px 0; }
.habit button:hover { background:#ff8787; }
</style>
</head>
<body>

<h1>Offline Habit Tracker</h1>
<div class="container">
<input type="text" id="habitInput" placeholder="Enter new habit">
<button onclick="addHabit()">Add Habit</button>
<div id="habits"></div>
</div>

<script>
// Load habits from localStorage
let habits = [];
if(localStorage.getItem('habits')){
  habits = JSON.parse(localStorage.getItem('habits'));
  renderHabits();
}

// Add new habit
function addHabit(){
  const val = document.getElementById('habitInput').value.trim();
  if(val){
    habits.push({name:val, done:false});
    localStorage.setItem('habits', JSON.stringify(habits));
    renderHabits();
    document.getElementById('habitInput').value="";
  }
}

// Render habits
function renderHabits(){
  const container = document.getElementById('habits');
  container.innerHTML="";
  for(let i=0;i<habits.length;i++){
    const div = document.createElement('div');
    div.className="habit" + (habits[i].done ? " done" : "");
    div.innerHTML='<span>'+habits[i].name+'</span><div><button onclick="removeHabit('+i+')">x</button><button onclick="toggleDone('+i+')">'+(habits[i].done?'✔':'❌')+'</button></div>';
    container.appendChild(div);
  }
}

// Toggle done
function toggleDone(i){
  habits[i].done = !habits[i].done;
  localStorage.setItem('habits', JSON.stringify(habits));
  renderHabits();
}

// Remove habit
function removeHabit(i){
  habits.splice(i,1);
  localStorage.setItem('habits', JSON.stringify(habits));
  renderHabits();
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE40() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline Decision Log</title>

<style>
body {
  margin: 0;
  min-height: 100vh;
  background: #0b1220;
  font-family: Arial, sans-serif;
  color: #e5e7eb;
  display: flex;
  justify-content: center;
  padding: 30px;
}

.app {
  width: 100%;
  max-width: 900px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form {
  background: #020617;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
}

.form label {
  display: block;
  margin-top: 12px;
  font-size: 14px;
  color: #94a3b8;
}

.form input,
.form textarea {
  width: 100%;
  margin-top: 6px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #1e293b;
  background: #020617;
  color: #e5e7eb;
  outline: none;
  font-size: 14px;
}

.form textarea {
  resize: vertical;
  min-height: 80px;
}

.form button {
  margin-top: 15px;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background: #22c55e;
  color: #022c22;
  font-weight: bold;
  cursor: pointer;
}

.form button:hover {
  background: #4ade80;
}

.list {
  margin-top: 25px;
}

.card {
  background: #020617;
  border-radius: 14px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.45);
}

.card h3 {
  margin: 0 0 8px;
  font-size: 16px;
}

.card p {
  margin: 6px 0;
  font-size: 14px;
  color: #cbd5f5;
}

.card small {
  color: #64748b;
}

.card button {
  margin-top: 10px;
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  background: #ef4444;
  color: white;
  cursor: pointer;
}

.card button:hover {
  background: #dc2626;
}
</style>
</head>

<body>
<div class="app">
  <h1>Decision Log</h1>

  <div class="form">
    <label>Decision</label>
    <input id="decision" placeholder="What decision did you make?">

    <label>Reason</label>
    <textarea id="reason"></textarea>

    <label>Alternatives Considered</label>
    <textarea id="alternatives"></textarea>

    <label>Expected Outcome</label>
    <textarea id="outcome"></textarea>

    <button onclick="addDecision()">Save Decision</button>
  </div>

  <div class="list" id="list"></div>
</div>

<script>
var STORAGE_KEY = "decision_log_entries";

function loadDecisions() {
  var raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  return JSON.parse(raw);
}

function saveDecisions(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function addDecision() {
  var decisionInput = document.getElementById("decision");
  var decisionText = decisionInput.value.trim();
  if (decisionText === "") return;

  var entry = {
    decision: decisionText,
    reason: document.getElementById("reason").value,
    alternatives: document.getElementById("alternatives").value,
    outcome: document.getElementById("outcome").value,
    time: new Date().toLocaleString()
  };

  var data = loadDecisions();
  data.unshift(entry);
  saveDecisions(data);

  decisionInput.value = "";
  document.getElementById("reason").value = "";
  document.getElementById("alternatives").value = "";
  document.getElementById("outcome").value = "";

  render();
}

function deleteDecision(index) {
  var data = loadDecisions();
  data.splice(index, 1);
  saveDecisions(data);
  render();
}

function render() {
  var list = document.getElementById("list");
  list.innerHTML = "";

  var data = loadDecisions();

  for (var i = 0; i < data.length; i++) {
    var d = data[i];

    var card = document.createElement("div");
    card.className = "card";

    var title = document.createElement("h3");
    title.textContent = d.decision;

    var reason = document.createElement("p");
    reason.textContent = "Reason: " + d.reason;

    var alternatives = document.createElement("p");
    alternatives.textContent = "Alternatives: " + d.alternatives;

    var outcome = document.createElement("p");
    outcome.textContent = "Expected Outcome: " + d.outcome;

    var time = document.createElement("small");
    time.textContent = d.time;

    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = (function(idx) {
      return function() {
        deleteDecision(idx);
      };
    })(i);

    card.appendChild(title);
    card.appendChild(reason);
    card.appendChild(alternatives);
    card.appendChild(outcome);
    card.appendChild(time);
    card.appendChild(document.createElement("br"));
    card.appendChild(delBtn);

    list.appendChild(card);
  }
}

render();
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE41() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline Reading Tracker</title>

<style>
body {
  margin: 0;
  min-height: 100vh;
  background: #0f172a;
  font-family: Arial, sans-serif;
  color: #e5e7eb;
  display: flex;
  justify-content: center;
  padding: 30px;
}

.app {
  width: 100%;
  max-width: 900px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form {
  background: #020617;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.5);
}

label {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: #94a3b8;
}

input, textarea {
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #1e293b;
  background: #020617;
  color: #e5e7eb;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 60px;
}

button {
  margin-top: 15px;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background: #38bdf8;
  color: #020617;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #0ea5e9;
}

.list {
  margin-top: 25px;
}

.card {
  background: #020617;
  border-radius: 14px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.45);
}

.card h3 {
  margin: 0 0 6px;
}

.card p {
  margin: 4px 0;
  font-size: 14px;
  color: #cbd5f5;
}

.card small {
  color: #64748b;
}

.card button {
  margin-top: 8px;
  background: #ef4444;
  color: white;
}
</style>
</head>

<body>
<div class="app">
  <h1>Reading Progress Tracker</h1>

  <div class="form">
    <label>Title</label>
    <input id="title">

    <label>Current Progress (page, %, chapter)</label>
    <input id="progress">

    <label>Notes</label>
    <textarea id="notes"></textarea>

    <button onclick="addItem()">Add Reading</button>
  </div>

  <div class="list" id="list"></div>
</div>

<script>
var KEY = "reading_tracker_items";

function loadItems() {
  var raw = localStorage.getItem(KEY);
  if (!raw) return [];
  return JSON.parse(raw);
}

function saveItems(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

function addItem() {
  var title = document.getElementById("title").value.trim();
  if (title === "") return;

  var item = {
    title: title,
    progress: document.getElementById("progress").value,
    notes: document.getElementById("notes").value,
    date: new Date().toLocaleDateString()
  };

  var items = loadItems();
  items.unshift(item);
  saveItems(items);

  document.getElementById("title").value = "";
  document.getElementById("progress").value = "";
  document.getElementById("notes").value = "";

  render();
}

function deleteItem(index) {
  var items = loadItems();
  items.splice(index, 1);
  saveItems(items);
  render();
}

function render() {
  var list = document.getElementById("list");
  list.innerHTML = "";

  var items = loadItems();

  for (var i = 0; i < items.length; i++) {
    var it = items[i];

    var card = document.createElement("div");
    card.className = "card";

    var h = document.createElement("h3");
    h.textContent = it.title;

    var p1 = document.createElement("p");
    p1.textContent = "Progress: " + it.progress;

    var p2 = document.createElement("p");
    p2.textContent = "Notes: " + it.notes;

    var sm = document.createElement("small");
    sm.textContent = "Added: " + it.date;

    var btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = (function(idx) {
      return function() {
        deleteItem(idx);
      };
    })(i);

    card.appendChild(h);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(sm);
    card.appendChild(document.createElement("br"));
    card.appendChild(btn);

    list.appendChild(card);
  }
}

render();
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE42() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Cognitive Traceboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root{
  --bg:#0e1220;
  --panel:#161b34;
  --card:#1f2550;
  --accent:#6aa9ff;
  --accent2:#9b7bff;
  --text:#e6ebff;
  --muted:#9aa3c7;
}

*{box-sizing:border-box;font-family:Inter,system-ui,Arial}
body{
  margin:0;
  background:radial-gradient(circle at top,var(--panel),var(--bg));
  color:var(--text);
  height:100vh;
  overflow:hidden;
}

header{
  padding:16px 20px;
  font-size:20px;
  font-weight:600;
  letter-spacing:0.5px;
  background:linear-gradient(90deg,var(--accent),var(--accent2));
  color:#050713;
}

#ui{
  display:flex;
  height:calc(100vh - 56px);
}

#left{
  width:280px;
  background:var(--panel);
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:12px;
}

#left h3{
  margin:0;
  font-size:14px;
  color:var(--muted);
}

textarea{
  width:100%;
  height:90px;
  resize:none;
  background:var(--card);
  border:none;
  border-radius:10px;
  padding:10px;
  color:var(--text);
  outline:none;
}

button{
  padding:10px;
  border:none;
  border-radius:10px;
  background:linear-gradient(135deg,var(--accent),var(--accent2));
  color:#050713;
  font-weight:600;
  cursor:pointer;
}

button.secondary{
  background:#2a2f55;
  color:var(--text);
}

#timeline{
  flex:1;
  overflow:auto;
  font-size:12px;
}

.entry{
  padding:6px 8px;
  margin-bottom:6px;
  background:#20265a;
  border-radius:6px;
  cursor:pointer;
}

.entry:hover{background:#2c3380}

#board{
  flex:1;
  position:relative;
  overflow:hidden;
}

.node{
  position:absolute;
  min-width:140px;
  max-width:220px;
  padding:10px;
  background:linear-gradient(145deg,#2a3080,#1b2050);
  border-radius:12px;
  cursor:grab;
  box-shadow:0 10px 30px rgba(0,0,0,0.35);
}

.node time{
  display:block;
  font-size:10px;
  color:var(--muted);
  margin-bottom:4px;
}

.node p{
  margin:0;
  font-size:13px;
}

.replay{
  position:absolute;
  inset:0;
  background:rgba(14,18,32,0.9);
  display:none;
  align-items:center;
  justify-content:center;
  font-size:18px;
}
</style>
</head>
<body>

<header>Cognitive Traceboard</header>

<div id="ui">
  <div id="left">
    <h3>Capture Thought</h3>
    <textarea id="thought" placeholder="Write what is in your mind right now..."></textarea>
    <button onclick="addThought()">Add to Board</button>

    <button class="secondary" onclick="replay()">Replay Thinking</button>

    <h3>Timeline</h3>
    <div id="timeline"></div>
  </div>

  <div id="board"></div>
</div>

<div class="replay" id="replayScreen">Replaying cognitive evolution…</div>

<script>
let data = JSON.parse(localStorage.getItem("traceboard") || "[]");
const board = document.getElementById("board");
const timeline = document.getElementById("timeline");

function save(){localStorage.setItem("traceboard",JSON.stringify(data));}

function render(){
  board.innerHTML="";
  timeline.innerHTML="";
  data.forEach((t,i)=>{
    const n=document.createElement("div");
    n.className="node";
    n.style.left=t.x+"px";
    n.style.top=t.y+"px";
    n.innerHTML="<time>"+t.time+"</time><p>"+t.text+"</p>";
    drag(n,t);
    board.appendChild(n);

    const e=document.createElement("div");
    e.className="entry";
    e.textContent=t.time+" — "+t.text.slice(0,30);
    e.onclick=()=>focusNode(i);
    timeline.appendChild(e);
  });
}

function addThought(){
  const text=document.getElementById("thought").value.trim();
  if(!text)return;
  const t={
    text,
    time:new Date().toLocaleTimeString(),
    x:60+Math.random()*400,
    y:60+Math.random()*300
  };
  data.push(t);
  save();
  render();
  document.getElementById("thought").value="";
}

function drag(el,obj){
  let ox,oy;
  el.onmousedown=e=>{
    ox=e.offsetX;oy=e.offsetY;
    document.onmousemove=m=>{
      obj.x=m.pageX-board.offsetLeft-ox;
      obj.y=m.pageY-board.offsetTop-oy;
      el.style.left=obj.x+"px";
      el.style.top=obj.y+"px";
    };
    document.onmouseup=()=>{
      document.onmousemove=null;
      save();
    };
  };
}

function focusNode(i){
  const n=board.children[i];
  n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});
}

async function replay(){
  const screen=document.getElementById("replayScreen");
  screen.style.display="flex";
  board.innerHTML="";
  for(const t of data){
    await new Promise(r=>setTimeout(r,600));
    const n=document.createElement("div");
    n.className="node";
    n.style.left=t.x+"px";
    n.style.top=t.y+"px";
    n.innerHTML="<time>"+t.time+"</time><p>"+t.text+"</p>";
    board.appendChild(n);
  }
  setTimeout(()=>screen.style.display="none",600);
}

render();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE43() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>ClientFlow — Offline Project Manager</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root{
  --bg:#0e1220;
  --panel:#151a30;
  --card:#1d2340;
  --accent:#6c8cff;
  --accent2:#22c55e;
  --danger:#ef4444;
  --text:#e5e7eb;
  --muted:#9ca3af;
  --radius:14px;
}

*{box-sizing:border-box;font-family:Inter,system-ui,Segoe UI,Arial}
body{
  margin:0;
  background:linear-gradient(135deg,#0b0f1d,#121736);
  color:var(--text);
  min-height:100vh;
}

header{
  padding:24px;
  font-size:22px;
  font-weight:600;
  letter-spacing:.3px;
}

.app{
  display:grid;
  grid-template-columns:340px 1fr;
  gap:20px;
  padding:20px;
}

.panel{
  background:var(--panel);
  border-radius:var(--radius);
  padding:20px;
  box-shadow:0 20px 40px rgba(0,0,0,.35);
}

.panel h2{
  margin:0 0 14px;
  font-size:16px;
  color:var(--muted);
  font-weight:500;
}

input,select,textarea,button{
  width:100%;
  background:#0f142b;
  border:1px solid #232860;
  color:var(--text);
  padding:10px 12px;
  border-radius:10px;
  outline:none;
}

textarea{resize:none;height:80px}

input:focus,select:focus,textarea:focus{
  border-color:var(--accent);
}

button{
  cursor:pointer;
  background:linear-gradient(135deg,var(--accent),#4f6cff);
  border:none;
  font-weight:600;
  margin-top:10px;
}

button.secondary{
  background:#0f142b;
  border:1px solid #2a3170;
}

.list{
  display:grid;
  gap:14px;
}

.card{
  background:var(--card);
  border-radius:var(--radius);
  padding:16px;
  box-shadow:0 10px 25px rgba(0,0,0,.3);
  transition:.2s;
}

.card:hover{transform:translateY(-2px)}

.card h3{
  margin:0;
  font-size:16px;
  font-weight:600;
}

.meta{
  font-size:12px;
  color:var(--muted);
  margin-top:4px;
}

.badge{
  display:inline-block;
  padding:3px 8px;
  border-radius:999px;
  font-size:11px;
  margin-right:6px;
}

.priority-high{background:#3b0d12;color:#fca5a5}
.priority-medium{background:#3a2a0d;color:#fde68a}
.priority-low{background:#0d2e1a;color:#86efac}

.actions{
  display:flex;
  gap:8px;
  margin-top:12px;
}

.actions button{
  flex:1;
  padding:8px;
  font-size:12px;
}

.danger{
  background:linear-gradient(135deg,#ef4444,#b91c1c);
}

.topbar{
  display:flex;
  gap:12px;
  margin-bottom:14px;
}

@media(max-width:900px){
  .app{grid-template-columns:1fr}
}
</style>
</head>
<body>

<header>ClientFlow — Offline Project Manager</header>

<div class="app">
  <!-- LEFT -->
  <div class="panel">
    <h2>Add / Edit Entry</h2>
    <input id="name" placeholder="Client or Project Name">
    <input id="category" placeholder="Category (Web, Design, App)">
    <select id="priority">
      <option value="high">High Priority</option>
      <option value="medium">Medium Priority</option>
      <option value="low">Low Priority</option>
    </select>
    <select id="status">
      <option>Active</option>
      <option>Paused</option>
      <option>Completed</option>
    </select>
    <textarea id="notes" placeholder="Internal notes, requirements, reminders"></textarea>
    <button onclick="save()">Save Entry</button>
    <button class="secondary" onclick="resetForm()">Clear</button>
  </div>

  <!-- RIGHT -->
  <div class="panel">
    <div class="topbar">
      <input id="search" placeholder="Search..." oninput="render()">
      <select id="filter" onchange="render()">
        <option value="">All</option>
        <option>Active</option>
        <option>Paused</option>
        <option>Completed</option>
      </select>
    </div>

    <div id="list" class="list"></div>
  </div>
</div>

<script>
var data = JSON.parse(localStorage.getItem("clientflow") || "[]");
var editId = null;

function save(){
  var entry={
    id: editId || Date.now(),
    name: name.value.trim(),
    category: category.value.trim(),
    priority: priority.value,
    status: status.value,
    notes: notes.value.trim()
  };
  if(!entry.name) return;

  if(editId){
    data = data.map(function(i){return i.id===editId?entry:i});
  }else{
    data.unshift(entry);
  }
  persist();
  resetForm();
}

function edit(id){
  var e=data.find(function(i){return i.id===id});
  editId=id;
  name.value=e.name;
  category.value=e.category;
  priority.value=e.priority;
  status.value=e.status;
  notes.value=e.notes;
}

function removeEntry(id){
  if(!confirm("Delete this entry?")) return;
  data=data.filter(function(i){return i.id!==id});
  persist();
}

function persist(){
  localStorage.setItem("clientflow",JSON.stringify(data));
  render();
}

function resetForm(){
  editId=null;
  name.value="";
  category.value="";
  notes.value="";
}

function render(){
  list.innerHTML="";
  var s=search.value.toLowerCase();
  var f=filter.value;

  data.filter(function(i){
    return (!f || i.status===f) &&
           (i.name.toLowerCase().includes(s) ||
            i.category.toLowerCase().includes(s) ||
            i.notes.toLowerCase().includes(s));
  }).forEach(function(i){
    var pClass="priority-"+i.priority;
    list.innerHTML+=
      '<div class="card">'+
      '<h3>'+i.name+'</h3>'+
      '<div class="meta">'+i.category+' • '+i.status+'</div>'+
      '<div style="margin-top:8px">'+
      '<span class="badge '+pClass+'">'+i.priority+'</span>'+
      '</div>'+
      '<div class="meta" style="margin-top:8px">'+i.notes+'</div>'+
      '<div class="actions">'+
      '<button onclick="edit('+i.id+')">Edit</button>'+
      '<button class="danger" onclick="removeEntry('+i.id+')">Delete</button>'+
      '</div>'+
      '</div>';
  });
}

render();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE44() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>FlagSmith Lite — Offline Feature Flag Manager</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root{
  --bg:#0e1117;
  --panel:#161b22;
  --border:#30363d;
  --text:#e6edf3;
  --muted:#8b949e;
  --accent:#3fb950;
  --danger:#f85149;
}

*{box-sizing:border-box;font-family:system-ui,-apple-system,Segoe UI,Roboto}

body{
  margin:0;
  background:var(--bg);
  color:var(--text);
  padding:30px;
}

h1{
  margin:0 0 6px 0;
  font-size:22px;
  font-weight:600;
}

.subtitle{
  color:var(--muted);
  font-size:13px;
  margin-bottom:20px;
}

.container{
  display:grid;
  grid-template-columns:300px 1fr;
  gap:20px;
}

.panel{
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:10px;
  padding:16px;
}

label{
  font-size:12px;
  color:var(--muted);
  display:block;
  margin-bottom:6px;
}

input, select{
  width:100%;
  padding:8px;
  border-radius:6px;
  border:1px solid var(--border);
  background:#0d1117;
  color:var(--text);
  margin-bottom:12px;
}

button{
  width:100%;
  padding:9px;
  border-radius:6px;
  border:1px solid var(--border);
  background:#21262d;
  color:var(--text);
  cursor:pointer;
}

button.primary{
  background:var(--accent);
  border:none;
  color:#0e1117;
  font-weight:600;
}

button.danger{
  background:var(--danger);
  border:none;
  color:white;
}

button:hover{opacity:.9}

.flag{
  border-bottom:1px solid var(--border);
  padding:10px 0;
}

.flag:last-child{border-bottom:none}

.flag-name{
  font-weight:600;
}

.flag-meta{
  font-size:12px;
  color:var(--muted);
  margin:4px 0;
}

.toggle{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:6px;
}

.codebox{
  background:#0d1117;
  border:1px solid var(--border);
  border-radius:6px;
  padding:10px;
  font-size:12px;
  white-space:pre-wrap;
  color:#c9d1d9;
}
</style>
</head>

<body>

<h1>FlagSmith Lite</h1>
<div class="subtitle">Offline feature flag manager for developers</div>

<div class="container">

  <div class="panel">
    <label>Feature Name</label>
    <input id="fname" placeholder="new_checkout_ui">

    <label>Environment</label>
    <select id="fenv">
      <option>development</option>
      <option>staging</option>
      <option>production</option>
    </select>

    <button class="primary" onclick="addFlag()">Add Feature Flag</button>

    <hr style="border-color:var(--border);margin:16px 0">

    <button onclick="exportFlags()">Export JSON</button>
    <button onclick="importFlags()">Import JSON</button>
    <button class="danger" onclick="clearAll()">Clear All</button>
  </div>

  <div class="panel">
    <div id="flags"></div>

    <h3 style="margin-top:20px;font-size:14px;">Live Config Output</h3>
    <div class="codebox" id="output"></div>
  </div>

</div>

<script>
var storeKey = "flagsmith_lite_data";

function loadFlags(){
  return JSON.parse(localStorage.getItem(storeKey) || "[]");
}

function saveFlags(data){
  localStorage.setItem(storeKey, JSON.stringify(data));
}

function addFlag(){
  var name = document.getElementById("fname").value.trim();
  var env = document.getElementById("fenv").value;
  if(!name) return;

  var data = loadFlags();
  data.push({name:name, env:env, enabled:false});
  saveFlags(data);
  document.getElementById("fname").value="";
  render();
}

function toggleFlag(i){
  var data = loadFlags();
  data[i].enabled = !data[i].enabled;
  saveFlags(data);
  render();
}

function removeFlag(i){
  var data = loadFlags();
  data.splice(i,1);
  saveFlags(data);
  render();
}

function exportFlags(){
  alert(JSON.stringify(loadFlags(), null, 2));
}

function importFlags(){
  var json = prompt("Paste flag JSON");
  if(!json) return;
  try{
    saveFlags(JSON.parse(json));
    render();
  }catch(e){
    alert("Invalid JSON");
  }
}

function clearAll(){
  if(confirm("Delete all flags?")){
    localStorage.removeItem(storeKey);
    render();
  }
}

function render(){
  var data = loadFlags();
  var box = document.getElementById("flags");
  box.innerHTML="";

  data.forEach(function(f,i){
    var d = document.createElement("div");
    d.className="flag";
    d.innerHTML =
      '<div class="flag-name">'+f.name+'</div>'+
      '<div class="flag-meta">'+f.env+'</div>'+
      '<div class="toggle">'+
        '<button onclick="toggleFlag('+i+')">'+(f.enabled?"Disable":"Enable")+'</button>'+
        '<button onclick="removeFlag('+i+')">Delete</button>'+
      '</div>';
    box.appendChild(d);
  });

  document.getElementById("output").textContent =
    JSON.stringify(data.reduce(function(a,f){
      a[f.name+"@"+f.env]=f.enabled;
      return a;
    },{}),null,2);
}

render();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE45() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SpecGuard — API Contract Validator</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root{
  --bg:#0c0f14;
  --panel:#151a22;
  --border:#2b3240;
  --text:#e5e9f0;
  --muted:#9aa4b2;
  --good:#4ade80;
  --bad:#f87171;
  --warn:#facc15;
}

*{box-sizing:border-box;font-family:system-ui,-apple-system,Segoe UI,Roboto}

body{
  margin:0;
  background:var(--bg);
  color:var(--text);
  padding:28px;
}

h1{
  margin:0;
  font-size:22px;
  font-weight:600;
}

.sub{
  color:var(--muted);
  font-size:13px;
  margin-bottom:20px;
}

.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
}

.panel{
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:10px;
  padding:14px;
}

label{
  font-size:12px;
  color:var(--muted);
  display:block;
  margin-bottom:6px;
}

textarea{
  width:100%;
  height:220px;
  resize:vertical;
  padding:10px;
  border-radius:8px;
  border:1px solid var(--border);
  background:#0b0e13;
  color:var(--text);
  font-size:13px;
}

button{
  margin-top:12px;
  padding:9px 14px;
  border-radius:8px;
  border:1px solid var(--border);
  background:#1e2533;
  color:var(--text);
  cursor:pointer;
}

button.primary{
  background:#3b82f6;
  border:none;
  font-weight:600;
}

.results{
  margin-top:14px;
  font-size:13px;
}

.ok{color:var(--good)}
.err{color:var(--bad)}
.warn{color:var(--warn)}

.item{
  border-bottom:1px solid var(--border);
  padding:6px 0;
}
.item:last-child{border-bottom:none}
</style>
</head>

<body>

<h1>SpecGuard</h1>
<div class="sub">Offline API contract validation utility</div>

<div class="grid">
  <div class="panel">
    <label>Expected Schema (example)</label>
    <textarea id="schema">
{
  "id": "number",
  "name": "string",
  "email": "string",
  "active": "boolean"
}
    </textarea>
  </div>

  <div class="panel">
    <label>Actual API Response</label>
    <textarea id="response">
{
  "id": 12,
  "name": "Alex",
  "email": "alex@mail.com",
  "active": true
}
    </textarea>
  </div>
</div>

<button class="primary" onclick="validate()">Validate Contract</button>

<div class="panel results" id="results"></div>

<script>
var KEY = "specguard_data";

function save(){
  localStorage.setItem(KEY, JSON.stringify({
    schema:document.getElementById("schema").value,
    response:document.getElementById("response").value
  }));
}

function load(){
  var d = JSON.parse(localStorage.getItem(KEY) || "{}");
  if(d.schema) document.getElementById("schema").value = d.schema;
  if(d.response) document.getElementById("response").value = d.response;
}

function typeOf(v){
  if(Array.isArray(v)) return "array";
  return typeof v;
}

function validate(){
  save();
  var out = document.getElementById("results");
  out.innerHTML = "";

  var schema, response;
  try{
    schema = JSON.parse(document.getElementById("schema").value);
    response = JSON.parse(document.getElementById("response").value);
  }catch(e){
    out.innerHTML = "<div class='err'>Invalid JSON input</div>";
    return;
  }

  var issues = 0;

  for(var k in schema){
    if(!(k in response)){
      issues++;
      out.innerHTML += "<div class='item err'>Missing key: "+k+"</div>";
    }else{
      var expected = schema[k];
      var actual = typeOf(response[k]);
      if(actual !== expected){
        issues++;
        out.innerHTML += "<div class='item warn'>Type mismatch on "+k+" (expected "+expected+", got "+actual+")</div>";
      }else{
        out.innerHTML += "<div class='item ok'>"+k+" OK</div>";
      }
    }
  }

  for(var r in response){
    if(!(r in schema)){
      issues++;
      out.innerHTML += "<div class='item warn'>Unexpected key: "+r+"</div>";
    }
  }

  if(issues === 0){
    out.innerHTML = "<div class='ok'>✔ API contract validated successfully</div>";
  }
}

load();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE46() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>TraceNote — Offline Action Logger</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root{
  --background:#0d1117;
  --panel:#161b22;
  --border:#30363d;
  --text:#e6edf3;
  --muted:#8b949e;
  --accent:#58a6ff;
  --low:#3fb950;
  --medium:#d29922;
  --high:#f85149;
  --radius:14px;
  --mono:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

*{
  box-sizing:border-box;
}

body{
  margin:0;
  background:var(--background);
  color:var(--text);
  font-family:system-ui,-apple-system,Segoe UI,Roboto;
}

header{
  padding:18px 24px;
  border-bottom:1px solid var(--border);
}

header h1{
  margin:0;
  font-size:20px;
}

main{
  display:grid;
  grid-template-columns:320px 1fr;
  gap:16px;
  padding:16px;
}

.panel{
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:16px;
}

.panel h2{
  margin:0 0 12px;
  font-size:13px;
  text-transform:uppercase;
  letter-spacing:.8px;
  color:var(--muted);
}

label{
  font-size:12px;
  color:var(--muted);
}

input, select, textarea{
  width:100%;
  margin:6px 0 12px;
  padding:10px;
  background:#0d1117;
  border:1px solid var(--border);
  border-radius:10px;
  color:var(--text);
  font-size:13px;
}

textarea{
  resize:vertical;
  min-height:80px;
}

button{
  width:100%;
  padding:10px;
  border-radius:10px;
  border:1px solid var(--border);
  background:var(--accent);
  color:#000;
  font-weight:600;
  cursor:pointer;
}

button.secondary{
  background:#21262d;
  color:var(--text);
  margin-top:8px;
}

.list{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.entry{
  background:#0d1117;
  border:1px solid var(--border);
  border-radius:12px;
  padding:12px;
}

.entry-header{
  display:flex;
  justify-content:space-between;
  font-size:12px;
  color:var(--muted);
  font-family:var(--mono);
}

.badge{
  padding:2px 8px;
  border-radius:999px;
  font-size:11px;
  font-weight:600;
}

.low{background:rgba(63,185,80,.15);color:var(--low)}
.medium{background:rgba(210,153,34,.15);color:var(--medium)}
.high{background:rgba(248,81,73,.15);color:var(--high)}

.entry h3{
  margin:8px 0 6px;
  font-size:14px;
}

.entry p{
  margin:0;
  font-size:13px;
  color:#c9d1d9;
}

.search{
  margin-bottom:12px;
}

footer{
  padding:12px;
  text-align:center;
  font-size:12px;
  color:var(--muted);
}
</style>
</head>
<body>

<header>
  <h1>TraceNote — Offline Action Logger</h1>
</header>

<main>
  <div class="panel">
    <h2>New Entry</h2>

    <label for="titleInput">Title</label>
    <input id="titleInput" type="text">

    <label for="categoryInput">Category</label>
    <input id="categoryInput" type="text" placeholder="bug, study, incident">

    <label for="severitySelect">Severity</label>
    <select id="severitySelect">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <label for="detailsInput">Details</label>
    <textarea id="detailsInput"></textarea>

    <button id="saveButton">Save Entry</button>
    <button class="secondary" id="exportButton">Export JSON</button>
    <button class="secondary" id="clearButton">Clear All</button>
  </div>

  <div class="panel">
    <h2>Log History</h2>
    <input id="searchInput" class="search" placeholder="Search entries">
    <div id="entryList" class="list"></div>
  </div>
</main>

<footer>
  Local-only · No accounts · No tracking · Single HTML file
</footer>

<script>
(function () {
  "use strict";

  var STORAGE_KEY = "tracenote.entries";

  var titleInputElement = document.getElementById("titleInput");
  var categoryInputElement = document.getElementById("categoryInput");
  var severitySelectElement = document.getElementById("severitySelect");
  var detailsInputElement = document.getElementById("detailsInput");
  var searchInputElement = document.getElementById("searchInput");

  var saveButtonElement = document.getElementById("saveButton");
  var exportButtonElement = document.getElementById("exportButton");
  var clearButtonElement = document.getElementById("clearButton");

  var entryListElement = document.getElementById("entryList");

  var entries = loadEntries();

  function loadEntries() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === null) {
        return [];
      }
      return JSON.parse(stored);
    } catch (error) {
      return [];
    }
  }

  function saveEntries() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }

  function generateId() {
    if (window.crypto && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return String(Date.now()) + Math.random().toString(16).slice(2);
  }

  function resetForm() {
    titleInputElement.value = "";
    categoryInputElement.value = "";
    detailsInputElement.value = "";
    severitySelectElement.value = "low";
  }

  function addEntry() {
    var titleValue = titleInputElement.value.trim();
    if (titleValue.length === 0) {
      return;
    }

    var entry = {
      id: generateId(),
      title: titleValue,
      category: categoryInputElement.value.trim() || "uncategorized",
      severity: severitySelectElement.value,
      details: detailsInputElement.value.trim(),
      time: new Date().toISOString()
    };

    entries.unshift(entry);
    saveEntries();
    resetForm();
    renderEntries(searchInputElement.value);
  }

  function renderEntries(filterText) {
    var search = filterText.toLowerCase();
    entryListElement.innerHTML = "";

    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var searchable = JSON.stringify(entry).toLowerCase();

      if (searchable.indexOf(search) === -1) {
        continue;
      }

      var entryElement = document.createElement("div");
      entryElement.className = "entry";

      entryElement.innerHTML =
        '<div class="entry-header">' +
          '<span>' + new Date(entry.time).toLocaleString() + '</span>' +
          '<span class="badge ' + entry.severity + '">' + entry.category + '</span>' +
        '</div>' +
        '<h3>' + entry.title + '</h3>' +
        '<p>' + entry.details + '</p>';

      entryListElement.appendChild(entryElement);
    }
  }

  function exportEntries() {
    var blob = new Blob(
      [JSON.stringify(entries, null, 2)],
      { type: "application/json" }
    );

    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "tracenote-export.json";
    link.click();
  }

  function clearAllEntries() {
    var confirmed = window.confirm("Delete all entries?");
    if (!confirmed) {
      return;
    }
    entries = [];
    saveEntries();
    renderEntries("");
  }

  saveButtonElement.addEventListener("click", addEntry);
  exportButtonElement.addEventListener("click", exportEntries);
  clearButtonElement.addEventListener("click", clearAllEntries);

  searchInputElement.addEventListener("input", function (event) {
    renderEntries(event.target.value);
  });

  renderEntries("");
})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE47() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>StateMirror — Local State Snapshot Tool</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root{
  --background:#0e1117;
  --panel:#161b22;
  --border:#30363d;
  --text:#e6edf3;
  --muted:#8b949e;
  --accent:#7ee787;
  --radius:14px;
  --mono:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

*{
  box-sizing:border-box;
}

body{
  margin:0;
  background:var(--background);
  color:var(--text);
  font-family:system-ui,-apple-system,Segoe UI,Roboto;
}

header{
  padding:18px 24px;
  border-bottom:1px solid var(--border);
}

header h1{
  margin:0;
  font-size:20px;
}

main{
  display:grid;
  grid-template-columns:1fr 380px;
  gap:16px;
  padding:16px;
}

.panel{
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:16px;
}

.panel h2{
  margin:0 0 12px;
  font-size:13px;
  text-transform:uppercase;
  letter-spacing:.8px;
  color:var(--muted);
}

textarea{
  width:100%;
  min-height:260px;
  resize:vertical;
  padding:12px;
  background:#0d1117;
  border:1px solid var(--border);
  border-radius:12px;
  color:var(--text);
  font-family:var(--mono);
  font-size:13px;
}

input{
  width:100%;
  margin:6px 0 12px;
  padding:10px;
  background:#0d1117;
  border:1px solid var(--border);
  border-radius:10px;
  color:var(--text);
  font-size:13px;
}

button{
  width:100%;
  padding:10px;
  border-radius:10px;
  border:1px solid var(--border);
  background:var(--accent);
  color:#000;
  font-weight:600;
  cursor:pointer;
}

button.secondary{
  background:#21262d;
  color:var(--text);
  margin-top:8px;
}

.snapshot{
  border:1px solid var(--border);
  border-radius:12px;
  padding:10px;
  background:#0d1117;
  margin-bottom:10px;
}

.snapshot-title{
  font-size:13px;
  font-weight:600;
}

.snapshot-time{
  font-size:11px;
  color:var(--muted);
  margin-bottom:8px;
}

.snapshot button{
  margin-top:6px;
}

footer{
  padding:12px;
  text-align:center;
  font-size:12px;
  color:var(--muted);
}
</style>
</head>
<body>

<header>
  <h1>StateMirror — Local State Snapshot Tool</h1>
</header>

<main>
  <div class="panel">
    <h2>Current State</h2>
    <textarea id="stateInput" placeholder="Paste config, notes, JSON, ideas..."></textarea>
  </div>

  <div class="panel">
    <h2>Snapshots</h2>

    <input id="snapshotNameInput" placeholder="Snapshot name">

    <button id="saveSnapshotButton">Save Snapshot</button>
    <button class="secondary" id="exportSnapshotsButton">Export All</button>
    <button class="secondary" id="clearSnapshotsButton">Clear All</button>

    <div id="snapshotList"></div>
  </div>
</main>

<footer>
  Offline · Local snapshots · Single HTML file
</footer>

<script>
(function () {
  "use strict";

  var STORAGE_KEY = "statemirror.snapshots";

  var stateInputElement = document.getElementById("stateInput");
  var snapshotNameInputElement = document.getElementById("snapshotNameInput");
  var snapshotListElement = document.getElementById("snapshotList");

  var saveSnapshotButtonElement = document.getElementById("saveSnapshotButton");
  var exportSnapshotsButtonElement = document.getElementById("exportSnapshotsButton");
  var clearSnapshotsButtonElement = document.getElementById("clearSnapshotsButton");

  var snapshots = loadSnapshots();

  function loadSnapshots() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === null) {
        return [];
      }
      return JSON.parse(stored);
    } catch (error) {
      return [];
    }
  }

  function saveSnapshots() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshots));
  }

  function createSnapshot() {
    var nameValue = snapshotNameInputElement.value.trim();
    if (nameValue.length === 0) {
      nameValue = "Snapshot";
    }

    var snapshot = {
      id: generateId(),
      name: nameValue,
      content: stateInputElement.value,
      time: new Date().toISOString()
    };

    snapshots.unshift(snapshot);
    saveSnapshots();
    snapshotNameInputElement.value = "";
    renderSnapshots();
  }

  function generateId() {
    return String(Date.now()) + Math.random().toString(16).slice(2);
  }

  function restoreSnapshot(snapshot) {
    stateInputElement.value = snapshot.content;
  }

  function renderSnapshots() {
    snapshotListElement.innerHTML = "";

    for (var i = 0; i < snapshots.length; i++) {
      var snapshot = snapshots[i];

      var container = document.createElement("div");
      container.className = "snapshot";

      container.innerHTML =
        '<div class="snapshot-title">' + snapshot.name + '</div>' +
        '<div class="snapshot-time">' + new Date(snapshot.time).toLocaleString() + '</div>';

      var restoreButton = document.createElement("button");
      restoreButton.textContent = "Restore";
      restoreButton.addEventListener("click", function (snap) {
        return function () {
          restoreSnapshot(snap);
        };
      }(snapshot));

      container.appendChild(restoreButton);
      snapshotListElement.appendChild(container);
    }
  }

  function exportAllSnapshots() {
    var blob = new Blob(
      [JSON.stringify(snapshots, null, 2)],
      { type: "application/json" }
    );

    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "statemirror-snapshots.json";
    link.click();
  }

  function clearAllSnapshots() {
    var confirmed = window.confirm("Delete all snapshots?");
    if (!confirmed) {
      return;
    }

    snapshots = [];
    saveSnapshots();
    renderSnapshots();
  }

  saveSnapshotButtonElement.addEventListener("click", createSnapshot);
  exportSnapshotsButtonElement.addEventListener("click", exportAllSnapshots);
  clearSnapshotsButtonElement.addEventListener("click", clearAllSnapshots);

  renderSnapshots();
})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE48() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DOM Snapshot Diff — Offline Version Tracker</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root{
  --bg:#0f1220;
  --panel:#171a2e;
  --border:#2a2f55;
  --text:#e8ebff;
  --muted:#9aa0ff;
  --add:#1f8f5f;
  --remove:#a33b3b;
  --same:#2a2f55;
}

*{box-sizing:border-box;font-family:system-ui,Segoe UI,Roboto,Arial}

body{
  margin:0;
  background:var(--bg);
  color:var(--text);
}

header{
  padding:16px 20px;
  border-bottom:1px solid var(--border);
  font-weight:700;
  font-size:18px;
}

main{
  display:grid;
  grid-template-columns:1fr 320px;
  height:calc(100vh - 58px);
}

.editor{
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:10px;
}

textarea{
  flex:1;
  background:var(--panel);
  color:var(--text);
  border:1px solid var(--border);
  padding:12px;
  resize:none;
  font-family:Consolas,monospace;
  font-size:13px;
}

button{
  background:#4f63ff;
  color:#fff;
  border:none;
  padding:10px 14px;
  cursor:pointer;
  font-weight:600;
}

button.secondary{
  background:var(--panel);
  border:1px solid var(--border);
}

.sidebar{
  border-left:1px solid var(--border);
  padding:12px;
  display:flex;
  flex-direction:column;
  gap:10px;
}

.snapshot{
  border:1px solid var(--border);
  padding:8px;
  cursor:pointer;
  background:var(--panel);
  font-size:13px;
}

.snapshot.active{
  outline:2px solid #4f63ff;
}

.diff{
  padding:10px;
  border-top:1px solid var(--border);
  overflow:auto;
  font-family:Consolas,monospace;
  font-size:13px;
}

.line.add{background:rgba(31,143,95,0.25)}
.line.remove{background:rgba(163,59,59,0.25)}
.line.same{background:rgba(42,47,85,0.25)}

.line{
  padding:2px 6px;
  white-space:pre-wrap;
}
</style>
</head>
<body>

<header>DOM Snapshot Diff — Offline Version Tracker</header>

<main>
  <div class="editor">
    <textarea id="code" placeholder="Paste HTML code here..."></textarea>
    <div>
      <button onclick="saveSnapshot()">Save Snapshot</button>
      <button class="secondary" onclick="compare()">Compare Last Two</button>
    </div>
    <div id="diff" class="diff"></div>
  </div>

  <div class="sidebar">
    <strong>Snapshots</strong>
    <div id="list"></div>
  </div>
</main>

<script>
const KEY = "dom_snapshots_v1";
let snapshots = JSON.parse(localStorage.getItem(KEY) || "[]");

function save(){
  localStorage.setItem(KEY, JSON.stringify(snapshots));
}

function saveSnapshot(){
  const code = document.getElementById("code").value;
  if(!code.trim()) return;
  snapshots.push({
    time:new Date().toLocaleString(),
    code
  });
  save();
  render();
}

function render(){
  const list = document.getElementById("list");
  list.innerHTML = "";
  snapshots.forEach((s,i)=>{
    const div = document.createElement("div");
    div.className = "snapshot";
    div.textContent = (i+1)+". "+s.time;
    div.onclick = ()=>document.getElementById("code").value = s.code;
    list.appendChild(div);
  });
}

function compare(){
  if(snapshots.length < 2) return;
  const a = snapshots[snapshots.length-2].code.split("\n");
  const b = snapshots[snapshots.length-1].code.split("\n");
  const diff = document.getElementById("diff");
  diff.innerHTML = "";

  const max = Math.max(a.length,b.length);
  for(let i=0;i<max;i++){
    const line = document.createElement("div");
    if(a[i] === b[i]){
      line.className="line same";
      line.textContent="  "+(a[i]||"");
    }else{
      if(a[i]){
        const r = document.createElement("div");
        r.className="line remove";
        r.textContent="- "+a[i];
        diff.appendChild(r);
      }
      if(b[i]){
        const ad = document.createElement("div");
        ad.className="line add";
        ad.textContent="+ "+b[i];
        diff.appendChild(ad);
      }
      continue;
    }
    diff.appendChild(line);
  }
}

render();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE49() {
  const code = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Decision Trace Logger</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
body {
  margin: 0;
  background: #0e0e14;
  color: #eaeaf0;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  padding: 16px;
  background: #151520;
  font-weight: bold;
  border-bottom: 1px solid #2a2a3a;
}

main {
  display: flex;
  height: calc(100vh - 54px);
}

section {
  flex: 1;
  padding: 16px;
  border-right: 1px solid #2a2a3a;
}

section:last-child {
  border-right: none;
}

input, textarea, select {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  background: #151520;
  color: #eaeaf0;
  border: 1px solid #2a2a3a;
}

button {
  padding: 10px;
  background: #4a63ff;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.entry {
  border: 1px solid #2a2a3a;
  padding: 10px;
  margin-bottom: 10px;
  background: #151520;
  font-size: 13px;
}
</style>
</head>

<body>

<header>Offline Decision Trace Logger</header>

<main>
<section>
  <input id="decision" placeholder="Decision">
  <textarea id="reason" placeholder="Reason"></textarea>
  <select id="confidence">
    <option value="Low">Low confidence</option>
    <option value="Medium">Medium confidence</option>
    <option value="High">High confidence</option>
  </select>
  <textarea id="expect" placeholder="Expected outcome"></textarea>
  <textarea id="actual" placeholder="Actual outcome (optional)"></textarea>
  <button onclick="addEntry()">Save Decision</button>
</section>

<section id="log"></section>
</main>

<script>
var KEY = "decision_trace_v1";
var data = [];

function loadData() {
  var raw = localStorage.getItem(KEY);
  if (raw) {
    data = JSON.parse(raw);
  }
}

function saveData() {
  localStorage.setItem(KEY, JSON.stringify(data));
}

function addEntry() {
  var d = document.getElementById("decision").value;
  var r = document.getElementById("reason").value;
  var c = document.getElementById("confidence").value;
  var e = document.getElementById("expect").value;
  var a = document.getElementById("actual").value;

  if (d === "" || r === "") return;

  data.push({
    decision: d,
    reason: r,
    confidence: c,
    expected: e,
    actual: a,
    time: new Date().toLocaleString()
  });

  saveData();
  render();
}

function render() {
  var box = document.getElementById("log");
  box.innerHTML = "";

  for (var i = data.length - 1; i >= 0; i--) {
    var x = data[i];
    var div = document.createElement("div");
    div.className = "entry";
    div.innerHTML =
      "<strong>" + x.decision + "</strong><br>" +
      "Reason: " + x.reason + "<br>" +
      "Confidence: " + x.confidence + "<br>" +
      "Expected: " + x.expected + "<br>" +
      "Actual: " + x.actual + "<br>" +
      "Time: " + x.time;
    box.appendChild(div);
  }
}

loadData();
render();
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE50() {
  const code = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Offline Focus Session Recorder</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
body {
  margin: 0;
  background: #0d0f16;
  color: #e8eaf2;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  padding: 16px;
  background: #14172a;
  border-bottom: 1px solid #2a2f4a;
  font-weight: bold;
}

main {
  padding: 16px;
}

button {
  padding: 10px 14px;
  background: #4a63ff;
  color: #ffffff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-right: 6px;
}

button.stop {
  background: #a33b3b;
}

.stat {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #2a2f4a;
  background: #14172a;
  font-size: 13px;
}

.session {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #2a2f4a;
  background: #14172a;
  font-size: 12px;
}
</style>
</head>

<body>

<header>Offline Focus Session Recorder</header>

<main>
  <button onclick="startSession()">Start Session</button>
  <button class="stop" onclick="stopSession()">Stop Session</button>

  <div class="stat" id="live">
    Status: Idle
  </div>

  <div id="sessions"></div>
</main>

<script>
var KEY = "focus_sessions_v1";
var sessions = [];
var active = false;
var startTime = 0;
var keys = 0;
var clicks = 0;
var lastAction = 0;
var idleTime = 0;
var idleTimer = null;

function loadData() {
  var raw = localStorage.getItem(KEY);
  if (raw) {
    sessions = JSON.parse(raw);
  }
}

function saveData() {
  localStorage.setItem(KEY, JSON.stringify(sessions));
}

function now() {
  return new Date().getTime();
}

function activity() {
  if (!active) return;
  keys = keys + 1;
  lastAction = now();
}

function mouseActivity() {
  if (!active) return;
  clicks = clicks + 1;
  lastAction = now();
}

function startSession() {
  if (active) return;
  active = true;
  startTime = now();
  lastAction = startTime;
  keys = 0;
  clicks = 0;
  idleTime = 0;

  if (idleTimer) {
    clearInterval(idleTimer);
  }

  idleTimer = setInterval(checkIdle, 1000);
  updateLive();
}

function stopSession() {
  if (!active) return;
  active = false;

  clearInterval(idleTimer);

  var end = now();
  sessions.push({
    start: new Date(startTime).toLocaleString(),
    end: new Date(end).toLocaleString(),
    duration: Math.round((end - startTime) / 1000),
    keys: keys,
    clicks: clicks,
    idle: idleTime
  });

  saveData();
  render();
  updateLive();
}

function checkIdle() {
  var diff = now() - lastAction;
  if (diff > 5000) {
    idleTime = idleTime + 1;
  }
  updateLive();
}

function updateLive() {
  var box = document.getElementById("live");
  if (!active) {
    box.innerHTML = "Status: Idle";
    return;
  }

  box.innerHTML =
    "Status: Recording<br>" +
    "Keys pressed: " + keys + "<br>" +
    "Mouse clicks: " + clicks + "<br>" +
    "Idle seconds: " + idleTime;
}

function render() {
  var box = document.getElementById("sessions");
  box.innerHTML = "";

  for (var i = sessions.length - 1; i >= 0; i--) {
    var s = sessions[i];
    var div = document.createElement("div");
    div.className = "session";
    div.innerHTML =
      "Start: " + s.start + "<br>" +
      "End: " + s.end + "<br>" +
      "Duration: " + s.duration + " sec<br>" +
      "Keys: " + s.keys + "<br>" +
      "Clicks: " + s.clicks + "<br>" +
      "Idle: " + s.idle + " sec";
    box.appendChild(div);
  }
}

document.addEventListener("keydown", activity);
document.addEventListener("mousedown", mouseActivity);

loadData();
render();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE51() {
  const code = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Offline Assumption Validator</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
body {
  margin: 0;
  background: #0e1118;
  color: #e6e8f2;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  padding: 16px;
  background: #15192a;
  border-bottom: 1px solid #2a2f4a;
  font-weight: bold;
}

main {
  display: flex;
  height: calc(100vh - 54px);
}

section {
  flex: 1;
  padding: 16px;
  border-right: 1px solid #2a2f4a;
}

section:last-child {
  border-right: none;
}

input, textarea, select {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  background: #15192a;
  color: #e6e8f2;
  border: 1px solid #2a2f4a;
}

button {
  padding: 10px;
  background: #4a63ff;
  color: #ffffff;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.entry {
  border: 1px solid #2a2f4a;
  padding: 10px;
  margin-bottom: 10px;
  background: #15192a;
  font-size: 13px;
}
</style>
</head>

<body>

<header>Offline Assumption Validator</header>

<main>
<section>
  <input id="assumption" placeholder="Assumption">
  <select id="confidence">
    <option value="Low">Low confidence</option>
    <option value="Medium">Medium confidence</option>
    <option value="High">High confidence</option>
  </select>
  <textarea id="for" placeholder="Evidence for"></textarea>
  <textarea id="against" placeholder="Evidence against"></textarea>
  <select id="status">
    <option value="Open">Open</option>
    <option value="Validated">Validated</option>
    <option value="Broken">Broken</option>
  </select>
  <button onclick="addItem()">Save Assumption</button>
</section>

<section id="list"></section>
</main>

<script>
var KEY = "assumption_validator_v1";
var items = [];

function loadData() {
  var raw = localStorage.getItem(KEY);
  if (raw) {
    items = JSON.parse(raw);
  }
}

function saveData() {
  localStorage.setItem(KEY, JSON.stringify(items));
}

function addItem() {
  var a = document.getElementById("assumption").value;
  var c = document.getElementById("confidence").value;
  var f = document.getElementById("for").value;
  var g = document.getElementById("against").value;
  var s = document.getElementById("status").value;

  if (a === "") return;

  items.push({
    assumption: a,
    confidence: c,
    forText: f,
    againstText: g,
    status: s,
    time: new Date().toLocaleString()
  });

  saveData();
  render();
}

function render() {
  var box = document.getElementById("list");
  box.innerHTML = "";

  for (var i = items.length - 1; i >= 0; i--) {
    var x = items[i];
    var div = document.createElement("div");
    div.className = "entry";
    div.innerHTML =
      "<strong>" + x.assumption + "</strong><br>" +
      "Confidence: " + x.confidence + "<br>" +
      "For: " + x.forText + "<br>" +
      "Against: " + x.againstText + "<br>" +
      "Status: " + x.status + "<br>" +
      "Logged: " + x.time;
    box.appendChild(div);
  }
}

loadData();
render();
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE52() {
  const code = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Offline Client Error Recorder Plus</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
body {
  margin: 0;
  background: #0e1016;
  color: #e6e8f0;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  padding: 16px;
  background: #15192a;
  border-bottom: 1px solid #2a2f4a;
  font-weight: bold;
}

main {
  display: flex;
  height: calc(100vh - 54px);
}

section {
  flex: 1;
  padding: 16px;
  border-right: 1px solid #2a2f4a;
}

section:last-child {
  border-right: none;
}

textarea, input, select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  background: #15192a;
  color: #e6e8f0;
  border: 1px solid #2a2f4a;
}

button {
  padding: 10px;
  background: #4a63ff;
  color: #ffffff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-right: 6px;
}

button.danger {
  background: #a33b3b;
}

.stats {
  font-size: 12px;
  margin-bottom: 10px;
}

.log {
  border: 1px solid #2a2f4a;
  background: #15192a;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 12px;
}
</style>
</head>

<body>

<header>Offline Client Error Recorder Plus</header>

<main>
<section>
  <div class="stats" id="stats">Errors: 0</div>

  <textarea id="note" placeholder="Manual note or observation"></textarea>

  <select id="noteType">
    <option value="INFO">Info</option>
    <option value="WARNING">Warning</option>
  </select>

  <button onclick="addNote()">Add Note</button>
  <button onclick="exportLogs()">Export TXT</button>
  <button class="danger" onclick="clearLogs()">Clear Logs</button>
</section>

<section id="logs"></section>
</main>

<script>
var KEY = "client_error_logs_v2";
var logs = [];

function loadData() {
  var raw = localStorage.getItem(KEY);
  if (raw) {
    logs = JSON.parse(raw);
  }
}

function saveData() {
  localStorage.setItem(KEY, JSON.stringify(logs));
}

function updateStats() {
  var count = 0;
  for (var i = 0; i < logs.length; i++) {
    if (logs[i].type === "JS ERROR") {
      count = count + 1;
    }
  }
  document.getElementById("stats").innerHTML = "Errors: " + count;
}

function addLog(type, message, source, line) {
  logs.push({
    type: type,
    message: message,
    source: source,
    line: line,
    time: new Date().toLocaleString()
  });
  saveData();
  render();
}

function addNote() {
  var n = document.getElementById("note").value;
  var t = document.getElementById("noteType").value;
  if (n === "") return;

  addLog(t, n, "-", "-");
  document.getElementById("note").value = "";
}

function clearLogs() {
  if (!confirm("Clear all logs?")) return;
  logs = [];
  saveData();
  render();
}

function exportLogs() {
  var text = "";
  for (var i = 0; i < logs.length; i++) {
    var x = logs[i];
    text +=
      "Type: " + x.type + "\n" +
      "Message: " + x.message + "\n" +
      "Source: " + x.source + "\n" +
      "Line: " + x.line + "\n" +
      "Time: " + x.time + "\n\n";
  }

  var win = window.open("");
  win.document.write("<pre>" + text + "</pre>");
  win.document.close();
}

function render() {
  var box = document.getElementById("logs");
  box.innerHTML = "";

  for (var i = logs.length - 1; i >= 0; i--) {
    var x = logs[i];
    var div = document.createElement("div");
    div.className = "log";
    div.innerHTML =
      "Type: " + x.type + "<br>" +
      "Message: " + x.message + "<br>" +
      "Source: " + x.source + "<br>" +
      "Line: " + x.line + "<br>" +
      "Time: " + x.time;
    box.appendChild(div);
  }

  updateStats();
}

window.onerror = function(msg, src, line) {
  addLog("JS ERROR", String(msg), String(src), String(line));
  return false;
};

loadData();
render();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE53() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline Text Similarity Analyzer</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root{
  --bg:#0e1220;
  --panel:#151a33;
  --accent:#4da3ff;
  --text:#e6e9f2;
  --muted:#9aa3c7;
  --danger:#ff6b6b;
  --success:#4dff9a;
}

*{
  box-sizing:border-box;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

body{
  margin:0;
  background:linear-gradient(135deg,#0b1020,#12183a);
  color:var(--text);
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
}

.app{
  width:100%;
  max-width:1100px;
  padding:20px;
}

.card{
  background:var(--panel);
  border-radius:16px;
  padding:20px;
  box-shadow:0 30px 60px rgba(0,0,0,.4);
}

h1{
  margin:0 0 8px;
  font-size:26px;
}

.subtitle{
  color:var(--muted);
  margin-bottom:20px;
}

.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
}

textarea{
  width:100%;
  min-height:220px;
  background:#0b0f26;
  border:1px solid #1f2755;
  border-radius:12px;
  color:var(--text);
  padding:14px;
  resize:vertical;
  font-size:14px;
}

textarea:focus{
  outline:none;
  border-color:var(--accent);
}

.controls{
  display:flex;
  gap:12px;
  margin-top:16px;
  flex-wrap:wrap;
}

button{
  background:var(--accent);
  color:#00162d;
  border:none;
  border-radius:12px;
  padding:12px 18px;
  font-weight:600;
  cursor:pointer;
}

button.secondary{
  background:#1e2755;
  color:var(--text);
}

.result{
  margin-top:20px;
  padding:16px;
  background:#0b1028;
  border-radius:12px;
  border:1px solid #1f2755;
}

.score{
  font-size:38px;
  font-weight:700;
}

.score.low{ color:var(--success); }
.score.mid{ color:#ffd166; }
.score.high{ color:var(--danger); }

.explain{
  margin-top:10px;
  color:var(--muted);
  line-height:1.6;
}

footer{
  margin-top:16px;
  text-align:center;
  font-size:12px;
  color:var(--muted);
}
</style>
</head>
<body>

<div class="app">
  <div class="card">
    <h1>Offline Text Similarity Analyzer</h1>
    <div class="subtitle">
      TF-IDF + Cosine Similarity · 100% Local · No Internet Required
    </div>

    <div class="grid">
      <textarea id="textA" placeholder="Paste first text here..."></textarea>
      <textarea id="textB" placeholder="Paste second text here..."></textarea>
    </div>

    <div class="controls">
      <button onclick="analyze()">Analyze Similarity</button>
      <button class="secondary" onclick="clearAll()">Clear</button>
    </div>

    <div id="output" class="result" style="display:none">
      <div id="score" class="score"></div>
      <div id="explain" class="explain"></div>
    </div>

    <footer>
      Works offline · Open directly in browser or VS Code Live Server
    </footer>
  </div>
</div>

<script>
function tokenize(text){
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g,"")
    .split(/\s+/)
    .filter(Boolean);
}

function termFrequency(tokens){
  const tf = {};
  tokens.forEach(t => tf[t] = (tf[t] || 0) + 1);
  return tf;
}

function computeTFIDF(tf, idf){
  const vec = {};
  for(const term in tf){
    vec[term] = tf[term] * idf[term];
  }
  return vec;
}

function cosineSimilarity(a, b){
  let dot = 0;
  let magA = 0;
  let magB = 0;

  const terms = new Set([...Object.keys(a), ...Object.keys(b)]);
  terms.forEach(t=>{
    const x = a[t] || 0;
    const y = b[t] || 0;
    dot += x * y;
    magA += x * x;
    magB += y * y;
  });

  if(magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

function analyze(){
  const t1 = document.getElementById("textA").value.trim();
  const t2 = document.getElementById("textB").value.trim();

  if(!t1 || !t2){
    alert("Please enter text in both boxes.");
    return;
  }

  const tokensA = tokenize(t1);
  const tokensB = tokenize(t2);

  const tfA = termFrequency(tokensA);
  const tfB = termFrequency(tokensB);

  const vocab = new Set([...tokensA, ...tokensB]);
  const idf = {};

  vocab.forEach(term=>{
    let docs = 0;
    if(tfA[term]) docs++;
    if(tfB[term]) docs++;
    idf[term] = Math.log(2 / (1 + docs)) + 1;
  });

  const vecA = computeTFIDF(tfA, idf);
  const vecB = computeTFIDF(tfB, idf);

  const similarity = cosineSimilarity(vecA, vecB);
  const percent = Math.round(similarity * 100);

  const scoreEl = document.getElementById("score");
  const explainEl = document.getElementById("explain");
  const out = document.getElementById("output");

  scoreEl.textContent = percent + "% Similar";
  scoreEl.className = "score " + 
    (percent < 30 ? "low" : percent < 70 ? "mid" : "high");

  let explanation = "";
  if(percent < 30){
    explanation = "Low similarity. The texts share minimal vocabulary and structure.";
  }else if(percent < 70){
    explanation = "Moderate similarity. Some shared wording or ideas exist.";
  }else{
    explanation = "High similarity. Significant overlap detected. Possible duplication.";
  }

  explainEl.textContent = explanation;
  out.style.display = "block";
}

function clearAll(){
  document.getElementById("textA").value = "";
  document.getElementById("textB").value = "";
  document.getElementById("output").style.display = "none";
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE54() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline File Integrity Verifier</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body{
  margin:0;
  background:#0c1020;
  color:#e8ebff;
  font-family:Arial, Helvetica, sans-serif;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:100vh;
}

.box{
  background:#141a38;
  padding:26px;
  border-radius:14px;
  width:100%;
  max-width:560px;
  box-shadow:0 30px 60px rgba(0,0,0,0.6);
}

h1{
  margin:0 0 10px;
}

p{
  color:#9aa3c7;
  font-size:14px;
}

input{
  width:100%;
  margin-top:12px;
}

button{
  margin-top:16px;
  width:100%;
  padding:14px;
  border:none;
  border-radius:12px;
  background:#4da3ff;
  color:#00162d;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
}

.output{
  margin-top:16px;
  padding:14px;
  background:#0b1028;
  border-radius:12px;
  border:1px solid #1f2755;
  font-size:13px;
  word-break:break-all;
}

.good{ color:#4dff9a; }
.bad{ color:#ff6b6b; }
</style>
</head>
<body>

<div class="box">
  <h1>File Integrity Verifier</h1>
  <p>
    Generate and verify cryptographic fingerprints to detect file tampering.
    Works fully offline.
  </p>

  <input type="file" id="fileInput">

  <button onclick="generateHash()">Generate Hash</button>

  <div id="hashOutput" class="output"></div>

  <p style="margin-top:16px">
    Paste a previously saved hash to verify:
  </p>

  <input type="text" id="verifyInput" placeholder="Paste SHA-256 hash here">

  <button onclick="verifyHash()">Verify Integrity</button>

  <div id="verifyResult" class="output"></div>
</div>

<script>
var lastHash = "";

function generateHash(){
  var input = document.getElementById("fileInput");
  var output = document.getElementById("hashOutput");

  if(input.files.length === 0){
    output.textContent = "No file selected.";
    return;
  }

  var file = input.files[0];
  var reader = new FileReader();

  reader.onload = function(){
    var data = reader.result;

    window.crypto.subtle.digest("SHA-256", data).then(function(buffer){
      var hex = bufferToHex(buffer);
      lastHash = hex;
      output.textContent = "SHA-256 Hash:\n" + hex;
    });
  };

  reader.readAsArrayBuffer(file);
}

function verifyHash(){
  var userHash = document.getElementById("verifyInput").value.trim();
  var result = document.getElementById("verifyResult");

  if(userHash === ""){
    result.textContent = "No hash provided.";
    return;
  }

  if(lastHash === ""){
    result.textContent = "Generate hash first.";
    return;
  }

  if(userHash === lastHash){
    result.innerHTML = "<span class='good'>Integrity verified. File is unchanged.</span>";
  }else{
    result.innerHTML = "<span class='bad'>Integrity FAILED. File was modified.</span>";
  }
}

function bufferToHex(buffer){
  var bytes = new Uint8Array(buffer);
  var hex = "";
  var index = 0;

  while(index < bytes.length){
    var value = bytes[index].toString(16);
    if(value.length === 1){
      value = "0" + value;
    }
    hex = hex + value;
    index = index + 1;
  }

  return hex;
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE55() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline CSV Relational Analyzer</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body{
  margin:0;
  background:#0c1020;
  color:#e8ebff;
  font-family:Arial, Helvetica, sans-serif;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:100vh;
}

.panel{
  background:#141a38;
  padding:26px;
  border-radius:14px;
  width:100%;
  max-width:1100px;
  box-shadow:0 30px 60px rgba(0,0,0,0.6);
}

h1{
  margin:0 0 10px;
}

p{
  color:#9aa3c7;
  font-size:14px;
}

textarea{
  width:100%;
  min-height:160px;
  background:#0b1028;
  border:1px solid #1f2755;
  border-radius:10px;
  color:#e8ebff;
  padding:12px;
  font-size:13px;
  resize:vertical;
}

.controls{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  margin-top:14px;
}

input{
  padding:10px;
  background:#0b1028;
  border:1px solid #1f2755;
  border-radius:8px;
  color:#e8ebff;
}

button{
  margin-top:14px;
  width:100%;
  padding:14px;
  border:none;
  border-radius:12px;
  background:#4da3ff;
  color:#00162d;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
}

.output{
  margin-top:16px;
  background:#0b1028;
  border:1px solid #1f2755;
  border-radius:12px;
  padding:14px;
  max-height:300px;
  overflow:auto;
  font-size:13px;
}

table{
  width:100%;
  border-collapse:collapse;
}

th, td{
  border:1px solid #1f2755;
  padding:6px;
  text-align:left;
}

th{
  background:#141a38;
}
</style>
</head>
<body>

<div class="panel">
  <h1>CSV Relational Analyzer</h1>
  <p>
    Perform offline relational operations on raw CSV data.
  </p>

  <textarea id="csvA" placeholder="CSV A
id,name
1,Alice
2,Bob"></textarea>

  <textarea id="csvB" placeholder="CSV B
user_id,score
1,90
2,75"></textarea>

  <div class="controls">
    <input id="joinA" placeholder="Join column in CSV A">
    <input id="joinB" placeholder="Join column in CSV B">
    <input id="filterCol" placeholder="Filter column name">
    <input id="filterVal" placeholder="Filter value">
  </div>

  <button onclick="runEngine()">Run Analysis</button>

  <div id="output" class="output"></div>
</div>

<script>
function parseCSV(text){
  var lines = text.trim().split("\n");
  var headers = lines[0].split(",");
  var rows = [];
  var i = 1;

  while(i < lines.length){
    var values = lines[i].split(",");
    var row = {};
    var j = 0;

    while(j < headers.length){
      row[headers[j]] = values[j];
      j = j + 1;
    }

    rows.push(row);
    i = i + 1;
  }

  return { headers: headers, rows: rows };
}

function runEngine(){
  var out = document.getElementById("output");
  out.textContent = "";

  var dataA = parseCSV(document.getElementById("csvA").value);
  var dataB = parseCSV(document.getElementById("csvB").value);

  var keyA = document.getElementById("joinA").value;
  var keyB = document.getElementById("joinB").value;
  var filterCol = document.getElementById("filterCol").value;
  var filterVal = document.getElementById("filterVal").value;

  if(keyA === "" || keyB === ""){
    out.textContent = "Join columns required.";
    return;
  }

  var joined = [];
  var i = 0;

  while(i < dataA.rows.length){
    var rowA = dataA.rows[i];
    var j = 0;

    while(j < dataB.rows.length){
      var rowB = dataB.rows[j];

      if(rowA[keyA] === rowB[keyB]){
        var merged = {};
        var h = 0;

        while(h < dataA.headers.length){
          merged[dataA.headers[h]] = rowA[dataA.headers[h]];
          h = h + 1;
        }

        h = 0;
        while(h < dataB.headers.length){
          merged[dataB.headers[h]] = rowB[dataB.headers[h]];
          h = h + 1;
        }

        joined.push(merged);
      }

      j = j + 1;
    }

    i = i + 1;
  }

  if(filterCol !== "" && filterVal !== ""){
    var filtered = [];
    i = 0;

    while(i < joined.length){
      if(joined[i][filterCol] === filterVal){
        filtered.push(joined[i]);
      }
      i = i + 1;
    }

    joined = filtered;
  }

  if(joined.length === 0){
    out.textContent = "No matching records.";
    return;
  }

  var table = "<table><tr>";
  var keys = Object.keys(joined[0]);
  i = 0;

  while(i < keys.length){
    table = table + "<th>" + keys[i] + "</th>";
    i = i + 1;
  }

  table = table + "</tr>";

  i = 0;
  while(i < joined.length){
    table = table + "<tr>";
    var k = 0;

    while(k < keys.length){
      table = table + "<td>" + joined[i][keys[k]] + "</td>";
      k = k + 1;
    }

    table = table + "</tr>";
    i = i + 1;
  }

  table = table + "</table>";
  out.innerHTML = table;
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE56() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offline Execution Sandbox</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body{
  margin:0;
  background:#0b1020;
  color:#e8ebff;
  font-family:Arial, Helvetica, sans-serif;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:100vh;
}

.shell{
  width:100%;
  max-width:1200px;
  background:#141a38;
  padding:24px;
  border-radius:14px;
  box-shadow:0 30px 60px rgba(0,0,0,0.6);
}

h1{
  margin:0 0 10px;
}

p{
  color:#9aa3c7;
  font-size:14px;
}

textarea{
  width:100%;
  min-height:200px;
  background:#0b1028;
  border:1px solid #1f2755;
  border-radius:10px;
  color:#e8ebff;
  padding:12px;
  font-size:13px;
}

button{
  margin-top:14px;
  padding:14px;
  width:100%;
  border:none;
  border-radius:12px;
  background:#4da3ff;
  color:#00162d;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
}

.output{
  margin-top:16px;
  background:#0b1028;
  border:1px solid #1f2755;
  border-radius:12px;
  padding:14px;
  max-height:260px;
  overflow:auto;
  font-size:13px;
}

.good{ color:#4dff9a; }
.bad{ color:#ff6b6b; }
</style>
</head>
<body>

<div class="shell">
  <h1>Offline Execution Sandbox</h1>
  <p>
    Instruction execution environment. No browser features beyond JavaScript.
  </p>

  <textarea id="program" placeholder="
SET x 5
SET y 10
ADD x y result
PRINT result
"></textarea>

  <button onclick="runProgram()">Execute Program</button>

  <div id="output" class="output"></div>
</div>

<script>
var memory = {};
var trace = [];

function runProgram(){
  memory = {};
  trace = [];

  var source = document.getElementById("program").value;
  var lines = source.split("\n");
  var index = 0;

  while(index < lines.length){
    executeLine(lines[index].trim(), index + 1);
    index = index + 1;
  }

  renderOutput();
}

function executeLine(line, lineNumber){
  if(line === ""){
    return;
  }

  var parts = line.split(" ");
  var instruction = parts[0];

  if(instruction === "SET"){
    memory[parts[1]] = parseInt(parts[2], 10);
    trace.push("Line " + lineNumber + ": SET " + parts[1]);
  }
  else if(instruction === "ADD"){
    var a = memory[parts[1]];
    var b = memory[parts[2]];
    memory[parts[3]] = a + b;
    trace.push("Line " + lineNumber + ": ADD result");
  }
  else if(instruction === "PRINT"){
    trace.push("OUTPUT: " + memory[parts[1]]);
  }
  else{
    trace.push("ERROR line " + lineNumber + ": Unknown instruction");
  }
}

function renderOutput(){
  var out = document.getElementById("output");
  var text = "";

  var i = 0;
  while(i < trace.length){
    text = text + trace[i] + "<br>";
    i = i + 1;
  }

  out.innerHTML = text;
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE57() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>God-Level CSS Cards</title>
<style>
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(120deg, #1e3c72, #2a5298);
    perspective: 1500px;
  }

  .card-stack {
    display: flex;
    gap: 30px;
    transform-style: preserve-3d;
  }

  .card {
    width: 200px;
    height: 300px;
    background: linear-gradient(145deg, #ff6a00, #ee0979);
    border-radius: 20px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    transition: transform 0.6s ease, box-shadow 0.3s ease;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
  }

  .card::before,
  .card::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    top: 0;
    left: 0;
    transition: all 0.6s ease;
    z-index: -1;
  }

  .card::before {
    background: rgba(255,255,255,0.1);
    transform: rotateY(10deg) translateZ(-30px);
  }

  .card::after {
    background: rgba(0,0,0,0.1);
    transform: rotateX(10deg) translateZ(-30px);
  }

  .card:hover {
    transform: rotateY(25deg) rotateX(10deg) scale(1.1);
    box-shadow: 0 40px 80px rgba(0,0,0,0.8);
  }

  .card-content {
    color: #fff;
    padding: 20px;
    transform: translateZ(50px);
    text-align: center;
  }

  .card-content h2 {
    margin: 0;
    font-size: 24px;
  }

  .card-content p {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.4;
  }

  /* Extra hover glow effect */
  .card:hover::before {
    transform: rotateY(0deg) translateZ(20px);
    background: rgba(255,255,255,0.2);
  }

  .card:hover::after {
    transform: rotateX(0deg) translateZ(20px);
    background: rgba(0,0,0,0.2);
  }
</style>
</head>
<body>
<div class="card-stack">
  <div class="card">
    <div class="card-content">
      <h2>Card One</h2>
      <p>Hover me for 3D magic.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <h2>Card Two</h2>
      <p>Pure CSS, no JS.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <h2>Card Three</h2>
      <p>Look at that shadow and depth!</p>
    </div>
  </div>
</div>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE58() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Neural Network Visualizer</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
html, body {
    margin: 0;
    padding: 0;
    background: #0b0f1a;
    overflow: hidden;
    font-family: Arial, sans-serif;
}

#info {
    position: fixed;
    top: 15px;
    left: 15px;
    color: #9ecbff;
    font-size: 14px;
    opacity: 0.8;
}
</style>
</head>

<body>
<canvas id="canvas"></canvas>
<div id="info">Neural Network • Move Mouse</div>

<script>
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width;
let height;
let mouseX = 0;
let mouseY = 0;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

window.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2 + Math.random() * 2;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#4da3ff";
        ctx.fill();
    }
}

const nodes = [];
const NODE_COUNT = Math.min(180, Math.floor(window.innerWidth / 6));

for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push(
        new Node(
            Math.random() * width,
            Math.random() * height
        )
    );
}

function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
                const alpha = 1 - dist / 120;
                ctx.strokeStyle = "rgba(100,170,255," + alpha * 0.5 + ")";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }
}

function drawMouseInfluence() {
    for (let node of nodes) {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
            ctx.strokeStyle = "rgba(255,120,120,0.6)";
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let node of nodes) {
        node.update();
        node.draw();
    }

    drawConnections();
    drawMouseInfluence();

    requestAnimationFrame(animate);
}

animate();
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE59() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Live System Monitor</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root {
    --bg: #05080f;
    --card: rgba(255,255,255,0.06);
    --border: rgba(120,200,255,0.25);
    --text: #d9ecff;
    --accent: #6fd3ff;
}

* {
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    background: radial-gradient(circle at top, #0b1324, #05080f);
    color: var(--text);
    font-family: Inter, Arial, sans-serif;
}

.container {
    padding: 30px;
    max-width: 1200px;
    margin: auto;
}

.title {
    font-size: 22px;
    letter-spacing: 1px;
    color: var(--accent);
    margin-bottom: 25px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
}

.card {
    background: linear-gradient(
        180deg,
        rgba(255,255,255,0.08),
        rgba(255,255,255,0.02)
    );
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 20px;
    backdrop-filter: blur(12px);
    box-shadow: 0 0 25px rgba(0,150,255,0.08);
    transition: transform 0.25s ease;
}

.card:hover {
    transform: translateY(-4px);
}

.label {
    font-size: 13px;
    opacity: 0.7;
    margin-bottom: 8px;
}

.value {
    font-size: 28px;
    font-weight: bold;
    color: var(--accent);
}

.small {
    font-size: 14px;
    opacity: 0.8;
}

.footer {
    margin-top: 30px;
    opacity: 0.4;
    font-size: 12px;
}
</style>
</head>

<body>
<div class="container">
    <div class="title">LIVE SYSTEM MONITOR</div>

    <div class="grid">
        <div class="card">
            <div class="label">FPS</div>
            <div class="value" id="fps">0</div>
        </div>

        <div class="card">
            <div class="label">JS Heap Used</div>
            <div class="value" id="memory">N/A</div>
            <div class="small">Real browser memory</div>
        </div>

        <div class="card">
            <div class="label">CPU Load (est.)</div>
            <div class="value" id="cpu">0%</div>
        </div>

        <div class="card">
            <div class="label">Device</div>
            <div class="small" id="device"></div>
        </div>

        <div class="card">
            <div class="label">Resolution</div>
            <div class="value" id="res"></div>
        </div>

        <div class="card">
            <div class="label">Local Time</div>
            <div class="value" id="time"></div>
        </div>
    </div>

    <div class="footer">Real-time browser & device data</div>
</div>

<script>
const fpsEl = document.getElementById("fps");
const memEl = document.getElementById("memory");
const cpuEl = document.getElementById("cpu");
const deviceEl = document.getElementById("device");
const resEl = document.getElementById("res");
const timeEl = document.getElementById("time");

deviceEl.textContent = navigator.userAgent;
resEl.textContent = window.screen.width + " × " + window.screen.height;

let lastFrame = performance.now();
let frames = 0;
let lastTime = performance.now();

function updateFPS(now) {
    frames++;
    if (now - lastTime >= 1000) {
        fpsEl.textContent = frames;
        cpuEl.textContent = Math.min(100, frames * 1.6).toFixed(0) + "%";
        frames = 0;
        lastTime = now;
    }
}

function updateMemory() {
    if (performance.memory) {
        const used = performance.memory.usedJSHeapSize / 1048576;
        memEl.textContent = used.toFixed(1) + " MB";
    }
}

function updateTime() {
    const d = new Date();
    timeEl.textContent =
        d.getHours().toString().padStart(2, "0") + ":" +
        d.getMinutes().toString().padStart(2, "0") + ":" +
        d.getSeconds().toString().padStart(2, "0");
}

function loop(now) {
    updateFPS(now);
    updateMemory();
    updateTime();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
</script>
</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE60() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>GenZ Focus</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Space Grotesk',sans-serif}

body{
  min-height:100vh;
  background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}

.glow{
  position:absolute;
  width:500px;
  height:500px;
  background:radial-gradient(circle,#00f2ff55,transparent 70%);
  filter:blur(60px);
  animation:float 8s infinite alternate ease-in-out;
}

@keyframes float{
  from{transform:translate(-50px,-50px)}
  to{transform:translate(50px,50px)}
}

.card{
  width:350px;
  padding:30px;
  border-radius:20px;
  background:rgba(255,255,255,0.08);
  backdrop-filter:blur(15px);
  box-shadow:0 0 40px #00f2ff44;
  color:white;
  text-align:center;
}

h1{
  font-weight:600;
  margin-bottom:10px;
}

.timer{
  font-size:60px;
  margin:20px 0;
  letter-spacing:2px;
}

button{
  margin:10px;
  padding:12px 25px;
  border:none;
  border-radius:30px;
  background:linear-gradient(135deg,#00f2ff,#7f00ff);
  color:white;
  font-size:16px;
  cursor:pointer;
  transition:0.3s;
}

button:hover{
  transform:scale(1.05);
  box-shadow:0 0 15px #00f2ff;
}

.quote{
  margin-top:20px;
  font-size:14px;
  opacity:0.8;
}
</style>
</head>
<body>

<div class="glow"></div>

<div class="card">
  <h1>⚡ GenZ Focus</h1>
  <p>Lock in. No distractions.</p>

  <div class="timer" id="timer">25:00</div>

  <button onclick="start()">Start</button>
  <button onclick="reset()">Reset</button>

  <div class="quote" id="quote">“Small steps every day.”</div>
</div>

<script>
let time = 1500;
let interval;

const quotes = [
  "Discipline > Motivation.",
  "You’re building your future self.",
  "Focus now, flex later.",
  "No grind, no glow.",
  "Be addicted to progress."
];

function update(){
  let min = Math.floor(time / 60);
  let sec = time % 60;
  document.getElementById("timer").textContent =
    String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0');

  if(time === 0){
    clearInterval(interval);
    document.getElementById("quote").textContent = "Session complete. W.";
  }
  time--;
}

function start(){
  if(interval) return;
  interval = setInterval(update,1000);
  document.getElementById("quote").textContent =
    quotes[Math.floor(Math.random()*quotes.length)];
}

function reset(){
  clearInterval(interval);
  interval = null;
  time = 1500;
  update();
}

update();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE61() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Workday Dashboard</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Segoe UI,Arial,sans-serif}

body{
  min-height:100vh;
  background:#f4f6f9;
  display:flex;
  align-items:center;
  justify-content:center;
}

.dashboard{
  width:720px;
  background:white;
  border-radius:8px;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
  padding:30px;
}

header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:25px;
}

header h1{
  font-size:22px;
  color:#1f2933;
}

header span{
  color:#4b5563;
  font-size:14px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.card{
  border:1px solid #e5e7eb;
  border-radius:6px;
  padding:20px;
}

.card h2{
  font-size:16px;
  margin-bottom:10px;
  color:#111827;
}

.card p{
  color:#374151;
  font-size:14px;
}

.time{
  font-size:36px;
  font-weight:600;
  margin-top:10px;
}

button{
  margin-top:10px;
  padding:8px 14px;
  border:none;
  border-radius:4px;
  background:#2563eb;
  color:white;
  cursor:pointer;
}

button:hover{
  background:#1d4ed8;
}

ul{
  list-style:none;
  margin-top:10px;
}

li{
  padding:6px 0;
  border-bottom:1px solid #e5e7eb;
  font-size:14px;
}

input{
  width:100%;
  padding:8px;
  border:1px solid #d1d5db;
  border-radius:4px;
  margin-top:8px;
}
</style>
</head>
<body>

<div class="dashboard">

<header>
  <h1>Daily Work Dashboard</h1>
  <span id="date"></span>
</header>

<div class="grid">

  <!-- Clock -->
  <div class="card">
    <h2>Current Time</h2>
    <div class="time" id="clock">--:--:--</div>
  </div>

  <!-- Focus Timer -->
  <div class="card">
    <h2>25-Minute Focus</h2>
    <p id="focusTime">25:00</p>
    <button onclick="startFocus()">Start</button>
  </div>

  <!-- Tasks -->
  <div class="card">
    <h2>Top Priorities</h2>
    <input id="taskInput" placeholder="Add task and press Enter">
    <ul id="tasks"></ul>
  </div>

</div>

</div>

<script>
document.getElementById("date").textContent =
  new Date().toDateString();

function updateClock(){
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString();
}
setInterval(updateClock,1000);
updateClock();

// Focus timer
let focus = 1500;
let focusInterval;

function startFocus(){
  if(focusInterval) return;
  focusInterval = setInterval(()=>{
    let min = Math.floor(focus/60);
    let sec = focus % 60;
    document.getElementById("focusTime").textContent =
      String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0');

    if(focus === 0){
      clearInterval(focusInterval);
      focusInterval = null;
      alert("Focus session complete.");
      focus = 1500;
    }
    focus--;
  },1000);
}

// Task list
document.getElementById("taskInput").addEventListener("keypress", e=>{
  if(e.key === "Enter" && e.target.value.trim() !== ""){
    const li = document.createElement("li");
    li.textContent = e.target.value;
    document.getElementById("tasks").appendChild(li);
    e.target.value = "";
  }
});
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
