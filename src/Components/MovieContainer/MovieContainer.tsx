import React from 'react';
import {MovieProps} from '../../types';
import MovieItem from './MovieItem';

interface Props {
  movieList: MovieProps[];
}

const MovieContainer: React.FC<Props> = ({movieList}) => {

  return (
    <section>
      {movieList.map((movie) => (
        <MovieItem key={movie.id} movieList={movie}/>
      ))}
    </section>
  );
};

export default MovieContainer;