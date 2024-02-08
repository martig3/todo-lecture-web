import { BASE_URL } from '$env/static/private';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const request = await fetch(`${BASE_URL}/todos`);
	const todos = await request.json();
	return { todos };
};

export const actions = {
	create: async ({ request, fetch }) => {
		const form = await request.formData();
		const title = form.get('title') ?? '';
		const msg = form.get('message') ?? '';
		const r = await fetch(`${BASE_URL}/todos`, {
			method: 'PUT',
			body: JSON.stringify({ title, msg }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return { success: r.ok };
	},
	delete: async ({ request, fetch }) => {
		const form = await request.formData();
		const title = form.get('title') ?? '';
		const msg = form.get('message') ?? '';
		const r = await fetch(`${BASE_URL}/todos`, {
			method: 'DELETE',
			body: JSON.stringify({ title, msg }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return { success: r.ok };
	}
} satisfies Actions;
