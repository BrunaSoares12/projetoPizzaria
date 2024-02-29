import './footer.css'
import logoPizza from '../imagens/logo-pizza.jpg'
import { FaYoutube } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className='content-footer'> 
        <div className='footer-img'>
          <img src={logoPizza} alt="Logo Pizza" />
        </div>

        <div className='footer-Uc'>
          <p>Desenvolvido como projeto da UC Engenharia de Software.</p>
        </div>

        <div className='footer-about-me'>
          <h2>Sobre Nós</h2>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        
        <div className='footer-contact'>
          <h2>Contatos</h2>
          <ul>
            <li><a href='#'><FaInstagram className='icon' /></a></li>
            <li><a href='#'><FaGithub className='icon' /></a></li>
            <li><a href='#'><FaFigma className='icon' /></a></li>
            <li><a href='#'><FaYoutube className='icon' /></a></li>
          </ul>
        </div>
      </div>

      <div className='direitos-autorais'>
        <p>©Copyright 2024 Freddry's Pizza. Todos os Direitos Reservados.</p>
      </div>
    </footer>
  )
}
