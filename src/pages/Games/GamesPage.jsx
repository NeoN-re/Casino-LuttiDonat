import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Games from '../../components/Games/Games'

const GamesPage = () => {
  const { searchQuery } = useOutletContext()

  return (
    <>
      <h1 style={{ marginBottom: 20, color: 'var(--text-white)' }}>Все игры</h1>
      <Games searchQuery={searchQuery} />
    </>
  )
}

export default GamesPage