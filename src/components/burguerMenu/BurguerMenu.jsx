import React, { useEffect, useState } from 'react';
import styles from './burguerMenu.module.css';

const BurguerMenu = ({ handleNavigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [landing, setLanding] = useState(false);
  const [proyectos, setProyectos] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);
  const [tech, setTech] = useState(false);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimation(true);
      setLanding(true);
      setProyectos(true);
      setAboutMe(true);
      setTech(true);
      setContact(true);
    }
  }, [isOpen])

  return (
    <div className={` font-sansita ${styles.menu}`}>
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
          <a href="#landing" className={`${landing ? styles.landing : ''}`} onClick={(event) => { handleNavigation(event, 'landing'); setIsOpen(false) }}>Inicio</a>
          <a href="#proyectos" className={`${proyectos ? styles.proyectos : ''}`} onClick={(event) => { handleNavigation(event, 'proyectos'); setIsOpen(false) }}>Proyectos</a>
          <a href="#aboutMe" className={`${aboutMe ? styles.aboutMe : ''}`} onClick={(event) => { handleNavigation(event, 'aboutMe'); setIsOpen(false) }}>Sobre Mí</a>
          <a href="#technologies" className={`${tech ? styles.tech : ''}`} onClick={(event) => { handleNavigation(event, 'technologies'); setIsOpen(false) }}>Tecnologías</a>
          <a href="#contacto" className={`${contact ? styles.contact : ''}`} onClick={(event) => { handleNavigation(event, 'contacto'); setIsOpen(false) }}>Contacto</a>
        </div>
      )}
    </div>
  );
};

export default BurguerMenu;
