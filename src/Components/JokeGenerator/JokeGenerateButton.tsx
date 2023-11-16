import React from 'react';

interface Props {
  getItem: () => Promise<void | undefined>;
}

const JokeGenerateButton: React.FC<Props> = React.memo(({getItem}) => {
  const handleJokePromise = async () => {
    return await getItem()
  };

  return (
    <button className="btn btn-success" onClick={handleJokePromise}>
      Generate joke
    </button>
  );
});

export default JokeGenerateButton;