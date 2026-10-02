import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const inputStyle = {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    background: 'var(--bg-dark)',
    color: 'var(--text-white)',
    border: '1px solid var(--border-subtle)',
    marginBottom: 12,
    outline: 'none',
    fontSize: 14,
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: 20,
    }}>
      <div style={{
        background: 'var(--bg-card)',
        padding: 40,
        borderRadius: 16,
        width: '100%',
        maxWidth: 360,
        border: '1px solid var(--border-subtle)',
      }}>
        <h2 style={{ marginBottom: 25, color: 'var(--text-white)', textAlign: 'center' }}>
          Вход в LuttiDonat
        </h2>

        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Пароль" style={inputStyle} />

        <button className="btn btn-register" style={{ width: '100%', marginTop: 10 }}>
          Войти
        </button>

        <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-gray)', textAlign: 'center' }}>
          Нет аккаунта?{' '}
          <Link to="/register" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
            Регистрация
          </Link>
        </p>

        <p style={{ marginTop: 10, fontSize: 14, textAlign: 'center' }}>
          <Link to="/" style={{ color: 'var(--text-gray)', textDecoration: 'none' }}>
            ← На главную
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;