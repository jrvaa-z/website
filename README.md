# Journalist Profile — Simple Template

What I made
- A minimal responsive profile page with:
  - Headshot
  - Bio and contact links
  - Gallery of clips (thumbnails that open a modal preview)

Files
- index.html — main page
- css/styles.css — styles
- js/main.js — modal & preview logic
- images/ — put your headshot and thumbnails here:
  - images/headshot.jpg (replace with your photo)
  - images/thumb-video.jpg
  - images/thumb-article.jpg
  - images/thumb-audio.jpg

How to use
1. Replace placeholder images in the `images/` folder with your photos and thumbnails.
2. Update the bio, contact info and clip items in `index.html`.
   - Each clip is an `.clip` block; set the `data-clip-url` attribute to the clip URL
     (e.g., article URL, audio page, or YouTube link) and `data-clip-title`.
3. Open `index.html` in a browser to preview.
4. To publish, push the folder to a GitHub repo and enable GitHub Pages, or deploy to any static host.

Notes & tips
- YouTube links are embedded automatically. Other sites may disallow framing — if that happens use the "Open original" link to open the clip in a new tab.
- To add more clips, duplicate a `.clip` block inside the `.gallery` and update the data attributes.
- Accessibility: modal uses aria-hidden and Esc to close; gallery cards are keyboard-focusable.

If you want, I can:
- Add a printable one-page résumé section.
- Add lightbox styling or autoplay controls for video.
- Convert clips into a JSON-driven gallery so you can manage them separately.