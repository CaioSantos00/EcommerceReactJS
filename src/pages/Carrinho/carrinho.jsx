import Header from '../../assets/Components/Header/Header';
import Footer from '../../assets/Components/Footer/Footer';
import './carrinho.scss';
import { useContext, useState } from 'react';
import { CardCar } from '../../assets/Components/CardProductCar/CardCar';
import { ProductContext } from "../../App"

export default function Carrinho() {
    const { productsCar } = useContext(ProductContext)
    console.log(productsCar)

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
                {productsCar.length == 0 && <div>Sem Produtos no carrinho</div> }
                {
                productsCar.map((product) => (
                    <CardCar nome={product.name} preco={product.price}/>
                ))}
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