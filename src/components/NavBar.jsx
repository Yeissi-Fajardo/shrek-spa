import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function NavBar(){
  const { isAuthenticated, logout } = useAuth()
  return (
    <nav style={{display:'flex',gap:12,padding:12,background:'#eef'}}>
      <Link to="/">Landing</Link>
      <Link to="/peliculas">Películas</Link>
      <Link to="/personajes">Personajes</Link>
      <Link to="/escenas">Escenas</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/foros">Foros</Link>
      <Link to="/mi-cuenta">Mi cuenta (protegida)</Link>
      <span style={{marginLeft:'auto'}}>
        {isAuthenticated ? <button onClick={logout}>Salir</button> : <Link to="/login">Login</Link>}
      </span>
    </nav>
  )
}