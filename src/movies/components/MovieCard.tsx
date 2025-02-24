import { Result } from '../interfaces';
// import { Average } from './Average';
import { useNavigate } from 'react-router-dom';
import { Average } from './Average/Average';

interface MovieCardProps {
    movie: Result,
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  return (
          <div onClick={() => {
            navigate(`/movie/${movie.id}`);
          }} key={movie.id} className='flex flex-col h-auto bg-white rounded-[9px] overflow-hidden cursor-pointer'>
            <div className='relative h-[290px]'>
                <div className="absolute w-[30px] h-[30px] top-[13px] right-[13px] bg-[url('/src/assets/images/options-icon.svg')] bg-no-repeat bg-[100%_100%] cursor-pointer  hover:bg-[url('/src/assets/images/options-icon-blue.svg')]"></div>
                <img 
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                  alt={movie.title} 
                  className='block h-full w-full object-cover'
                />
            </div>
            <div className='relative px-[5px] pt-[37px] pl-[10px] pb-[15px] grow'>
              <h3 className='font-sans font-bold text-xl m-0 mb-[6px]'>{movie.title}</h3>
              <p className='font-sans text-[18px] m-0 text-[#666666]'>
                {
                new Intl.DateTimeFormat('es-ES', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }).format(new Date(movie.release_date))
                }
              </p>
              {/* <Average {...movie} /> */}
              <Average {...movie} className={'average--small movie-card__average'} />
            </div>
          </div>
  );
};