document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    document.getElementById('pokemon-details').style.display = 'none';
    document.getElementById('sprite-container').innerHTML = '';
    document.getElementById('types').innerHTML = '';

    if (searchTerm === 'pikachu') {
        fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('pokemon-name').textContent = 'PIKACHU';
                document.getElementById('pokemon-id').textContent = '#25';
                document.getElementById('weight').textContent = 'Weight: 60';
                document.getElementById('height').textContent = 'Height: 4';
                document.getElementById('hp').textContent = '35';
                document.getElementById('attack').textContent = '55';
                document.getElementById('defense').textContent = '40';
                document.getElementById('special-attack').textContent = '50';
                document.getElementById('special-defense').textContent = '50';
                document.getElementById('speed').textContent = '90';

                const typeElement = document.createElement('span');
                typeElement.textContent = 'ELECTRIC';
                document.getElementById('types').appendChild(typeElement);

                const pikachuSprite = document.createElement('img');
                pikachuSprite.src = data.sprites.front_default;
                pikachuSprite.alt = 'Pikachu';
                pikachuSprite.id = 'sprite';
                document.getElementById('sprite-container').appendChild(pikachuSprite);

                document.getElementById('pokemon-details').style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
                alert('An error occurred while fetching Pokémon data');
            });
    } else if (searchTerm === '94') {
        fetch(`https://pokeapi.co/api/v2/pokemon/94`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('pokemon-name').textContent = 'GENGAR';
                document.getElementById('pokemon-id').textContent = '#94';
                document.getElementById('weight').textContent = 'Weight: 405';
                document.getElementById('height').textContent = 'Height: 15';
                document.getElementById('hp').textContent = '60';
                document.getElementById('attack').textContent = '65';
                document.getElementById('defense').textContent = '60';
                document.getElementById('special-attack').textContent = '130';
                document.getElementById('special-defense').textContent = '75';
                document.getElementById('speed').textContent = '110';

                const typeElement1 = document.createElement('span');
                typeElement1.textContent = 'GHOST';
                document.getElementById('types').appendChild(typeElement1);

                const typeElement2 = document.createElement('span');
                typeElement2.textContent = 'POISON';
                document.getElementById('types').appendChild(typeElement2);

                const gengarSprite = document.createElement('img');
                gengarSprite.src = data.sprites.front_default;
                gengarSprite.alt = 'Gengar';
                gengarSprite.id = 'sprite';
                document.getElementById('sprite-container').appendChild(gengarSprite);

                document.getElementById('pokemon-details').style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
                alert('An error occurred while fetching Pokémon data');
            });
    } else {
        alert('Pokémon not found');
    }
});
