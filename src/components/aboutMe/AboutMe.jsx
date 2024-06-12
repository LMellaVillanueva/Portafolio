import styles from './aboutMe.module.css';

const AboutMe = () => {
    return (
        <>
            <div id='aboutMe' className='flex flex-col items-center justify-start w-full h-full pt-20 lg:pt-32 gap-32 bg-gradient-to-b from-purple-950 to-black'>
                <div className={`flex flex-col p-5 gap-10 lg:gap-5 lg:w-4/6 justify-center items-center font-sans mb-10 lg:bg-gradient-to-b from-black to-purple-950 lg:border border-purple-600 lg:rounded-sm ${styles.logos}`}>
                    <h1 className={`font-sansita text-4xl lg:drop-shadow-custom-shadow ${styles.shadow}`}>Sobre Mi</h1>
                    <p className={`font-sans font-light lg:font-normal lg:text-xl ${styles.texto}`}>
                        Desde siempre, mi fuente de motivación en el mundo tecnológico han sido los videojuegos. Inicié con cursos de programación de Java, aprendiendo conceptos básicos, para más adelante en Henry Bootcamp profundizar en la creación de páginas web. <br />
                        Actualmente busco un trabajo como programador FullStack para explotar mi potencial y encontrar mi rol en el mercado tech.
                    </p>
                </div>
            </div>
        </>
    )
}
export default AboutMe;