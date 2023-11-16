import React from 'react';
import {MovieProps} from '../../types';

interface Props {
  movieList: MovieProps;
}

const MovieItem:React.FC<Props> = ({movieList}) => {
  return (
    <div>
      <input type="text" defaultValue={movieList.name}/>
    </div>
  );
};

export default MovieItem;