import { useCallback, useEffect, useRef, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Result } from '../interfaces';
import { getNextMovies, setObserver } from '../../helpers/movies';
import { MovieCard } from '../components/MovieCard';
import { MovieFilters } from '../components/MovieFilters';

export const Movies = () => {
  const [popularMovies, setPopularMovies] = useState<Result[]>([] as Result[]);
  const [popularMoviePage, setPopularMoviePage] = useState<number>(1);
  const [observerActive, setObserverActive] = useState<boolean>(false);
  const showMoreRef = useRef<HTMLDivElement |  null>(null);
  const effectRan = useRef<boolean>(false);
  const myFunction = useCallback(async () => {
    console.log(`numero de pagina: ${popularMoviePage}`);
    const movies: Result[]= await getNextMovies(popularMoviePage);
    setPopularMovies((prev) => [...prev, ...movies]);
    setPopularMoviePage((currentPage) => ++currentPage);
  }, [popularMoviePage]);
  useEffect(() => {
    if (effectRan.current === false && popularMoviePage === 1) {
      myFunction();
      effectRan.current = true;
    }
  }, [popularMoviePage, myFunction]);
  
  useEffect(() => {
    const { observer } = setObserver(observerActive, myFunction);
    const target = showMoreRef.current;
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, [observerActive, popularMoviePage, myFunction]);  
  return (
    <>
    <Header />
    <div>
      <div className='grid grid-cols-[2fr_6fr] bg-[#fbfbfbee]'>
        <MovieFilters />
        <div className='grid grid-cols-5 gap-[25px] pt-[105px] pr-[50px]'>
          {
            popularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }
          <div className='bg-[#01B4E4] col-span-full flex justify-center items-center py-[30px] rounded-[14px] my-[20px] mb-[50px] max-h-[31px]' ref={showMoreRef}>
            <button onClick={async () => {
             const movies: Result[] = await getNextMovies(popularMoviePage);
              setPopularMovies((prev) => [...prev, ...movies]);
              setPopularMoviePage((currentPage) => ++currentPage);
              if (!observerActive) setObserverActive(true);
            }} className='text-white font-arial font-bold text-[27px] cursor-pointer hover:text-[#000]'>Mostrar más</button>
          </div>
        </div>
      </div>
      </div>
  </>
  );
};
