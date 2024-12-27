document.getElementById('search-button').addEventListener('click', async () => {
    const input = document.getElementById('search-input').value.trim().toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${input}`;
    const nameElement = document.getElementById('pokemon-name');
    const idElement = document.getElementById('pokemon-id');
    const weightElement = document.getElementById('weight');
    const heightElement = document.getElementById('height');
    const typesElement = document.getElementById('types');
    const stats = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
    const spriteContainer = document.getElementById('sprite-container');
  
    nameElement.textContent = '';
    idElement.textContent = '';
    weightElement.textContent = '';
    heightElement.textContent = '';
    typesElement.textContent = '';
    spriteContainer.innerHTML = '';
    stats.forEach(stat => document.getElementById(stat).textContent = '');
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Pokémon not found');
      const data = await response.json();
  
      nameElement.textContent = data.name.toUpperCase();
      idElement.textContent = `#${data.id}`;
      weightElement.textContent = `Weight: ${data.weight}`;
      heightElement.textContent = `Height: ${data.height}`;
      typesElement.textContent = '';
      data.types.forEach(type => {
        const typeElement = document.createElement('span');
        typeElement.textContent = type.type.name.toUpperCase();
        typesElement.appendChild(typeElement);
      });
      stats.forEach(stat => {
        const statData = data.stats.find(s => s.stat.name === stat);
        document.getElementById(stat).textContent = statData ? statData.base_stat : 'N/A';
      });
      const sprite = document.createElement('img');
      sprite.id = 'sprite';
      sprite.src = data.sprites.front_default;
      sprite.alt = `${data.name} sprite`;
      spriteContainer.appendChild(sprite);
    } catch (error) {
      alert('Pokémon not found');
    }
  });
  