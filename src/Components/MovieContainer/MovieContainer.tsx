import React from 'react';
import {MovieProps} from '../../types';
import MovieItem from './MovieItem';

interface Props {
  movieList: MovieProps[];
  onDelete: (id: number) => void;
  changeItem: (id: number, name: string) => void;
}

const MovieContainer: React.FC<Props> = ({movieList, onDelete, changeItem}) => {

  return (
    <section className="container-fluid d-flex flex-sm-column">
      {movieList.map((movie, index) => (
        <MovieItem
          index={index}
          key={movie.id}
          movie={movie}
          deleteItem={onDelete}
          changeItem={changeItem}
        />
      ))}
    </section>
  );
};

export default MovieContainer;