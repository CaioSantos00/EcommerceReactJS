import React, { useState } from 'react';
import "../../../pages/ProdutoVer/VerProduto.scss";

export default function BtnsTam({tamanho}) {

  return (
    <>
    <button className='btnsSemFundo'>
        {tamanho}
    </button>
    </>
  )
}