<script>
	import HeaderImage from './HeaderImage.svelte';
	import Menu from './Menu.svelte';
	import { cartItems } from '../stores';
	import { fly } from 'svelte/transition';
	export let dontShowHeaderImg;
	let items = 0
	cartItems.subscribe((prev) => items = prev.length)
</script>

<div>
	<div class="details-container">
		<div class="details-container-first">
			<div class="details-detail location">
				<img
					class="details-icon"
					src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
					alt="location"
				/>
				<span class="detail-text">Brīvības gatve 372, Riga LV-1006</span>
			</div>
			<div class="details-detail">
				<img
					class="details-icon"
					src="https://cdn-icons-png.flaticon.com/128/159/159832.png"
					alt="phone"
				/>
				<span class="detail-text">+371-26-691-517</span>
			</div>
		</div>
		<div class="details-container-first">
			<a href="/" class="details-detail">
				<span class="socials">follow us on socials</span>
				<img
					class="details-icon"
					src="https://cdn-icons-png.flaticon.com/128/1968/1968750.png"
					alt="social"
				/>
			</a>
		</div>
	</div>
	<nav class={`navbar ${dontShowHeaderImg ? 'navbar-links-border' : null}`}>
		<a href="/">
			<img src="https://cdn-icons-png.flaticon.com/128/4507/4507860.png" class="logo" alt="logo" />
		</a>
		<div class="navbar-links">
			<a class="navbar-link" href="/">Home</a>
			<a class="navbar-link" href={`/men's clothing`}>Men</a>
			<a class="navbar-link" href={`/women's clothing`}>Women</a>
			<a class="navbar-link" href="/jewelery">Jewelery</a>
			<a class="navbar-link" href="/electronics">Electronics</a>
			<a class="navbar-link" href="/about">About</a>
		</div>
		<a class="cart-container" href="/cart">
			<img
				src="https://cdn-icons-png.flaticon.com/128/649/649931.png"
				class="cart-icon"
				alt="cart"
			/>
			{#key items}
			<div in:fly={{ y: -20 }} class="items">
				{items} 
			</div>
			{/key}
			
		</a>
		<Menu />
	</nav>

	{#if !dontShowHeaderImg}
    <HeaderImage />
    {/if}
</div>
