import React, { useContext, useState } from 'react';
import Header from '../../assets/Components/Header/Header';
import Footer from '../../assets/Components/Footer/Footer';
import camiseta from '../../assets/imgs/camiseta.png'
import Carousel from '../../assets/Components/Carrosel/Carrosel';
import './VerProduto.scss';
import BtnAddRemove from '../../assets/Components/BtnAddRemove/BtnAddRemove';
import { ProductContext } from '../../App';
import { useParams } from 'react-router-dom';

export default function VerProduto() {  
  const products = useContext(ProductContext);
  const { id } = useParams()
  console.log(products)
  console.log(id)
  const resultado = products.find((produto) => produto.id == id)
  console.log(resultado)
  /*products.forEach(cadaProduto => {
    if (id == cadaProduto.id) {
      console.log(cadaProduto)
    }    
  });*/

  const images = [
    camiseta,
    'https://via.placeholder.com/500x500',
    'https://via.placeholder.com/500x500',
    'https://via.placeholder.com/500x500'
  ]
  let [tamSele, setTamSele] = useState('btnsSemFundo')

  function corSelecionada(tamanhoSelecionado) {
    setTamSele(tamanhoSelecionado);
  }

  let [qtd, setQtd] = useState(1);
  function add() {
    setQtd(qtd + 1)
  }
  function remove() {
    if (qtd > 0) {
      setQtd(qtd - 1)
    }
  }

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
                  <button onClick={() => corSelecionada('PP')} className={tamSele === 'PP' ? 'buttonsComFundo' : 'btnsSemFundo'}>PP</button>
                  <button onClick={() => corSelecionada('P')} className={tamSele === 'P' ? 'buttonsComFundo' : 'btnsSemFundo'}>P</button>
                  <button onClick={() => corSelecionada('M')} className={tamSele === 'M' ? 'buttonsComFundo' : 'btnsSemFundo'}>M</button>
                  <button onClick={() => corSelecionada('G')} className={tamSele === 'G' ? 'buttonsComFundo' : 'btnsSemFundo'}>G</button>
                  <button onClick={() => corSelecionada('GG')} className={tamSele === 'GG' ? 'buttonsComFundo' : 'btnsSemFundo'}>GG</button>
                </div>
              </div>
              <div id='divHoldAddExclu'>
                <BtnAddRemove/>
                <button className='buttonsComFundo'>Comprar</button>
              </div>
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