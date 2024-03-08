import React, { useState, useContext } from 'react';
import "../../../pages/ProdutoVer/VerProduto.scss";
import { ProductContext } from '../../../App';

export default function BtnAddRemove() {
  const {products} = useContext(ProductContext);
  //products.map()
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
                <div className='divAddExclu'>
                  <button onClick={remove} disabled={qtd === 1} className='buttonsComFundo btnRemove'>-</button>
                  <div className='qtd'>{qtd}</div>
                  <button onClick={add} className='buttonsComFundo btnMais'>+</button>
                </div>
    </>
  )
}