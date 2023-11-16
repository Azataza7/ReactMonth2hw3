import React, {useState} from 'react';
import {MovieProps} from '../../types';

interface Props {
  onSubmit: (movie: MovieProps) => void;
}

const AddMovieForm: React.FC<Props> = ({onSubmit}) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item.trim() !== '') {
      const newMovie: MovieProps = {
        name: item,
        id: Math.random()
      };
      onSubmit(newMovie);
      setItem('');
    }
  };

  return (
    <form className="form-control d-flex" onSubmit={handleSubmit}>
      <input
        className="p-1 w-75 m-1"
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}/>
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default AddMovieForm;