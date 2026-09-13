(() => {
  'use strict';

  // Use the six user-provided reference images exactly as image assets.
  const visuals = [
    ['01-force.jpg', '힘의 합성 · 벡터의 합력'],
    ['02-projectile.jpg', '포물선 운동 · 궤적과 수평/연직 성분'],
    ['03-circular-shm.jpg', '등속 원운동과 단진동'],
    ['04-kepler.jpg', '케플러의 법칙 · 타원 궤도'],
    ['05-special-relativity.jpg', '특수 상대성 이론 · 시간과 속도'],
    ['06-general-relativity.jpg', '일반 상대성 이론 · 시공간의 휘어짐']
  ];

  const style = document.createElement('style');
  style.textContent = `
    .visual.premium-visual-v4 .visual-art-v4{background:#fff;overflow:hidden;border-radius:18px}
    .visual.premium-visual-v4 .reference-image-v5{display:block;width:100%;height:auto;margin:0;border:0;object-fit:contain;image-rendering:auto}
    .visual.premium-visual-v4 .visual-footer-v4{min-height:30px}
    @media(max-width:760px){
      .visual.premium-visual-v4 .visual-art-v4{border-radius:13px}
      .visual.premium-visual-v4 .reference-image-v5{width:100%;height:auto}
    }
  `;
  document.head.appendChild(style);

  document.querySelectorAll('.chapter .visual').forEach((visual, index) => {
    const item = visuals[index];
    if (!item) return;
    const [file, alt] = item;
    const oldCaption = visual.querySelector('.caption')?.textContent?.trim() || alt;
    visual.classList.add('premium-visual-v4');
    visual.innerHTML = `
      <div class="visual-stage-v4">
        <div class="visual-topline-v4">
          <span class="visual-index">${String(index + 1).padStart(2, '0')}</span>
          <span>REFERENCE VISUAL</span>
        </div>
        <div class="visual-art-v4">
          <img class="reference-image-v5" src="./assets/notes/${file}" alt="${alt}" loading="lazy" decoding="async">
        </div>
        <div class="visual-footer-v4">${oldCaption}</div>
      </div>`;
  });
})();
