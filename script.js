(() => {
  'use strict';

  const startBtn = document.getElementById('startExamBtn');
  if (startBtn && startBtn.tagName !== 'A') {
    startBtn.addEventListener('click', () => window.location.assign('./exam.html'));
  }

  const notePage = document.querySelector('.wrap') && document.querySelectorAll('.chapter .visual').length;
  if (!notePage) return;

  // Visual polish layer: stronger hierarchy, depth, and responsive SVG presentation.
  const polish = document.createElement('style');
  polish.id = 'premium-notes-visual-style';
  polish.textContent = `
    .visual.premium-visual{position:relative;overflow:hidden;padding:10px;background:linear-gradient(145deg,#ffffff 0%,#f4f8fd 100%);border:1px solid #cbd8e8;border-radius:20px;box-shadow:0 18px 45px rgba(17,45,78,.10),0 3px 10px rgba(17,45,78,.05);isolation:isolate}
    .visual.premium-visual::before{content:"";position:absolute;inset:-40%;background:radial-gradient(circle at 75% 15%,rgba(117,169,255,.20),transparent 35%),radial-gradient(circle at 15% 85%,rgba(63,114,175,.10),transparent 32%);pointer-events:none;z-index:-1}
    .visual.premium-visual svg{display:block;width:100%;height:auto;border-radius:14px}
    .visual.premium-visual .visual-hint{padding:8px 12px 4px;text-align:right;font:700 9px/1 'Space Mono',monospace;letter-spacing:1.7px;color:#8a9ab0}
    .chapter .visual.premium-visual{transition:transform .22s ease,box-shadow .22s ease}
    .chapter .visual.premium-visual:hover{transform:translateY(-3px);box-shadow:0 24px 55px rgba(17,45,78,.13),0 5px 14px rgba(17,45,78,.06)}
    @media(max-width:760px){.visual.premium-visual{padding:7px;border-radius:16px;box-shadow:0 12px 28px rgba(17,45,78,.08)}.visual.premium-visual .visual-hint{padding-top:6px;font-size:8px}.visual.premium-visual:hover{transform:none}}
  `;
  document.head.appendChild(polish);

  const visualScript = document.createElement('script');
  visualScript.src = './notes-visuals.js?v=3';
  visualScript.defer = true;
  document.body.appendChild(visualScript);
})();
