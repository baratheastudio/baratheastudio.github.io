/*
  Barathea docs: the one place for the site's addresses.

  Every page reads these values when it loads; no page has them written in. To change an
  address, change it here (on github.com: open this file, choose the pencil, edit, Commit
  changes) and every page shows the new one within a minute or two.

  A value still written as {{NAME}} is a placeholder: pages show the link text without a link,
  with "(link coming soon)", until it has a real address. The listing files in listing/ use
  the same names.
*/
window.BARATHEA_DOCS = {
  // Where these docs are published (no slash at the end).
  DOCS_BASE: 'https://baratheastudio.github.io',
  // The support inbox merchants write to.
  SUPPORT_EMAIL: 'baratheastudio@gmail.com',
  // The support contact form (Google Forms on the support Gmail).
  SUPPORT_FORM: 'https://forms.gle/MPHKFV29B4oSrytU8',
  // The demo store of the preset (Ostrel). A placeholder until the store opens to the
  // public, for example OSTREL_URL: 'https://example-demo-store.myshopify.com',
  OSTREL_URL: '{{OSTREL_URL}}'
};
