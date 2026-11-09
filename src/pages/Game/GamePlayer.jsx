import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchGames } from '../../api/gamesApi'
import { useAuth } from '../../context/AuthContext'
import Blackjack from '../../components/Blackjack/Blackjack'
import Mines from '../../components/Mines/Mines'
import FallingPickaxe from '../../components/FallingPickaxe/FallingPickaxe'

const GamePlayer = () => {
  const { id } = useParams()
  const { user, profile, loading: authLoading } = useAuth()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetchGames().then((data) => {
      if (!cancelled) {
        const found = data.find((g) => String(g.id) === String(id))
        setGame(found || null)
        setLoading(false)
      }
    })
    return () => { cancelled = true }
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

  const isLoggedIn = !!user

  return (
    <div style={{ color: 'var(--text-white)' }}>
      <Link
        to="/"
        style={{ color: 'var(--text-gray)', textDecoration: 'none', fontSize: 14, display: 'inline-block', marginBottom: 20 }}
      >
        Назад к играм
      </Link>

      <div style={{ position: 'relative', width: '100%', background: '#000', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border-subtle)', minHeight: '400px' }}>
        
        {!isLoggedIn && (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(26, 20, 16, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
            textAlign: 'center',
            padding: 20
          }}>
            <h2 style={{ fontSize: 32, color: 'var(--accent-primary)', marginBottom: 15 }}>Требуется регистрация</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: 30, maxWidth: 400, fontSize: 16 }}>
              Чтобы играть в "{game.title}", пожалуйста, войдите в аккаунт или зарегистрируйтесь.
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
        )}

        <div style={{ 
          opacity: isLoggedIn ? 1 : 0.2, 
          pointerEvents: isLoggedIn ? 'auto' : 'none',
          width: '100%',
          height: game.isLocal ? 'auto' : '100%',
          minHeight: game.isLocal ? 'auto' : '500px'
        }}>
          {game.isLocal ? (
            <div style={{ padding: 20 }}>
               {game.component === 'Mines' && <Mines />}
               {game.component === 'Blackjack' && <Blackjack />}
               {game.component === 'FallingPickaxe' && <FallingPickaxe />}
            </div>
          ) : (
            <iframe
              src={game.demo}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen"
              title={game.title || 'Game'}
            />
          )}
        </div>

      </div>
    </div>
  )
}

export default GamePlayer
