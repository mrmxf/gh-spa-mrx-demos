export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [0];

export const dictionary = {
		"/": [~2],
		"/demo01": [~3],
		"/demo02": [~4],
		"/demo03": [~5],
		"/demo04": [~6],
		"/demo05": [~7],
		"/demo06": [~8],
		"/demo07": [~9],
		"/demo08": [~10],
		"/demo09": [~11],
		"/demo10": [~12],
		"/demo11": [~13],
		"/demo12": [~14],
		"/test": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';