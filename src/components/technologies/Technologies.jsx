import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiNextdotjs, SiNestjs, SiTailwindcss, SiRedux, SiGit, SiExpress, SiSequelize } from 'react-icons/si';
import styles from './technologies.module.css';

const Technologies = () => {
    const technologies = [
        { icon: <FaReact className="text-blue-500 w-8 h-8" /> },
        { icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
        { icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
        { icon: <FaCss3Alt className="text-blue-700 w-8 h-8" /> },
        { icon: <FaJsSquare className="text-yellow-500 w-8 h-8" /> },
        { icon: <SiTypescript className="text-blue-500 w-8 h-8" /> },
        { icon: <SiPostgresql className="text-blue-600 w-8 h-8" /> },
        { icon: <SiTailwindcss className="text-blue-400 w-8 h-8" /> },
        { icon: <SiRedux className="text-purple-600 w-8 h-8" /> },
        { icon: <SiGit className="text-orange-500 w-8 h-8" /> },
        { icon: <SiExpress className="text-gray-300 w-8 h-8" /> },
        { icon: <SiSequelize className="text-blue-500 w-8 h-8" /> },
        { icon: <SiNextdotjs className="text-black w-8 h-8" /> },
        { icon: <SiNestjs className="text-red-600 w-8 h-8" /> },
    ];

    return (
        <>
            <div id='technologies' className={`flex items-center justify-center w-full h-full bg-gradient-to-b from-black via-purple-950 py-32`}>
                {/* Borde header */}
                <div className={`absolute h-full inset-0 border border-purple-600 ${styles.borde}`}></div>
                <div className={`flex flex-col text-center p-4 items-center font-sans`}>
                    <h1 className={`my-3 text-4xl ${styles.text}`}>Tecnologías</h1>
                    <div className='flex flex-wrap gap-12 mt-4 p-4 w-full items-center justify-center'>
                        {technologies.map((tech, index) => (
                            <div key={index} className={`flex ${styles.shadowContainer}`}>
                                {tech.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Technologies;