import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
// import requests from "./requests";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  // useState, useEffect is a hook

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      //   we like to log something out when we get somthing back to see if it is correct
      //  console.log(request);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);
  // this useEffect depends on the selectedOption dependency
  //which come from outside so we have to pass it in here

  //anything we are sending to the server, pulling info from the server it going to have delay
  //we use async await

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
