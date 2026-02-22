import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Moviecard from "./Moviecard";
import Movie from "./Movie";
import Header from "./Header";
import mockMovies from "./api.js";

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    setMovies(mockMovies || []);
  }, []);

  return (
    <Routes>

      {/* Home Page */}
      <Route
        path="/"
        element={
          <div className="container">

            <Header />

            <div className="movie-grid">

              {movies.slice(0, visibleCount).map(movie => (
                <Moviecard
                  key={movie.id}
                  movie={movie}
                  isSelected={selectedMovie?.id === movie.id}
                  onClick={() => setSelectedMovie(movie)}
                  onClose={() => setSelectedMovie(null)}
                />
              ))}

            </div>

          </div>
        }
      />

      {/* Movie Page */}
      <Route
        path="/movie/:id"
        element={<Movie movies={movies} />}
      />

    </Routes>
  );
}

export default App;