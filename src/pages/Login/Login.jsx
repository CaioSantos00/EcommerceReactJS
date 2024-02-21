import React, { useState } from 'react';
import Header from '../../assets/Components/Header/Header';
import Footer from '../../assets/Components/Footer/Footer';
import '../../assets/Sass/style.scss'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
          <Header />
          <main>
          <section>
          <div id='forms'> 
          <div className='titlesForms'>Login</div>
          <input type="email" placeholder='Email' className='inputs'/>
          <input type="password" placeholder='Senha' className='inputs'/>
          <div className='holdEsqueceuLembre-Me'>
            <div className='holdEsqueceuLembre-Me'><input type="checkbox" />Lembrar de mim</div> <Link>Restaurar senha</Link>
          </div>
          <button className='buttonsComFundo'>Entrar</button>
          <span><Link to="/Cadaster">Cadastre-se</Link></span>
          </div>
          </section>
          </main>
          <Footer/>
        </>
    )
}