import React, { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import "./Main.css";

const Main = () => {

    const [movieInput, setInput] = useState("");
    const [data, setData] = useState([]);
    const API_KEY = "2c01b9b1bfb4cc108f85bd00e178c2fb";
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&query=${movieInput}`;

    const getData = async(url) => {
        await fetch(url)
          .then((res) => res.json())
          .then((res) => setData(res.results));
        console.log(data);
    }

    useEffect(() => {
        getData(url);
    });

  return (
    <div>
    <div className='search'>
      <input
        placeholder="Search a movie..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() =>
          getData(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieInput}`
          )
        }
      >
        Search
      </button>
      </div>

      <div className='divcards'>
        {data.map((i) => {
          return <MovieCard key={i.id} props={i} />;
        })}
      </div>
    </div>
  );
}

export default Main