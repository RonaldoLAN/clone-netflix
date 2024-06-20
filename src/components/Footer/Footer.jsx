import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import x_icon from '../../assets/x_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={x_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audiodescrição</li>
        <li>Relações com investidores</li>
        <li>Avisos legais</li>
        <li>Central de ajuda</li>
        <li>Carreiras</li>
        <li>Preferências de Cookies</li>
        <li>Cartão pré-pago</li>
        <li>Termos de uso</li>
        <li>Informações corporativas</li>
        <li>Imprensa</li>
        <li>Privacidade</li>
        <li>Entre em contato</li>
      </ul>
      <p className='copyright-text'>© 1997 - 2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer