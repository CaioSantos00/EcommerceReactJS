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
          <form id='forms'> 
          <div className='titlesForms'>Cadastre-se</div>
          <input type="text" placeholder='Nome' className='inputs' required/>
          <input type="email" placeholder='Email' className='inputs' required/>
          <input type="password" placeholder='Senha' className='inputs' required/>
          <input type="password" placeholder='Confirme sua senha' className='inputs' required/>
          <input type="tel" placeholder='Telefone' className='inputs' required/>
          <button className='buttonsComFundo'>Cadastrar</button>
          <span><Link to="/Login">Já tem uma conta ? Entre</Link></span>
          </form>
          </section>
          </main>
          <Footer/>
        </>
    )
}