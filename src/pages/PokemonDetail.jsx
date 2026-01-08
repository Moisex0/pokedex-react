import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function PokemonDetail() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => setPokemon(res.data))
  }, [name])

  if (!pokemon) return <p>Cargando...</p>

  return (
    <div style={{ padding: '20px' }}>
      <h2>{pokemon.name}</h2>

      <img src={pokemon.sprites.front_default} />

      <h3>Estadísticas</h3>
      {pokemon.stats.map(s => (
        <p key={s.stat.name}>
          {s.stat.name}: {s.base_stat}
        </p>
      ))}
    </div>
  )
}
