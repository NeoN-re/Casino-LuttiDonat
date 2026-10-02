import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import './MainLayout.css'

const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="app-container">
      <main className="main-content">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <Outlet context={{ searchQuery }} />
      </main>
    </div>
  )
}

export default MainLayout