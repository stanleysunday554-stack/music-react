
import Header from "./components/header.jsx";

import FeaturedMovies from "./components/featuremovies.jsx";

import PopularMovies from "./components/popularmovies.jsx";

import Categories from "./components/categories.jsx";

import AllMovies from "./components/allmovies.jsx";
import "./index.css";


function App() {
  return (  <div className="app">

   
      <Header />

      <main className="container">

        <FeaturedMovies />

        <PopularMovies />

        <Categories />

        <AllMovies />

      </main>

    </div>
  );
}

export default App;