<script>
import Header from "../../../components/Header.svelte";
import Footer from "../../../components/Footer.svelte";
import { fly } from 'svelte/transition';

export let data;
</script>

<div in:fly={{ y:50, duration:500, delay: 500 }} out:fly={{ y:50, duration:500 }}>
    <Header dontShowHeaderImg={true} />
    <div class='single-item-container'>
      <img class='single-item-image' src={data.product.image} alt="product" />
      <div class='single-item-details-container'>
        <span class='single-item-heading'>{data.product.title}</span>
        <span class='single-item-description'>{data.product.description}</span>
        <span class='single-item-price'>$ {data.product.price}</span>
        <a class='single-item-button' href='/'>
        Buy Now
      </a>
      </div>
    </div>
    <Footer />
  </div>