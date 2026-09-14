import { popularMovies } from "../../utils.js";

function PopularMovies() {
  return (
    <section className="movie-section">

      <div className="section-header">

        <h2>
          Popular Movies
        </h2>

        <span>
          GLOBAL TOP RATED
        </span>

      </div>


      <div className="movie-grid">

        {popularMovies.map((movie) => (

          <div
            className="movie-wrapper"
            key={movie.title}
          >

            <div
              className={`movie-card ${movie.className}`}
            >

              <div className="movie-poster">

                <h3>
                  {movie.title}
                </h3>

              </div>

            </div>


            <h3 className="movie-title">
              {movie.title}
            </h3>


            <p className="movie-info">
              {movie.genre} • {movie.year}
            </p>


            <p className="rating">
              ★ {movie.rating}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PopularMovies;