import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import GamesPage from './pages/Games/GamesPage'
import GamePlayer from './pages/Game/GamePlayer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : 'theme-dark'
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <Routes>
      <Route element={<MainLayout theme={theme} onToggleTheme={toggleTheme} />}>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/game/:id" element={<GamePlayer />} />
        <Route path="/bonuses" element={<div style={{ color: 'var(--text-white)', padding: 40, textAlign: 'center' }}><h1>Бонусы (скоро)</h1></div>} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App