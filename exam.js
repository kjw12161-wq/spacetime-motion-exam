(() => {
  'use strict';
  const bank = Array.isArray(window.EXAM_BANK) ? window.EXAM_BANK : [];
  const total = 20;
  const minutes = 45;
  let pool = [];
  let current = 0;
  let answers = [];
  let remaining = minutes * 60;
  let timer = null;
  let submitted = false;

  const $ = (id) => document.getElementById(id);
  const questionNo = $('questionNo');
  const chapter = $('chapter');
  const question = $('question');
  const options = $('options');
  const progress = $('progress');
  const grid = $('questionGrid');
  const timerEl = $('timer');
  const prev = $('prevBtn');
  const next = $('nextBtn');
  const submit = $('submitBtn');
  const card = $('examCard');
  const result = $('resultCard');
  const resultScore = $('resultScore');
  const resultText = $('resultText');
  const review = $('review');

  if (!bank.length) {
    question.textContent = '문제은행을 불러오지 못했습니다.';
    return;
  }

  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function selectBalanced() {
    const groups = new Map();
    for (const item of bank) {
      if (!groups.has(item.chapter)) groups.set(item.chapter, []);
      groups.get(item.chapter).push(item);
    }
    const chapters = shuffle([...groups.keys()]);
    const picked = [];
    let cursor = 0;
    while (picked.length < total && picked.length < bank.length) {
      const ch = chapters[cursor % chapters.length];
      const list = groups.get(ch);
      if (list.length) picked.push(list.shift());
      cursor++;
      if (cursor > total * chapters.length * 2) break;
    }
    return shuffle(picked).slice(0, total);
  }

  function renderTimer() {
    const m = Math.floor(Math.max(0, remaining) / 60).toString().padStart(2, '0');
    const s = (Math.max(0, remaining) % 60).toString().padStart(2, '0');
    timerEl.textContent = `${m}:${s}`;
    timerEl.classList.toggle('warning', remaining <= 300);
  }

  function updateProgress() {
    const answered = answers.filter((v) => v !== null).length;
    progress.textContent = `${answered} / ${pool.length} 답변`;
  }

  function renderGrid() {
    grid.innerHTML = '';
    pool.forEach((_, i) => {
      const b = document.createElement('button');
      b.className = 'qdot';
      b.type = 'button';
      b.textContent = i + 1;
      if (i === current) b.classList.add('current');
      if (answers[i] !== null) b.classList.add('done');
      b.addEventListener('click', () => { current = i; renderQuestion(); });
      grid.appendChild(b);
    });
  }

  function renderQuestion() {
    const item = pool[current];
    questionNo.textContent = `${current + 1} / ${pool.length}`;
    chapter.textContent = item.chapter;
    question.textContent = item.q;
    options.innerHTML = '';
    item.o.forEach((text, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option';
      btn.innerHTML = `<span class="letter">${String.fromCharCode(65 + i)}</span><span>${text}</span>`;
      if (answers[current] === i) btn.classList.add('active');
      btn.addEventListener('click', () => {
        answers[current] = i;
        renderQuestion();
        updateProgress();
      });
      options.appendChild(btn);
    });
    prev.disabled = current === 0;
    next.textContent = current === pool.length - 1 ? '마지막 문항' : '다음 문제 →';
    renderGrid();
    updateProgress();
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function finish(force = false) {
    if (submitted) return;
    const unanswered = answers.reduce((n, v) => n + (v === null ? 1 : 0), 0);
    if (!force && unanswered > 0) {
      const ok = window.confirm(`아직 ${unanswered}문항이 남아 있습니다. 그대로 제출할까요?`);
      if (!ok) return;
    }
    submitted = true;
    clearInterval(timer);
    timer = null;
    let score = 0;
    const byChapter = new Map();
    pool.forEach((item, i) => {
      const correct = answers[i] === item.a;
      if (correct) score++;
      if (!byChapter.has(item.chapter)) byChapter.set(item.chapter, [0,0]);
      const stat = byChapter.get(item.chapter);
      stat[1]++;
      if (correct) stat[0]++;
    });
    const pct = Math.round((score / pool.length) * 100);
    resultScore.textContent = `${score} / ${pool.length}점`;
    resultText.innerHTML = `정답률 <strong>${pct}%</strong> · 남은 시간 <strong>${Math.floor(remaining/60)}분 ${remaining%60}초</strong>`;
    review.innerHTML = `<h2>문항별 결과</h2>` + pool.map((item,i)=>{
      const ok = answers[i] === item.a;
      const yours = answers[i] === null ? '미응답' : `${String.fromCharCode(65 + answers[i])}. ${item.o[answers[i]]}`;
      const ans = `${String.fromCharCode(65 + item.a)}. ${item.o[item.a]}`;
      return `<div class="review"><div class="state ${ok?'good':'bad'}">${i+1}번 · ${ok?'정답':'오답'}</div><p><b>내 답:</b> ${yours}</p><p><b>정답:</b> ${ans}</p><p><b>해설:</b> ${item.e}</p></div>`;
    }).join('') + `<div class="result-section"><h2>단원별 성적</h2>` + [...byChapter.entries()].map(([name,[a,t]])=>`<p>${name}: <strong>${a}/${t}</strong> (${Math.round(a/t*100)}%)</p>`).join('') + '</div>';
    card.classList.add('hidden');
    result.style.display = 'block';
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function start() {
    pool = selectBalanced();
    answers = Array(pool.length).fill(null);
    current = 0;
    remaining = minutes * 60;
    submitted = false;
    renderTimer();
    renderQuestion();
    clearInterval(timer);
    timer = setInterval(() => {
      remaining--;
      renderTimer();
      if (remaining <= 0) finish(true);
    }, 1000);
  }

  prev.addEventListener('click', () => { if (current > 0) { current--; renderQuestion(); } });
  next.addEventListener('click', () => { if (current < pool.length - 1) { current++; renderQuestion(); } });
  submit.addEventListener('click', () => finish(false));
  $('restartBtn').addEventListener('click', () => {
    result.style.display = 'none';
    card.classList.remove('hidden');
    start();
  });
  window.addEventListener('beforeunload', (e) => {
    if (!submitted && timer) { e.preventDefault(); e.returnValue = ''; }
  });

  start();
})();
