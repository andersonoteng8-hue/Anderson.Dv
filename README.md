# ANDERSON.DEV — local portfolio website

This is a plain static website made with HTML, CSS, vanilla JavaScript and local image assets. It does not use React, Vite, npm or a hosting service.

## Run it on Windows

1. Extract the ZIP to a folder on your PC.
2. Double-click `run-local.bat` or open `index.html` in your browser.
3. The site runs from your computer. It is not published online.

The included `run-local.bat` simply opens the local HTML file. You do not need to install Node.js or download packages.

## Edit the website

- Open `index.html` to change the page text and sections.
- Open `styles.css` to change colors, layout, type and responsive behavior.
- Open `script.js` to update the starter project list, timeline and social profiles.
- Your photos and verified project logos are in `images/`. Project covers and gallery images are in `projects/`.
- The **Manage portfolio** panel can add and edit projects, cover images, logos, stories, highlights, gallery images, timeline entries and profile URLs. For a gallery image, use one line per item in this format: `image path | caption | optional URL`. Changes save in the current browser where supported. Use **Export data** to back them up or move them to another browser; you can also edit the starter data near the top of `script.js` directly.

## Included behavior

- Responsive layout, theme switcher, mobile navigation, section links and project filters.
- Project and experience editors, import/export, and editable GitHub, LinkedIn, Instagram, X, YouTube, TikTok and Facebook profile links.
- Contact form prepares an email in the visitor's email app. Email, phone and WhatsApp links are also included.

The personal social profile URLs and career details are left blank or marked as placeholders where you have not supplied the information. The project descriptions, logos and selected images for TREBESTATE, Ashanti Prime TV, Acquah Ice and Earth Dreams came from the website folders you supplied.

## Project source notes

- Ashanti Prime TV: the supplied project folder includes its official logo, branded cover art and website content. Its published site is [ashantiprimetv.com](https://www.ashantiprimetv.com/); the site also links to the [official YouTube channel](https://www.youtube.com/@ashantiprimeTV). The portfolio story follows the supplied site’s live TV area, programme lineup, news, schedule and station information.
- TREBESTATE LTD: the supplied project folder includes the company logo and website content. Its footer references `TrebestateLimited.com`; the cover photo is the same home image referenced by the supplied site stylesheet.
- Acquah Ice Natural Mineral Water: the supplied project folder includes the brand logo, product images and website content. I did not find a confirmed public website URL in the supplied files, so its live link is left blank for you to fill in.
- Earth Dreams Entertainment: the supplied site folder includes its logo, movie artwork, story and custom domain file for [earthdreamsentertainment.com](https://earthdreamsentertainment.com/). The site links to the [official YouTube channel](https://www.youtube.com/@earthdreamsentertainment).
If “Asantekwa TV” or “Headrooms” refers to a separate project from Ashanti Prime TV or the supplied folders, add its exact live link in **Manage portfolio** or update that entry in `script.js` so its verified branding and story can be used.

Google Fonts are requested when the PC is online. The page uses system font fallbacks if those fonts cannot be reached.
