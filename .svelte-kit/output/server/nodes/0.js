

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
export const imports = ["app/immutable/nodes/0.BFGZ1yeW.js","app/immutable/chunks/CMMHqqq5.js","app/immutable/chunks/cXHjRKmv.js","app/immutable/chunks/1zWo0DR5.js","app/immutable/chunks/Dq_R7R6O.js","app/immutable/chunks/CYLCNOVo.js","app/immutable/chunks/DiATIbfk.js","app/immutable/chunks/Cl600M2I.js","app/immutable/chunks/B4qlLWWP.js","app/immutable/chunks/CvODm_tE.js","app/immutable/chunks/88cpOVdb.js"];
export const stylesheets = ["app/immutable/assets/Icon.CnFNOev9.css","app/immutable/assets/0.8CnxvUDp.css"];
export const fonts = [];
