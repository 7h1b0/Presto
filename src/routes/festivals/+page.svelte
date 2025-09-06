<script lang="ts">
	import FestivalList from '$lib/FestivalList.svelte';
	import Title from '$lib/Title.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Title>Festival</Title>

<FestivalList festivals={data.festivals} />
