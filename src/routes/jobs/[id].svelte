<script context="module">
	export async function preload(page, session) {
		const { id } = page.params;

		const res = await this.fetch(`jobs/${id}.json`);
		if (res.status >= 200 && res.status <= 299) {
			const job = await res.json();

			return { job };
		} else if (res.status === 404) {
			const { error } = await res.json();
			this.error(404, error);
		}
	}
</script>

<script>
	export let job;
</script>

<svelte:head>
	<title>Job - {job.title}</title>
</svelte:head>

<section class="job">
	<h2>{job.title}</h2>
	<p>Salary of €{job.amount}</p>
	<p>{job.details}</p>
</section>
