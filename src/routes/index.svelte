<svelte:head>
	<title>the Jobs App - Home</title>
</svelte:head>

<main>
	<img src="no-text-logo.png" alt="logo" />
	<h1>Jobs For Everyone</h1>
	<p>Online or on Site</p>
	<a href="jobs" class="btn">View Jobs</a>
</main>

<style>
	h1,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	img {
		width: 200px;
		margin: 0 auto;
		display: block;
	}

	a {
		margin-top: 90px;
	}

	main {
		margin-top: 60px;
		text-align: center;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
