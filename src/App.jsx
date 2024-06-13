import { useEffect, useState } from 'react';
import './App.css';
import Landing from './components/landing/Landing';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TimeLine from './components/timeLine/TimeLine';
import AboutMe from './components/aboutMe/AboutMe';
import Technologies from './components/technologies/Technologies';
import Footer from './components/footer/Footer';
import BurguerMenu from './components/burguerMenu/BurguerMenu';

function App() {
  const [time, setTime] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 5500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='flex flex-col items-center min-h-screen w-screen overflow-y-auto overflow-x-hidden'>
        {time && (
          <>
            <nav id='navBar' className={`relative -mb-10 z-20 top-5 w-full text-white flex justify-center font-sans text-xl shadow`}>
              <div className='flex space-x-10 p-4'>
                <a href="#landing" onClick={(event) => handleNavigation(event, 'landing')} className={` ${time ? 'inicio' : ''}`}>Inicio</a>
                <a href="#proyectos" onClick={(event) => handleNavigation(event, 'proyectos')} className={` ${time ? 'proyectos' : ''}`}>Proyectos</a>
                <a href="#aboutMe" onClick={(event) => handleNavigation(event, 'aboutMe')} className={` ${time ? 'about' : ''}`}>Sobre Mí</a>
                <a href="#technologies" onClick={(event) => handleNavigation(event, 'technologies')} className={` ${time ? 'tech' : ''}`}>Tecnologías</a>
                <a href="#contacto" onClick={(event) => handleNavigation(event, 'contacto')} className={` ${time ? 'contact' : ''}`}>Contacto</a>
              </div>
            </nav>
            <div id='burguerMenu'>
              <BurguerMenu handleNavigation={handleNavigation} />
            </div>
          </>
        )}
        <Landing />
        {time && (
          <>
            <TimeLine />
            <AboutMe />
            <Technologies />
            <Footer />
          </>
        )}
        <div className={`upButton ${show ? 'show' : 'hide'}`}>
          <i onClick={scrollUp}><ExpandLessIcon /></i>
        </div>
      </div>
    </>
  );
}

export default App;