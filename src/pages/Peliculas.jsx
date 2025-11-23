import React from 'react'
import { useShrekApi } from '../hooks/useShrekApi'
export default function Peliculas(){
  const { data, loading, error } = useShrekApi('/peliculas')
  if(loading) return <p>Cargando...</p>
  if(error) return <p>Error: {error.message}</p>
  return (
    <section>
      <h2>Películas</h2>
      <ul>{data?.map(p=>(
        <li key={p.id}><strong>{p.titulo}</strong> ({p.anio}) – {p.duracionMin} min</li>
      ))}</ul>
    </section>
  )
}