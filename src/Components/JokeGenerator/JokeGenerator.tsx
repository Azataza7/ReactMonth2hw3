import React, {useState} from 'react';
import JokeGenerateButton from './JokeGenerateButton';
import {JokeProps} from '../../types';

const JokeGenerator = () => {
  const url = 'https://v2.jokeapi.dev/joke/Any';
  const [joke, setJoke] = useState<JokeProps>(null);

  const getJoke = async () => {
    const response = await fetch(url);
    const result = response.ok ? await response.json() : response.status;
    setJoke(result);
  };

  return (
    <div className="mt-3">
      <JokeGenerateButton getItem={() => getJoke()}/>
      {joke && (
        <div className="col-sm-4 mb-2 mb-sm-0 mt-2">
          <div className="card">
            <div className="card-body">
              <span className="category d-block text-end mb-2">Category: {joke.category}</span>
              <p className="card-title">{joke.setup}</p>
              <h4 className="card-text">{joke.delivery || joke.joke}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JokeGenerator;