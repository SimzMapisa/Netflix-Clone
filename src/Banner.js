import React, {useState, useEffect} from "react";
import "./Banner.css";
import {AiOutlineInfoCircle} from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

import axios from "./axios"
import requests from "./requests";

function Banner() {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length -1)
      ])

      return request;
    }

    fetchData();
  },[])

  console.log(movie);

  function truncate (string, n){
    return string?.length > n ? string.substring(0, n-1) + '...' : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="content__wrapper">
        <div className="banner__contents">
          <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name} </h1>
          <h3 className="banner__description">{truncate(`${movie?.overview}`, 149)}</h3>
          <div className="banner__buttons">
            <button className="banner__button play__btn"><FaPlay  className="faPlay"/>Play</button>
            <button className="banner__button"> <AiOutlineInfoCircle className="info__icon"/> More Info</button>
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
}

export default Banner;
