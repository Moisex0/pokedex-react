import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Detail() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => setPokemon(res.data))
  }, [name])

  if (!pokemon) {
    return (
      <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '18px' }}>
        Cargando Pokémon...
      </p>
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '30px',
        background: 'linear-gradient(135deg, #ffcb05 0%, #3b4cca 100%)'
      }}
    >
      {/* HEADER */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto 25px auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '32px',
            textTransform: 'capitalize'
          }}
        >
          {pokemon.name}
        </h1>

        <Link
          to="/home"
          style={{
            textDecoration: 'none',
            backgroundColor: '#ffffff',
            color: '#3b4cca',
            padding: '10px 16px',
            borderRadius: '10px',
            fontWeight: '700'
          }}
        >
          ⬅ Home
        </Link>
      </div>

      {/* CARD */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}
      >
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          style={{ width: '260px', marginBottom: '20px' }}
        />

        {/* TIPOS */}
        <h3 style={{ marginBottom: '10px' }}>Tipos</h3>
        <div style={{ marginBottom: '25px' }}>
          {pokemon.types.map(t => (
            <span
              key={t.type.name}
              style={{
                display: 'inline-block',
                margin: '0 6px',
                padding: '6px 12px',
                borderRadius: '20px',
                backgroundColor: '#3b4cca',
                color: '#fff',
                fontSize: '14px',
                textTransform: 'capitalize'
              }}
            >
              {t.type.name}
            </span>
          ))}
        </div>

        {/* ESTADÍSTICAS */}
        <h3 style={{ marginBottom: '15px' }}>Estadísticas</h3>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          {pokemon.stats.map(s => (
            <div
              key={s.stat.name}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
                fontSize: '15px'
              }}
            >
              <span style={{ textTransform: 'capitalize' }}>
                {s.stat.name}
              </span>
              <strong>{s.base_stat}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
