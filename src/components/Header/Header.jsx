import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImg from "../../assets/Logo1.png";
import { useAuth } from '../../context/AuthContext'; // <-- Импорт контекста

const Header = ({ searchQuery = '', onSearchChange, theme, onToggleTheme }) => {
  const { user, profile, logout } = useAuth(); // <-- Получаем данные

  return (
    <header className="header">
      <Link to="/" className="logo" id="logo">
          <img src={logoImg} alt="LuttiDonat" id="logo"/>
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

        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>
              {profile?.username || 'Игрок'}
            </span>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', background: 'rgba(255, 183, 3, 0.1)', padding: '5px 10px', borderRadius: '8px' }}>
              {profile?.balance || 0} ₽
            </span>
            <button onClick={logout} className="btn btn-login">
              Выйти
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-login" style={{ textDecoration: 'none' }}>
              Вход
            </Link>
            <Link to="/register" className="btn btn-register" style={{ textDecoration: 'none' }}>
              Регистрация
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;