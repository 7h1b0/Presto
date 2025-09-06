<script lang="ts">
	import ArtistList from '$lib/ArtistList.svelte';
	import Title from '$lib/Title.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Title>Artists</Title>

<ArtistList artists={data.artists} />
