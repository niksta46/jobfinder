const BASE_URL = import.meta.env.VITE_REMOTIVE_API_URL || 'https://remotive.com/api'

export async function apiFetch(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`
  const hasBody = options.method && options.method !== 'GET' && options.method !== 'HEAD'
  const response = await fetch(url, {
    headers: {
      ...(hasBody ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}
