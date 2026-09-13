(() => {
  'use strict';

  const visualMarkup = {
    s1: `
      <svg viewBox="0 0 520 360" role="img" aria-label="힘의 합성 벡터 도식">
        <defs>
          <linearGradient id="vBlue" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#70a8ff"/><stop offset="1" stop-color="#3f72af"/></linearGradient>
          <linearGradient id="vDark" x1="0" x2="1"><stop offset="0" stop-color="#31577f"/><stop offset="1" stop-color="#112d4e"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#3f72af"/></marker>
          <marker id="arrowDark" markerWidth="11" markerHeight="11" refX="9" refY="5.5" orient="auto"><path d="M0 0L11 5.5L0 11Z" fill="#112d4e"/></marker>
        </defs>
        <rect x="10" y="10" width="500" height="340" rx="24" fill="url(#panelBg)"/>
        <circle cx="390" cy="65" r="75" fill="#eaf1f9" opacity=".7"/>
        <g opacity=".35" stroke="#cbd6e5" stroke-width="1"><path d="M45 290H475"/><path d="M45 250H475"/><path d="M45 210H475"/><path d="M45 170H475"/><path d="M85 120V315"/><path d="M125 120V315"/><path d="M165 120V315"/><path d="M205 120V315"/><path d="M245 120V315"/><path d="M285 120V315"/><path d="M325 120V315"/></g>
        <circle cx="95" cy="285" r="7" fill="#112d4e" filter="url(#glow)"/>
        <line x1="95" y1="285" x2="330" y2="285" stroke="url(#vBlue)" stroke-width="8" marker-end="url(#arrowBlue)"/>
        <line x1="95" y1="285" x2="215" y2="100" stroke="url(#vBlue)" stroke-width="8" marker-end="url(#arrowBlue)"/>
        <line x1="330" y1="285" x2="450" y2="100" stroke="#9db4cf" stroke-width="3" stroke-dasharray="8 8"/>
        <line x1="215" y1="100" x2="450" y2="100" stroke="#9db4cf" stroke-width="3" stroke-dasharray="8 8"/>
        <line x1="95" y1="285" x2="450" y2="100" stroke="url(#vDark)" stroke-width="12" marker-end="url(#arrowDark)"/>
        <path d="M145 285 A50 50 0 0 0 121 241" fill="none" stroke="#112d4e" stroke-width="2.5"/>
        <text x="137" y="268" fill="#112d4e" font-size="18" font-weight="800">θ</text>
        <g font-family="Noto Sans KR, sans-serif">
          <rect x="130" y="298" width="80" height="34" rx="17" fill="#eef4fa"/><text x="170" y="321" text-anchor="middle" fill="#3f72af" font-size="16" font-weight="800">F₁</text>
          <rect x="178" y="76" width="80" height="34" rx="17" fill="#eef4fa"/><text x="218" y="99" text-anchor="middle" fill="#3f72af" font-size="16" font-weight="800">F₂</text>
          <rect x="329" y="144" width="105" height="40" rx="20" fill="#112d4e"/><text x="381" y="170" text-anchor="middle" fill="white" font-size="16" font-weight="900">합력 F</text>
          <text x="30" y="42" fill="#112d4e" font-size="15" font-weight="800">VECTOR ADDITION</text>
          <text x="30" y="64" fill="#718096" font-size="12">평행사변형법 · 대각선 = 합력</text>
        </g>
      </svg>`,
    s2: `
      <svg viewBox="0 0 520 360" role="img" aria-label="포물선 운동의 수평 및 연직 성분 도식">
        <defs>
          <linearGradient id="traj" x1="0" x2="1"><stop offset="0" stop-color="#75a9ff"/><stop offset="1" stop-color="#3f72af"/></linearGradient>
          <marker id="arrowP" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#112d4e"/></marker>
        </defs>
        <rect x="10" y="10" width="500" height="340" rx="24" fill="#fbfcfe"/>
        <g opacity=".28" stroke="#cbd6e5"><path d="M45 300H475"/><path d="M45 260H475"/><path d="M45 220H475"/><path d="M45 180H475"/><path d="M45 140H475"/><path d="M85 90V310"/><path d="M125 90V310"/><path d="M165 90V310"/><path d="M205 90V310"/><path d="M245 90V310"/><path d="M285 90V310"/><path d="M325 90V310"/><path d="M365 90V310"/><path d="M405 90V310"/></g>
        <path d="M55 300 Q260 48 465 300" fill="none" stroke="url(#traj)" stroke-width="9"/>
        <circle cx="55" cy="300" r="9" fill="#112d4e"/>
        <line x1="55" y1="300" x2="115" y2="245" stroke="#112d4e" stroke-width="7" marker-end="url(#arrowP)"/>
        <line x1="115" y1="245" x2="115" y2="300" stroke="#3f72af" stroke-width="3" stroke-dasharray="7 7"/>
        <line x1="55" y1="300" x2="115" y2="300" stroke="#3f72af" stroke-width="3" stroke-dasharray="7 7"/>
        <line x1="260" y1="58" x2="260" y2="300" stroke="#a9bbd0" stroke-width="3" stroke-dasharray="7 7"/>
        <line x1="55" y1="320" x2="465" y2="320" stroke="#3f72af" stroke-width="3" marker-end="url(#arrowP)"/>
        <g font-family="Noto Sans KR, sans-serif">
          <rect x="104" y="211" width="75" height="34" rx="17" fill="#112d4e"/><text x="141" y="234" text-anchor="middle" fill="white" font-size="16" font-weight="900">v₀</text>
          <text x="271" y="174" fill="#112d4e" font-size="16" font-weight="900">최고점 H</text>
          <text x="254" y="342" fill="#3f72af" font-size="16" font-weight="900">R · 수평 도달거리</text>
          <text x="29" y="274" fill="#3f72af" font-size="14" font-weight="800">수평: 등속</text>
          <text x="121" y="282" fill="#3f72af" font-size="14" font-weight="800">연직: 등가속</text>
          <text x="30" y="42" fill="#112d4e" font-size="15" font-weight="800">PROJECTILE MOTION</text>
          <text x="30" y="64" fill="#718096" font-size="12">수평 성분 + 연직 성분</text>
        </g>
      </svg>`,
    s3: `
      <svg viewBox="0 0 520 360" role="img" aria-label="등속 원운동과 단진동의 연결 도식">
        <defs>
          <linearGradient id="orbit" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#91bbff"/><stop offset="1" stop-color="#3f72af"/></linearGradient>
          <marker id="arrowC" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#112d4e"/></marker>
        </defs>
        <rect x="10" y="10" width="500" height="340" rx="24" fill="#fbfcfe"/>
        <circle cx="175" cy="140" r="88" fill="#eef4fa" stroke="#d5dfeb" stroke-width="2"/>
        <circle cx="175" cy="140" r="64" fill="none" stroke="url(#orbit)" stroke-width="7"/>
        <circle cx="231" cy="109" r="11" fill="#112d4e"/>
        <circle cx="175" cy="140" r="5" fill="#112d4e"/>
        <line x1="231" y1="109" x2="175" y2="140" stroke="#3f72af" stroke-width="5" marker-end="url(#arrowC)"/>
        <line x1="231" y1="109" x2="265" y2="72" stroke="#112d4e" stroke-width="5" marker-end="url(#arrowC)"/>
        <line x1="175" y1="140" x2="245" y2="140" stroke="#a9bbd0" stroke-dasharray="6 6" stroke-width="3"/>
        <circle cx="403" cy="140" r="6" fill="#112d4e"/>
        <line x1="285" y1="140" x2="462" y2="140" stroke="#a9bbd0" stroke-width="3"/>
        <path d="M285 140 C320 60 355 60 385 140 S450 220 480 140" fill="none" stroke="url(#orbit)" stroke-width="7"/>
        <circle cx="385" cy="140" r="10" fill="#3f72af"/>
        <line x1="385" y1="140" x2="385" y2="222" stroke="#cbd6e5" stroke-dasharray="6 6" stroke-width="3"/>
        <g font-family="Noto Sans KR, sans-serif">
          <rect x="124" y="204" width="102" height="36" rx="18" fill="#112d4e"/><text x="175" y="228" text-anchor="middle" fill="white" font-size="15" font-weight="900">구심력 F</text>
          <rect x="249" y="55" width="76" height="34" rx="17" fill="#eef4fa"/><text x="287" y="78" text-anchor="middle" fill="#112d4e" font-size="15" font-weight="900">속도 v</text>
          <text x="315" y="270" fill="#3f72af" font-size="15" font-weight="900">단진동 x(t)</text>
          <text x="30" y="42" fill="#112d4e" font-size="15" font-weight="800">CIRCULAR MOTION → SHM</text>
          <text x="30" y="64" fill="#718096" font-size="12">구심가속도는 중심 · 속도는 접선 방향</text>
        </g>
      </svg>`,
    s4: `
      <svg viewBox="0 0 520 360" role="img" aria-label="케플러 타원 궤도와 같은 시간의 면적 도식">
        <rect x="10" y="10" width="500" height="340" rx="24" fill="#fbfcfe"/>
        <ellipse cx="260" cy="180" rx="195" ry="105" fill="#eef4fa" stroke="#3f72af" stroke-width="7"/>
        <circle cx="140" cy="180" r="14" fill="#112d4e"/>
        <circle cx="407" cy="110" r="10" fill="#3f72af"/>
        <circle cx="424" cy="250" r="10" fill="#3f72af"/>
        <path d="M140 180 L407 110 Q370 172 140 180Z" fill="#dbeafe" opacity=".75"/>
        <path d="M140 180 L424 250 Q360 222 140 180Z" fill="#eaf1f9" opacity=".9"/>
        <line x1="140" y1="180" x2="407" y2="110" stroke="#7f9bb8" stroke-width="3"/>
        <line x1="140" y1="180" x2="424" y2="250" stroke="#7f9bb8" stroke-width="3"/>
        <path d="M407 110 A190 102 0 0 1 424 250" fill="none" stroke="#112d4e" stroke-width="2" stroke-dasharray="7 7"/>
        <g font-family="Noto Sans KR, sans-serif">
          <rect x="104" y="194" width="90" height="36" rx="18" fill="#112d4e"/><text x="149" y="218" text-anchor="middle" fill="white" font-size="15" font-weight="900">태양</text>
          <rect x="357" y="69" width="78" height="32" rx="16" fill="#eef4fa"/><text x="396" y="91" text-anchor="middle" fill="#3f72af" font-size="14" font-weight="900">짧은 위치</text>
          <rect x="367" y="257" width="78" height="32" rx="16" fill="#eef4fa"/><text x="406" y="279" text-anchor="middle" fill="#3f72af" font-size="14" font-weight="900">긴 위치</text>
          <text x="258" y="49" text-anchor="middle" fill="#112d4e" font-size="16" font-weight="900">타원 궤도</text>
          <text x="256" y="151" text-anchor="middle" fill="#3f72af" font-size="14" font-weight="900">같은 시간 → 같은 면적</text>
          <text x="30" y="42" fill="#112d4e" font-size="15" font-weight="800">KEPLER'S LAWS</text>
          <text x="30" y="64" fill="#718096" font-size="12">제1법칙 · 제2법칙을 한 그림에</text>
        </g>
      </svg>`,
    s5: `
      <svg viewBox="0 0 520 360" role="img" aria-label="특수 상대성의 빛의 속력 일정과 시간 지연 도식">
        <defs><linearGradient id="beam" x1="0" x2="1"><stop offset="0" stop-color="#b8d5ff"/><stop offset="1" stop-color="#3f72af"/></linearGradient><marker id="arrowS" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#112d4e"/></marker></defs>
        <rect x="10" y="10" width="500" height="340" rx="24" fill="#fbfcfe"/>
        <rect x="45" y="105" width="150" height="105" rx="20" fill="#eef4fa" stroke="#cbd6e5" stroke-width="2"/>
        <rect x="325" y="105" width="150" height="105" rx="20" fill="#f4f7fb" stroke="#cbd6e5" stroke-width="2"/>
        <line x1="195" y1="130" x2="325" y2="130" stroke="url(#beam)" stroke-width="8"/>
        <line x1="195" y1="180" x2="325" y2="180" stroke="url(#beam)" stroke-width="8"/>
        <circle cx="120" cy="157" r="20" fill="none" stroke="#112d4e" stroke-width="5"/><line x1="120" y1="157" x2="120" y2="143" stroke="#112d4e" stroke-width="4"/><line x1="120" y1="157" x2="132" y2="165" stroke="#112d4e" stroke-width="4"/>
        <circle cx="400" cy="157" r="20" fill="none" stroke="#112d4e" stroke-width="5"/><line x1="400" y1="157" x2="400" y2="145" stroke="#112d4e" stroke-width="4"/><line x1="400" y1="157" x2="412" y2="170" stroke="#112d4e" stroke-width="4"/>
        <line x1="65" y1="270" x2="450" y2="270" stroke="#a9bbd0" stroke-width="3" marker-end="url(#arrowS)"/>
        <path d="M85 270 L155 270 M230 270 L300 270 M375 270 L440 270" stroke="#3f72af" stroke-width="7"/>
        <g font-family="Noto Sans KR, sans-serif">
          <text x="120" y="230" text-anchor="middle" fill="#112d4e" font-size="15" font-weight="900">관성계 A</text><text x="400" y="230" text-anchor="middle" fill="#112d4e" font-size="15" font-weight="900">관성계 B</text>
          <rect x="185" y="84" width="150" height="32" rx="16" fill="#112d4e"/><text x="260" y="106" text-anchor="middle" fill="white" font-size="14" font-weight="900">빛의 속력은 일정</text>
          <text x="260" y="305" text-anchor="middle" fill="#3f72af" font-size="15" font-weight="900">빠른 상대운동 → 시간 지연 · 길이 수축</text>
          <text x="30" y="42" fill="#112d4e" font-size="15" font-weight="800">SPECIAL RELATIVITY</text>
          <text x="30" y="64" fill="#718096" font-size="12">관성계가 달라도 진공의 빛의 속력은 동일</text>
        </g>
      </svg>`,
    s6: `
      <svg viewBox="0 0 520 360" role="img" aria-label="일반 상대성의 시공간 휘어짐 도식">
        <defs>
          <radialGradient id="well"><stop offset="0" stop-color="#112d4e"/><stop offset=".45" stop-color="#264d73"/><stop offset="1" stop-color="#eef4fa"/></radialGradient>
        </defs>
        <rect x="10" y="10" width="500" height="340" rx="24" fill="#fbfcfe"/>
        <g stroke="#a9bbd0" fill="none" opacity=".65">
          <path d="M55 70 Q130 110 210 135 T465 100"/><path d="M55 120 Q130 145 210 165 T465 145"/><path d="M55 180 Q140 180 220 190 T465 190"/><path d="M55 240 Q140 220 220 210 T465 235"/><path d="M55 290 Q140 255 220 235 T465 285"/>
          <path d="M100 45 Q120 140 120 315"/><path d="M175 45 Q185 140 185 315"/><path d="M250 45 Q250 150 250 315"/><path d="M325 45 Q315 160 315 315"/><path d="M400 45 Q385 155 385 315"/>
        </g>
        <ellipse cx="252" cy="182" rx="92" ry="105" fill="url(#well)" opacity=".9"/>
        <circle cx="252" cy="178" r="31" fill="#112d4e"/><circle cx="241" cy="167" r="8" fill="#edf3fa" opacity=".75"/>
        <path d="M112 85 Q165 95 205 135 Q236 170 276 188 Q330 212 407 286" fill="none" stroke="#3f72af" stroke-width="8"/>
        <circle cx="112" cy="85" r="10" fill="#3f72af"/>
        <g font-family="Noto Sans KR, sans-serif">
          <rect x="209" y="126" width="88" height="34" rx="17" fill="#112d4e"/><text x="253" y="149" text-anchor="middle" fill="white" font-size="14" font-weight="900">질량·에너지</text>
          <text x="329" y="91" fill="#112d4e" font-size="15" font-weight="900">휘어진 시공간</text>
          <text x="330" y="112" fill="#718096" font-size="12">물체의 자연스러운 경로가 휘어짐</text>
          <text x="30" y="42" fill="#112d4e" font-size="15" font-weight="800">GENERAL RELATIVITY</text>
          <text x="30" y="64" fill="#718096" font-size="12">중력 = 시공간의 휘어짐으로 이해하기</text>
        </g>
      </svg>`
  };

  function enhance() {
    const panels = document.querySelectorAll('.visual');
    panels.forEach((panel) => {
      const section = panel.closest('.chapter');
      if (!section) return;
      const id = section.id;
      if (!visualMarkup[id]) return;
      panel.classList.add('premium-visual');
      panel.innerHTML = visualMarkup[id] + '<div class="visual-hint">CONCEPT DIAGRAM</div>';
    });
  }

  enhance();
})();
