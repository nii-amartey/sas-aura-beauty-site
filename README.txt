SAS ALURA WEBSITE — QUICK START
================================

WHAT IS INCLUDED
- index.html                 Main website
- css/style.css              Design, responsive layout and animations
- js/script.js               Menu, logo intro, gallery and contact links
- js/config.js               WhatsApp, phone and Instagram details
- js/gallery.js              List of photos shown in the portfolio
- assets/images/logo.jpg     Your supplied SAS Alura logo
- assets/images/makeup/      Put makeup photos here
- assets/images/nails/       Put nail photos here
- assets/images/hair/        Put hair photos here

OPEN THE WEBSITE ON YOUR MAC
1. Download and unzip SAS_Alura_Website.zip.
2. Open VS Code.
3. Choose File > Open Folder.
4. Select the unzipped folder named SAS_Alura_Website.
5. Open index.html and use Live Server (if installed), or open index.html
   in your browser by double-clicking it in Finder.

HOW TO ADD YOUR PHOTOS
You do NOT need to send all your pictures to ChatGPT. Add them yourself:

1. Open the project folder in VS Code.
2. In the left Explorer panel, open assets, then images.
3. Put makeup photos inside the makeup folder.
4. Put nail photos inside the nails folder.
5. Put hair photos inside the hair folder.

You can drag photos from Finder into the matching folder in VS Code.
Use simple file names, for example:
- bridal-glam.jpg
- soft-makeup.png
- french-nails.jpg
- wedding-hair.jpg

IMPORTANT: Adding a photo to a folder is not enough by itself. Because this is
a static website with no backend, you must also list each photo in js/gallery.js.

HOW TO LIST A PHOTO
1. Open js/gallery.js.
2. Find the line that says: // Add your photos below this line:
3. Add an entry using the correct folder and exact file name.

Examples (copy a line and change the file name/title as needed):

{ category: "makeup", image: "assets/images/makeup/bridal-glam.jpg", title: "Bridal Glam" },
{ category: "nails", image: "assets/images/nails/french-nails.jpg", title: "French Nails" },
{ category: "hair", image: "assets/images/hair/wedding-hair.jpg", title: "Wedding Hair" }

The entries go inside the square brackets [ ] in js/gallery.js.
Separate entries with commas. Do not remove the opening [ or closing ].
Save the file and refresh the browser. Your pictures will appear in the gallery.

UPDATE CONTACT DETAILS
1. Open js/config.js.
2. Replace the empty values with the real contact information.
Example:
whatsapp: "233241234567",
phone: "+233 24 123 4567",
instagram: "https://www.instagram.com/yourusername/"

For WhatsApp, use the country code and number with no plus sign or spaces.
Do not publish the website until these details are correct.

CHANGE THE LARGE HOME PAGE PHOTO
The hero currently has a designed placeholder so the website still looks polished
before you add photos. If you want to replace it with one of your photos, ask for
help editing index.html; it is a single image area in the hero section.

PUBLISHING
This is a front-end-only static website. It can be hosted free on GitHub Pages.
When you are ready, I can guide you step by step to publish it.

TIPS
- JPG, JPEG, PNG and WebP images are suitable.
- Resize very large photos before uploading so the website loads quickly.
- Only use photos the business has permission to display.
- Keep a backup of the original photos.
