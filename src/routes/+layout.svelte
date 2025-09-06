<script lang="ts">
	import './app.css';

	let { children } = $props();
</script>

<svelte:head></svelte:head>

<nav>
	<a href="/">Artists</a>
	<a href="/festivals">Festival</a>
	<a href="/analytics">Analytics</a>
</nav>
<main>
	{@render children?.()}
</main>

<style>
	nav {
		padding: var(--space-m) 0;
		display: flex;
		gap: var(--space-m);
		margin: auto 0;
		justify-content: center;
		align-items: center;

		a {
			color: var(--color-secondary);
			font: var(--font-caption);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
	main {
		padding: var(--space-s);
		margin: 0 auto;
		width: 90%;
		max-width: 65ch;
	}
</style>
