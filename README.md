# Barathea docs site

The merchant documentation for the Barathea theme: plain HTML pages, one stylesheet
(`assets/site.css`) and one small script (`assets/site.js`). No build step, no framework, no
scripts from other sites; the two fonts come from Google Fonts with system fallbacks. Every
page works as it is from any static host.

This file, `PUBLISH.md` and the `_tools/` folder are for upkeep and are not published: they
are not in `docs-site.zip`, `_config.yml` leaves the two files out if they are uploaded anyway,
and GitHub Pages never publishes folders that start with an underscore.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: what Barathea is, the two looks and their demo stores |
| `getting-started.html` | Install, choose a preset, import order, first settings, updating safely |
| `presets.html` | Barathea and Plaster: what differs and how to get each look |
| `signature-features.html` | Story and shop, the index, Client care with context, pacing, the card, size before buy, Arrange a visit, promises per market, final sale |
| `product-setup.html` | Options, sizes, size guide, swatches, pictures per color, metafields, product templates, tags |
| `collections-and-lines.html` | Lines and the Lines menu, the line template, per-line templates, tiles, filters, the Collections page |
| `pages.html` | Page templates and the Client care pages |
| `journal.html` | The blog page and shoppable story templates |
| `sections.html` | Every section and block with its settings (generated from the theme) |
| `theme-settings.html` | Every theme setting (generated from the theme) |
| `apps.html` | Apps that pair well |
| `translations.html` | Translations and right-to-left |
| `accessibility-performance.html` | Accessibility and performance |
| `faq.html` | Frequently asked questions |
| `support.html` | Support: address, reply time, what is covered |
| `changelog.html` | Changelog (1.0.0) |
| `404.html` | Page not found (GitHub Pages serves it for unknown addresses) |

## Addresses: one place

`config.js` holds the docs address (`DOCS_BASE`), the support inbox (`SUPPORT_EMAIL`) and the
two demo stores (`HALVARDE_URL`, `OSTREL_URL`). No page has them written in: each page carries
a plain fallback (a "write to us" link to the Support page, the demo link text without a link)
and `assets/site.js` writes the values from `config.js` into it when the page loads. So
changing `config.js` is the whole job, also when editing on github.com. A demo store whose
value is still a placeholder (`{{HALVARDE_URL}}`) shows as text with "(link coming soon)".
`docs.js check` fails if a page, style or script carries one of the values or a placeholder of
its own.

The listing files in `listing/` use the same placeholder names.

## Publish on GitHub Pages (free)

The owner's step-by-step is `PUBLISH.md` (create the account and the `baratheastudio`
organization, the repository `baratheastudio.github.io`, upload, turn on Pages, and what to
change if a name differs). It uploads `docs-site.zip`, which holds exactly the published files.
Rebuild the zip after any change, from the repository root:

```
rm -f docs-site.zip && (cd docs-site && zip -r -X ../docs-site.zip *.html config.js _config.yml assets -x '*.DS_Store')
```

Once the site is live, set in the theme (`theme/config-src/settings_schema/00-theme-info.json`)
`theme_documentation_url` to the docs address with a slash at the end and `theme_support_url`
to the same address followed by `support.html`.

## Upkeep

From the repository root, with Node 22:

```
npm run merge                              # the theme's generated schema and locales
node docs-site/_tools/docs.js reference    # rewrite the settings tables from the theme
node docs-site/_tools/docs.js shell        # rewrite the shared top, menu and footer
node docs-site/_tools/docs.js check        # links, anchors, tables, words, ASCII, listing lengths
node scripts/leak-check.js --repo          # the repository's deny list, docs included
```

- **After any theme change** that touches a schema or an editor string, run `reference`, then
  `check`. The Theme Store asks that the docs match the settings; `check` fails when they do
  not.
- **Words for the reference pages** (what each section, block and settings group is for) are in
  `_tools/notes.js`. The tables themselves come from the theme.
- **The menu** is `PAGES` in `_tools/docs.js`; add a page there, then run `shell`.
- **Copy rules:** plain American English, ASCII only, no em dashes, sentence case. `check`
  fails on the banned words and on the word for booking a time slot (the theme says "Arrange a
  visit").
