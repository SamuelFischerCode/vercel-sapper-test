<script>
	import { goto } from "@sapper/app";
	let title;
	let amount;
	let details;
	const handleSubmit = async e => {
		if (title && amount && details) {
			const res = await fetch("jobs.json", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					title,
					amount,
					details,
				}),
			});
			const updatedJobs = await res.json();

			goto("jobs");
		}
	};
</script>

<svelte:head>
	<title>Add New Job</title>
</svelte:head>

<section>
	<h2>Add New Job</h2>
	<form on:submit|preventDefault={handleSubmit}>
		<input type="text" placeholder="Job Title" bind:value={title} required />
		<input
			type="number"
			placeholder="Salary (€)"
			bind:value={amount}
			required
		/>
		<textarea placeholder="Job Details" bind:value={details} required />
		<button class="btn">Add New Job</button>
	</form>
</section>

<style>
	h2 {
		text-align: center;
	}
	form {
		max-width: 360px;
		margin: 40px auto;
		text-align: center;
	}
	input,
	textarea {
		display: block;
		width: 100%;
		padding: 10px;
		font-family: arial;
		margin: 10px auto;
		border: 1px solid #eee;
		border-radius: 8px;
	}
</style>
