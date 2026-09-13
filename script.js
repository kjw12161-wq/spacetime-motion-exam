(() => {
  'use strict';

  // Cache-bust the stylesheet so GitHub Pages cannot keep serving the previous design.
  const stylesheet = [...document.querySelectorAll('link[rel="stylesheet"]')]
    .find((link) => /\/style\.css(?:\?|$)/.test(link.href));
  if (stylesheet) stylesheet.href = `style.css?v=${Date.now()}`;

  const startBtn = document.getElementById('startExamBtn');
  if (startBtn && startBtn.tagName !== 'A') {
    startBtn.addEventListener('click', () => window.location.assign('./exam.html'));
  }

  const visualCount = document.querySelectorAll('.chapter .visual').length;
  if (!visualCount) return;

  const polish = document.createElement('style');
  polish.id = 'premium-notes-visual-v4';
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
    .visual-footer-v4 b{color:#172b4d}
    .chapter .visual.premium-visual-v4{transition:transform .25s ease,box-shadow .25s ease}
    .chapter .visual.premium-visual-v4:hover{transform:translateY(-6px);box-shadow:0 38px 95px rgba(17,45,78,.16),0 10px 26px rgba(17,45,78,.07),inset 0 1px 0 rgba(255,255,255,.98)!important}
    @media(max-width:760px){.visual.premium-visual-v4{border-radius:22px!important;box-shadow:0 18px 42px rgba(17,45,78,.10)!important}.visual-stage-v4{padding:13px 13px 9px}.visual-stage-v4::before{inset:9px;border-radius:16px}.visual-topline-v4{padding:0 2px 9px;font-size:8px}.visual-art-v4{border-radius:15px}.visual-footer-v4{font-size:11px;padding:9px 6px 2px}.chapter .visual.premium-visual-v4:hover{transform:none}}
    @media(prefers-reduced-motion:reduce){.chapter .visual.premium-visual-v4{transition:none}.chapter .visual.premium-visual-v4:hover{transform:none}}
  `;
  document.head.appendChild(polish);

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
