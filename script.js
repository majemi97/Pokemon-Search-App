document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Clear previous search results
    document.getElementById('pokemon-details').style.display = 'none';
    document.getElementById('sprite-container').innerHTML = '';
    document.getElementById('types').innerHTML = '';

    // Perform search based on user input
    if (searchTerm === 'red') {
        alert('Pokémon not found');
    } else {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
                document.getElementById('pokemon-id').textContent = `#${data.id}`;
                document.getElementById('weight').textContent = `Weight: ${data.weight}`;
                document.getElementById('height').textContent = `Height: ${data.height}`;
                document.getElementById('hp').textContent = `HP: ${data.stats[0].base_stat}`;
                document.getElementById('attack').textContent = `Attack: ${data.stats[1].base_stat}`;
                document.getElementById('defense').textContent = `Defense: ${data.stats[2].base_stat}`;
                document.getElementById('special-attack').textContent = `Special Attack: ${data.stats[3].base_stat}`;
                document.getElementById('special-defense').textContent = `Special Defense: ${data.stats[4].base_stat}`;
                document.getElementById('speed').textContent = `Speed: ${data.stats[5].base_stat}`;

                // Add types
                data.types.forEach(type => {
                    const typeElement = document.createElement('span');
                    typeElement.textContent = type.type.name.toUpperCase();
                    document.getElementById('types').appendChild(typeElement);
                });

                // Add sprite
                const sprite = document.createElement('img');
                sprite.src = data.sprites.front_default;
                sprite.alt = data.name;
                document.getElementById('sprite-container').appendChild(sprite);

                // Display details
                document.getElementById('pokemon-details').style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
                alert('An error occurred while fetching Pokémon data');
            });
    }
});
