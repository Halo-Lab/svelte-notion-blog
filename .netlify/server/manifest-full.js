export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.828dce00.js","app":"_app/immutable/entry/app.388ba4b8.js","imports":["_app/immutable/entry/start.828dce00.js","_app/immutable/chunks/index.1b0433af.js","_app/immutable/chunks/singletons.c843f6eb.js","_app/immutable/entry/app.388ba4b8.js","_app/immutable/chunks/index.1b0433af.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/posts/_server.js')
			},
			{
				id: "/post/[id]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
