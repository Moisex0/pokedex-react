import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20'

export async function getPokemons() {
  try {
    const response = await axios.get(API_URL)

    const pokemons = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const detail = await axios.get(pokemon.url)
        return detail.data
      })
    )

    return pokemons
  } catch (error) {
    console.error('Error cargando pokemons', error)
    return []
  }
}
