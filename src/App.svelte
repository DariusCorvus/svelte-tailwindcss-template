<script>
	import TailwindCss from "./TailwindCSS.svelte";
	export let name;
</script>

<main class="text-center p-4 mx-0">
	<h1 class="uppercase text-8xl font-thin"><span>Hello</span> <span class="text-blue-400">{name}!</span></h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		max-width: 240px;
	}

	h1 {
		color: #ff3e00;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>