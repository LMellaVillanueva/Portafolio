import selfie from '../../assets/selfie.png';
import styles from './header.module.css';
import gh from '../../assets/gh.png';
import linkedIN from '../../assets/linkedIN.png';
import wsp from '../../assets/wsp.png';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useEffect, useState } from 'react';

export const Header = () => {
const [anim, setAnim] = useState(false);

    useEffect(() => {
        setAnim(true);
    }, [])

    return (
        <>
            <div className={`flex flex-col lg:flex-row items-center lg:justify-center gap-7 lg:gap-4 h-fit lg:h-2/4 w-screen mb-8 lg:mb-0 mt-20 lg:mt-44 bg-gradient-to-b from-black via-purple-950 ${styles.allContainer}`}>
                <div className={`z-10 flex flex-col lg:flex-row p-3 lg:p-8 justify-center items-center lg:gap-20 w-10/12 lg:w-7/12 border rounded-sm border-purple-500 font-sans ${styles.shadowContainer} ${anim ? styles.anim : ''} ${anim ? styles.border : ''}`}>
                    <div className={`flex flex-col lg:text-start ${styles.text}`}>
                        <h2 className={`lg:text-xl text-white ${styles.texto}`}>Hola! Soy</h2>
                        <h1 className={`mb-3 mt-3 text-3xl text-white ${styles.texto}`}>Lucas Mella,</h1>
                        <p className={`lg:text-xl text-white ${styles.texto}`}>un FullStack Web Developer lleno de pasión por la buena organización, el perfeccionismo y en adquirir buenas prácticas.</p>
                    </div>
                    <img src={selfie} alt="Retrato" className={`w-44 lg:w-56`} />
                </div>
                <div className={`flex lg:flex-col gap-3 w-fit ${styles.logos} ${anim ? styles.anim : ''}`}>
                    <a className={styles.logos} href="https://wa.me/981314078" target='_blank'>
                        <img src={wsp} alt="Wsp" className='w-10 lg:w-11' />
                    </a>
                    <a className={styles.logos} href="https://www.linkedin.com/in/lucas-mella-947989231/" target='_blank'>
                        <img src={linkedIN} alt="LinkedIn" className='w-10 lg:w-11' />
                    </a>
                    <a className={styles.logos} href="https://github.com/LMellaVillanueva" target='_blank' >
                        <img src={gh} alt="GitHub" className='w-10 lg:w-11' />
                    </a>
                </div>
            </div>
            <div className={`flex justify-center items-center gap-5 lg:gap-10 font-sans ${styles.cv} ${anim ? styles.anim : ''} ${anim ? styles.shadow : ''}`}>
                <a href="/LucasMellaCV.pdf" target='_blank' className={`p-3 rounded-sm bg-gradient-to-b from-black via-gray-900 to-purple-900 font-sans hover:scale-105 transition-all duration-150 border border-purple-500 hover:text-purple-300`}>Visualiza mi CV!</a>
                <a href="/LucasMellaCV.pdf" download className={`hover:scale-105 transition-all duration-150 hover:text-purple-400 p-3 border border-purple-500 rounded-sm bg-gradient-to-b from-black via-gray-900 to-purple-900`}><FileDownloadIcon /></a>
            </div>
        </>
    );
}

export default Header;