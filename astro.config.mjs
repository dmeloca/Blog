// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: 'https://dmeloca.github.io',
	base: 'Root-Write',
    markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	},
	integrations: [sitemap(), starlight({
		customCss: ["katex/dist/katex.min.css"],
		title: ''
	}),mdx()]
});
