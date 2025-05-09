import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const articles = await getCollection('investigation');

	const items = [
		...posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
		...articles.map((article) => ({
			...article.data,
			link: `/investigation/${article.id}/`,
		}))
	];

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
