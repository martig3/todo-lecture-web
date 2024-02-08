<script lang="ts">
	import { enhance } from '$app/forms';
	import AddTodoForm from '$lib/components/forms/AddTodoForm.svelte';
	import type { PageData } from './$types';
	import 'iconify-icon';
	export let data: PageData;
	let isAddTodoFormVisible = false;
</script>

<div class="h-[100vh] flex justify-center items-center">
	<div class="card w-[300px] h-fit p-4 shadow-lg">
		<div class="flex justify-between items-center">
			<h2>TODOS</h2>
			<button
				class="btn btn-sm btn-icon-sm variant-filled-surface"
				on:click={() => (isAddTodoFormVisible = true)}
			>
				<iconify-icon icon="tabler:circle-plus"></iconify-icon>
			</button>
		</div>
		{#each data.todos as todo}
			<div class="flex flex-row my-2 justify-between group">
				<div>
					<p>{todo.title}</p>
					<p class="opacity-50 text-xs">{todo.msg}</p>
				</div>
				<form action="/todos/?/delete" method="POST" use:enhance>
					<input hidden name="title" value={todo.title} />
					<input hidden name="msg" value={todo.msg} />
					<button
						class="btn btn-sm btn-icon-sm variant-filled-error group-hover:opacity-100 opacity-0"
					>
						<iconify-icon icon="tabler:trash"></iconify-icon>
					</button>
				</form>
			</div>
		{/each}
		{#if isAddTodoFormVisible}
			<AddTodoForm bind:isAddTodoFormVisible />
		{/if}
	</div>
</div>
