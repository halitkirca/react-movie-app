import React from 'react'
import "./MovieDetails.css";
import { useLocation, useNavigate } from 'react-router-dom';

const MovieDetail = () => {

    const location = useLocation();
    const props = location.state.props;
    console.log(props);

    const navigate = useNavigate();

  return (
    <div className='movieDetailDiv'>
    <div className="con">
      <img
        src={"https://image.tmdb.org/t/p/w1280" + props.poster_path}
        width={"350px"}
        alt=""
      />
      <div className='propsdiv'>
        <div>
        <h1>Overview</h1>
        <p>{props.overview}</p>
        </div>

        <div className='details'>
        <p>Release Date : {props.release_date}</p>
        <p>Rate : {props.vote_average}</p>
        <p>Total Vote : {props.vote_count}</p>
        
        <button onClick={() => navigate(-1)}>Exit</button>
</div>
      </div>
    </div>
    </div>
  );
}

export default MovieDetail