import React from 'react';
import {MovieProps} from '../../types';
import MovieItem from './MovieItem';

interface Props {
  movieList: MovieProps[];
  onDelete: () => void;
}

const MovieContainer: React.FC<Props> = ({movieList, onDelete}) => {

  return (
    <section>
      {movieList.map((movie) => (
          <MovieItem key={movie.id} movie={movie} deleteItem={onDelete}/>
        ))}
    </section>
  );
};

export default MovieContainer;