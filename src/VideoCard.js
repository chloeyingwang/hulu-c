import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const VideoCard = forwardRef(({ movie }, ref) => {
  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        // you can also use || more than once it means if the previous one/ones do not work fall to the later one
        alt="movie poster"
      />

      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        // textTruncateChild={<a href="#">Read on</a>}   you can add this too
        text={movie.overview}
      />
      {/* make a p tag, once it goes over 2 line, truncate it with ... */}
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} • `}
        {/* only show the media_type and •  when it is available */}
        {movie.release_date || movie.first_air_date} •
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
});
// forwardRef is like a pointer

export default VideoCard;
