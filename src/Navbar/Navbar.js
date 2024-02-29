import React from 'react'
import './Navbar.css'
import logoPizza from '../imagens/logo-sem-fundo.png'
import urso from '../imagens/urso.png'
import pizza from '../imagens/pizza.png'
import chapeu from '../imagens/chapeu.png'

export default function Navbar(){
    return (
      <header>
        <div className='logo'>
          <img src={logoPizza} alt="Logo Pizza" />
        </div>

        <div className='interface'>
         <nav className='menu-desktop'>
          <ul>
            <li><a href='#'>Ofertas <img src={urso} alt="Imagem 1"></img></a></li>
            <li><a href='#'>Cardápio <img src={pizza} alt="Imagem 1"></img></a></li>
            <li><a href='#'>Meus dados <img src={chapeu} alt="Imagem 1"></img></a></li>
            
            <button className='btn-pedidos'>Pedidos</button>
          </ul>
         </nav>
        </div>
        
      </header>
    );
  }