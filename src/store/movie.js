import { Store } from '../core/jyang';

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: 'Search for the movie title!',
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = '';
  }
  try {
    const res = await fetch(`https://www.omdbapi.com/?s=${store.state.searchText}&page=${page}&apikey=94be96ac`);
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === 'True') {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.error('searchMovies error: ', error);
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=94be96ac`);
    store.state.movie = await res.json();
  } catch (error) {
    console.log('getMovieDetails error: ', error);
  }
};
