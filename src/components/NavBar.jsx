import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const classActiva = ({isActive})=> isActive ? 'activo' : ''

  return (
    <div className='container'>
      <div>Marvel</div>
      <div>
        <NavLink  className = {classActiva} to="/">Home</NavLink>
        <NavLink  className = {classActiva} to="personajes">Personajes</NavLink>
      </div>
    </div>
  )
}

export default NavBar
