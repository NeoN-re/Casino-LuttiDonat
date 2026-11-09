import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchGames } from '../../api/gamesApi'
import { useAuth } from '../../context/AuthContext'
import Blackjack from '../../components/Blackjack/Blackjack'
import Mines from '../../components/Mines/Mines'

const GamePlayer = () => {
  const { id } = useParams()
  const { user } = useAuth()
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

  if (!user) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '60vh', 
        color: 'var(--text-white)',
        textAlign: 'center',
        background: 'var(--bg-card)',
        borderRadius: 16,
        padding: 40,
        border: '1px solid var(--border-subtle)',
        marginTop: 20
      }}>
        <h2 style={{ fontSize: 24, marginBottom: 15 }}>Требуется регистрация</h2>
        <p style={{ color: 'var(--text-gray)', marginBottom: 30, maxWidth: 400 }}>
          Чтобы играть в "{game.title}", вам необходимо создать аккаунт или войти в существующий.
        </p>
        <div style={{ display: 'flex', gap: 15 }}>
          <Link to="/register" className="btn btn-register" style={{ textDecoration: 'none', padding: '12px 24px', fontSize: '16px' }}>
            Зарегистрироваться
          </Link>
          <Link to="/login" className="btn btn-login" style={{ textDecoration: 'none', padding: '12px 24px', fontSize: '16px' }}>
            Войти
          </Link>
        </div>
        <Link to="/" style={{ color: 'var(--text-gray)', textDecoration: 'none', fontSize: 14, marginTop: 30 }}>
          ← Вернуться к списку игр
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

      {game.isLocal ? (
        <div style={{ marginTop: 20 }}>
           {game.component === 'Mines' && <Mines />}
           {game.component === 'Blackjack' && <Blackjack />}
           {game.component === 'FallingPickaxe' && <FallingPickaxe />}
        </div>
      ) : (
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
      )}
    </div>
  )
}

export default GamePlayer
