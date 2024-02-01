import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const request = await fetch('http://localhost:3000/todos');
	const todos = await request.json();
	return { todos };
};
