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
