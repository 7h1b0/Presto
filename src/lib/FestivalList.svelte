<script lang="ts">
	import type { Festival } from './types';

	interface Props {
		festivals: Festival[];
	}

	let { festivals }: Props = $props();

	const years = new Set(festivals.map((festival) => festival.year));

	let filterPerYear = $state<null | number>(null);
	let filteredFestival = $derived(
		festivals.filter((festival) => {
			if (filterPerYear !== null) {
				return festival.year === filterPerYear;
			}
			return true;
		})
	);
</script>

<ul class="filter">
	{#each years as year}
		<li>
			<button
				data-selected={filterPerYear === year}
				onclick={() => {
					if (filterPerYear !== year) {
						filterPerYear = year;
					} else {
						filterPerYear = null;
					}
				}}>{year}</button
			>
		</li>
	{/each}
</ul>

<ul class="artist">
	{#each filteredFestival as festival}
		<li>
			<a href={`/festivals/${festival.id}`}><span>{festival.name}</span></a>
		</li>
	{/each}
</ul>

<style>
	.filter {
		list-style: none;
		display: flex;
		padding: var(--space-m) 0;
		gap: var(--space-xs);
		align-items: center;
		justify-content: center;

		button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			font: var(--font-content);
			color: var(--color-secondary);
		}
		button[data-selected='true'] {
			text-decoration: underline;
		}
	}

	.artist {
		list-style: none;
		margin-block: var(--space-m);
	}

	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-m) var(--space-s);
		border-top: 1px solid var(--color-tertiary);
	}
	span,
	a {
		font: var(--font-content);
		color: var(--color-primary);
		text-decoration: none;
		text-transform: uppercase;
	}
	a:hover span {
		text-decoration: underline;
	}
</style>
