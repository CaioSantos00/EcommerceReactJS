import Header from '../../assets/Components/Header/Header';
import Footer from '../../assets/Components/Footer/Footer';
import camiseta from '../../assets/imgs/camiseta.png'
import './carrinho.scss';
import { useState } from 'react';
import BtnAddRemove from '../../assets/Components/BtnAddRemove/BtnAddRemove';

export default function Carrinho() {
    let [divFrete, setDivFrete] = useState('resultadoFreteEscondido')

    function abreFechaDiv() {
        setDivFrete('resultadoFrete')
    }
    return (
        <>
          <Header />
          <main>
          <section id='sectionCarrinho'>
            <div id='holdCar'>
            <div id="productsNoCar">
                <div className="cardProductCar">
                    <div>
                        <img src={camiseta} alt="Produto" />
                    </div>
                    <div className='infosProducts'>
                        <div>Nome do produto</div>
                        <div className="divExcluAddInfos"> 
                        <div>R$000.00</div>  
                        <div className='divExcluAndBtn'>
                        <BtnAddRemove/>
                        <button className='btnsCancel'>Excluir</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='holdResumoPedido'>
                <div className="titles">Resumo do pedido</div>
                <div className="linhaRisco"></div>
                <div>Subtotal: R$</div>
                <div onClick={abreFechaDiv} id='divHoldInfosFrete'>
                
              <div>Calcule o frete</div>
              <div className='resultadoFrete'>
                        <input type="text" placeholder='Digite seu CEP' className='inputs'/>
                        <button className='buttonsComFundo'>Calcular</button>
                    </div>
                    <span>Valor do frete: R$000.00</span>    
                </div>
                <div>Pedido total: R$</div>
                <button className='buttonsComFundo'>Finalizar</button>
            </div>
            </div>
          </section>
          </main>
          <Footer/>
        </>
    )
}