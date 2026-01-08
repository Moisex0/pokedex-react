import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFavorites, removeFavorite } from '../services/favorites'

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  if (favorites.length === 0) {
    return (
      <div
        style={{
          minHeight: '100vh',
          padding: '30px',
          background: 'linear-gradient(135deg, #ffcb05 0%, #3b4cca 100%)',
          color: '#fff'
        }}
      >
        <Link
          to="/home"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontWeight: '600'
          }}
        >
          ⬅ Volver al Home
        </Link>

        <p style={{ marginTop: '30px', fontSize: '18px' }}>
          No tienes favoritos aún ⭐
        </p>
      </div>
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
          ⭐ Favoritos
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
        {favorites.map(p => (
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
                removeFavorite(p.name)
                setFavorites(getFavorites())
              }}
              style={{
                marginTop: '10px',
                width: '100%',
                padding: '8px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                background: '#e74c3c',
                color: '#fff'
              }}
            >
              ❌ Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
