import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ searchQuery = '', onSearchChange, theme, onToggleTheme }) => {
  return (
    <header className="header">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        LuttiDonat
      </Link>

      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Поиск игр..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button className="search-clear" onClick={() => onSearchChange('')}>
            x
          </button>
        )}
      </div>

      <div className="auth-buttons">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Переключить тему"
          title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>

        <Link to="/login" className="btn btn-login" style={{ textDecoration: 'none' }}>
          Вход
        </Link>
        <Link to="/register" className="btn btn-register" style={{ textDecoration: 'none' }}>
          Регистрация
        </Link>
      </div>
    </header>
  )
}

export default Header