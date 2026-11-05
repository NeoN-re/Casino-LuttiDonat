import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (data) setProfile(data);
    if (error) console.error("Ошибка загрузки профиля:", error);
  };

  useEffect(() => {
    // Проверяем сессию при загрузке страницы
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      setLoading(false);
    });

    // Слушаем изменения (вход/выход)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      else setProfile(null);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  const logout = () => supabase.auth.signOut();

  // НОВАЯ ФУНКЦИЯ: Обновление баланса в базе данных и в интерфейсе
  const updateBalance = async (newBalance) => {
    if (!user) return;
    
    // Отправляем новый баланс в Supabase
    const { error } = await supabase
      .from('profiles')
      .update({ balance: newBalance })
      .eq('id', user.id);

    if (error) {
      console.error("Ошибка обновления баланса:", error);
      return;
    }

    // Обновляем локальный стейт, чтобы шапка сайта сразу перерисовалась
    setProfile((prev) => ({ ...prev, balance: newBalance }));
  };

  return (
    // Добавили updateBalance в value, чтобы игра могла его использовать
    <AuthContext.Provider value={{ user, profile, setProfile, loading, logout, updateBalance }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);