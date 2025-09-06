<script lang="ts">
	let { children } = $props();
</script>

<span>
	{@render children?.()}
</span>

<style>
	span {
		background-color: var(--color-tertiary);
		font: var(--font-caption);
		color: white;
		border-radius: 500px;
		padding: 8px;
	}
</style>
