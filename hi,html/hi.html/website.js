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
 function copyCODE4() {
  const code = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>3D CV Maker — Clean Dark (Contact Included)</title>

  <style>
    /* ===== RESET ===== */
    *, *::before, *::after { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    }

    /* ===== THEME ===== */
    :root {
      --bg: #0b0f14;
      --panel: #0f1720;
      --card: #111827;
      --border: rgba(255,255,255,0.08);
      --muted: #9ca3af;
      --accent: #7c5cff;
      --radius: 16px;
    }

    body {
      background: radial-gradient(800px 400px at 20% 10%, rgba(124,92,255,0.12), transparent), var(--bg);
      color: #e5e7eb;
    }

    /* ===== LAYOUT ===== */
    .app {
      min-height: 100vh;
      padding: 24px;
      display: grid;
      grid-template-columns: 380px 1fr;
      gap: 24px;
    }

    @media (max-width: 900px) {
      .app { grid-template-columns: 1fr; }
    }

    /* ===== EDITOR ===== */
    .panel {
      background: var(--panel);
      padding: 16px;
      border-radius: var(--radius);
      border: 1px solid var(--border);
    }

    .panel h2 { margin: 0 0 12px; font-size: 18px; }

    label {
      display: block;
      margin-top: 10px;
      font-size: 13px;
      color: var(--muted);
    }

    input, textarea {
      width: 100%;
      margin-top: 4px;
      padding: 8px 10px;
      border-radius: 10px;
      border: 1px solid var(--border);
      background-color: transparent;
      color: inherit;
      font-size: 14px;
    }

    textarea { resize: vertical; min-height: 70px; }

    .buttons {
      display: flex;
      gap: 10px;
      margin-top: 14px;
      flex-wrap: wrap;
    }

    button {
      padding: 9px 14px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-weight: 600;
    }

    .primary { background: linear-gradient(90deg, var(--accent), #4ea8ff); color: #fff; }
    .ghost { background: transparent; border: 1px solid var(--border); color: var(--muted); }

    /* ===== PREVIEW ===== */
    .preview { display: grid; place-items: center; }

    .card {
      width: 420px;
      max-width: 100%;
      padding: 22px;
      border-radius: 20px;
      background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent), var(--card);
      border: 1px solid var(--border);
      box-shadow: 0 30px 80px rgba(0,0,0,0.6);
      transition: transform 0.4s ease;
    }

    .card:hover { transform: translateY(-8px) rotateX(5deg) rotateY(-5deg); }

    .row { display: flex; gap: 14px; align-items: center; }

    .avatar {
      width: 82px;
      height: 82px;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid var(--border);
    }

    .avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }

    .name { font-size: 22px; font-weight: 700; }
    .title { font-size: 14px; font-weight: 600; color: var(--accent); }
    .contact { font-size: 12px; color: var(--muted); margin-top: 4px; }

    .section { margin-top: 16px; }
    .section h3 { margin: 0 0 6px; font-size: 13px; color: var(--muted); }

    .chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .chip {
      padding: 5px 10px;
      font-size: 12px;
      border-radius: 999px;
      border: 1px solid var(--border);
    }
  </style>
</head>
<body>

  <div class="app">

    <!-- ===== EDITOR ===== -->
    <div class="panel">
      <h2>3D CV Editor</h2>

      <label>Name</label>
      <input id="name" value="Jane Doe" />

      <label>Title</label>
      <input id="title" value="Front-End Developer" />

      <label>Email</label>
      <input id="email" value="jane@email.com" />

      <label>Phone</label>
      <input id="phone" value="+1 234 567 890" />

      <label>Photo URL</label>
      <input id="photo" placeholder="https://...jpg" />

      <label>About</label>
      <textarea id="about">Creative developer focused on clean UI.</textarea>

      <label>Skills (comma separated)</label>
      <input id="skills" value="HTML, CSS, JavaScript" />

      <div class="buttons">
        <button class="primary" id="save">Save</button>
        <button class="ghost" id="load">Load</button>
        <button class="ghost" id="print">Print</button>
      </div>
    </div>

    <!-- ===== PREVIEW ===== -->
    <div class="preview">
      <div class="card" id="card">
        <div class="row">
          <div class="avatar">
            <img id="pImg" alt="profile" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300" />
          </div>
          <div>
            <div class="name" id="pName">Jane Doe</div>
            <div class="title" id="pTitle">Front-End Developer</div>
            <div class="contact" id="pContact">jane@email.com • +1 234 567 890</div>
          </div>
        </div>

        <div class="section">
          <h3>About</h3>
          <div id="pAbout">Creative developer focused on clean UI.</div>
        </div>

        <div class="section">
          <h3>Skills</h3>
          <div class="chips" id="pSkills"></div>
        </div>
      </div>
    </div>

  </div>

  <script>
    'use strict';

    const nameInput = document.getElementById('name');
    const titleInput = document.getElementById('title');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const photoInput = document.getElementById('photo');
    const aboutInput = document.getElementById('about');
    const skillsInput = document.getElementById('skills');

    const pName = document.getElementById('pName');
    const pTitle = document.getElementById('pTitle');
    const pContact = document.getElementById('pContact');
    const pImg = document.getElementById('pImg');
    const pAbout = document.getElementById('pAbout');
    const pSkills = document.getElementById('pSkills');

    const saveBtn = document.getElementById('save');
    const loadBtn = document.getElementById('load');
    const printBtn = document.getElementById('print');

    const KEY = 'cv_clean_v2';

    function update() {
      pName.textContent = nameInput.value;
      pTitle.textContent = titleInput.value;
      pContact.textContent = emailInput.value + ' • ' + phoneInput.value;
      pAbout.textContent = aboutInput.value;

      if (photoInput.value) {
        pImg.src = photoInput.value;
      }

      pSkills.innerHTML = '';
      skillsInput.value.split(',').map(s => s.trim()).filter(Boolean).forEach(skill => {
        const span = document.createElement('span');
        span.className = 'chip';
        span.textContent = skill;
        pSkills.appendChild(span);
      });
    }

    [nameInput, titleInput, emailInput, phoneInput, photoInput, aboutInput, skillsInput]
      .forEach(el => el.addEventListener('input', update));

    saveBtn.addEventListener('click', () => {
      localStorage.setItem(KEY, JSON.stringify({
        name: nameInput.value,
        title: titleInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        photo: photoInput.value,
        about: aboutInput.value,
        skills: skillsInput.value
      }));
    });

    loadBtn.addEventListener('click', () => {
      const data = JSON.parse(localStorage.getItem(KEY) || '{}');
      if (!data.name) return;
      nameInput.value = data.name;
      titleInput.value = data.title;
      emailInput.value = data.email;
      phoneInput.value = data.phone;
      photoInput.value = data.photo;
      aboutInput.value = data.about;
      skillsInput.value = data.skills;
      update();
    });

    printBtn.addEventListener('click', () => window.print());

    update();
  </script>

</body>
</html>


  `;
  navigator.clipboard.writeText(code)
    .then(() => alert("Copied!"))
    .catch(() => alert("Copy failed"));
}

