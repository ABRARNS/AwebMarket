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