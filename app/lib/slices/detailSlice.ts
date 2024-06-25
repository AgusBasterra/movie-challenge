import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movie, SingleMovie } from '../interfaces/moviesTypes';
import apiGet from '../apiGet';

interface MoviesState {
  movie?: SingleMovie;
  recommendations?: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MoviesState = {
  status: 'idle',
  error: null,
};
export const fetchMovie = createAsyncThunk('detail/fetchMovie', async (movieId: string) => {

  const movie = await apiGet.getMovie(movieId);
  const recommendations = await apiGet.getRecommendations(movieId);
  return { movie, recommendations };
});

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload.movie;
        state.recommendations = action.payload.recommendations;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
})

export default detailSlice.reducer;

