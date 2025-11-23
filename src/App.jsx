import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Landing from './pages/Landing.jsx'
import Peliculas from './pages/Peliculas.jsx'
import Personajes from './pages/Personajes.jsx'
import Escenas from './pages/Escenas.jsx'
import Productos from './pages/Productos.jsx'
import Foros from './pages/Foros.jsx'
import Login from './pages/Login.jsx'
import MiCuenta from './pages/MiCuenta.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App(){
  return (
    <>
      <NavBar />
      <div style={{padding:16}}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/escenas" element={<Escenas />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/foros" element={<Foros />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/mi-cuenta" element={<MiCuenta />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </>
  )
}