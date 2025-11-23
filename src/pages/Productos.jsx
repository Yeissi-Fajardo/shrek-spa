import React, { useState } from 'react'
import { useShrekApi } from '../hooks/useShrekApi'
export default function Productos(){
  const [categoria, setCategoria] = useState('camisetas')
  const [precioMax, setPrecioMax] = useState(100000)
  const { data, loading, error } = useShrekApi(`/productos?categoria=${encodeURIComponent(categoria)}&precioMax=${precioMax}`)
  return (
    <section>
      <h2>Productos</h2>
      <div style={{display:'flex',gap:8,marginBottom:12}}>
        <label>Categoría: <input value={categoria} onChange={e=>setCategoria(e.target.value)} /></label>
        <label>Precio máx: <input type="number" value={precioMax} onChange={e=>setPrecioMax(e.target.value)} style={{width:120}} /></label>
      </div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>{data?.map(p=>(
        <li key={p.id}><strong>{p.nombre}</strong> — ${p.precio} [{p.categoria}]</li>
      ))}</ul>
    </section>
  )
}