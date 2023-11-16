import AddMovieForm from '../AddMovieForm/AddMovieForm';
import MovieContainer from '../MovieContainer/MovieContainer';
import {useState} from 'react';

const App = () => {
  const [movieList, setMovieList] = useState([
    {name: 'Wolf of the Wall street', id: 1},
    {name: 'Once upon time in Hollywood', id: 2},
    {name: 'Movie', id: 3},
  ]);

  const deleteMovieItem = (id) => {
    const updatedListMovie = movieList.filter((movie) => movie.id !== id);
    setMovieList(updatedListMovie);
  };

  return (
    <>
      <AddMovieForm/>
      <MovieContainer movieList={movieList} onDelete={deleteMovieItem}/>
    </>
  );
};

export default App;
