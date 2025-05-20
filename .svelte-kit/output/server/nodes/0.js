

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "csr": true,
  "trailingSlash": "never"
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.DZ9--Hmr.js","app/immutable/chunks/DwvgaAyw.js","app/immutable/chunks/C1MFQA5y.js","app/immutable/chunks/CtMmVGll.js","app/immutable/chunks/C39j0suy.js","app/immutable/chunks/CGnMSPBz.js","app/immutable/chunks/D2rZA1FA.js","app/immutable/chunks/DWBa8EYP.js","app/immutable/chunks/BbG8P-l3.js","app/immutable/chunks/C80j06TG.js"];
export const stylesheets = ["app/immutable/assets/Icon.CnFNOev9.css","app/immutable/assets/0.B1B4Q9mz.css"];
export const fonts = [];
