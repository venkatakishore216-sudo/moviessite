import { useParams, useNavigate } from "react-router-dom";
import "./Movie.css";
function Movie({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <img src={movie.poster} alt={movie.title} width="300" />
      <h1>{movie.title}</h1>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p>{movie.overview}</p>
      <h3>Streaming on</h3>
      
            {movie.wat && (
              <button
                className="trailer-btn"
                onClick={() => window.open(movie.wat, "_blank")}
              >
                ▶ Watch Trailer
              </button>
            )}
    </div>
  );
}

export default Movie;