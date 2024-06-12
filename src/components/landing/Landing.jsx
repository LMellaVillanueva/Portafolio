import { useState } from 'react';
import styles from './landing.module.css';
import { useEffect } from 'react';
import Header from '../header/Header';

export const Landing = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeInDos, setFadeInDos] = useState(false);
    const [fadeOutDos, setFadeOutDos] = useState(false);
    const [bg, setBg] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true)
        }, 1000);

        setFadeIn(false)

        if (!fadeIn) {
            setTimeout(() => {
                setFadeOut(true)
            }, 3500);
        }

        setFadeOut(false)

        if (!fadeOut) {
            setTimeout(() => {
                setFadeInDos(true);
            }, 4500);
        }

        setFadeInDos(false);

        if (!fadeInDos) {
            setTimeout(() => {
                setFadeOutDos(true);
            }, 7500);
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setBg(true)
        }, 8500);
    }, [])

    return (
        <>
            <div id='landing' className='relative h-screen w-full flex items-center justify-center'>
                {!bg ? (
                    <div className='absolute inset-0 bg-black'></div>
                ) : (
                    <div className={`absolute inset-0 z-10 ${bg ? styles.bg : ''}`}><Header />
                    </div>
                )}
                <div className={`relative inset-0 ${styles.container}`}>
                    <h1 className={`${styles.text} ${fadeIn ? styles.fadeIn : ''} ${fadeOut ? styles.fadeOut : ''} text-4xl text-center text-white p-4 font-sans`}>Te damos la Bienvenida</h1>
                    <h1 className={`${styles.text} ${fadeInDos ? styles.fadeInDos : ''} ${fadeOutDos ? styles.fadeOutDos : ''} text-4xl text-start text-white p-4 font-sans`}>A una experiencia única e inigualable...</h1>
                </div>
            </div>
        </>
    )
}

export default Landing;