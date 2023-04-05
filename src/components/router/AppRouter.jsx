import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Personajes from '../../pages/Personajes'
import Detalles from '../Detalles'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='personajes' element={<Personajes />} />
        <Route path='producto/:id' element={<Detalles />} />
      </Routes>
    </div>
  )
}

export default AppRouter
