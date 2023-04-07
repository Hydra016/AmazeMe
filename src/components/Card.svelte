<script>
    export let product;
    export let showDeleteButton;
    export let total;
    export let products;
    import { cartItems, totalPrice } from "../stores";
    import { fly } from "svelte/transition";


    const removeFromCart = (id) => {
      cartItems.update((prev) => prev = prev.filter(item => item.id !== id))
      total = total - products.find(p => p.id == id).price
      totalPrice.update((prev) => prev = total) 
    }   
</script>

{#if product}
<div out:fly={{ y:-50 }} class="card">
    <div class="card-img">
      <img class="item-img" src={product.image} alt="product" />
    </div>
    <div class="card-details">
      <h2>{product.title}</h2>
      <div class="card-price-rate">
        <p>$ {product.price}</p>
        <p>{product.rating.rate}</p>
      </div>
    </div>
    <div class="delete-container">
      <a class="button-outlined" href={`/${product.category}/${product.id}`}>
        View Product
      </a>
      {#if showDeleteButton}
      <!-- svelte-ignore missing-declaration -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="delete-icon-link" on:click={() => removeFromCart(product.id)}>
        <img class="delete-icon" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete">
      </a>
      {/if}
    </div>
  </div>
{/if}