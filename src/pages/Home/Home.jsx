import React from 'react';
import "./Home.scss";
import Header from '../../assets/Components/Header/Header';
import CardProduct from '../../assets/Components/CardProdutos/CardProdutos';
import Footer from '../../assets/Components/Footer/Footer';

export default function Home() {
    return (
        <>
          <Header />
          <main>
          <section>
            <div id='holdCardsProducts'>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            </div>
          </section>
          </main>
          <Footer/>
        </>
    )
}