<script>
	import Card from './Card.svelte';

	export let products;
</script>

<div class="content-container">
	<div class="content">
		{#if products}
			{#each products as product}
				<Card {product} />
			{/each}
		{/if}
	</div>
</div>
