import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
    
      {/* <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div> */}
      
      <ListGroup as="ul" >
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold text-secondary" >{movie.Title}</div>
            {movie.Year} • {movie.Type}
          </div>
          <div>
            <button className="btn btn-secondary">Nominate</button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Movie;
