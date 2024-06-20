import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import tears_banner from '../../assets/tears_banner.jpg'
import tears_title from '../../assets/tears_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="tears">
        <img src={tears_banner} alt="" className='banner-img'/>
        <div className="tears-caption">
          <img src={tears_title} alt="" className='caption-img'/>
          <p>A rainha das lojas de departamento e seu marido do interior enfrentam uma crise conjugal. Até que o amor milagrosamente volta a florescer. Assista o quanto quiser.</p>
          <div className="tears-btns">
            <button className='btn'><img src={play_icon} alt="" />Assistir</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />Mais informações</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Sucessos de bilheteria"}/>
      <TitleCards title={"Apenas na Netflix"}/>
      <TitleCards title={"Em breve"}/>
      <TitleCards title={"Escolhas para você"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home