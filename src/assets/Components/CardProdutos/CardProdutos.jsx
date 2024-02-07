import { Link } from 'react-router-dom';
import React from 'react';
import camiseta from '../../imgs/camiseta.png'
import './CardProdutos.scss'

export default function CardProduct() {
    return (
        <Link to="/Produto">
            <div className='cardProduct'>
                <div>
                    <img src={camiseta} alt="Camiseta" />
                </div>
                <div className='titleProdutos'>Nome Produto</div>
                <div className='titleProdutos'>R$000.00</div>
            </div>
        </Link>
    )
}