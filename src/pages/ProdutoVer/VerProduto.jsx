import React, { useContext, useState } from 'react';
import Header from '../../assets/Components/Header/Header';
import Footer from '../../assets/Components/Footer/Footer';
import camiseta from '../../assets/imgs/camiseta.png'
import Carousel from '../../assets/Components/Carrosel/Carrosel';
import './VerProduto.scss';
import BtnAddRemove from '../../assets/Components/BtnAddRemove/BtnAddRemove';
import { ProductContext } from '../../App';
import { useParams, Link } from 'react-router-dom';
import BtnsTam from '../../assets/Components/BtnsTam/BtnsTam';

//export const produtosCarContext = createContext([]);

export default function VerProduto() {  
  const {products, productsCar, addCart} = useContext(ProductContext);
  const { id } = useParams()

  const resultado = products.find((produto) => produto.id == id)
  console.log(resultado.tam)
  const images = [
    camiseta,
    'https://via.placeholder.com/500x500',
    'https://via.placeholder.com/500x500',
    'https://via.placeholder.com/500x500'
  ]
  
  return (
    <>
      <Header />
      <main>
        <section>
          <div id='divisionInfos'>
            <div id='divCarrosel'>
              <Carousel images={images} />
            </div>
            <div id="divInfos">
              <div className='titles'>{resultado.name}</div>
              <div className='linhaRisco'></div>
              <div className='titles'>R${resultado.price}</div>
              <div id='divHoldTodoTam'>
                <span>Tamanhos</span>
                <div id='divTamanhos'>
                  {
                    resultado.tam.map((tamDispo) => {
                     return <BtnsTam tamanho={tamDispo} />
                    })
                  }
                </div>
              </div>
              
              <div id='divHoldAddExclu'>
                <BtnAddRemove/>
                <Link to="/Carrinho"><button className='buttonsComFundo' onClick={() => addCart(resultado)}>Comprar</button></Link>
              </div>
              <button className='buttonsComFundo' onClick={() => 
                  {
                    alert("Adicionado ao carrinho")
                    addCart(resultado)
                  }}>Adicionar ao Carrinho</button>
              <div id='divDescription'>
                <div className="titles">Sobre a peça</div>
                <div>
                  <p>
                    {resultado.description}
                  </p>
                </div>
              </div>
              <div className='divInfosFrete'>
              <div className="titles">Calcule o frete</div>
              <div className='resultadoFrete'>
                        <input type="text" placeholder='Digite seu CEP' className='inputs'/>
                        <button className='buttonsComFundo'>Calcular</button>
                    </div>
                    <span>Valor do frete: R$000.00</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}