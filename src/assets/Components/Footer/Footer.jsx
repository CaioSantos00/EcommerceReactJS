import React from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            Copyright © 
            <div id='linksFooter'>
                <Link>Termos</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/Sobre">Quem Somos</Link>
            </div>
        </footer>
    )
}