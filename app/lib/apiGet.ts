import { Movie, Movies, ServerParams, SingleMovie } from "./interfaces/moviesTypes";
import axios from 'axios';

interface APIGet {
    getMovies: ({searchParams}: ServerParams) => Promise<Movies>;
    getMovie: (id: string) => Promise<SingleMovie>;
    getRecommendations: (id: string) => Promise<Movie[]>;
}

const MAX_RECOMMENDATIONS_LENGTH = 4

const apiGet: APIGet = {
  getMovies: async ({searchParams}) => {
    const buildURL = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`);
    const buildParams = new URLSearchParams("");

    if (searchParams.page){
      buildParams.set('page', searchParams.page);
    };

    if (searchParams.query){
      buildParams.set('query', searchParams.query);
      buildURL.pathname = buildURL.pathname + "/search/movie";
    } else {
      buildURL.pathname = buildURL.pathname + "/movie/popular";
    }

    try {
        const response = await axios({
          url: `${buildURL}?${buildParams}`,
          headers: { 
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_THEMDB_TOKEN}`,
            'Cache-Control': 'no-cache',
          },
        });
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error('Error while fetching movies');
        }
      } catch (error) {
        console.log('Error while fetching movies:', error);
        return {} as Movies;
      }

  },
  getMovie: async (id) => {
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}`,
        headers: { 
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_THEMDB_TOKEN}`,
          'Cache-Control': 'no-cache',
        },
      });
      if (response.status === 200) {
        const result: SingleMovie = await response.data
        return result;

      } else {
        throw new Error('Error while fetching movies');
      }
    } catch (error) {
      console.log('Error while fetching movies:', error);
      return {} as SingleMovie
    }
  },
  getRecommendations: async (id) => {
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}/recommendations`,
        headers: { 
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_THEMDB_TOKEN}`,
          'Cache-Control': 'no-cache',
        },
      });
      if (response.status === 200) {
        const result = await response.data
        return result.results.slice(0, MAX_RECOMMENDATIONS_LENGTH);

      } else {
        throw new Error('Error while fetching recommendations');
      }
    } catch (error) {
      console.log('Error while fetching recommendations:', error);
      return {} as Movie
    }
  }
};

export default apiGet;