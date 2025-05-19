

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/guides/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "csr": true,
  "trailingSlash": "never"
};
export const universal_id = "src/routes/guides/+page.js";
export const imports = ["app/immutable/nodes/4.CSWcEpom.js","app/immutable/chunks/CMMHqqq5.js","app/immutable/chunks/cXHjRKmv.js","app/immutable/chunks/CYLCNOVo.js","app/immutable/chunks/DVgEcECH.js","app/immutable/chunks/Cl600M2I.js","app/immutable/chunks/Cm_bsiDZ.js","app/immutable/chunks/1zWo0DR5.js","app/immutable/chunks/C2YQscGL.js","app/immutable/chunks/B4qlLWWP.js","app/immutable/chunks/88cpOVdb.js","app/immutable/chunks/CvODm_tE.js"];
export const stylesheets = ["app/immutable/assets/4.cxIbZRSZ.css"];
export const fonts = [];
