import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server:{
		cors:{
			"origin": "*",
			"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
			"preflightContinue": false,
			"optionsSuccessStatus": 204
		},
		proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
			// uncomment for windows
      // '/r': 'file:///Users/bruce/xd/gms-metarex/metarex/pproj-2024-04-05-mrx-nab-clips',
			//uncomment for mac
      '/rnf': 'file:///Users/bruce/xd/gms-metarex/metarex/pproj-2024-04-05-mrx-nab-clips',
      '/r': 'file:///Users/bruce/xd/s3/bot-bdh/main/mrx-r',
      // 'app/demos/cheat': 'file:///Users/bruce/xd/gms-metarex/metarex/pproj-2024-04-05-mrx-nab-clips',
      // 'app/demos/r': 'file:///Users/bruce/xd/gms-metarex/metarex/pproj-2024-04-05-mrx-nab-clips',
      'app/demos/r': 'file:///Users/bruce/xd/s3/bot-bdh/main/mrx-r',
      }
	}
});
