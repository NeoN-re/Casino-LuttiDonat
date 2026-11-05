import React from 'react'
import './Banners.css'
import { Link } from 'react-router-dom';

const Banners = () => {
  
  return (
    <section className="banners-grid">
      <div className="banner banner-main">
        <h2>При регистрации бонус +10000 рублей</h2>
        <>
        <Link to="/register" className="banner-btn" style={{ textDecoration: 'none' }}>
            Подробнее
        </Link>
        </>
      </div>
    </section>
  )
}

export default Banners