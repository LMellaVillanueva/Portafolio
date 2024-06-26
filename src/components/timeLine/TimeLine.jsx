import cw from '../../assets/cw.png';
import ta from '../../assets/ta.png';
import pi from '../../assets/pi.png';
import mp from '../../assets/mp.png';
import mui from '../../assets/mui.png';
import type from '../../assets/type.png';
import styles from './timeLine.module.css';
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiTypescript, SiMysql, SiExpress, SiRedux, SiSequelize, SiPostgresql, SiTailwindcss } from "react-icons/si";

const TimeLine = () => {

    return (
        <div id='proyectos' className={`flex flex-col font-sans bg-gradient-to-b from-black to-purple-950 overflow-hidden lg:mt-10 ${styles.allContainer}`}>
            <div className='relative w-full'>
            <h1 className={`relative lg:p-10 pb-5 text-center ${styles.shadow}`}>Mis Proyectos</h1>

                {/* Línea de tiempo */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 h-full border border-purple-600 ${styles.shadow}`}></div>
                {/* CorteWorld */}
                <div className={`relative lg:left-52 lg:top-20 my-10 lg:w-5/12 border lg:border-0 border-r-2 border-purple-500 bg-gradient-to-tr from-black to-slate-900 pb-5 lg:pb-0 ${styles.corteWorld}`}>
                    <div className={`flex flex-col lg:flex-row justify-center gap-12 items-center lg:m-2 p-5 w-full ${styles.cwTitulo}`}>
                        <h2 className={`text-center text-3xl lg:text-4xl font-sansita ${styles.titulo}`}>CorteWorld</h2>
                        <div className='border border-white w-1/4 h-1/6 relative hidden lg:block'></div>
                    </div>
                    <div className={`flex flex-col gap-3 items-center lg:items-start`}>
                        <p className={`text-center text-lg w-11/12 lg:w-4/6 ${styles.shadow}`}>Página web E-Commerce enfocada en StreetWear. Puedes iniciar sesión con Google (Firebase), comprar tus productos del carrito con WebPay, filtrar a tu conveniencia, etc. La cuenta administrador tiene total control sobre la página.</p>
                        <a href="https://corteworld.vercel.app" target='_blank' className="w-5/6 mr-4 lg:mr-0 lg:w-2/3">
                            <img src={cw} alt="CorteWorld" className={`transition-all duration-300 hover:scale-105 hover:shadow-black hover:shadow-xl m-2 border-2 rounded border-purple-700 hover:border-opacity-0 hover:translate-x-2`} />
                        </a>
                        <div className={`flex mt-4 w-full justify-center lg:w-fit pl:0 lg:pl-24 gap-2 ${styles.icons}`}>
                            <SiNextdotjs className="text-black w-8 h-8" />
                            <SiNestjs className="text-red-600 w-8 h-8" />
                            <SiTailwindcss className="text-blue-400 w-8 h-8" />
                            <SiTypescript className="text-blue-500 w-8 h-8" />
                            <SiMysql className="text-blue-600 w-8 h-8" />
                            <img src={type} alt="typeORM" className="w-9" />
                        </div>
                    </div>
                </div>
                {/* TasksApp */}
                <div className='relative lg:absolute lg:right-44 lg:top-96 lg:pt-16 my-10 lg:w-6/12 border lg:border-0 border-r-2 border-purple-500 bg-gradient-to-br from-black to-slate-900 pb-5 lg:pb-0'>
                    <div className='flex flex-col lg:flex-row justify-center gap-12 items-center lg:m-2 p-5 w-full'>
                        <div className='border hidden lg:block border-white w-1/6 h-1/6'></div>
                        <h2 className={`text-center text-3xl lg:text-4xl font-sansita ${styles.titulo}`}>Tasks App</h2>
                    </div>
                    <div className={`flex flex-col items-center gap-3 lg:ml-36`}>
                        <p className={`text-center w-11/12 lg:w-4/6 text-lg ${styles.shadow}`}>Proyecto personal. Aplicación web enfocada a organizar tus tareas diarias para mantener tu tiempo ordenado. Incluye un borrado lógico que te permite reintegrar tus tareas eliminadas. CRUD completo.</p>
                        <a href="https://streamable.com/d73wk4" target='_blank' className="w-5/6 mr-4 lg:mr-0 lg:w-2/3">
                            <img src={ta} alt="TaskApp" className={`transition-all duration-300 hover:scale-105 hover:shadow-black hover:shadow-xl m-2 border-2 rounded border-purple-500 hover:border-opacity-0 hover:translate-x-2`} />
                        </a>
                        <div className={`flex mt-4 w-full justify-center lg:w-fit pl:0 lg:pl-4 gap-2 ${styles.icons}`}>
                            <FaReact className="text-blue-500 w-8 h-8" />
                            <SiRedux className="text-purple-600 w-8 h-8" />
                            <FaNodeJs className="text-green-500 w-8 h-8" />
                            <SiTypescript className="text-blue-500 w-8 h-8" />
                            <SiPostgresql className="text-blue-600 w-8 h-8" />
                            <SiExpress className="text-gray-300 w-8 h-8" />
                            <SiSequelize className="text-blue-500 w-8 h-8" />
                        </div>
                    </div>
                </div>
                {/* MatchingProyect */}
                <div className='relative lg:left-32 lg:mt-48 my-10 lg:w-5/12 lg:mb-72 border lg:border-0 border-r-2 border-purple-500 bg-gradient-to-tl from-black to-slate-900 pb-5 lg:pb-0'>
                    <div className='flex flex-col lg:flex-row justify-center gap-12 items-center lg:m-2 p-5 w-full'>
                        <h2 className={`text-center lg:text.left text-3xl lg:text-4xl font-sansita lg:ml-10 ${styles.titulo}`}>Matching Proyect</h2>
                        <div className='border hidden lg:block border-white w-1/4 h-1/6'></div>
                    </div>
                    <div className={`flex flex-col items-center lg:items-start lg:ml-10 gap-3`}>
                        <p className={`text-center text-lg w-11/12 lg:w-9/12 ${styles.shadow}`}>Proyecto académico con metodología SCRUM. Página orientada para reservar canchas y poder jugar con amigos a distintos deportes. Inicia sesión con Google, reserva canchas con MercadoPago y disfruta con amigos un buen rato.</p>
                        <a href="https://vimeo.com/910164046" target='_blank' className="w-5/6 mr-4 lg:mr-0 lg:w-2/3">
                            <img src={mp} alt="MatchingProyect" className={`transition-all duration-300 hover:scale-105 hover:shadow-black hover:shadow-xl m-2 border-2 rounded border-purple-500 hover:border-opacity-0 hover:translate-x-2`} />
                        </a>
                        <div className={`flex justify-center mt-4 w-fit lg:pl-14 gap-2 ${styles.icons}`}>
                            <FaReact className="text-blue-500 w-8 h-8" />
                            <SiRedux className="text-purple-600 w-8 h-8" />
                            <FaNodeJs className="text-green-500 w-8 h-8" />
                            <FaJsSquare className="text-yellow-500 w-8 h-8" />
                            <SiPostgresql className="text-blue-600 w-8 h-8" />
                            <SiExpress className="text-gray-300 w-8 h-8" />
                            <SiSequelize className="text-blue-500 w-8 h-8" />
                            <img src={mui} alt="MUI" className="w-9" />
                        </div>
                    </div>
                </div>
                {/* CountriesApp */}
                <div className="relative lg:absolute lg:bottom-20 lg:right-64 lg:mr-5 lg:w-4/12 my-10 lg:my-0 border lg:border-0 border-r-2 border-purple-500 bg-gradient-to-bl from-black to-slate-900 pb-5 lg:pb-0">
                    <div className='flex flex-col lg:flex-row justify-center gap-2 items-center lg:m-2 p-5 w-full'>
                        <div className='border hidden lg:block border-white w-1/5 h-1/6'></div>
                        <h2 className={`text-center text-3xl lg:text-4xl font-sansita lg:ml-10 ${styles.titulo}`}>Countries App</h2>
                    </div>
                    <div className={`flex flex-col items-center lg:items-end gap-3`}>
                        <p className={`text-center text-lg w-11/12 lg:w-9/12 ${styles.shadow}`}>Aplicación que muestra información sobre los países utilizando una API. Puedes buscar países, ver sus detalles, realizar filtrados y crear actividades por un formulario con validaciones.</p>
                        <a href="https://vimeo.com/905831112" target='_blank' className="w-5/6 mr-4 lg:mr-0 lg:w-2/3">
                            <img src={pi} alt="MatchingProyect" className={`transition-all duration-300 hover:scale-105 hover:shadow-black hover:shadow-xl m-2 border-2 rounded border-purple-500 hover:border-opacity-0 hover:translate-x-2`} />
                        </a>
                        <div className={`flex justify-center lg:pr-6 mt-4 w-fit gap-2 ${styles.icons}`}>
                            <FaReact className="text-blue-500 w-8 h-8" />
                            <SiRedux className="text-purple-600 w-8 h-8" />
                            <FaNodeJs className="text-green-500 w-8 h-8" />
                            <FaJsSquare className="text-yellow-500 w-8 h-8" />
                            <SiPostgresql className="text-blue-600 w-8 h-8" />
                            <SiExpress className="text-gray-300 w-8 h-8" />
                            <SiSequelize className="text-blue-500 w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;