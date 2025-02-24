// const API_URL = 'https://api.themoviedb.org/3/movie/popular?language=es-MX&page=1';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchMovies = async <T>(options: RequestInit, path: string): Promise<T> => {
  try {
    console.log(`Dirección: ${BASE_URL}${path}`);
    const response = await fetch(`${BASE_URL}${path}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log('Las peliculas desde otro archivo', data);
    return data as T;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Repropaga el error si es necesario manejarlo más arriba
  }
};

export {
    fetchMovies
};