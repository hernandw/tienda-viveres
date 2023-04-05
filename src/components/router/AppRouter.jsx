import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Personajes from '../../pages/Personajes'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='personajes' element={<Personajes />} />
      </Routes>
    </div>
  )
}

export default AppRouter
