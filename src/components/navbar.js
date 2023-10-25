import React from 'react'

const navbar = () => {
  return (
    <div className = "logo-image">
      <img
        src={require('../media/logo.jpeg')}
        alt="Logo"
        style={{ width: '100px', height: '100px' }}
      />

      <div className='tag'>
        <li>Coming Soon</li>
      </div>
    </div>
  )
}

export default navbar
