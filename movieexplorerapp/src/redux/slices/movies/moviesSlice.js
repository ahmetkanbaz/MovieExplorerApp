import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  loading: false,
  error: null
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setMovies: (state, action) => {
      state.loading = false
      state.movies = action.payload
    },
    setError: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {setLoading, setMovies, setError} = moviesSlice.actions

export default moviesSlice.reducer