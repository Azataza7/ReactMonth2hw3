import React from 'react';
import {MovieProps} from '../../types';

interface Props {
  movie: MovieProps;
}

const MovieItem:React.FC<Props> = React.memo(({movie, deleteItem}) => {
  return (
    <div>
      <input type="text" defaultValue={movie.name}/>
      <button className="delete-btn" onClick={() => deleteItem(movie.id)}>X</button>
    </div>
  );
});

export default MovieItem;