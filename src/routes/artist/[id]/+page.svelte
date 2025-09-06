<script lang="ts">
	import FestivalList from '$lib/FestivalList.svelte';
	import Title from '$lib/Title.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log(data.artist);
</script>

<Title>{data.artist.name}</Title>

<FestivalList festivals={data.festivals} />
