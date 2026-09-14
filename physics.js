(() => {
  'use strict';

  // Cache-bust the stylesheet so GitHub Pages cannot keep serving the previous design.
  const stylesheet = [...document.querySelectorAll('link[rel="stylesheet"]')]
    .find((link) => /\/physics\.css(?:\?|$)/.test(link.href));
  if (stylesheet) stylesheet.href = `physics.css?v=${Date.now()}`;

  const startBtn = document.getElementById('startExamBtn');
  if (startBtn && startBtn.tagName !== 'A') {
    startBtn.addEventListener('click', () => window.location.assign('./exam.html'));
  }

  const visualCount = document.querySelectorAll('.chapter .visual').length;
  if (!visualCount) return;

  const polish = document.createElement('style');
  polish.id = 'premium-notes-visual-v5';
  polish.textContent = `
    .visual.premium-visual-v4{position:relative;overflow:hidden;padding:0!important;background:linear-gradient(145deg,#ffffff 0%,#f8fbff 42%,#edf3fb 100%)!important;border:1px solid rgba(14,30,52,.08)!important;border-radius:30px!important;box-shadow:0 30px 80px rgba(17,45,78,.13),0 8px 24px rgba(17,45,78,.06),inset 0 1px 0 rgba(255,255,255,.98)!important;isolation:isolate;transform:translateZ(0)}
    .visual.premium-visual-v4::before{content:"";position:absolute;width:260px;height:260px;right:-100px;top:-120px;border-radius:50%;background:radial-gradient(circle,rgba(76,139,255,.18),rgba(76,139,255,0) 70%);pointer-events:none;z-index:0}
    .visual.premium-visual-v4::after{content:"";position:absolute;left:-120px;bottom:-150px;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(82,168,255,.11),rgba(82,168,255,0) 68%);pointer-events:none;z-index:0}
    .visual-stage-v4{position:relative;z-index:1;padding:22px 22px 14px;background:linear-gradient(180deg,rgba(255,255,255,.74),rgba(245,248,252,.5));}
    .visual-stage-v4::before{content:"";position:absolute;inset:14px;border:1px solid rgba(17,45,78,.045);border-radius:22px;pointer-events:none}
    .visual-topline-v4{position:relative;display:flex;align-items:center;justify-content:space-between;padding:0 4px 12px;color:#728197;font:700 9px/1 'Space Mono',monospace;letter-spacing:1.9px;text-transform:uppercase}
    .visual-topline-v4 .visual-index{color:#0071e3}
    .visual-art-v4{position:relative;border-radius:20px;background:linear-gradient(145deg,#fff,#f6f9fd);box-shadow:inset 0 0 0 1px rgba(17,45,78,.04),0 12px 32px rgba(17,45,78,.05);overflow:hidden}
    .visual-art-v4::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(111,144,180,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(111,144,180,.045) 1px,transparent 1px);background-size:32px 32px;mask-image:linear-gradient(to bottom,black,transparent 88%);pointer-events:none;}
    .visual-art-v4 svg{position:relative;display:block;width:100%;height:auto;margin:0!important;filter:drop-shadow(0 12px 22px rgba(17,45,78,.075));}
    .visual-art-v4 svg text{font-family:'Noto Sans KR',sans-serif;}
    .visual-footer-v4{position:relative;z-index:2;display:flex;justify-content:center;padding:12px 10px 4px;text-align:center;color:#707b8b;font-size:12px;line-height:1.6}
    .chapter .visual.premium-visual-v4{transition:transform .25s ease,box-shadow .25s ease}
    .chapter .visual.premium-visual-v4:hover{transform:translateY(-6px);box-shadow:0 38px 95px rgba(17,45,78,.16),0 10px 26px rgba(17,45,78,.07),inset 0 1px 0 rgba(255,255,255,.98)!important}
    .notes-design-board{max-width:1224px;margin:28px auto 8px;padding:0 24px;}
    .notes-design-board .board-frame{position:relative;overflow:hidden;border-radius:28px;background:#eef5fb;border:1px solid rgba(17,45,78,.08);box-shadow:0 28px 75px rgba(17,45,78,.12),0 8px 22px rgba(17,45,78,.05);}
    .notes-design-board .board-frame::before{content:"FULL CONCEPT MAP";position:absolute;top:15px;left:18px;z-index:2;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,.84);color:#5d718b;font:700 8px/1 'Space Mono',monospace;letter-spacing:1.8px;box-shadow:0 5px 14px rgba(17,45,78,.08);}
    .notes-design-board img{display:block;width:100%;height:auto;}
    @media(max-width:760px){
      .visual.premium-visual-v4{border-radius:22px!important;box-shadow:0 18px 42px rgba(17,45,78,.10)!important}
      .visual-stage-v4{padding:13px 13px 9px}.visual-stage-v4::before{inset:9px;border-radius:16px}.visual-topline-v4{padding:0 2px 9px;font-size:8px}.visual-art-v4{border-radius:15px}.visual-footer-v4{font-size:11px;padding:9px 6px 2px}.chapter .visual.premium-visual-v4:hover{transform:none}
      .notes-design-board{padding:0 14px;margin:18px auto 4px}.notes-design-board .board-frame{border-radius:20px}.notes-design-board .board-frame::before{top:10px;left:10px;font-size:7px;padding:5px 8px}
    }
    @media(prefers-reduced-motion:reduce){.chapter .visual.premium-visual-v4{transition:none}.chapter .visual.premium-visual-v4:hover{transform:none}}
  `;
  document.head.appendChild(polish);

  const board = document.createElement('section');
  board.className = 'notes-design-board';
  board.setAttribute('aria-label', '시공간과 운동 전체 개념 디자인 맵');
  board.innerHTML = `<div class="board-frame"><img src="./notes-design.svg?v=${Date.now()}" alt="힘의 합성, 포물선 운동, 원운동과 단진동, 케플러 법칙과 중력, 특수 상대성, 일반 상대성의 6개 단원 개념 시각화"></div>`;
  const wrap = document.querySelector('.wrap');
  if (wrap) wrap.parentNode.insertBefore(board, wrap);

  const loadVisuals = () => {
    if (window.__premiumVisualsLoaded) return;
    const script = document.createElement('script');
    script.src = `./notes-visuals.js?v=${Date.now()}`;
    script.onload = () => { window.__premiumVisualsLoaded = true; };
    script.onerror = () => console.warn('Premium note visuals could not be loaded.');
    document.body.appendChild(script);
  };
  loadVisuals();
})();
