import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchGames } from '../../api/gamesApi'
import { useAuth } from '../../context/AuthContext'
import Blackjack from '../../pages/Blackjack/Blackjack'
import Mines from '../../pages/Mines/Mines'

const GamePlayer = () => {
  const { id } = useParams()
  const { user, loading: authLoading } = useAuth()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGames().then((data) => {
      const found = data.find((g) => String(g.id) === String(id))
      setGame(found || null)
      setLoading(false)
    })
  }, [id])

  if (loading || authLoading) {
    return <div style={{ color: 'var(--text-white)', padding: 40 }}>Загрузка...</div>
  }

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
      <div style={{ color: 'var(--text-white)' }}>
        <Link to="/" style={{ color: 'var(--text-gray)', textDecoration: 'none', fontSize: 14, display: 'inline-block', marginBottom: 20 }}>
          Назад к играм
        </Link>
        
        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '60px 20px', 
          borderRadius: 16, 
          border: '1px solid var(--border-subtle)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{ fontSize: 32, color: 'var(--accent-primary)', marginBottom: 15 }}>Требуется регистрация</h2>
          <p style={{ color: 'var(--text-gray)', marginBottom: 30, maxWidth: 400, fontSize: 16 }}>
            Чтобы играть, вам необходимо войти в аккаунт или зарегистрироваться.
          </p>
          <div style={{ display: 'flex', gap: 15 }}>
            <Link to="/register" className="btn btn-register" style={{ textDecoration: 'none', padding: '12px 30px', fontSize: 16 }}>
              Зарегистрироваться
            </Link>
            <Link to="/login" className="btn btn-login" style={{ textDecoration: 'none', padding: '12px 30px', fontSize: 16 }}>
              Войти
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ color: 'var(--text-white)' }}>
      <Link to="/" style={{ color: 'var(--text-gray)', textDecoration: 'none', fontSize: 14, display: 'inline-block', marginBottom: 20 }}>
        Назад к играм
      </Link>

      <div style={{ width: '100%', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
        {game.isLocal ? (
          <div style={{ padding: 20 }}>
             {game.component === 'Mines' && <Mines />}
             {game.component === 'Blackjack' && <Blackjack />}
             {game.component === 'FallingPickaxe' && <FallingPickaxe />}
          </div>
        ) : (
          <div style={{ width: '100%', aspectRatio: '16 / 9', background: '#000' }}>
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
    </div>
  )
}

export default GamePlayer
