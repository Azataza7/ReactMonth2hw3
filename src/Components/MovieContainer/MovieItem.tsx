import React from 'react';
import {MovieProps} from '../../types';

interface Props {
  movie: MovieProps;
  deleteItem: (id: number) => void;
  changeItem: (id: number, name: string) => void;
  index: number;
}

const MovieItem: React.FC<Props> = React.memo(({movie, deleteItem, changeItem, index}) => {
  return (
    <div>
      <span>Movie:#{index + 1}</span>
      <input
        className="p-1 mt-3 m-2"
        type="text"
        defaultValue={movie.name}
        onChange={(e) => changeItem(movie.id, e.target.value)}
      />
      <button type="button" className="btn btn-danger" onClick={() => deleteItem(movie.id)}>X</button>
    </div>
  );
});

export default MovieItem;