import React, { useState } from 'react'
import { useShrekApi } from '../hooks/useShrekApi'
export default function Personajes(){
  const [q, setQ] = useState('')
  const path = q ? `/personajes?nombre=${encodeURIComponent(q)}` : '/personajes'
  const { data, loading, error } = useShrekApi(path)
  return (
    <section>
      <h2>Personajes</h2>
      <input placeholder="Buscar por nombre" value={q} onChange={e=>setQ(e.target.value)} />
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>{data?.map(p=> (<li key={p.id}>{p.nombre} – {p.especie}</li>))}</ul>
    </section>
  )
}