import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!email) return
    localStorage.setItem('user', email)
    navigate('/home')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #3b4cca 0%, #2a75bb 50%, #ffcb05 100%)'
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '45px 40px',
          borderRadius: '18px',
          width: '340px',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}
      >
        <h1
          style={{
            marginBottom: '10px',
            fontSize: '36px',
            fontWeight: '700',
            color: '#3b4cca',
            letterSpacing: '1px'
          }}
        >
          Pokédex
        </h1>

        <p
          style={{
            marginBottom: '30px',
            fontSize: '15px',
            color: '#666'
          }}
        >
          Explora y guarda tus Pokémones favoritos :)
        </p>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '16px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            marginBottom: '22px',
            outline: 'none'
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '16px',
            borderRadius: '10px',
            border: 'none',
            background: 'linear-gradient(135deg, #3b4cca, #2a75bb)',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  )
}
