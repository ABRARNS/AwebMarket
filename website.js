// @ts-nocheck
/* eslint-disable */
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
function copyCODE62() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Number Guessing Game</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: radial-gradient(circle at top, #2b1055, #000);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .game {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(12px);
    padding: 25px;
    width: 340px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0 0 30px rgba(0,0,0,0.6);
    animation: pop 0.6s ease;
  }

  @keyframes pop {
    from { transform: scale(0.85); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  h1 {
    margin: 0;
    font-size: 26px;
  }

  p {
    font-size: 14px;
    opacity: 0.9;
  }

  input {
    width: 85%;
    padding: 12px;
    font-size: 17px;
    border-radius: 10px;
    border: none;
    outline: none;
    text-align: center;
    margin-top: 10px;
  }

  button {
    margin-top: 12px;
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #00f2fe, #4facfe);
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,255,255,0.4);
  }

  .msg {
    margin-top: 15px;
    min-height: 24px;
    font-size: 16px;
    animation: fade 0.4s ease;
  }

  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .attempts {
    margin-top: 6px;
    font-size: 14px;
    opacity: 0.85;
  }

  .restart {
    background: linear-gradient(135deg, #ff512f, #dd2476);
    color: #fff;
    margin-top: 10px;
  }

  .footer {
    margin-top: 18px;
    font-size: 12px;
    opacity: 0.9;
  }

  .verified {
    color: #00ff9c;
    font-weight: bold;
  }
</style>
</head>

<body>

<div class="game">
  <h1>🎯 Guess the Number</h1>
  <p>Pick a number between <b>1</b> and <b>100</b></p>

  <input type="number" id="guess" placeholder="Enter your guess" min="1" max="100">

  <button onclick="check()">Guess</button>

  <div class="msg" id="msg"></div>
  <div class="attempts" id="attempts">Attempts: 0</div>

  <button class="restart" onclick="restart()">🔁 Restart</button>

  <div class="footer">
    <div class="verified">✔ Verified Product</div>
    © A Web Market
  </div>
</div>

<!-- Sounds -->
<audio id="low" src="https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3"></audio>
<audio id="high" src="https://assets.mixkit.co/sfx/preview/mixkit-error-tone-494.mp3"></audio>
<audio id="win" src="https://assets.mixkit.co/sfx/preview/mixkit-game-level-completed-2059.mp3"></audio>

<script>
  let number = Math.floor(Math.random() * 100) + 1;
  let tries = 0;

  function check() {
    const input = document.getElementById("guess");
    const msg = document.getElementById("msg");
    const attempts = document.getElementById("attempts");
    const value = Number(input.value);

    if (!value || value < 1 || value > 100) {
      msg.textContent = "⚠ Enter a number between 1 and 100!";
      return;
    }

    tries++;
    attempts.textContent = "Attempts: " + tries;

    if (value === number) {
      document.getElementById("win").play();
      msg.textContent = "🎉 Correct! You won!";
      msg.style.color = "#00ff9c";
    } 
    else if (value < number) {
      document.getElementById("low").play();
      msg.textContent = "📉 Too low!";
      msg.style.color = "#ffd54f";
    } 
    else {
      document.getElementById("high").play();
      msg.textContent = "📈 Too high!";
      msg.style.color = "#ff8a80";
    }
  }

  function restart() {
    number = Math.floor(Math.random() * 100) + 1;
    tries = 0;
    document.getElementById("msg").textContent = "";
    document.getElementById("attempts").textContent = "Attempts: 0";
    document.getElementById("guess").value = "";
  }
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE63() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Log Inspector</title>
<style>
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: #0f172a;
    color: #e5e7eb;
  }
  header {
    padding: 16px 24px;
    background: #020617;
    font-weight: 600;
    font-size: 18px;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 320px;
    height: calc(100vh - 56px);
  }
  textarea {
    width: 100%;
    height: 100%;
    background: #020617;
    color: #e5e7eb;
    border: none;
    padding: 16px;
    font-family: monospace;
    resize: none;
    outline: none;
  }
  aside {
    background: #020617;
    border-left: 1px solid #1e293b;
    padding: 16px;
  }
  .stat {
    background: #020617;
    border: 1px solid #1e293b;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
  }
  .stat h3 {
    margin: 0;
    font-size: 14px;
    color: #94a3b8;
  }
  .stat p {
    margin: 4px 0 0;
    font-size: 22px;
    font-weight: 600;
  }
</style>
</head>
<body>

<header>Log Inspector</header>

<main>
  <textarea id="logs" placeholder="Paste logs here..."></textarea>

  <aside>
    <div class="stat">
      <h3>Total Lines</h3>
      <p id="total">0</p>
    </div>
    <div class="stat">
      <h3>Errors</h3>
      <p id="errors">0</p>
    </div>
    <div class="stat">
      <h3>Warnings</h3>
      <p id="warnings">0</p>
    </div>
    <div class="stat">
      <h3>Info</h3>
      <p id="info">0</p>
    </div>
  </aside>
</main>

<script>
  const logs = document.getElementById("logs");
  const total = document.getElementById("total");
  const errors = document.getElementById("errors");
  const warnings = document.getElementById("warnings");
  const info = document.getElementById("info");

  logs.addEventListener("input", () => {
    const lines = logs.value.split("\n");
    total.textContent = lines.length;
    errors.textContent = lines.filter(l => l.includes("ERROR")).length;
    warnings.textContent = lines.filter(l => l.includes("WARN")).length;
    info.textContent = lines.filter(l => l.includes("INFO")).length;
  });
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE64() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Event Debugger</title>

<style>
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f6f8;
    color: #1f2937;
  }

  header {
    background-color: #111827;
    color: #ffffff;
    padding: 16px 24px;
    font-size: 18px;
    font-weight: bold;
  }

  .container {
    padding: 24px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .form-box {
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 24px;
  }

  label {
    display: block;
    margin-top: 12px;
    font-size: 14px;
  }

  input, textarea {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 14px;
  }

  button {
    margin-top: 16px;
    padding: 10px 16px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    background-color: #2563eb;
    color: #ffffff;
    cursor: pointer;
  }

  button:hover {
    background-color: #1d4ed8;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
    border: 1px solid #d1d5db;
  }

  th, td {
    padding: 10px;
    border-bottom: 1px solid #e5e7eb;
    font-size: 13px;
    text-align: left;
  }

  th {
    background-color: #f9fafb;
  }

  .empty {
    text-align: center;
    color: #6b7280;
    padding: 20px;
  }
</style>
</head>

<body>

<header>Analytics Event Debugger</header>

<div class="container">

  <div class="form-box">
    <label for="eventName">Event Name</label>
    <input id="eventName" type="text" placeholder="e.g. signup_completed">

    <label for="eventData">Event Data (JSON)</label>
    <textarea id="eventData" rows="4" placeholder='{"plan":"pro","source":"landing"}'></textarea>

    <button id="addEventBtn">Log Event</button>
  </div>

  <table id="eventTable">
    <thead>
      <tr>
        <th>Time</th>
        <th>Event</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody id="eventBody">
      <tr>
        <td colspan="3" class="empty">No events logged</td>
      </tr>
    </tbody>
  </table>

</div>

<script>
  var eventNameInput = document.getElementById("eventName");
  var eventDataInput = document.getElementById("eventData");
  var addEventButton = document.getElementById("addEventBtn");
  var eventBody = document.getElementById("eventBody");

  var events = [];

  function renderTable() {
    eventBody.innerHTML = "";

    if (events.length === 0) {
      var row = document.createElement("tr");
      var cell = document.createElement("td");
      cell.colSpan = 3;
      cell.className = "empty";
      cell.innerText = "No events logged";
      row.appendChild(cell);
      eventBody.appendChild(row);
      return;
    }

    for (var i = 0; i < events.length; i++) {
      var tr = document.createElement("tr");

      var tdTime = document.createElement("td");
      tdTime.innerText = events[i].time;

      var tdName = document.createElement("td");
      tdName.innerText = events[i].name;

      var tdData = document.createElement("td");
      tdData.innerText = events[i].data;

      tr.appendChild(tdTime);
      tr.appendChild(tdName);
      tr.appendChild(tdData);

      eventBody.appendChild(tr);
    }
  }

  addEventButton.onclick = function () {
    var name = eventNameInput.value;
    var data = eventDataInput.value;

    if (name === "") {
      alert("Event name is required");
      return;
    }

    var now = new Date().toLocaleTimeString();

    events.push({
      time: now,
      name: name,
      data: data
    });

    eventNameInput.value = "";
    eventDataInput.value = "";

    renderTable();
  };

  renderTable();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE65() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Dashboard</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
  body { background: #eef2f7; padding: 20px; }
  .container { max-width: 900px; margin: auto; background: #fff; border-radius: 8px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  h1 { text-align: center; margin-bottom: 18px; color: #2a6f97; }
  .section { margin-bottom: 25px; }
  input, select, textarea { width: 100%; padding: 10px; margin: 6px 0; border: 1px solid #ccc; border-radius: 6px; }
  button { background: #2a6f97; color: #fff; padding: 10px 15px; border: none; border-radius: 6px; cursor: pointer; }
  button:hover { background: #1f566f; }
  ul { list-style: none; margin-top: 10px; }
  li { background: #f7f9fb; padding: 10px; margin-bottom: 8px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; }
  .delete { background: #e74c3c; padding: 5px 8px; border-radius: 4px; cursor: pointer; color: white; }
  .flash { cursor: pointer; font-weight: bold; display: block; }
  #timerDisplay { font-size: 28px; text-align: center; margin: 10px 0; }
</style>
</head>
<body>

<div class="container">
  <h1>Student Dashboard</h1>

  <div class="section">
    <input type="text" id="searchInput" placeholder="Search Notes or Flashcards" onkeyup="searchAll()">
  </div>

  <div class="section">
    <h2>Add Note</h2>
    <select id="subjectSelect">
      <option value="General">General</option>
      <option value="Math">Math</option>
      <option value="Science">Science</option>
      <option value="History">History</option>
      <option value="Language">Language</option>
    </select>
    <textarea id="noteText" placeholder="Write your note here"></textarea>
    <button onclick="addNote()">Add Note</button>
    <ul id="notesList"></ul>
  </div>

  <div class="section">
    <h2>Flashcards</h2>
    <input type="text" id="flashFront" placeholder="Flashcard Front (Question)">
    <input type="text" id="flashBack" placeholder="Flashcard Back (Answer)">
    <button onclick="addFlashcard()">Add Flashcard</button>
    <ul id="flashList"></ul>
  </div>

  <div class="section">
    <h2>Study Timer (Pomodoro)</h2>
    <div id="timerDisplay">25:00</div>
    <button onclick="startTimer()">Start</button>
    <button onclick="resetTimer()">Reset</button>
  </div>
</div>

<script>
  // Variables
  var notes = [];
  var flashcards = [];
  var timer;
  var totalSeconds = 25 * 60;

  // Notes Functions
  function renderNotes() {
    var list = document.getElementById('notesList');
    list.innerHTML = '';
    for(var i=0; i<notes.length; i=i+1) {
      var li = document.createElement('li');
      var span = document.createElement('span');
      span.innerHTML = '[' + notes[i].subject + '] ' + notes[i].text;
      var del = document.createElement('span');
      del.className = 'delete';
      del.innerHTML = 'Delete';
      del.setAttribute('onclick', 'removeNote(' + i + ')');
      li.appendChild(span);
      li.appendChild(del);
      list.appendChild(li);
    }
  }

  function addNote() {
    var text = document.getElementById('noteText').value;
    var subj = document.getElementById('subjectSelect').value;
    if(text === '') { alert('Please write a note!'); return; }
    notes.push({subject: subj, text: text});
    document.getElementById('noteText').value = '';
    renderNotes();
  }

  function removeNote(index) {
    notes.splice(index, 1);
    renderNotes();
  }

  // Flashcards Functions
  function renderFlashcards() {
    var list = document.getElementById('flashList');
    list.innerHTML = '';
    for(var i=0; i<flashcards.length; i=i+1) {
      var li = document.createElement('li');
      var span = document.createElement('span');
      span.className = 'flash';
      span.innerHTML = 'Q: ' + flashcards[i].front;
      span.setAttribute('onclick', 'flipCard(this, ' + i + ')');
      var del = document.createElement('span');
      del.className = 'delete';
      del.innerHTML = 'Delete';
      del.setAttribute('onclick', 'removeFlash(' + i + ')');
      li.appendChild(span);
      li.appendChild(del);
      list.appendChild(li);
    }
  }

  function addFlashcard() {
    var front = document.getElementById('flashFront').value;
    var back = document.getElementById('flashBack').value;
    if(front === '' || back === '') { alert('Fill both fields'); return; }
    flashcards.push({front: front, back: back});
    document.getElementById('flashFront').value = '';
    document.getElementById('flashBack').value = '';
    renderFlashcards();
  }

  function flipCard(element, index) {
    if(element.innerHTML.indexOf('Q:') === 0) {
      element.innerHTML = 'A: ' + flashcards[index].back;
    } else {
      element.innerHTML = 'Q: ' + flashcards[index].front;
    }
  }

  function removeFlash(index) {
    flashcards.splice(index, 1);
    renderFlashcards();
  }

  // Search Function
  function searchAll() {
    var term = document.getElementById('searchInput').value.toLowerCase();
    var notesList = document.getElementById('notesList').getElementsByTagName('li');
    var flashList = document.getElementById('flashList').getElementsByTagName('li');

    for(var i=0; i<notesList.length; i=i+1) {
      if(notesList[i].textContent.toLowerCase().indexOf(term) !== -1) {
        notesList[i].style.display = '';
      } else {
        notesList[i].style.display = 'none';
      }
    }

    for(var i=0; i<flashList.length; i=i+1) {
      if(flashList[i].textContent.toLowerCase().indexOf(term) !== -1) {
        flashList[i].style.display = '';
      } else {
        flashList[i].style.display = 'none';
      }
    }
  }

  // Timer Functions
  function updateTimer() {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    var display = document.getElementById('timerDisplay');
    display.innerHTML = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    if(totalSeconds > 0) {
      totalSeconds = totalSeconds - 1;
    } else {
      clearInterval(timer);
    }
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
  }

  function resetTimer() {
    clearInterval(timer);
    totalSeconds = 25 * 60;
    updateTimer();
  }

</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE66() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Concept Map Builder</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
  body { background: #f0f2f5; padding: 20px; }
  h1 { text-align: center; color: #2a6f97; margin-bottom: 20px; }
  
  #controls { margin-bottom: 20px; display: flex; justify-content: space-between; }
  #controls input, #controls select, #controls button { padding: 10px; border-radius: 6px; border: 1px solid #ccc; }
  #controls button { background: #2a6f97; color: #fff; border: none; cursor: pointer; }
  #controls button:hover { background: #1f566f; }

  #mapArea { position: relative; width: 100%; height: 600px; background: #fff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden; }
  .node { position: absolute; padding: 10px 15px; border-radius: 8px; color: #fff; cursor: move; min-width: 80px; text-align: center; user-select: none; box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
  .link { position: absolute; background: #2a6f97; height: 3px; transform-origin: 0 50%; }

</style>
</head>
<body>

<h1>Student Concept Map Builder</h1>

<div id="controls">
  <input type="text" id="nodeText" placeholder="Concept Name">
  <select id="subjectSelect">
    <option value="Math">Math</option>
    <option value="Science">Science</option>
    <option value="History">History</option>
    <option value="Language">Language</option>
    <option value="General">General</option>
  </select>
  <button onclick="addNode()">Add Concept</button>
</div>

<div id="mapArea"></div>

<script>
  var nodes = JSON.parse(localStorage.getItem('nodes')) || [];
  var links = JSON.parse(localStorage.getItem('links')) || [];
  var mapArea = document.getElementById('mapArea');
  var selectedNode = null;
  var offsetX = 0;
  var offsetY = 0;

  function getColor(subject) {
    if(subject === "Math") return "#f39c12";
    if(subject === "Science") return "#27ae60";
    if(subject === "History") return "#8e44ad";
    if(subject === "Language") return "#e67e22";
    return "#3498db";
  }

  function addNode() {
    var text = document.getElementById('nodeText').value.trim();
    var subject = document.getElementById('subjectSelect').value;
    if(text === "") { alert("Enter a concept name"); return; }
    var node = {id: Date.now(), text: text, subject: subject, x: 50, y: 50};
    nodes.push(node);
    saveAndRender();
    document.getElementById('nodeText').value = "";
  }

  function saveAndRender() {
    localStorage.setItem('nodes', JSON.stringify(nodes));
    localStorage.setItem('links', JSON.stringify(links));
    render();
  }

  function render() {
    mapArea.innerHTML = "";
    // Draw links
    for(var i=0; i<links.length; i=i+1) {
      var from = findNode(links[i].from);
      var to = findNode(links[i].to);
      if(from && to) drawLink(from,to);
    }
    // Draw nodes
    for(var i=0; i<nodes.length; i=i+1) {
      var nodeDiv = document.createElement('div');
      nodeDiv.className = 'node';
      nodeDiv.style.left = nodes[i].x + "px";
      nodeDiv.style.top = nodes[i].y + "px";
      nodeDiv.style.background = getColor(nodes[i].subject);
      nodeDiv.innerHTML = nodes[i].text;
      nodeDiv.setAttribute('data-id', nodes[i].id);
      nodeDiv.onmousedown = startDrag;
      nodeDiv.ondblclick = function() { selectNode(this); };
      mapArea.appendChild(nodeDiv);
    }
  }

  function findNode(id) {
    for(var i=0; i<nodes.length; i=i+1) { if(nodes[i].id === id) return nodes[i]; }
    return null;
  }

  function startDrag(e) {
    selectedNode = this;
    offsetX = e.clientX - selectedNode.offsetLeft;
    offsetY = e.clientY - selectedNode.offsetTop;
    document.onmousemove = dragNode;
    document.onmouseup = stopDrag;
  }

  function dragNode(e) {
    if(selectedNode) {
      selectedNode.style.left = (e.clientX - offsetX) + "px";
      selectedNode.style.top = (e.clientY - offsetY) + "px";
      var id = parseInt(selectedNode.getAttribute('data-id'));
      var node = findNode(id);
      if(node) { node.x = e.clientX - offsetX; node.y = e.clientY - offsetY; saveAndRender(); }
    }
  }

  function stopDrag() { selectedNode = null; document.onmousemove = null; document.onmouseup = null; }

  var linkStart = null;
  function selectNode(element) {
    var id = parseInt(element.getAttribute('data-id'));
    if(linkStart === null) { linkStart = id; element.style.border = "2px solid #fff"; }
    else {
      if(linkStart !== id) {
        links.push({from: linkStart, to: id});
        linkStart = null;
        saveAndRender();
      }
    }
  }

  function drawLink(from, to) {
    var x1 = from.x + 50; // approx center
    var y1 = from.y + 20;
    var x2 = to.x + 50;
    var y2 = to.y + 20;
    var length = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
    var angle = Math.atan2(y2-y1,x2-x1) * 180 / Math.PI;
    var linkDiv = document.createElement('div');
    linkDiv.className = 'link';
    linkDiv.style.width = length + "px";
    linkDiv.style.left = x1 + "px";
    linkDiv.style.top = y1 + "px";
    linkDiv.style.transform = "rotate(" + angle + "deg)";
    mapArea.appendChild(linkDiv);
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
function copyCODE67() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dark Quiz Generator</title>
<style>
  body { background: #121212; color: #e0e0e0; font-family: Arial, sans-serif; padding: 20px; }
  h1 { text-align: center; color: #90caf9; margin-bottom: 20px; }
  .container { max-width: 900px; margin: auto; }
  input, textarea, select, button { padding: 10px; border-radius: 6px; border: none; margin: 5px 0; }
  input, textarea, select { width: 100%; background: #1e1e1e; color: #e0e0e0; border: 1px solid #333; }
  button { background: #90caf9; color: #121212; cursor: pointer; transition: 0.2s; }
  button:hover { background: #64b5f6; }
  .section { background: #1e1e1e; padding: 15px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
  ul { list-style: none; margin-top: 10px; padding: 0; }
  li { background: #272727; padding: 10px; margin-bottom: 8px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; color: #e0e0e0; }
  .delete { background: #ef5350; color: #121212; padding: 5px 8px; border-radius: 4px; cursor: pointer; }
  .quizCard { background: #212121; padding: 15px; border-radius: 10px; margin-bottom: 10px; }
  .optionBtn { display: block; margin: 5px 0; padding: 8px; background: #424242; border-radius: 6px; cursor: pointer; color: #e0e0e0; border: none; transition: 0.2s; text-align: left; }
  .optionBtn:hover { background: #616161; }
  .correct { background: #66bb6a !important; color: #121212; }
  .wrong { background: #ef5350 !important; color: #121212; }
</style>
</head>
<body>

<h1>Dark Quiz Generator</h1>
<div class="container">

  <!-- Add Question -->
  <div class="section">
    <h2>Add Question</h2>
    <textarea id="questionText" placeholder="Enter your question"></textarea>
    <input type="text" id="optionA" placeholder="Option A">
    <input type="text" id="optionB" placeholder="Option B">
    <input type="text" id="optionC" placeholder="Option C">
    <input type="text" id="optionD" placeholder="Option D">
    <select id="correctOption">
      <option value="A">Correct Answer: A</option>
      <option value="B">Correct Answer: B</option>
      <option value="C">Correct Answer: C</option>
      <option value="D">Correct Answer: D</option>
    </select>
    <button onclick="addQuestion()">Add Question</button>
    <ul id="questionList"></ul>
  </div>

  <!-- Take Quiz -->
  <div class="section">
    <h2>Take Quiz</h2>
    <div id="quizArea"></div>
  </div>

</div>

<script>
  var questions = JSON.parse(localStorage.getItem('questions')) || [];

  function saveQuestions() {
    localStorage.setItem('questions', JSON.stringify(questions));
    renderQuestionList();
  }

  function renderQuestionList() {
    var list = document.getElementById('questionList');
    list.innerHTML = '';
    for(var i=0; i<questions.length; i=i+1) {
      var li = document.createElement('li');
      li.innerHTML = questions[i].text + ' <span class="delete" onclick="deleteQuestion(' + i + ')">Delete</span>';
      list.appendChild(li);
    }
  }

  function addQuestion() {
    var qText = document.getElementById('questionText').value.trim();
    var a = document.getElementById('optionA').value.trim();
    var b = document.getElementById('optionB').value.trim();
    var c = document.getElementById('optionC').value.trim();
    var d = document.getElementById('optionD').value.trim();
    var correct = document.getElementById('correctOption').value;
    if(qText === '' || a === '' || b === '' || c === '' || d === '') { alert('Fill all fields'); return; }
    questions.push({text: qText, A: a, B: b, C: c, D: d, correct: correct});
    saveQuestions();
    document.getElementById('questionText').value = '';
    document.getElementById('optionA').value = '';
    document.getElementById('optionB').value = '';
    document.getElementById('optionC').value = '';
    document.getElementById('optionD').value = '';
    renderQuiz();
  }

  function deleteQuestion(index) {
    questions.splice(index,1);
    saveQuestions();
    renderQuiz();
  }

  function renderQuiz() {
    var quizArea = document.getElementById('quizArea');
    quizArea.innerHTML = '';
    for(var i=0; i<questions.length; i=i+1) {
      var qDiv = document.createElement('div');
      qDiv.className = 'quizCard';
      var qText = document.createElement('p');
      qText.innerHTML = (i+1) + '. ' + questions[i].text;
      qDiv.appendChild(qText);

      ['A','B','C','D'].forEach(function(opt) {
        var btn = document.createElement('button');
        btn.className = 'optionBtn';
        btn.innerHTML = opt + ': ' + questions[i][opt];
        btn.onclick = (function(index,optBtn,opt) {
          return function() {
            if(opt === questions[index].correct) { optBtn.className = 'optionBtn correct'; }
            else { optBtn.className = 'optionBtn wrong'; }
          };
        })(i, btn, opt);
        qDiv.appendChild(btn);
      });

      quizArea.appendChild(qDiv);
    }
  }

  renderQuestionList();
  renderQuiz();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE68() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Study Focus Tracker - Upgraded</title>
<style>
  body { background: #121212; color: #e0e0e0; font-family: Arial, sans-serif; padding: 20px; }
  h1 { text-align: center; color: #90caf9; margin-bottom: 20px; }
  .container { max-width: 900px; margin: auto; }

  #controls { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
  input, button { padding: 10px; border-radius: 6px; border: none; }
  input { background: #1e1e1e; color: #e0e0e0; border: 1px solid #333; flex: 1; min-width: 120px; }
  button { background: #90caf9; color: #121212; cursor: pointer; transition: 0.2s; }
  button:hover { background: #64b5f6; }

  .subjects { display: flex; flex-wrap: wrap; gap: 20px; }
  .subjectCard { background: #1e1e1e; border-radius: 10px; padding: 15px; flex: 1; min-width: 250px; box-shadow: 0 4px 10px rgba(0,0,0,0.5); position: relative; }
  .subjectCard h2 { margin-bottom: 10px; }
  .progressBar { width: 100%; background: #272727; border-radius: 6px; height: 20px; margin: 10px 0; overflow: hidden; }
  .progressFill { height: 100%; width: 0%; background: #66bb6a; border-radius: 6px; transition: width 0.3s; }

  .timerBtn { margin-top: 5px; padding: 8px 12px; background: #90caf9; color: #121212; border: none; border-radius: 6px; cursor: pointer; transition: 0.2s; }
  .timerBtn:hover { background: #64b5f6; }

  #stats { margin-top: 20px; }
</style>
</head>
<body>

<h1>Study Focus Tracker</h1>
<div class="container">

  <div id="controls">
    <input type="text" id="subjectName" placeholder="Subject Name">
    <input type="number" id="studyGoal" placeholder="Goal Minutes">
    <button onclick="addSubject()">Add Subject</button>
  </div>

  <div class="subjects" id="subjectsContainer"></div>

  <div id="stats">
    <h2>Overall Stats</h2>
    <p id="totalTime">Total Study Time: 0 minutes</p>
    <p id="totalGoals">Total Goal Time: 0 minutes</p>
  </div>

</div>

<script>
  var subjects = JSON.parse(localStorage.getItem('subjects')) || [];

  function saveSubjects() {
    localStorage.setItem('subjects', JSON.stringify(subjects));
    renderSubjects();
    updateStats();
  }

  function addSubject() {
    var name = document.getElementById('subjectName').value.trim();
    var goal = parseInt(document.getElementById('studyGoal').value);
    if(name === '' || isNaN(goal) || goal <= 0) { alert('Enter valid name and goal'); return; }
    subjects.push({name: name, goal: goal, studiedSeconds: 0, timer: null});
    document.getElementById('subjectName').value = '';
    document.getElementById('studyGoal').value = '';
    saveSubjects();
  }

  function startTimer(index) {
    if(subjects[index].timer) { 
      clearInterval(subjects[index].timer); 
      subjects[index].timer = null; 
      saveSubjects(); 
      return; 
    }
    subjects[index].timer = setInterval(function() {
      subjects[index].studiedSeconds = subjects[index].studiedSeconds + 1;
      updateProgress(index);
      updateStats();
      localStorage.setItem('subjects', JSON.stringify(subjects));
    }, 1000); // tick every second
    renderSubjects();
  }

  function updateProgress(index) {
    var fill = document.getElementById('progressFill' + index);
    var percent = Math.min((subjects[index].studiedSeconds/60)/subjects[index].goal * 100, 100);
    fill.style.width = percent + '%';
    fill.parentElement.nextSibling.innerHTML = 'Studied: ' + Math.floor(subjects[index].studiedSeconds/60) + ' min';
  }

  function renderSubjects() {
    var container = document.getElementById('subjectsContainer');
    container.innerHTML = '';
    for(var i=0; i<subjects.length; i=i+1) {
      var card = document.createElement('div');
      card.className = 'subjectCard';
      card.innerHTML = '<h2>' + subjects[i].name + '</h2>' +
        '<p>Goal: ' + subjects[i].goal + ' min</p>' +
        '<p id="studied' + i + '">Studied: ' + Math.floor(subjects[i].studiedSeconds/60) + ' min</p>' +
        '<div class="progressBar"><div id="progressFill' + i + '" class="progressFill"></div></div>' +
        '<button class="timerBtn" onclick="startTimer(' + i + ')">' + (subjects[i].timer ? 'Stop' : 'Start') + ' Timer</button>';
      container.appendChild(card);
      updateProgress(i);
    }
  }

  function updateStats() {
    var totalStudied = 0;
    var totalGoal = 0;
    for(var i=0; i<subjects.length; i=i+1) {
      totalStudied += Math.floor(subjects[i].studiedSeconds/60);
      totalGoal += subjects[i].goal;
    }
    document.getElementById('totalTime').innerHTML = 'Total Study Time: ' + totalStudied + ' minutes';
    document.getElementById('totalGoals').innerHTML = 'Total Goal Time: ' + totalGoal + ' minutes';
  }

  renderSubjects();
  updateStats();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}

function copyCODE69() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>UnitFlow — Data & Speed Converter</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Offline data size and transfer speed calculator">

  <style>
    :root {
      --bg: #0b0f1a;
      --panel: #12182a;
      --border: #1e2642;
      --text: #e5e7eb;
      --muted: #9ca3af;
      --accent: #60a5fa;
      --radius: 12px;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
    }

    header {
      padding: 20px;
      background: var(--panel);
      border-bottom: 1px solid var(--border);
    }

    header h1 {
      margin: 0;
      font-size: 1.35rem;
      letter-spacing: 0.3px;
    }

    main {
      max-width: 900px;
      margin: auto;
      padding: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 18px;
    }

    label {
      font-size: 0.85rem;
      color: var(--muted);
      display: block;
      margin-bottom: 6px;
    }

    input, select {
      width: 100%;
      padding: 10px;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      background: #0c1225;
      color: var(--text);
      margin-bottom: 12px;
      font-size: 0.9rem;
    }

    input:focus, select:focus {
      outline: none;
      border-color: var(--accent);
    }

    .result {
      font-size: 0.95rem;
      line-height: 1.6;
    }

    footer {
      grid-column: 1 / -1;
      text-align: center;
      font-size: 0.8rem;
      color: var(--muted);
      margin-top: 20px;
    }

    @media (max-width: 800px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>

<header>
  <h1>UnitFlow</h1>
</header>

<main>
  <!-- DATA CONVERTER -->
  <div class="card">
    <label>Data amount</label>
    <input id="dataValue" type="number" min="0" step="any">

    <label>Unit</label>
    <select id="dataUnit">
      <option value="B">Bytes (B)</option>
      <option value="KB">Kilobytes (KB)</option>
      <option value="MB">Megabytes (MB)</option>
      <option value="GB">Gigabytes (GB)</option>
      <option value="TB">Terabytes (TB)</option>
      <option value="KiB">Kibibytes (KiB)</option>
      <option value="MiB">Mebibytes (MiB)</option>
      <option value="GiB">Gibibytes (GiB)</option>
    </select>

    <div class="result" id="dataResult">—</div>
  </div>

  <!-- SPEED CALCULATOR -->
  <div class="card">
    <label>File size (MB)</label>
    <input id="fileSize" type="number" min="0" step="any">

    <label>Speed (Mbps)</label>
    <input id="speed" type="number" min="0" step="any">

    <div class="result" id="timeResult">—</div>
  </div>

  <footer>
    Fully offline • Accurate decimal & binary math
  </footer>
</main>

<script>
(function () {
  'use strict';

  const dataInput = document.getElementById('dataValue');
  const unitSelect = document.getElementById('dataUnit');
  const dataResult = document.getElementById('dataResult');

  const fileSizeInput = document.getElementById('fileSize');
  const speedInput = document.getElementById('speed');
  const timeResult = document.getElementById('timeResult');

  const decimal = {
    B: 1,
    KB: 1e3,
    MB: 1e6,
    GB: 1e9,
    TB: 1e12
  };

  const binary = {
    KiB: 1024,
    MiB: 1024 ** 2,
    GiB: 1024 ** 3
  };

  function toBytes(value, unit) {
    if (decimal[unit]) return value * decimal[unit];
    if (binary[unit]) return value * binary[unit];
    return 0;
  }

  function updateData() {
    const value = Number(dataInput.value);
    const unit = unitSelect.value;

    if (!value || value < 0) {
      dataResult.textContent = '—';
      return;
    }

    const bytes = toBytes(value, unit);

    dataResult.textContent =
      'Bytes: ' + bytes.toFixed(0) +
      '\nMB: ' + (bytes / 1e6).toFixed(3) +
      '\nMiB: ' + (bytes / (1024 ** 2)).toFixed(3);
  }

  function updateTime() {
    const sizeMB = Number(fileSizeInput.value);
    const speedMbps = Number(speedInput.value);

    if (!sizeMB || !speedMbps || speedMbps <= 0) {
      timeResult.textContent = '—';
      return;
    }

    const bits = sizeMB * 8 * 1e6;
    const seconds = bits / (speedMbps * 1e6);

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    timeResult.textContent =
      'Estimated time: ' + mins + ' min ' + secs + ' sec';
  }

  dataInput.addEventListener('input', updateData);
  unitSelect.addEventListener('change', updateData);
  fileSizeInput.addEventListener('input', updateTime);
  speedInput.addEventListener('input', updateTime);
})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}

function copyCODE70() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ImageScope — Offline Image Analyzer</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Offline image metadata and dimension analyzer">

  <style>
    :root {
      --bg: #0b0f1a;
      --panel: #12182a;
      --border: #1e2642;
      --text: #e5e7eb;
      --muted: #9ca3af;
      --accent: #38bdf8;
      --radius: 12px;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
    }

    header {
      padding: 20px;
      background: var(--panel);
      border-bottom: 1px solid var(--border);
    }

    header h1 {
      margin: 0;
      font-size: 1.35rem;
      letter-spacing: 0.3px;
    }

    main {
      max-width: 1000px;
      margin: auto;
      padding: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 18px;
    }

    input[type="file"] {
      width: 100%;
      padding: 10px;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      background: #0c1225;
      color: var(--text);
      margin-bottom: 12px;
    }

    .preview {
      width: 100%;
      height: 300px;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0c1225;
      overflow: hidden;
    }

    .preview img {
      max-width: 100%;
      max-height: 100%;
      display: block;
    }

    .row {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      margin-bottom: 6px;
      color: var(--muted);
    }

    footer {
      grid-column: 1 / -1;
      text-align: center;
      font-size: 0.8rem;
      color: var(--muted);
      margin-top: 20px;
    }

    @media (max-width: 900px) {
      main { grid-template-columns: 1fr; }
    }
  </style>
</head>

<body>

<header>
  <h1>ImageScope</h1>
</header>

<main>

  <!-- INPUT -->
  <div class="card">
    <input id="fileInput" type="file" accept="image/*">

    <div class="preview" id="preview">
      <span class="muted">No image loaded</span>
    </div>
  </div>

  <!-- INFO -->
  <div class="card">
    <div class="row"><span>Width</span><span id="width">—</span></div>
    <div class="row"><span>Height</span><span id="height">—</span></div>
    <div class="row"><span>Aspect Ratio</span><span id="ratio">—</span></div>
    <div class="row"><span>Orientation</span><span id="orientation">—</span></div>
    <div class="row"><span>File Size</span><span id="size">—</span></div>
    <div class="row"><span>Megapixels</span><span id="mp">—</span></div>
  </div>

  <footer>
    Fully offline • No uploads • Safe preview
  </footer>

</main>

<script>
(function () {
  'use strict';

  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('preview');

  const widthEl = document.getElementById('width');
  const heightEl = document.getElementById('height');
  const ratioEl = document.getElementById('ratio');
  const orientationEl = document.getElementById('orientation');
  const sizeEl = document.getElementById('size');
  const mpEl = document.getElementById('mp');

  let currentURL = null;

  function reset() {
    widthEl.textContent = '—';
    heightEl.textContent = '—';
    ratioEl.textContent = '—';
    orientationEl.textContent = '—';
    sizeEl.textContent = '—';
    mpEl.textContent = '—';
    preview.innerHTML = '<span>No image loaded</span>';
  }

  fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];
    if (!file || !file.type.startsWith('image/')) {
      reset();
      return;
    }

    if (currentURL) {
      URL.revokeObjectURL(currentURL);
    }

    const img = new Image();
    currentURL = URL.createObjectURL(file);

    img.onload = function () {
      const w = img.naturalWidth;
      const h = img.naturalHeight;

      widthEl.textContent = w + ' px';
      heightEl.textContent = h + ' px';

      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const d = gcd(w, h);

      ratioEl.textContent = (w / d) + ':' + (h / d);
      orientationEl.textContent =
        w === h ? 'Square' : w > h ? 'Landscape' : 'Portrait';

      sizeEl.textContent =
        file.size > 1e6
          ? (file.size / 1e6).toFixed(2) + ' MB'
          : (file.size / 1e3).toFixed(1) + ' KB';

      mpEl.textContent = ((w * h) / 1e6).toFixed(2) + ' MP';

      preview.innerHTML = '';
      preview.appendChild(img);
    };

    img.onerror = function () {
      reset();
    };

    img.src = currentURL;
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

function copyCODE71() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Scenario Timeline Simulator</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root {
  --bg: #0f1220;
  --panel: #171a2e;
  --panel-2: #1f2440;
  --text: #eef1ff;
  --muted: #9aa1c7;
  --accent: #6c7cff;
  --border: #2b3160;
}

* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  margin: 0;
  height: 100vh;
  background: var(--bg);
  color: var(--text);
  display: flex;
}

aside {
  width: 260px;
  padding: 16px;
  background: var(--panel);
  border-right: 1px solid var(--border);
}

aside h1 {
  font-size: 15px;
  margin: 0 0 12px;
}

aside button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  cursor: pointer;
}

.scenario-list {
  margin-top: 12px;
}

.scenario {
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.scenario:hover {
  background: var(--panel-2);
}

main {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h2 {
  margin: 0;
  font-size: 18px;
}

.score {
  font-size: 14px;
  color: var(--muted);
}

.timeline {
  flex: 1;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 12px;
  overflow-y: auto;
}

.event {
  padding: 10px;
  border-radius: 8px;
  background: var(--panel);
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}

.event.positive {
  border-left: 4px solid #4caf50;
}

.event.negative {
  border-left: 4px solid #ff5f5f;
}

.controls {
  display: flex;
  gap: 8px;
}

input {
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
}

select, button.add {
  padding: 8px;
  border-radius: 6px;
  border: none;
}

button.add {
  background: var(--accent);
  color: #fff;
}
</style>
</head>

<body>

<aside>
  <h1>Scenarios</h1>
  <button id="newScenarioBtn" type="button">New Scenario</button>
  <div class="scenario-list" id="scenarioList"></div>
</aside>

<main>
  <header>
    <h2 id="scenarioTitle">No scenario selected</h2>
    <div class="score" id="scoreDisplay">Score: 0</div>
  </header>

  <div class="timeline" id="timeline"></div>

  <div class="controls">
    <input id="eventInput" type="text" placeholder="Event description">
    <select id="impactSelect">
      <option value="5">Positive</option>
      <option value="-5">Negative</option>
    </select>
    <button class="add" id="addEventBtn" type="button">Add</button>
  </div>
</main>

<script>
(function () {
  "use strict";

  var STORAGE_KEY = "scenario_simulator_data";
  var data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  var activeIndex = -1;

  var scenarioList = document.getElementById("scenarioList");
  var timeline = document.getElementById("timeline");
  var titleEl = document.getElementById("scenarioTitle");
  var scoreEl = document.getElementById("scoreDisplay");

  var eventInput = document.getElementById("eventInput");
  var impactSelect = document.getElementById("impactSelect");

  document.getElementById("newScenarioBtn").addEventListener("click", createScenario);
  document.getElementById("addEventBtn").addEventListener("click", addEvent);

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function createScenario() {
    data.push({ name: "New Scenario", events: [] });
    activeIndex = data.length - 1;
    save();
    render();
  }

  function addEvent() {
    if (activeIndex < 0 || !eventInput.value) {
      return;
    }

    data[activeIndex].events.push({
      text: eventInput.value,
      impact: Number(impactSelect.value)
    });

    eventInput.value = "";
    save();
    render();
  }

  function render() {
    scenarioList.innerHTML = "";
    timeline.innerHTML = "";

    data.forEach(function (s, i) {
      var div = document.createElement("div");
      div.className = "scenario";
      div.textContent = s.name;
      div.addEventListener("click", function () {
        activeIndex = i;
        render();
      });
      scenarioList.appendChild(div);
    });

    if (activeIndex < 0) {
      titleEl.textContent = "No scenario selected";
      scoreEl.textContent = "Score: 0";
      return;
    }

    var scenario = data[activeIndex];
    titleEl.textContent = scenario.name;

    var score = 0;
    scenario.events.forEach(function (e) {
      score += e.impact;

      var ev = document.createElement("div");
      ev.className = "event " + (e.impact > 0 ? "positive" : "negative");
      ev.textContent = e.text;
      timeline.appendChild(ev);
    });

    scoreEl.textContent = "Score: " + score;
  }

  render();
})();
</script>

</body>
</html>


  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE72() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Life Area Balance Simulator</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root {
  --bg: #0e1020;
  --panel: #161a33;
  --panel-2: #1e2350;
  --text: #eef0ff;
  --muted: #a3aad9;
  --accent: #6f7dff;
  --border: #2c3270;
}

* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  margin: 0;
  height: 100vh;
  background: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  width: 900px;
  max-width: 95%;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

h1 {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 18px;
}

.area {
  background: var(--panel-2);
  padding: 14px;
  border-radius: 10px;
}

.area label {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

input[type="range"] {
  width: 100%;
  margin-top: 8px;
}

.summary {
  grid-column: 1 / -1;
  padding: 16px;
  border-radius: 10px;
  background: var(--panel-2);
  font-size: 14px;
}

.balance {
  margin-top: 8px;
  color: var(--muted);
}
</style>
</head>

<body>

<div class="app">
  <h1>Life Area Balance</h1>

  <div class="area">
    <label>Health <span id="v-health">0</span></label>
    <input type="range" min="0" max="100" value="0" id="health">
  </div>

  <div class="area">
    <label>Money <span id="v-money">0</span></label>
    <input type="range" min="0" max="100" value="0" id="money">
  </div>

  <div class="area">
    <label>Learning <span id="v-learning">0</span></label>
    <input type="range" min="0" max="100" value="0" id="learning">
  </div>

  <div class="area">
    <label>Social <span id="v-social">0</span></label>
    <input type="range" min="0" max="100" value="0" id="social">
  </div>

  <div class="area">
    <label>Rest <span id="v-rest">0</span></label>
    <input type="range" min="0" max="100" value="0" id="rest">
  </div>

  <div class="area">
    <label>Purpose <span id="v-purpose">0</span></label>
    <input type="range" min="0" max="100" value="0" id="purpose">
  </div>

  <div class="summary">
    <strong>Total Energy:</strong> <span id="total">0</span> / 100
    <div class="balance" id="feedback"></div>
  </div>
</div>

<script>
(function () {
  "use strict";

  var areas = ["health", "money", "learning", "social", "rest", "purpose"];
  var totalEl = document.getElementById("total");
  var feedbackEl = document.getElementById("feedback");

  function update() {
    var total = 0;

    areas.forEach(function (name) {
      var input = document.getElementById(name);
      var value = Number(input.value);
      document.getElementById("v-" + name).textContent = value;
      total += value;
    });

    totalEl.textContent = total;

    if (total < 100) {
      feedbackEl.textContent = "You are under-allocating your energy.";
    } else if (total > 100) {
      feedbackEl.textContent = "You are spreading yourself too thin.";
    } else {
      feedbackEl.textContent = "Your energy is consciously balanced.";
    }
  }

  areas.forEach(function (name) {
    document.getElementById(name).addEventListener("input", update);
  });

  update();
})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE73() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Decision Trade-Off Matrix</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root {
  --bg: #0e1022;
  --panel: #171a36;
  --panel-2: #1f2350;
  --text: #eef0ff;
  --muted: #a5acd9;
  --accent: #6c7cff;
  --border: #2d3270;
}

* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  margin: 0;
  height: 100vh;
  background: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  width: 1000px;
  max-width: 96%;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
}

h1 {
  margin: 0 0 12px;
  font-size: 18px;
}

.grid {
  display: grid;
  grid-template-columns: 180px repeat(3, 1fr);
  gap: 10px;
}

.cell {
  background: var(--panel-2);
  padding: 10px;
  border-radius: 8px;
  font-size: 13px;
}

.header {
  font-weight: 600;
  text-align: center;
}

input[type="number"],
input[type="text"] {
  width: 100%;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  padding: 6px;
}

.weight {
  display: flex;
  gap: 6px;
  align-items: center;
}

.summary {
  margin-top: 16px;
  padding: 14px;
  background: var(--panel-2);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
</style>
</head>

<body>

<div class="app">
  <h1>Decision Trade-Off Matrix</h1>

  <div class="grid" id="matrix">
    <div class="cell"></div>
    <div class="cell header">Option A</div>
    <div class="cell header">Option B</div>
    <div class="cell header">Option C</div>
  </div>

  <div class="summary">
    <div>Best weighted option: <strong id="best">—</strong></div>
    <div>Total clarity improves when weights differ.</div>
  </div>
</div>

<script>
(function () {
  "use strict";

  var criteria = ["Time", "Money", "Stress", "Growth", "Freedom"];
  var matrixEl = document.getElementById("matrix");
  var bestEl = document.getElementById("best");

  var values = [];

  function createRow(label, rowIndex) {
    var labelCell = document.createElement("div");
    labelCell.className = "cell";
    labelCell.textContent = label;
    matrixEl.appendChild(labelCell);

    for (var i = 0; i < 3; i += 1) {
      var cell = document.createElement("div");
      cell.className = "cell";

      var input = document.createElement("input");
      input.type = "number";
      input.min = "0";
      input.max = "10";
      input.value = "5";

      input.addEventListener("input", calculate);

      cell.appendChild(input);
      matrixEl.appendChild(cell);

      if (!values[rowIndex]) {
        values[rowIndex] = [];
      }
      values[rowIndex][i] = input;
    }
  }

  function calculate() {
    var totals = [0, 0, 0];

    for (var r = 0; r < values.length; r += 1) {
      for (var c = 0; c < 3; c += 1) {
        totals[c] += Number(values[r][c].value);
      }
    }

    var max = Math.max.apply(null, totals);
    var index = totals.indexOf(max);

    bestEl.textContent = ["Option A", "Option B", "Option C"][index];
  }

  criteria.forEach(function (c, i) {
    createRow(c, i);
  });

  calculate();
})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}

function copyCODE74() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Identity Conflict Mapper</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root {
  --bg: #0b0d17;
  --panel: #141833;
  --panel-2: #1c2150;
  --text: #eef0ff;
  --muted: #a2a8d9;
  --accent: #6f7dff;
  --border: #2b3168;
  --conflict: #ff6b6b;
  --align: #4caf50;
}

* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  margin: 0;
  height: 100vh;
  background: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  width: 960px;
  max-width: 96%;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

h1 {
  grid-column: 1 / -1;
  font-size: 18px;
  margin: 0;
}

.section {
  background: var(--panel-2);
  border-radius: 10px;
  padding: 14px;
}

.section h2 {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--muted);
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 6px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
}

.analysis {
  grid-column: 1 / -1;
  background: var(--panel-2);
  border-radius: 10px;
  padding: 16px;
}

.result {
  margin-top: 8px;
  font-size: 14px;
}

.align {
  color: var(--align);
}

.conflict {
  color: var(--conflict);
}
</style>
</head>

<body>

<div class="app">
  <h1>Identity Conflict Mapper</h1>

  <div class="section">
    <h2>Who I want to be</h2>
    <input id="ideal1" type="text" placeholder="e.g. Disciplined">
    <input id="ideal2" type="text" placeholder="e.g. Free">
    <input id="ideal3" type="text" placeholder="e.g. Respected">
  </div>

  <div class="section">
    <h2>What I value</h2>
    <input id="value1" type="text" placeholder="e.g. Stability">
    <input id="value2" type="text" placeholder="e.g. Growth">
    <input id="value3" type="text" placeholder="e.g. Independence">
  </div>

  <div class="section">
    <h2>What I actually do</h2>
    <input id="action1" type="text" placeholder="e.g. Avoid risks">
    <input id="action2" type="text" placeholder="e.g. Work long hours">
    <input id="action3" type="text" placeholder="e.g. Delay decisions">
  </div>

  <div class="analysis">
    <strong>Conflict Analysis</strong>
    <div id="analysisResult" class="result"></div>
  </div>
</div>

<script>
(function () {
  "use strict";

  var inputs = document.querySelectorAll("input");
  var output = document.getElementById("analysisResult");

  function analyze() {
    var ideals = [
      document.getElementById("ideal1").value,
      document.getElementById("ideal2").value,
      document.getElementById("ideal3").value
    ].filter(Boolean);

    var values = [
      document.getElementById("value1").value,
      document.getElementById("value2").value,
      document.getElementById("value3").value
    ].filter(Boolean);

    var actions = [
      document.getElementById("action1").value,
      document.getElementById("action2").value,
      document.getElementById("action3").value
    ].filter(Boolean);

    if (ideals.length === 0 || values.length === 0 || actions.length === 0) {
      output.textContent = "Fill all sections to reveal internal alignment or conflict.";
      return;
    }

    if (values.length > actions.length) {
      output.textContent = "You value more than you currently act on.";
      output.className = "result conflict";
      return;
    }

    if (actions.length > values.length) {
      output.textContent = "Your actions exceed your stated values — possible burnout risk.";
      output.className = "result conflict";
      return;
    }

    output.textContent = "Your identity, values, and actions are structurally aligned.";
    output.className = "result align";
  }

  inputs.forEach(function (input) {
    input.addEventListener("input", analyze);
  });

  analyze();
})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE75() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Identity × Environment Friction Analyzer</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
:root {
  --bg: #0a0c18;
  --panel: #141834;
  --panel-2: #1c214a;
  --text: #eef0ff;
  --muted: #a2a9d9;
  --border: #2b316a;
  --good: #4caf50;
  --bad: #ff6b6b;
}

* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  margin: 0;
  height: 100vh;
  background: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  width: 1000px;
  max-width: 96%;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

h1 {
  grid-column: 1 / -1;
  font-size: 18px;
  margin: 0;
}

.section {
  background: var(--panel-2);
  border-radius: 10px;
  padding: 14px;
}

.section h2 {
  font-size: 14px;
  margin: 0 0 8px;
  color: var(--muted);
}

.row {
  display: flex;
  gap: 8px;
  margin-bottom: 6px;
}

input[type="text"] {
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
}

select {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
}

.analysis {
  grid-column: 1 / -1;
  background: var(--panel-2);
  border-radius: 10px;
  padding: 16px;
}

.result {
  margin-top: 8px;
  font-size: 14px;
}

.good {
  color: var(--good);
}

.bad {
  color: var(--bad);
}
</style>
</head>

<body>

<div class="app">
  <h1>Identity × Environment Friction</h1>

  <div class="section">
    <h2>Identity Traits</h2>
    <input id="i1" type="text" placeholder="e.g. Focused">
    <input id="i2" type="text" placeholder="e.g. Independent">
    <input id="i3" type="text" placeholder="e.g. Creative">
  </div>

  <div class="section">
    <h2>Environmental Forces</h2>

    <div class="row">
      <input id="e1" type="text" placeholder="e.g. Constant notifications">
      <select id="p1">
        <option value="-1">Resists</option>
        <option value="1">Supports</option>
      </select>
    </div>

    <div class="row">
      <input id="e2" type="text" placeholder="e.g. Family expectations">
      <select id="p2">
        <option value="-1">Resists</option>
        <option value="1">Supports</option>
      </select>
    </div>

    <div class="row">
      <input id="e3" type="text" placeholder="e.g. Quiet workspace">
      <select id="p3">
        <option value="1">Supports</option>
        <option value="-1">Resists</option>
      </select>
    </div>
  </div>

  <div class="analysis">
    <strong>Structural Analysis</strong>
    <div id="output" class="result"></div>
  </div>
</div>

<script>
(function () {
  "use strict";

  var output = document.getElementById("output");
  var inputs = document.querySelectorAll("input, select");

  function analyze() {
    var identityCount = 0;
    var support = 0;
    var resist = 0;

    ["i1", "i2", "i3"].forEach(function (id) {
      if (document.getElementById(id).value.trim()) {
        identityCount += 1;
      }
    });

    ["p1", "p2", "p3"].forEach(function (id) {
      var value = Number(document.getElementById(id).value);
      if (value > 0) {
        support += 1;
      } else {
        resist += 1;
      }
    });

    if (identityCount === 0) {
      output.textContent = "Define identity traits to reveal environmental pressure.";
      output.className = "result";
      return;
    }

    if (resist > support) {
      output.textContent =
        "Your environment structurally resists who you are. Effort alone will not solve this.";
      output.className = "result bad";
      return;
    }

    if (support > resist) {
      output.textContent =
        "Your environment supports your identity. Progress depends on consistency, not force.";
      output.className = "result good";
      return;
    }

    output.textContent =
      "Your environment is neutral. Small changes could create momentum.";
    output.className = "result";
  }

  inputs.forEach(function (el) {
    el.addEventListener("input", analyze);
    el.addEventListener("change", analyze);
  });

  analyze();
})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE76() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Signal Ledger</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    :root {
      --bg: #0f172a;
      --panel: #111827;
      --card: #020617;
      --accent: #38bdf8;
      --text: #e5e7eb;
      --muted: #94a3b8;
    }

    * {
      box-sizing: border-box;
      font-family: system-ui, sans-serif;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .app {
      width: 100%;
      max-width: 900px;
      background: var(--panel);
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
    }

    h1 {
      margin: 0 0 6px;
      color: var(--accent);
      font-size: 22px;
    }

    p {
      margin: 0 0 20px;
      color: var(--muted);
      font-size: 14px;
    }

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .card {
      background: var(--card);
      border-radius: 14px;
      padding: 15px;
    }

    .card h2 {
      margin: 0 0 10px;
      font-size: 16px;
    }

    input {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: none;
      background: #020617;
      color: var(--text);
      margin-bottom: 8px;
    }

    button {
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      border: none;
      background: var(--accent);
      color: #000;
      font-weight: 600;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 10px 0 0;
    }

    li {
      background: #020617;
      border-radius: 8px;
      padding: 8px;
      margin-bottom: 6px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }

    .output {
      margin-top: 15px;
      background: #020617;
      border-radius: 12px;
      padding: 12px;
      font-size: 14px;
    }

    @media (max-width: 800px) {
      .row {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <main class="app">
    <h1>Signal Ledger</h1>
    <p>Track patterns. Not opinions.</p>

    <section class="row">
      <div class="card">
        <h2>Add Signal</h2>
        <input id="signalInput" placeholder="Signal name">
        <button id="addSignalBtn" type="button">Add Signal</button>
        <ul id="signalList"></ul>
      </div>

      <div class="card">
        <h2>Summary</h2>
        <div class="output" id="summary">
          No signals yet.
        </div>
      </div>
    </section>
  </main>

  <script>
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
      var signalInput = document.getElementById('signalInput');
      var addSignalBtn = document.getElementById('addSignalBtn');
      var signalList = document.getElementById('signalList');
      var summary = document.getElementById('summary');

      var signals = [];

      function render() {
        signalList.innerHTML = '';

        if (signals.length === 0) {
          summary.textContent = 'No signals yet.';
          return;
        }

        var total = signals.length;
        summary.textContent = 'Total signals recorded: ' + total;

        signals.forEach(function (name) {
          var li = document.createElement('li');
          var spanName = document.createElement('span');
          var spanIndex = document.createElement('span');

          spanName.textContent = name;
          spanIndex.textContent = '#';

          li.appendChild(spanName);
          li.appendChild(spanIndex);
          signalList.appendChild(li);
        });
      }

      addSignalBtn.addEventListener('click', function () {
        var value = signalInput.value.trim();

        if (value === '') {
          return;
        }

        signals.push(value);
        signalInput.value = '';
        render();
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
function copyCODE77() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Constraint Engine</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    :root {
      --bg:#020617;
      --panel:#0f172a;
      --card:#020617;
      --accent:#22d3ee;
      --text:#e5e7eb;
      --muted:#94a3b8;
      --good:#22c55e;
      --bad:#ef4444;
    }

    * {
      box-sizing: border-box;
      font-family: system-ui, sans-serif;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    main {
      width: 100%;
      max-width: 1000px;
      background: var(--panel);
      border-radius: 18px;
      padding: 20px;
      box-shadow: 0 40px 80px rgba(0,0,0,0.7);
    }

    h1 {
      margin: 0;
      color: var(--accent);
      font-size: 24px;
    }

    p {
      margin: 6px 0 20px;
      color: var(--muted);
      font-size: 14px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    section {
      background: var(--card);
      border-radius: 14px;
      padding: 15px;
    }

    h2 {
      margin: 0 0 10px;
      font-size: 16px;
    }

    input {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: none;
      background: #020617;
      color: var(--text);
      margin-bottom: 8px;
    }

    button {
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      border: none;
      background: var(--accent);
      color: #000;
      font-weight: 600;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 10px 0 0;
    }

    li {
      background: #020617;
      border-radius: 8px;
      padding: 8px;
      margin-bottom: 6px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }

    .result {
      margin-top: 20px;
      background: #020617;
      border-radius: 14px;
      padding: 15px;
      font-size: 15px;
    }

    .winner {
      color: var(--good);
      font-weight: 600;
    }

    @media (max-width: 900px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

<main>
  <h1>Constraint Engine</h1>
  <p>Find the best option that survives all constraints.</p>

  <div class="grid">
    <section>
      <h2>Options</h2>
      <input id="optionInput" placeholder="Option name">
      <button id="addOption" type="button">Add Option</button>
      <ul id="optionList"></ul>
    </section>

    <section>
      <h2>Constraints (min score)</h2>
      <input id="constraintInput" placeholder="Constraint (1–10)">
      <button id="addConstraint" type="button">Add Constraint</button>
      <ul id="constraintList"></ul>
    </section>
  </div>

  <div class="result" id="result">
    No evaluation yet.
  </div>
</main>

<script>
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var optionInput = document.getElementById('optionInput');
    var constraintInput = document.getElementById('constraintInput');
    var optionList = document.getElementById('optionList');
    var constraintList = document.getElementById('constraintList');
    var result = document.getElementById('result');
    var addOptionBtn = document.getElementById('addOption');
    var addConstraintBtn = document.getElementById('addConstraint');

    var options = [];
    var constraints = [];

    function evaluate() {
      optionList.innerHTML = '';
      constraintList.innerHTML = '';

      if (options.length === 0 || constraints.length === 0) {
        result.textContent = 'Add options and constraints to evaluate.';
        return;
      }

      var survivors = options.filter(function (opt) {
        return constraints.every(function (c) {
          return opt.score >= c;
        });
      });

      options.forEach(function (opt) {
        var li = document.createElement('li');
        li.textContent = opt.name + ' — score ' + opt.score;
        optionList.appendChild(li);
      });

      constraints.forEach(function (c) {
        var li = document.createElement('li');
        li.textContent = 'Minimum score: ' + c;
        constraintList.appendChild(li);
      });

      if (survivors.length === 0) {
        result.innerHTML = '<span style="color:#ef4444">No option satisfies all constraints.</span>';
        return;
      }

      var best = survivors.reduce(function (a, b) {
        return a.score > b.score ? a : b;
      });

      result.innerHTML =
        'Best viable option: <span class="winner">' +
        best.name +
        '</span> (score ' +
        best.score +
        ')';
    }

    addOptionBtn.addEventListener('click', function () {
      var name = optionInput.value.trim();
      if (name === '') {
        return;
      }

      options.push({
        name: name,
        score: Math.floor(Math.random() * 10) + 1
      });

      optionInput.value = '';
      evaluate();
    });

    addConstraintBtn.addEventListener('click', function () {
      var value = Number(constraintInput.value);
      if (Number.isNaN(value) || value < 1 || value > 10) {
        return;
      }

      constraints.push(value);
      constraintInput.value = '';
      evaluate();
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
function copyCODE78() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ReasonCLI</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    :root {
      --bg: #000000;
      --text: #d1d5db;
      --accent: #22c55e;
      --muted: #6b7280;
    }

    * {
      box-sizing: border-box;
      font-family: Consolas, monospace;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .terminal {
      width: 100%;
      max-width: 900px;
      background: #020617;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 30px 80px rgba(0,0,0,0.8);
    }

    .output {
      min-height: 300px;
      max-height: 60vh;
      overflow-y: auto;
      white-space: pre-wrap;
      font-size: 14px;
      line-height: 1.6;
    }

    .line {
      color: var(--muted);
    }

    .accent {
      color: var(--accent);
    }

    .input-row {
      display: flex;
      margin-top: 10px;
    }

    .prompt {
      color: var(--accent);
      margin-right: 6px;
    }

    input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: var(--text);
      font-size: 14px;
    }
  </style>
</head>
<body>

<div class="terminal">
  <div class="output" id="output"></div>
  <div class="input-row">
    <span class="prompt">&gt;</span>
    <input id="commandInput" autocomplete="off" placeholder="type 'help'">
  </div>
</div>

<script>
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var output = document.getElementById('output');
    var input = document.getElementById('commandInput');

    var assumptions = [];
    var conclusions = [];

    function print(text, accent) {
      var div = document.createElement('div');
      div.textContent = text;
      if (accent) {
        div.classList.add('accent');
      }
      output.appendChild(div);
      output.scrollTop = output.scrollHeight;
    }

    function help() {
      print('Commands:', true);
      print('assume <text>   → add an assumption');
      print('conclude <text> → add a conclusion');
      print('list            → show all entries');
      print('clear           → reset session');
    }

    function listAll() {
      if (assumptions.length === 0 && conclusions.length === 0) {
        print('Nothing recorded.');
        return;
      }

      print('Assumptions:', true);
      assumptions.forEach(function (a, i) {
        print((i + 1) + '. ' + a);
      });

      print('Conclusions:', true);
      conclusions.forEach(function (c, i) {
        print((i + 1) + '. ' + c);
      });
    }

    function clearAll() {
      assumptions = [];
      conclusions = [];
      output.innerHTML = '';
      print('Session cleared.', true);
    }

    input.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter') {
        return;
      }

      var value = input.value.trim();
      input.value = '';

      if (value === '') {
        return;
      }

      print('> ' + value);

      if (value === 'help') {
        help();
        return;
      }

      if (value === 'list') {
        listAll();
        return;
      }

      if (value === 'clear') {
        clearAll();
        return;
      }

      if (value.startsWith('assume ')) {
        assumptions.push(value.slice(7));
        print('Assumption added.', true);
        return;
      }

      if (value.startsWith('conclude ')) {
        conclusions.push(value.slice(9));
        print('Conclusion added.', true);
        return;
      }

      print('Unknown command. Type "help".');
    });

    print('ReasonCLI initialized.', true);
    print('Type "help" to begin.');
  });
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE79() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thought Weave</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    :root {
      --bg: #0a0a0a;
      --node: #111827;
      --border: #1f2933;
      --text: #e5e7eb;
      --accent: #60a5fa;
    }

    * {
      box-sizing: border-box;
      font-family: system-ui, sans-serif;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      overflow: hidden;
    }

    canvas {
      position: fixed;
      inset: 0;
    }

    .node {
      position: absolute;
      min-width: 140px;
      padding: 10px;
      background: var(--node);
      border: 1px solid var(--border);
      border-radius: 10px;
      cursor: grab;
      user-select: none;
    }

    .node:active {
      cursor: grabbing;
    }

    .node input {
      width: 100%;
      background: transparent;
      border: none;
      color: var(--text);
      outline: none;
      font-size: 14px;
    }

    .hint {
      position: fixed;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      color: #9ca3af;
      opacity: 0.8;
    }
  </style>
</head>
<body>

<canvas id="lines"></canvas>
<div class="hint">Click to create • Drag to move • Double-click to edit</div>

<script>
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('lines');
    var ctx = canvas.getContext('2d');

    var nodes = [];
    var connections = [];
    var dragging = null;
    var offsetX = 0;
    var offsetY = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawLines();
    }

    window.addEventListener('resize', resize);
    resize();

    function drawLines() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;

      connections.forEach(function (pair) {
        ctx.beginPath();
        ctx.moveTo(pair.a.x + 70, pair.a.y + 20);
        ctx.lineTo(pair.b.x + 70, pair.b.y + 20);
        ctx.stroke();
      });
    }

    function createNode(x, y) {
      var el = document.createElement('div');
      el.className = 'node';
      el.style.left = x + 'px';
      el.style.top = y + 'px';

      var input = document.createElement('input');
      input.value = 'New thought';
      el.appendChild(input);

      document.body.appendChild(el);

      var node = { el: el, x: x, y: y };
      nodes.push(node);

      if (nodes.length > 1) {
        connections.push({ a: nodes[nodes.length - 2], b: node });
      }

      el.addEventListener('mousedown', function (e) {
        dragging = node;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
      });

      el.addEventListener('dblclick', function () {
        input.focus();
        input.select();
      });

      drawLines();
    }

    document.addEventListener('mousemove', function (e) {
      if (!dragging) {
        return;
      }

      dragging.x = e.pageX - offsetX;
      dragging.y = e.pageY - offsetY;
      dragging.el.style.left = dragging.x + 'px';
      dragging.el.style.top = dragging.y + 'px';

      drawLines();
    });

    document.addEventListener('mouseup', function () {
      dragging = null;
    });

    document.addEventListener('click', function (e) {
      if (e.target !== document.body && e.target !== canvas) {
        return;
      }
      createNode(e.pageX - 70, e.pageY - 20);
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
function copyCODE80() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TimeLens</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    :root {
      --bg: #05070c;
      --panel: #0f172a;
      --line: #1f2937;
      --accent: #38bdf8;
      --text: #e5e7eb;
      --muted: #94a3b8;
    }

    * {
      box-sizing: border-box;
      font-family: system-ui, sans-serif;
    }

    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    main {
      width: 100%;
      max-width: 900px;
      background: var(--panel);
      border-radius: 18px;
      padding: 20px;
      box-shadow: 0 40px 80px rgba(0,0,0,0.7);
    }

    h1 {
      margin: 0;
      color: var(--accent);
      font-size: 22px;
    }

    p {
      margin: 6px 0 20px;
      font-size: 14px;
      color: var(--muted);
    }

    .input-row {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    input[type="text"] {
      flex: 1;
      padding: 10px;
      border-radius: 8px;
      border: none;
      background: #020617;
      color: var(--text);
    }

    button {
      padding: 10px 14px;
      border-radius: 10px;
      border: none;
      background: var(--accent);
      color: #000;
      font-weight: 600;
      cursor: pointer;
    }

    .timeline {
      margin: 20px 0;
    }

    input[type="range"] {
      width: 100%;
    }

    .ticks {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: var(--muted);
      margin-top: 4px;
    }

    .events {
      margin-top: 20px;
      border-top: 1px solid var(--line);
      padding-top: 15px;
    }

    .event {
      padding: 10px;
      border-left: 3px solid var(--accent);
      margin-bottom: 10px;
      background: #020617;
      border-radius: 8px;
      font-size: 14px;
    }

    .time {
      font-size: 12px;
      color: var(--muted);
      margin-bottom: 4px;
    }
  </style>
</head>
<body>

<main>
  <h1>TimeLens</h1>
  <p>Review decisions through time, not memory.</p>

  <div class="input-row">
    <input id="eventInput" type="text" placeholder="Log an event">
    <button id="addBtn" type="button">Add</button>
  </div>

  <div class="timeline">
    <input id="scrubber" type="range" min="0" max="0" value="0">
    <div class="ticks">
      <span>Start</span>
      <span>Now</span>
    </div>
  </div>

  <div class="events" id="eventList"></div>
</main>

<script>
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('eventInput');
    var addBtn = document.getElementById('addBtn');
    var scrubber = document.getElementById('scrubber');
    var eventList = document.getElementById('eventList');

    var events = [];
    var startTime = Date.now();

    function render() {
      eventList.innerHTML = '';

      var maxTime = scrubber.value;

      events
        .filter(function (e) {
          return e.time <= maxTime;
        })
        .forEach(function (e) {
          var div = document.createElement('div');
          div.className = 'event';

          var t = document.createElement('div');
          t.className = 'time';
          t.textContent = 'T+' + e.time + ' ms';

          var txt = document.createElement('div');
          txt.textContent = e.text;

          div.appendChild(t);
          div.appendChild(txt);
          eventList.appendChild(div);
        });
    }

    addBtn.addEventListener('click', function () {
      var value = input.value.trim();
      if (value === '') {
        return;
      }

      var time = Date.now() - startTime;
      events.push({ text: value, time: time });

      scrubber.max = String(time);
      scrubber.value = scrubber.max;

      input.value = '';
      render();
    });

    scrubber.addEventListener('input', render);
  });
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE81() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Safe Math Solver</title>

<style>
body{
  margin:0;
  font-family:system-ui,Segoe UI,Roboto;
  background:#0b1220;
  color:white;
  display:flex;
  justify-content:center;
  padding:40px 10px;
}
.app{
  width:560px;
  background:#020617;
  padding:24px;
  border-radius:14px;
}
h2{margin-top:0}
label{font-size:14px;color:#cbd5e1}
input,select{
  width:100%;
  padding:12px;
  margin-top:6px;
  margin-bottom:14px;
  border:none;
  border-radius:8px;
  background:#0f172a;
  color:white;
}
button{
  width:100%;
  padding:13px;
  border:none;
  border-radius:10px;
  background:#2563eb;
  color:white;
  font-size:16px;
  cursor:pointer;
}
.result{
  margin-top:18px;
  padding:14px;
  border-radius:10px;
  background:#0f172a;
  line-height:1.6;
}
.error{background:#7f1d1d}
</style>
</head>

<body>

<div class="app">
<h2>🧠 Safe Math Solver</h2>

<label>Mode</label>
<select id="mode">
<option value="linear">Linear (ax + b = c)</option>
<option value="quadratic">Quadratic (ax² + bx + c = 0)</option>
</select>

<label>A</label>
<input id="inputA" placeholder="Enter A">

<label>B</label>
<input id="inputB" placeholder="Enter B">

<label>C</label>
<input id="inputC" placeholder="Enter C">

<button id="solveBtn">Solve</button>

<div id="output" class="result"></div>
</div>

<script>
"use strict";

(function(){

/* DOM CACHE */
const modeEl = document.getElementById("mode");
const aEl = document.getElementById("inputA");
const bEl = document.getElementById("inputB");
const cEl = document.getElementById("inputC");
const outEl = document.getElementById("output");
const btn = document.getElementById("solveBtn");

/* UTIL */
function toNumber(value){
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function show(message,isError){
  outEl.className = isError ? "result error" : "result";
  outEl.innerHTML = message;
}

/* LINEAR SOLVER */
function solveLinear(A,B,C){

  if(A === 0){
    if(B === C){
      show("Infinite solutions (identity equation).",false);
    }else{
      show("No solution exists.",true);
    }
    return;
  }

  const step1 = C - B;
  const x = step1 / A;

  show(
    "Step 1: Move B → " + C + " - " + B + " = " + step1 + "<br>" +
    "Step 2: Divide by A → " + step1 + " / " + A + "<br><br>" +
    "<b>x = " + x + "</b>"
  ,false);
}

/* QUADRATIC SOLVER */
function solveQuadratic(A,B,C){

  if(A === 0){
    show("A cannot be 0 in quadratic equation.",true);
    return;
  }

  const discriminant = (B*B) - (4*A*C);

  if(discriminant < 0){
    show(
      "Discriminant = " + discriminant + "<br>" +
      "No real roots."
    ,true);
    return;
  }

  const sqrtD = Math.sqrt(discriminant);
  const x1 = (-B + sqrtD)/(2*A);
  const x2 = (-B - sqrtD)/(2*A);

  show(
    "Discriminant = b² − 4ac = " + discriminant + "<br>" +
    "√D = " + sqrtD + "<br><br>" +
    "<b>x₁ = " + x1 + "<br>x₂ = " + x2 + "</b>"
  ,false);
}

/* MAIN HANDLER */
btn.addEventListener("click",function(){

  const A = toNumber(aEl.value.trim());
  const B = toNumber(bEl.value.trim());
  const C = toNumber(cEl.value.trim());

  if(A === null || B === null || C === null){
    show("Please enter valid numbers in all fields.",true);
    return;
  }

  const mode = modeEl.value;

  if(mode === "linear"){
    solveLinear(A,B,C);
  }else{
    solveQuadratic(A,B,C);
  }

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
function copyCODE82() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Probability Lab</title>

<style>
body{
  margin:0;
  font-family:system-ui,Segoe UI,Roboto,Arial;
  background:#0b1220;
  color:white;
  display:flex;
  justify-content:center;
  padding:40px 10px;
}
.app{
  width:520px;
  background:#020617;
  padding:24px;
  border-radius:12px;
}
h2{margin-top:0}
input,select{
  width:100%;
  padding:12px;
  margin:10px 0;
  border:0;
  border-radius:8px;
  background:#0f172a;
  color:white;
}
button{
  width:100%;
  padding:13px;
  border:0;
  border-radius:10px;
  background:#2563eb;
  color:white;
  font-size:16px;
  cursor:pointer;
}
.result{
  margin-top:18px;
  padding:14px;
  border-radius:10px;
  background:#0f172a;
  line-height:1.6;
}
</style>
</head>

<body>

<div class="app">
<h2>Probability Simulator</h2>

<select id="mode">
<option value="coin">Coin flip</option>
<option value="dice">Dice roll</option>
<option value="custom">Custom win probability</option>
</select>

<input id="prob" placeholder="Win % (only for custom)">
<input id="trials" placeholder="Number of trials (ex: 1000)">

<button id="run">Run Simulation</button>

<div id="out" class="result"></div>
</div>

<script>
"use strict";

(function(){

var modeEl=document.getElementById("mode");
var probEl=document.getElementById("prob");
var trialsEl=document.getElementById("trials");
var outEl=document.getElementById("out");
var btn=document.getElementById("run");

function num(v){
  var n=parseFloat(v);
  if(isNaN(n)){return null;}
  if(!isFinite(n)){return null;}
  return n;
}

function simulate(){

  var trials=num(trialsEl.value);
  if(trials===null||trials<=0){
    outEl.innerHTML="Enter valid trial count.";
    return;
  }

  var wins=0;
  var mode=modeEl.value;

  if(mode==="coin"){
    for(var i=0;i<trials;i++){
      if(Math.random()<0.5){wins++;}
    }
    outEl.innerHTML=
      "Expected: 50%<br>"+
      "Actual: "+((wins/trials)*100).toFixed(2)+"%";
    return;
  }

  if(mode==="dice"){
    for(var j=0;j<trials;j++){
      var roll=Math.floor(Math.random()*6)+1;
      if(roll===6){wins++;}
    }
    outEl.innerHTML=
      "Chance of rolling 6 = 16.67%<br>"+
      "Actual: "+((wins/trials)*100).toFixed(2)+"%";
    return;
  }

  if(mode==="custom"){
    var p=num(probEl.value);
    if(p===null||p<0||p>100){
      outEl.innerHTML="Enter valid probability 0–100.";
      return;
    }

    for(var k=0;k<trials;k++){
      if(Math.random()<p/100){wins++;}
    }

    outEl.innerHTML=
      "Expected: "+p+"%<br>"+
      "Actual: "+((wins/trials)*100).toFixed(2)+"%";
  }
}

btn.addEventListener("click",simulate);

})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE83() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Physics Motion Lab</title>

<style>
body{
  margin:0;
  font-family:system-ui,Segoe UI,Roboto,Arial;
  background:#0b1220;
  color:white;
  display:flex;
  justify-content:center;
  padding:40px 10px;
}
.app{
  width:680px;
  background:#020617;
  padding:24px;
  border-radius:12px;
}
canvas{
  width:100%;
  height:260px;
  background:#0f172a;
  border-radius:10px;
  display:block;
  margin-top:10px;
}
input{
  width:100%;
  padding:12px;
  margin-top:10px;
  border:0;
  border-radius:8px;
  background:#0f172a;
  color:white;
}
button{
  width:100%;
  padding:13px;
  border:0;
  border-radius:10px;
  background:#2563eb;
  color:white;
  font-size:16px;
  margin-top:12px;
  cursor:pointer;
}
.result{
  margin-top:12px;
  padding:12px;
  border-radius:8px;
  background:#0f172a;
}
</style>
</head>

<body>

<div class="app">
<h2>Physics Motion Lab</h2>

<input id="vel" placeholder="Initial velocity (m/s)">
<input id="acc" placeholder="Acceleration (m/s^2)">
<input id="time" placeholder="Simulation time (seconds)">

<button id="run">Run Simulation</button>

<canvas id="sim" width="640" height="260"></canvas>
<canvas id="graph" width="640" height="260"></canvas>

<div id="out" class="result"></div>
</div>

<script>
"use strict";

(function(){

var velEl=document.getElementById("vel");
var accEl=document.getElementById("acc");
var timeEl=document.getElementById("time");
var btn=document.getElementById("run");
var simCanvas=document.getElementById("sim");
var simCtx=simCanvas.getContext("2d");
var graphCanvas=document.getElementById("graph");
var graphCtx=graphCanvas.getContext("2d");
var out=document.getElementById("out");

function num(v){
  var n=parseFloat(v);
  if(isNaN(n)||!isFinite(n)){return null;}
  return n;
}

function clear(ctx,canvas){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function run(){

  var v0=num(velEl.value);
  var a=num(accEl.value);
  var T=num(timeEl.value);

  if(v0===null||a===null||T===null||T<=0){
    out.innerHTML="Enter valid numbers.";
    return;
  }

  clear(simCtx,simCanvas);
  clear(graphCtx,graphCanvas);

  var steps=200;
  var dt=T/steps;

  var x=0;
  var t=0;

  graphCtx.beginPath();
  graphCtx.moveTo(0,260);

  for(var i=0;i<=steps;i++){

    /* physics formula: x = v0*t + 0.5*a*t^2 */
    x=v0*t+0.5*a*t*t;

    /* draw object */
    clear(simCtx,simCanvas);
    simCtx.beginPath();
    simCtx.arc(30+x*2,130,10,0,Math.PI*2);
    simCtx.fillStyle="#22c55e";
    simCtx.fill();

    /* graph */
    var gx=(i/steps)*640;
    var gy=260-(x*2);
    graphCtx.lineTo(gx,gy);

    t+=dt;
  }

  graphCtx.strokeStyle="#60a5fa";
  graphCtx.stroke();

  var final=v0*T+0.5*a*T*T;

  out.innerHTML=
    "Final distance: "+final.toFixed(2)+" meters";
}

btn.addEventListener("click",run);

})();
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE84() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Reaction Time Tester</title>

<style>
body{
    background-color:#0b1220;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    text-align:center;
    padding:40px;
}

#box{
    width:320px;
    height:200px;
    margin:30px auto;
    background-color:#374151;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:22px;
    cursor:pointer;
    user-select:none;
}

button{
    padding:10px 18px;
    font-size:16px;
    border:none;
    border-radius:8px;
    background-color:#2563eb;
    color:white;
    cursor:pointer;
}

button:hover{
    background-color:#1d4ed8;
}

#result{
    margin-top:20px;
    font-size:20px;
}
</style>
</head>

<body>

<h1>Human Reaction Time Tester</h1>
<p>Click start. Wait for green. Click as fast as possible.</p>

<button onclick="startTest()">Start Test</button>

<div id="box">Click Start</div>

<div id="result"></div>

<script>
var startTime = 0;
var waiting = false;
var ready = false;
var timeoutID = null;

function startTest(){

    var box = document.getElementById("box");
    var result = document.getElementById("result");

    box.style.backgroundColor = "#374151";
    box.textContent = "Wait for green...";
    result.textContent = "";

    waiting = true;
    ready = false;

    var randomDelay = Math.floor(Math.random()*4000) + 1500;

    timeoutID = setTimeout(function(){
        box.style.backgroundColor = "#16a34a";
        box.textContent = "CLICK!";
        startTime = Date.now();
        ready = true;
        waiting = false;
    }, randomDelay);
}

document.getElementById("box").onclick = function(){

    var result = document.getElementById("result");

    if(waiting === true){
        clearTimeout(timeoutID);
        this.textContent = "Too early!";
        this.style.backgroundColor = "#dc2626";
        result.textContent = "You clicked before the signal.";
        waiting = false;
        return;
    }

    if(ready === true){
        var reaction = Date.now() - startTime;
        this.textContent = "Done!";
        this.style.backgroundColor = "#374151";
        result.textContent = "Reaction Time: " + reaction + " ms";
        ready = false;
    }
};
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE85() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Projectile Simulator</title>

<style>
body{
    background:#0b1220;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    text-align:center;
    padding:20px;
}

.controls{
    margin-bottom:20px;
}

input{
    padding:6px;
    margin:5px;
    width:80px;
}

button{
    padding:8px 14px;
    border:none;
    border-radius:6px;
    background:#2563eb;
    color:white;
    cursor:pointer;
}

canvas{
    background:#020617;
    border-radius:10px;
    margin-top:20px;
}
</style>
</head>

<body>

<h2>Projectile Trajectory Simulator</h2>

<div class="controls">
    Angle (deg):
    <input id="angle" type="number" value="45">

    Speed (m/s):
    <input id="speed" type="number" value="20">

    Gravity (m/s²):
    <input id="gravity" type="number" value="9.8">

    <br>
    <button onclick="simulate()">Launch</button>
</div>

<canvas id="canvas" width="700" height="350"></canvas>

<script>
function simulate(){

    var angleDeg = parseFloat(document.getElementById("angle").value);
    var speed = parseFloat(document.getElementById("speed").value);
    var g = parseFloat(document.getElementById("gravity").value);

    if(isNaN(angleDeg) || isNaN(speed) || isNaN(g)){
        alert("Enter valid numbers");
        return;
    }

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    var angleRad = angleDeg * Math.PI / 180;

    var vx = speed * Math.cos(angleRad);
    var vy = speed * Math.sin(angleRad);

    var time = 0;
    var step = 0.05;

    var scale = 8;        // pixels per meter
    var ground = canvas.height - 30;

    ctx.beginPath();

    var firstPoint = true;

    while(true){

        var x = vx * time;
        var y = (vy * time) - (0.5 * g * time * time);

        if(y < 0){
            break;
        }

        var drawX = 40 + x * scale;
        var drawY = ground - y * scale;

        if(firstPoint){
            ctx.moveTo(drawX, drawY);
            firstPoint = false;
        }else{
            ctx.lineTo(drawX, drawY);
        }

        time = time + step;

        if(drawX > canvas.width){
            break;
        }
    }

    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 2;
    ctx.stroke();

    /* draw ground line */
    ctx.beginPath();
    ctx.moveTo(0,ground);
    ctx.lineTo(canvas.width,ground);
    ctx.strokeStyle = "#64748b";
    ctx.stroke();
}
</script>

</body>
</html>

  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE86() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Work Friction Analyzer</title>

<style>
:root{
    --bg:#0f172a;
    --card:#111827;
    --soft:#1f2937;
    --accent:#22c55e;
    --text:#e5e7eb;
}
*{
    box-sizing:border-box;
}
body{
    margin:0;
    font-family:system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    background:linear-gradient(140deg,#020617,var(--bg));
    color:var(--text);
    padding:24px;
}
.container{
    max-width:900px;
    margin:auto;
}
h1{
    text-align:center;
    margin-bottom:20px;
}
.card{
    background:var(--card);
    border-radius:14px;
    padding:18px;
    margin-bottom:18px;
    box-shadow:0 12px 30px rgba(0,0,0,0.4);
}
label{
    display:block;
    margin-top:10px;
    font-size:14px;
}
input,select,button{
    width:100%;
    padding:10px;
    margin-top:6px;
    border-radius:8px;
    border:none;
    font-size:14px;
}
input,select{
    background:var(--soft);
    color:white;
}
button{
    background:var(--accent);
    color:black;
    font-weight:600;
    cursor:pointer;
    margin-top:12px;
}
button:hover{
    filter:brightness(1.1);
}
.session{
    background:var(--soft);
    padding:10px;
    border-radius:8px;
    margin-top:8px;
}
.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:12px;
    margin-top:12px;
}
.stat{
    background:#020617;
    padding:14px;
    border-radius:10px;
    text-align:center;
}
.big{
    font-size:22px;
    font-weight:bold;
}
</style>
</head>

<body>

<div class="container">
<h1>Work Friction Analyzer</h1>

<div class="card">
<h3>Log Work Session</h3>

<label for="type">Work Type</label>
<select id="type">
<option value="Deep Work">Deep Work</option>
<option value="Meeting">Meeting</option>
<option value="Admin">Admin</option>
<option value="Communication">Communication</option>
</select>

<label for="minutes">Minutes Spent</label>
<input id="minutes" type="number" min="1" placeholder="e.g. 45">

<label for="energy">Energy After Task</label>
<select id="energy">
<option value="1">Drained 😫</option>
<option value="2">Tired 😐</option>
<option value="3">Okay 🙂</option>
<option value="4">Good 😀</option>
<option value="5">Energized ⚡</option>
</select>

<button id="addBtn">Add Session</button>

<div id="list"></div>
</div>

<div class="card">
<h3>Workday Insight</h3>

<div class="stats">
<div class="stat">Total Time<div id="time" class="big">0m</div></div>
<div class="stat">Friction Score<div id="friction" class="big">0</div></div>
<div class="stat">Burnout Risk<div id="risk" class="big">Low</div></div>
<div class="stat">Deep Work Ratio<div id="ratio" class="big">0%</div></div>
</div>

</div>
</div>

<script>
(function(){
"use strict";

const sessions=[];
const typeEl=document.getElementById("type");
const minEl=document.getElementById("minutes");
const energyEl=document.getElementById("energy");
const listEl=document.getElementById("list");

const timeEl=document.getElementById("time");
const frictionEl=document.getElementById("friction");
const riskEl=document.getElementById("risk");
const ratioEl=document.getElementById("ratio");

document.getElementById("addBtn").addEventListener("click",addSession);

function addSession(){
    const minutes=parseInt(minEl.value,10);
    const energy=parseInt(energyEl.value,10);
    const type=typeEl.value;

    if(!minutes || minutes<1) return;

    sessions.push({type,minutes,energy});
    minEl.value="";
    render();
}

function render(){
    listEl.innerHTML="";
    let total=0;
    let deep=0;
    let friction=0;

    sessions.forEach(s=>{
        total+=s.minutes;
        if(s.type==="Deep Work") deep+=s.minutes;

        const f=s.minutes*(6-s.energy);
        friction+=f;

        const div=document.createElement("div");
        div.className="session";
        div.textContent=s.type+" — "+s.minutes+"m (energy "+s.energy+")";
        listEl.appendChild(div);
    });

    const ratio= total===0 ? 0 : Math.round((deep/total)*100);
    const frictionScore=Math.round(friction/10);

    let risk="Low";
    if(frictionScore>80) risk="High";
    else if(frictionScore>40) risk="Medium";

    timeEl.textContent=total+"m";
    frictionEl.textContent=frictionScore;
    riskEl.textContent=risk;
    ratioEl.textContent=ratio+"%";
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
function copyCODE87() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cognitive Load Scheduler</title>

<style>
:root{
    --bg:#0b1220;
    --card:#111827;
    --soft:#1f2937;
    --accent:#6366f1;
    --text:#e5e7eb;
}
*{box-sizing:border-box}
body{
    margin:0;
    font-family:system-ui,Segoe UI,Roboto,sans-serif;
    background:linear-gradient(135deg,#020617,var(--bg));
    color:var(--text);
    padding:24px;
}
.container{
    max-width:900px;
    margin:auto;
}
h1{
    text-align:center;
    margin-bottom:20px;
}
.card{
    background:var(--card);
    padding:18px;
    border-radius:14px;
    margin-bottom:18px;
    box-shadow:0 15px 35px rgba(0,0,0,0.45);
}
label{
    display:block;
    margin-top:10px;
    font-size:14px;
}
input,select,button{
    width:100%;
    padding:10px;
    border-radius:8px;
    border:none;
    margin-top:6px;
    font-size:14px;
}
input,select{
    background:var(--soft);
    color:white;
}
button{
    background:var(--accent);
    color:white;
    font-weight:600;
    cursor:pointer;
    margin-top:12px;
}
button:hover{
    filter:brightness(1.1);
}
.task{
    background:var(--soft);
    padding:10px;
    border-radius:8px;
    margin-top:8px;
}
.stats{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
    gap:12px;
    margin-top:12px;
}
.stat{
    background:#020617;
    padding:14px;
    border-radius:10px;
    text-align:center;
}
.big{
    font-size:22px;
    font-weight:bold;
}
.warning{
    color:#f87171;
    font-weight:bold;
    margin-top:10px;
}
</style>
</head>

<body>

<div class="container">

<h1>Cognitive Load Scheduler</h1>

<div class="card">
<h3>Add Task</h3>

<label for="taskName">Task name</label>
<input id="taskName" type="text" placeholder="Write report">

<label for="taskMinutes">Minutes needed</label>
<input id="taskMinutes" type="number" min="1" placeholder="45">

<label for="taskLoad">Mental Load</label>
<select id="taskLoad">
<option value="3">Heavy (Deep thinking)</option>
<option value="2">Medium (Normal work)</option>
<option value="1">Light (Routine)</option>
</select>

<button id="addTaskBtn">Add Task</button>

<div id="taskList"></div>
</div>

<div class="card">
<h3>Brain Load Insight</h3>

<div class="stats">
<div class="stat">Total Time<div id="totalTime" class="big">0m</div></div>
<div class="stat">Fatigue Score<div id="fatigue" class="big">0</div></div>
<div class="stat">Burnout Risk<div id="risk" class="big">Low</div></div>
<div class="stat">Heavy Blocks<div id="heavyBlocks" class="big">0</div></div>
</div>

<div id="warn" class="warning"></div>

</div>

</div>

<script>
(function(){
"use strict";

const tasks=[];
const nameEl=document.getElementById("taskName");
const minEl=document.getElementById("taskMinutes");
const loadEl=document.getElementById("taskLoad");
const listEl=document.getElementById("taskList");

const timeEl=document.getElementById("totalTime");
const fatigueEl=document.getElementById("fatigue");
const riskEl=document.getElementById("risk");
const heavyEl=document.getElementById("heavyBlocks");
const warnEl=document.getElementById("warn");

document.getElementById("addTaskBtn").addEventListener("click",addTask);

function addTask(){
    const name=nameEl.value.trim();
    const minutes=parseInt(minEl.value,10);
    const load=parseInt(loadEl.value,10);

    if(!name || !minutes || minutes<1) return;

    tasks.push({name,minutes,load});
    nameEl.value="";
    minEl.value="";
    render();
}

function render(){
    listEl.innerHTML="";
    let total=0;
    let fatigue=0;
    let heavyBlocks=0;
    let previousHeavy=false;

    tasks.forEach(t=>{
        total+=t.minutes;
        fatigue+=t.minutes*t.load;

        if(t.load===3){
            if(previousHeavy) heavyBlocks++;
            previousHeavy=true;
        }else{
            previousHeavy=false;
        }

        const div=document.createElement("div");
        div.className="task";
        div.textContent=t.name+" — "+t.minutes+"m";
        listEl.appendChild(div);
    });

    const fatigueScore=Math.round(fatigue/20);

    let risk="Low";
    if(fatigueScore>80) risk="High";
    else if(fatigueScore>40) risk="Medium";

    timeEl.textContent=total+"m";
    fatigueEl.textContent=fatigueScore;
    riskEl.textContent=risk;
    heavyEl.textContent=heavyBlocks;

    warnEl.textContent=heavyBlocks>1
        ? "Warning: Too many heavy tasks stacked together."
        : "";
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
function copyCODE88() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SalaryScope – Workday Financial Analyzer</title>
<style>
:root{
  --bg:#0b1220;
  --card:#111827;
  --soft:#1f2937;
  --accent:#6366f1;
  --text:#e5e7eb;
}
*{box-sizing:border-box;}
body{
  margin:0;
  font-family:system-ui,Segoe UI,Roboto,sans-serif;
  background:linear-gradient(135deg,#020617,var(--bg));
  color:var(--text);
  padding:24px;
}
.container{max-width:900px;margin:auto;}
h1{text-align:center;margin-bottom:20px;}
.card{
  background:var(--card);
  padding:18px;
  border-radius:14px;
  margin-bottom:18px;
  box-shadow:0 15px 35px rgba(0,0,0,0.45);
}
label{display:block;margin-top:10px;font-size:14px;}
input,button{
  width:100%;
  padding:10px;
  border-radius:8px;
  border:none;
  margin-top:6px;
  font-size:14px;
}
input{background:var(--soft);color:white;}
button{
  background:var(--accent);
  color:white;
  font-weight:600;
  cursor:pointer;
  margin-top:12px;
}
button:hover{filter:brightness(1.1);}
.stats{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  gap:12px;
  margin-top:12px;
}
.stat{
  background:#020617;
  padding:14px;
  border-radius:10px;
  text-align:center;
}
.big{font-size:22px;font-weight:bold;}
.warning{
  margin-top:10px;
  color:#f87171;
  font-weight:bold;
}
</style>
</head>
<body>
<div class="container">
<h1>SalaryScope – Workday Financial Analyzer</h1>
<div class="card">
<h3>Enter Your Work Details</h3>
<label for="salary">Monthly Salary</label>
<input id="salary" type="number" placeholder="e.g. 50000">
<label for="hours">Work Hours per Day</label>
<input id="hours" type="number" placeholder="e.g. 8">
<label for="meetings">Meeting Hours per Day</label>
<input id="meetings" type="number" placeholder="e.g. 2">
<label for="overtime">Unpaid Overtime Hours</label>
<input id="overtime" type="number" placeholder="e.g. 1">
<button id="calcBtn">Analyze Workday</button>
</div>
<div class="card">
<h3>Results</h3>
<div class="stats">
<div class="stat">True Hourly Value<div id="hourly" class="big">0</div></div>
<div class="stat">Meeting Cost / Day<div id="meetingCost" class="big">0</div></div>
<div class="stat">Lost Overtime Value<div id="overtimeCost" class="big">0</div></div>
<div class="stat">Effective Hourly Pay<div id="effective" class="big">0</div></div>
</div>
<div id="warn" class="warning"></div>
</div>
</div>
<script>
(function(){
"use strict";
const salaryEl=document.getElementById("salary");
const hoursEl=document.getElementById("hours");
const meetingsEl=document.getElementById("meetings");
const overtimeEl=document.getElementById("overtime");
const hourlyEl=document.getElementById("hourly");
const meetingCostEl=document.getElementById("meetingCost");
const overtimeCostEl=document.getElementById("overtimeCost");
const effectiveEl=document.getElementById("effective");
const warnEl=document.getElementById("warn");

document.getElementById("calcBtn").addEventListener("click",calculate);

function calculate(){
  const salary=parseFloat(salaryEl.value);
  const hours=parseFloat(hoursEl.value);
  const meetings=parseFloat(meetingsEl.value)||0;
  const overtime=parseFloat(overtimeEl.value)||0;
  if(!salary||!hours) return;
  
  const workDays=22;
  const totalHours=hours*workDays;
  const hourly=salary/totalHours;
  const meetingCost=hourly*meetings;
  const overtimeCost=hourly*overtime;
  const effective=salary/(totalHours+(overtime*workDays));
  
  hourlyEl.textContent=hourly.toFixed(2);
  meetingCostEl.textContent=meetingCost.toFixed(2);
  overtimeCostEl.textContent=overtimeCost.toFixed(2);
  effectiveEl.textContent=effective.toFixed(2);
  
  warnEl.textContent=
    effective<hourly*0.75
    ? "⚠️ Warning: Unpaid work heavily reduces your real income."
    : "";
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
function copyCODE89() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TaskOptimizer – Focus & Time Analyzer</title>
<style>
:root {
  --bg: #0f172a;
  --card: #111827;
  --soft: #1f2937;
  --accent: #6366f1;
  --text: #e5e7eb;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: system-ui, Segoe UI, Roboto, sans-serif;
  background: linear-gradient(135deg, #020617, var(--bg));
  color: var(--text);
  padding: 24px;
}
.container {
  max-width: 900px;
  margin: auto;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.card {
  background: var(--card);
  padding: 18px;
  border-radius: 14px;
  margin-bottom: 18px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.45);
}
label {
  display: block;
  margin-top: 10px;
  font-size: 14px;
}
input, button {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-top: 6px;
  font-size: 14px;
}
input {
  background: var(--soft);
  color: white;
}
button {
  background: var(--accent);
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
}
button:hover {
  filter: brightness(1.1);
}
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin-top: 12px;
}
.stat {
  background: #020617;
  padding: 14px;
  border-radius: 10px;
  text-align: center;
}
.big {
  font-size: 22px;
  font-weight: bold;
}
.warning {
  margin-top: 10px;
  color: #f87171;
  font-weight: bold;
}
.task {
  background: var(--soft);
  padding: 10px;
  border-radius: 8px;
  margin-top: 8px;
}
</style>
</head>
<body>
<div class="container">
<h1>TaskOptimizer – Focus & Time Analyzer</h1>

<div class="card">
<h3>Add Work Session</h3>
<form id="workForm">
<label for="taskName">Task Name</label>
<input type="text" id="taskName" required placeholder="Enter task name">
<label for="taskMinutes">Minutes Spent</label>
<input type="number" id="taskMinutes" required min="1" placeholder="45">
<label for="taskInterruptions">Interruptions</label>
<input type="number" id="taskInterruptions" min="0" placeholder="0">
<button type="submit">Add Session</button>
</form>
<div id="taskList"></div>
</div>

<div class="card">
<h3>Daily Productivity Stats</h3>
<div class="stats">
<div class="stat">Total Time<div id="totalTime" class="big">0m</div></div>
<div class="stat">Lost Time<div id="lostTime" class="big">0m</div></div>
<div class="stat">Focus Efficiency<div id="focusEfficiency" class="big">0%</div></div>
</div>
<div id="warning" class="warning"></div>
</div>

</div>

<script>
"use strict";

var sessions = [];

var workForm = document.getElementById('workForm');
var taskNameInput = document.getElementById('taskName');
var taskMinutesInput = document.getElementById('taskMinutes');
var taskInterruptionsInput = document.getElementById('taskInterruptions');
var taskList = document.getElementById('taskList');
var totalTimeEl = document.getElementById('totalTime');
var lostTimeEl = document.getElementById('lostTime');
var focusEfficiencyEl = document.getElementById('focusEfficiency');
var warningEl = document.getElementById('warning');

function renderSessions() {
  taskList.innerHTML = "";
  var totalMinutes = 0;
  var lostMinutes = 0;
  var i;
  for (i = 0; i < sessions.length; i++) {
    var session = sessions[i];
    totalMinutes += session.minutes;
    lostMinutes += session.interruptions * 3;
    var div = document.createElement('div');
    div.className = 'task';
    div.textContent = session.name + " — " + session.minutes + "m, interruptions: " + session.interruptions;
    taskList.appendChild(div);
  }
  var efficiency = 0;
  if (totalMinutes > 0) {
    efficiency = Math.max(0, Math.round((totalMinutes - lostMinutes) / totalMinutes * 100));
  }
  totalTimeEl.textContent = totalMinutes + "m";
  lostTimeEl.textContent = lostMinutes + "m";
  focusEfficiencyEl.textContent = efficiency + "%";
  if (efficiency < 50) {
    warningEl.textContent = "⚠️ Low focus efficiency today!";
  } else {
    warningEl.textContent = "";
  }
}

workForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = taskNameInput.value.trim();
  var minutes = parseInt(taskMinutesInput.value, 10);
  var interruptions = parseInt(taskInterruptionsInput.value, 10);
  if (isNaN(interruptions)) {
    interruptions = 0;
  }
  if (name !== "" && minutes > 0) {
    var sessionObj = {name: name, minutes: minutes, interruptions: interruptions};
    sessions.push(sessionObj);
    taskNameInput.value = "";
    taskMinutesInput.value = "";
    taskInterruptionsInput.value = "";
    renderSessions();
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
function copyCODE90() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DailyHabitTracker</title>
<style>
:root {
  --bg: #f3f4f6;
  --card: #ffffff;
  --accent: #6366f1;
  --text: #111827;
  --success: #22c55e;
  --fail: #ef4444;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: system-ui, Segoe UI, Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  padding: 24px;
}
.container {
  max-width: 700px;
  margin: auto;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.card {
  background: var(--card);
  padding: 18px;
  border-radius: 14px;
  margin-bottom: 18px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}
label {
  display: block;
  margin-top: 10px;
  font-size: 14px;
}
input, button {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  margin-top: 6px;
  font-size: 14px;
}
input { background: #f9fafb; }
button {
  background: var(--accent);
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
}
button:hover { filter: brightness(1.1); }
.habit {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  margin-top: 6px;
  background: #f9fafb;
}
.success { color: var(--success); font-weight: bold; }
.fail { color: var(--fail); font-weight: bold; }
.stats { margin-top: 12px; }
</style>
</head>
<body>
<div class="container">
<h1>DailyHabitTracker</h1>

<div class="card">
<h3>Add a Habit</h3>
<form id="habitForm">
<label for="habitName">Habit / Task Name</label>
<input type="text" id="habitName" required placeholder="e.g. Read 30 min">
<button type="submit">Add Habit</button>
</form>
<div id="habitList"></div>
</div>

<div class="card">
<h3>Stats</h3>
<div class="stats">
<div>Total Habits: <span id="totalCount">0</span></div>
<div>Completed: <span id="completedCount">0</span></div>
<div>Success Rate: <span id="successRate">0%</span></div>
</div>
</div>
</div>

<script>
"use strict";
var habits = [];
var habitForm = document.getElementById('habitForm');
var habitNameInput = document.getElementById('habitName');
var habitList = document.getElementById('habitList');
var totalCountEl = document.getElementById('totalCount');
var completedCountEl = document.getElementById('completedCount');
var successRateEl = document.getElementById('successRate');

function renderHabits() {
  habitList.innerHTML = '';
  var completed = 0;
  var i;
  for (i = 0; i < habits.length; i++) {
    var h = habits[i];
    var div = document.createElement('div');
    div.className = 'habit';
    var nameSpan = document.createElement('span');
    nameSpan.textContent = h.name;
    var statusButton = document.createElement('button');
    if (h.done) {
      statusButton.textContent = 'Done';
      statusButton.className = 'success';
      completed++;
    } else {
      statusButton.textContent = 'Pending';
      statusButton.className = 'fail';
    }
    statusButton.addEventListener('click', (function(index){
      return function(){
        habits[index].done = !habits[index].done;
        renderHabits();
      };
    })(i));
    div.appendChild(nameSpan);
    div.appendChild(statusButton);
    habitList.appendChild(div);
  }
  totalCountEl.textContent = habits.length;
  completedCountEl.textContent = completed;
  var rate = habits.length === 0 ? 0 : Math.round((completed / habits.length) * 100);
  successRateEl.textContent = rate + '%';
}

habitForm.addEventListener('submit', function(event){
  event.preventDefault();
  var name = habitNameInput.value.trim();
  if (name !== '') {
    habits.push({name: name, done: false});
    habitNameInput.value = '';
    renderHabits();
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
function copyCODE91() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Symmetry Toy</title>
<style>
    body {
        margin: 0;
        background: #0f1220;
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
    }
    h1 {
        margin: 10px 0;
        font-weight: normal;
    }
    canvas {
        background: #111;
        border: 2px solid #333;
        display: block;
        margin: 0 auto;
        cursor: crosshair;
    }
    .controls {
        margin: 10px;
    }
    button {
        padding: 8px 14px;
        margin: 5px;
        border: none;
        background: #4b7cff;
        color: white;
        border-radius: 6px;
        cursor: pointer;
    }
    button:hover {
        background: #355ee0;
    }
</style>
</head>
<body>

<h1>Symmetry Toy</h1>

<canvas id="board" width="700" height="450"></canvas>

<div class="controls">
    <button onclick="clearBoard()">Clear</button>
    <button onclick="changeMode()">Change Symmetry</button>
</div>

<script>
var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");

var symmetry = 4;
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

function draw(x, y) {
    var dx = x - centerX;
    var dy = y - centerY;

    for (var i = 0; i < symmetry; i++) {
        var angle = (Math.PI * 2 / symmetry) * i;
        var rx = dx * Math.cos(angle) - dy * Math.sin(angle);
        var ry = dx * Math.sin(angle) + dy * Math.cos(angle);

        ctx.beginPath();
        ctx.arc(centerX + rx, centerY + ry, 4, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(" + (Date.now() % 360) + ",80%,60%)";
        ctx.fill();
    }
}

canvas.addEventListener("mousemove", function(e) {
    if (e.buttons === 1) {
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        draw(x, y);
    }
});

function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function changeMode() {
    symmetry = symmetry + 2;
    if (symmetry > 12) {
        symmetry = 2;
    }
    alert("Symmetry: " + symmetry);
}
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE92() {
  const code = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Chain Reaction Sandbox</title>

<style>
body{
    margin:0;
    background:#0b0f1a;
    color:white;
    font-family:Arial;
    text-align:center;
}
h2{margin:10px;}
canvas{
    background:#111;
    border:2px solid #333;
    display:block;
    margin:auto;
}
button{
    margin:10px;
    padding:8px 14px;
    border:none;
    background:#4b7cff;
    color:white;
    border-radius:6px;
    cursor:pointer;
}
button:hover{background:#2f5de0;}
</style>
</head>

<body>

<h2>Chain Reaction Sandbox</h2>
<canvas id="c" width="720" height="450"></canvas>
<button onclick="resetGame()">Reset</button>

<script>

var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var balls = [];
var maxBalls = 400;

function Ball(x,y,dx,dy,r){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
}

canvas.addEventListener("mousedown", function(e){

    if(balls.length > maxBalls){ return; }

    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    spawnBall(x,y);
});

function spawnBall(x,y){

    var dx = (Math.random()*4)-2;
    var dy = (Math.random()*4)-2;

    if(dx===0){dx=1;}
    if(dy===0){dy=-1;}

    balls.push(new Ball(x,y,dx,dy,8));
}

function update(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    var i;
    var j;

    for(i=0;i<balls.length;i++){

        var b = balls[i];

        b.x += b.dx;
        b.y += b.dy;

        if(b.x < b.r || b.x > canvas.width-b.r){ b.dx *= -1; }
        if(b.y < b.r || b.y > canvas.height-b.r){ b.dy *= -1; }

        for(j=i+1;j<balls.length;j++){

            var o = balls[j];

            var dx = b.x - o.x;
            var dy = b.y - o.y;
            var dist = Math.sqrt(dx*dx + dy*dy);

            if(dist < b.r + o.r){

                if(balls.length < maxBalls){
                    spawnBall(b.x,b.y);
                }

                b.dx *= -1;
                b.dy *= -1;
                o.dx *= -1;
                o.dy *= -1;
            }
        }

        ctx.beginPath();
        ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
        ctx.fillStyle = "hsl("+(i*15%360)+",70%,60%)";
        ctx.fill();
    }

    requestAnimationFrame(update);
}

function resetGame(){
    balls = [];
    ctx.clearRect(0,0,canvas.width,canvas.height);
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
function copyCODE93() {
  const code = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cube Dash</title>

<style>
body{
    margin:0;
    background:#0a0f1f;
    font-family:Arial;
    color:white;
    text-align:center;
}

h2{margin:12px 0;}

canvas{
    background:#0b1022;
    display:block;
    margin:auto;
    border-top:2px solid #1f2a55;
    border-bottom:2px solid #1f2a55;
}
</style>
</head>

<body>

<h2>Cube Dash</h2>
<div>Press SPACE or CLICK</div>

<canvas id="game" width="800" height="420"></canvas>

<script>

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

/* PLAYER */
var px = 120;
var py = 300;
var size = 30;
var dy = 0;
var gravity = 0.7;
var jumpPower = -12;
var grounded = true;
var rotation = 0;

/* GAME */
var obstacles = [];
var frame = 0;
var score = 0;
var gameOver = false;

/* INPUT */
document.onkeydown = function(e){
    if(e.keyCode === 32){ jump(); }
};
canvas.onclick = jump;

function jump(){
    if(gameOver){
        restart();
        return;
    }
    if(grounded){
        dy = jumpPower;
        grounded = false;
    }
}

/* OBSTACLE */
function spawn(){
    var h = 30 + Math.random()*50;
    obstacles.push({
        x:canvas.width,
        y:330-h,
        w:22,
        h:h
    });
}

/* LOOP */
function loop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    /* FLOOR */
    ctx.fillStyle="#1a2244";
    ctx.fillRect(0,330,canvas.width,90);

    /* PLAYER PHYSICS */
    dy += gravity;
    py += dy;

    if(py >= 300){
        py = 300;
        dy = 0;
        grounded = true;
        rotation = 0;
    } else {
        rotation += 0.15;
    }

    /* SPAWN */
    frame++;
    if(frame % 95 === 0){
        spawn();
    }

    /* MOVE OBSTACLES */
    var i;
    for(i=0;i<obstacles.length;i++){
        obstacles[i].x -= 6;
    }

    /* REMOVE */
    if(obstacles.length>0 && obstacles[0].x < -40){
        obstacles.shift();
        score++;
    }

    /* COLLISION */
    for(i=0;i<obstacles.length;i++){
        var o = obstacles[i];
        if(px < o.x+o.w &&
           px+size > o.x &&
           py < o.y+o.h &&
           py+size > o.y){
            gameOver = true;
        }
    }

    /* DRAW PLAYER (ROTATING CUBE) */
    ctx.save();
    ctx.translate(px+size/2, py+size/2);
    ctx.rotate(rotation);
    ctx.fillStyle="#6cf";
    ctx.fillRect(-size/2,-size/2,size,size);
    ctx.restore();

    /* DRAW OBSTACLES */
    ctx.fillStyle="#f54";
    for(i=0;i<obstacles.length;i++){
        ctx.fillRect(obstacles[i].x,obstacles[i].y,obstacles[i].w,obstacles[i].h);
    }

    /* SCORE */
    ctx.fillStyle="white";
    ctx.font="16px Arial";
    ctx.fillText("Score: "+score,20,30);

    /* GAME OVER SCREEN */
    if(gameOver){
        ctx.fillStyle="rgba(0,0,0,0.6)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle="white";
        ctx.font="32px Arial";
        ctx.fillText("Game Over",320,180);

        ctx.font="18px Arial";
        ctx.fillText("Press SPACE or CLICK to restart",240,230);
    }

    requestAnimationFrame(loop);
}

/* RESTART */
function restart(){
    obstacles = [];
    frame = 0;
    score = 0;
    dy = 0;
    py = 300;
    grounded = true;
    gameOver = false;
}

/* START */
loop();

</script>
</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE94() {
  const code = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cube Dash Pro</title>

<style>
body{
    margin:0;
    background:#0a0f1f;
    color:white;
    font-family:Arial;
    text-align:center;
}
h2{margin:10px;}
canvas{
    display:block;
    margin:auto;
    background:#0b1022;
}
</style>
</head>

<body>

<h2>Cube Dash PRO</h2>
<div>SPACE / CLICK to jump</div>
<canvas id="game" width="900" height="420"></canvas>

<script>

var canvas=document.getElementById("game");
var ctx=canvas.getContext("2d");

/* PLAYER */
var px=140;
var py=300;
var size=32;
var dy=0;
var gravity=0.75;
var jumpPower=-13;
var grounded=true;
var rot=0;

/* GAME */
var spikes=[];
var particles=[];
var frame=0;
var score=0;
var speed=7;
var gameOver=false;

/* INPUT */
document.onkeydown=function(e){
    if(e.keyCode===32){jump();}
};
canvas.onclick=jump;

function jump(){
    if(gameOver){restart();return;}
    if(grounded){
        dy=jumpPower;
        grounded=false;
        spawnParticles();
    }
}

/* PARTICLES */
function spawnParticles(){
    var i;
    for(i=0;i<8;i++){
        particles.push({
            x:px,
            y:py+size,
            dx:(Math.random()*4)-2,
            dy:-Math.random()*3,
            life:30
        });
    }
}

/* SPIKES */
function spawnSpike(){
    spikes.push({
        x:canvas.width,
        y:330,
        w:28,
        h:30
    });
}

/* LOOP */
function loop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    /* MOVING FLOOR GRID */
    ctx.fillStyle="#1a2244";
    ctx.fillRect(0,330,canvas.width,90);

    ctx.strokeStyle="#2b3570";
    var g;
    for(g=-frame%40;g<canvas.width;g+=40){
        ctx.beginPath();
        ctx.moveTo(g,330);
        ctx.lineTo(g+40,420);
        ctx.stroke();
    }

    /* PLAYER PHYSICS */
    dy+=gravity;
    py+=dy;

    if(py>=300){
        py=300;
        dy=0;
        grounded=true;
        rot=0;
    }else{
        rot+=0.17;
    }

    /* SPAWN SPIKES */
    frame++;
    if(frame%85===0){spawnSpike();}

    /* MOVE SPIKES */
    var i;
    for(i=0;i<spikes.length;i++){
        spikes[i].x-=speed;
    }

    /* REMOVE SPIKES */
    if(spikes.length>0 && spikes[0].x<-40){
        spikes.shift();
        score++;
        speed+=0.1;
    }

    /* COLLISION */
    for(i=0;i<spikes.length;i++){
        var s=spikes[i];
        if(px+size>s.x && px<s.x+s.w && py+size>330-s.h){
            gameOver=true;
        }
    }

    /* DRAW SPIKES */
    ctx.fillStyle="#ff5577";
    for(i=0;i<spikes.length;i++){
        var sp=spikes[i];
        ctx.beginPath();
        ctx.moveTo(sp.x,330);
        ctx.lineTo(sp.x+sp.w/2,330-sp.h);
        ctx.lineTo(sp.x+sp.w,330);
        ctx.fill();
    }

    /* DRAW PLAYER */
    ctx.save();
    ctx.translate(px+size/2,py+size/2);
    ctx.rotate(rot);
    ctx.fillStyle="#6cf";
    ctx.fillRect(-size/2,-size/2,size,size);
    ctx.restore();

    /* PARTICLES */
    for(i=0;i<particles.length;i++){
        var p=particles[i];
        p.x+=p.dx;
        p.y+=p.dy;
        p.dy+=0.2;
        p.life--;

        ctx.fillStyle="rgba(120,200,255,"+(p.life/30)+")";
        ctx.fillRect(p.x,p.y,4,4);
    }

    /* CLEAN PARTICLES */
    particles=particles.filter(function(p){return p.life>0;});

    /* SCORE */
    ctx.fillStyle="white";
    ctx.font="18px Arial";
    ctx.fillText("Score: "+score,20,30);

    /* GAME OVER */
    if(gameOver){
        ctx.fillStyle="rgba(0,0,0,0.6)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle="white";
        ctx.font="40px Arial";
        ctx.fillText("GAME OVER",340,190);

        ctx.font="20px Arial";
        ctx.fillText("Click or press SPACE to restart",300,240);
    }

    requestAnimationFrame(loop);
}

/* RESTART */
function restart(){
    spikes=[];
    particles=[];
    frame=0;
    score=0;
    speed=7;
    dy=0;
    py=300;
    grounded=true;
    gameOver=false;
}

loop();

</script>
</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}function copyCODE95() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LightForge</title>

<style>
body{
    margin:0;
    overflow:hidden;
    background:#0b1020;
    font-family:Arial, sans-serif;
}
#info{
    position:fixed;
    top:10px;
    left:10px;
    color:white;
    background:rgba(0,0,0,0.4);
    padding:10px 14px;
    border-radius:10px;
    backdrop-filter:blur(6px);
    font-size:14px;
}
</style>
</head>
<body>

<canvas id="c"></canvas>
<div id="info">
Move mouse = light<br>
Click = add wall<br>
Right click = remove nearest wall
</div>

<script>
var canvas=document.getElementById("c");
var ctx=canvas.getContext("2d");

function resize(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}
resize();
window.onresize=resize;

var light={x:300,y:300};

var walls=[
    {x1:200,y1:150,x2:600,y2:200},
    {x1:400,y1:450,x2:750,y2:350}
];

canvas.onmousemove=function(e){
    light.x=e.clientX;
    light.y=e.clientY;
};

canvas.oncontextmenu=function(e){
    e.preventDefault();
    if(walls.length===0){return;}
    var closest=0;
    var best=999999;
    for(var i=0;i<walls.length;i++){
        var mx=(walls[i].x1+walls[i].x2)/2;
        var my=(walls[i].y1+walls[i].y2)/2;
        var d=Math.hypot(mx-e.clientX,my-e.clientY);
        if(d<best){best=d;closest=i;}
    }
    walls.splice(closest,1);
};

canvas.onclick=function(e){
    var len=80+Math.random()*120;
    var angle=Math.random()*Math.PI*2;
    var x1=e.clientX;
    var y1=e.clientY;
    var x2=x1+Math.cos(angle)*len;
    var y2=y1+Math.sin(angle)*len;
    walls.push({x1:x1,y1:y1,x2:x2,y2:y2});
};

function intersect(ray,seg){
    var x1=ray.x1,y1=ray.y1,x2=ray.x2,y2=ray.y2;
    var x3=seg.x1,y3=seg.y1,x4=seg.x2,y4=seg.y2;

    var den=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
    if(den===0){return null;}

    var t=((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den;
    var u=-((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3))/den;

    if(t>0 && u>0 && u<1){
        return{
            x:x1+t*(x2-x1),
            y:y1+t*(y2-y1),
            dist:t
        };
    }
    return null;
}

function cast(){
    var rays=[];
    for(var a=0;a<360;a+=0.5){
        var ang=a*Math.PI/180;
        var dx=Math.cos(ang);
        var dy=Math.sin(ang);

        var ray={
            x1:light.x,
            y1:light.y,
            x2:light.x+dx*2000,
            y2:light.y+dy*2000
        };

        var closest=null;

        for(var i=0;i<walls.length;i++){
            var hit=intersect(ray,walls[i]);
            if(hit){
                if(!closest || hit.dist<closest.dist){
                    closest=hit;
                }
            }
        }

        if(closest){
            rays.push(closest);
        }else{
            rays.push({x:ray.x2,y:ray.y2});
        }
    }
    return rays;
}

function draw(){
    ctx.fillStyle="#0b1020";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    var rays=cast();

    ctx.beginPath();
    ctx.moveTo(rays[0].x,rays[0].y);
    for(var i=1;i<rays.length;i++){
        ctx.lineTo(rays[i].x,rays[i].y);
    }
    ctx.closePath();

    var g=ctx.createRadialGradient(
        light.x,light.y,0,
        light.x,light.y,600
    );
    g.addColorStop(0,"rgba(255,255,200,0.9)");
    g.addColorStop(1,"rgba(255,255,200,0)");

    ctx.fillStyle=g;
    ctx.fill();

    ctx.strokeStyle="#9aa6ff";
    ctx.lineWidth=3;
    for(var i=0;i<walls.length;i++){
        ctx.beginPath();
        ctx.moveTo(walls[i].x1,walls[i].y1);
        ctx.lineTo(walls[i].x2,walls[i].y2);
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(light.x,light.y,6,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();

    requestAnimationFrame(draw);
}
draw();
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE96() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Classic Data Analyzer</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin:0; padding:0;
    display: flex; flex-direction: column; align-items: center;
  }
  h1 {
    margin-top: 20px;
  }
  .container {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  label, input, button {
    display: block;
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
  }
  input {
    padding: 8px;
  }
  button {
    padding: 10px;
    margin-top: 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .stats, .chart {
    margin-top: 20px;
    background-color: #eee;
    padding: 10px;
    border-radius: 5px;
  }
  .bar {
    background-color: #007bff;
    height: 20px;
    margin: 5px 0;
  }
</style>
</head>
<body>

<h1>Classic Data Analyzer</h1>

<div class="container">
  <label for="dataInput">Enter numbers (comma separated):</label>
  <input type="text" id="dataInput" placeholder="e.g. 10,20,30">

  <button id="analyzeBtn">Analyze</button>

  <div class="stats" id="stats">Statistics will appear here.</div>
  <div class="chart" id="chart">Bar chart will appear here.</div>
</div>

<script type="text/javascript">
  window.addEventListener('DOMContentLoaded', function() {

    var dataInput = document.getElementById('dataInput');
    var analyzeBtn = document.getElementById('analyzeBtn');
    var statsDiv = document.getElementById('stats');
    var chartDiv = document.getElementById('chart');

    function parseInput(input) {
      var parts = input.split(',');
      var numbers = [];
      for (var i=0; i<parts.length; i=i+1) {
        var n = parseFloat(parts[i]);
        if (isNaN(n)) {
          throw "Invalid input: only numbers allowed";
        }
        numbers.push(n);
      }
      if (numbers.length === 0) {
        throw "No numbers entered";
      }
      return numbers;
    }

    function calculateStats(numbers) {
      var sum = 0;
      for (var i=0; i<numbers.length; i=i+1) {
        sum = sum + numbers[i];
      }
      var mean = sum / numbers.length;

      // median
      var sorted = numbers.slice();
      for (var i=0; i<sorted.length; i=i+1) {
        for (var j=i+1; j<sorted.length; j=j+1) {
          if (sorted[i] > sorted[j]) {
            var temp = sorted[i];
            sorted[i] = sorted[j];
            sorted[j] = temp;
          }
        }
      }
      var median;
      var mid = Math.floor(sorted.length/2);
      if (sorted.length % 2 === 0) {
        median = (sorted[mid-1] + sorted[mid]) / 2;
      } else {
        median = sorted[mid];
      }

      // mode
      var freq = {};
      var maxFreq = 0;
      var mode = [];
      for (var i=0; i<numbers.length; i=i+1) {
        var val = numbers[i];
        if (freq[val] === undefined) {
          freq[val] = 1;
        } else {
          freq[val] = freq[val] + 1;
        }
        if (freq[val] > maxFreq) {
          maxFreq = freq[val];
        }
      }
      for (var key in freq) {
        if (freq[key] === maxFreq) {
          mode.push(key);
        }
      }

      return {sum: sum, mean: mean, median: median, mode: mode};
    }

    function updateChart(numbers) {
      chartDiv.innerHTML = "";
      var max = numbers[0];
      for (var i=1; i<numbers.length; i=i+1) {
        if (numbers[i] > max) max = numbers[i];
      }
      for (var i=0; i<numbers.length; i=i+1) {
        var bar = document.createElement('div');
        bar.className = "bar";
        var widthPercent = (numbers[i]/max)*100;
        bar.style.width = widthPercent + "%";
        bar.textContent = numbers[i];
        chartDiv.appendChild(bar);
      }
    }

    function analyze() {
      try {
        var numbers = parseInput(dataInput.value);
        var stats = calculateStats(numbers);
        statsDiv.innerHTML = 
          "Sum: " + stats.sum + "<br>" +
          "Mean: " + stats.mean.toFixed(2) + "<br>" +
          "Median: " + stats.median + "<br>" +
          "Mode: " + stats.mode.join(", ");
        updateChart(numbers);
      } catch (err) {
        alert(err);
      }
    }

    analyzeBtn.addEventListener('click', analyze);

  });
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE97() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pro Data Analyzer</title>
<style>
  body {
    font-family: 'Segoe UI', sans-serif;
    margin:0; padding:0;
    background: linear-gradient(135deg, #f6d365, #fda085);
    display: flex; flex-direction: column; align-items: center;
  }
  h1 { margin-top:20px; color:#333; }
  .container {
    background: #fff;
    border-radius: 15px;
    padding: 25px;
    max-width: 800px;
    width: 95%;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    margin-bottom: 40px;
  }
  label { display:block; margin-top:10px; font-weight:600; }
  input, select, button { width:100%; padding:10px; margin-top:5px; border-radius:8px; border:1px solid #ccc; font-size:16px; }
  button { background-color:#007bff; color:white; border:none; cursor:pointer; transition:0.3s; }
  button:hover { background-color:#0056b3; }
  .stats, .chart { margin-top:20px; background:#f1f1f1; padding:15px; border-radius:10px; }
  .chart-bar { height:25px; border-radius:5px; margin:5px 0; text-align:right; padding-right:5px; color:white; font-weight:bold; transition: all 0.5s ease; }
</style>
</head>
<body>

<h1>Pro Data Analyzer</h1>
<div class="container">
  <label for="dataset1">Dataset 1 (comma-separated numbers):</label>
  <input type="text" id="dataset1" placeholder="e.g. 10,20,30">

  <label for="dataset2">Dataset 2 (optional, comma-separated):</label>
  <input type="text" id="dataset2" placeholder="e.g. 15,25,35">

  <button id="analyzeBtn">Analyze & Compare</button>

  <div class="stats" id="stats">Statistics will appear here.</div>
  <div class="chart" id="chart">Animated bars will appear here.</div>
</div>

<script type="text/javascript">
window.addEventListener('DOMContentLoaded', function() {
  var dataset1Input = document.getElementById('dataset1');
  var dataset2Input = document.getElementById('dataset2');
  var analyzeBtn = document.getElementById('analyzeBtn');
  var statsDiv = document.getElementById('stats');
  var chartDiv = document.getElementById('chart');

  function parseDataset(input) {
    var arr = input.split(',');
    var numbers = [];
    for (var i=0; i<arr.length; i++) {
      var n = parseFloat(arr[i]);
      if (isNaN(n)) throw "Invalid input. Only numbers allowed.";
      numbers.push(n);
    }
    if (numbers.length === 0) throw "No numbers entered.";
    return numbers;
  }

  function calculateStats(numbers) {
    var sum = 0;
    for (var i=0; i<numbers.length; i++) sum += numbers[i];
    var mean = sum / numbers.length;
    var sorted = numbers.slice();
    for (var i=0; i<sorted.length; i++) {
      for (var j=i+1; j<sorted.length; j++) {
        if (sorted[i] > sorted[j]) {
          var temp = sorted[i];
          sorted[i] = sorted[j];
          sorted[j] = temp;
        }
      }
    }
    var mid = Math.floor(sorted.length/2);
    var median = (sorted.length%2===0) ? (sorted[mid-1]+sorted[mid])/2 : sorted[mid];
    var freq = {}, maxFreq=0, mode=[];
    for (var i=0; i<numbers.length; i++) {
      var val = numbers[i];
      freq[val] = (freq[val] || 0) + 1;
      if (freq[val] > maxFreq) maxFreq=freq[val];
    }
    for (var key in freq) if (freq[key]===maxFreq) mode.push(key);
    return {sum:sum, mean:mean, median:median, mode:mode};
  }

  function updateChart(data1, data2) {
    chartDiv.innerHTML = "";
    var maxVal = Math.max.apply(null, data1.concat(data2 || []));
    function createBar(value, color) {
      var bar = document.createElement('div');
      bar.className = 'chart-bar';
      bar.style.width = ((value/maxVal)*100) + "%";
      bar.style.backgroundColor = color;
      bar.textContent = value;
      chartDiv.appendChild(bar);
    }
    for (var i=0; i<data1.length; i++) createBar(data1[i], '#007bff');
    if (data2) {
      for (var i=0; i<data2.length; i++) createBar(data2[i], '#28a745');
    }
  }

  analyzeBtn.addEventListener('click', function() {
    try {
      var ds1 = parseDataset(dataset1Input.value);
      var ds2 = dataset2Input.value.trim() ? parseDataset(dataset2Input.value) : null;

      var stats1 = calculateStats(ds1);
      var stats2 = ds2 ? calculateStats(ds2) : null;

      var statsHtml = "<strong>Dataset 1:</strong><br>";
      statsHtml += "Sum: "+stats1.sum+"<br>Mean: "+stats1.mean.toFixed(2)+"<br>Median: "+stats1.median+"<br>Mode: "+stats1.mode.join(", ")+"<br>";
      if (stats2) {
        statsHtml += "<br><strong>Dataset 2:</strong><br>";
        statsHtml += "Sum: "+stats2.sum+"<br>Mean: "+stats2.mean.toFixed(2)+"<br>Median: "+stats2.median+"<br>Mode: "+stats2.mode.join(", ");
      }

      statsDiv.innerHTML = statsHtml;
      updateChart(ds1, ds2);
    } catch (err) {
      alert(err);
    }
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
function copyCODE98() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wave Interference Simulator</title>
<style>
  body {
    margin:0; padding:0;
    font-family:'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #89f7fe, #66a6ff);
    display:flex; flex-direction:column; align-items:center;
  }
  h1 { margin-top:20px; color:#fff; text-align:center; text-shadow:1px 1px 2px #000; }
  .container {
    background:#fff; border-radius:15px; padding:20px;
    max-width:900px; width:95%; box-shadow:0 10px 25px rgba(0,0,0,0.2); margin-bottom:30px;
  }
  label { display:block; margin-top:10px; font-weight:600; }
  input[type=range] { width:100%; }
  canvas { display:block; width:100%; height:400px; background:#222; border-radius:10px; margin-top:20px; }
  .slider-container { margin-top:10px; }
  .slider-label { display:flex; justify-content:space-between; font-weight:500; }
</style>
</head>
<body>

<h1>Wave Interference Simulator</h1>

<div class="container">
  <div class="slider-container">
    <div class="slider-label"><span>Amplitude 1</span><span id="amp1Val">50</span></div>
    <input type="range" id="amp1" min="10" max="100" value="50">
  </div>
  <div class="slider-container">
    <div class="slider-label"><span>Frequency 1</span><span id="freq1Val">0.02</span></div>
    <input type="range" id="freq1" min="0.01" max="0.1" step="0.001" value="0.02">
  </div>
  <div class="slider-container">
    <div class="slider-label"><span>Phase 1</span><span id="phase1Val">0</span></div>
    <input type="range" id="phase1" min="0" max="6.28" step="0.01" value="0">
  </div>

  <div class="slider-container">
    <div class="slider-label"><span>Amplitude 2</span><span id="amp2Val">50</span></div>
    <input type="range" id="amp2" min="10" max="100" value="50">
  </div>
  <div class="slider-container">
    <div class="slider-label"><span>Frequency 2</span><span id="freq2Val">0.02</span></div>
    <input type="range" id="freq2" min="0.01" max="0.1" step="0.001" value="0.02">
  </div>
  <div class="slider-container">
    <div class="slider-label"><span>Phase 2</span><span id="phase2Val">0</span></div>
    <input type="range" id="phase2" min="0" max="6.28" step="0.01" value="0">
  </div>

  <canvas id="waveCanvas"></canvas>
</div>

<script type="text/javascript">
window.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('waveCanvas');
  var ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  var amp1Slider = document.getElementById('amp1');
  var freq1Slider = document.getElementById('freq1');
  var phase1Slider = document.getElementById('phase1');
  var amp2Slider = document.getElementById('amp2');
  var freq2Slider = document.getElementById('freq2');
  var phase2Slider = document.getElementById('phase2');

  var amp1Val = document.getElementById('amp1Val');
  var freq1Val = document.getElementById('freq1Val');
  var phase1Val = document.getElementById('phase1Val');
  var amp2Val = document.getElementById('amp2Val');
  var freq2Val = document.getElementById('freq2Val');
  var phase2Val = document.getElementById('phase2Val');

  var t = 0;

  function drawWave() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    for (var x=0; x<canvas.width; x=x+1) {
      var y1 = parseFloat(amp1Slider.value) * Math.sin(freq1Slider.value * x + parseFloat(phase1Slider.value) + t);
      var y2 = parseFloat(amp2Slider.value) * Math.sin(freq2Slider.value * x + parseFloat(phase2Slider.value) + t);
      var y = canvas.height/2 + y1 + y2;
      if (x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 2;
    ctx.stroke();
    t += 0.05;
    requestAnimationFrame(drawWave);
  }

  drawWave();

  // Update slider labels live
  function updateLabels() {
    amp1Val.textContent = amp1Slider.value;
    freq1Val.textContent = freq1Slider.value;
    phase1Val.textContent = phase1Slider.value;
    amp2Val.textContent = amp2Slider.value;
    freq2Val.textContent = freq2Slider.value;
    phase2Val.textContent = phase2Slider.value;
  }

  amp1Slider.addEventListener('input', updateLabels);
  freq1Slider.addEventListener('input', updateLabels);
  phase1Slider.addEventListener('input', updateLabels);
  amp2Slider.addEventListener('input', updateLabels);
  freq2Slider.addEventListener('input', updateLabels);
  phase2Slider.addEventListener('input', updateLabels);
});
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE99() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Multi-Wave Interference Simulator</title>
<style>
  body {
    margin:0; padding:0;
    font-family:'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #89f7fe, #66a6ff);
    display:flex; flex-direction:column; align-items:center;
  }
  h1 { margin-top:20px; color:#fff; text-align:center; text-shadow:1px 1px 2px #000; }
  .container {
    background:#fff; border-radius:15px; padding:20px;
    max-width:900px; width:95%; box-shadow:0 10px 25px rgba(0,0,0,0.2); margin-bottom:30px;
  }
  canvas { display:block; width:100%; height:400px; background:#222; border-radius:10px; margin-top:20px; }
  .wave-controls { margin-top:15px; border:1px solid #ccc; padding:10px; border-radius:10px; }
  .wave-controls h3 { margin:5px 0; }
  label { display:block; margin-top:5px; font-weight:500; }
  input[type=range] { width:100%; }
</style>
</head>
<body>

<h1>Multi-Wave Interference Simulator</h1>

<div class="container" id="container">
  <button id="addWaveBtn">Add Wave</button>
  <div id="waveSliders"></div>
  <canvas id="waveCanvas"></canvas>
</div>

<script type="text/javascript">
window.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('waveCanvas');
  var ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  var waveContainer = document.getElementById('waveSliders');
  var addWaveBtn = document.getElementById('addWaveBtn');

  var waves = [];
  var t = 0;

  function createWaveControls(index) {
    var div = document.createElement('div');
    div.className = 'wave-controls';
    div.innerHTML = "<h3>Wave "+(index+1)+"</h3>";

    var ampLabel = document.createElement('label');
    ampLabel.textContent = 'Amplitude:';
    var ampSlider = document.createElement('input');
    ampSlider.type = 'range';
    ampSlider.min = 10; ampSlider.max = 100; ampSlider.value = 50;
    div.appendChild(ampLabel); div.appendChild(ampSlider);

    var freqLabel = document.createElement('label');
    freqLabel.textContent = 'Frequency:';
    var freqSlider = document.createElement('input');
    freqSlider.type = 'range'; freqSlider.min=0.01; freqSlider.max=0.1; freqSlider.step=0.001; freqSlider.value=0.02;
    div.appendChild(freqLabel); div.appendChild(freqSlider);

    var phaseLabel = document.createElement('label');
    phaseLabel.textContent = 'Phase:';
    var phaseSlider = document.createElement('input');
    phaseSlider.type='range'; phaseSlider.min=0; phaseSlider.max=6.28; phaseSlider.step=0.01; phaseSlider.value=0;
    div.appendChild(phaseLabel); div.appendChild(phaseSlider);

    var colorLabel = document.createElement('label');
    colorLabel.textContent = 'Color:';
    var colorInput = document.createElement('input');
    colorInput.type='color'; colorInput.value="#"+((1<<24)*Math.random()|0).toString(16);
    div.appendChild(colorLabel); div.appendChild(colorInput);

    waveContainer.appendChild(div);

    waves.push({amp:ampSlider, freq:freqSlider, phase:phaseSlider, color:colorInput});
  }

  addWaveBtn.addEventListener('click', function() {
    createWaveControls(waves.length);
  });

  function drawWaves() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    var envelope = [];
    for (var x=0; x<canvas.width; x=x+1) {
      var ySum = 0;
      for (var i=0; i<waves.length; i++) {
        var w = waves[i];
        var y = parseFloat(w.amp.value) * Math.sin(parseFloat(w.freq.value)*x + parseFloat(w.phase.value) + t);
        ySum += y;
      }
      envelope[x] = canvas.height/2 + ySum;
      if (x===0) ctx.moveTo(x,envelope[x]); else ctx.lineTo(x,envelope[x]);
    }
    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // draw individual waves
    for (var i=0; i<waves.length; i++) {
      ctx.beginPath();
      for (var x=0; x<canvas.width; x=x+1) {
        var w = waves[i];
        var y = parseFloat(w.amp.value) * Math.sin(parseFloat(w.freq.value)*x + parseFloat(w.phase.value) + t);
        var yPos = canvas.height/2 + y;
        if (x===0) ctx.moveTo(x,yPos); else ctx.lineTo(x,yPos);
      }
      ctx.strokeStyle = waves[i].color.value;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    t += 0.05;
    requestAnimationFrame(drawWaves);
  }

  drawWaves();

  // Initialize with 2 waves
  createWaveControls(0);
  createWaveControls(1);
});
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE100() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ultimate Multi-Wave Interference Simulator</title>
<style>
  body {
    margin:0; padding:0;
    font-family:'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #89f7fe, #66a6ff);
    display:flex; flex-direction:column; align-items:center;
  }
  h1 { margin-top:20px; color:#fff; text-align:center; text-shadow:1px 1px 2px #000; }
  .container {
    background:#fff; border-radius:15px; padding:20px;
    max-width:900px; width:95%; box-shadow:0 10px 25px rgba(0,0,0,0.2); margin-bottom:30px;
  }
  canvas { display:block; width:100%; height:400px; background:#222; border-radius:10px; margin-top:20px; }
  .wave-controls { margin-top:15px; border:1px solid #ccc; padding:10px; border-radius:10px; }
  .wave-controls h3 { margin:5px 0; }
  label { display:block; margin-top:5px; font-weight:500; }
  input[type=range], input[type=color] { width:100%; margin-top:3px; }
</style>
</head>
<body>

<h1>Ultimate Multi-Wave Interference Simulator</h1>

<div class="container" id="container">
  <button id="addWaveBtn">Add Wave</button>
  <div id="waveSliders"></div>
  <canvas id="waveCanvas"></canvas>
</div>

<script type="text/javascript">
window.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('waveCanvas');
  var ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  var waveContainer = document.getElementById('waveSliders');
  var addWaveBtn = document.getElementById('addWaveBtn');
  var waves = [];
  var t = 0;

  function createWaveControls(index) {
    var div = document.createElement('div');
    div.className = 'wave-controls';
    div.innerHTML = "<h3>Wave "+(index+1)+"</h3>";

    var ampLabel = document.createElement('label');
    ampLabel.textContent = 'Amplitude:';
    var ampSlider = document.createElement('input');
    ampSlider.type='range'; ampSlider.min=10; ampSlider.max=100; ampSlider.value=50;
    div.appendChild(ampLabel); div.appendChild(ampSlider);

    var freqLabel = document.createElement('label');
    freqLabel.textContent='Frequency:';
    var freqSlider = document.createElement('input');
    freqSlider.type='range'; freqSlider.min=0.01; freqSlider.max=0.1; freqSlider.step=0.001; freqSlider.value=0.02;
    div.appendChild(freqLabel); div.appendChild(freqSlider);

    var phaseLabel = document.createElement('label');
    phaseLabel.textContent='Phase:';
    var phaseSlider = document.createElement('input');
    phaseSlider.type='range'; phaseSlider.min=0; phaseSlider.max=6.28; phaseSlider.step=0.01; phaseSlider.value=0;
    div.appendChild(phaseLabel); div.appendChild(phaseSlider);

    var colorLabel = document.createElement('label');
    colorLabel.textContent='Color:';
    var colorInput = document.createElement('input');
    colorInput.type='color'; colorInput.value="#"+((1<<24)*Math.random()|0).toString(16);
    div.appendChild(colorLabel); div.appendChild(colorInput);

    waveContainer.appendChild(div);
    waves.push({amp:ampSlider, freq:freqSlider, phase:phaseSlider, color:colorInput});
  }

  addWaveBtn.addEventListener('click', function() {
    createWaveControls(waves.length);
  });

  function drawWaves() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    var envelope = [];
    for (var x=0; x<canvas.width; x=x+1) {
      var ySum = 0;
      for (var i=0; i<waves.length; i++) {
        var w = waves[i];
        // Dynamic phase animation
        var phaseOffset = parseFloat(w.phase.value) + 0.5 * Math.sin(t/50 + i);
        var y = parseFloat(w.amp.value) * Math.sin(parseFloat(w.freq.value)*x + phaseOffset + t/10);
        ySum += y;
      }
      envelope[x] = canvas.height/2 + ySum;
    }

    // Draw amplitude envelope shaded
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    for (var x=0; x<canvas.width; x=x+1) {
      ctx.lineTo(x, envelope[x]);
    }
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.closePath();
    var grad = ctx.createLinearGradient(0,0,0,canvas.height);
    grad.addColorStop(0,"rgba(0,255,255,0.2)");
    grad.addColorStop(1,"rgba(0,255,255,0.05)");
    ctx.fillStyle=grad;
    ctx.fill();

    // Draw individual waves with trails
    for (var i=0; i<waves.length; i++) {
      ctx.beginPath();
      for (var x=0; x<canvas.width; x=x+1) {
        var w = waves[i];
        var phaseOffset = parseFloat(w.phase.value) + 0.5 * Math.sin(t/50 + i);
        var y = parseFloat(w.amp.value) * Math.sin(parseFloat(w.freq.value)*x + phaseOffset + t/10);
        var yPos = canvas.height/2 + y;
        if (x===0) ctx.moveTo(x,yPos); else ctx.lineTo(x,yPos);
      }
      ctx.strokeStyle = waves[i].color.value;
      ctx.lineWidth=1.5;
      ctx.shadowBlur=5;
      ctx.shadowColor=waves[i].color.value;
      ctx.stroke();
      ctx.shadowBlur=0;
    }

    t += 1;
    requestAnimationFrame(drawWaves);
  }

  drawWaves();

  // Initialize with 2 waves
  createWaveControls(0);
  createWaveControls(1);
});
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}


function copyCODE101() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FocusVault Pro</title>

<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #0b0f19;
    color: #ffffff;
}

header {
    padding: 20px;
    text-align: center;
    font-size: 24px;
    background-color: #121826;
    font-weight: bold;
    letter-spacing: 1px;
}

.container {
    max-width: 1100px;
    margin: auto;
    padding: 20px;
}

.section {
    background-color: #121826;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}

h2 {
    margin-top: 0;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #2563eb;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #1d4ed8;
}

input, select {
    padding: 8px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    width: 100%;
    background-color: #1e293b;
    color: white;
}

.timer {
    font-size: 40px;
    text-align: center;
    margin: 15px 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.stat-box {
    background-color: #1e293b;
    padding: 15px;
    border-radius: 6px;
    text-align: center;
}

.monk {
    background-color: black !important;
}

.hidden {
    display: none;
}
</style>
</head>

<body>

<header>FocusVault Pro</header>

<div class="container">

<div class="section">
<h2>Deep Work Engine</h2>
<input type="number" id="sessionMinutes" placeholder="Session Minutes (e.g. 45)">
<button onclick="startSession()">Start Session</button>
<button onclick="logDistraction()">Log Distraction</button>
<div class="timer" id="timerDisplay">00:00</div>
<p>Distractions This Session: <span id="distractionCount">0</span></p>
</div>

<div class="section">
<h2>Urge Control Log</h2>
<input type="text" id="urgeTrigger" placeholder="What triggered the urge?">
<select id="urgeIntensity">
<option value="1">Low</option>
<option value="2">Medium</option>
<option value="3">High</option>
</select>
<button onclick="logUrge()">Log Urge</button>
<p>Total Urges This Week: <span id="urgeCount">0</span></p>
</div>

<div class="section">
<h2>Discipline Analytics</h2>
<div class="stats-grid">
<div class="stat-box">
<h3>Total Focus Minutes</h3>
<p id="totalFocus">0</p>
</div>
<div class="stat-box">
<h3>Focus Streak</h3>
<p id="streak">0</p>
</div>
<div class="stat-box">
<h3>Weekly Discipline Score</h3>
<p id="score">0</p>
</div>
</div>
</div>

<div class="section">
<h2>System Controls</h2>
<button onclick="toggleMonkMode()">Toggle Monk Mode</button>
<button onclick="resetSystem()">Reset Data</button>
</div>

</div>

<script>
let timerInterval = null;
let remainingSeconds = 0;
let distractionCounter = 0;

let data = JSON.parse(localStorage.getItem("focusVaultData")) || {
    totalFocus: 0,
    streak: 0,
    urges: 0
};

updateUI();

function startSession() {
    const minutes = parseInt(document.getElementById("sessionMinutes").value);
    if (!minutes || minutes <= 0) {
        alert("Enter valid minutes.");
        return;
    }

    remainingSeconds = minutes * 60;
    distractionCounter = 0;
    document.getElementById("distractionCount").textContent = distractionCounter;

    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            sessionComplete(minutes);
        } else {
            remainingSeconds--;
            updateTimer();
        }
    }, 1000);

    updateTimer();
}

function updateTimer() {
    const min = Math.floor(remainingSeconds / 60);
    const sec = remainingSeconds % 60;
    document.getElementById("timerDisplay").textContent =
        String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

function logDistraction() {
    distractionCounter++;
    document.getElementById("distractionCount").textContent = distractionCounter;
}

function sessionComplete(minutes) {
    data.totalFocus += minutes;
    if (distractionCounter === 0) {
        data.streak++;
    } else {
        data.streak = 0;
    }
    saveData();
    updateUI();
    calculateScore();
    alert("Session complete.");
}

function logUrge() {
    const trigger = document.getElementById("urgeTrigger").value;
    if (trigger === "") {
        alert("Enter trigger.");
        return;
    }
    data.urges++;
    saveData();
    updateUI();
    calculateScore();
    document.getElementById("urgeTrigger").value = "";
}

function calculateScore() {
    const score =
        (data.totalFocus * 2) +
        (data.streak * 10) -
        (data.urges * 5);
    document.getElementById("score").textContent = score;
}

function toggleMonkMode() {
    document.body.classList.toggle("monk");
}

function resetSystem() {
    if (confirm("Reset all data?")) {
        localStorage.removeItem("focusVaultData");
        location.reload();
    }
}

function saveData() {
    localStorage.setItem("focusVaultData", JSON.stringify(data));
}

function updateUI() {
    document.getElementById("totalFocus").textContent = data.totalFocus;
    document.getElementById("streak").textContent = data.streak;
    document.getElementById("urgeCount").textContent = data.urges;
    calculateScore();
}
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}


function copyCODE102() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Truth Engine</title>

<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #0e1117;
    color: #ffffff;
}

header {
    background-color: #161b22;
    padding: 20px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1px;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

.section {
    background-color: #161b22;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}

h2 {
    margin-top: 0;
}

textarea, input[type="number"], select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    background-color: #21262d;
    color: white;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #238636;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #2ea043;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

.card {
    background-color: #21262d;
    padding: 15px;
    border-radius: 6px;
}

.score-display {
    font-size: 32px;
    text-align: center;
    margin-top: 15px;
}

.history-item {
    background-color: #21262d;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}
</style>
</head>

<body>

<header>AI Truth Engine — Information Verification Dashboard</header>

<div class="container">

<div class="section">
<h2>Claim Analysis</h2>
<textarea id="claim" rows="3" placeholder="Enter main claim..."></textarea>

<label>Source Reliability (0-10)</label>
<input type="number" id="sourceScore" min="0" max="10">

<label>Evidence Strength (0-10)</label>
<input type="number" id="evidenceScore" min="0" max="10">

<label>Logical Consistency (0-10)</label>
<input type="number" id="logicScore" min="0" max="10">

<label>Emotional Manipulation Level (0-10)</label>
<input type="number" id="emotionScore" min="0" max="10">

<h3>Logical Fallacies Detected</h3>
<label><input type="checkbox" value="5" class="fallacy"> Strawman</label><br>
<label><input type="checkbox" value="5" class="fallacy"> False Dilemma</label><br>
<label><input type="checkbox" value="5" class="fallacy"> Appeal to Emotion</label><br>
<label><input type="checkbox" value="5" class="fallacy"> Slippery Slope</label><br>
<label><input type="checkbox" value="5" class="fallacy"> Authority Fallacy</label><br>

<br><br>
<button onclick="analyzeClaim()">Analyze Claim</button>

<div class="score-display" id="resultScore">Reliability: --%</div>
</div>

<div class="section">
<h2>Analysis History</h2>
<div id="historyContainer"></div>
<button onclick="exportHistory()">Export History</button>
<button onclick="clearHistory()">Clear History</button>
</div>

</div>

<script>
let historyData = JSON.parse(localStorage.getItem("truthEngineHistory")) || [];

function analyzeClaim() {
    const claim = document.getElementById("claim").value.trim();
    if (claim === "") {
        alert("Enter a claim.");
        return;
    }

    const source = parseInt(document.getElementById("sourceScore").value) || 0;
    const evidence = parseInt(document.getElementById("evidenceScore").value) || 0;
    const logic = parseInt(document.getElementById("logicScore").value) || 0;
    const emotion = parseInt(document.getElementById("emotionScore").value) || 0;

    let fallacyPenalty = 0;
    document.querySelectorAll(".fallacy:checked").forEach(function(cb) {
        fallacyPenalty += parseInt(cb.value);
    });

    let rawScore =
        (source * 0.3) +
        (evidence * 0.3) +
        (logic * 0.3) -
        (emotion * 0.2);

    rawScore = rawScore * 10;
    rawScore = rawScore - fallacyPenalty;

    if (rawScore < 0) rawScore = 0;
    if (rawScore > 100) rawScore = 100;

    document.getElementById("resultScore").textContent =
        "Reliability: " + Math.round(rawScore) + "%";

    const entry = {
        claim: claim,
        score: Math.round(rawScore),
        date: new Date().toLocaleString()
    };

    historyData.unshift(entry);
    saveHistory();
    renderHistory();
}

function renderHistory() {
    const container = document.getElementById("historyContainer");
    container.innerHTML = "";

    historyData.forEach(function(item) {
        const div = document.createElement("div");
        div.className = "history-item";
        div.innerHTML =
            "<strong>Score:</strong> " + item.score + "%<br>" +
            "<strong>Date:</strong> " + item.date + "<br>" +
            "<strong>Claim:</strong> " + item.claim;
        container.appendChild(div);
    });
}

function saveHistory() {
    localStorage.setItem("truthEngineHistory", JSON.stringify(historyData));
}

function exportHistory() {
    const blob = new Blob([JSON.stringify(historyData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "verification-history.json";
    a.click();

    URL.revokeObjectURL(url);
}

function clearHistory() {
    if (confirm("Delete all history?")) {
        historyData = [];
        saveHistory();
        renderHistory();
    }
}

renderHistory();
</script>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE103() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IronFit Gym</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, Helvetica, sans-serif;
}

body{
background:#0f0f0f;
color:white;
}

/* NAVBAR */

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
background:#111;
border-bottom:1px solid #222;
}

.logo{
font-size:24px;
font-weight:bold;
color:#ff3c00;
}

nav ul{
display:flex;
list-style:none;
gap:30px;
}

nav ul li a{
text-decoration:none;
color:white;
font-size:15px;
transition:.3s;
}

nav ul li a:hover{
color:#ff3c00;
}

/* HERO */

.hero{
height:85vh;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.8)),
url("https://images.unsplash.com/photo-1599058917765-a780eda07a3e");
background-size:cover;
background-position:center;
}

.hero h1{
font-size:55px;
margin-bottom:20px;
}

.hero p{
color:#ccc;
margin-bottom:25px;
}

.hero button{
padding:14px 32px;
border:none;
background:#ff3c00;
color:white;
font-size:16px;
cursor:pointer;
border-radius:5px;
transition:.3s;
}

.hero button:hover{
background:#ff5e2e;
}

/* FEATURES */

.features{
padding:80px 8%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.feature{
background:#161616;
padding:30px;
border-radius:8px;
text-align:center;
transition:.3s;
}

.feature:hover{
transform:translateY(-6px);
background:#1c1c1c;
}

.feature h3{
margin-bottom:12px;
color:#ff3c00;
}

.feature p{
color:#aaa;
font-size:14px;
}

/* TRAINERS */

.trainers{
padding:80px 8%;
text-align:center;
}

.trainers h2{
margin-bottom:40px;
font-size:32px;
}

.trainer-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
}

.trainer{
background:#161616;
padding:20px;
border-radius:8px;
}

.trainer img{
width:100%;
border-radius:6px;
margin-bottom:10px;
}

.trainer h4{
margin-bottom:5px;
}

.trainer span{
color:#ff3c00;
font-size:14px;
}

/* PRICING */

.pricing{
padding:80px 8%;
background:#111;
text-align:center;
}

.pricing h2{
margin-bottom:40px;
}

.price-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.plan{
background:#161616;
padding:30px;
border-radius:8px;
}

.plan h3{
color:#ff3c00;
margin-bottom:10px;
}

.plan h1{
margin:15px 0;
}

.plan p{
color:#aaa;
margin-bottom:8px;
font-size:14px;
}

.plan button{
margin-top:15px;
padding:10px 25px;
background:#ff3c00;
border:none;
color:white;
cursor:pointer;
border-radius:4px;
}

/* CONTACT */

.contact{
padding:80px 8%;
text-align:center;
}

.contact h2{
margin-bottom:20px;
}

.contact input,
.contact textarea{
width:100%;
max-width:500px;
padding:12px;
margin:10px auto;
display:block;
border:none;
border-radius:4px;
background:#1a1a1a;
color:white;
}

.contact button{
padding:12px 28px;
background:#ff3c00;
border:none;
color:white;
cursor:pointer;
border-radius:4px;
}

/* FOOTER */

footer{
text-align:center;
padding:25px;
background:#0b0b0b;
color:#777;
font-size:14px;
}

</style>
</head>
<body>

<nav>
<div class="logo">IronFit</div>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">Features</a></li>
<li><a href="#">Trainers</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>

<section class="hero">
<div>
<h1>Build Your Dream Body</h1>
<p>Train with professionals and reach your fitness goals faster.</p>
<button>Join Now</button>
</div>
</section>

<section class="features">
<div class="feature">
<h3>Modern Equipment</h3>
<p>Top quality machines and weights for serious workouts.</p>
</div>

<div class="feature">
<h3>Expert Trainers</h3>
<p>Professional trainers ready to guide your fitness journey.</p>
</div>

<div class="feature">
<h3>Healthy Plans</h3>
<p>Personalized diet and training plans for maximum results.</p>
</div>
</section>

<section class="trainers">
<h2>Our Trainers</h2>

<div class="trainer-grid">

<div class="trainer">
<img src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a">
<h4>Mike Johnson</h4>
<span>Strength Coach</span>
</div>

<div class="trainer">
<img src="https://images.unsplash.com/photo-1594737625785-c6c4c8a9f1fa">
<h4>Sarah Lee</h4>
<span>Fitness Trainer</span>
</div>

<div class="trainer">
<img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e">
<h4>Daniel Cruz</h4>
<span>Bodybuilding Coach</span>
</div>

</div>
</section>

<section class="pricing">
<h2>Membership Plans</h2>

<div class="price-grid">

<div class="plan">
<h3>Basic</h3>
<h1>$19/mo</h1>
<p>Gym Access</p>
<p>Locker Room</p>
<p>Basic Equipment</p>
<button>Choose</button>
</div>

<div class="plan">
<h3>Pro</h3>
<h1>$39/mo</h1>
<p>All Equipment</p>
<p>Group Classes</p>
<p>Diet Plan</p>
<button>Choose</button>
</div>

<div class="plan">
<h3>Elite</h3>
<h1>$59/mo</h1>
<p>Personal Trainer</p>
<p>Premium Classes</p>
<p>Nutrition Plan</p>
<button>Choose</button>
</div>

</div>
</section>

<section class="contact">
<h2>Contact Us</h2>

<input type="text" placeholder="Your Name">
<input type="email" placeholder="Your Email">
<textarea rows="4" placeholder="Message"></textarea>
<button>Send Message</button>

</section>

<footer>
© 2026 IronFit Gym — All Rights Reserved
</footer>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE104() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>MAISON — Modern Store</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --cream: #F7F4EF;
    --black: #0E0E0E;
    --mid: #6B6560;
    --accent: #C4A882;
    --border: #E2DDD8;
    --white: #FFFFFF;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--cream);
    color: var(--black);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    cursor: none;
    overflow-x: hidden;
  }

  /* Custom Cursor */
  .cursor {
    position: fixed;
    width: 10px; height: 10px;
    background: var(--black);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s, width 0.3s, height 0.3s, background 0.3s;
  }
  .cursor-ring {
    position: fixed;
    width: 36px; height: 36px;
    border: 1px solid var(--black);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: transform 0.18s ease, width 0.3s, height 0.3s, opacity 0.3s;
    opacity: 0.5;
  }
  body:hover .cursor { opacity: 1; }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 24px 48px;
    background: rgba(247,244,239,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
  }
  nav.scrolled { border-color: var(--border); }

  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--black);
    text-decoration: none;
  }

  .nav-links {
    display: flex; gap: 36px; list-style: none;
  }
  .nav-links a {
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--mid);
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--black); }

  .nav-actions {
    display: flex; align-items: center; gap: 20px;
  }
  .nav-actions button {
    background: none; border: none; cursor: none;
    font-size: 12px; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--mid);
    transition: color 0.2s;
  }
  .nav-actions button:hover { color: var(--black); }

  .cart-btn {
    display: flex; align-items: center; gap: 8px;
    background: var(--black) !important;
    color: var(--white) !important;
    padding: 10px 20px !important;
    border-radius: 2px;
    font-size: 11px !important;
    letter-spacing: 0.12em;
  }
  .cart-count {
    background: var(--accent);
    color: var(--white);
    width: 18px; height: 18px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px;
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 80px;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 48px 80px 48px;
    animation: fadeUp 1s ease both;
  }

  .hero-tag {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 24px;
    display: flex; align-items: center; gap: 12px;
  }
  .hero-tag::before {
    content: '';
    width: 32px; height: 1px;
    background: var(--accent);
  }

  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(52px, 6vw, 88px);
    font-weight: 300;
    line-height: 1.05;
    letter-spacing: -0.01em;
    margin-bottom: 28px;
  }
  .hero-title em {
    font-style: italic;
    color: var(--accent);
  }

  .hero-desc {
    font-size: 15px;
    line-height: 1.8;
    color: var(--mid);
    max-width: 400px;
    margin-bottom: 48px;
  }

  .hero-cta {
    display: flex; gap: 16px; align-items: center;
  }

  .btn-primary {
    background: var(--black);
    color: var(--white);
    padding: 16px 40px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: none;
    transition: background 0.3s, transform 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-primary:hover { background: var(--accent); transform: translateY(-2px); }

  .btn-ghost {
    background: none;
    color: var(--black);
    padding: 16px 32px;
    border: 1px solid var(--border);
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: none;
    transition: border-color 0.3s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-ghost:hover { border-color: var(--black); }

  .hero-right {
    position: relative;
    overflow: hidden;
    animation: fadeIn 1.2s ease both;
  }
  .hero-right img {
    width: 100%; height: 100%;
    object-fit: cover;
  }
  .hero-right-overlay {
    position: absolute;
    bottom: 40px; left: 40px;
    background: rgba(247,244,239,0.9);
    padding: 20px 28px;
    backdrop-filter: blur(8px);
  }
  .hero-promo-label {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mid);
    margin-bottom: 4px;
  }
  .hero-promo-val {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 600;
    color: var(--black);
  }

  /* MARQUEE */
  .marquee-bar {
    background: var(--black);
    padding: 14px 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .marquee-track {
    display: inline-flex;
    animation: marquee 22s linear infinite;
  }
  .marquee-track span {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--cream);
    margin: 0 40px;
  }
  .marquee-track span.dot {
    color: var(--accent);
    margin: 0;
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  /* CATEGORIES */
  .section { padding: 96px 48px; }
  .section-header {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 56px;
  }
  .section-label {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 300;
    line-height: 1.1;
  }
  .section-link {
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--mid);
    text-decoration: none;
    border-bottom: 1px solid var(--border);
    padding-bottom: 2px;
    transition: color 0.2s, border-color 0.2s;
  }
  .section-link:hover { color: var(--black); border-color: var(--black); }

  .category-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
    height: 480px;
  }
  .cat-card {
    position: relative;
    overflow: hidden;
    cursor: none;
  }
  .cat-card img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  .cat-card:hover img { transform: scale(1.04); }
  .cat-card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(14,14,14,0.5) 0%, transparent 50%);
    display: flex; flex-direction: column;
    justify-content: flex-end;
    padding: 28px;
  }
  .cat-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-weight: 300;
    color: var(--white);
    margin-bottom: 8px;
  }
  .cat-count {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.65);
  }

  /* PRODUCTS */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px 24px;
  }

  .product-card {
    cursor: none;
  }
  .product-img-wrap {
    position: relative;
    aspect-ratio: 3/4;
    overflow: hidden;
    background: var(--white);
    margin-bottom: 16px;
  }
  .product-img-wrap img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  .product-card:hover .product-img-wrap img { transform: scale(1.05); }

  .product-badge {
    position: absolute; top: 14px; left: 14px;
    background: var(--black);
    color: var(--white);
    font-size: 9px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 5px 10px;
  }
  .product-badge.sale { background: var(--accent); }

  .product-actions {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 16px;
    transform: translateY(100%);
    transition: transform 0.35s ease;
    background: rgba(247,244,239,0.95);
    backdrop-filter: blur(8px);
    display: flex; gap: 8px;
  }
  .product-card:hover .product-actions { transform: translateY(0); }
  .product-actions button {
    flex: 1;
    padding: 10px;
    border: 1px solid var(--border);
    background: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: none;
    transition: all 0.2s;
  }
  .product-actions button.add-cart {
    background: var(--black);
    color: var(--white);
    border-color: var(--black);
    flex: 2;
  }
  .product-actions button:hover:not(.add-cart) { background: var(--border); }
  .product-actions button.add-cart:hover { background: var(--accent); border-color: var(--accent); }

  .product-info { padding: 0 4px; }
  .product-brand {
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--mid);
    margin-bottom: 4px;
  }
  .product-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    line-height: 1.3;
  }
  .product-price {
    display: flex; gap: 10px; align-items: center;
  }
  .price-current {
    font-size: 15px;
    font-weight: 500;
    color: var(--black);
  }
  .price-old {
    font-size: 13px;
    color: var(--mid);
    text-decoration: line-through;
  }

  /* BANNER */
  .banner {
    margin: 0 48px;
    background: var(--black);
    padding: 80px 64px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .banner::before {
    content: 'SALE';
    position: absolute;
    right: -20px; top: 50%;
    transform: translateY(-50%) rotate(90deg);
    font-family: 'Cormorant Garamond', serif;
    font-size: 160px;
    font-weight: 600;
    color: rgba(255,255,255,0.03);
    white-space: nowrap;
    letter-spacing: -0.04em;
  }
  .banner-tag {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
  }
  .banner-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 4vw, 60px);
    font-weight: 300;
    color: var(--white);
    line-height: 1.1;
    margin-bottom: 24px;
  }
  .banner-desc {
    font-size: 14px;
    color: rgba(255,255,255,0.55);
    line-height: 1.8;
    max-width: 380px;
  }
  .banner-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 24px;
  }
  .banner-stat {
    text-align: right;
  }
  .stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 64px;
    font-weight: 300;
    color: var(--white);
    line-height: 1;
  }
  .stat-label {
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
  }
  .btn-light {
    background: var(--cream);
    color: var(--black);
    padding: 16px 40px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: none;
    transition: background 0.3s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-light:hover { background: var(--accent); color: var(--white); }

  /* FEATURES */
  .features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    margin: 80px 0;
  }
  .feature {
    padding: 48px 40px;
    border-right: 1px solid var(--border);
  }
  .feature:last-child { border-right: none; }
  .feature-icon {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .feature-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .feature-desc {
    font-size: 13px;
    color: var(--mid);
    line-height: 1.7;
  }

  /* NEWSLETTER */
  .newsletter {
    padding: 96px 48px;
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
  }
  .newsletter .section-label { justify-content: center; display: flex; }
  .newsletter .section-title { text-align: center; margin-bottom: 16px; }
  .newsletter p {
    font-size: 15px;
    color: var(--mid);
    line-height: 1.8;
    margin-bottom: 40px;
  }
  .newsletter-form {
    display: flex;
    gap: 0;
    border: 1px solid var(--border);
  }
  .newsletter-form input {
    flex: 1;
    padding: 16px 24px;
    border: none;
    background: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--black);
    outline: none;
  }
  .newsletter-form input::placeholder { color: var(--mid); }
  .newsletter-form button {
    padding: 16px 32px;
    background: var(--black);
    color: var(--white);
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: none;
    transition: background 0.3s;
  }
  .newsletter-form button:hover { background: var(--accent); }

  /* FOOTER */
  footer {
    background: var(--black);
    color: var(--white);
    padding: 72px 48px 40px;
  }
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 56px;
  }
  .footer-brand .nav-logo { color: var(--white); display: block; margin-bottom: 16px; }
  .footer-brand p {
    font-size: 13px;
    color: rgba(255,255,255,0.45);
    line-height: 1.8;
    max-width: 260px;
  }
  .footer-col h4 {
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 20px;
  }
  .footer-col ul { list-style: none; }
  .footer-col ul li { margin-bottom: 12px; }
  .footer-col ul li a {
    font-size: 13px;
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-col ul li a:hover { color: var(--white); }
  .footer-bottom {
    padding-top: 32px;
    border-top: 1px solid rgba(255,255,255,0.08);
    display: flex; justify-content: space-between; align-items: center;
  }
  .footer-bottom p {
    font-size: 12px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 0.06em;
  }
  .footer-socials { display: flex; gap: 20px; }
  .footer-socials a {
    font-size: 12px;
    letter-spacing: 0.12em;
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s;
  }
  .footer-socials a:hover { color: var(--white); }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: none;
  }

  /* PLACEHOLDER IMAGES via CSS */
  .img-placeholder {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--mid);
  }
  .bg-warm { background: #EDE8E0; }
  .bg-stone { background: #D8D0C4; }
  .bg-sage { background: #CDD1C4; }
  .bg-blush { background: #E8D8D0; }
  .bg-slate { background: #C8CDD4; }
  .bg-tan { background: #D4C8B8; }
</style>
</head>
<body>

<!-- Cursor -->
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- NAV -->
<nav id="navbar">
  <a href="#" class="nav-logo">Maison</a>
  <ul class="nav-links">
    <li><a href="#">New In</a></li>
    <li><a href="#">Women</a></li>
    <li><a href="#">Men</a></li>
    <li><a href="#">Collections</a></li>
    <li><a href="#">About</a></li>
  </ul>
  <div class="nav-actions">
    <button>Search</button>
    <button>Account</button>
    <button class="cart-btn">Bag <span class="cart-count">3</span></button>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-left">
    <div class="hero-tag">New Collection 2025</div>
    <h1 class="hero-title">Refined<br/><em>Everyday</em><br/>Essentials</h1>
    <p class="hero-desc">Thoughtfully crafted pieces designed for modern living. Minimal forms, exceptional materials, lasting quality.</p>
    <div class="hero-cta">
      <a href="#" class="btn-primary">Shop Now</a>
      <a href="#" class="btn-ghost">View Lookbook</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="img-placeholder bg-warm" style="height:100%">
      <!-- Replace with: <img src="hero.jpg" alt="Hero Image"> -->
      [Hero Image]
    </div>
    <div class="hero-right-overlay">
      <div class="hero-promo-label">Starting from</div>
      <div class="hero-promo-val">$49.00</div>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee-bar">
  <div class="marquee-track">
    <span>Free shipping over $150</span><span class="dot">·</span>
    <span>New arrivals every Friday</span><span class="dot">·</span>
    <span>Sustainably sourced materials</span><span class="dot">·</span>
    <span>Easy 30-day returns</span><span class="dot">·</span>
    <span>Members get 10% off</span><span class="dot">·</span>
    <span>Free shipping over $150</span><span class="dot">·</span>
    <span>New arrivals every Friday</span><span class="dot">·</span>
    <span>Sustainably sourced materials</span><span class="dot">·</span>
    <span>Easy 30-day returns</span><span class="dot">·</span>
    <span>Members get 10% off</span><span class="dot">·</span>
  </div>
</div>

<!-- CATEGORIES -->
<section class="section reveal">
  <div class="section-header">
    <div>
      <div class="section-label">Browse by</div>
      <h2 class="section-title">Shop Categories</h2>
    </div>
    <a href="#" class="section-link">All Categories →</a>
  </div>
  <div class="category-grid">
    <div class="cat-card">
      <div class="img-placeholder bg-stone" style="height:100%">[Category Image]</div>
      <div class="cat-card-overlay">
        <div class="cat-name">Women's Collection</div>
        <div class="cat-count">142 Products</div>
      </div>
    </div>
    <div class="cat-card">
      <div class="img-placeholder bg-sage" style="height:100%">[Category Image]</div>
      <div class="cat-card-overlay">
        <div class="cat-name">Men's Essentials</div>
        <div class="cat-count">98 Products</div>
      </div>
    </div>
    <div class="cat-card">
      <div class="img-placeholder bg-blush" style="height:100%">[Category Image]</div>
      <div class="cat-card-overlay">
        <div class="cat-name">Accessories</div>
        <div class="cat-count">64 Products</div>
      </div>
    </div>
  </div>
</section>

<!-- PRODUCTS -->
<section class="section reveal">
  <div class="section-header">
    <div>
      <div class="section-label">Curated picks</div>
      <h2 class="section-title">New Arrivals</h2>
    </div>
    <a href="#" class="section-link">View All →</a>
  </div>
  <div class="product-grid">

    <!-- Product 1 -->
    <div class="product-card">
      <div class="product-img-wrap">
        <div class="img-placeholder bg-warm">[Product Image]</div>
        <span class="product-badge">New</span>
        <div class="product-actions">
          <button>♡</button>
          <button class="add-cart">Add to Bag</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">Studio Line</div>
        <div class="product-name">Linen Oversized Blazer</div>
        <div class="product-price">
          <span class="price-current">$189.00</span>
        </div>
      </div>
    </div>

    <!-- Product 2 -->
    <div class="product-card">
      <div class="product-img-wrap">
        <div class="img-placeholder bg-slate">[Product Image]</div>
        <span class="product-badge sale">−20%</span>
        <div class="product-actions">
          <button>♡</button>
          <button class="add-cart">Add to Bag</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">Essentials</div>
        <div class="product-name">Merino Wool Turtleneck</div>
        <div class="product-price">
          <span class="price-current">$112.00</span>
          <span class="price-old">$140.00</span>
        </div>
      </div>
    </div>

    <!-- Product 3 -->
    <div class="product-card">
      <div class="product-img-wrap">
        <div class="img-placeholder bg-tan">[Product Image]</div>
        <div class="product-actions">
          <button>♡</button>
          <button class="add-cart">Add to Bag</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">Classic</div>
        <div class="product-name">Tailored Straight Trousers</div>
        <div class="product-price">
          <span class="price-current">$134.00</span>
        </div>
      </div>
    </div>

    <!-- Product 4 -->
    <div class="product-card">
      <div class="product-img-wrap">
        <div class="img-placeholder bg-sage">[Product Image]</div>
        <span class="product-badge">New</span>
        <div class="product-actions">
          <button>♡</button>
          <button class="add-cart">Add to Bag</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">Summer Edit</div>
        <div class="product-name">Cotton Poplin Midi Dress</div>
        <div class="product-price">
          <span class="price-current">$158.00</span>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- PROMO BANNER -->
<div class="banner reveal">
  <div>
    <div class="banner-tag">Limited Time Offer</div>
    <h2 class="banner-title">End of Season<br/>Sale — Up to<br/>40% Off</h2>
    <p class="banner-desc">Shop our curated selection of past-season favourites at exceptional value. While stocks last.</p>
    <br/><br/>
    <a href="#" class="btn-light">Shop the Sale</a>
  </div>
  <div class="banner-right">
    <div class="banner-stat">
      <div class="stat-num">40%</div>
      <div class="stat-label">Maximum discount</div>
    </div>
    <div class="banner-stat">
      <div class="stat-num">3</div>
      <div class="stat-label">Days remaining</div>
    </div>
  </div>
</div>

<!-- FEATURES -->
<div class="features reveal">
  <div class="feature">
    <div class="feature-icon">✦</div>
    <div class="feature-title">Free Delivery</div>
    <p class="feature-desc">Complimentary shipping on all orders over $150 to most destinations worldwide.</p>
  </div>
  <div class="feature">
    <div class="feature-icon">◈</div>
    <div class="feature-title">Easy Returns</div>
    <p class="feature-desc">Not satisfied? Return within 30 days for a full refund, no questions asked.</p>
  </div>
  <div class="feature">
    <div class="feature-icon">◇</div>
    <div class="feature-title">Secure Payment</div>
    <p class="feature-desc">All transactions are encrypted and secured. We accept all major payment methods.</p>
  </div>
  <div class="feature">
    <div class="feature-icon">⟡</div>
    <div class="feature-title">Authentic Quality</div>
    <p class="feature-desc">Every piece is quality-checked and sourced from sustainable, ethical partners.</p>
  </div>
</div>

<!-- NEWSLETTER -->
<div class="newsletter reveal">
  <div class="section-label">Stay Connected</div>
  <h2 class="section-title">Join the Maison<br/><em style="font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:300;">Community</em></h2>
  <p>Subscribe for early access to new collections, exclusive offers, and style inspiration delivered to your inbox.</p>
  <div class="newsletter-form">
    <input type="email" placeholder="Your email address"/>
    <button>Subscribe</button>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="#" class="nav-logo">Maison</a>
      <p>A curated fashion destination for those who appreciate quiet luxury and enduring design.</p>
    </div>
    <div class="footer-col">
      <h4>Shop</h4>
      <ul>
        <li><a href="#">New Arrivals</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Sale</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Help</h4>
      <ul>
        <li><a href="#">Shipping & Returns</a></li>
        <li><a href="#">Size Guide</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Sustainability</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Maison. All rights reserved.</p>
    <div class="footer-socials">
      <a href="#">Instagram</a>
      <a href="#">Pinterest</a>
      <a href="#">TikTok</a>
    </div>
  </div>
</footer>

<script>
  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
</script>
</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE105() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>NOVA — Online Store</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #FAFAFA;
    --black: #111;
    --gray: #777;
    --light: #F0EEE9;
    --accent: #B8956A;
    --border: #E5E5E5;
    --white: #fff;
  }

  body {
    background: var(--bg);
    color: var(--black);
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    line-height: 1.6;
  }

  a { text-decoration: none; color: inherit; }
  img { display: block; width: 100%; }

  /* NAV */
  nav {
    position: sticky; top: 0; z-index: 50;
    background: var(--white);
    border-bottom: 1px solid var(--border);
    padding: 0 40px;
    height: 64px;
    display: flex; align-items: center; justify-content: space-between;
  }

  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  .nav-links {
    display: flex; gap: 32px; list-style: none;
  }
  .nav-links a {
    font-size: 13px;
    color: var(--gray);
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--black); }

  .nav-right {
    display: flex; align-items: center; gap: 16px;
  }
  .nav-right a {
    font-size: 13px;
    color: var(--gray);
    transition: color 0.2s;
  }
  .nav-right a:hover { color: var(--black); }

  .cart-icon {
    position: relative;
  }
  .cart-dot {
    position: absolute; top: -4px; right: -6px;
    width: 14px; height: 14px;
    background: var(--accent);
    border-radius: 50%;
    font-size: 8px;
    color: #fff;
    display: flex; align-items: center; justify-content: center;
  }

  /* HERO */
  .hero {
    background: var(--light);
    padding: 80px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    min-height: 480px;
  }

  .hero-text { max-width: 480px; }

  .hero-eyebrow {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 60px);
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 20px;
  }
  .hero-title em { font-style: italic; color: var(--accent); }

  .hero-sub {
    font-size: 15px;
    color: var(--gray);
    margin-bottom: 36px;
    max-width: 380px;
  }

  .btn {
    display: inline-block;
    padding: 14px 36px;
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: all 0.25s;
  }
  .btn-dark { background: var(--black); color: var(--white); }
  .btn-dark:hover { background: var(--accent); }
  .btn-outline { background: none; color: var(--black); border: 1px solid var(--border); margin-left: 12px; }
  .btn-outline:hover { border-color: var(--black); }

  .hero-img {
    flex: 0 0 340px;
    height: 380px;
    background: #DDD8D0;
    border-radius: 2px;
    display: flex; align-items: center; justify-content: center;
    color: var(--gray); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
  }

  /* STRIP */
  .strip {
    background: var(--black);
    padding: 14px 40px;
    display: flex;
    justify-content: center;
    gap: 48px;
  }
  .strip span {
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
  }
  .strip span b { color: rgba(255,255,255,0.9); font-weight: 400; }

  /* SECTION */
  .section { padding: 72px 40px; }
  .section-top {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 40px;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 400;
  }
  .see-all {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gray);
    border-bottom: 1px solid var(--border);
    padding-bottom: 1px;
    transition: color 0.2s;
  }
  .see-all:hover { color: var(--black); }

  /* PRODUCT GRID */
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .product {
    background: var(--white);
    border: 1px solid var(--border);
    transition: box-shadow 0.25s;
  }
  .product:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.07); }

  .product-img {
    aspect-ratio: 3 / 4;
    background: var(--light);
    display: flex; align-items: center; justify-content: center;
    color: var(--gray); font-size: 11px; letter-spacing: 0.1em;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
  }

  .product-tag {
    position: absolute; top: 12px; left: 12px;
    background: var(--black); color: var(--white);
    font-size: 9px; padding: 4px 8px;
    letter-spacing: 0.12em; text-transform: uppercase;
  }
  .product-tag.sale { background: var(--accent); }

  .product-body { padding: 14px 16px 18px; }
  .product-name {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 6px;
    color: var(--black);
  }
  .product-price {
    font-size: 14px;
    font-weight: 500;
    color: var(--black);
  }
  .product-price s { font-weight: 300; color: var(--gray); margin-left: 8px; font-size: 13px; }

  .product-btn {
    width: 100%;
    padding: 10px;
    margin-top: 12px;
    background: none;
    border: 1px solid var(--border);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
    color: var(--black);
  }
  .product-btn:hover { background: var(--black); color: var(--white); border-color: var(--black); }

  /* CATEGORIES */
  .cats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .cat {
    position: relative;
    height: 260px;
    background: var(--light);
    display: flex; align-items: flex-end;
    padding: 24px;
    overflow: hidden;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .cat:hover { opacity: 0.9; }
  .cat-bg {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #aaa;
  }
  .cat-label {
    position: relative;
    z-index: 1;
  }
  .cat-name {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 400;
    color: var(--black);
    margin-bottom: 4px;
  }
  .cat-count {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gray);
  }

  /* PROMO */
  .promo {
    background: var(--light);
    margin: 0 40px 72px;
    padding: 56px 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  .promo-text .hero-eyebrow { margin-bottom: 12px; }
  .promo-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 3vw, 44px);
    font-weight: 400;
    margin-bottom: 12px;
    line-height: 1.2;
  }
  .promo-sub {
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 28px;
  }
  .promo-right {
    text-align: center;
    flex: 0 0 auto;
  }
  .promo-num {
    font-family: 'Playfair Display', serif;
    font-size: 80px;
    font-weight: 400;
    line-height: 1;
    color: var(--accent);
  }
  .promo-label {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gray);
    margin-top: 6px;
  }

  /* FEATURES */
  .features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--border);
  }
  .feat {
    padding: 40px 32px;
    border-right: 1px solid var(--border);
  }
  .feat:last-child { border-right: none; }
  .feat-icon { font-size: 20px; margin-bottom: 12px; }
  .feat-title { font-size: 14px; font-weight: 500; margin-bottom: 6px; }
  .feat-desc { font-size: 13px; color: var(--gray); line-height: 1.7; }

  /* FOOTER */
  footer {
    background: var(--black);
    color: rgba(255,255,255,0.5);
    padding: 56px 40px 32px;
  }
  .footer-top {
    display: flex; justify-content: space-between; align-items: flex-start;
    margin-bottom: 48px;
    gap: 40px;
  }
  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.08em;
    margin-bottom: 12px;
    display: block;
  }
  .footer-tagline { font-size: 13px; max-width: 220px; line-height: 1.7; }
  .footer-col h5 {
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-bottom: 16px;
    font-weight: 400;
  }
  .footer-col ul { list-style: none; }
  .footer-col ul li { margin-bottom: 10px; }
  .footer-col ul li a {
    font-size: 13px;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-col ul li a:hover { color: #fff; }
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 24px;
    display: flex; justify-content: space-between;
    font-size: 12px;
  }

  @media (max-width: 900px) {
    nav { padding: 0 20px; }
    .nav-links { display: none; }
    .hero { flex-direction: column; padding: 48px 20px; }
    .hero-img { width: 100%; flex: unset; height: 260px; }
    .products { grid-template-columns: repeat(2, 1fr); }
    .cats { grid-template-columns: 1fr 1fr; }
    .features { grid-template-columns: 1fr 1fr; }
    .promo { flex-direction: column; margin: 0 20px 48px; padding: 40px 32px; }
    .section { padding: 48px 20px; }
    .strip { gap: 20px; flex-wrap: wrap; justify-content: center; }
    .footer-top { flex-wrap: wrap; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <span class="logo">Nova</span>
  <ul class="nav-links">
    <li><a href="#">Shop</a></li>
    <li><a href="#">Women</a></li>
    <li><a href="#">Men</a></li>
    <li><a href="#">Sale</a></li>
  </ul>
  <div class="nav-right">
    <a href="#">Search</a>
    <a href="#">Account</a>
    <a href="#" class="cart-icon">
      Cart
      <span class="cart-dot">2</span>
    </a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-text">
    <div class="hero-eyebrow">New Arrivals · Spring 2025</div>
    <h1 class="hero-title">Style That<br/><em>Speaks</em> for Itself</h1>
    <p class="hero-sub">Clean lines, quality fabrics, and timeless pieces for every occasion.</p>
    <a href="#" class="btn btn-dark">Shop Now</a>
    <a href="#" class="btn btn-outline">See Lookbook</a>
  </div>
  <div class="hero-img">[Hero Image]</div>
</section>

<!-- STRIP -->
<div class="strip">
  <span><b>Free shipping</b> over $100</span>
  <span><b>30-day</b> returns</span>
  <span><b>New drops</b> every week</span>
  <span><b>Secure</b> checkout</span>
</div>

<!-- CATEGORIES -->
<section class="section">
  <div class="section-top">
    <h2 class="section-title">Shop by Category</h2>
    <a href="#" class="see-all">All Categories →</a>
  </div>
  <div class="cats">
    <div class="cat" style="background:#E8E2D9">
      <div class="cat-bg">[Image]</div>
      <div class="cat-label">
        <div class="cat-name">Women</div>
        <div class="cat-count">128 items</div>
      </div>
    </div>
    <div class="cat" style="background:#D4D8DC">
      <div class="cat-bg">[Image]</div>
      <div class="cat-label">
        <div class="cat-name">Men</div>
        <div class="cat-count">96 items</div>
      </div>
    </div>
    <div class="cat" style="background:#DDD8CE">
      <div class="cat-bg">[Image]</div>
      <div class="cat-label">
        <div class="cat-name">Accessories</div>
        <div class="cat-count">54 items</div>
      </div>
    </div>
  </div>
</section>

<!-- PRODUCTS -->
<section class="section" style="padding-top:0">
  <div class="section-top">
    <h2 class="section-title">New Arrivals</h2>
    <a href="#" class="see-all">View All →</a>
  </div>
  <div class="products">

    <div class="product">
      <div class="product-img" style="background:#EAE5DC">
        <span class="product-tag">New</span>
        [Image]
      </div>
      <div class="product-body">
        <div class="product-name">Linen Blazer</div>
        <div class="product-price">$89.00</div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>

    <div class="product">
      <div class="product-img" style="background:#D8DCE0">
        <span class="product-tag sale">Sale</span>
        [Image]
      </div>
      <div class="product-body">
        <div class="product-name">Wool Sweater</div>
        <div class="product-price">$59.00 <s>$79.00</s></div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>

    <div class="product">
      <div class="product-img" style="background:#E0DDD6">
        [Image]
      </div>
      <div class="product-body">
        <div class="product-name">Cotton Trousers</div>
        <div class="product-price">$69.00</div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>

    <div class="product">
      <div class="product-img" style="background:#D8E0D8">
        <span class="product-tag">New</span>
        [Image]
      </div>
      <div class="product-body">
        <div class="product-name">Midi Dress</div>
        <div class="product-price">$75.00</div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>

  </div>
</section>

<!-- PROMO -->
<div class="promo">
  <div class="promo-text">
    <div class="hero-eyebrow">Limited Time</div>
    <div class="promo-title">End of Season<br/>Sale is Live</div>
    <p class="promo-sub">Up to 40% off on selected items. Don't miss out.</p>
    <a href="#" class="btn btn-dark">Shop the Sale</a>
  </div>
  <div class="promo-right">
    <div class="promo-num">40%</div>
    <div class="promo-label">Off Selected Items</div>
  </div>
</div>

<!-- FEATURES -->
<div class="features">
  <div class="feat">
    <div class="feat-icon">📦</div>
    <div class="feat-title">Free Delivery</div>
    <p class="feat-desc">Free shipping on all orders over $100.</p>
  </div>
  <div class="feat">
    <div class="feat-icon">↩️</div>
    <div class="feat-title">Easy Returns</div>
    <p class="feat-desc">30-day hassle-free return policy.</p>
  </div>
  <div class="feat">
    <div class="feat-icon">🔒</div>
    <div class="feat-title">Secure Payment</div>
    <p class="feat-desc">All transactions are fully encrypted.</p>
  </div>
  <div class="feat">
    <div class="feat-icon">⭐</div>
    <div class="feat-title">Quality Guaranteed</div>
    <p class="feat-desc">Curated and checked before shipping.</p>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div>
      <span class="footer-logo">Nova</span>
      <p class="footer-tagline">Simple, clean fashion for everyday life.</p>
    </div>
    <div class="footer-col">
      <h5>Shop</h5>
      <ul>
        <li><a href="#">New Arrivals</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Sale</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Help</h5>
      <ul>
        <li><a href="#">Shipping Info</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Follow</h5>
      <ul>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Pinterest</a></li>
        <li><a href="#">TikTok</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Nova. All rights reserved.</span>
    <span>Privacy · Terms</span>
  </div>
</footer>

</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE106() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Inkwell — Magazine & Blog</title>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #FDFCFA;
    --black: #141414;
    --ink: #2C2C2C;
    --gray: #767676;
    --light: #F3F0EA;
    --accent: #C0392B;
    --border: #E4E0D8;
    --white: #fff;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--ink); font-family: 'Source Sans 3', sans-serif; font-weight: 400; line-height: 1.6; }
  a { text-decoration: none; color: inherit; }

  /* ── TOP BAR ── */
  .topbar {
    background: var(--black);
    color: rgba(255,255,255,0.55);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 9px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .topbar a { color: rgba(255,255,255,0.55); transition: color 0.2s; }
  .topbar a:hover { color: #fff; }
  .topbar-right { display: flex; gap: 24px; }

  /* ── HEADER ── */
  header {
    padding: 28px 40px 0;
    border-bottom: 1px solid var(--border);
  }
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: 3px solid var(--black);
    margin-bottom: 0;
  }
  .site-logo {
    font-family: 'Libre Baskerville', serif;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--black);
  }
  .site-logo span { color: var(--accent); }

  .header-meta {
    text-align: center;
  }
  .header-date {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gray);
    margin-bottom: 2px;
  }
  .header-tagline {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    font-style: italic;
    color: var(--gray);
  }

  .header-search {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .search-input {
    padding: 8px 14px;
    border: 1px solid var(--border);
    background: var(--light);
    font-family: 'Source Sans 3', sans-serif;
    font-size: 13px;
    color: var(--ink);
    outline: none;
    width: 180px;
    transition: border-color 0.2s;
  }
  .search-input:focus { border-color: var(--black); }
  .search-btn {
    padding: 8px 16px;
    background: var(--black);
    color: #fff;
    border: none;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Source Sans 3', sans-serif;
    transition: background 0.2s;
  }
  .search-btn:hover { background: var(--accent); }

  /* ── NAV ── */
  nav {
    display: flex;
    align-items: center;
    gap: 0;
    padding: 0 40px;
    border-bottom: 1px solid var(--border);
    overflow-x: auto;
  }
  nav a {
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gray);
    padding: 14px 20px;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    transition: all 0.2s;
    font-weight: 500;
  }
  nav a:hover, nav a.active { color: var(--black); border-bottom-color: var(--accent); }

  /* ── LAYOUT ── */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
  .main-grid {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 56px;
    padding: 48px 40px;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* ── FEATURED ── */
  .featured {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border: 1px solid var(--border);
    margin-bottom: 48px;
  }
  .featured-main {
    position: relative;
    overflow: hidden;
  }
  .featured-img {
    height: 380px;
    background: #D8D2C4;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #999;
    transition: transform 0.5s ease;
  }
  .featured-main:hover .featured-img { transform: scale(1.03); }
  .featured-body {
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--white);
    border-left: 1px solid var(--border);
  }
  .cat-tag {
    display: inline-block;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 12px;
  }
  .feat-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 14px;
    color: var(--black);
    transition: color 0.2s;
  }
  .feat-title:hover { color: var(--accent); }
  .feat-excerpt {
    font-size: 14px;
    color: var(--gray);
    line-height: 1.75;
    margin-bottom: 20px;
  }
  .meta {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 12px;
    color: var(--gray);
  }
  .meta-avatar {
    width: 28px; height: 28px;
    border-radius: 50%;
    background: var(--light);
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 10px;
    color: var(--gray);
    flex-shrink: 0;
  }
  .meta-dot { opacity: 0.4; }
  .read-more {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 600;
    margin-top: 20px;
    transition: gap 0.2s;
  }
  .read-more:hover { gap: 10px; }

  /* ── ARTICLE GRID ── */
  .section-label {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gray);
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--black);
    margin-bottom: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .section-label a {
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--accent);
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }
  .section-label a:hover { border-color: var(--accent); }

  .article-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-bottom: 48px;
  }

  .article-card {
    display: flex;
    flex-direction: column;
  }
  .article-img {
    height: 190px;
    background: var(--light);
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #aaa;
    margin-bottom: 14px;
    overflow: hidden;
  }
  .article-img-inner {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #aaa;
    transition: transform 0.45s ease;
  }
  .article-card:hover .article-img-inner { transform: scale(1.04); }

  .article-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.35;
    margin-bottom: 8px;
    color: var(--black);
    transition: color 0.2s;
  }
  .article-card:hover .article-title { color: var(--accent); }
  .article-excerpt {
    font-size: 13px;
    color: var(--gray);
    line-height: 1.7;
    margin-bottom: 12px;
    flex: 1;
  }
  .article-meta {
    font-size: 11px;
    color: #aaa;
    letter-spacing: 0.06em;
  }

  /* ── LIST ARTICLES ── */
  .article-list { display: flex; flex-direction: column; gap: 0; margin-bottom: 48px; }
  .article-row {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 20px;
    align-items: start;
    padding: 20px 0;
    border-bottom: 1px solid var(--border);
  }
  .article-row:first-child { border-top: 1px solid var(--border); }
  .row-img {
    height: 80px;
    background: var(--light);
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; color: #bbb; text-transform: uppercase; letter-spacing: 0.08em;
    overflow: hidden;
    flex-shrink: 0;
  }
  .row-img-inner {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; color: #bbb; text-transform: uppercase; letter-spacing: 0.08em;
    transition: transform 0.4s;
  }
  .article-row:hover .row-img-inner { transform: scale(1.06); }
  .row-body { display: flex; flex-direction: column; gap: 5px; }
  .row-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.35;
    color: var(--black);
    transition: color 0.2s;
  }
  .article-row:hover .row-title { color: var(--accent); }
  .row-excerpt { font-size: 13px; color: var(--gray); line-height: 1.6; }
  .row-meta { font-size: 11px; color: #aaa; }

  /* ── SIDEBAR ── */
  .sidebar { display: flex; flex-direction: column; gap: 40px; }

  .sidebar-widget {}
  .widget-title {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--gray);
    padding-bottom: 10px;
    border-bottom: 2px solid var(--black);
    margin-bottom: 20px;
  }

  /* Popular */
  .popular-list { display: flex; flex-direction: column; gap: 0; }
  .popular-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .popular-item:last-child { border-bottom: none; }
  .popular-num {
    font-family: 'Libre Baskerville', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--border);
    line-height: 1;
    flex-shrink: 0;
    width: 28px;
    transition: color 0.2s;
  }
  .popular-item:hover .popular-num { color: var(--accent); }
  .popular-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.35;
    color: var(--black);
    margin-bottom: 4px;
    transition: color 0.2s;
  }
  .popular-item:hover .popular-title { color: var(--accent); }
  .popular-meta { font-size: 11px; color: #aaa; }

  /* Tags */
  .tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
  .tag {
    padding: 6px 14px;
    border: 1px solid var(--border);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gray);
    cursor: pointer;
    transition: all 0.2s;
  }
  .tag:hover { background: var(--black); color: #fff; border-color: var(--black); }

  /* Newsletter Widget */
  .newsletter-widget {
    background: var(--black);
    padding: 28px 24px;
  }
  .newsletter-widget .widget-title { color: rgba(255,255,255,0.4); border-bottom-color: rgba(255,255,255,0.15); }
  .newsletter-widget p {
    font-size: 13px;
    color: rgba(255,255,255,0.55);
    line-height: 1.7;
    margin-bottom: 16px;
  }
  .newsletter-widget input {
    width: 100%;
    padding: 10px 14px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    color: #fff;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 13px;
    outline: none;
    margin-bottom: 10px;
    transition: border-color 0.2s;
  }
  .newsletter-widget input::placeholder { color: rgba(255,255,255,0.3); }
  .newsletter-widget input:focus { border-color: rgba(255,255,255,0.4); }
  .newsletter-widget button {
    width: 100%;
    padding: 10px;
    background: var(--accent);
    color: #fff;
    border: none;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .newsletter-widget button:hover { opacity: 0.85; }

  /* Social Widget */
  .social-list { display: flex; flex-direction: column; gap: 0; }
  .social-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: color 0.2s;
  }
  .social-item:hover { color: var(--accent); }
  .social-name { font-size: 13px; font-weight: 500; letter-spacing: 0.06em; }
  .social-count { font-size: 12px; color: var(--gray); }

  /* ── PAGINATION ── */
  .pagination {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 48px;
  }
  .page-btn {
    width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    border: 1px solid var(--border);
    font-size: 13px;
    color: var(--gray);
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'Source Sans 3', sans-serif;
    background: none;
  }
  .page-btn:hover, .page-btn.active {
    background: var(--black);
    color: #fff;
    border-color: var(--black);
  }

  /* ── FOOTER ── */
  footer {
    background: var(--black);
    color: rgba(255,255,255,0.45);
    margin-top: 0;
  }
  .footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    padding: 56px 40px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .footer-logo {
    font-family: 'Libre Baskerville', serif;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    display: block;
    margin-bottom: 12px;
  }
  .footer-logo span { color: var(--accent); }
  .footer-about { font-size: 13px; line-height: 1.8; max-width: 240px; }
  .footer-col h5 {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-bottom: 18px;
    font-weight: 600;
  }
  .footer-col ul { list-style: none; }
  .footer-col ul li { margin-bottom: 10px; }
  .footer-col ul li a {
    font-size: 13px;
    color: rgba(255,255,255,0.45);
    transition: color 0.2s;
  }
  .footer-col ul li a:hover { color: #fff; }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    font-size: 12px;
  }

  /* ── DARK MODE TOGGLE ── */
  .theme-toggle {
    background: none;
    border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.5);
    padding: 5px 12px;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Source Sans 3', sans-serif;
    transition: all 0.2s;
  }
  .theme-toggle:hover { border-color: #fff; color: #fff; }

  /* ── DARK MODE ── */
  body.dark {
    --bg: #111;
    --black: #F0EDE8;
    --ink: #D8D4CC;
    --gray: #888;
    --light: #1E1C18;
    --border: #2A2822;
    --white: #1A1814;
  }
  body.dark header, body.dark nav { background: #111; }
  body.dark .topbar { background: #0A0A0A; }
  body.dark .site-logo { color: #F0EDE8; }
  body.dark .newsletter-widget { background: #1A1814; }
  body.dark footer { background: #0A0A0A; }

  /* ── RESPONSIVE ── */
  @media (max-width: 960px) {
    .main-grid { grid-template-columns: 1fr; padding: 32px 20px; gap: 40px; }
    .featured { grid-template-columns: 1fr; }
    .featured-body { border-left: none; border-top: 1px solid var(--border); }
    .article-grid { grid-template-columns: 1fr 1fr; }
    .topbar, .header-inner, nav { padding-left: 20px; padding-right: 20px; }
    .header-meta { display: none; }
    .footer-top { grid-template-columns: 1fr 1fr; padding: 40px 20px; gap: 32px; }
    .footer-bottom { padding: 20px; flex-direction: column; gap: 10px; text-align: center; }
  }
  @media (max-width: 600px) {
    .article-grid { grid-template-columns: 1fr; }
    .header-inner { flex-direction: column; gap: 16px; padding: 20px 0; }
    .header-search { width: 100%; }
    .search-input { flex: 1; width: auto; }
    .footer-top { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<!-- TOP BAR -->
<div class="topbar">
  <span>Sunday, March 8, 2025</span>
  <div class="topbar-right">
    <a href="#">Subscribe</a>
    <a href="#">Newsletter</a>
    <a href="#">About</a>
  </div>
</div>

<!-- HEADER -->
<header>
  <div class="header-inner">
    <a href="#" class="site-logo">Ink<span>well</span></a>
    <div class="header-meta">
      <div class="header-date">Est. 2020 · Independent Media</div>
      <div class="header-tagline">Stories worth reading, every single day</div>
    </div>
    <div class="header-search">
      <input class="search-input" type="text" placeholder="Search articles…"/>
      <button class="search-btn">Go</button>
    </div>
  </div>
</header>

<!-- NAV -->
<nav>
  <a href="#" class="active">Home</a>
  <a href="#">World</a>
  <a href="#">Technology</a>
  <a href="#">Culture</a>
  <a href="#">Science</a>
  <a href="#">Business</a>
  <a href="#">Opinion</a>
  <a href="#">Travel</a>
  <a href="#">Food</a>
</nav>

<!-- MAIN -->
<div class="main-grid">

  <!-- CONTENT -->
  <main>

    <!-- FEATURED -->
    <div class="featured">
      <div class="featured-main">
        <div class="featured-img" style="background:#C8C0B0">[Featured Image]</div>
      </div>
      <div class="featured-body">
        <span class="cat-tag">Technology</span>
        <a href="#" class="feat-title">The Quiet Revolution Reshaping How We Think About Digital Privacy</a>
        <p class="feat-excerpt">Across the globe, a generation of engineers and policymakers are rebuilding the internet's foundations — and the consequences will affect everyone.</p>
        <div class="meta">
          <div class="meta-avatar">JD</div>
          <span>James Dolan</span>
          <span class="meta-dot">·</span>
          <span>Mar 6, 2025</span>
          <span class="meta-dot">·</span>
          <span>8 min read</span>
        </div>
        <a href="#" class="read-more">Read Story →</a>
      </div>
    </div>

    <!-- LATEST ARTICLES -->
    <div class="section-label">
      Latest Stories
      <a href="#">View all →</a>
    </div>
    <div class="article-grid">

      <div class="article-card">
        <div class="article-img" style="background:#D4CEC4">
          <div class="article-img-inner">[Image]</div>
        </div>
        <span class="cat-tag">Culture</span>
        <a href="#" class="article-title">Why Slow Cinema Is Having a Major Comeback</a>
        <p class="article-excerpt">Film festivals from Cannes to Sundance are championing a new generation of directors who prize patience over pace.</p>
        <div class="article-meta">Sara Lin · Mar 5, 2025 · 5 min</div>
      </div>

      <div class="article-card">
        <div class="article-img" style="background:#C8D0CC">
          <div class="article-img-inner">[Image]</div>
        </div>
        <span class="cat-tag">Science</span>
        <a href="#" class="article-title">Inside the Lab Trying to Grow Coral at Scale</a>
        <p class="article-excerpt">A small team in Florida believes coral farming could be the last line of defense for dying reef ecosystems.</p>
        <div class="article-meta">Tom Reeves · Mar 4, 2025 · 6 min</div>
      </div>

      <div class="article-card">
        <div class="article-img" style="background:#D8D0C0">
          <div class="article-img-inner">[Image]</div>
        </div>
        <span class="cat-tag">Business</span>
        <a href="#" class="article-title">The New Rules of Building a Brand in Public</a>
        <p class="article-excerpt">Transparency used to be a risk. Now the founders who share everything are the ones audiences trust most.</p>
        <div class="article-meta">Priya Shah · Mar 3, 2025 · 4 min</div>
      </div>

    </div>

    <!-- MORE READING -->
    <div class="section-label">
      More to Read
      <a href="#">All articles →</a>
    </div>
    <div class="article-list">

      <div class="article-row">
        <div class="row-img" style="background:#DDD6CA">
          <div class="row-img-inner">[Img]</div>
        </div>
        <div class="row-body">
          <span class="cat-tag">Opinion</span>
          <a href="#" class="row-title">We Need to Talk About the Loneliness Crisis in Young Men</a>
          <p class="row-excerpt">The numbers are stark, and the solutions are harder than anyone wants to admit.</p>
          <div class="row-meta">Marcus Webb · Mar 2, 2025 · 7 min read</div>
        </div>
      </div>

      <div class="article-row">
        <div class="row-img" style="background:#C8D4D0">
          <div class="row-img-inner">[Img]</div>
        </div>
        <div class="row-body">
          <span class="cat-tag">Travel</span>
          <a href="#" class="row-title">The Forgotten Villages of Northern Portugal That Tourists Haven't Found Yet</a>
          <p class="row-excerpt">Before the crowds arrive, there are still corners of Europe untouched by mass tourism.</p>
          <div class="row-meta">Elena Sousa · Mar 1, 2025 · 5 min read</div>
        </div>
      </div>

      <div class="article-row">
        <div class="row-img" style="background:#D0CCC4">
          <div class="row-img-inner">[Img]</div>
        </div>
        <div class="row-body">
          <span class="cat-tag">Food</span>
          <a href="#" class="row-title">Fermentation Is the Flavour of the Decade — Here's Why</a>
          <p class="row-excerpt">From kimchi to kombucha, the ancient art of fermentation is transforming modern cooking.</p>
          <div class="row-meta">Chloe Park · Feb 28, 2025 · 4 min read</div>
        </div>
      </div>

      <div class="article-row">
        <div class="row-img" style="background:#D4D0C8">
          <div class="row-img-inner">[Img]</div>
        </div>
        <div class="row-body">
          <span class="cat-tag">World</span>
          <a href="#" class="row-title">A Small Country's Big Bet on Universal Basic Income</a>
          <p class="row-excerpt">Two years in, the results are surprising even the economists who designed the experiment.</p>
          <div class="row-meta">Ahmad Noor · Feb 27, 2025 · 9 min read</div>
        </div>
      </div>

    </div>

    <!-- PAGINATION -->
    <div class="pagination">
      <button class="page-btn active">1</button>
      <button class="page-btn">2</button>
      <button class="page-btn">3</button>
      <button class="page-btn">4</button>
      <button class="page-btn">5</button>
      <button class="page-btn">→</button>
    </div>

  </main>

  <!-- SIDEBAR -->
  <aside class="sidebar">

    <!-- Popular -->
    <div class="sidebar-widget">
      <div class="widget-title">Most Read</div>
      <div class="popular-list">
        <div class="popular-item">
          <div class="popular-num">01</div>
          <div>
            <div class="popular-title">The Hidden Cost of Overnight Shipping</div>
            <div class="popular-meta">Business · 12k reads</div>
          </div>
        </div>
        <div class="popular-item">
          <div class="popular-num">02</div>
          <div>
            <div class="popular-title">What It Takes to Raise Kids Without Screens</div>
            <div class="popular-meta">Culture · 9.4k reads</div>
          </div>
        </div>
        <div class="popular-item">
          <div class="popular-num">03</div>
          <div>
            <div class="popular-title">Is Your City Prepared for the Next Big Flood?</div>
            <div class="popular-meta">World · 8.1k reads</div>
          </div>
        </div>
        <div class="popular-item">
          <div class="popular-num">04</div>
          <div>
            <div class="popular-title">The New Science of Forgetting on Purpose</div>
            <div class="popular-meta">Science · 7.7k reads</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="sidebar-widget newsletter-widget">
      <div class="widget-title">Newsletter</div>
      <p>Get the week's best stories delivered to your inbox every Sunday morning.</p>
      <input type="text" placeholder="Your name"/>
      <input type="email" placeholder="Your email address"/>
      <button>Subscribe Free</button>
    </div>

    <!-- Tags -->
    <div class="sidebar-widget">
      <div class="widget-title">Browse Topics</div>
      <div class="tag-cloud">
        <span class="tag">Tech</span>
        <span class="tag">Culture</span>
        <span class="tag">Science</span>
        <span class="tag">Opinion</span>
        <span class="tag">Travel</span>
        <span class="tag">Food</span>
        <span class="tag">Business</span>
        <span class="tag">World</span>
        <span class="tag">Design</span>
        <span class="tag">Health</span>
        <span class="tag">Climate</span>
      </div>
    </div>

    <!-- Social -->
    <div class="sidebar-widget">
      <div class="widget-title">Follow Us</div>
      <div class="social-list">
        <div class="social-item">
          <span class="social-name">Twitter / X</span>
          <span class="social-count">24.5k</span>
        </div>
        <div class="social-item">
          <span class="social-name">Instagram</span>
          <span class="social-count">18.2k</span>
        </div>
        <div class="social-item">
          <span class="social-name">Newsletter</span>
          <span class="social-count">11.8k</span>
        </div>
        <div class="social-item">
          <span class="social-name">YouTube</span>
          <span class="social-count">6.3k</span>
        </div>
      </div>
    </div>

  </aside>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div>
      <a href="#" class="footer-logo">Ink<span style="color:var(--accent)">well</span></a>
      <p class="footer-about">Independent journalism for curious minds. We cover the stories that matter, without the noise.</p>
    </div>
    <div class="footer-col">
      <h5>Sections</h5>
      <ul>
        <li><a href="#">World</a></li>
        <li><a href="#">Technology</a></li>
        <li><a href="#">Culture</a></li>
        <li><a href="#">Science</a></li>
        <li><a href="#">Opinion</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Write for Us</a></li>
        <li><a href="#">Advertise</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Support</h5>
      <ul>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">RSS Feed</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Inkwell Media. All rights reserved.</span>
    <button class="theme-toggle" id="themeBtn">☀ Toggle Dark Mode</button>
  </div>
</footer>

<script>
  // Dark mode toggle
  const btn = document.getElementById('themeBtn');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btn.textContent = document.body.classList.contains('dark') ? '☀ Light Mode' : '☾ Dark Mode';
  });

  // Active nav on click
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', e => {
      document.querySelectorAll('nav a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
    });
  });

  // Pagination
  document.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
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
function copyCODE107() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MAST — Creative Agency Template</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:wght@300;400;500&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<style>
  :root {
    --ink:     #0e0c0a;
    --paper:   #f4f0e8;
    --cream:   #ede8dc;
    --rule:    #0e0c0a;
    --red:     #c0392b;
    --muted:   #6b6560;
    --light:   #b8b0a4;
    --mono:    'DM Mono', monospace;
    --serif:   'Playfair Display', serif;
    --body:    'Libre Baskerville', serif;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: var(--paper);
    color: var(--ink);
    font-family: var(--body);
    font-size: 16px;
    overflow-x: hidden;
    cursor: none;
  }

  /* ── CUSTOM CURSOR ── */
  #cur { position: fixed; top: 0; left: 0; z-index: 9999; pointer-events: none; }
  #cur-cross {
    position: absolute; transform: translate(-50%,-50%);
    width: 22px; height: 22px;
    transition: transform .08s linear;
  }
  #cur-cross::before, #cur-cross::after {
    content: ''; position: absolute; background: var(--ink);
  }
  #cur-cross::before { width: 1px; height: 100%; left: 50%; top: 0; }
  #cur-cross::after  { height: 1px; width: 100%; top: 50%; left: 0; }
  #cur-label {
    position: absolute; transform: translate(6px, 6px);
    font-family: var(--mono); font-size: 8px; letter-spacing: .12em;
    color: var(--ink); white-space: nowrap; opacity: 0;
    transition: opacity .2s;
  }
  body:has(a:hover) #cur-label,
  body:has(button:hover) #cur-label { opacity: 1; }

  /* ── MASTHEAD ── */
  header {
    border-bottom: 3px solid var(--ink);
    padding: 0 48px;
  }
  .masthead-top {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 0;
    border-bottom: 1px solid var(--ink);
  }
  .masthead-meta {
    font-family: var(--mono); font-size: .62rem; letter-spacing: .15em;
    color: var(--muted); text-transform: uppercase;
  }
  .masthead-tagline {
    font-family: var(--mono); font-size: .58rem; letter-spacing: .2em;
    text-transform: uppercase; color: var(--muted);
    border: 1px solid var(--muted); padding: 4px 10px;
  }
  .masthead-title-row {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 20px 0 12px;
    gap: 20px;
  }
  .masthead-side-text {
    font-family: var(--mono); font-size: .6rem;
    letter-spacing: .12em; color: var(--muted);
    line-height: 1.6; text-transform: uppercase;
  }
  .masthead-side-text.right { text-align: right; }
  .site-name {
    font-family: var(--serif); font-size: clamp(4rem, 10vw, 9rem);
    font-weight: 900; letter-spacing: -.02em;
    text-align: center; line-height: .92;
    user-select: none;
  }
  .site-name em { font-style: italic; color: var(--red); }
  .masthead-rule {
    height: 1px; background: var(--ink); margin: 0;
  }

  /* NAV */
  nav {
    display: flex; align-items: stretch;
    border-top: 1px solid var(--ink);
  }
  .nav-inner {
    display: flex; align-items: center;
    flex: 1; gap: 0;
    list-style: none;
  }
  .nav-inner li { border-right: 1px solid var(--ink); }
  .nav-inner li:first-child { border-left: 1px solid var(--ink); }
  .nav-inner a {
    display: block;
    font-family: var(--mono); font-size: .64rem;
    letter-spacing: .18em; text-transform: uppercase;
    color: var(--ink); text-decoration: none;
    padding: 12px 22px;
    transition: background .2s, color .2s;
  }
  .nav-inner a:hover { background: var(--ink); color: var(--paper); }
  .nav-cta-wrap {
    margin-left: auto;
    border-left: 1px solid var(--ink);
  }
  .nav-cta {
    display: flex; align-items: center;
    font-family: var(--mono); font-size: .64rem;
    letter-spacing: .18em; text-transform: uppercase;
    background: var(--red); color: var(--paper);
    padding: 12px 28px; height: 100%;
    text-decoration: none;
    transition: background .2s;
  }
  .nav-cta:hover { background: #a93226; }

  /* STICKY NAV CLONE */
  .sticky-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: var(--paper);
    border-bottom: 2px solid var(--ink);
    transform: translateY(-100%);
    transition: transform .35s ease;
  }
  .sticky-nav.visible { transform: translateY(0); }
  .sticky-nav-inner {
    display: flex; align-items: center;
    justify-content: space-between;
    padding: 12px 48px;
  }
  .sticky-logo {
    font-family: var(--serif); font-size: 1.6rem; font-weight: 900;
    text-decoration: none; color: var(--ink); letter-spacing: -.02em;
  }
  .sticky-logo em { font-style: italic; color: var(--red); }
  .sticky-links {
    display: flex; gap: 32px; list-style: none;
  }
  .sticky-links a {
    font-family: var(--mono); font-size: .6rem;
    letter-spacing: .15em; text-transform: uppercase;
    color: var(--muted); text-decoration: none;
    transition: color .2s;
  }
  .sticky-links a:hover { color: var(--ink); }
  .sticky-cta {
    font-family: var(--mono); font-size: .6rem;
    letter-spacing: .15em; text-transform: uppercase;
    background: var(--ink); color: var(--paper);
    padding: 9px 20px; text-decoration: none;
    transition: background .2s;
  }
  .sticky-cta:hover { background: var(--red); }

  /* ── LAYOUT HELPERS ── */
  .col-rule { border-right: 1px solid var(--ink); }
  .row-rule { border-top: 1px solid var(--ink); }
  .section-flag {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .25em; text-transform: uppercase;
    color: var(--paper); background: var(--ink);
    padding: 5px 12px; margin-bottom: 20px;
  }
  .section-flag.red { background: var(--red); }

  /* ── HERO ── */
  .hero {
    padding: 0 48px;
    border-bottom: 3px solid var(--ink);
    display: grid;
    grid-template-columns: 1.1fr 1px 0.9fr;
    min-height: 86vh;
  }
  .hero-left {
    padding: 56px 52px 56px 0;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .hero-divider { background: var(--ink); }
  .hero-right {
    padding: 56px 0 56px 52px;
    display: flex; flex-direction: column; justify-content: space-between;
  }

  .hero-issue {
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .2em; text-transform: uppercase; color: var(--muted);
    margin-bottom: 28px;
  }
  .hero-headline {
    font-family: var(--serif);
    font-size: clamp(2.8rem, 6vw, 5.6rem);
    font-weight: 900; line-height: .95;
    letter-spacing: -.02em;
    margin-bottom: 28px;
  }
  .hero-headline em { font-style: italic; color: var(--red); }
  .hero-deck {
    font-size: .95rem; line-height: 1.75;
    color: var(--muted); max-width: 420px;
    margin-bottom: 44px;
    border-left: 2px solid var(--red);
    padding-left: 18px;
  }
  .hero-actions {
    display: flex; align-items: center; gap: 24px;
  }
  .btn-ink {
    font-family: var(--mono); font-size: .62rem;
    letter-spacing: .18em; text-transform: uppercase;
    background: var(--ink); color: var(--paper);
    padding: 14px 28px; text-decoration: none;
    transition: background .2s;
    display: inline-block;
  }
  .btn-ink:hover { background: var(--red); }
  .btn-ghost {
    font-family: var(--mono); font-size: .62rem;
    letter-spacing: .18em; text-transform: uppercase;
    color: var(--muted); text-decoration: none;
    transition: color .2s;
    display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-ghost:hover { color: var(--ink); }

  /* Hero right side */
  .hero-right-label {
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .2em; text-transform: uppercase;
    color: var(--light); margin-bottom: 20px;
  }
  .hero-pullquote {
    font-family: var(--serif); font-size: clamp(1.4rem, 3vw, 2.2rem);
    font-weight: 400; font-style: italic;
    line-height: 1.35; color: var(--ink);
    border-top: 2px solid var(--ink);
    border-bottom: 1px solid var(--ink);
    padding: 24px 0;
    margin-bottom: 36px;
  }
  .hero-pullquote strong { font-style: normal; color: var(--red); }
  .hero-stats {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1px; background: var(--ink);
    border: 1px solid var(--ink);
  }
  .hero-stat {
    background: var(--paper); padding: 20px 22px;
    transition: background .2s;
  }
  .hero-stat:hover { background: var(--cream); }
  .hero-stat-num {
    font-family: var(--serif); font-size: 2.2rem;
    font-weight: 900; line-height: 1; color: var(--red);
    margin-bottom: 6px;
  }
  .hero-stat-label {
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .15em; text-transform: uppercase; color: var(--muted);
  }
  .hero-scroll-hint {
    font-family: var(--mono); font-size: .56rem;
    letter-spacing: .2em; text-transform: uppercase; color: var(--light);
    display: flex; align-items: center; gap: 10px; margin-top: 32px;
  }
  .hero-scroll-hint::before {
    content: ''; display: block;
    width: 1px; height: 28px;
    background: linear-gradient(to bottom, var(--ink), transparent);
    animation: tickDown 1.4s ease-in-out infinite;
  }
  @keyframes tickDown { 0%,100%{transform:scaleY(1);opacity:.5} 50%{transform:scaleY(1.3);opacity:1} }

  /* ── TICKER ── */
  .ticker-wrap {
    overflow: hidden;
    background: var(--ink); color: var(--paper);
    border-bottom: 1px solid rgba(255,255,255,.1);
    padding: 10px 0;
  }
  .ticker-track {
    display: flex; gap: 0;
    animation: ticker 28s linear infinite;
    white-space: nowrap;
  }
  .ticker-track:hover { animation-play-state: paused; }
  .ticker-item {
    display: inline-flex; align-items: center; gap: 32px;
    font-family: var(--mono); font-size: .62rem;
    letter-spacing: .14em; text-transform: uppercase;
    padding: 0 32px; flex-shrink: 0;
  }
  .ticker-dot { width: 4px; height: 4px; background: var(--red); border-radius: 50%; flex-shrink: 0; }
  @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

  /* ── ABOUT / MANIFESTO ── */
  .manifesto {
    padding: 80px 48px;
    display: grid;
    grid-template-columns: 200px 1px 1fr 1px 260px;
    gap: 0;
    border-bottom: 3px solid var(--ink);
    align-items: start;
  }
  .manifesto-index {
    padding-right: 40px;
    padding-top: 6px;
  }
  .manifesto-index-num {
    font-family: var(--serif); font-size: 5rem;
    font-weight: 900; color: var(--cream); line-height: 1;
    margin-bottom: 12px;
  }
  .manifesto-index-label {
    font-family: var(--mono); font-size: .56rem;
    letter-spacing: .2em; text-transform: uppercase; color: var(--muted);
  }
  .col-div { background: var(--ink); align-self: stretch; margin: 0 40px; }
  .manifesto-body { }
  .manifesto-title {
    font-family: var(--serif);
    font-size: clamp(2rem, 4vw, 3.6rem);
    font-weight: 900; line-height: 1.0;
    letter-spacing: -.02em; margin-bottom: 32px;
  }
  .manifesto-title em { font-style: italic; color: var(--red); }
  .manifesto-text {
    column-count: 2; column-gap: 44px;
    font-size: .9rem; line-height: 1.85; color: var(--muted);
  }
  .manifesto-text p + p { margin-top: 16px; }
  .manifesto-text p:first-child::first-letter {
    font-family: var(--serif); font-size: 3.5rem; font-weight: 900;
    float: left; line-height: .8; margin: 8px 10px 0 0;
    color: var(--red);
  }
  .manifesto-aside { padding-left: 40px; }
  .aside-rule { height: 2px; background: var(--ink); margin-bottom: 20px; }
  .aside-label {
    font-family: var(--mono); font-size: .56rem;
    letter-spacing: .2em; text-transform: uppercase; color: var(--muted);
    margin-bottom: 14px;
  }
  .aside-quote {
    font-family: var(--serif); font-size: 1.1rem;
    font-style: italic; line-height: 1.5; color: var(--ink);
    margin-bottom: 20px;
  }
  .aside-sig {
    font-family: var(--mono); font-size: .6rem;
    letter-spacing: .1em; color: var(--muted);
  }

  /* ── SERVICES ── */
  .services {
    padding: 0 48px;
    border-bottom: 3px solid var(--ink);
  }
  .services-head {
    display: flex; align-items: baseline; justify-content: space-between;
    border-bottom: 1px solid var(--ink);
    padding: 28px 0 20px;
  }
  .services-head h2 {
    font-family: var(--serif); font-size: 1.7rem;
    font-weight: 900; letter-spacing: -.01em;
  }
  .services-head-right {
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .18em; text-transform: uppercase; color: var(--muted);
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: var(--ink);
    gap: 1px;
    border: 1px solid var(--ink);
    margin: 0 -0px;
  }
  .svc {
    background: var(--paper);
    padding: 44px 36px;
    position: relative; overflow: hidden;
    transition: background .25s;
    cursor: none;
  }
  .svc:hover { background: var(--cream); }
  .svc-num {
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .2em; color: var(--light);
    margin-bottom: 28px;
  }
  .svc-name {
    font-family: var(--serif); font-size: 1.4rem;
    font-weight: 700; line-height: 1.15;
    margin-bottom: 18px;
  }
  .svc-desc {
    font-size: .8rem; line-height: 1.75; color: var(--muted);
    margin-bottom: 28px;
  }
  .svc-link {
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .15em; text-transform: uppercase;
    color: var(--ink); text-decoration: none;
    border-bottom: 1px solid var(--ink);
    padding-bottom: 2px;
    transition: color .2s, border-color .2s;
  }
  .svc:hover .svc-link { color: var(--red); border-color: var(--red); }
  .svc-tag {
    position: absolute; top: 0; right: 0;
    background: var(--red); color: var(--paper);
    font-family: var(--mono); font-size: .5rem;
    letter-spacing: .15em; text-transform: uppercase;
    padding: 4px 10px;
    opacity: 0; transform: translateY(-4px);
    transition: opacity .2s, transform .2s;
  }
  .svc:hover .svc-tag { opacity: 1; transform: translateY(0); }

  /* ── WORK / PROJECTS ── */
  .work {
    padding: 0 48px;
    border-bottom: 3px solid var(--ink);
  }
  .work-head {
    display: grid; grid-template-columns: 1fr auto;
    align-items: baseline;
    border-bottom: 1px solid var(--ink);
    padding: 28px 0 20px;
  }
  .work-head h2 {
    font-family: var(--serif); font-size: 1.7rem; font-weight: 900;
  }
  .work-head a {
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .18em; text-transform: uppercase;
    color: var(--muted); text-decoration: none;
    transition: color .2s;
  }
  .work-head a:hover { color: var(--red); }
  /* Work items as editorial entries */
  .work-list { }
  .work-item {
    display: grid;
    grid-template-columns: 72px 1fr 160px 120px;
    align-items: center; gap: 28px;
    padding: 22px 0;
    border-bottom: 1px solid var(--ink);
    text-decoration: none; color: var(--ink);
    transition: background .2s;
    cursor: none;
    position: relative;
    overflow: hidden;
  }
  .work-item::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 0; background: var(--cream);
    transition: width .3s ease; z-index: 0;
  }
  .work-item:hover::before { width: 100%; }
  .work-item > * { position: relative; z-index: 1; }
  .work-num {
    font-family: var(--mono); font-size: .62rem;
    letter-spacing: .1em; color: var(--light);
  }
  .work-name {
    font-family: var(--serif); font-size: 1.35rem;
    font-weight: 700; letter-spacing: -.01em;
  }
  .work-name em { font-style: italic; font-weight: 400; color: var(--muted); font-size: 1rem; }
  .work-tags {
    display: flex; gap: 6px; flex-wrap: wrap;
  }
  .tag {
    font-family: var(--mono); font-size: .52rem;
    letter-spacing: .12em; text-transform: uppercase;
    border: 1px solid var(--ink);
    padding: 3px 8px; color: var(--muted);
  }
  .work-year {
    font-family: var(--mono); font-size: .6rem;
    letter-spacing: .1em; color: var(--light);
    text-align: right;
    display: flex; align-items: center; justify-content: flex-end; gap: 10px;
  }
  .work-arrow {
    opacity: 0; transform: translateX(-6px);
    transition: opacity .2s, transform .2s;
    color: var(--red);
  }
  .work-item:hover .work-arrow { opacity: 1; transform: translateX(0); }

  /* ── PROCESS ── */
  .process {
    padding: 80px 48px;
    border-bottom: 3px solid var(--ink);
    background: var(--ink); color: var(--paper);
  }
  .process-head {
    display: flex; align-items: baseline; justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,.15);
    padding-bottom: 20px; margin-bottom: 56px;
  }
  .process-head h2 {
    font-family: var(--serif); font-size: 1.7rem; font-weight: 900;
  }
  .process-head span {
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .18em; text-transform: uppercase;
    color: rgba(255,255,255,.4);
  }
  .process-steps {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: rgba(255,255,255,.1);
    border: 1px solid rgba(255,255,255,.1);
  }
  .p-step {
    background: var(--ink); padding: 40px 32px;
    transition: background .25s;
  }
  .p-step:hover { background: #1e1b17; }
  .p-step-num {
    font-family: var(--serif); font-size: 3.5rem;
    font-weight: 900; color: rgba(255,255,255,.08);
    line-height: 1; margin-bottom: 20px;
  }
  .p-step-title {
    font-family: var(--serif); font-size: 1.2rem;
    font-weight: 700; margin-bottom: 14px;
    border-left: 2px solid var(--red); padding-left: 12px;
  }
  .p-step-desc {
    font-size: .8rem; line-height: 1.75;
    color: rgba(255,255,255,.5);
  }

  /* ── TESTIMONIALS ── */
  .testimonials {
    padding: 0 48px;
    border-bottom: 3px solid var(--ink);
  }
  .t-head {
    border-bottom: 1px solid var(--ink);
    padding: 28px 0 20px;
  }
  .t-head h2 {
    font-family: var(--serif); font-size: 1.7rem; font-weight: 900;
  }
  .t-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    background: var(--ink); gap: 1px;
    border-left: 1px solid var(--ink);
    border-right: 1px solid var(--ink);
  }
  .t-card {
    background: var(--paper); padding: 44px 36px;
    transition: background .2s;
  }
  .t-card:hover { background: var(--cream); }
  .t-mark {
    font-family: var(--serif); font-size: 4rem;
    font-weight: 900; color: var(--red);
    line-height: .8; margin-bottom: 20px;
    display: block;
  }
  .t-text {
    font-family: var(--serif); font-size: .95rem;
    font-style: italic; line-height: 1.7;
    margin-bottom: 28px; color: var(--ink);
  }
  .t-author {
    font-family: var(--mono); font-size: .58rem;
    letter-spacing: .12em; text-transform: uppercase; color: var(--muted);
    border-top: 1px solid var(--ink); padding-top: 18px;
  }
  .t-name { color: var(--ink); margin-bottom: 4px; }

  /* ── CONTACT ── */
  .contact {
    padding: 80px 48px;
    border-bottom: 3px solid var(--ink);
    display: grid; grid-template-columns: 1fr 1px 1fr;
    gap: 0;
  }
  .contact-left { padding-right: 72px; }
  .contact-div { background: var(--ink); margin: 0 72px; }
  .contact-right { }
  .contact-headline {
    font-family: var(--serif);
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 900; line-height: .95;
    letter-spacing: -.02em; margin-bottom: 28px;
  }
  .contact-headline em { font-style: italic; color: var(--red); }
  .contact-body {
    font-size: .88rem; line-height: 1.8; color: var(--muted);
    margin-bottom: 44px;
  }
  .contact-info-list { list-style: none; }
  .contact-info-list li {
    display: flex; justify-content: space-between;
    align-items: baseline;
    padding: 14px 0;
    border-bottom: 1px solid var(--ink);
    font-size: .82rem;
  }
  .contact-info-list .ci-label {
    font-family: var(--mono); font-size: .56rem;
    letter-spacing: .15em; text-transform: uppercase; color: var(--light);
  }
  .contact-info-list .ci-val { font-family: var(--body); color: var(--ink); }

  /* FORM */
  .form-label {
    display: block; font-family: var(--mono); font-size: .56rem;
    letter-spacing: .18em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 8px;
  }
  .form-input,
  .form-select,
  .form-textarea {
    width: 100%; background: transparent;
    border: none; border-bottom: 1px solid var(--ink);
    color: var(--ink); font-family: var(--body);
    font-size: .88rem; padding: 10px 0;
    outline: none; appearance: none;
    transition: border-color .2s;
    margin-bottom: 28px;
  }
  .form-input:focus, .form-select:focus, .form-textarea:focus {
    border-color: var(--red);
  }
  .form-select option { background: var(--paper); }
  .form-textarea { resize: none; height: 100px; }
  .form-two { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .form-submit {
    width: 100%; background: var(--ink); color: var(--paper);
    border: none; font-family: var(--mono); font-size: .64rem;
    letter-spacing: .22em; text-transform: uppercase;
    padding: 16px; cursor: none;
    transition: background .2s;
  }
  .form-submit:hover { background: var(--red); }

  /* ── FOOTER ── */
  footer {
    padding: 0 48px;
    border-bottom: 3px solid var(--ink);
  }
  .footer-top {
    display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 1px; background: var(--ink);
    border: 1px solid var(--ink);
    border-top: none;
  }
  .footer-col {
    background: var(--paper); padding: 44px 36px;
    transition: background .2s;
  }
  .footer-col:hover { background: var(--cream); }
  .footer-brand-name {
    font-family: var(--serif); font-size: 2.4rem;
    font-weight: 900; letter-spacing: -.02em;
    line-height: 1; margin-bottom: 16px;
    display: block; text-decoration: none; color: var(--ink);
  }
  .footer-brand-name em { font-style: italic; color: var(--red); }
  .footer-brand-desc {
    font-size: .78rem; line-height: 1.7; color: var(--muted);
    margin-bottom: 28px;
  }
  .footer-socials { display: flex; gap: 8px; flex-wrap: wrap; }
  .fsoc {
    font-family: var(--mono); font-size: .56rem;
    letter-spacing: .12em; text-transform: uppercase;
    border: 1px solid var(--ink);
    padding: 6px 12px; color: var(--ink); text-decoration: none;
    transition: all .2s;
  }
  .fsoc:hover { background: var(--ink); color: var(--paper); }
  .footer-col-title {
    font-family: var(--mono); font-size: .56rem;
    letter-spacing: .22em; text-transform: uppercase; color: var(--muted);
    margin-bottom: 20px;
    border-bottom: 1px solid var(--ink); padding-bottom: 12px;
  }
  .footer-links { list-style: none; }
  .footer-links li { margin-bottom: 10px; }
  .footer-links a {
    font-size: .8rem; color: var(--ink); text-decoration: none;
    font-family: var(--body);
    transition: color .2s;
  }
  .footer-links a:hover { color: var(--red); }
  .footer-bottom {
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 0;
    border-top: 1px solid var(--ink);
  }
  .footer-copy {
    font-family: var(--mono); font-size: .56rem;
    letter-spacing: .12em; color: var(--light);
  }
  .footer-bottom-links { display: flex; gap: 20px; list-style: none; }
  .footer-bottom-links a {
    font-family: var(--mono); font-size: .54rem;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--light); text-decoration: none;
    transition: color .2s;
  }
  .footer-bottom-links a:hover { color: var(--ink); }

  /* ── REVEAL ANIMATIONS ── */
  .reveal {
    opacity: 0; transform: translateY(24px);
    transition: opacity .75s ease, transform .75s ease;
  }
  .reveal.on { opacity: 1; transform: translateY(0); }
  .reveal-d1 { transition-delay: .08s; }
  .reveal-d2 { transition-delay: .16s; }
  .reveal-d3 { transition-delay: .24s; }
  .reveal-d4 { transition-delay: .32s; }

  /* ── MOBILE ── */
  @media (max-width: 960px) {
    header, .hero, .manifesto, .services, .work, .process, .testimonials, .contact, footer { padding-left: 24px; padding-right: 24px; }
    .hero { grid-template-columns: 1fr; min-height: auto; }
    .hero-divider { display: none; }
    .hero-right { padding: 0 0 48px; }
    .manifesto { grid-template-columns: 1fr; }
    .col-div { display: none; }
    .manifesto-aside { padding-left: 0; padding-top: 32px; }
    .manifesto-text { column-count: 1; }
    .manifesto-index { padding-right: 0; margin-bottom: 24px; }
    .services-grid { grid-template-columns: 1fr 1fr; }
    .work-item { grid-template-columns: 48px 1fr; }
    .work-tags, .work-year { display: none; }
    .process-steps { grid-template-columns: 1fr 1fr; }
    .t-grid { grid-template-columns: 1fr; }
    .contact { grid-template-columns: 1fr; }
    .contact-div { display: none; }
    .contact-left { padding-right: 0; margin-bottom: 48px; }
    .footer-top { grid-template-columns: 1fr 1fr; }
    .masthead-title-row { grid-template-columns: 1fr; }
    .masthead-side-text { display: none; }
    .nav-inner { flex-wrap: wrap; }
    .sticky-links { display: none; }
  }
  @media (max-width: 600px) {
    .services-grid { grid-template-columns: 1fr; }
    .process-steps { grid-template-columns: 1fr; }
    .footer-top { grid-template-columns: 1fr; }
    .form-two { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<!-- CURSOR -->
<div id="cur">
  <div id="cur-cross"></div>
  <div id="cur-label">VIEW</div>
</div>

<!-- STICKY NAV -->
<div class="sticky-nav" id="sticky">
  <div class="sticky-nav-inner">
    <a href="#" class="sticky-logo">MA<em>ST</em></a>
    <ul class="sticky-links">
      <li><a href="#about">Manifesto</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="#contact" class="sticky-cta">Start a Project</a>
  </div>
</div>

<!-- ════════════════ MASTHEAD ════════════════ -->
<header>
  <div class="masthead-top">
    <div class="masthead-meta">Vol. XII — Issue 04 — Est. 2012</div>
    <div class="masthead-tagline">Strategy · Design · Growth</div>
    <div class="masthead-meta" id="live-date">Loading…</div>
  </div>
  <div class="masthead-title-row">
    <div class="masthead-side-text">
      Creative Agency<br>for the Ambitious<br>& the Audacious
    </div>
    <div class="site-name">MA<em>ST</em></div>
    <div class="masthead-side-text right">
      New York · London<br>São Paulo · Tokyo<br>studio@mast.co
    </div>
  </div>
  <div class="masthead-rule"></div>
  <nav>
    <ul class="nav-inner">
      <li><a href="#about">Manifesto</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#process">Process</a></li>
      <li><a href="#testimonials">Clients</a></li>
    </ul>
    <div class="nav-cta-wrap">
      <a href="#contact" class="nav-cta">Start a Project →</a>
    </div>
  </nav>
</header>

<!-- ════════════════ HERO ════════════════ -->
<section class="hero">
  <div class="hero-left">
    <div>
      <div class="hero-issue">Lead Story — Creative Direction</div>
      <h1 class="hero-headline">
        We Build<br>
        Brands That<br>
        <em>Demand</em><br>
        Attention
      </h1>
      <p class="hero-deck">
        MAST is a full-service creative agency working at the intersection of strategy, design, and culture. We don't make pretty things — we make things that perform.
      </p>
    </div>
    <div>
      <div class="hero-actions">
        <a href="#work" class="btn-ink">See Our Work</a>
        <a href="#about" class="btn-ghost">Read Manifesto →</a>
      </div>
      <div class="hero-scroll-hint">Scroll to explore</div>
    </div>
  </div>

  <div class="hero-divider"></div>

  <div class="hero-right">
    <div>
      <div class="hero-right-label">Editorial — Agency Report 2025</div>
      <p class="hero-pullquote">
        "The best creative work is the kind that makes your competitors <strong>nervous.</strong>"
      </p>
      <div class="hero-stats">
        <div class="hero-stat">
          <div class="hero-stat-num">340+</div>
          <div class="hero-stat-label">Brands Served</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">98%</div>
          <div class="hero-stat-label">Client Retention</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">12+</div>
          <div class="hero-stat-label">Years Active</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">4×</div>
          <div class="hero-stat-label">Award Winner</div>
        </div>
      </div>
    </div>
    <div style="margin-top:32px;">
      <span class="section-flag red">↓ Now Accepting Briefs for Q3 2025</span>
    </div>
  </div>
</section>

<!-- TICKER -->
<div class="ticker-wrap">
  <div class="ticker-track" id="ticker">
    <!-- JS duplicated below -->
  </div>
</div>

<!-- ════════════════ MANIFESTO ════════════════ -->
<section class="manifesto" id="about">
  <div class="manifesto-index reveal">
    <div class="manifesto-index-num">§1</div>
    <div class="manifesto-index-label">About the Studio</div>
  </div>
  <div class="col-div"></div>
  <div class="manifesto-body">
    <h2 class="manifesto-title reveal">
      Against<br>the <em>Ordinary</em>
    </h2>
    <div class="manifesto-text reveal reveal-d1">
      <p>MAST was built on a single conviction: that ordinary creative work is a waste of everyone's time. We exist for brands that are serious about standing out — in their category, in their culture, and in the minds of the people they're trying to reach.</p>
      <p>Our studio brings together strategists, writers, art directors, developers, and brand architects under one roof. We work as an integrated unit, not a series of handoffs — because the best work happens when strategy and creativity are in constant conversation.</p>
      <p>We've had the privilege of working with startups that went from zero to unicorn, heritage brands that needed to reclaim their edge, and category disruptors who needed the world to pay attention. What they all had in common was a refusal to be boring.</p>
    </div>
  </div>
  <div class="col-div"></div>
  <div class="manifesto-aside reveal reveal-d2">
    <div class="aside-rule"></div>
    <div class="aside-label">Founding Principle</div>
    <p class="aside-quote">"We refuse to make work that disappears into the noise. Every project we touch must earn its place in the world."</p>
    <div class="aside-sig">— Declan Mast, Founder & ECD</div>
  </div>
</section>

<!-- ════════════════ SERVICES ════════════════ -->
<section class="services" id="services">
  <div class="services-head">
    <h2>What We Do</h2>
    <span class="services-head-right">Full-Service Creative</span>
  </div>
  <div class="services-grid">
    <div class="svc reveal">
      <div class="svc-num">01 / 04</div>
      <div class="svc-name">Brand Strategy &amp; Identity</div>
      <p class="svc-desc">Positioning, naming, visual identity, and brand systems built from insight — not intuition alone. We excavate what makes you genuinely different.</p>
      <a href="#contact" class="svc-link">Enquire →</a>
      <div class="svc-tag">Most Popular</div>
    </div>
    <div class="svc reveal reveal-d1">
      <div class="svc-num">02 / 04</div>
      <div class="svc-name">Digital Design &amp; Web</div>
      <p class="svc-desc">Websites, digital campaigns, and interactive experiences engineered to convert, delight, and be remembered long after the tab is closed.</p>
      <a href="#contact" class="svc-link">Enquire →</a>
      <div class="svc-tag">Popular</div>
    </div>
    <div class="svc reveal reveal-d2">
      <div class="svc-num">03 / 04</div>
      <div class="svc-name">Content &amp; Editorial</div>
      <p class="svc-desc">Copy, campaigns, art direction, film, and photography that give your brand a voice so distinct, people know it's you before they see your logo.</p>
      <a href="#contact" class="svc-link">Enquire →</a>
      <div class="svc-tag">New</div>
    </div>
    <div class="svc reveal reveal-d3">
      <div class="svc-num">04 / 04</div>
      <div class="svc-name">Growth &amp; Performance</div>
      <p class="svc-desc">Paid media, SEO, and growth strategy woven into the creative process from day one — so beautiful work also actually works.</p>
      <a href="#contact" class="svc-link">Enquire →</a>
      <div class="svc-tag">Integrated</div>
    </div>
  </div>
</section>

<!-- ════════════════ WORK ════════════════ -->
<section class="work" id="work">
  <div class="work-head">
    <h2>Selected Work</h2>
    <a href="#">All Projects →</a>
  </div>
  <div class="work-list">
    <a class="work-item reveal" href="#">
      <div class="work-num">001</div>
      <div class="work-name">Harrow &amp; Co. <em>— Complete Brand Overhaul</em></div>
      <div class="work-tags">
        <span class="tag">Strategy</span>
        <span class="tag">Identity</span>
        <span class="tag">Web</span>
      </div>
      <div class="work-year">2025 <span class="work-arrow">→</span></div>
    </a>
    <a class="work-item reveal reveal-d1" href="#">
      <div class="work-num">002</div>
      <div class="work-name">Lune Collective <em>— Launch Campaign</em></div>
      <div class="work-tags">
        <span class="tag">Campaign</span>
        <span class="tag">Content</span>
      </div>
      <div class="work-year">2025 <span class="work-arrow">→</span></div>
    </a>
    <a class="work-item reveal reveal-d2" href="#">
      <div class="work-num">003</div>
      <div class="work-name">Fold Finance <em>— Fintech Identity System</em></div>
      <div class="work-tags">
        <span class="tag">Identity</span>
        <span class="tag">Digital</span>
        <span class="tag">Growth</span>
      </div>
      <div class="work-year">2024 <span class="work-arrow">→</span></div>
    </a>
    <a class="work-item reveal reveal-d3" href="#">
      <div class="work-num">004</div>
      <div class="work-name">Ossian Hotels <em>— Hospitality Brand</em></div>
      <div class="work-tags">
        <span class="tag">Strategy</span>
        <span class="tag">Identity</span>
      </div>
      <div class="work-year">2024 <span class="work-arrow">→</span></div>
    </a>
    <a class="work-item reveal reveal-d1" href="#">
      <div class="work-num">005</div>
      <div class="work-name">Verdant Foods <em>— Packaging &amp; Campaign</em></div>
      <div class="work-tags">
        <span class="tag">Campaign</span>
        <span class="tag">Packaging</span>
        <span class="tag">Content</span>
      </div>
      <div class="work-year">2023 <span class="work-arrow">→</span></div>
    </a>
  </div>
</section>

<!-- ════════════════ PROCESS ════════════════ -->
<section class="process" id="process">
  <div class="process-head">
    <h2>How We Work</h2>
    <span>Our Method</span>
  </div>
  <div class="process-steps">
    <div class="p-step reveal">
      <div class="p-step-num">I</div>
      <div class="p-step-title">Immersion</div>
      <p class="p-step-desc">We start by getting uncomfortably familiar with your business, your audience, your competitors, and the cultural forces shaping your category.</p>
    </div>
    <div class="p-step reveal reveal-d1">
      <div class="p-step-num">II</div>
      <div class="p-step-title">Strategy</div>
      <p class="p-step-desc">The idea that will guide everything. A clear positioning, a creative platform, and a rationale that everyone on your team can rally behind.</p>
    </div>
    <div class="p-step reveal reveal-d2">
      <div class="p-step-num">III</div>
      <div class="p-step-title">Creation</div>
      <p class="p-step-desc">Design, copy, code, and content brought to life with craft and intention. We present one strong direction — not fifteen mediocre ones.</p>
    </div>
    <div class="p-step reveal reveal-d3">
      <div class="p-step-num">IV</div>
      <div class="p-step-title">Launch &amp; Iterate</div>
      <p class="p-step-desc">We ship, we measure, and we improve. The relationship doesn't end at delivery — it deepens with every iteration.</p>
    </div>
  </div>
</section>

<!-- ════════════════ TESTIMONIALS ════════════════ -->
<section class="testimonials" id="testimonials">
  <div class="t-head">
    <h2>What Clients Say</h2>
  </div>
  <div class="t-grid">
    <div class="t-card reveal">
      <span class="t-mark">"</span>
      <p class="t-text">MAST didn't just refresh our brand — they completely reframed how we see ourselves. Six months post-launch, we've tripled inbound leads and our team is genuinely proud of how we show up.</p>
      <div class="t-author">
        <div class="t-name">PRIYA MENON</div>
        <div>CEO, Harrow & Co.</div>
      </div>
    </div>
    <div class="t-card reveal reveal-d1">
      <span class="t-mark">"</span>
      <p class="t-text">The team at MAST operates at a level you rarely encounter — rigorous, creatively brave, and genuinely invested in the outcome. They pushed us further than we would have gone alone, and they were right every time.</p>
      <div class="t-author">
        <div class="t-name">JAMES OLUSEGUN</div>
        <div>Founder, Lune Collective</div>
      </div>
    </div>
    <div class="t-card reveal reveal-d2">
      <span class="t-mark">"</span>
      <p class="t-text">We were skeptical of agencies after two bad experiences. MAST changed that permanently. The strategy was bulletproof and the creative was unlike anything in our space. Highly recommended.</p>
      <div class="t-author">
        <div class="t-name">SOFIA LINDQVIST</div>
        <div>CMO, Fold Finance</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════ CONTACT ════════════════ -->
<section class="contact" id="contact">
  <div class="contact-left">
    <div class="section-flag reveal">Open for New Work</div>
    <h2 class="contact-headline reveal reveal-d1">
      Let's Make<br>
      Something<br>
      <em>Worth Noticing</em>
    </h2>
    <p class="contact-body reveal reveal-d2">
      We take on a small number of new clients each quarter to ensure every engagement gets the attention it deserves. If you're building something serious, we'd like to hear about it.
    </p>
    <ul class="contact-info-list reveal reveal-d2">
      <li><span class="ci-label">Email</span><span class="ci-val">studio@mast.co</span></li>
      <li><span class="ci-label">New Business</span><span class="ci-val">briefs@mast.co</span></li>
      <li><span class="ci-label">Press</span><span class="ci-val">press@mast.co</span></li>
      <li><span class="ci-label">HQ</span><span class="ci-val">New York, NY</span></li>
    </ul>
  </div>
  <div class="contact-div"></div>
  <div class="contact-right reveal reveal-d1">
    <div class="form-two">
      <div>
        <label class="form-label">First Name</label>
        <input class="form-input" type="text" placeholder="Sofia">
      </div>
      <div>
        <label class="form-label">Last Name</label>
        <input class="form-input" type="text" placeholder="Lindqvist">
      </div>
    </div>
    <label class="form-label">Company</label>
    <input class="form-input" type="text" placeholder="Fold Finance">
    <label class="form-label">Email</label>
    <input class="form-input" type="email" placeholder="sofia@fold.finance">
    <label class="form-label">Service</label>
    <select class="form-select">
      <option value="">Select a service</option>
      <option>Brand Strategy & Identity</option>
      <option>Digital Design & Web</option>
      <option>Content & Editorial</option>
      <option>Growth & Performance</option>
      <option>Full-Service Engagement</option>
    </select>
    <label class="form-label">Tell us about your project</label>
    <textarea class="form-textarea" placeholder="We're a B2B SaaS company looking to reposition…"></textarea>
    <button class="form-submit">Submit Brief →</button>
  </div>
</section>

<!-- ════════════════ FOOTER ════════════════ -->
<footer>
  <div class="footer-top">
    <div class="footer-col">
      <a href="#" class="footer-brand-name">MA<em>ST</em></a>
      <p class="footer-brand-desc">A creative agency for brands that refuse to be ignored. Strategy, design, and content under one roof.</p>
      <div class="footer-socials">
        <a href="#" class="fsoc">LinkedIn</a>
        <a href="#" class="fsoc">Instagram</a>
        <a href="#" class="fsoc">Twitter / X</a>
        <a href="#" class="fsoc">Dribbble</a>
      </div>
    </div>
    <div class="footer-col">
      <div class="footer-col-title">Services</div>
      <ul class="footer-links">
        <li><a href="#">Brand Strategy</a></li>
        <li><a href="#">Visual Identity</a></li>
        <li><a href="#">Digital Design</a></li>
        <li><a href="#">Editorial Content</a></li>
        <li><a href="#">Growth & Paid</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <div class="footer-col-title">Studio</div>
      <ul class="footer-links">
        <li><a href="#">Manifesto</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Culture</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Press</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <div class="footer-col-title">Work</div>
      <ul class="footer-links">
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">By Industry</a></li>
        <li><a href="#">Branding</a></li>
        <li><a href="#">Digital</a></li>
        <li><a href="#">Campaigns</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2025 MAST Creative Studio. All rights reserved.</div>
    <ul class="footer-bottom-links">
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Cookies</a></li>
    </ul>
  </div>
</footer>

<script>
  // LIVE DATE
  const d = new Date();
  document.getElementById('live-date').textContent =
    d.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  // CURSOR
  const cur = document.getElementById('cur');
  const cross = document.getElementById('cur-cross');
  let cx=0,cy=0;
  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    cur.style.left = cx+'px'; cur.style.top = cy+'px';
  });

  // STICKY NAV
  const sticky = document.getElementById('sticky');
  window.addEventListener('scroll', () => {
    sticky.classList.toggle('visible', window.scrollY > 320);
  });

  // TICKER
  const items = [
    'Brand Strategy', 'Visual Identity', 'Web Design', 'Content Creation',
    'Growth Marketing', 'Art Direction', 'Campaign Development', 'Naming',
    'Packaging Design', 'Digital Experience', 'Performance Creative', 'Editorial'
  ];
  const track = document.getElementById('ticker');
  // Duplicate for seamless loop
  [1,2].forEach(() => {
    items.forEach(t => {
      const el = document.createElement('span');
      el.className = 'ticker-item';
      const dot = document.createElement('span');
      dot.className = 'ticker-dot';
      el.appendChild(dot);
      el.appendChild(document.createTextNode(t));
      track.appendChild(el);
    });
  });

  // SMOOTH ANCHOR SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth' }); }
    });
  });

  // REVEAL ON SCROLL
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  reveals.forEach(r => io.observe(r));
</script>
</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE108() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ZOLA — Creative Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #f5f0e8;
    --ink: #111;
    --lime: #c8f04a;
    --pink: #ff6b9d;
    --blue: #4af0f0;
    --orange: #ff7a3d;
    --purple: #b388ff;
    --card1: #fff9f0;
    --muted: #888;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--ink); font-family: 'Instrument Sans', sans-serif; overflow-x: hidden; cursor: none; }

  /* CURSOR */
  #cursor {
    position: fixed; z-index: 9999; pointer-events: none;
    width: 40px; height: 40px; top: 0; left: 0;
    mix-blend-mode: multiply;
    transition: transform .15s ease;
  }
  #cursor-circle {
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--lime); opacity: .85;
    transition: width .2s, height .2s, background .2s;
  }
  body:has(a:hover) #cursor-circle,
  body:has(button:hover) #cursor-circle {
    width: 60px; height: 60px;
    margin: -10px 0 0 -10px;
    background: var(--pink);
  }

  /* NAV */
  nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 22px 52px;
    position: sticky; top: 0; z-index: 100;
    background: var(--bg);
    border-bottom: 2px solid var(--ink);
  }
  .logo {
    font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem;
    text-decoration: none; color: var(--ink);
    display: flex; align-items: center; gap: 8px;
  }
  .logo-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--lime); display: inline-block; animation: blink 2s ease infinite; }
  @keyframes blink { 0%,100%{background:var(--lime)} 50%{background:var(--pink)} }
  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a {
    font-size: .82rem; font-weight: 500; letter-spacing: .04em;
    color: var(--ink); text-decoration: none;
    position: relative;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: -2px; left: 0;
    width: 0; height: 2px; background: var(--lime);
    transition: width .25s;
  }
  .nav-links a:hover::after { width: 100%; }
  .nav-btn {
    background: var(--ink); color: var(--bg);
    font-family: 'Syne', sans-serif; font-weight: 700; font-size: .78rem;
    letter-spacing: .06em; padding: 10px 22px;
    text-decoration: none; border-radius: 100px;
    transition: background .2s, transform .15s;
  }
  .nav-btn:hover { background: var(--pink); transform: scale(1.04); }

  /* HERO */
  .hero {
    padding: 70px 52px 60px;
    display: grid; grid-template-columns: 1fr auto;
    gap: 40px; align-items: start;
    border-bottom: 2px solid var(--ink);
    min-height: 88vh;
    position: relative; overflow: hidden;
  }
  .hero-left { display: flex; flex-direction: column; justify-content: space-between; height: 100%; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--lime); border: 2px solid var(--ink);
    border-radius: 100px; padding: 6px 16px;
    font-size: .72rem; font-weight: 500; letter-spacing: .06em;
    margin-bottom: 32px; width: fit-content;
  }
  .hero-badge span { width: 7px; height: 7px; border-radius: 50%; background: var(--ink); display: block; animation: blink 1.5s infinite; }
  .hero-title {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(3.8rem, 9vw, 9rem);
    line-height: .9; letter-spacing: -.03em;
    margin-bottom: 36px;
  }
  .hero-title .line2 { color: var(--pink); -webkit-text-stroke: 2px var(--ink); }
  .hero-title .line3 {
    -webkit-text-stroke: 2px var(--ink);
    color: transparent;
  }
  .hero-sub {
    font-size: 1rem; line-height: 1.7; color: var(--muted);
    max-width: 480px; margin-bottom: 44px;
  }
  .hero-actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
  .btn-filled {
    background: var(--ink); color: var(--bg);
    font-family: 'Syne', sans-serif; font-weight: 700; font-size: .82rem;
    padding: 14px 30px; border-radius: 100px; text-decoration: none;
    border: 2px solid var(--ink);
    transition: background .2s, color .2s, transform .15s;
    display: inline-block;
  }
  .btn-filled:hover { background: var(--lime); color: var(--ink); transform: translateY(-2px); }
  .btn-outline {
    background: transparent; color: var(--ink);
    font-family: 'Syne', sans-serif; font-weight: 700; font-size: .82rem;
    padding: 14px 30px; border-radius: 100px; text-decoration: none;
    border: 2px solid var(--ink);
    transition: background .2s, transform .15s;
    display: inline-block;
  }
  .btn-outline:hover { background: var(--blue); transform: translateY(-2px); }

  /* Hero right - floating cards */
  .hero-right {
    display: flex; flex-direction: column; gap: 16px;
    padding-top: 20px;
    width: 280px;
  }
  .float-card {
    border: 2px solid var(--ink); border-radius: 16px;
    padding: 20px 22px;
    animation: floatUp 3s ease-in-out infinite;
  }
  .float-card:nth-child(2) { animation-delay: 1s; background: var(--lime); }
  .float-card:nth-child(3) { animation-delay: 2s; background: var(--pink); }
  @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  .fc-label { font-size: .62rem; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
  .fc-val { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.6rem; }

  /* Decorative blobs */
  .blob {
    position: absolute; border-radius: 50%;
    filter: blur(60px); pointer-events: none; opacity: .25; z-index: 0;
  }
  .blob1 { width: 400px; height: 400px; background: var(--lime); top: -100px; right: 200px; }
  .blob2 { width: 300px; height: 300px; background: var(--pink); bottom: -80px; left: 100px; }
  .hero-left, .hero-right { position: relative; z-index: 1; }

  /* MARQUEE */
  .marquee-wrap {
    overflow: hidden; background: var(--ink); padding: 14px 0;
    border-bottom: 2px solid var(--ink);
  }
  .marquee-track {
    display: flex; gap: 0; animation: marquee 22s linear infinite;
    white-space: nowrap;
  }
  .marquee-item {
    display: inline-flex; align-items: center; gap: 20px;
    padding: 0 28px;
    font-family: 'Syne', sans-serif; font-weight: 700;
    font-size: .9rem; letter-spacing: .08em; text-transform: uppercase;
    color: var(--bg); flex-shrink: 0;
  }
  .marquee-star { color: var(--lime); font-size: 1.1rem; }
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

  /* ABOUT */
  .about {
    padding: 80px 52px;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
    border-bottom: 2px solid var(--ink);
  }
  .about-label {
    font-size: .68rem; letter-spacing: .2em; text-transform: uppercase;
    font-weight: 500; color: var(--muted); margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .about-label::before { content: ''; display: block; width: 24px; height: 2px; background: var(--pink); }
  .about-title {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(2rem, 4vw, 3.2rem); line-height: 1.05;
    letter-spacing: -.02em; margin-bottom: 24px;
  }
  .about-title em { font-style: italic; color: var(--pink); }
  .about-text { font-size: .9rem; line-height: 1.8; color: var(--muted); margin-bottom: 32px; }
  .skills { display: flex; flex-wrap: wrap; gap: 10px; }
  .skill-tag {
    font-family: 'Syne', sans-serif; font-size: .72rem; font-weight: 700;
    border: 2px solid var(--ink); border-radius: 100px;
    padding: 6px 16px; transition: background .2s, transform .15s;
    cursor: none;
  }
  .skill-tag:hover { transform: rotate(-3deg) scale(1.05); }
  .skill-tag.l { background: var(--lime); }
  .skill-tag.p { background: var(--pink); }
  .skill-tag.b { background: var(--blue); }
  .skill-tag.o { background: var(--orange); }
  .skill-tag.pu { background: var(--purple); }

  /* About right - fun card */
  .about-card {
    border: 2px solid var(--ink); border-radius: 24px;
    overflow: hidden; background: white;
    box-shadow: 8px 8px 0 var(--ink);
    transition: box-shadow .2s, transform .2s;
  }
  .about-card:hover { box-shadow: 12px 12px 0 var(--ink); transform: translate(-2px,-2px); }
  .about-card-img {
    height: 280px; background: var(--lime);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif; font-size: 7rem; font-weight: 800;
    border-bottom: 2px solid var(--ink);
    position: relative; overflow: hidden;
  }
  .about-card-img-bg {
    position: absolute; inset: 0;
    background: repeating-linear-gradient(45deg, rgba(0,0,0,.04) 0, rgba(0,0,0,.04) 1px, transparent 0, transparent 50%);
    background-size: 14px 14px;
  }
  .about-card-body { padding: 24px 28px; }
  .about-card-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.4rem; margin-bottom: 4px; }
  .about-card-role { font-size: .82rem; color: var(--muted); margin-bottom: 16px; }
  .about-card-stats { display: flex; gap: 24px; }
  .acs-num { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.4rem; }
  .acs-label { font-size: .68rem; color: var(--muted); }

  /* WORK */
  .work { padding: 0 52px; border-bottom: 2px solid var(--ink); }
  .section-head {
    display: flex; align-items: baseline; justify-content: space-between;
    padding: 32px 0 24px;
    border-bottom: 2px solid var(--ink);
  }
  .section-head h2 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.6rem; }
  .section-head a {
    font-size: .75rem; font-weight: 500; letter-spacing: .06em;
    color: var(--muted); text-decoration: none; transition: color .2s;
  }
  .section-head a:hover { color: var(--pink); }
  .work-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto auto;
    gap: 24px; padding: 28px 0;
  }
  .work-card {
    border: 2px solid var(--ink); border-radius: 20px; overflow: hidden;
    text-decoration: none; color: var(--ink);
    transition: transform .2s, box-shadow .2s;
    box-shadow: 4px 4px 0 var(--ink);
    display: block;
    cursor: none;
  }
  .work-card:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0 var(--ink); }
  .work-card:first-child { grid-row: span 2; }
  .work-thumb {
    aspect-ratio: 4/3;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800;
    border-bottom: 2px solid var(--ink);
    position: relative; overflow: hidden;
  }
  .work-card:first-child .work-thumb { aspect-ratio: unset; height: 360px; font-size: 5rem; }
  .work-thumb-bg {
    position: absolute; inset: 0;
    background: repeating-linear-gradient(45deg, rgba(0,0,0,.03) 0, rgba(0,0,0,.03) 1px, transparent 0, transparent 50%);
    background-size: 12px 12px;
  }
  .work-thumb span { position: relative; z-index: 1; }
  .wc1 { background: var(--lime); }
  .wc2 { background: var(--blue); }
  .wc3 { background: var(--orange); }
  .wc4 { background: var(--purple); }
  .work-info { padding: 20px 22px; }
  .work-cat { font-size: .62rem; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
  .work-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; margin-bottom: 6px; }
  .work-card:first-child .work-name { font-size: 1.5rem; }
  .work-desc { font-size: .78rem; color: var(--muted); line-height: 1.6; }

  /* SERVICES */
  .services { padding: 80px 52px; border-bottom: 2px solid var(--ink); }
  .services > .section-head { margin-bottom: 0; }
  .svc-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 20px; margin-top: 28px;
  }
  .svc-card {
    border: 2px solid var(--ink); border-radius: 20px;
    padding: 36px 30px;
    box-shadow: 4px 4px 0 var(--ink);
    transition: transform .2s, box-shadow .2s, background .2s;
    cursor: none;
  }
  .svc-card:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0 var(--ink); }
  .svc-card:nth-child(1):hover { background: var(--lime); }
  .svc-card:nth-child(2):hover { background: var(--pink); }
  .svc-card:nth-child(3):hover { background: var(--blue); }
  .svc-icon {
    font-size: 2.2rem; margin-bottom: 18px; display: block;
    transition: transform .2s;
  }
  .svc-card:hover .svc-icon { transform: scale(1.2) rotate(-5deg); }
  .svc-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.15rem; margin-bottom: 12px; }
  .svc-desc { font-size: .82rem; line-height: 1.7; color: var(--muted); }

  /* TESTIMONIALS */
  .testimonials { padding: 80px 52px; border-bottom: 2px solid var(--ink); }
  .t-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 28px; }
  .t-card {
    border: 2px solid var(--ink); border-radius: 20px; padding: 32px 28px;
    box-shadow: 4px 4px 0 var(--ink);
    transition: transform .2s, box-shadow .2s;
  }
  .t-card:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0 var(--ink); }
  .t-card:nth-child(1) { background: var(--lime); }
  .t-card:nth-child(2) { background: white; }
  .t-card:nth-child(3) { background: var(--pink); }
  .t-stars { font-size: 1rem; margin-bottom: 14px; letter-spacing: 2px; }
  .t-text { font-size: .88rem; line-height: 1.7; margin-bottom: 22px; font-style: italic; }
  .t-author { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .8rem; }
  .t-role { font-size: .72rem; color: var(--muted); margin-top: 2px; }

  /* CONTACT */
  .contact {
    padding: 80px 52px;
    border-bottom: 2px solid var(--ink);
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
  }
  .contact-title {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(2.2rem, 5vw, 4rem); line-height: .95;
    letter-spacing: -.02em; margin-bottom: 20px;
  }
  .contact-title em { font-style: italic; color: var(--pink); }
  .contact-sub { font-size: .9rem; color: var(--muted); line-height: 1.7; margin-bottom: 36px; }
  .contact-chips { display: flex; flex-wrap: wrap; gap: 10px; }
  .chip {
    border: 2px solid var(--ink); border-radius: 100px;
    padding: 8px 18px; font-size: .78rem; font-weight: 500;
    background: white; transition: background .2s, transform .15s;
    cursor: none;
  }
  .chip:hover { background: var(--lime); transform: rotate(-2deg); }
  .form-field { margin-bottom: 20px; }
  .form-field label {
    display: block; font-size: .65rem; letter-spacing: .14em;
    text-transform: uppercase; font-weight: 500; color: var(--muted); margin-bottom: 8px;
  }
  .form-field input,
  .form-field textarea,
  .form-field select {
    width: 100%; border: 2px solid var(--ink); border-radius: 12px;
    padding: 12px 16px; font-family: 'Instrument Sans', sans-serif;
    font-size: .9rem; background: white; outline: none;
    transition: border-color .2s, box-shadow .2s;
    appearance: none;
  }
  .form-field input:focus,
  .form-field textarea:focus,
  .form-field select:focus { border-color: var(--pink); box-shadow: 4px 4px 0 var(--ink); }
  .form-field textarea { resize: none; height: 120px; }
  .form-two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .form-submit {
    width: 100%; background: var(--ink); color: var(--bg);
    border: 2px solid var(--ink); border-radius: 100px;
    font-family: 'Syne', sans-serif; font-weight: 800; font-size: .9rem;
    padding: 16px; cursor: none; letter-spacing: .04em;
    transition: background .2s, color .2s, transform .15s;
  }
  .form-submit:hover { background: var(--lime); color: var(--ink); transform: translateY(-2px); }

  /* FOOTER */
  footer {
    padding: 48px 52px 28px;
    border-bottom: 2px solid var(--ink);
  }
  .footer-top {
    display: flex; justify-content: space-between; align-items: flex-start;
    margin-bottom: 48px; flex-wrap: wrap; gap: 40px;
  }
  .footer-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 2.2rem; letter-spacing: -.02em; }
  .footer-logo em { color: var(--pink); font-style: italic; }
  .footer-tagline { font-size: .82rem; color: var(--muted); margin-top: 8px; max-width: 220px; }
  .footer-cols { display: flex; gap: 64px; flex-wrap: wrap; }
  .footer-col h4 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .72rem; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 14px; }
  .footer-col ul { list-style: none; }
  .footer-col ul li { margin-bottom: 8px; }
  .footer-col ul li a { font-size: .82rem; color: var(--muted); text-decoration: none; transition: color .2s; }
  .footer-col ul li a:hover { color: var(--pink); }
  .footer-bottom {
    display: flex; justify-content: space-between; align-items: center;
    border-top: 1px solid #ddd; padding-top: 20px;
    font-size: .72rem; color: var(--muted); flex-wrap: wrap; gap: 12px;
  }
  .footer-socials { display: flex; gap: 10px; }
  .fsoc {
    width: 36px; height: 36px; border: 2px solid var(--ink); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: .62rem; font-weight: 700; text-decoration: none; color: var(--ink);
    transition: background .2s, transform .15s;
  }
  .fsoc:hover { background: var(--lime); transform: scale(1.12); }

  /* REVEAL */
  .reveal { opacity: 0; transform: translateY(28px); transition: opacity .65s ease, transform .65s ease; }
  .reveal.on { opacity: 1; transform: translateY(0); }
  .d1{transition-delay:.08s} .d2{transition-delay:.16s} .d3{transition-delay:.24s} .d4{transition-delay:.32s}

  @media(max-width:900px){
    nav{padding:16px 24px;}
    .nav-links{display:none;}
    .hero{grid-template-columns:1fr;padding:48px 24px 40px;}
    .hero-right{width:100%;}
    .about,.contact{grid-template-columns:1fr;padding:60px 24px;gap:48px;}
    .work,.services,.testimonials,.testimonials{padding:60px 24px;}
    .work-grid{grid-template-columns:1fr;}
    .work-card:first-child{grid-row:auto;}
    .svc-grid,.t-grid{grid-template-columns:1fr;}
    footer{padding:40px 24px 24px;}
  }
</style>
</head>
<body>

<div id="cursor"><div id="cursor-circle"></div></div>

<!-- NAV -->
<nav>
  <a href="#" class="logo"><span class="logo-dot"></span> ZOLA</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" class="nav-btn">Hire Me →</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="blob blob1"></div>
  <div class="blob blob2"></div>
  <div class="hero-left">
    <div>
      <div class="hero-badge"><span></span> Available for work — 2025</div>
      <h1 class="hero-title">
        <span class="line1">Creative</span><br>
        <span class="line2">Designer</span><br>
        <span class="line3">&amp; Builder</span>
      </h1>
      <p class="hero-sub">I design and build digital experiences that are bold, beautiful, and actually work. Based in Amsterdam — working worldwide.</p>
      <div class="hero-actions">
        <a href="#work" class="btn-filled">See My Work</a>
        <a href="#contact" class="btn-outline">Let's Talk</a>
      </div>
    </div>
  </div>
  <div class="hero-right">
    <div class="float-card">
      <div class="fc-label">Projects Done</div>
      <div class="fc-val">80+</div>
    </div>
    <div class="float-card">
      <div class="fc-label">Happy Clients</div>
      <div class="fc-val">98%</div>
    </div>
    <div class="float-card">
      <div class="fc-label">Years Exp.</div>
      <div class="fc-val">6 yrs</div>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee-wrap">
  <div class="marquee-track" id="mq"></div>
</div>

<!-- ABOUT -->
<section class="about" id="about">
  <div>
    <div class="about-label reveal">About Me</div>
    <h2 class="about-title reveal d1">I turn ideas into <em>experiences</em> people love</h2>
    <p class="about-text reveal d2">Hey! I'm Zola — a multidisciplinary designer and creative developer. I work at the intersection of visual design, motion, and front-end code to create digital products that feel as good as they look. I believe great design should spark joy, not just function.</p>
    <div class="skills reveal d3">
      <span class="skill-tag l">UI/UX Design</span>
      <span class="skill-tag p">Branding</span>
      <span class="skill-tag b">Web Dev</span>
      <span class="skill-tag o">Motion</span>
      <span class="skill-tag pu">Art Direction</span>
      <span class="skill-tag l">Figma</span>
      <span class="skill-tag p">React</span>
      <span class="skill-tag b">Illustration</span>
    </div>
  </div>
  <div class="about-card reveal d2">
    <div class="about-card-img">
      <div class="about-card-img-bg"></div>
      <span style="position:relative;z-index:1">Z✦</span>
    </div>
    <div class="about-card-body">
      <div class="about-card-name">Zola Reyes</div>
      <div class="about-card-role">Creative Designer & Developer · Amsterdam</div>
      <div class="about-card-stats">
        <div><div class="acs-num">80+</div><div class="acs-label">Projects</div></div>
        <div><div class="acs-num">6yr</div><div class="acs-label">Experience</div></div>
        <div><div class="acs-num">4★</div><div class="acs-label">Awards</div></div>
      </div>
    </div>
  </div>
</section>

<!-- WORK -->
<section class="work" id="work">
  <div class="section-head">
    <h2>Selected Work</h2>
    <a href="#">All Projects →</a>
  </div>
  <div class="work-grid">
    <a class="work-card reveal" href="#">
      <div class="work-thumb wc1"><div class="work-thumb-bg"></div><span>✦</span></div>
      <div class="work-info">
        <div class="work-cat">Brand Identity · Web</div>
        <div class="work-name">Bloom Studio — Full Brand Redesign</div>
        <div class="work-desc">Complete identity overhaul, design system, and marketing site for a boutique creative studio.</div>
      </div>
    </a>
    <a class="work-card reveal d1" href="#">
      <div class="work-thumb wc2"><div class="work-thumb-bg"></div><span>◈</span></div>
      <div class="work-info">
        <div class="work-cat">App Design · Prototype</div>
        <div class="work-name">Wavr — Music App UI</div>
      </div>
    </a>
    <a class="work-card reveal d2" href="#">
      <div class="work-thumb wc3"><div class="work-thumb-bg"></div><span>▲</span></div>
      <div class="work-info">
        <div class="work-cat">Campaign · Motion</div>
        <div class="work-name">Sōl — Wellness Campaign</div>
      </div>
    </a>
  </div>
</section>

<!-- SERVICES -->
<section class="services" id="services">
  <div class="section-head reveal">
    <h2>What I Do</h2>
  </div>
  <div class="svc-grid">
    <div class="svc-card reveal">
      <span class="svc-icon">🎨</span>
      <div class="svc-name">Brand & Identity</div>
      <p class="svc-desc">Logos, type, colour, guidelines — everything you need to show up confidently and consistently across every touchpoint.</p>
    </div>
    <div class="svc-card reveal d1">
      <span class="svc-icon">💻</span>
      <div class="svc-name">Web Design & Dev</div>
      <p class="svc-desc">From Figma wireframes to live, responsive websites. I design and code — so nothing gets lost in translation.</p>
    </div>
    <div class="svc-card reveal d2">
      <span class="svc-icon">✨</span>
      <div class="svc-name">Motion & Interaction</div>
      <p class="svc-desc">Animations, transitions, and micro-interactions that make your product feel alive and delightful to use.</p>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonials">
  <div class="section-head reveal">
    <h2>Kind Words</h2>
  </div>
  <div class="t-grid">
    <div class="t-card reveal">
      <div class="t-stars">★★★★★</div>
      <p class="t-text">"Zola took our messy ideas and turned them into something we're genuinely proud of. The process was smooth, fast, and honestly fun."</p>
      <div class="t-author">Maya K.</div>
      <div class="t-role">Founder, Bloom Studio</div>
    </div>
    <div class="t-card reveal d1">
      <div class="t-stars">★★★★★</div>
      <p class="t-text">"Best investment we made this year. The new site converted 3× better in the first month. And it looks incredible."</p>
      <div class="t-author">Tom R.</div>
      <div class="t-role">CEO, Wavr</div>
    </div>
    <div class="t-card reveal d2">
      <div class="t-stars">★★★★★</div>
      <p class="t-text">"Creative, collaborative, and incredibly fast. Zola understood our brand better than we did — and made it shine."</p>
      <div class="t-author">Lina S.</div>
      <div class="t-role">Creative Director, Sōl</div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="contact" id="contact">
  <div>
    <div class="about-label reveal">Get In Touch</div>
    <h2 class="contact-title reveal d1">Let's make something <em>great</em> together</h2>
    <p class="contact-sub reveal d2">I'm currently available for freelance projects, collaborations, and full-time roles. Drop me a message and I'll get back within 24 hours.</p>
    <div class="contact-chips reveal d3">
      <span class="chip">🎨 Branding</span>
      <span class="chip">💻 Web Design</span>
      <span class="chip">✨ Motion</span>
      <span class="chip">📦 Full Project</span>
    </div>
  </div>
  <div class="reveal d1">
    <div class="form-two">
      <div class="form-field"><label>Name</label><input type="text" placeholder="Maya"></div>
      <div class="form-field"><label>Email</label><input type="email" placeholder="maya@bloom.co"></div>
    </div>
    <div class="form-field">
      <label>Service</label>
      <select>
        <option>Brand & Identity</option>
        <option>Web Design & Dev</option>
        <option>Motion & Interaction</option>
        <option>Something Else</option>
      </select>
    </div>
    <div class="form-field"><label>Message</label><textarea placeholder="Hi Zola! I'd love to work together on…"></textarea></div>
    <button class="form-submit">Send Message ✦</button>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div>
      <div class="footer-logo">ZO<em>LA</em></div>
      <div class="footer-tagline">Creative designer & developer based in Amsterdam.</div>
    </div>
    <div class="footer-cols">
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Branding</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Motion</a></li>
          <li><a href="#">Art Direction</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div>© 2025 Zola Reyes. All rights reserved.</div>
    <div class="footer-socials">
      <a href="#" class="fsoc">in</a>
      <a href="#" class="fsoc">ig</a>
      <a href="#" class="fsoc">dr</a>
      <a href="#" class="fsoc">tw</a>
    </div>
  </div>
</footer>

<script>
  // Cursor
  const cur = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cur.style.left = (e.clientX - 20) + 'px';
    cur.style.top  = (e.clientY - 20) + 'px';
  });

  // Marquee
  const words = ['UI Design','Branding','Web Dev','Motion','Art Direction','Figma','React','Illustration','Typography','Creative Direction'];
  const mq = document.getElementById('mq');
  [1,2].forEach(() => words.forEach(w => {
    const el = document.createElement('span');
    el.className = 'marquee-item';
    const star = document.createElement('span');
    star.className = 'marquee-star';
    star.textContent = '✦';
    el.appendChild(star);
    el.appendChild(document.createTextNode(' ' + w));
    mq.appendChild(el);
  }));

  // Reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if(t){ e.preventDefault(); t.scrollIntoView({ behavior:'smooth' }); }
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
function copyCODE109() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>StudyOS — Student Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --ink:#0a0a0f;
  --ink2:#111118;
  --ink3:#1a1a24;
  --ink4:#252532;
  --ink5:#32324a;
  --line:#2e2e42;
  --muted:#5a5a7a;
  --sub:#8888aa;
  --text:#d4d4e8;
  --bright:#eeeef8;
  --lime:#b8ff57;
  --lime2:#96e63a;
  --rose:#ff5f7e;
  --sky:#57c4ff;
  --amber:#ffb547;
  --violet:#a57bff;
  --ff-head:'Syne',sans-serif;
  --ff-body:'DM Sans',sans-serif;
  --ff-mono:'DM Mono',monospace;
  --r:12px;
  --r2:8px;
}
html,body{height:100%;background:var(--ink);color:var(--text);font-family:var(--ff-body);font-size:14px;overflow-x:hidden}

/* Scrollbar */
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--ink5);border-radius:2px}

/* Layout */
#app{display:grid;grid-template-columns:220px 1fr;grid-template-rows:60px 1fr;min-height:100vh}

/* ── Topbar ── */
#topbar{grid-column:1/-1;display:flex;align-items:center;padding:0 24px;background:var(--ink2);border-bottom:1px solid var(--line);gap:16px;position:sticky;top:0;z-index:100}
.logo{font-family:var(--ff-head);font-size:20px;font-weight:800;letter-spacing:-0.03em;color:var(--bright)}
.logo span{color:var(--lime)}
.tagline{font-size:11px;color:var(--muted);margin-left:4px;font-family:var(--ff-mono)}
#topbar-right{margin-left:auto;display:flex;align-items:center;gap:16px}
.streak-badge{display:flex;align-items:center;gap:6px;background:var(--ink3);border:1px solid var(--line);border-radius:20px;padding:5px 14px;font-size:12px;color:var(--amber)}
.streak-badge span{font-weight:700;font-size:14px}
#clock{font-family:var(--ff-mono);font-size:13px;color:var(--sub)}
.date-str{font-family:var(--ff-mono);font-size:11px;color:var(--muted)}

/* ── Sidebar ── */
#sidebar{background:var(--ink2);border-right:1px solid var(--line);padding:20px 12px;display:flex;flex-direction:column;gap:4px}
.nav-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--r2);cursor:pointer;font-size:13px;color:var(--sub);transition:all .15s;user-select:none;font-weight:500}
.nav-item:hover{background:var(--ink3);color:var(--text)}
.nav-item.active{background:var(--lime);color:#0a0a0f;font-weight:700}
.nav-item .ni-icon{font-size:16px;width:20px;text-align:center}
.nav-section{font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);padding:16px 12px 4px;font-family:var(--ff-mono)}
.sidebar-footer{margin-top:auto;padding:12px;background:var(--ink3);border-radius:var(--r);border:1px solid var(--line)}
.sf-label{font-size:10px;color:var(--muted);margin-bottom:6px;font-family:var(--ff-mono)}
.sf-bar{height:6px;background:var(--ink5);border-radius:3px;overflow:hidden}
.sf-fill{height:100%;background:linear-gradient(90deg,var(--lime),var(--sky));border-radius:3px;transition:width .5s}
.sf-stat{font-size:11px;color:var(--sub);margin-top:4px}

/* ── Main ── */
#main{overflow-y:auto;padding:24px}

/* Panels */
.panel{display:none}
.panel.active{display:block;animation:fadeUp .25s ease}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}

/* Grid helpers */
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}

/* Card */
.card{background:var(--ink2);border:1px solid var(--line);border-radius:var(--r);padding:20px}
.card-title{font-family:var(--ff-head);font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:16px;display:flex;align-items:center;gap:8px}
.card-title .dot{width:6px;height:6px;border-radius:50%}

/* ── PAGE: FOCUS (Pomodoro) ── */
#pomo-ring-wrap{display:flex;flex-direction:column;align-items:center;padding:32px 0}
.pomo-mode-btns{display:flex;gap:8px;margin-bottom:32px}
.pomo-mode-btn{padding:7px 20px;border-radius:20px;border:1px solid var(--line);background:none;color:var(--sub);font-family:var(--ff-body);font-size:13px;cursor:pointer;transition:all .2s}
.pomo-mode-btn.active{background:var(--lime);border-color:var(--lime);color:#0a0a0f;font-weight:700}
.ring-container{position:relative;width:220px;height:220px;margin-bottom:28px}
#pomo-svg{transform:rotate(-90deg)}
.ring-bg{fill:none;stroke:var(--ink4);stroke-width:10}
.ring-prog{fill:none;stroke:var(--lime);stroke-width:10;stroke-linecap:round;transition:stroke-dashoffset .5s,stroke .5s}
.ring-timer{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
#pomo-time{font-family:var(--ff-head);font-size:52px;font-weight:800;color:var(--bright);letter-spacing:-0.04em;line-height:1}
#pomo-mode-label{font-size:11px;color:var(--muted);font-family:var(--ff-mono);margin-top:6px;letter-spacing:.1em;text-transform:uppercase}
.pomo-controls{display:flex;gap:12px;align-items:center}
.pomo-btn{width:52px;height:52px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:20px;transition:transform .15s,filter .15s}
.pomo-btn:hover{transform:scale(1.08);filter:brightness(1.1)}
.pomo-btn.main{background:var(--lime);color:#0a0a0f;width:64px;height:64px;font-size:24px}
.pomo-btn.sec{background:var(--ink4);color:var(--text)}
.pomo-sessions{display:flex;gap:8px;margin-top:20px}
.pomo-dot{width:10px;height:10px;border-radius:50%;background:var(--ink5);transition:background .3s}
.pomo-dot.done{background:var(--lime)}
.pomo-dot.current{background:var(--amber);box-shadow:0 0 8px var(--amber)}
.pomo-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px;width:100%;max-width:420px}
.ps-item{background:var(--ink3);border:1px solid var(--line);border-radius:var(--r2);padding:14px;text-align:center}
.ps-val{font-family:var(--ff-head);font-size:28px;font-weight:800;color:var(--bright)}
.ps-label{font-size:10px;color:var(--muted);font-family:var(--ff-mono);text-transform:uppercase;letter-spacing:.08em;margin-top:2px}
.pomo-task-sel{width:100%;max-width:420px;margin-top:16px}
.pomo-task-sel select{width:100%;background:var(--ink3);border:1px solid var(--line);border-radius:var(--r2);padding:10px 14px;color:var(--text);font-family:var(--ff-body);font-size:13px;outline:none;cursor:pointer}
.pomo-task-sel select:focus{border-color:var(--lime)}

/* ── PAGE: TASKS ── */
.task-add-row{display:flex;gap:10px;margin-bottom:20px}
.task-input{flex:1;background:var(--ink3);border:1px solid var(--line);border-radius:var(--r2);padding:11px 16px;color:var(--bright);font-family:var(--ff-body);font-size:14px;outline:none;transition:border .15s}
.task-input:focus{border-color:var(--lime)}
.task-input::placeholder{color:var(--muted)}
.add-btn{padding:11px 20px;background:var(--lime);color:#0a0a0f;border:none;border-radius:var(--r2);font-family:var(--ff-head);font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap;transition:filter .15s}
.add-btn:hover{filter:brightness(1.1)}
.task-filters{display:flex;gap:6px;margin-bottom:16px}
.tf-btn{padding:5px 14px;border-radius:20px;border:1px solid var(--line);background:none;color:var(--sub);font-size:12px;cursor:pointer;transition:all .15s;font-family:var(--ff-body)}
.tf-btn.active{background:var(--ink4);color:var(--text);border-color:var(--ink5)}
.task-list{display:flex;flex-direction:column;gap:8px}
.task-item{display:flex;align-items:center;gap:12px;background:var(--ink3);border:1px solid var(--line);border-radius:var(--r2);padding:12px 16px;transition:all .2s;animation:fadeUp .2s ease}
.task-item:hover{border-color:var(--ink5)}
.task-item.done{opacity:.5}
.task-item.done .task-text{text-decoration:line-through;color:var(--muted)}
.task-cb{width:18px;height:18px;border-radius:5px;border:2px solid var(--line);background:none;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .15s}
.task-cb.checked{background:var(--lime);border-color:var(--lime);color:#0a0a0f}
.task-text{flex:1;font-size:14px;color:var(--text)}
.task-tag{padding:2px 10px;border-radius:20px;font-size:11px;font-family:var(--ff-mono)}
.tag-school{background:#57c4ff22;color:var(--sky);border:1px solid #57c4ff33}
.tag-personal{background:#b8ff5722;color:var(--lime);border:1px solid #b8ff5733}
.tag-work{background:#ffb54722;color:var(--amber);border:1px solid #ffb54733}
.tag-urgent{background:#ff5f7e22;color:var(--rose);border:1px solid #ff5f7e33}
.task-del{background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px;padding:2px 6px;border-radius:4px;transition:all .15s;line-height:1}
.task-del:hover{background:var(--rose);color:white}
.task-pri{font-size:16px;cursor:pointer}
.progress-row{display:flex;align-items:center;gap:12px;margin-bottom:20px}
.progress-bar{flex:1;height:6px;background:var(--ink4);border-radius:3px;overflow:hidden}
.progress-fill{height:100%;background:linear-gradient(90deg,var(--lime),var(--sky));border-radius:3px;transition:width .4s}
.progress-text{font-size:12px;color:var(--sub);font-family:var(--ff-mono);white-space:nowrap}

/* ── PAGE: GPA ── */
.gpa-display{text-align:center;padding:32px 0;position:relative}
.gpa-val{font-family:var(--ff-head);font-size:88px;font-weight:800;letter-spacing:-0.06em;line-height:1;background:linear-gradient(135deg,var(--lime),var(--sky));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.gpa-label{font-size:12px;color:var(--muted);font-family:var(--ff-mono);letter-spacing:.15em;text-transform:uppercase;margin-top:4px}
.gpa-meter{width:200px;height:6px;background:var(--ink4);border-radius:3px;margin:16px auto 0;overflow:hidden}
.gpa-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,var(--rose),var(--amber),var(--lime));transition:width .6s}
.course-add-row{display:grid;grid-template-columns:1fr auto auto auto;gap:10px;margin-bottom:16px}
.course-input{background:var(--ink3);border:1px solid var(--line);border-radius:var(--r2);padding:10px 14px;color:var(--bright);font-family:var(--ff-body);font-size:13px;outline:none;transition:border .15s}
.course-input:focus{border-color:var(--lime)}
.course-input::placeholder{color:var(--muted)}
select.course-input option{background:var(--ink3)}
.course-table{width:100%;border-collapse:collapse}
.course-table th{font-family:var(--ff-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);padding:8px 12px;text-align:left;border-bottom:1px solid var(--line)}
.course-table td{padding:12px;border-bottom:1px solid var(--line22);font-size:13px}
.course-table tr:last-child td{border-bottom:none}
.grade-chip{display:inline-block;padding:2px 10px;border-radius:20px;font-family:var(--ff-mono);font-size:12px;font-weight:500}
.grade-A{background:#b8ff5722;color:var(--lime)}
.grade-B{background:#57c4ff22;color:var(--sky)}
.grade-C{background:#ffb54722;color:var(--amber)}
.grade-D,.grade-F{background:#ff5f7e22;color:var(--rose)}
.del-row{background:none;border:none;color:var(--muted);cursor:pointer;font-size:14px;padding:2px 8px;border-radius:4px;transition:all .15s}
.del-row:hover{background:var(--rose);color:white}
.gpa-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:20px}
.gpa-stat{background:var(--ink3);border:1px solid var(--line);border-radius:var(--r2);padding:16px;text-align:center}
.gpa-stat-val{font-family:var(--ff-head);font-size:26px;font-weight:800;color:var(--bright)}
.gpa-stat-label{font-size:10px;color:var(--muted);font-family:var(--ff-mono);text-transform:uppercase;letter-spacing:.08em;margin-top:2px}

/* ── PAGE: NOTES ── */
.notes-grid{display:grid;grid-template-columns:240px 1fr;gap:0;height:calc(100vh - 160px);background:var(--ink2);border:1px solid var(--line);border-radius:var(--r);overflow:hidden}
.notes-sidebar{border-right:1px solid var(--line);display:flex;flex-direction:column}
.ns-header{padding:14px 16px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between}
.ns-title{font-family:var(--ff-head);font-size:13px;font-weight:700;color:var(--sub);letter-spacing:.06em;text-transform:uppercase}
.ns-new{background:var(--lime);border:none;border-radius:6px;width:26px;height:26px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;color:#0a0a0f;font-weight:700;transition:filter .15s}
.ns-new:hover{filter:brightness(1.1)}
.note-list{flex:1;overflow-y:auto}
.note-li{padding:12px 16px;cursor:pointer;border-bottom:1px solid var(--line);transition:background .15s}
.note-li:hover{background:var(--ink3)}
.note-li.active{background:var(--ink4);border-left:2px solid var(--lime)}
.nl-title{font-size:13px;font-weight:500;color:var(--text);margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.nl-preview{font-size:11px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.nl-date{font-size:10px;color:var(--muted);font-family:var(--ff-mono);margin-top:3px}
.notes-editor{display:flex;flex-direction:column}
.ne-header{padding:14px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:12px}
#note-title-input{flex:1;background:none;border:none;font-family:var(--ff-head);font-size:18px;font-weight:700;color:var(--bright);outline:none}
#note-title-input::placeholder{color:var(--muted)}
.ne-toolbar{display:flex;gap:4px}
.ne-btn{background:none;border:none;color:var(--sub);cursor:pointer;padding:5px 8px;border-radius:4px;font-size:13px;transition:all .15s;font-family:var(--ff-mono)}
.ne-btn:hover{background:var(--ink4);color:var(--text)}
.ne-del{color:var(--rose)}
#note-body{flex:1;background:none;border:none;padding:20px;color:var(--text);font-family:var(--ff-body);font-size:14px;line-height:1.8;resize:none;outline:none}
#note-body::placeholder{color:var(--muted)}

/* ── PAGE: HOME ── */
.home-greeting{font-family:var(--ff-head);font-size:32px;font-weight:800;color:var(--bright);margin-bottom:4px;letter-spacing:-0.02em}
.home-greeting .accent{color:var(--lime)}
.home-sub{font-size:13px;color:var(--sub);margin-bottom:28px}
.home-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px}
.stat-card{background:var(--ink2);border:1px solid var(--line);border-radius:var(--r);padding:20px;position:relative;overflow:hidden}
.stat-card::before{content:'';position:absolute;inset:0;opacity:.06;border-radius:inherit}
.sc-lime::before{background:var(--lime)}
.sc-sky::before{background:var(--sky)}
.sc-amber::before{background:var(--amber)}
.sc-violet::before{background:var(--violet)}
.stat-icon{font-size:24px;margin-bottom:12px}
.stat-val{font-family:var(--ff-head);font-size:36px;font-weight:800;color:var(--bright);line-height:1}
.stat-label{font-size:11px;color:var(--sub);font-family:var(--ff-mono);text-transform:uppercase;letter-spacing:.08em;margin-top:4px}
.quick-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.upcoming-tasks{display:flex;flex-direction:column;gap:8px}
.ut-item{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--ink3);border-radius:var(--r2);border-left:3px solid var(--lime)}
.ut-item.urgent{border-left-color:var(--rose)}
.ut-item.medium{border-left-color:var(--amber)}
.ut-name{font-size:13px;flex:1}
.ut-tag{font-size:11px;font-family:var(--ff-mono);color:var(--muted)}
.mini-pomo{display:flex;flex-direction:column;align-items:center;gap:12px;padding:20px 0}
.mini-time{font-family:var(--ff-head);font-size:48px;font-weight:800;color:var(--bright);letter-spacing:-0.04em}
.mini-btn{padding:10px 28px;background:var(--lime);color:#0a0a0f;border:none;border-radius:20px;font-family:var(--ff-head);font-size:14px;font-weight:700;cursor:pointer;transition:filter .15s}
.mini-btn:hover{filter:brightness(1.1)}

/* Notification toast */
#toast{position:fixed;bottom:24px;right:24px;background:var(--ink4);border:1px solid var(--line);border-radius:var(--r2);padding:12px 20px;font-size:13px;color:var(--text);transform:translateY(80px);transition:transform .3s;z-index:9999;display:flex;align-items:center;gap:8px}
#toast.show{transform:none}
#toast .toast-icon{font-size:16px}
</style>
</head>
<body>
<div id="app">

  <!-- Topbar -->
  <div id="topbar">
    <div class="logo">Study<span>OS</span></div>
    <div class="tagline">// your academic command center</div>
    <div id="topbar-right">
      <div class="streak-badge">&#128293; <span id="streak-count">0</span> day streak</div>
      <div>
        <div id="clock">00:00:00</div>
        <div class="date-str" id="date-str"></div>
      </div>
    </div>
  </div>

  <!-- Sidebar -->
  <div id="sidebar">
    <div class="nav-item active" data-page="home">
      <span class="ni-icon">&#127968;</span> Home
    </div>
    <div class="nav-section">Tools</div>
    <div class="nav-item" data-page="focus">
      <span class="ni-icon">&#9201;</span> Focus Timer
    </div>
    <div class="nav-item" data-page="tasks">
      <span class="ni-icon">&#9989;</span> Tasks
    </div>
    <div class="nav-item" data-page="gpa">
      <span class="ni-icon">&#128202;</span> GPA Calc
    </div>
    <div class="nav-item" data-page="notes">
      <span class="ni-icon">&#128221;</span> Notes
    </div>

    <div class="sidebar-footer">
      <div class="sf-label">Today's goal</div>
      <div class="sf-bar"><div class="sf-fill" id="sf-fill" style="width:0%"></div></div>
      <div class="sf-stat" id="sf-stat">0 / 0 tasks done</div>
    </div>
  </div>

  <!-- Main -->
  <div id="main">

    <!-- HOME -->
    <div class="panel active" id="page-home">
      <div class="home-greeting">Good <span class="accent" id="greeting-time">day</span>, Student 👋</div>
      <div class="home-sub">Here's what's happening today.</div>
      <div class="home-stats">
        <div class="stat-card sc-lime"><div class="stat-icon">&#9989;</div><div class="stat-val" id="h-tasks">0</div><div class="stat-label">Tasks Done</div></div>
        <div class="stat-card sc-amber"><div class="stat-icon">&#9201;</div><div class="stat-val" id="h-pomos">0</div><div class="stat-label">Pomodoros</div></div>
        <div class="stat-card sc-sky"><div class="stat-icon">&#128202;</div><div class="stat-val" id="h-gpa">--</div><div class="stat-label">Current GPA</div></div>
        <div class="stat-card sc-violet"><div class="stat-icon">&#128221;</div><div class="stat-val" id="h-notes">0</div><div class="stat-label">Notes</div></div>
      </div>
      <div class="quick-grid">
        <div class="card">
          <div class="card-title"><span class="dot" style="background:var(--lime)"></span>Upcoming Tasks</div>
          <div class="upcoming-tasks" id="home-tasks"></div>
        </div>
        <div class="card">
          <div class="card-title"><span class="dot" style="background:var(--amber)"></span>Quick Pomodoro</div>
          <div class="mini-pomo">
            <div class="mini-time" id="mini-pomo-display">25:00</div>
            <button class="mini-btn" id="btn-goto-focus">Start Focus Session &#8594;</button>
          </div>
        </div>
      </div>
    </div>

    <!-- FOCUS -->
    <div class="panel" id="page-focus">
      <div id="pomo-ring-wrap">
        <div class="pomo-mode-btns">
          <button class="pomo-mode-btn active" data-mode="focus" data-mins="25">Focus</button>
          <button class="pomo-mode-btn" data-mode="short" data-mins="5">Short Break</button>
          <button class="pomo-mode-btn" data-mode="long" data-mins="15">Long Break</button>
        </div>
        <div class="ring-container">
          <svg id="pomo-svg" width="220" height="220" viewBox="0 0 220 220">
            <circle class="ring-bg" cx="110" cy="110" r="100"/>
            <circle class="ring-prog" id="ring-prog" cx="110" cy="110" r="100" stroke-dasharray="628" stroke-dashoffset="0"/>
          </svg>
          <div class="ring-timer">
            <div id="pomo-time">25:00</div>
            <div id="pomo-mode-label">FOCUS</div>
          </div>
        </div>
        <div class="pomo-controls">
          <button class="pomo-btn sec" id="btn-reset" title="Reset">&#8634;</button>
          <button class="pomo-btn main" id="pomo-play-btn">&#9654;</button>
          <button class="pomo-btn sec" id="btn-skip" title="Skip">&#9197;</button>
        </div>
        <div class="pomo-sessions" id="pomo-session-dots"></div>
        <div class="pomo-stats">
          <div class="ps-item"><div class="ps-val" id="ps-today">0</div><div class="ps-label">Today</div></div>
          <div class="ps-item"><div class="ps-val" id="ps-total">0</div><div class="ps-label">Total</div></div>
          <div class="ps-item"><div class="ps-val" id="ps-mins">0</div><div class="ps-label">Min Focused</div></div>
        </div>
        <div class="pomo-task-sel">
          <select id="pomo-task-select">
            <option value="">— Link to a task (optional) —</option>
          </select>
        </div>
      </div>
    </div>

    <!-- TASKS -->
    <div class="panel" id="page-tasks">
      <div class="task-add-row">
        <input class="task-input" id="task-text-input" placeholder="Add a new task… (press Enter)" />
        <select class="task-input" id="task-tag-input" style="width:130px;flex:none">
          <option value="school">📚 School</option>
          <option value="personal">🌿 Personal</option>
          <option value="work">💼 Work</option>
          <option value="urgent">🔥 Urgent</option>
        </select>
        <button class="add-btn" id="btn-add-task">+ Add Task</button>
      </div>
      <div class="progress-row">
        <div class="progress-bar"><div class="progress-fill" id="task-progress-fill" style="width:0%"></div></div>
        <div class="progress-text" id="task-progress-text">0 / 0 complete</div>
      </div>
      <div class="task-filters">
        <button class="tf-btn active" data-filter="all">All</button>
        <button class="tf-btn" data-filter="active">Active</button>
        <button class="tf-btn" data-filter="done">Done</button>
        <button class="tf-btn" data-filter="school">School</button>
        <button class="tf-btn" data-filter="urgent">Urgent</button>
      </div>
      <div class="task-list" id="task-list"></div>
    </div>

    <!-- GPA -->
    <div class="panel" id="page-gpa">
      <div class="grid-2">
        <div class="card">
          <div class="card-title"><span class="dot" style="background:var(--lime)"></span>Add Course</div>
          <div class="course-add-row" style="grid-template-columns:1fr auto auto auto">
            <input class="course-input" id="course-name" placeholder="Course name" />
            <select class="course-input" id="course-grade">
              <option>A+</option><option>A</option><option>A-</option>
              <option>B+</option><option>B</option><option>B-</option>
              <option>C+</option><option>C</option><option>C-</option>
              <option>D+</option><option>D</option><option>F</option>
            </select>
            <input class="course-input" id="course-credits" type="number" placeholder="Credits" min="1" max="6" style="width:90px" value="3"/>
            <button class="add-btn" id="btn-add-course">Add</button>
          </div>
          <table class="course-table">
            <thead><tr><th>Course</th><th>Grade</th><th>Credits</th><th>Points</th><th></th></tr></thead>
            <tbody id="course-tbody"></tbody>
          </table>
        </div>
        <div class="card" style="display:flex;flex-direction:column;align-items:center">
          <div class="card-title" style="align-self:stretch"><span class="dot" style="background:var(--sky)"></span>Your GPA</div>
          <div class="gpa-display" style="width:100%">
            <div class="gpa-val" id="gpa-val">—</div>
            <div class="gpa-label">Cumulative GPA</div>
            <div class="gpa-meter"><div class="gpa-fill" id="gpa-fill" style="width:0%"></div></div>
          </div>
          <div class="gpa-summary">
            <div class="gpa-stat"><div class="gpa-stat-val" id="gpa-courses">0</div><div class="gpa-stat-label">Courses</div></div>
            <div class="gpa-stat"><div class="gpa-stat-val" id="gpa-credits">0</div><div class="gpa-stat-label">Credits</div></div>
            <div class="gpa-stat"><div class="gpa-stat-val" id="gpa-best">—</div><div class="gpa-stat-label">Best Grade</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- NOTES -->
    <div class="panel" id="page-notes">
      <div class="notes-grid">
        <div class="notes-sidebar">
          <div class="ns-header">
            <div class="ns-title">Notes</div>
            <button class="ns-new" id="btn-new-note">+</button>
          </div>
          <div class="note-list" id="note-list"></div>
        </div>
        <div class="notes-editor">
          <div class="ne-header">
            <input id="note-title-input" placeholder="Untitled Note" />
            <div class="ne-toolbar">
              <button class="ne-btn" id="btn-bold" title="Bold"><b>B</b></button>
              <button class="ne-btn" id="btn-italic" title="Italic"><i>I</i></button>
              <button class="ne-btn" id="btn-code" title="Code">&lt;/&gt;</button>
              <button class="ne-btn" id="btn-heading" title="Heading">H2</button>
              <button class="ne-btn" id="btn-list" title="List">&#8801;</button>
              <button class="ne-btn ne-del" id="btn-del-note" title="Delete">&#128465;</button>
            </div>
          </div>
          <textarea id="note-body" placeholder="Start writing... use Markdown: ## Heading, **bold**, *italic*, - list"></textarea>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Toast -->
<div id="toast"><span class="toast-icon" id="toast-icon"></span><span id="toast-msg"></span></div>

<script>
// Persistence
function save(k, v) { try { localStorage.setItem('studyos_' + k, JSON.stringify(v)); } catch(e) {} }
function load(k, d) { try { var v = localStorage.getItem('studyos_' + k); return v !== null ? JSON.parse(v) : d; } catch(e) { return d; } }

// State
var tasks = load('tasks', []);
var courses = load('courses', []);
var notes = load('notes', []);
var pomoState = {
  mode: 'focus',
  totalSecs: 25 * 60,
  remSecs: 25 * 60,
  running: false,
  interval: null,
  todayPomos: load('pomos_today', 0),
  totalPomos: load('pomos_total', 0),
  session: 0,
  lastDate: load('pomo_date', '')
};
var currentNote = null;
var taskFilter = 'all';
var streak = load('streak', 0);

// Clock
function updateClock() {
  var now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour12: false });
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('date-str').textContent = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate();
  var h = now.getHours();
  var greet = h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
  document.getElementById('greeting-time').textContent = greet;
}
setInterval(updateClock, 1000);
updateClock();

// Navigation
function nav(page) {
  document.querySelectorAll('.panel').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.nav-item').forEach(function(n) {
    n.classList.toggle('active', n.dataset.page === page);
  });
  document.getElementById('page-' + page).classList.add('active');
  if (page === 'home') { updateHome(); }
  if (page === 'focus') { updatePomoSessionDots(); }
  if (page === 'tasks') { renderTasks(); }
  if (page === 'gpa') { renderGPA(); }
  if (page === 'notes') { renderNoteList(); }
}

document.querySelectorAll('.nav-item').forEach(function(el) {
  el.addEventListener('click', function() { nav(el.dataset.page); });
});

// Toast
function toast(msg, icon) {
  icon = icon || 'OK';
  var t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  document.getElementById('toast-icon').textContent = icon;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2800);
}

// Home
function updateHome() {
  var done = tasks.filter(function(t) { return t.done; }).length;
  document.getElementById('h-tasks').textContent = done;
  document.getElementById('h-pomos').textContent = pomoState.todayPomos;
  document.getElementById('h-notes').textContent = notes.length;
  var gpa = calcGPA();
  document.getElementById('h-gpa').textContent = gpa > 0 ? gpa.toFixed(2) : '--';
  document.getElementById('streak-count').textContent = streak;
  var tagIcons = { school: 'School', personal: 'Personal', work: 'Work', urgent: 'Urgent' };
  var pending = tasks.filter(function(t) { return !t.done; }).slice(0, 4);
  var ht = document.getElementById('home-tasks');
  if (pending.length) {
    ht.innerHTML = pending.map(function(t) {
      var cls = t.tag === 'urgent' ? 'urgent' : t.tag === 'work' ? 'medium' : '';
      return '<div class="ut-item ' + cls + '"><span class="ut-name">' + escH(t.text) + '</span><span class="ut-tag">' + t.tag + '</span></div>';
    }).join('');
  } else {
    ht.innerHTML = '<div style="color:var(--muted);font-size:13px;padding:8px 0">All tasks done!</div>';
  }
  updateSidebarProgress();
}

function updateSidebarProgress() {
  var total = tasks.length;
  var done = tasks.filter(function(t) { return t.done; }).length;
  var pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('sf-fill').style.width = pct + '%';
  document.getElementById('sf-stat').textContent = done + ' / ' + total + ' tasks done';
}

document.getElementById('btn-goto-focus').addEventListener('click', function() { nav('focus'); });

// Pomodoro
function checkPomoDate() {
  var today = new Date().toDateString();
  if (pomoState.lastDate !== today) {
    pomoState.todayPomos = 0;
    pomoState.lastDate = today;
    save('pomo_date', today);
    save('pomos_today', 0);
  }
}
checkPomoDate();

function setPomoMode(mode, mins) {
  if (pomoState.running) { return; }
  pomoState.mode = mode;
  pomoState.totalSecs = mins * 60;
  pomoState.remSecs = mins * 60;
  var modeList = ['focus', 'short', 'long'];
  document.querySelectorAll('.pomo-mode-btn').forEach(function(b, i) {
    b.classList.toggle('active', modeList[i] === mode);
  });
  var labels = { focus: 'FOCUS', short: 'SHORT BREAK', long: 'LONG BREAK' };
  document.getElementById('pomo-mode-label').textContent = labels[mode];
  var colors = { focus: 'var(--lime)', short: 'var(--sky)', long: 'var(--violet)' };
  document.getElementById('ring-prog').style.stroke = colors[mode];
  updatePomoDisplay();
}

document.querySelectorAll('.pomo-mode-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    setPomoMode(btn.dataset.mode, parseInt(btn.dataset.mins));
  });
});

function togglePomo() {
  if (pomoState.running) {
    clearInterval(pomoState.interval);
    pomoState.running = false;
    document.getElementById('pomo-play-btn').textContent = 'Play';
  } else {
    pomoState.running = true;
    document.getElementById('pomo-play-btn').textContent = 'Pause';
    pomoState.interval = setInterval(function() {
      pomoState.remSecs--;
      if (pomoState.remSecs <= 0) {
        clearInterval(pomoState.interval);
        pomoState.running = false;
        document.getElementById('pomo-play-btn').textContent = 'Play';
        if (pomoState.mode === 'focus') {
          pomoState.todayPomos++;
          pomoState.totalPomos++;
          pomoState.session = Math.min(pomoState.session + 1, 4);
          save('pomos_today', pomoState.todayPomos);
          save('pomos_total', pomoState.totalPomos);
          updatePomoStats();
          updatePomoSessionDots();
          toast('Pomodoro done! Take a break.');
          updateStreak();
          if (pomoState.session % 4 === 0) { setPomoMode('long', 15); }
          else { setPomoMode('short', 5); }
        } else {
          toast('Break over! Back to work.');
          setPomoMode('focus', 25);
        }
      }
      updatePomoDisplay();
    }, 1000);
  }
}

function resetPomo() {
  clearInterval(pomoState.interval);
  pomoState.running = false;
  pomoState.remSecs = pomoState.totalSecs;
  document.getElementById('pomo-play-btn').textContent = 'Play';
  updatePomoDisplay();
}

function skipPomo() {
  clearInterval(pomoState.interval);
  pomoState.running = false;
  pomoState.remSecs = 0;
  document.getElementById('pomo-play-btn').textContent = 'Play';
  if (pomoState.mode === 'focus') {
    pomoState.todayPomos++;
    pomoState.totalPomos++;
    pomoState.session = Math.min(pomoState.session + 1, 4);
    save('pomos_today', pomoState.todayPomos);
    save('pomos_total', pomoState.totalPomos);
    updatePomoStats();
    updatePomoSessionDots();
    if (pomoState.session % 4 === 0) { setPomoMode('long', 15); }
    else { setPomoMode('short', 5); }
  } else {
    setPomoMode('focus', 25);
  }
}

document.getElementById('pomo-play-btn').addEventListener('click', togglePomo);
document.getElementById('btn-reset').addEventListener('click', resetPomo);
document.getElementById('btn-skip').addEventListener('click', skipPomo);

function updatePomoDisplay() {
  var m = Math.floor(pomoState.remSecs / 60).toString();
  var s = (pomoState.remSecs % 60).toString();
  if (m.length < 2) { m = '0' + m; }
  if (s.length < 2) { s = '0' + s; }
  var str = m + ':' + s;
  document.getElementById('pomo-time').textContent = str;
  document.getElementById('mini-pomo-display').textContent = str;
  var pct = 1 - (pomoState.remSecs / pomoState.totalSecs);
  var circ = 2 * Math.PI * 100;
  document.getElementById('ring-prog').style.strokeDashoffset = circ * pct;
  updatePomoStats();
}

function updatePomoStats() {
  document.getElementById('ps-today').textContent = pomoState.todayPomos;
  document.getElementById('ps-total').textContent = pomoState.totalPomos;
  document.getElementById('ps-mins').textContent = pomoState.totalPomos * 25;
  document.getElementById('h-pomos').textContent = pomoState.todayPomos;
}

function updatePomoSessionDots() {
  var container = document.getElementById('pomo-session-dots');
  var html = '';
  for (var i = 0; i < 4; i++) {
    var cls = '';
    if (i < pomoState.session % 4) { cls = 'done'; }
    else if (i === pomoState.session % 4 && pomoState.session > 0) { cls = 'current'; }
    html += '<div class="pomo-dot ' + cls + '"></div>';
  }
  container.innerHTML = html;
}

function updatePomoTaskSelect() {
  var sel = document.getElementById('pomo-task-select');
  var opts = '<option value="">-- Link to a task --</option>';
  tasks.filter(function(t) { return !t.done; }).forEach(function(t) {
    opts += '<option value="' + t.id + '">' + escH(t.text) + '</option>';
  });
  sel.innerHTML = opts;
}

updatePomoDisplay();
updatePomoSessionDots();

// Tasks
function addTask() {
  var input = document.getElementById('task-text-input');
  var tag = document.getElementById('task-tag-input').value;
  var text = input.value.trim();
  if (!text) { return; }
  tasks.unshift({ id: Date.now(), text: text, tag: tag, done: false, created: new Date().toISOString() });
  save('tasks', tasks);
  input.value = '';
  renderTasks();
  updatePomoTaskSelect();
  updateHome();
  toast('Task added');
}

document.getElementById('btn-add-task').addEventListener('click', addTask);
document.getElementById('task-text-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') { addTask(); }
});

document.querySelectorAll('.tf-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    taskFilter = btn.dataset.filter;
    document.querySelectorAll('.tf-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    renderTasks();
  });
});

function toggleTask(id) {
  var t = tasks.find(function(t) { return t.id === id; });
  if (t) {
    t.done = !t.done;
    save('tasks', tasks);
    renderTasks();
    updateHome();
    updateSidebarProgress();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(function(t) { return t.id !== id; });
  save('tasks', tasks);
  renderTasks();
  updateHome();
  updatePomoTaskSelect();
}

function renderTasks() {
  var filtered = tasks;
  if (taskFilter === 'active') { filtered = tasks.filter(function(t) { return !t.done; }); }
  else if (taskFilter === 'done') { filtered = tasks.filter(function(t) { return t.done; }); }
  else if (['school','personal','work','urgent'].indexOf(taskFilter) > -1) {
    filtered = tasks.filter(function(t) { return t.tag === taskFilter; });
  }
  var list = document.getElementById('task-list');
  var tagEmoji = { school: 'School', personal: 'Personal', work: 'Work', urgent: 'Urgent' };
  list.innerHTML = filtered.map(function(t) {
    return '<div class="task-item ' + (t.done ? 'done' : '') + '" data-id="' + t.id + '">' +
      '<div class="task-cb ' + (t.done ? 'checked' : '') + '" data-action="toggle" data-id="' + t.id + '">' + (t.done ? '&#10003;' : '') + '</div>' +
      '<span class="task-text">' + escH(t.text) + '</span>' +
      '<span class="task-tag tag-' + t.tag + '">' + t.tag + '</span>' +
      '<button class="task-del" data-action="delete" data-id="' + t.id + '">&#215;</button>' +
      '</div>';
  }).join('');

  // Wire task events via delegation
  list.querySelectorAll('[data-action="toggle"]').forEach(function(el) {
    el.addEventListener('click', function() { toggleTask(Number(el.dataset.id)); });
  });
  list.querySelectorAll('[data-action="delete"]').forEach(function(el) {
    el.addEventListener('click', function() { deleteTask(Number(el.dataset.id)); });
  });

  var total = tasks.length;
  var done = tasks.filter(function(t) { return t.done; }).length;
  var pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('task-progress-fill').style.width = pct + '%';
  document.getElementById('task-progress-text').textContent = done + ' / ' + total + ' complete';
}
renderTasks();
updatePomoTaskSelect();

// GPA
var gradePoints = { 'A+': 4.0, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0 };

function addCourse() {
  var name = document.getElementById('course-name').value.trim();
  var grade = document.getElementById('course-grade').value;
  var credits = parseInt(document.getElementById('course-credits').value) || 3;
  if (!name) { return; }
  courses.push({ id: Date.now(), name: name, grade: grade, credits: credits });
  save('courses', courses);
  document.getElementById('course-name').value = '';
  renderGPA();
  toast('Course added');
}

document.getElementById('btn-add-course').addEventListener('click', addCourse);
document.getElementById('course-name').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') { addCourse(); }
});

function deleteCourse(id) {
  courses = courses.filter(function(c) { return c.id !== id; });
  save('courses', courses);
  renderGPA();
}

function calcGPA() {
  if (!courses.length) { return 0; }
  var totalPts = courses.reduce(function(s, c) { return s + gradePoints[c.grade] * c.credits; }, 0);
  var totalCr = courses.reduce(function(s, c) { return s + c.credits; }, 0);
  return totalCr ? totalPts / totalCr : 0;
}

function renderGPA() {
  var tbody = document.getElementById('course-tbody');
  tbody.innerHTML = courses.map(function(c) {
    var letter = c.grade[0];
    return '<tr>' +
      '<td>' + escH(c.name) + '</td>' +
      '<td><span class="grade-chip grade-' + letter + '">' + c.grade + '</span></td>' +
      '<td>' + c.credits + '</td>' +
      '<td>' + gradePoints[c.grade].toFixed(1) + '</td>' +
      '<td><button class="del-row" data-id="' + c.id + '">&#215;</button></td>' +
      '</tr>';
  }).join('');

  tbody.querySelectorAll('.del-row').forEach(function(btn) {
    btn.addEventListener('click', function() { deleteCourse(Number(btn.dataset.id)); });
  });

  var gpa = calcGPA();
  document.getElementById('gpa-val').textContent = courses.length ? gpa.toFixed(2) : '--';
  document.getElementById('gpa-fill').style.width = courses.length ? (gpa / 4 * 100) + '%' : '0%';
  document.getElementById('gpa-courses').textContent = courses.length;
  document.getElementById('gpa-credits').textContent = courses.reduce(function(s, c) { return s + c.credits; }, 0);
  var best = courses.length ? courses.reduce(function(a, b) { return gradePoints[a.grade] >= gradePoints[b.grade] ? a : b; }).grade : '--';
  document.getElementById('gpa-best').textContent = best;
  document.getElementById('h-gpa').textContent = gpa > 0 ? gpa.toFixed(2) : '--';
}
renderGPA();

// Notes
document.getElementById('btn-new-note').addEventListener('click', function() { newNote(); });

function newNote() {
  var note = { id: Date.now(), title: 'Untitled Note', body: '', date: new Date().toISOString() };
  notes.unshift(note);
  save('notes', notes);
  selectNote(note.id);
  renderNoteList();
}

function selectNote(id) {
  currentNote = id;
  var note = notes.find(function(n) { return n.id === id; });
  if (!note) { return; }
  document.getElementById('note-title-input').value = note.title;
  document.getElementById('note-body').value = note.body;
  renderNoteList();
}

function deleteNote() {
  if (!currentNote) { return; }
  notes = notes.filter(function(n) { return n.id !== currentNote; });
  save('notes', notes);
  currentNote = notes.length ? notes[0].id : null;
  if (currentNote) {
    selectNote(currentNote);
  } else {
    document.getElementById('note-title-input').value = '';
    document.getElementById('note-body').value = '';
  }
  renderNoteList();
  document.getElementById('h-notes').textContent = notes.length;
  toast('Note deleted');
}

function renderNoteList() {
  var list = document.getElementById('note-list');
  list.innerHTML = notes.map(function(n) {
    var active = n.id === currentNote ? 'active' : '';
    var preview = escH(n.body.substring(0, 60)) || 'No content';
    var dateStr = new Date(n.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return '<div class="note-li ' + active + '" data-id="' + n.id + '">' +
      '<div class="nl-title">' + (escH(n.title) || 'Untitled') + '</div>' +
      '<div class="nl-preview">' + preview + '</div>' +
      '<div class="nl-date">' + dateStr + '</div>' +
      '</div>';
  }).join('');

  list.querySelectorAll('.note-li').forEach(function(el) {
    el.addEventListener('click', function() { selectNote(Number(el.dataset.id)); });
  });

  document.getElementById('h-notes').textContent = notes.length;
}

document.getElementById('note-title-input').addEventListener('input', function() {
  if (!currentNote) { return; }
  var n = notes.find(function(n) { return n.id === currentNote; });
  if (n) { n.title = this.value; n.date = new Date().toISOString(); save('notes', notes); renderNoteList(); }
});

document.getElementById('note-body').addEventListener('input', function() {
  if (!currentNote) { return; }
  var n = notes.find(function(n) { return n.id === currentNote; });
  if (n) { n.body = this.value; n.date = new Date().toISOString(); save('notes', notes); renderNoteList(); }
});

function insertMd(before, after) {
  var ta = document.getElementById('note-body');
  var s = ta.selectionStart;
  var e = ta.selectionEnd;
  var sel = ta.value.substring(s, e);
  ta.value = ta.value.substring(0, s) + before + sel + after + ta.value.substring(e);
  ta.selectionStart = s + before.length;
  ta.selectionEnd = s + before.length + sel.length;
  ta.focus();
  ta.dispatchEvent(new Event('input'));
}

var MD_BOLD   = String.fromCharCode(42,42);
var MD_ITALIC = String.fromCharCode(42);
var MD_CODE   = String.fromCharCode(96);
var MD_HEAD   = String.fromCharCode(35,35,32);
var MD_LIST   = String.fromCharCode(45,32);
var EMPTY     = '';

document.getElementById('btn-bold').addEventListener('click', function() { insertMd(MD_BOLD, MD_BOLD); });
document.getElementById('btn-italic').addEventListener('click', function() { insertMd(MD_ITALIC, MD_ITALIC); });
document.getElementById('btn-code').addEventListener('click', function() { insertMd(MD_CODE, MD_CODE); });
document.getElementById('btn-heading').addEventListener('click', function() { insertMd(MD_HEAD, EMPTY); });
document.getElementById('btn-list').addEventListener('click', function() { insertMd(MD_LIST, EMPTY); });
document.getElementById('btn-del-note').addEventListener('click', function() { deleteNote(); });

if (notes.length) { selectNote(notes[0].id); }
renderNoteList();

// Streak
function updateStreak() {
  var today = new Date().toDateString();
  var lastActive = load('last_active', '');
  var yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastActive === today) { return; }
  if (lastActive === yesterday) { streak++; }
  else if (lastActive !== today) { streak = 1; }
  save('streak', streak);
  save('last_active', today);
  document.getElementById('streak-count').textContent = streak;
}
updateStreak();

// Utils
function escH(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Init
updateHome();
</script>
</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}
function copyCODE110() {
  const code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Maison Noir — Fine Dining</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600&family=Raleway:wght@300;400&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --black: #0a0806;
      --deep: #111009;
      --gold: #c8a96e;
      --gold-light: #e2c98a;
      --cream: #f5efe4;
      --warm-white: #faf7f2;
      --muted: #7a6e60;
      --border-gold: rgba(200, 169, 110, 0.3);
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--black);
      color: var(--cream);
      font-family: 'Raleway', sans-serif;
      font-weight: 300;
      overflow-x: hidden;
      cursor: none;
    }

    /* Custom cursor */
    .cursor {
      position: fixed;
      width: 8px; height: 8px;
      background: var(--gold);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease;
    }
    .cursor-ring {
      position: fixed;
      width: 32px; height: 32px;
      border: 1px solid var(--gold);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: all 0.18s ease;
      opacity: 0.6;
    }

    /* Noise texture */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9990;
    }

    /* ── SCROLLBAR ── */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--black); }
    ::-webkit-scrollbar-thumb { background: var(--gold); }

    /* ── NAV ── */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.8rem 4rem;
      background: linear-gradient(to bottom, rgba(10,8,6,0.95) 0%, transparent 100%);
      animation: fadeDown 1s ease both;
    }

    .nav-logo {
      font-family: 'Cinzel', serif;
      font-size: 1.1rem;
      letter-spacing: 0.25em;
      color: var(--gold);
      text-transform: uppercase;
    }

    .nav-links {
      display: flex;
      gap: 3rem;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--cream);
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      opacity: 0.7;
      transition: opacity 0.3s, color 0.3s;
    }

    .nav-links a:hover { opacity: 1; color: var(--gold); }

    .nav-reserve {
      font-family: 'Cinzel', serif;
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      border: 1px solid var(--gold);
      padding: 0.6rem 1.5rem;
      text-decoration: none;
      transition: background 0.3s, color 0.3s;
    }

    .nav-reserve:hover {
      background: var(--gold);
      color: var(--black);
    }

    /* ── HERO ── */
    .hero {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 60% 40%, rgba(200,169,110,0.08) 0%, transparent 60%),
        radial-gradient(ellipse at 20% 80%, rgba(200,169,110,0.05) 0%, transparent 50%),
        linear-gradient(160deg, #1a1510 0%, #0a0806 50%, #0d0b08 100%);
    }

    /* Decorative lines */
    .hero-lines {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .hero-lines::before,
    .hero-lines::after {
      content: '';
      position: absolute;
      border: 1px solid var(--border-gold);
    }

    .hero-lines::before {
      top: 10%; left: 6%; right: 6%; bottom: 10%;
    }

    .hero-lines::after {
      top: 12%; left: 8%; right: 8%; bottom: 12%;
    }

    .hero-content {
      text-align: center;
      position: relative;
      z-index: 2;
      animation: fadeUp 1.2s ease 0.3s both;
    }

    .hero-eyebrow {
      font-family: 'Cinzel', serif;
      font-size: 0.65rem;
      letter-spacing: 0.4em;
      color: var(--gold);
      text-transform: uppercase;
      margin-bottom: 2rem;
      opacity: 0;
      animation: fadeUp 0.9s ease 0.5s forwards;
    }

    .hero-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(4.5rem, 10vw, 9rem);
      font-weight: 300;
      line-height: 0.9;
      letter-spacing: -0.01em;
      color: var(--warm-white);
      opacity: 0;
      animation: fadeUp 1s ease 0.7s forwards;
    }

    .hero-title em {
      font-style: italic;
      color: var(--gold-light);
    }

    .hero-subtitle {
      font-size: 0.78rem;
      letter-spacing: 0.3em;
      color: var(--muted);
      text-transform: uppercase;
      margin-top: 2.5rem;
      opacity: 0;
      animation: fadeUp 0.9s ease 1s forwards;
    }

    .hero-divider {
      width: 60px;
      height: 1px;
      background: var(--gold);
      margin: 2rem auto;
      opacity: 0;
      animation: expandWidth 0.8s ease 1.2s forwards;
    }

    .hero-cta {
      display: inline-flex;
      gap: 1.5rem;
      align-items: center;
      opacity: 0;
      animation: fadeUp 0.9s ease 1.4s forwards;
    }

    .btn-primary {
      font-family: 'Cinzel', serif;
      font-size: 0.65rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      background: var(--gold);
      color: var(--black);
      padding: 1rem 2.5rem;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s, transform 0.3s;
    }

    .btn-primary:hover {
      background: var(--gold-light);
      transform: translateY(-2px);
    }

    .btn-ghost {
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--cream);
      text-decoration: none;
      opacity: 0.6;
      transition: opacity 0.3s;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .btn-ghost::after {
      content: '→';
      font-size: 0.9rem;
      transition: transform 0.3s;
    }

    .btn-ghost:hover { opacity: 1; }
    .btn-ghost:hover::after { transform: translateX(4px); }

    .hero-scroll {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      opacity: 0;
      animation: fadeUp 0.9s ease 1.8s forwards;
    }

    .hero-scroll span {
      font-size: 0.6rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .scroll-line {
      width: 1px;
      height: 50px;
      background: linear-gradient(to bottom, var(--gold), transparent);
      animation: scrollDrop 1.5s ease-in-out infinite;
    }

    /* ── INTRO ── */
    .intro {
      padding: 10rem 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .intro-label {
      font-family: 'Cinzel', serif;
      font-size: 0.6rem;
      letter-spacing: 0.35em;
      color: var(--gold);
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    .intro-text h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.5rem, 4vw, 3.8rem);
      font-weight: 300;
      line-height: 1.15;
      color: var(--warm-white);
      margin-bottom: 2rem;
    }

    .intro-text h2 em {
      font-style: italic;
      color: var(--gold-light);
    }

    .intro-text p {
      font-size: 0.88rem;
      line-height: 1.9;
      color: var(--muted);
      margin-bottom: 1rem;
    }

    .intro-visual {
      position: relative;
    }

    .intro-card {
      background: linear-gradient(135deg, #1c1710 0%, #141109 100%);
      border: 1px solid var(--border-gold);
      padding: 3rem;
      position: relative;
    }

    .intro-card::before {
      content: '';
      position: absolute;
      top: -1px; left: 2rem; right: 2rem;
      height: 2px;
      background: linear-gradient(to right, transparent, var(--gold), transparent);
    }

    .stat-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }

    .stat-item {}

    .stat-number {
      font-family: 'Cormorant Garamond', serif;
      font-size: 3.5rem;
      font-weight: 300;
      color: var(--gold);
      line-height: 1;
    }

    .stat-label {
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 0.4rem;
    }

    /* ── MENU SECTION ── */
    .menu-section {
      padding: 8rem 4rem;
      background: linear-gradient(to bottom, transparent, #0d0b08 30%, #0d0b08 70%, transparent);
    }

    .section-header {
      text-align: center;
      margin-bottom: 5rem;
    }

    .section-label {
      font-family: 'Cinzel', serif;
      font-size: 0.6rem;
      letter-spacing: 0.4em;
      color: var(--gold);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      margin-bottom: 1.5rem;
    }

    .section-label::before,
    .section-label::after {
      content: '';
      width: 40px;
      height: 1px;
      background: var(--gold);
      opacity: 0.5;
    }

    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.8rem, 5vw, 4.5rem);
      font-weight: 300;
      color: var(--warm-white);
      line-height: 1;
    }

    .section-title em {
      font-style: italic;
      color: var(--gold-light);
    }

    .menu-tabs {
      display: flex;
      justify-content: center;
      gap: 0;
      margin-bottom: 4rem;
      border: 1px solid var(--border-gold);
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }

    .tab-btn {
      font-family: 'Cinzel', serif;
      font-size: 0.62rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      padding: 0.9rem 2rem;
      background: transparent;
      border: none;
      color: var(--muted);
      cursor: pointer;
      border-right: 1px solid var(--border-gold);
      transition: all 0.3s;
    }

    .tab-btn:last-child { border-right: none; }

    .tab-btn.active {
      background: var(--gold);
      color: var(--black);
    }

    .tab-btn:hover:not(.active) {
      color: var(--gold);
      background: rgba(200,169,110,0.05);
    }

    .menu-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5px;
      max-width: 1100px;
      margin: 0 auto;
      background: var(--border-gold);
    }

    .menu-item {
      background: var(--deep);
      padding: 2.5rem 2rem;
      position: relative;
      transition: background 0.3s;
      overflow: hidden;
    }

    .menu-item::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(to right, transparent, var(--gold), transparent);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    .menu-item:hover::before { transform: scaleX(1); }
    .menu-item:hover { background: #161310; }

    .menu-item-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.8rem;
    }

    .menu-item-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--warm-white);
      flex: 1;
      padding-right: 1rem;
    }

    .menu-item-price {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.1rem;
      color: var(--gold);
      white-space: nowrap;
    }

    .menu-item-desc {
      font-size: 0.75rem;
      line-height: 1.7;
      color: var(--muted);
    }

    .menu-item-tag {
      display: inline-block;
      font-size: 0.55rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--gold);
      border: 1px solid var(--border-gold);
      padding: 0.2rem 0.6rem;
      margin-top: 1rem;
    }

    /* ── AMBIENCE ── */
    .ambience {
      padding: 8rem 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .ambience-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 1rem;
    }

    .amb-card {
      background: linear-gradient(135deg, #1a1610, #0f0d0a);
      border: 1px solid var(--border-gold);
      padding: 3rem 2.5rem;
      position: relative;
      overflow: hidden;
      transition: transform 0.4s ease;
    }

    .amb-card:hover { transform: translateY(-4px); }

    .amb-card.large {
      grid-column: span 2;
    }

    .amb-icon {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      display: block;
    }

    .amb-card h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.6rem;
      font-weight: 300;
      color: var(--warm-white);
      margin-bottom: 0.8rem;
    }

    .amb-card p {
      font-size: 0.78rem;
      line-height: 1.8;
      color: var(--muted);
    }

    .amb-card::after {
      content: '';
      position: absolute;
      bottom: 0; right: 0;
      width: 80px; height: 80px;
      background: radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%);
    }

    /* ── RESERVATION ── */
    .reservation {
      padding: 8rem 4rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .reservation::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.06) 0%, transparent 70%);
    }

    .reservation-inner {
      max-width: 700px;
      margin: 0 auto;
      position: relative;
    }

    .reservation h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(3rem, 5vw, 5rem);
      font-weight: 300;
      color: var(--warm-white);
      line-height: 1;
      margin-bottom: 1.5rem;
    }

    .reservation h2 em { font-style: italic; color: var(--gold-light); }

    .reservation p {
      font-size: 0.82rem;
      color: var(--muted);
      line-height: 1.8;
      margin-bottom: 3rem;
    }

    .res-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border-gold);
      margin-bottom: 1px;
    }

    .res-form-bottom {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1px;
      background: var(--border-gold);
      margin-bottom: 2rem;
    }

    .res-input {
      background: var(--deep);
      border: none;
      padding: 1.2rem 1.5rem;
      color: var(--cream);
      font-family: 'Raleway', sans-serif;
      font-size: 0.78rem;
      letter-spacing: 0.05em;
      width: 100%;
      outline: none;
      transition: background 0.2s;
    }

    .res-input::placeholder { color: var(--muted); }
    .res-input:focus { background: #181410; }

    .res-select {
      background: var(--deep);
      border: none;
      padding: 1.2rem 1.5rem;
      color: var(--muted);
      font-family: 'Raleway', sans-serif;
      font-size: 0.78rem;
      letter-spacing: 0.05em;
      width: 100%;
      outline: none;
      cursor: pointer;
      appearance: none;
      transition: background 0.2s;
    }

    .res-select:focus { background: #181410; color: var(--cream); }

    .btn-reserve-large {
      font-family: 'Cinzel', serif;
      font-size: 0.7rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      background: var(--gold);
      color: var(--black);
      border: none;
      padding: 1.2rem 4rem;
      cursor: pointer;
      font-weight: 600;
      width: 100%;
      transition: background 0.3s, transform 0.3s;
    }

    .btn-reserve-large:hover {
      background: var(--gold-light);
      transform: translateY(-2px);
    }

    /* ── TESTIMONIALS ── */
    .testimonials {
      padding: 6rem 4rem;
      max-width: 1100px;
      margin: 0 auto;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .testimonial {
      border: 1px solid var(--border-gold);
      padding: 2.5rem;
      position: relative;
    }

    .testimonial::before {
      content: '"';
      font-family: 'Cormorant Garamond', serif;
      font-size: 5rem;
      color: var(--gold);
      opacity: 0.3;
      position: absolute;
      top: 0.5rem; left: 1.5rem;
      line-height: 1;
    }

    .testimonial-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.1rem;
      font-style: italic;
      color: var(--cream);
      line-height: 1.7;
      margin-bottom: 1.5rem;
      padding-top: 1rem;
    }

    .testimonial-author {
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
    }

    .testimonial-stars {
      color: var(--gold);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      margin-bottom: 1rem;
    }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid var(--border-gold);
      padding: 4rem;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto 0;
    }

    .footer-brand .nav-logo { font-size: 1.4rem; display: block; margin-bottom: 1rem; }

    .footer-brand p {
      font-size: 0.76rem;
      line-height: 1.8;
      color: var(--muted);
      max-width: 260px;
    }

    .footer-col h4 {
      font-family: 'Cinzel', serif;
      font-size: 0.6rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1.5rem;
    }

    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 0.7rem; }
    .footer-col ul li a {
      text-decoration: none;
      font-size: 0.76rem;
      color: var(--muted);
      transition: color 0.2s;
    }
    .footer-col ul li a:hover { color: var(--gold); }

    .footer-bottom {
      border-top: 1px solid var(--border-gold);
      padding: 1.5rem 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-bottom p {
      font-size: 0.65rem;
      color: var(--muted);
      letter-spacing: 0.1em;
    }

    /* ── ANIMATIONS ── */
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes expandWidth {
      from { opacity: 0; width: 0; }
      to   { opacity: 1; width: 60px; }
    }

    @keyframes scrollDrop {
      0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
      50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
      100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
    }

    /* ── MOBILE ── */
    @media (max-width: 900px) {
      nav { padding: 1.2rem 1.5rem; }
      .nav-links { display: none; }
      .intro { grid-template-columns: 1fr; gap: 3rem; padding: 5rem 1.5rem; }
      .menu-grid { grid-template-columns: 1fr; }
      .ambience-grid { grid-template-columns: 1fr; }
      .amb-card.large { grid-column: span 1; }
      .testimonials-grid { grid-template-columns: 1fr; }
      .res-form, .res-form-bottom { grid-template-columns: 1fr; }
      footer { grid-template-columns: 1fr 1fr; }
      .hero-lines::before, .hero-lines::after { display: none; }
    }
  </style>
</head>
<body>

<!-- Custom cursor -->
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- ── NAV ── -->
<nav>
  <div class="nav-logo">Maison Noir</div>
  <ul class="nav-links">
    <li><a href="#menu">Menu</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#ambience">Experience</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#reserve" class="nav-reserve">Reserve a Table</a>
</nav>

<!-- ── HERO ── -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-lines"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">Est. 2008 · Paris — New York</p>
    <h1 class="hero-title">
      Where Every<br><em>Dish Tells</em><br>a Story
    </h1>
    <p class="hero-subtitle">Fine Dining · Seasonal Cuisine · Curated Wines</p>
    <div class="hero-divider"></div>
    <div class="hero-cta">
      <a href="#reserve" class="btn-primary">Reserve Tonight</a>
      <a href="#menu" class="btn-ghost">Explore Menu</a>
    </div>
  </div>
  <div class="hero-scroll">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<!-- ── INTRO ── -->
<section class="intro" id="about">
  <div class="intro-text">
    <p class="intro-label">Our Philosophy</p>
    <h2>A Culinary <em>Journey</em> Beyond Expectations</h2>
    <p>At Maison Noir, we believe that dining is not merely sustenance — it is an art form. Every plate that leaves our kitchen carries the story of its origin, from the hands of our artisan farmers to the craft of our Michelin-starred chef.</p>
    <p>We source exclusively from local estates and seasonal harvests, allowing nature to dictate the poetry of each menu. The result is an ever-evolving tasting experience that surprises, delights, and lingers in memory.</p>
  </div>
  <div class="intro-visual">
    <div class="intro-card">
      <div class="stat-grid">
        <div class="stat-item">
          <div class="stat-number">2★</div>
          <div class="stat-label">Michelin Stars</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">16</div>
          <div class="stat-label">Years of Excellence</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">98%</div>
          <div class="stat-label">Locally Sourced</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">400+</div>
          <div class="stat-label">Wine Labels</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── MENU ── -->
<section class="menu-section" id="menu">
  <div class="section-header">
    <div class="section-label">Curated Selection</div>
    <h2 class="section-title">Tonight's <em>Menu</em></h2>
  </div>

  <div class="menu-tabs">
    <button class="tab-btn active" onclick="setTab(this)">Starters</button>
    <button class="tab-btn" onclick="setTab(this)">Mains</button>
    <button class="tab-btn" onclick="setTab(this)">Desserts</button>
    <button class="tab-btn" onclick="setTab(this)">Wine Pairing</button>
  </div>

  <div class="menu-grid">
    <div class="menu-item">
      <div class="menu-item-top">
        <div class="menu-item-name">Truffle Velouté</div>
        <div class="menu-item-price">$38</div>
      </div>
      <div class="menu-item-desc">Black Périgord truffle, Jerusalem artichoke foam, aged parmesan crisp and winter herb oil.</div>
      <span class="menu-item-tag">Chef's Pick</span>
    </div>
    <div class="menu-item">
      <div class="menu-item-top">
        <div class="menu-item-name">Seared Scallops</div>
        <div class="menu-item-price">$46</div>
      </div>
      <div class="menu-item-desc">Hokkaido scallops, cauliflower purée, crispy capers, brown butter emulsion and micro greens.</div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top">
        <div class="menu-item-name">Foie Gras Torchon</div>
        <div class="menu-item-price">$54</div>
      </div>
      <div class="menu-item-desc">House-cured foie gras, Sauternes gelée, brioche toast and seasonal fruit compote.</div>
      <span class="menu-item-tag">Signature</span>
    </div>
    <div class="menu-item">
      <div class="menu-item-top">
        <div class="menu-item-name">Burrata Royale</div>
        <div class="menu-item-price">$28</div>
      </div>
      <div class="menu-item-desc">Imported Italian burrata, heirloom tomato, fresh basil oil, aged balsamic and sea salt.</div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top">
        <div class="menu-item-name">Tuna Tataki</div>
        <div class="menu-item-price">$42</div>
      </div>
      <div class="menu-item-desc">Yellowfin tuna, yuzu ponzu, avocado mousse, sesame, pickled radish and shiso leaf.</div>
    </div>
    <div class="menu-item">
      <div class="menu-item-top">
        <div class="menu-item-name">Bone Marrow Gratinée</div>
        <div class="menu-item-price">$36</div>
      </div>
      <div class="menu-item-desc">Roasted bone marrow, gremolata, sourdough crostini, cornichons and chimichurri.</div>
      <span class="menu-item-tag">New</span>
    </div>
  </div>
</section>

<!-- ── AMBIENCE ── -->
<section class="ambience" id="ambience">
  <div class="section-header">
    <div class="section-label">The Experience</div>
    <h2 class="section-title">Beyond <em>Dining</em></h2>
  </div>
  <div class="ambience-grid">
    <div class="amb-card large">
      <span class="amb-icon">🕯️</span>
      <h3>The Dining Room</h3>
      <p>Our intimate 40-seat dining room bathes in warm candlelight, draped in dark oak paneling and hand-stitched velvet. Every table is positioned for privacy, each setting laid with silverware crafted by a Parisian atelier. It is a space designed to slow time and heighten the senses.</p>
    </div>
    <div class="amb-card">
      <span class="amb-icon">🍷</span>
      <h3>The Wine Cellar</h3>
      <p>A curated collection of over 400 labels, spanning three centuries of viniculture. Our sommelier offers private cellar tours by appointment.</p>
    </div>
    <div class="amb-card">
      <span class="amb-icon">🎵</span>
      <h3>Live Jazz</h3>
      <p>Friday and Saturday evenings, our resident jazz trio creates a soundscape that complements every course — never intrusive, always inspiring.</p>
    </div>
    <div class="amb-card">
      <span class="amb-icon">🎂</span>
      <h3>Private Events</h3>
      <p>The Salon Privé seats up to 20 guests for exclusive celebrations, corporate dinners and bespoke tasting menus designed for the occasion.</p>
    </div>
    <div class="amb-card large">
      <span class="amb-icon">👨‍🍳</span>
      <h3>Chef's Table</h3>
      <p>An unparalleled encounter with our cuisine. Six seats at the kitchen counter, where guests witness the choreography of service and enjoy an exclusive 12-course menu prepared and presented by Chef Laurent himself. Available Wednesday through Sunday, one seating per evening.</p>
    </div>
  </div>
</section>

<!-- ── TESTIMONIALS ── -->
<section class="testimonials">
  <div class="section-header">
    <div class="section-label">Guest Voices</div>
    <h2 class="section-title">Moments <em>Remembered</em></h2>
  </div>
  <div class="testimonials-grid">
    <div class="testimonial">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-text">An evening that transcended dining and became a memory I will carry for years. The truffle velouté alone was worth every mile of travel.</p>
      <div class="testimonial-author">— Isabelle M., Paris</div>
    </div>
    <div class="testimonial">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-text">Maison Noir achieves the rare — flawless technique delivered with genuine warmth. The sommelier's pairing was nothing short of revelatory.</p>
      <div class="testimonial-author">— James T., New York</div>
    </div>
    <div class="testimonial">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-text">We celebrated our anniversary at the Chef's Table. Chef Laurent came to greet us personally. An experience of extraordinary intimacy and artistry.</p>
      <div class="testimonial-author">— Sophie & Marc R., London</div>
    </div>
  </div>
</section>

<!-- ── RESERVATION ── -->
<section class="reservation" id="reserve">
  <div class="reservation-inner">
    <div class="section-label">Join Us</div>
    <h2>Make a <em>Reservation</em></h2>
    <p>Reserve your table at Maison Noir and allow us to craft an evening tailored precisely to you. For special occasions or dietary requirements, please note them below.</p>
    <div class="res-form">
      <input class="res-input" type="text" placeholder="First Name" />
      <input class="res-input" type="text" placeholder="Last Name" />
    </div>
    <div class="res-form-bottom">
      <input class="res-input" type="date" placeholder="Date" />
      <select class="res-select">
        <option value="">Time</option>
        <option>6:00 PM</option>
        <option>6:30 PM</option>
        <option>7:00 PM</option>
        <option>7:30 PM</option>
        <option>8:00 PM</option>
        <option>8:30 PM</option>
        <option>9:00 PM</option>
      </select>
      <select class="res-select">
        <option value="">Guests</option>
        <option>1 Guest</option>
        <option>2 Guests</option>
        <option>3 Guests</option>
        <option>4 Guests</option>
        <option>5 Guests</option>
        <option>6+ Guests</option>
      </select>
    </div>
    <button class="btn-reserve-large">Confirm Reservation</button>
  </div>
</section>

<!-- ── FOOTER ── -->
<footer id="contact">
  <div class="footer-brand">
    <span class="nav-logo">Maison Noir</span>
    <p>A sanctuary of fine dining nestled in the heart of the city. Open Tuesday through Sunday, evening service only.</p>
  </div>
  <div class="footer-col">
    <h4>Navigate</h4>
    <ul>
      <li><a href="#about">Our Story</a></li>
      <li><a href="#menu">The Menu</a></li>
      <li><a href="#ambience">Experience</a></li>
      <li><a href="#reserve">Reservations</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Hours</h4>
    <ul>
      <li><a href="#">Tue – Thu: 6 – 10pm</a></li>
      <li><a href="#">Fri – Sat: 5 – 11pm</a></li>
      <li><a href="#">Sunday: 5 – 9pm</a></li>
      <li><a href="#">Monday: Closed</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Contact</h4>
    <ul>
      <li><a href="#">+1 (212) 555-0188</a></li>
      <li><a href="#">hello@maisonnoir.com</a></li>
      <li><a href="#">14 Rue du Faubourg</a></li>
      <li><a href="#">New York, NY 10001</a></li>
    </ul>
  </div>
</footer>
<div class="footer-bottom">
  <p>© 2025 Maison Noir. All rights reserved.</p>
  <p>Crafted with intention · Privacy Policy</p>
</div>

<script>
  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    }, 60);
  });
  document.querySelectorAll('a, button, .menu-item, .amb-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
      ring.style.opacity = '1';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.opacity = '0.6';
    });
  });

  // Tab switching
  function setTab(btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.menu-item, .amb-card, .testimonial, .intro-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });
</script>
</body>
</html>
  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}