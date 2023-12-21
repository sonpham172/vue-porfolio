<script>
  import Card from "./Card.svelte";
</script>

<main>
	<Card
		card_title="My Card Title"
		card_desc="Lorem ipsum dolor…"
		card_img="path/to/my-image.png"
	/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>