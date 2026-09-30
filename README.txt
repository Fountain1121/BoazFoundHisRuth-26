BOAZ & RUTH WEDDING INVITE - HOW TO USE
=======================================

FOLDER STRUCTURE
  index.html      the page (open this in a browser to preview)
  style.css       colors, layout, 3D effects
  script.js       names, date, venue, message, colors, countdown, 3D tilt
  images/
    couple.jpg    <-- MAIN COUPLE IMAGE (gets the 3D tilt effect)
    flyer.jpg     <-- SAVE THE DATE FLYER (shown when the card is flipped)

WHERE TO UPLOAD THE IMAGES
  Replace the two files inside the images/ folder, keeping the SAME NAMES:
    images/couple.jpg   main photo, best as a square-ish crop of about 1000x1000 px
    images/flyer.jpg    the Save the Date flyer, portrait 2:3 (e.g. 1024x1536 px)
  If your file is a PNG, either convert it to JPG or change the file names
  in script.js (search for "images/couple.jpg" and "images/flyer.jpg").

EDIT THE DETAILS
  Open script.js and edit the 'def' block near the top:
    n1, n2  names | d  date/time (YYYY-MM-DDTHH:MM) | v  venue | m  message
    c       the 3 colors [hex, name] | dn  dress-code note
  The hashtag is in index.html (search for BoazFoundHisRuth).

PUT IT ONLINE (free options)
  Netlify Drop: go to app.netlify.com/drop and drag the whole folder in.
  Or GitHub Pages / Cloudflare Pages / Vercel: upload the folder contents.
  Keep index.html at the top level of what you upload, next to images/.

NOTE
  The gear button on the page lets you preview changes, but it only saves in
  that one browser. For guests to see changes, edit the files above and re-upload.
  If your own browser keeps showing old images after you replace files, tap the
  gear button and press Reset, or hard-refresh the page.
