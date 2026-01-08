import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pokemon/:name" element={<Detail />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}
