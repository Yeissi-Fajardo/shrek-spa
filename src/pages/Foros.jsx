import React, { useState } from 'react'
import { useShrekApi } from '../hooks/useShrekApi'
export default function Foros(){
  const { data, loading, error } = useShrekApi('/foros/123/respuestas?orden=recientes')
  const [texto, setTexto] = useState('¡Me encantó el humor de Burro!')
  const API_BASE = import.meta.env.VITE_API_BASE
  const url = `${API_BASE}/foros/123/respuestas`

  async function crearRespuesta(){
    const res = await fetch(`${API_BASE}/foros/123/respuestas`, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ usuario:'carlos', texto })
    })
    alert(`POST status: ${res.status}`)
  }

  return (
    <section>
      <h2>Foros</h2>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>{data?.map(m=>(
        <li key={m.id}><strong>{m.usuario}:</strong> {m.texto} <em>({m.fecha})</em></li>
      ))}</ul>
      <div style={{marginTop:16}}>
        <input value={texto} onChange={e=>setTexto(e.target.value)} style={{width:'60%'}} />
        <button onClick={crearRespuesta} style={{marginLeft:8}}>Publicar (mock)</button>
      </div>
    </section>
  )
}
