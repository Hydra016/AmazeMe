<script>
    export let product;
</script>

{#if product}
<div class="card">
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
    <a class="button-outlined" href={`/${product.category}/${product.id}`}>
      View Product
    </a>
  </div>
{/if}