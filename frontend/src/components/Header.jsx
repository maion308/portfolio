import React from 'react';
import { data } from '../data.jsx';
import '../name.style.css';

const Header = () => {
  const { firstname, lastname } = data;
  const fullName = `${firstname} ${lastname}`;

  return (
    <section className="header-section">
      <header className="header">
        <h1 className="header-h1">
          {fullName.split('').map((char, index) => (
            <span key={`${char}-${index}`} className="char shadow-3d-text" style={{ '--char-index': index + 1 }}>{char}</span>
          ))}
        </h1>
      </header>
    </section>
  );
}

export default Header;
