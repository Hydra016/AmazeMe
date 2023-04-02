<script>
	import { fly } from 'svelte/transition';
	let showMenu = false;
</script>

<div class="header-mobile">
	<!-- menu -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-missing-attribute -->
	<a on:click={() => (showMenu = true)}>
		<img
			class="mobile-image"
			src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
			alt="menu"
		/>
	</a>
	{#if showMenu}
		<!-- svelte-ignore a11y-missing-attribute -->
		<div
			in:fly={{ y: 50, duration: 500, delay: 500 }}
			out:fly={{ y: -50, duration: 500 }}
			class="navbar-mobile-container"
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<a on:click={() => (showMenu = false)}>
				<img
					src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png"
					alt="close"
					class="close-icon"
				/>
			</a>
			<div class="navbar-links-mobile">
				<a on:click={() => (showMenu = !showMenu)} class="navbar-link-mobile" href="/">Home</a>
				<a
					on:click={() => (showMenu = !showMenu)}
					class="navbar-link-mobile"
					href={`/men's clothing`}>Men</a
				>
				<a
					on:click={() => (showMenu = !showMenu)}
					class="navbar-link-mobile"
					href={`/women's clothing`}>Women</a
				>
				<a on:click={() => (showMenu = !showMenu)} class="navbar-link-mobile" href="/jewelery"
					>Jewelery</a
				>
				<a on:click={() => (showMenu = !showMenu)} class="navbar-link-mobile" href="/electronics"
					>Electronics</a
				>
				<a on:click={() => (showMenu = !showMenu)} class="navbar-link-mobile" href="/about">About</a
				>
			</div>
			<a class="cart-container-mobile" href="/">
				<span class="cart-text">Cart/0.0$</span>
				<img
					src="https://cdn-icons-png.flaticon.com/128/649/649931.png"
					class="cart-icon"
					alt="cart"
				/>
			</a>
		</div>
	{/if}
</div>
