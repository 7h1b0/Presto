<script lang="ts">
	let { children } = $props();
</script>

<h1>
	{@render children?.()}
</h1>

<style>
	h1 {
		font: var(--font-title);
		text-align: center;
		padding-block: var(--space-m);
	}
</style>
