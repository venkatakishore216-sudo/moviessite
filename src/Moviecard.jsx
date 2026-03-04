import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Moviecard.css";

function Moviecard({ movie, isSelected, onClick, onClose }) {

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  /* Search Movie */
  const handleSearch = () => {

    const searchText = inputValue.toLowerCase().trim();

    if (movie.title.toLowerCase().includes(searchText)) {
      navigate(`/movie/${movie.id}`);
    }
    else {
      alert("Movie not matched");
    }
  };

  return (
    <>
      <div className="movie-card" onClick={onClick}>
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <p>⭐ {movie.rating}</p>
      </div>

      {isSelected && (
        <div className="overlay" onClick={onClose}>

          <div className="movie-card big" onClick={(e)=>e.stopPropagation()}>

            <button className="close-btn" onClick={onClose}>
              ✖
            </button>

            <img src={movie.poster} alt={movie.title} />

            <h2>{movie.title}</h2>

            <p>{movie.overview}</p>

            {movie.link && (
              <button
                className="trailer-btn"
                onClick={() => window.open(movie.link, "_blank")}
              >
                ▶ Watch Trailer
              </button>
            )}

            <div style={{ marginTop: "15px" }}>

              <button className="trailer-btn" onClick={handleSearch}>
                More
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Moviecard;