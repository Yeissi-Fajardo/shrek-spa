import { useEffect, useState } from 'react'
const RAW_BASE = import.meta.env.VITE_API_BASE || 'https://cf74efe8-0a05-4593-a1a0-9fca81d25e2b.mock.pstmn.io'


// Normaliza: sin slash al final en BASE y con slash al inicio en path
const joinUrl = (base, path) => {
  const b = (base || '').replace(/\/+$/,'')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${b}${p}`
}

export function useShrekApi(path, { enabled = true } = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!enabled) return
    let cancelled = false
    ;(async () => {
      const url = joinUrl(RAW_BASE, path)
      try {
        setLoading(true); setError(null)
        console.log('[useShrekApi] BASE=', RAW_BASE, '→ URL=', url) // 👈 traza

        const res = await fetch(url)
        const ct = res.headers.get('content-type') || ''

        if (!res.ok) {
          // Intenta leer texto para depurar errores del mock
          const text = await res.text().catch(()=> '')
          throw new Error(`HTTP ${res.status}. Content-Type: ${ct}. URL: ${url}. Body: ${text.slice(0,120)}`)
        }

        if (!ct.includes('application/json')) {
          const text = await res.text()
          throw new Error(`Respuesta NO-JSON (${ct}). URL: ${url}. Inicio: ${text.slice(0,80)}`)
        }

        const json = await res.json()
        if (!cancelled) setData(json)
      } catch (e) {
        if (!cancelled) setError(e)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [path])

  return { data, loading, error }
}
