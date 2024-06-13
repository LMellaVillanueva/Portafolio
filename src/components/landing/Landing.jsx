import { useState } from 'react';
import styles from './landing.module.css';
import { useEffect } from 'react';
import Header from '../header/Header';

export const Landing = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
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
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setBg(true)
        }, 4500);
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
                    <h1 className={`${styles.text} ${fadeIn ? styles.fadeIn : ''} ${fadeOut ? styles.fadeOut : ''} text-4xl text-center text-white p-4 font-sans`}>¡Te doy la bienvenida!</h1>
                </div>
            </div>
        </>
    )
}

export default Landing;