<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch("/jobs.json");
		const jobs = await res.json();

		return { jobs };
	}
</script>

<script>
	export let jobs;
</script>

<svelte:head>
	<title>All Jobs</title>
</svelte:head>

<section>
	<h2>All Current Jobs</h2>
	<ul>
		{#each jobs as job}
			<li><a href={`jobs/${job.id}`}>{job.title}</a></li>
		{/each}
	</ul>

	<section class="anchor">
		<a rel="prefetch" href="/jobs/create" class="btn">Add New Job</a>
	</section>
</section>

<style>
	ul {
		padding: 0;
	}
	li {
		list-style-type: none;
	}
	li a {
		display: block;
		padding: 15px;
		border: 1px solid #f2f2f2;
		border-radius: 8px;
		margin: 10px auto;
		text-decoration: none;
	}
	li a:hover {
		background: #fbfbfb;
	}
	.anchor {
		text-align: center;
	}
</style>
