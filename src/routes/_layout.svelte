<script>
	import Nav from "../components/Nav.svelte";
	import Footer from "../components/Footer.svelte";

	export let segment;
</script>

<Nav {segment} />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		position: relative;
		max-width: 960px;
		padding: 60px 10px;
		margin: 0 auto;
	}
</style>
