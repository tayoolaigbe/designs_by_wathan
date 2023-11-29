import vitePluginRequire from 'vite-plugin-require';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [vitePluginRequire('@tailwindcss/custom-forms')],
};
