import { CircularProgressColor, Popular, Result } from '../movies/interfaces';
import { AUTH_TOKEN } from './../movies/token/auth_token';
import { fetchMovies } from './fetchMovies';
export const options: RequestInit = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`
  }
};

export const getNextMovies = async (popularMoviePage:number): Promise<Result[]> => {
    // console.log('useCallback ejecutandose');
    console.log('getNextMovies ejecutandose');
    try {
      const response = await fetchMovies<Popular>(
        options,
        `movie/popular?language=es-MX&page=${popularMoviePage}`
      );
      return response.results;
    } catch (err) {
      return [] as Result[];
    }
  };

export const getMovies = async (): Promise<Result[]> => {
    try {
      const response: Popular = await fetchMovies<Popular>(
        options,
        'movie/popular?language=es-MX&page=1'
      );
      return response.results;
    } catch (err) {
      // setError('Failed to fetch movies'); // Maneja errores
      return [] as Result[];
    }
  };

  export const setObserver = (observerActive:boolean, updateUI: () => void) => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) console.log('Intersecting');
      if (entry.isIntersecting && observerActive) {
        updateUI();
      }
    }, {
      root: null,
      threshold: 1.0
    });
    return {
      observer
    };
  };

  export const getColorByRating = (vote_average: number): CircularProgressColor => {
      if (vote_average >= 7) {
        return { base: 'green', light: 'rgba(0, 128, 0, 0.2)' };
      } else if (vote_average >= 4) {
        return { base: 'yellow', light: 'rgba(255, 255, 0, 0.2)' };
      } else {
        return { base: 'red', light: 'rgba(255, 0, 0, 0.2)' };
      }
    };