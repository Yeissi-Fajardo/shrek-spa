import React, { useState } from 'react'
import { useShrekApi } from '../hooks/useShrekApi'
export default function Escenas(){
  const [peliculaId, setPeliculaId] = useState(1)
  const [tema, setTema] = useState('amistad')
  const { data, loading, error } = useShrekApi(`/escenas?peliculaId=${peliculaId}&tema=${encodeURIComponent(tema)}`)
  return (
    <section>
      <h2>Escenas</h2>
      <div style={{display:'flex',gap:8,marginBottom:12}}>
        <label>PelículaId: <input type="number" value={peliculaId} onChange={e=>setPeliculaId(e.target.value)} style={{width:80}}/></label>
        <label>Tema: <input value={tema} onChange={e=>setTema(e.target.value)} /></label>
      </div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>{data?.map(s=>(
        <li key={s.id}>#{s.id} • min {s.minuto} — <strong>{s.titulo}</strong> [{s.tema}]</li>
      ))}</ul>
    </section>
  )
}