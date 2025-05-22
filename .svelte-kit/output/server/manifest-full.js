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
		client: {start:"app/immutable/entry/start.CO6Ovi2b.js",app:"app/immutable/entry/app.CZuxxUpT.js",imports:["app/immutable/entry/start.CO6Ovi2b.js","app/immutable/chunks/DFjLfVbM.js","app/immutable/chunks/jq9wEVhc.js","app/immutable/entry/app.CZuxxUpT.js","app/immutable/chunks/jq9wEVhc.js","app/immutable/chunks/DTlT_YbP.js","app/immutable/chunks/Ckxk6Aen.js","app/immutable/chunks/CllxaVzD.js","app/immutable/chunks/ThhHBB1d.js","app/immutable/chunks/DTwCd3I1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/docs",
				pattern: /^\/docs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/docs/[...slug]",
				pattern: /^\/docs(?:\/(.*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
