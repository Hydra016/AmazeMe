<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import '../global.css'
    import Content from '../components/Content.svelte';
    import { fly } from 'svelte/transition';

    export let data;
    const { products } = data
</script>

<div in:fly={{ y:50, duration:500, delay: 500 }} out:fly={{ y:50, duration:500 }}>      
    <Header />
    <h1 class='category-heading'>All Products</h1>
    <Content {products} />
    <Footer />
  </div>