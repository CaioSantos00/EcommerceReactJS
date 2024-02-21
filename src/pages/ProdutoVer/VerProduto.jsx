import React, { useState } from 'react';
import Header from '../../assets/Components/Header/Header';
import Footer from '../../assets/Components/Footer/Footer';
import camiseta from '../../assets/imgs/camiseta.png'
import Carousel from '../../assets/Components/Carrosel/Carrosel';
import './VerProduto.scss';

export default function VerProduto() {
  const images = [
    camiseta,
    'https://via.placeholder.com/500x500',
    'https://via.placeholder.com/500x500',
    'https://via.placeholder.com/500x500'
  ]
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
                <Carousel images={images}/>
              </div>
              <div id="divInfos">
                <div className='titles'>Nome do produto</div>
                <div className='linhaRisco'></div>
                <div className='titles'>R$000.00</div>
                <div id='divHoldTodoTam'>
                <span>Tamanhos</span>
                <div id='divTamanhos'>
                  <button className='btnsSemFundo'>PP</button><button className='btnsSemFundo'>P</button><button className='btnsSemFundo'>M</button><button className='btnsSemFundo'>G</button><button className='btnsSemFundo'>GG</button>
                </div>
                </div>
                <div id='divHoldAddExclu'>
                  <div id='divAddExclu'>
                  <button onClick={remove} disabled={qtd ===1} className='buttonsComFundo' id='btnRemove'>-</button>
                  <div id='qtd'>{qtd}</div>
                  <button onClick={add} className='buttonsComFundo' id='btnMais'>+</button>
                  </div>
                  <button className='buttonsComFundo'>Comprar</button>
                </div>
                <div id='divDescription'>
                  <div className="titles">Sobre a peça</div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, sed magnam eos inventore rerum beatae quis, facilis suscipit qui veritatis laborum veniam omnis. Magnam earum laboriosam iste, sequi numquam at.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </main>
          <Footer/>
        </>
    )
}