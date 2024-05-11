import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Movie {
  '#IMDB_ID': string;
  '#TITLE': string;
  '#IMG_POSTER': string;
  '#RANK': number;
}

interface Props {
  searchText: string;
}

const Movielist: React.FC<Props> = ({ searchText }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://search.imdbot.workers.dev/?q=${searchText}`);
        setMovies(response.data.description);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [searchText]);

  return (
    <>
      {movies.map((movie: Movie) => (
        <li key={movie['#IMDB_ID']} style={{ listStyleType: 'none' }}>
          <Link to={`/movies/${movie['#IMDB_ID']}`}>
            <div className="card">
              <img alt={movie['#TITLE']} src={movie['#IMG_POSTER']} style={{ maxWidth: '100%' }} />
              <div className="body_content">
                <h3>{movie['#TITLE']}</h3>
                <p>Rank: {movie['#RANK']}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Movielist;
