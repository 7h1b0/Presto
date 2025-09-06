<script lang="ts">
	import { round } from '$lib/roundNumber';
	import Title from '$lib/Title.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Title>Analytics</Title>

<section>
	<div>
		<h3>Festival done</h3>
		<p>{data.festivals}</p>
	</div>
	<div>
		<h3>Days spent in festival</h3>
		<p>{data.duration} days</p>
	</div>
	<div>
		<h3>Average festival duration</h3>
		<p>{round(data.duration / data.festivals)} days</p>
	</div>
	<div>
		<h3>Show seen</h3>
		<p>{data.shows}</p>
	</div>
	<div>
		<h3>Unique artist seen</h3>
		<p>{data.artists}</p>
	</div>
	<div>
		<h3>Average show per days</h3>
		<p>{round(data.shows / data.duration)}</p>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		place-items: center;
		row-gap: var(--space-s);

		div {
			text-align: center;
			padding: var(--space-m) 0;
			background-color: white;
			width: 100%;
		}

		div:nth-child(3n - 2) {
			border-radius: var(--rounded) 0 0 var(--rounded);
		}
		div:nth-child(3n) {
			border-radius: 0 var(--rounded) var(--rounded) 0;
		}

		h3 {
			font: var(--font-caption);
			color: var(--color-secondary);
		}
		p {
			font: var(--font-content);
		}
	}
</style>
