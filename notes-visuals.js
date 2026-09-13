(() => {
  'use strict';

  const visuals = [
    {
      file: '01-force.jpg',
      title: '힘의 합성 · 벡터의 합력',
      desc: '두 힘의 크기와 방향을 벡터로 나타내고, 대각선 벡터가 합력의 방향과 크기를 결정합니다.'
    },
    {
      file: '02-projectile.jpg',
      title: '포물선 운동 · 수평/연직 분해',
      desc: '초기 속도를 수평 성분과 연직 성분으로 나누어 포물선 궤적을 해석합니다.'
    },
    {
      file: '03-circular-shm.jpg',
      title: '등속 원운동과 단진동',
      desc: '원운동의 투영과 단진동의 관계를 비교하고, 방향과 변위의 변화를 확인합니다.'
    },
    {
      file: '04-kepler.jpg',
      title: '케플러의 법칙 · 타원 궤도',
      desc: '타원의 두 초점, 근일점과 원일점, 행성의 위치와 거리 관계를 보여줍니다.'
    },
    {
      file: '05-special-relativity.jpg',
      title: '특수 상대성 · 상대운동과 시간',
      desc: '상대운동의 방향과 시간 측정을 직관적으로 보여주는 보조 시각 자료입니다.'
    },
    {
      file: '06-general-relativity.jpg',
      title: '일반 상대성 · 시공간의 휘어짐',
      desc: '질량이 시공간의 구조를 휘게 하고 물체의 운동에 영향을 준다는 개념을 나타냅니다.'
    }
  ];

  const style = document.createElement('style');
  style.id = 'reference-image-layout-v6';
  style.textContent = `
    .visual.reference-host-v6{padding:0!important;overflow:hidden;background:#fff!important;border:1px solid rgba(20,40,70,.08)!important;border-radius:26px!important;box-shadow:0 22px 55px rgba(17,45,78,.10)!important}
    .reference-figure-v6{margin:0;padding:18px 18px 14px}
    .reference-head-v6{display:flex;align-items:center;justify-content:space-between;margin:0 4px 11px;color:#718096;font:700 9px/1 'Space Mono',monospace;letter-spacing:1.8px;text-transform:uppercase}
    .reference-head-v6 .index{color:#0071e3}
    .reference-media-v6{position:relative;display:flex;justify-content:center;align-items:center;min-height:150px;background:linear-gradient(145deg,#fff 0%,#f7faff 100%);border:1px solid rgba(17,45,78,.06);border-radius:18px;overflow:hidden}
    .reference-media-v6::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(30,90,150,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(30,90,150,.035) 1px,transparent 1px);background-size:28px 28px;pointer-events:none}
    .reference-image-v6{position:relative;z-index:1;display:block;width:100%;height:auto;max-height:390px;object-fit:contain;object-position:center;margin:0;image-rendering:auto}
    .reference-caption-v6{padding:12px 5px 0;text-align:center}
    .reference-caption-v6 strong{display:block;color:#102f58;font-size:14px;line-height:1.45;letter-spacing:-.2px}
    .reference-caption-v6 span{display:block;margin-top:4px;color:#687b91;font-size:11px;line-height:1.6}
    @media(min-width:761px){.visual.reference-host-v6:nth-of-type(odd) .reference-media-v6{min-height:210px}.reference-media-v6 img[src*="01-force"],.reference-media-v6 img[src*="02-projectile"],.reference-media-v6 img[src*="04-kepler"]{max-height:360px}}
    @media(max-width:760px){.visual.reference-host-v6{border-radius:20px!important}.reference-figure-v6{padding:12px 12px 10px}.reference-head-v6{margin-bottom:8px;font-size:8px}.reference-media-v6{min-height:0;border-radius:14px}.reference-image-v6{max-height:none;width:100%}.reference-caption-v6{padding-top:9px}.reference-caption-v6 strong{font-size:13px}.reference-caption-v6 span{font-size:10px;line-height:1.55}}
  `;
  document.head.appendChild(style);

  document.querySelectorAll('.chapter .visual').forEach((visual, index) => {
    const item = visuals[index];
    if (!item) return;
    const figure = document.createElement('figure');
    figure.className = 'reference-figure-v6';
    figure.innerHTML = `
      <div class="reference-head-v6"><span class="index">${String(index + 1).padStart(2, '0')}</span><span>REFERENCE VISUAL</span></div>
      <div class="reference-media-v6"><img class="reference-image-v6" src="./assets/notes/${item.file}?v=6" alt="${item.title}" loading="lazy" decoding="async"></div>
      <figcaption class="reference-caption-v6"><strong>${item.title}</strong><span>${item.desc}</span></figcaption>
    `;
    visual.classList.add('reference-host-v6');
    visual.replaceChildren(figure);
  });
})();
