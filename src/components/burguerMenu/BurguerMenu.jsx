import React, { useEffect, useState } from 'react';
import styles from './burguerMenu.module.css';

const BurguerMenu = ({ handleNavigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if(isOpen){
      setAnimation(true);
    }
  }, [isOpen])

  return (
    <div className={styles.menu}>
      <div className={styles.shadow}>
        <button className={styles.principalButton} onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className={styles.menuContent}>
        <button className={`${styles.closeButton} ${animation ? styles.anim : ''} `} onClick={() => setIsOpen(false)}>
          X
        </button>
          <a href="#landing" onClick={(event) => { handleNavigation(event, 'landing'); setIsOpen(false) }}>Inicio</a>
          <a href="#proyectos" onClick={(event) => { handleNavigation(event, 'proyectos'); setIsOpen(false) }}>Proyectos</a>
          <a href="#aboutMe" onClick={(event) => { handleNavigation(event, 'aboutMe'); setIsOpen(false) }}>Sobre Mí</a>
          <a href="#technologies" onClick={(event) => { handleNavigation(event, 'technologies'); setIsOpen(false) }}>Tecnologías</a>
          <a href="#contacto" onClick={(event) => { handleNavigation(event, 'contacto'); setIsOpen(false) }}>Contacto</a>
        </div>
      )}
    </div>
  );
};

export default BurguerMenu;
