import React from 'react'
import { data } from '../data.jsx'

const Header = () => {
  const { firstname, lastname } = data
  const fullName = `${firstname} ${lastname}`

  return (
    <section className="header-section">
    <header className="header">
      <h1 className="header-h1">
          {fullName.split('').map((char, index) => (
            <span key={index} className="char">{char}</span>
        ))}
      </h1>
    </header>
    </section>
  )
}

export default Header