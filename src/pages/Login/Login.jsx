import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputStyle = {
    width: '100%', padding: 12, borderRadius: 8, background: 'var(--bg-dark)',
    color: 'var(--text-white)', border: '1px solid var(--border-subtle)',
    marginBottom: 12, outline: 'none', fontSize: 14,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      navigate('/'); // Перенаправляем на главную
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ background: 'var(--bg-card)', padding: 40, borderRadius: 16, width: '100%', maxWidth: 360, border: '1px solid var(--border-subtle)' }}>
        <h2 style={{ marginBottom: 25, color: 'var(--text-white)', textAlign: 'center' }}>Вход в LuttiDonat</h2>

        <form onSubmit={handleLogin}>
          <input 
            type="email" placeholder="Email" required style={inputStyle} 
            value={email} onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" placeholder="Пароль" required style={inputStyle} 
            value={password} onChange={(e) => setPassword(e.target.value)} 
          />

          <button type="submit" disabled={loading} className="btn btn-register" style={{ width: '100%', marginTop: 10 }}>
            {loading ? 'Загрузка...' : 'Войти'}
          </button>
        </form>

        <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-gray)', textAlign: 'center' }}>
          Нет аккаунта?{' '}
          <Link to="/register" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Регистрация</Link>
        </p>
        <p style={{ marginTop: 10, fontSize: 14, textAlign: 'center' }}>
          <Link to="/" style={{ color: 'var(--text-gray)', textDecoration: 'none' }}>← На главную</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;