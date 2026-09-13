(() => {
  'use strict';

  // Home page navigation stays a real hyperlink, with a JS fallback for old cached markup.
  const startBtn = document.getElementById('startExamBtn');
  if (startBtn && startBtn.tagName !== 'A') {
    startBtn.addEventListener('click', () => window.location.assign('./exam.html'));
  }

  // Upgrade the study-note diagrams without coupling the note page to the exam page.
  if (document.querySelector('.wrap') && document.querySelectorAll('.chapter .visual').length) {
    const visualScript = document.createElement('script');
    visualScript.src = './notes-visuals.js?v=2';
    visualScript.defer = true;
    document.body.appendChild(visualScript);
  }
})();
