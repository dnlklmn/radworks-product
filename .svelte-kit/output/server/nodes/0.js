

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
export const imports = ["app/immutable/nodes/0.CSrt6VcG.js","app/immutable/chunks/ThhHBB1d.js","app/immutable/chunks/jq9wEVhc.js","app/immutable/chunks/Ckxk6Aen.js","app/immutable/chunks/DGB00Aup.js","app/immutable/chunks/j6Iib1uc.js","app/immutable/chunks/DTlT_YbP.js","app/immutable/chunks/CllxaVzD.js","app/immutable/chunks/BoNxC54d.js","app/immutable/chunks/DFjLfVbM.js","app/immutable/chunks/xGCgRHDy.js"];
export const stylesheets = ["app/immutable/assets/Icon.CnFNOev9.css","app/immutable/assets/0.Bia04dU6.css"];
export const fonts = [];
