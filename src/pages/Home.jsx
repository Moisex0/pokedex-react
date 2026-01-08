import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPokemons } from '../services/pokeapi'
import { addFavorite, removeFavorite, isFavorite } from '../services/favorites'

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [, forceUpdate] = useState(false)

  useEffect(() => {
    getPokemons().then(data => {
      setPokemons(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
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
          maxWidth: '1200px',
          margin: '0 auto 25px auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h1 style={{ color: '#fff', fontSize: '32px' }}>
          Pokédex
        </h1>

        <Link
          to="/favorites"
          style={{
            textDecoration: 'none',
            backgroundColor: '#ffffff',
            color: '#3b4cca',
            padding: '10px 16px',
            borderRadius: '10px',
            fontWeight: '700'
          }}
        >
          ⭐ Favoritos
        </Link>
      </div>

      {/* GRID */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '20px'
        }}
      >
        {pokemons.map(p => {
          const fav = isFavorite(p.name)

          return (
            <div
              key={p.name}
              style={{
                backgroundColor: '#fff',
                borderRadius: '18px',
                padding: '15px',
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              }}
            >
              <Link
                to={`/pokemon/${p.name}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <img
                  src={p.sprites.front_default}
                  alt={p.name}
                  style={{ width: '110px' }}
                />
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                  }}
                >
                  {p.name}
                </p>
              </Link>

              <button
                onClick={() => {
                  fav ? removeFavorite(p.name) : addFavorite(p)
                  forceUpdate(v => !v)
                }}
                style={{
                  marginTop: '10px',
                  width: '100%',
                  padding: '8px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  background: fav
                    ? '#e74c3c'
                    : 'linear-gradient(135deg, #3b4cca, #2a75bb)',
                  color: '#fff'
                }}
              >
                {fav ? '❌ Quitar' : '⭐ Favorito'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
