export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["seedling.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"app/immutable/entry/start.2pR3o2xq.js",app:"app/immutable/entry/app.Bl1lbb0V.js",imports:["app/immutable/entry/start.2pR3o2xq.js","app/immutable/chunks/BbG8P-l3.js","app/immutable/chunks/C1MFQA5y.js","app/immutable/entry/app.Bl1lbb0V.js","app/immutable/chunks/C1MFQA5y.js","app/immutable/chunks/jgE79BOX.js","app/immutable/chunks/CtMmVGll.js","app/immutable/chunks/D47-vlkw.js","app/immutable/chunks/DwvgaAyw.js","app/immutable/chunks/DWBa8EYP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/docs/[...slug]",
				pattern: /^\/docs(?:\/(.*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/docs"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
