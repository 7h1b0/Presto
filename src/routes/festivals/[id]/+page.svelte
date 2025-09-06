<script lang="ts">
	import ArtistList from '$lib/ArtistList.svelte';
	import { round } from '$lib/roundNumber';
	import Title from '$lib/Title.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Title>{data.festival.name}</Title>

<section>
	<div>
		<h3>Duration</h3>
		<p>{data.festival.duration} days</p>
	</div>
	<div>
		<h3>Total artist</h3>
		<p>{data.artists.length}</p>
	</div>
	<div>
		<h3>Average artist per day</h3>
		<p>{round(data.artists.length / data.festival.duration)}</p>
	</div>
</section>

<ArtistList artists={data.artists} />

<style>
	section {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		place-items: center;

		div {
			text-align: center;
			padding: var(--space-s) 0 var(--space-m);
		}

		h3 {
			font: var(--font-caption);
			color: var(--color-secondary);
		}
		p {
			font: var(--font-content);
			color: var(--color-primary);
		}
	}
</style>
