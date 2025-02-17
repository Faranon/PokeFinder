async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);

        // Display Pokémon sprite
        const pokemonSprite = document.getElementById("pokemonSprite");
        pokemonSprite.src = data.sprites.front_default;
        pokemonSprite.style.display = "block";

    } catch (error) {
        console.error(error);
    }
}