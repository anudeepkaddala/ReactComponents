import React, { useEffect, useState } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch a joke
  const fetchJoke = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();

      setJoke(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch joke 😢');
      setLoading(false);
    }
  };

  // Fetch a joke when component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <h1>JokeFetcher Component</h1>
      <button onClick={fetchJoke}>Next Joke</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && joke && (
        <>
          <p><strong>Setup:</strong> {joke.setup}</p>
          <p><strong>Punchline:</strong> {joke.punchline}</p>
        </>
      )}
    </>
  );
};

export default JokeFetcher;
