

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/docs/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "csr": true,
  "trailingSlash": "never"
};
export const universal_id = "src/routes/docs/+page.js";
export const imports = ["app/immutable/nodes/4.DRrmXlIb.js","app/immutable/chunks/Dh8A1lET.js","app/immutable/chunks/ThhHBB1d.js","app/immutable/chunks/jq9wEVhc.js","app/immutable/chunks/j6Iib1uc.js","app/immutable/chunks/CllxaVzD.js","app/immutable/chunks/BoNxC54d.js","app/immutable/chunks/Ckxk6Aen.js","app/immutable/chunks/DTlT_YbP.js","app/immutable/chunks/DTwCd3I1.js","app/immutable/chunks/szSiFn78.js","app/immutable/chunks/DFjLfVbM.js"];
export const stylesheets = ["app/immutable/assets/Icon.CnFNOev9.css","app/immutable/assets/Download.BY9OLPJp.css","app/immutable/assets/_page.DLplyQyR.css"];
export const fonts = [];
