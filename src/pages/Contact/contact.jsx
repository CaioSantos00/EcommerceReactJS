import React from 'react';
import Header from '../../assets/Components/Header/Header';
import '../../assets/Sass/style.scss'
import Footer from '../../assets/Components/Footer/Footer';
export default function Contato() {
    return (
        <>
        <Header/>
        <main>
        <section id='sectionForms'>
            <div id='forms'> 
                    <div className='titlesForms'>Contato</div>
                    <div className='holdTwoInputs'>
                        <input type="text" placeholder='Nome' className='inputs'/>
                        <input type="email" placeholder='Email' className='inputs'/>
                    </div>
                    <input type="tel" placeholder='Telefone' className='inputs'/>
                    <textarea placeholder='Coment' className='inputs'></textarea>
                    <button className='buttonsComFundo'>Enviar</button>
            </div>
        </section>
        </main>
        <Footer/>
        </>
    )
}