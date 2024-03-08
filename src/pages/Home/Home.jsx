import React, { useContext } from 'react';
import "./Home.scss";
import Header from '../../assets/Components/Header/Header';
import CardProduct from '../../assets/Components/CardProdutos/CardProdutos';
import Footer from '../../assets/Components/Footer/Footer';
import { ProductContext } from '../../App';
import {useNavigate } from 'react-router-dom';

export default function Home() {
  const {products} = useContext(ProductContext);
  const navegacao = useNavigate()

  function clicou(produto) {
    navegacao(`/Produto/${produto.id}`, { state: { product: produto } })
  }
    return (
        <>
          <Header />
          <main>
          <section>
            <div id='holdCardsProducts'>
            {products.map((product) => (
              <CardProduct key={product.id} nomeProduto={product} precoProduto={product} onClick={() => clicou(product)}/>
              ))}
            </div>
          </section>
          </main>
          <Footer/>
        </>
    )
}