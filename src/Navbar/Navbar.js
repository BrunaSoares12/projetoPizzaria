import React from 'react'
import './Navbar.css'

export default function Navbar(){
    return (
      <header>
        <div className='interface'>
         <nav className='menu-desktop'>
          <ul>
            <li><a href='#'>Oferecer</a></li>
            <li><a href='#'>Cardápio</a></li>
          </ul>
        </nav>

        <div className='logo'>
        <img src="./imagens/logo-pizza.jpg" alt="Logo Pizza" />
        </div>

         <nav className='menu-desktop2'>
          <ul>
            <li><a href='#'>Português</a></li>
            <li><a href='#'>Meus dados</a></li>
          </ul>
          
        </nav>
        
        <button className='btn-pedidos'>Pedidos</button>

      </div>
      </header>
      
    );
  }