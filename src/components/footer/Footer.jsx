import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import gh from '../../assets/gh.png';
import linkedIN from '../../assets/linkedIN.png';
import wsp from '../../assets/wsp.png';
import styles from './footer.module.css';
import Swal from 'sweetalert2';

const Footer = () => {
    const [info, setInfo] = useState({ from_name: '', from_email: '', message: '' });

    const handleChange = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const regexEmail = /^[a-zA-Z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-zA-Z0-9])*@gmail\.com$/;
        if (!regexEmail.test(info.from_email)) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "La dirección de correo no es válida.",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        emailjs
            .send('service_qjb7dzh', 'template_7sfakso', info, {
                publicKey: 'zADAsfTnn9pOJcyPO',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Mensaje enviado correctamente!",
                        text: "Serás contactado a la brevedad.",
                        icon: "success"
                      });
                      setInfo({ from_name: '', from_email: '', message: '' });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Algo salió mal!",
                        text: "Verifica los datos ingresados.",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                },
            );
    };

    return (
        <>
            <footer id='contacto' className='flex flex-col py-10 items-center  bottom-0 w-full h-full bg-gradient-to-b from-black to-gray-950'>
                <h1 className={`font-sansita text-4xl ${styles.contact}`}>Contáctame</h1>
                <div className='flex flex-col lg:flex-row h-full w-full gap-10 lg:gap-0 justify-around items-center'>
                    <form onSubmit={sendEmail} className={`flex w-full lg:w-2/5 h-full flex-col items-start justify-start gap-2 p-8 ${styles.label}`}>
                        <label className={`font-sans text-xl ${styles.label}`}>Nombre</label>
                        <input type="text" name="from_name" value={info.from_name} onChange={handleChange} className={`bg-purple-950 border-b-2 border-purple-500 rounded-sm w-1/2 font-sans bg-gradient-to-b from-gray-900 to-purple-950 `} />
                        <label className={`font-sans text-xl ${styles.label}`}>Email</label>
                        <input type="email" name="from_email" value={info.from_email} onChange={handleChange} className={`bg-purple-950 border-b-2 border-purple-500 rounded-sm w-1/2 font-sans bg-gradient-to-b from-gray-900 to-purple-950 `} />
                        <label className={`font-sans text-xl ${styles.label}`}>Mensaje</label>
                        <textarea name="message" value={info.message} onChange={handleChange} className={`bg-purple-950 border-b-2 border-purple-500 rounded-sm w-full font-sans bg-gradient-to-b from-gray-900 to-purple-950 `} />
                        <button type="submit" value="Send" className={`mt-3 rounded-sm bg-gradient-to-b from-black via-gray-900 to-purple-900 font-sans hover:scale-105 hover:translate-x-1 transition-all duration-150 border border-purple-500 hover:text-purple-300 disabled:bg-gradient-to-t disabled:from-gray-500 disabled:text-slate-400 disabled:border-opacity-0 disabled:shadow-none disabled:translate-x-0 disabled:scale-100 ${styles.button}`} disabled={!info.from_name.length || !info.from_email.length || !info.message.length} >Enviar</button>
                    </form>
                    <div className={`flex flex-col gap-5 lg:w-1/5 items-center ${styles.logos}`}>
                        <h2 className={`font-sans text-xl ${styles.label}`}>Redes Sociales</h2>
                        <a className={`w-12 ${styles.logos}`} href="https://wa.me/981314078" target='_blank'>
                            <img src={wsp} alt="Wsp" />
                        </a>
                        <a className={`w-12 ${styles.logos}`} href="https://www.linkedin.com/in/lucas-mella-947989231/" target='_blank'>
                            <img src={linkedIN} alt="LinkedIn" />
                        </a>
                        <a className={`w-12 ${styles.logos}`} href="https://github.com/LMellaVillanueva" target='_blank' >
                            <img src={gh} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;