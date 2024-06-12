import styles from './aboutMe.module.css';

const AboutMe = () => {
    return (
        <>
            <div id='aboutMe' className='flex flex-col items-center justify-start w-full h-full pt-20 lg:pt-32 gap-32 bg-gradient-to-b from-purple-950 to-black'>
                <div className={`flex flex-col p-5 gap-10 lg:gap-5 lg:w-3/5 justify-center items-center lg:border rounded-sm border-purple-500 font-sans lg:bg-gradient-to-b from-black via-gray-900 to-purple-900 mb-10 ${styles.logos}`}>
                    <h2 className={`font-sansita text-4xl lg:text-3xl lg:drop-shadow-custom-shadow ${styles.shadow}`}>Sobre Mi</h2>
                    <p className={`font-sans font-light lg:font-medium ${styles.texto}`}>
                        Desde siempre, mi fuente de motivación en el mundo tecnológico han sido los videojuegos. Pasando por diferentes consolas PlayStation y distintos juegos como God of War o Dark Souls, descubrí lo que realmente me apasiona: La Tecnología. <br />
                        Mi primer toma de contacto con la disciplina fueron cursos de programación de Java, los cuales me otorgaron los conceptos más básicos, como las variables, los bucles y los algoritmos.
                        Más adelante y con la posibilidad de estudiar en Henry Bootcamp para abrirme paso a este nicho, pude entender más a fondo como es que funcionan ciertos aspectos del mundo tecnológico, adquiriendo conocimientos para crear páginas web desde el absoluto cero. <br />
                        Hoy en día mi enfoque está en encontrar un trabajo en el que pueda desempeñar y exprimir mi potencial como programador FullStack, para en un futuro descubrir mi rol en el mercado tech.
                    </p>
                </div>
            </div>
        </>
    )
}
export default AboutMe;