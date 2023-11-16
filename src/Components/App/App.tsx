import AddMovieForm from '../AddMovieForm/AddMovieForm';
import MovieContainer from '../MovieContainer/MovieContainer';
import {useState, useEffect} from 'react';
import {MovieProps} from '../../types';

const App = () => {
  const [movieList, setMovieList] = useState<MovieProps[]>([]);

  const deleteMovieItem = (id) => {
    const updatedListMovie = movieList.filter((movie) => movie.id !== id);
    setMovieList(updatedListMovie);
  };

  const addMovieItem = (titleMovie: MovieProps) => {
    setMovieList((prevState) => ([titleMovie, ...prevState]));
  };

  const changeMovieItem = (id: number, name: string) => {
    setMovieList((prevState) =>
      prevState.map((item) => (item.id === id ? {...item, name: name} : item))
    );
  };

  return (
    <>
      <AddMovieForm onSubmit={addMovieItem}/>
      <MovieContainer movieList={movieList} onDelete={deleteMovieItem} changeItem={changeMovieItem}/>
    </>
  );
};

export default App;
