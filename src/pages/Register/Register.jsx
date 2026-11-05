import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Поле имени
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputStyle = {
    width: '100%', padding: 12, borderRadius: 8, background: 'var(--bg-dark)',
    color: 'var(--text-white)', border: '1px solid var(--border-subtle)',
    marginBottom: 12, outline: 'none', fontSize: 14,
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Передаем username прямо в метаданные при регистрации!
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username: username } // <--- Вот эта строчка нужна триггеру
      }
    });

    if (authError) {
      alert(authError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    alert('Регистрация успешна! Теперь вы можете войти.');
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ background: 'var(--bg-card)', padding: 40, borderRadius: 16, width: '100%', maxWidth: 360, border: '1px solid var(--border-subtle)' }}>
        <h2 style={{ marginBottom: 25, color: 'var(--text-white)', textAlign: 'center' }}>Регистрация</h2>

        <form onSubmit={handleRegister}>
          <input 
            type="text" placeholder="Имя пользователя" required style={inputStyle} 
            value={username} onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="email" placeholder="Email" required style={inputStyle} 
            value={email} onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" placeholder="Пароль" required style={inputStyle} 
            value={password} onChange={(e) => setPassword(e.target.value)} 
          />

          <button type="submit" disabled={loading} className="btn btn-register" style={{ width: '100%', marginTop: 10 }}>
            {loading ? 'Загрузка...' : 'Создать аккаунт'}
          </button>
        </form>

        <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-gray)', textAlign: 'center' }}>
          Уже есть аккаунт?{' '}
          <Link to="/login" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Войти</Link>
        </p>
        <p style={{ marginTop: 10, fontSize: 14, textAlign: 'center' }}>
          <Link to="/" style={{ color: 'var(--text-gray)', textDecoration: 'none' }}>← На главную</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;