// Make gallery clicks open the clip URL in a new tab (no modal preview)

(function(){
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  // Click handler: open the clip URL in a new tab
  gallery.addEventListener('click', function(e){
    const a = e.target.closest('.clip-link');
    if (!a) return;
    e.preventDefault();
    const url = a.getAttribute('data-clip-url') || a.href;
    window.open(url, '_blank', 'noopener');
  });

  // Keyboard accessibility: Enter opens the link in a new tab
  gallery.addEventListener('keydown', function(e){
    if (e.key === 'Enter' && e.target.closest('.clip')) {
      const a = e.target.closest('.clip').querySelector('.clip-link');
      if (a) {
        const url = a.getAttribute('data-clip-url') || a.href;
        window.open(url, '_blank', 'noopener');
      }
    }
  });
})();
