import React, { useState } from 'react';
import { Input } from 'antd';
import Movielist from '../component/Movielist';

const { Search } = Input;

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

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
        <Movielist searchText={searchText} />
      </ul>
    </div>
  );
};

export default Home;
