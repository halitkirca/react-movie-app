import React from 'react'
import "./MovieCard.css";
import { useNavigate } from 'react-router-dom';

const MovieCard = ({props}) => {

  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate("/movieDetails", { state: { props } })}
    >
      <img
        src={"https://image.tmdb.org/t/p/w1280" + props.poster_path}
        width={"300px"}
        alt=""
      />
      <div className='cardbasics'>
        <h1>{props.title}</h1>
        <h1>{props.vote_average}</h1>
      </div>
      <p>Overview: {props.overview}</p>
      
    </div>
  );
}

export default MovieCard