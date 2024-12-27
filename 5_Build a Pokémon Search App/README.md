# Build an app that searches for Pokémon by name or ID and displays the results. 
This app uses freeCodeCamp's PokéAPI Proxy for Pokémon data and images.

## Objective
Build an app that functions similarly to [Pokémon Search App](https://pokemon-search-app.freecodecamp.rocks).

## User Stories

- **HTML Elements**
  - Have an input element with `id="search-input"`.
  - Have a button element with `id="search-button"`.
  - Have an element with `id="pokemon-name"`.
  - Have an element with `id="pokemon-id"`.
  - Have an element with `id="weight"`.
  - Have an element with `id="height"`.
  - Have an element with `id="types"`.
  - Have an element with `id="hp"`.
  - Have an element with `id="attack"`.
  - Have an element with `id="defense"`.
  - Have an element with `id="special-attack"`.
  - Have an element with `id="special-defense"`.
  - Have an element with `id="speed"`.

- **Behavior**
  - When `#search-input` contains "Red" and `#search-button` is clicked, an alert appears with the text: **"Pokémon not found"**.
  - When `#search-input` contains "Pikachu" and `#search-button` is clicked:
    - Values in the respective elements are:
      - `#pokemon-name`: **PIKACHU**
      - `#pokemon-id`: **#25** or **25**
      - `#weight`: **Weight: 60** or **60**
      - `#height`: **Height: 4** or **4**
      - `#hp`: **35**
      - `#attack`: **55**
      - `#defense`: **40**
      - `#special-attack`: **50**
      - `#special-defense`: **50**
      - `#speed`: **90**
    - Add an `img` element with `id="sprite"` and `src` set to Pikachu's `front_default` sprite.
    - `#types` contains a single inner element: **ELECTRIC**. Clear previous content between searches.

  - When `#search-input` contains "94" and `#search-button` is clicked:
    - Values in the respective elements are:
      - `#pokemon-name`: **GENGAR**
      - `#pokemon-id`: **#94** or **94**
      - `#weight`: **Weight: 405** or **405**
      - `#height`: **Height: 15** or **15**
      - `#hp`: **60**
      - `#attack`: **65**
      - `#defense`: **60**
      - `#special-attack`: **130**
      - `#special-defense`: **75**
      - `#speed`: **110**
    - Add an `img` element with `id="sprite"` and `src` set to Gengar's `front_default` sprite.
    - `#types` contains two inner elements: **GHOST** and **POISON**. Clear previous content between searches.

## Notes
- Complete the first 13 steps inside the `index.html` file.
- Fulfill all user stories and pass the tests to complete the project.
- Add your own personal style for better user experience.
- **Test Delay:** Wait a few seconds for tests to finish; do not refresh the page prematurely.

## Happy Coding!
:D