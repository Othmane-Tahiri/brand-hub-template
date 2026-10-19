# Brand Hub Studio

A visual editor for the Brand Hub static brand-guidelines website.

## Open the editor
After this branch is merged and GitHub Pages has deployed, open the existing Brand Hub URL with `/studio/` appended. For example, `https://YOUR-USERNAME.github.io/brand-hub-template/studio/`.

## Create a client project
1. Open **Brand setup** and change the brand name, tagline, description and brand colors.
2. Use **Sections** to select the sections and available subsection blocks for this client.
3. Use **Content & assets** to edit copy, typography data, galleries and image references. For image fields, you may upload PNG, JPG, WEBP, GIF or SVG (up to 4 MB per image). Optimize images before uploading.
4. Use **Live preview** to check the layout.
5. Click **Save project** to keep an editable JSON backup.
6. Click **Export website ZIP** to download a standalone website package.

## Publish a client website
Unzip the exported file and upload its contents to a new GitHub repository with GitHub Pages enabled, or another static host. Keep `index.html`, `css/`, and `js/` in the same folder structure.

## Important limitations
- The Studio is a static browser application. There is no server, account, or automatic cloud saving. Save your project JSON before leaving the page.
- The ZIP embeds uploaded images in `js/config.js` as data URLs. Many large images can create large files. Use optimized assets.
- Some checkbox entries represent planned subsections without standalone HTML blocks. These are labeled **No standalone block** in Studio. They do not create new content.
- The Overview and Strategy pages currently contain some fixed copy in the website HTML; not every piece of text is driven by config.
- The website uses external font and image URLs in the existing sample configuration. Those require an internet connection unless replaced with local or embedded assets.
- The editor exports a website ZIP; it does not automatically deploy a client site.
