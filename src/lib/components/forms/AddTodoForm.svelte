<script lang="ts">
	import { enhance } from '$app/forms';
	export let isAddTodoFormVisible: boolean;
</script>

<form class="flex flex-col gap-2" action="/todos/?/create" method="POST" use:enhance>
	<input type="text" name="title" class="input rounded-md" placeholder="Title" />
	<textarea name="message" class="input textarea" placeholder="Message"></textarea>
	<button class="btn btn-sm variant-filled-surface" on:click={() => (isAddTodoFormVisible = false)}
		><iconify-icon icon="tabler:circle-plus"></iconify-icon></button
	>
</form>
