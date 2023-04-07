<script>
import Header from "../../../components/Header.svelte";
import Footer from "../../../components/Footer.svelte";
import Error from "../../../components/Error.svelte";

import { cartItems, totalPrice } from '../../../stores';

import { fly } from 'svelte/transition';
export let data;

let items = [];
let total = 0;

const addToCart = (product) => {
  cartItems.update((prev) => items = [...prev, product])
  items.map(p => total += p.price)
  totalPrice.update(prev => prev = total)
}

</script>

<div in:fly={{ y:50, duration:500, delay: 500 }} out:fly={{ y:50, duration:500 }}>
    <Header dontShowHeaderImg={true} />
    {#if data.product}
    <div class='single-item-container'>
      <img class='single-item-image' src={data.product.image} alt="product" />
      <div class='single-item-details-container'>
        <span class='single-item-heading'>{data.product.title}</span>
        <span class='single-item-description'>{data.product.description}</span>
        <span class='single-item-price'>$ {data.product.price}</span>
        <button class='single-item-button' on:click={() => addToCart(data.product)}>
        Add To Cart
        </button>
      </div>
    </div>
    {:else}
    <Error />
    {/if}
    <Footer />
  </div>