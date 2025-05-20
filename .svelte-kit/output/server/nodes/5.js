

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/docs/_...slug_/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "csr": true,
  "trailingSlash": "never"
};
export const universal_id = "src/routes/docs/[...slug]/+page.js";
export const imports = ["app/immutable/nodes/5.Bi-1s7yn.js","app/immutable/chunks/DwvgaAyw.js","app/immutable/chunks/C1MFQA5y.js","app/immutable/chunks/CGnMSPBz.js","app/immutable/chunks/CLi7tvQ0.js","app/immutable/chunks/D47-vlkw.js","app/immutable/chunks/D2rZA1FA.js","app/immutable/chunks/CtMmVGll.js","app/immutable/chunks/DWBa8EYP.js","app/immutable/chunks/jgE79BOX.js","app/immutable/chunks/BdVcgzAT.js","app/immutable/chunks/C80j06TG.js","app/immutable/chunks/BbG8P-l3.js"];
export const stylesheets = ["app/immutable/assets/Icon.CnFNOev9.css","app/immutable/assets/Download.CIdYbOiG.css","app/immutable/assets/_page.vd6KG1iE.css"];
export const fonts = [];
