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
		client: {start:"app/immutable/entry/start.BkdcW_0o.js",app:"app/immutable/entry/app.Q2ovbR8S.js",imports:["app/immutable/entry/start.BkdcW_0o.js","app/immutable/chunks/CvODm_tE.js","app/immutable/chunks/cXHjRKmv.js","app/immutable/entry/app.Q2ovbR8S.js","app/immutable/chunks/cXHjRKmv.js","app/immutable/chunks/DVgEcECH.js","app/immutable/chunks/CMMHqqq5.js","app/immutable/chunks/1zWo0DR5.js","app/immutable/chunks/Cm_bsiDZ.js","app/immutable/chunks/B4qlLWWP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/guides"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
