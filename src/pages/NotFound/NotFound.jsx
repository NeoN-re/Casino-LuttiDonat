import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: 72, color: 'var(--accent-primary)', marginBottom: 10 }}>404</h1>
      <p style={{ fontSize: 18, marginBottom: 25, color: 'var(--text-white)' }}>
        Страница не найдена
      </p>
      <Link
        to="/"
        className="btn btn-register"
        style={{ textDecoration: 'none', display: 'inline-block' }}
      >
        На главную
      </Link>
    </div>
  );
};

export default NotFound;