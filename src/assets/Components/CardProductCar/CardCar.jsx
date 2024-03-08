
import BtnAddRemove from '../../Components/BtnAddRemove/BtnAddRemove';
import camiseta from '../../imgs/camiseta.png'
export function CardCar({nome, preco}) {

    return(
        <>
        <div className="cardProductCar">
                    <div>
                        <img src={camiseta} alt="Produto" />
                    </div>
                    <div className='infosProducts'>
                        <div>{nome}</div>
                        <div className="divExcluAddInfos"> 
                        <div>R${preco}</div>  
                        <div className='divExcluAndBtn'>
                        <BtnAddRemove/>
                        <button className='btnsCancel'>Excluir</button>
                        </div>
                        </div>
                    </div>
                </div>
                </>
    )
}