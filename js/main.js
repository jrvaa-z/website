(function () {
  const phraseEl = document.getElementById('recentPhrase');
  if (!phraseEl) return;

  const recentStories = [
    'went to the<br />saco river to<br />see a<br />disappearing<br />plant<br />community<br />for npr',
    'spent the week<br />tracking wildfire smoke<br />and air quality<br />alerts in new hampshire',
    'talked with residents<br />about flood risk,<br />adaptation,<br />and what gets left behind',
    'reported on a marsh<br />restoration project<br />that could help birds<br />and communities',
    'followed a local effort<br />to protect a rare<br />plant community<br />from climate stress',
    'looked at how heat<br />and tourism are reshaping<br />a desert landscape'
  ];

  let currentIndex = 0;

  function showNextStory() {
    const nextIndex = (currentIndex + 1) % recentStories.length;
    phraseEl.classList.add('is-animating');

    window.setTimeout(() => {
      currentIndex = nextIndex;
      phraseEl.innerHTML = recentStories[currentIndex];
      phraseEl.classList.remove('is-animating');
    }, 120);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      showNextStory();
    }
  });

  phraseEl.addEventListener('click', showNextStory);
})();
