import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import Movielist from '../component/Movielist';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setMovies } from '../movieSlice';
import axios from 'axios';

const { Search } = Input;

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movie.movies);

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://search.imdbot.workers.dev/?q=${searchText}`);
        dispatch(setMovies(response.data.description));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [dispatch, searchText]);

  return (
    <div className='appBody'>
      <div className="title_section">
        <h2>List of Movies</h2>
        {/* Search Input */}
        <Search
          placeholder="Search movies"
          allowClear
          onChange={(e) => handleSearch(e.target.value)}
          className='searchInput'
        />
      </div>
      <ul className='movieList'>
        {/* Pass searchText to Movielist */}
        <Movielist movies={movies} />
      </ul>
    </div>
  );
};

export default Home;
