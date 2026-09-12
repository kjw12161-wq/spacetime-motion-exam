(() => {
  'use strict';

  const EXAM_MINUTES = 45;
  const questions = [
    { q:'두 힘의 크기가 각각 3 N, 4 N이고 서로 수직으로 작용할 때 합력의 크기는?', o:['1 N','5 N','7 N','12 N'], a:1, e:'서로 수직인 두 벡터의 합력은 √(3²+4²)=5 N이다.' },
    { q:'두 힘이 같은 방향으로 작용할 때 합력의 크기로 옳은 것은?', o:['두 힘의 차','두 힘의 평균','두 힘의 합','항상 0'], a:2, e:'θ=0°이면 F=F₁+F₂로 합력이 최대가 된다.' },
    { q:'합력이 0인 물체의 운동 상태로 옳은 것은?', o:['반드시 정지한다','반드시 가속한다','정지 또는 등속직선운동이다','반드시 원운동한다'], a:2, e:'합력이 0이면 가속도가 0이므로 정지 또는 등속직선운동을 할 수 있다.' },
    { q:'비스듬히 던진 물체의 수평 방향 운동은 이상적으로 어떻게 보는가?', o:['등가속도 운동','등속도 운동','원운동','단진동'], a:1, e:'수평 방향에는 힘이 작용하지 않는다고 보고 속도가 일정한 등속도 운동으로 분석한다.' },
    { q:'포물선 운동에서 연직 방향에 작용하는 주요 힘은?', o:['중력','수평 마찰력','구심력','탄성력'], a:0, e:'공기 저항을 무시하면 연직 방향에는 중력만 작용한다.' },
    { q:'초속도 v₀, 발사각 θ인 포물선 운동의 수평 도달거리 R은?', o:['v₀sinθ/g','v₀²sin²θ/(2g)','v₀²sin2θ/g','2v₀/g'], a:2, e:'동일한 높이에서 출발·도착하는 이상적인 포물선 운동에서는 R=v₀²sin2θ/g이다.' },
    { q:'등속 원운동에서 구심가속도의 방향은?', o:['원의 바깥쪽','접선 방향','원의 중심 방향','항상 위쪽'], a:2, e:'구심가속도는 순간순간 원의 중심을 향한다.' },
    { q:'등속 원운동에서 속도 벡터와 구심가속도의 관계로 옳은 것은?', o:['항상 같은 방향','서로 수직','항상 반대 방향','항상 45°'], a:1, e:'속도는 접선 방향, 구심가속도는 중심 방향이므로 서로 수직이다.' },
    { q:'각속도 ω와 주기 T의 관계는?', o:['ω=T/2π','ω=2π/T','ω=2πT','ω=T²'], a:1, e:'한 바퀴는 2π rad이고 주기가 T이므로 ω=2π/T이다.' },
    { q:'단진동의 복원력 관계식으로 옳은 것은?', o:['F=kx','F=−kx','F=mv²','F=mgx'], a:1, e:'훅의 법칙에 따라 복원력은 변위에 비례하고 평형점 방향이므로 F=−kx이다.' },
    { q:'용수철-질량 계의 단진동 주기 T는?', o:['2π√(k/m)','2π√(m/k)','2πmk','m/k'], a:1, e:'용수철 진자의 주기는 T=2π√(m/k)이다.' },
    { q:'단진자의 작은 진폭에서 주기는 무엇에 의존하는가?', o:['질량과만 관련','줄 길이와 중력가속도','물체의 색깔','속력에만 관련'], a:1, e:'작은 진폭의 단진자 주기는 T=2π√(L/g)로 줄 길이와 중력가속도에 의존한다.' },
    { q:'케플러 제1법칙에서 행성의 궤도는 어떤 형태인가?', o:['정확한 직선','원만 가능','타원','포물선만 가능'], a:2, e:'행성은 태양을 한 초점으로 하는 타원 궤도를 돈다.' },
    { q:'케플러 제2법칙이 설명하는 것은?', o:['같은 시간에 쓸어가는 면적이 같다','행성의 질량이 같다','궤도 반지름이 항상 같다','모든 행성의 속도가 같다'], a:0, e:'행성과 태양을 잇는 선분이 같은 시간 동안 쓸어가는 면적은 같다.' },
    { q:'특수 상대성 이론에서 모든 관성계에서 일정하다고 보는 것은?', o:['질량','빛의 속력','운동 에너지','중력가속도'], a:1, e:'진공에서 빛의 속력은 관성계에 관계없이 일정하다는 것이 핵심 가정이다.' },
    { q:'빛의 속력에 가까운 속도로 움직일 때 나타나는 현상에 대한 설명으로 옳은 것은?', o:['시간 지연과 길이 수축을 고려해야 한다','모든 물체의 속도가 0이 된다','중력이 반드시 사라진다','빛의 속력이 관측자마다 달라진다'], a:0, e:'특수 상대성 이론에서는 빠른 상대운동에서 시간 지연과 길이 수축 같은 상대론적 효과가 나타난다.' },
    { q:'일반 상대성 이론에서 중력을 설명하는 핵심 개념은?', o:['시공간의 휘어짐','전자기력의 소멸','물체의 색','소리의 속도'], a:0, e:'질량과 에너지가 시공간을 휘게 하고, 물체는 그 휘어진 시공간에서 운동한다고 설명한다.' },
    { q:'일반 상대성 이론의 관점에서 행성이 태양 주위를 도는 현상을 가장 적절하게 설명한 것은?', o:['항상 새로운 힘이 행성을 밀어낸다','휘어진 시공간에서 자연스러운 운동을 한다','행성이 스스로 회전력을 만든다','태양이 행성을 진공청소기처럼 당긴다'], a:1, e:'태양의 질량·에너지로 휘어진 시공간에서 행성이 자연스러운 경로를 따른다고 설명한다.' },
    { q:'포물선 운동의 수평·연직 운동을 분석할 때 가장 중요한 원칙은?', o:['두 방향을 독립적으로 분석한다','수평 속도를 항상 0으로 둔다','연직 중력을 무시한다','두 방향의 가속도를 같게 둔다'], a:0, e:'수평은 등속도, 연직은 등가속도 운동으로 각각 분석한 뒤 합친다.' },
    { q:'반지름 r인 원운동에서 속력이 2배가 되면 구심력 F=mv²/r는 어떻게 변하는가? (m,r 일정)', o:['1/2배','2배','4배','8배'], a:2, e:'구심력은 속력의 제곱에 비례하므로 2배가 되면 4배가 된다.' }
  ];

  const startBtn = document.getElementById('startExamBtn');
  const timerDisplay = document.getElementById('timerDisplay');
  const panel = document.getElementById('examStartPanel');
  const timerBar = document.getElementById('examTimerBar');

  let timerId = null;
  let remaining = EXAM_MINUTES * 60;
  let started = false;
  let submitted = false;
  let shuffledQuestions = [];
  let answers = [];

  function renderTime() {
    if (!timerDisplay) return;
    const m = Math.floor(Math.max(0, remaining) / 60).toString().padStart(2, '0');
    const s = (Math.max(0, remaining) % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${m}:${s}`;
  }

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function ensureExamStyles() {
    if (document.getElementById('examRuntimeStyles')) return;
    const style = document.createElement('style');
    style.id = 'examRuntimeStyles';
    style.textContent = `
      #examApp{max-width:980px;margin:36px auto 80px;padding:0 20px;display:none}
      .exam-runtime-card{background:#fff;border:1px solid #dbe2ef;border-radius:18px;padding:28px;box-shadow:0 12px 35px rgba(17,45,78,.08)}
      .exam-runtime-head{display:flex;justify-content:space-between;gap:16px;align-items:center;margin-bottom:22px}
      .exam-runtime-head h2{margin:0;font-size:28px;color:#112d4e}
      .exam-progress{font-family:'Space Mono',monospace;color:#3f72af;font-weight:700}
      .question-card{padding:24px 0;border-top:1px solid #e8edf5}
      .question-card:first-child{border-top:0;padding-top:0}
      .question-title{font-size:18px;font-weight:700;line-height:1.65;color:#172b4d;margin:0 0 16px}
      .question-number{display:inline-block;margin-right:8px;color:#3f72af;font-family:'Space Mono',monospace}
      .answer-option{display:flex;align-items:flex-start;gap:10px;width:100%;box-sizing:border-box;padding:13px 15px;margin:9px 0;border:1px solid #dbe2ef;border-radius:12px;background:#f8fafc;cursor:pointer;text-align:left;font:inherit;color:#20334f;transition:.15s}
      .answer-option:hover{border-color:#3f72af;background:#f2f6fb}
      .answer-option input{margin-top:4px;accent-color:#3f72af}
      .answer-option.selected{border-color:#3f72af;background:#eef4fb}
      .exam-submit{width:100%;border:0;border-radius:12px;padding:15px 18px;background:#112d4e;color:#fff;font-weight:800;font-size:16px;cursor:pointer;margin-top:20px}
      .exam-submit:disabled{opacity:.55;cursor:not-allowed}
      .exam-result{display:none;margin-top:22px;padding:22px;border-radius:14px;background:#f4f7fb;border:1px solid #dbe2ef}
      .exam-score{font-size:36px;font-weight:900;color:#112d4e;margin:4px 0 10px}
      .result-message{margin:0 0 18px;color:#42536b}
      .review-item{padding:15px 0;border-top:1px solid #dbe2ef;font-size:14px;line-height:1.6}
      .review-correct{color:#1d6b45;font-weight:800}.review-wrong{color:#b53a3a;font-weight:800}
      .timer-active{display:flex!important}
      .timer-warning .time{color:#b53a3a!important}
      .exam-finished-note{margin-top:16px;padding:13px 15px;border-radius:10px;background:#fff4f4;color:#a72f2f;font-weight:700}
      @media (max-width:700px){#examApp{padding:0 12px}.exam-runtime-card{padding:18px}.exam-runtime-head{align-items:flex-start;flex-direction:column}.exam-runtime-head h2{font-size:23px}.question-title{font-size:16px}}
    `;
    document.head.appendChild(style);
  }

  function createExamArea() {
    ensureExamStyles();
    let root = document.getElementById('examApp');
    if (root) return root;
    root = document.createElement('section');
    root.id = 'examApp';
    root.innerHTML = `
      <div class="exam-runtime-card">
        <div class="exam-runtime-head">
          <h2>📝 실전 모의고사</h2>
          <div class="exam-progress" id="examProgress">0 / ${questions.length} 답변</div>
        </div>
        <div id="questionList"></div>
        <button class="exam-submit" id="submitExamBtn">답안 제출하고 채점하기</button>
        <div class="exam-result" id="examResult"></div>
      </div>`;
    const wrap = document.querySelector('.wrap');
    if (wrap) wrap.parentNode.insertBefore(root, wrap.nextSibling);
    else document.body.appendChild(root);
    root.querySelector('#submitExamBtn').addEventListener('click', () => submitExam(false));
    return root;
  }

  function renderQuestions() {
    const root = createExamArea();
    const list = root.querySelector('#questionList');
    list.innerHTML = shuffledQuestions.map((item, index) => `
      <div class="question-card" data-index="${index}">
        <p class="question-title"><span class="question-number">${index + 1}.</span>${item.q}</p>
        ${item.o.map((option, optionIndex) => `
          <label class="answer-option" data-question="${index}" data-option="${optionIndex}">
            <input type="radio" name="question-${index}" value="${optionIndex}">
            <span>${String.fromCharCode(65 + optionIndex)}. ${option}</span>
          </label>`).join('')}
      </div>`).join('');

    list.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', () => {
        const qIndex = Number(input.name.split('-')[1]);
        answers[qIndex] = Number(input.value);
        list.querySelectorAll(`[data-question="${qIndex}"]`).forEach(el => el.classList.remove('selected'));
        input.closest('.answer-option').classList.add('selected');
        updateProgress();
      });
    });
    updateProgress();
  }

  function updateProgress() {
    const progress = document.getElementById('examProgress');
    if (progress) {
      const count = answers.filter(v => Number.isInteger(v)).length;
      progress.textContent = `${count} / ${questions.length} 답변`;
    }
  }

  function submitExam(autoSubmitted) {
    if (!started || submitted) return;
    const unanswered = answers.filter(v => !Number.isInteger(v)).length;
    if (!autoSubmitted && unanswered > 0) {
      const ok = window.confirm(`아직 ${unanswered}문항을 풀지 않았습니다. 그대로 제출할까요?`);
      if (!ok) return;
    }

    submitted = true;
    started = false;
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }

    const score = shuffledQuestions.reduce((sum, item, index) => sum + (answers[index] === item.a ? 1 : 0), 0);
    const percent = Math.round(score / questions.length * 100);
    const wrong = shuffledQuestions.map((item, index) => ({item, index})).filter(({item, index}) => answers[index] !== item.a);
    const result = document.getElementById('examResult');
    if (!result) return;

    let message = '좋은 시작이야. 틀린 문제의 해설을 다시 확인해 보자.';
    if (percent >= 90) message = '훌륭해! 핵심 개념을 매우 잘 이해하고 있어.';
    else if (percent >= 75) message = '잘했어! 몇 가지 개념만 다시 점검하면 더 좋아질 수 있어.';
    else if (percent >= 60) message = '기본 개념은 잡혀 있어. 오답 해설을 중심으로 복습해 보자.';

    result.style.display = 'block';
    result.innerHTML = `
      <div>시험 ${autoSubmitted ? '시간이 종료되어 자동 제출' : '제출 완료'}</div>
      <div class="exam-score">${score} / ${questions.length} (${percent}점)</div>
      <p class="result-message">${message}</p>
      <div>${wrong.length === 0 ? '<p class="review-correct">🎉 모든 문항을 맞혔습니다!</p>' : `<strong>오답 해설 (${wrong.length}문항)</strong>${wrong.map(({item,index}) => `
        <div class="review-item"><div class="review-wrong">${index + 1}. 오답</div><div>정답: ${String.fromCharCode(65 + item.a)}. ${item.o[item.a]}</div><div>${item.e}</div></div>`).join('')}</div>`}</div>`;

    document.querySelector('#submitExamBtn').disabled = true;
    document.querySelectorAll('#questionList input').forEach(el => el.disabled = true);
    document.querySelectorAll('.answer-option').forEach(el => el.style.cursor = 'default');
    if (panel) {
      panel.classList.add('finished');
      panel.querySelector('.exam-info p').textContent = `채점 완료 · ${score}/${questions.length}점`;
      startBtn.textContent = '다시 시험 보기';
      startBtn.disabled = false;
    }
    if (timerDisplay) timerDisplay.textContent = '00:00';
    if (timerBar) timerBar.classList.remove('timer-warning');
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.removeEventListener('beforeunload', preventExit);
  }

  function tick() {
    remaining -= 1;
    renderTime();
    if (remaining <= 60 && timerBar) timerBar.classList.add('timer-warning');
    if (remaining <= 0) {
      remaining = 0;
      renderTime();
      submitExam(true);
      alert('시험 시간이 종료되었습니다. 답안을 자동으로 제출했습니다.');
    }
  }

  function preventExit(event) {
    if (!started || submitted) return;
    event.preventDefault();
    event.returnValue = '';
  }

  function startExam() {
    if (started) return;

    submitted = false;
    started = true;
    remaining = EXAM_MINUTES * 60;
    shuffledQuestions = shuffle(questions);
    answers = new Array(shuffledQuestions.length).fill(undefined);

    const root = createExamArea();
    root.style.display = 'block';
    renderQuestions();
    const result = document.getElementById('examResult');
    if (result) { result.style.display = 'none'; result.innerHTML = ''; }
    const submitBtn = document.getElementById('submitExamBtn');
    if (submitBtn) submitBtn.disabled = false;

    renderTime();
    if (timerBar) timerBar.classList.add('timer-active');
    if (panel) panel.classList.add('started');
    if (startBtn) {
      startBtn.textContent = '시험 진행 중';
      startBtn.disabled = true;
    }

    if (timerId) clearInterval(timerId);
    timerId = setInterval(tick, 1000);
    window.addEventListener('beforeunload', preventExit);
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (submitted) {
        startExam();
      } else {
        startExam();
      }
    });
  }

  renderTime();
  createExamArea();
})();
