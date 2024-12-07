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
  const [show, setShow] = useState(false);

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
          <>
            <nav id='navBar' className={`relative -mb-10 z-20 top-5 w-full text-white flex justify-center font-sans text-xl shadow`}>
              <div className='flex space-x-10 p-4'>
                <a href="#landing" onClick={(event) => handleNavigation(event, 'landing')} className='inicio'>Inicio</a>
                <a href="#proyectos" onClick={(event) => handleNavigation(event, 'proyectos')} className='proyectos'>Proyectos</a>
                <a href="#aboutMe" onClick={(event) => handleNavigation(event, 'aboutMe')} className='about'>Sobre Mí</a>
                <a href="#technologies" onClick={(event) => handleNavigation(event, 'technologies')} className='tech'>Tecnologías</a>
                <a href="#contacto" onClick={(event) => handleNavigation(event, 'contacto')} className='contact'>Contacto</a>
              </div>
            </nav>
            <div id='burguerMenu'>
              <BurguerMenu handleNavigation={handleNavigation} />
            </div>
          </>
        <Landing />
            <TimeLine />
            <AboutMe />
            <Technologies />
            <Footer />
        <div className={`upButton ${show ? 'show' : 'hide'}`}>
          <i onClick={scrollUp}><ExpandLessIcon /></i>
        </div>
      </div>
    </>
  );
}

export default App;