import React from 'react'
import { useAuth } from '../context/AuthContext.jsx'
export default function MiCuenta(){
  const { user } = useAuth()
  return (
    <section>
      <h2>Mi cuenta (ruta protegida)</h2>
      <p>Bienvenido, {user?.email}.</p>
    </section>
  )
}
