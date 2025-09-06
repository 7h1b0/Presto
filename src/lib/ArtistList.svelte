<script lang="ts">
	import Badge from './Badge.svelte';
	import type { Artist } from './types';

	interface Props {
		artists: Artist[];
	}

	let { artists }: Props = $props();
	let search = $state('');
	let sort = $state('alphabetic');

	const alphabet = '#abcdefghijklmnopqrstuvwxyz'.split('');
	const collator = new Intl.Collator();

	let filteredArtists = $derived.by(() => {
		const regexp = search !== '#' ? new RegExp(`^${search}`, 'i') : /^[^a-z]/i;
		return artists
			.filter((artist) => regexp.test(artist.name))
			.sort((a, b) => {
				if (sort === 'alphabetic') {
					return collator.compare(a.name, b.name);
				}
				return b.shows - a.shows;
			});
	});
</script>

<div class="filter">
	{#each alphabet as letter}
		<button
			data-selected={search === letter}
			onclick={() => {
				if (search === letter) {
					search = '';
				} else {
					search = letter;
				}
			}}>{letter}</button
		>
	{/each}
</div>

<div class="sort">
	<label for="alphabetic"
		><input
			type="radio"
			id="alphabetic"
			name="sort"
			value="alphabetic"
			bind:group={sort}
		/>Alphabetic</label
	>

	<label for="seen"
		><input type="radio" id="seen" name="sort" value="seen" bind:group={sort} />Seen</label
	>
</div>

<ul>
	{#each filteredArtists as artist}
		<li>
			<a href={`/artist/${artist.id}`}><span>{artist.name}</span><Badge>{artist.shows}</Badge></a>
		</li>
	{/each}
</ul>

<style>
	.filter {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-m) 0;

		button {
			color: var(--color-secondary);
			font: var(--font-content);
			border: none;
			background-color: transparent;
			cursor: pointer;
			text-transform: uppercase;
		}
		button[data-selected='true'] {
			text-decoration: underline;
		}

		@media (width < 700px) {
			display: none;
		}
	}

	.sort {
		--inner-padding: 2px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: 25ch;
		margin: 0 auto;
		gap: var(--space-xs);
		background: var(--color-tertiary);
		border-radius: var(--rounded);
		place-items: center;
		padding: var(--inner-padding);

		input {
			display: none;
		}

		label {
			width: 100%;
			text-align: center;
			border-radius: calc(var(--rounded) - var(--inner-padding));
			cursor: pointer;
			font: var(--font-caption);
			color: var(--color-secondary);
			padding-block: var(--space-xs);
		}

		label:has(:checked) {
			background-color: var(--color-background);
			color: var(--color-primary);
		}
	}

	ul {
		list-style: none;
		margin-block: var(--space-m);
	}

	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-xs);
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
