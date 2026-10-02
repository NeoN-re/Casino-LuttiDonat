import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Banners from '../../components/Banners/Banners'
import Games from '../../components/Games/Games'

const Home = () => {
  const { searchQuery } = useOutletContext()

  return (
    <>
      {!searchQuery && <Banners />}
      <Games searchQuery={searchQuery} />
    </>
  )
}

export default Home