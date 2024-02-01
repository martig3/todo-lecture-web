<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="h-[40vh] flex justify-center items-center">
	<div class="card w-[300px] h-fit p-4 shadow-lg">
		<h2>TODOS</h2>
		{#each data.todos as todo}
			<div class="flex justify-between items-center">
				<p>{todo.title}</p>
				<p class="opacity-50">{todo.msg}</p>
			</div>
		{/each}
	</div>
</div>
