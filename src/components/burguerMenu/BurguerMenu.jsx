import React, { useState } from 'react';
import styles from './burguerMenu.module.css';

const BurguerMenu = ({ handleNavigation }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <button onClick={() => setIsOpen(true)}>
        ☰
      </button>
      {isOpen && (
        <div className={styles.menuContent}>
            <button onClick={() => setIsOpen(false)}>X</button>
          <a href="#landing" onClick={(event) => handleNavigation(event, 'landing')}>Inicio</a>
          <a href="#proyectos" onClick={(event) => handleNavigation(event, 'proyectos')}>Proyectos</a>
          <a href="#aboutMe" onClick={(event) => handleNavigation(event, 'aboutMe')}>Sobre Mí</a>
          <a href="#technologies" onClick={(event) => handleNavigation(event, 'technologies')}>Tecnologías</a>
          <a href="#contacto" onClick={(event) => handleNavigation(event, 'contacto')}>Contacto</a>
        </div>
      )}
    </div>
  );
};

export default BurguerMenu;
