import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchGames } from '../../api/gamesApi'
import './Games.css'

const Games = ({ searchQuery = '' }) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    fetchGames().then((data) => {
      if (!cancelled) {
        setGames(data)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  const filteredGames = games.filter((game) => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return true
    return game.img.toLowerCase().includes(q)
  })

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">Популярные</h2>
        <Link
          to="/games"
          className="btn btn-login"
          style={{ fontSize: '12px', padding: '5px 10px', textDecoration: 'none' }}
        >
          Все игры &gt;
        </Link>
      </div>

      <div className="games-grid">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="game-card skeleton">
                <div className="game-image skeleton-box" />
              </div>
            ))
          : filteredGames.map((game) => (
              <Link key={game.id} to={`/game/${game.id}`} className="game-card">
                <div className="game-image">
                  <img
                    src={game.img}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://picsum.photos/seed/' + game.id + '/240/320'
                    }}
                  />
                </div>
              </Link>
            ))}
      </div>
    </section>
  )
}

export default Games