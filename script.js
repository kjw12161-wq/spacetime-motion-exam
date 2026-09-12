(() => {
  'use strict';
  const startBtn = document.getElementById('startExamBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      window.location.href = 'exam.html';
    });
  }
})();
