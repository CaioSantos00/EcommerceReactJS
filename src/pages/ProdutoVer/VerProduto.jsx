import React from 'react';
import Header from '../../assets/Components/Header/Header';
import Footer from '../../assets/Components/Footer/Footer';
import camiseta from '../../assets/imgs/camiseta.png'

export default function VerProduto() {
    return (
        <>
          <Header />
          <main>
          <section>
            <div id='divisionInfos'>
                <img src={camiseta} alt="" />
            </div>
          </section>
          </main>
          <Footer/>
        </>
    )
}