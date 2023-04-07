<script>
	import Card from './Card.svelte';
	export let showDeleteButton;
	export let products;
	export let total;
</script>

<div class="content-container">
	<div class="content">
		{#if products}
			{#each products as product}
				<Card {total} {products} {showDeleteButton} {product} />
			{/each}
		{/if}
	</div>
</div>
