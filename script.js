(() => {
  'use strict';

  // The home page uses a normal <a href="exam.html"> link so navigation does not
  // depend on JavaScript. This handler is kept as a fallback for old cached markup.
  const startBtn = document.getElementById('startExamBtn');
  if (startBtn && startBtn.tagName !== 'A') {
    startBtn.addEventListener('click', () => {
      window.location.assign('./exam.html');
    });
  }
})();
