import React, {useState} from 'react';
import JokeGenerateButton from './JokeGenerateButton';

const JokeGenerator = () => {
  const url = 'https://v2.jokeapi.dev/joke/Any';
  const [joke, setJoke] = useState([])

  const getJoke = async () => {
    const response = await fetch(url);
    const result =  response.ok ? await response.json() : response.status;
    setJoke(result);
  };

  return (
    <div className="mt-3">
      <JokeGenerateButton getItem={() => getJoke()}/>
    </div>
  );
};

export default JokeGenerator;