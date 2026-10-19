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

## Publish directly to GitHub (public sites)
1. In Studio, open **05 / Publish to GitHub**.
2. Create a GitHub personal access token with the repository creation, Contents write, and Pages administration permissions required for the GitHub API. GitHub may require a classic token with `public_repo` scope for creating a public repository, depending on account settings.
3. Paste the token into Studio for this session, choose a new repository name, and click **Create & publish client website**.
4. Confirm that the repository and all attached assets may be publicly accessible.
5. Studio creates a public repository, uploads the website and assets, and attempts to enable GitHub Pages. GitHub may take several minutes to deploy; if Pages activation fails, enable it manually in the new repository's Settings → Pages.
6. Save your editable project JSON separately. Studio does not store the token, but you should revoke unused tokens in GitHub Settings.

**Security:** Never use this public GitHub workflow for confidential client assets. A private repository or an unlisted link is not a secure password-protected website. Secure private delivery requires a separate authenticated hosting solution, not implemented in Studio.

**Limitations:** The publish action creates a **new** repository each time. It does not update an existing client repository, and it cannot resume partial uploads after an error. A failed upload may leave a partially created public repository, which you must review in GitHub. This workflow requires a browser and a working GitHub API connection and has not yet been tested end-to-end with a real token.
