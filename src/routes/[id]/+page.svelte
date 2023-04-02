<script>
    import Header from "../../components/Header.svelte";
    import Content from "../../components/Content.svelte";
    import Footer from "../../components/Footer.svelte";
    import { fly } from 'svelte/transition';

    export let data;
</script>

<div  in:fly={{ y:50, duration:500, delay: 500 }} out:fly={{ y:50, duration:500 }}>
    <Header/>
    <h1 class='category-heading'>{data.category}</h1>
    <Content products={data.products} category={data.category} />
    <Footer />

  </div>