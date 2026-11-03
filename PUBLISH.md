# Publishing the Barathea docs on GitHub Pages

For Ify. About 20 minutes in a browser, all free. Nothing here costs money or needs a card.

What you need: the file `docs-site.zip` (in the `theme-rebuild` folder) and the support Gmail
(planned: `baratheastudio@gmail.com`). The result is the docs site at
`https://baratheastudio.github.io/`.

If a name you want is taken (the Gmail, the GitHub account or the organization), use the
closest free one and follow "If a name is different" at the end. Nothing else changes.

## A. Create the GitHub account and the organization

1. Open github.com and choose **Sign up**. Use the support Gmail as the email address.
   **Username: do not use `baratheastudio`** (an account and an organization cannot share a
   name, and the organization needs it). Use for example `baratheastudio-admin`. Confirm the
   email code GitHub sends to the Gmail.
2. Top right, click your picture > **Your organizations** > **New organization** > choose the
   **Free** plan.
3. Organization name: `baratheastudio`. Contact email: the support Gmail. "This organization
   belongs to": **My personal account**. Finish; skip inviting members.

## B. Create the repository

4. In the organization (github.com/baratheastudio), choose **Repositories** > **New
   repository**.
5. Repository name exactly: `baratheastudio.github.io` (all lower case, with the dots).
   Choose **Public** (free Pages needs a public repository). Tick **Add a README file**.
   Choose **Create repository**.

## C. Upload the site

6. On your Mac, double-click `docs-site.zip`. It opens as a folder named `docs-site` with 17
   HTML files, `config.js`, `_config.yml` and an `assets` folder inside.
7. In the repository on GitHub, choose **Add file** > **Upload files**.
8. Open the unzipped `docs-site` folder in Finder, select everything **inside** it
   (Cmd + A), and drag it onto the GitHub page. Drag what is inside the folder, not the folder
   itself: `index.html` must end up at the top of the repository, not inside a `docs-site`
   folder. Use Chrome or Safari; both keep the `assets` folder.
9. Wait until every file is listed (about 22), then under **Commit changes** leave "Commit
   directly to the main branch" chosen and click **Commit changes**.
10. Check the repository's file list: `index.html`, `config.js`, `_config.yml` and an
    `assets` folder holding `site.css`, `site.js` and `favicon.svg`. If `assets` is missing,
    repeat step 7 and drag only the `assets` folder.

## D. Turn on GitHub Pages

11. In the repository, choose **Settings** (top bar) > **Pages** (left column).
12. Under **Build and deployment**: Source **Deploy from a branch**; Branch **main**, folder
    **/ (root)**; click **Save**.
13. Wait one to three minutes. Reload the Pages settings page: it shows "Your site is live at
    https://baratheastudio.github.io/". The **Actions** tab shows the build turning green.
14. Open the site and check: the menu works on every page; the footer and the Support page show
    the support Gmail as a link; the Home page shows "Open the Halvarde demo (link coming
    soon)" and the same for Ostrel (that is right until the demo stores are open).

## E. After it is live

15. Tell Claude the site is live. The theme's `theme_info` still points at placeholder
    addresses; they become `https://baratheastudio.github.io/` (documentation) and
    `https://baratheastudio.github.io/support.html` (support), the zip is rebuilt, and the
    release check then passes.
16. When the demo stores are open, put their addresses into `config.js` (step 19). The Home
    page links appear by themselves.

## If a name is different

Every address on the site is written once, in `config.js`. The pages read it when they load,
so one edit changes every page.

17. **Different Gmail** (for example `barathea.studio@gmail.com`): in the repository, click
    `config.js` > the pencil icon (Edit this file) > change the line
    `SUPPORT_EMAIL: 'baratheastudio@gmail.com',` keeping the quotes and the comma >
    **Commit changes**. The site updates within a few minutes.
18. **Different organization name** (for example `barathea-studio`): name the repository
    `barathea-studio.github.io` in step 5, and in `config.js` change
    `DOCS_BASE: 'https://baratheastudio.github.io',` to the new address (no slash at the end).
    Tell Claude, so the theme's `theme_info` and the listing get the same address.
    If the name `baratheastudio` went to your own account instead of an organization, that
    also works: create the repository `baratheastudio.github.io` under your account in step 4
    and skip the organization. The address stays the same.
19. **Demo stores open**: in `config.js` replace `'{{HALVARDE_URL}}'` with the Halvarde store
    address in quotes (for example `'https://your-store.myshopify.com'`), and the same for
    `OSTREL_URL`. Commit.

Do not edit the HTML pages to change an address: they do not hold one. The listing texts for
the Theme Store use the same names (`{{DOCS_BASE}}`, `{{SUPPORT_EMAIL}}`, `{{HALVARDE_URL}}`,
`{{OSTREL_URL}}`) and take their values from `config.js` when you paste them.

The site must be at the top of a `.github.io` address (as above). In a sub-folder of another
site, every page still works except the "page not found" page, which loads its styles from the
top of the address.
