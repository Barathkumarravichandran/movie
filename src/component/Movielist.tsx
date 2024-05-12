import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  '#IMDB_ID': string;
  '#TITLE': string;
  '#IMG_POSTER': string;
  '#RANK': number;
  '#AKA': string;
  '#ACTORS': string;
  '#YEAR': number;
  '#IMDB_URL': string;
}

interface Props {
  movies: Movie[];
}

const Movielist: React.FC<Props> = ({ movies }) => {
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
