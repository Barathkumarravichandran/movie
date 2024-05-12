import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
