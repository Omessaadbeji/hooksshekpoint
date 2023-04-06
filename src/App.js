import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { Data } from "./Data";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
function App() {
  const [movies, setMovies] = useState(Data);
  const [byName, setByName] = useState("");
  const [byRate, setByRate] = useState(0);
  const Add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const deleteMovie = (title) => {
    const newList = movies.filter((el) => el.title !== title);
    setMovies(newList);
    console.log(title);
  };
  return (
    <div>
      <SearchBar setByName={setByName} setByRate={setByRate} />
      <MovieList
        deleteMovie={deleteMovie}
        movies={movies}
        byName={byName}
        byRate={byRate}
      />
      <AddMovie Add={Add} />
    </div>
  );
}

export default App;
