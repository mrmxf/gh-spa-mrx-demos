// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// use static site adapter for serving Hugo content
import adapter from '@sveltejs/adapter-static'

// the svelte preprocess has a brain melt with typescript - swap it out
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const configStatic = {
	preprocess: [vitePreprocess()],

	kit: {
		// this assumes we mount at specific app locations
		paths: { assets: "", base: "/app/demos" },
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: "warn",
		},
	}
};

export default configStatic;
