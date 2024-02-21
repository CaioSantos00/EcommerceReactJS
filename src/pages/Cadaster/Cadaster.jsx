import React from 'react';
import Header from '../../assets/Components/Header/Header';
import Footer from '../../assets/Components/Footer/Footer';
import '../../assets/Sass/style.scss'
import { Link } from 'react-router-dom';

export default function Cadaster() {
    return (
        <>
          <Header />
          <main>
          <section>
          <div id='forms'> 
          <div className='titlesForms'>Cadastre-se</div>
          <input type="text" placeholder='Nome' className='inputs'/>
          <input type="email" placeholder='Email' className='inputs'/>
          <input type="password" placeholder='Senha' className='inputs'/>
          <input type="password" placeholder='Confirme sua senha' className='inputs'/>
          <input type="tel" placeholder='Telefone' className='inputs'/>
          <button className='buttonsComFundo'>Cadastrar</button>
          <span><Link to="/Login">Já tem uma conta ? Entre</Link></span>
          </div>
          </section>
          </main>
          <Footer/>
        </>
    )
}