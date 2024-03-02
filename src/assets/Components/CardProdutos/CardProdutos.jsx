import { Link } from 'react-router-dom';
import React from 'react';
import camiseta from '../../imgs/camiseta.png'
import './CardProdutos.scss'

export default function CardProduct({nomeProduto, precoProduto}) {
    return (
        <Link to={`/Produto/${nomeProduto.id}`}>
            <div className='cardProduct'>
                <div>
                    <img src={camiseta} alt="Camiseta" />
                </div>
                <div className='titleProdutos'>{nomeProduto.name}</div>
                <div className='titleProdutos'>R${precoProduto.price}</div>
            </div>
        </Link>
    )
}