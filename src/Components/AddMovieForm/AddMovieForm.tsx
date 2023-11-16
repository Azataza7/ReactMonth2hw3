import React, {useState} from 'react';
import {MovieProps} from '../../types';

interface Props {
  onSubmit: ({}) => void;
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}/>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default AddMovieForm;