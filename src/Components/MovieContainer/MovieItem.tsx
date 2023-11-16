import React from 'react';
import {MovieProps} from '../../types';

interface Props {
  movie: MovieProps;
  deleteItem: (id: number) => void;
}

const MovieItem: React.FC<Props> = React.memo(({movie, deleteItem}) => {
  return (
    <div>
      <input type="text" defaultValue={movie.name}/>
      <button type="button" className="delete-btn" onClick={() => deleteItem(movie.id)}>X</button>
    </div>
  );
});

export default MovieItem;