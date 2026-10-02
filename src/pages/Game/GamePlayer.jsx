import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchGames } from '../../api/gamesApi'

const GamePlayer = () => {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGames().then((data) => {
      const found = data.find((g) => String(g.id) === String(id))
      setGame(found || null)
      setLoading(false)
    })
  }, [id])

  if (loading) return <div style={{ color: 'var(--text-white)', padding: 40 }}>Загрузка...</div>

  if (!game) {
    return (
      <div style={{ color: 'var(--text-white)', padding: 40, textAlign: 'center' }}>
        <h1>Игра не найдена</h1>
        <Link to="/" className="btn btn-register" style={{ marginTop: 20, textDecoration: 'none' }}>
          На главную
        </Link>
      </div>
    )
  }

  return (
    <div style={{ color: 'var(--text-white)' }}>
      <Link
        to="/"
        style={{ color: 'var(--text-gray)', textDecoration: 'none', fontSize: 14, display: 'inline-block', marginBottom: 20 }}
      >
        Назад к играм
      </Link>

      <div style={{ width: '100%', aspectRatio: '16 / 9', background: '#000', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
        <iframe
          src={game.demo}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen"
          title={game.title || 'Game'}
        />
      </div>
    </div>
  )
}

export default GamePlayer