// Lightweight clip preview behavior: open embedded previews when possible.
// Fallback: open the clip in a new tab.

(function(){
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('previewModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const openExternal = document.getElementById('openExternal');

  function isYouTube(url){
    return /(?:youtube\.com\/watch\?v=|youtu\.be\/)/i.test(url);
  }

  function youtubeEmbed(url){
    // Extract video id
    const idMatch = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    if(!idMatch) return null;
    return 'https://www.youtube.com/embed/' + idMatch[1] + '?rel=0&showinfo=0';
  }

  function openModal(title, url){
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';

    // clear previous
    modalBody.innerHTML = '';

    // decide whether to embed
    let iframeSrc = null;
    if (isYouTube(url)) {
      iframeSrc = youtubeEmbed(url);
    } else {
      // try direct embed (some sites disallow being framed)
      iframeSrc = url;
    }

    if (iframeSrc){
      const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.title = title;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      modalBody.appendChild(iframe);

      // set external fallback link
      openExternal.href = url;
      openExternal.textContent = 'Open original';
    } else {
      // If embed not possible for some reason, open external
      window.open(url, '_blank', 'noopener');
      closeModal();
    }
  }

  function closeModal(){
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    modalBody.innerHTML = '';
  }

  // Click handler for gallery (event delegation)
  gallery.addEventListener('click', function(e){
    const a = e.target.closest('.clip-link');
    if (!a) return;
    e.preventDefault();
    const url = a.getAttribute('data-clip-url');
    const title = a.getAttribute('data-clip-title') || 'Clip preview';
    // Try to open modal. If browser blocks framing, the iframe will show an error;
    // user can click "Open original" to open the link in a new tab.
    openModal(title, url);
  });

  // keyboard accessibility: Enter key on .clip should behave like a click
  gallery.addEventListener('keydown', function(e){
    if (e.key === 'Enter' && e.target.closest('.clip')) {
      const a = e.target.closest('.clip').querySelector('.clip-link');
      if (a) a.click();
    }
  });

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);

  // Esc to close
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

  // If an iframe errors or blocks, we still provide the external link.
  // (No extra code required here — user can click the external link in the footer.)
})();