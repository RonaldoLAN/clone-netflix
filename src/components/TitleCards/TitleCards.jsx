import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      Authorization: '594eaeb9b602bd8e135423a7e27f9944',
      'Content-Type': 'application/json;charset=utf-8'
    }
  };
  
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;  
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Populares na Netflix"}</h2> 
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) =>{
           return <div className="card" key={index}>
              <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
           </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards