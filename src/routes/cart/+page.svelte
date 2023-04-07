<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import Content from "../../components/Content.svelte";
    import { cartItems, totalPrice } from '../../stores';
    import { fly } from 'svelte/transition';

    let products = [];
    let total = 0;
    cartItems.subscribe(prev => products = prev);
    products.map(product => {
        total += product.price
    })
    totalPrice.subscribe(prev => total = prev)
    </script>
    
    <div in:fly={{ y:50, duration:500, delay: 500 }} out:fly={{ y:50, duration:500 }}>
        <Header dontShowHeaderImg={true} />
        <h1 class='category-heading'>Cart/ ${total.toPrecision(4)}</h1>
        {#if products.length >= 1}
            <Content {total} showDeleteButton={true} {products}/>
            <!-- <a class="single-item-button" href="/">Checkout</a> -->
        {:else}
        <div class="empty-cart">
            <img src="https://cdn-icons-png.flaticon.com/512/3899/3899767.png" alt="" class="empty-cart-icon">
            <span class="empty-cart-text">Please add items to the cart</span>
        </div>
            {/if}
            <Footer />
      </div>