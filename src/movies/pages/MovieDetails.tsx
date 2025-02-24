import { Header } from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { Submenu } from '../../components/Submenu/Submenu';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../../helpers/fetchMovies';
import { options } from '../../helpers/movies';
import { ImagesRequest } from '../interfaces/Images';
import { MovieProviders } from '../interfaces/MovieProvider';
import { Result } from '../interfaces';
import { AverageBig } from '../components/AverageBig/AverageBig';
type MovieDetailParams = {
    id: string | undefined;
  };
  // export const options: RequestInit = {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${AUTH_TOKEN}`
  //   }
  // };
export const MovieDetails = () => {
    const { id } = useParams<MovieDetailParams>();
    const principalMenu: string[] = ['Vista general', 'Multimedia', 'Fandom', 'Compartir'];
    const [visibleMenu, setVisibleMenu] = useState<string | null>(null);
    const [poster, setPoster] = useState<string>('');
    const [backdrop, setBackdrop] = useState<string>('');
    const [movieDetails, setMovieDetails] = useState<Result>({} as Result);
    const submenus: Record<string, string[]> = {
        'Vista general': ['Principal', 'Títulos alternativos', 'Reparto y equipo', 'Fechas de estreno', 'Traducciones', 'Ver ahora', '', 'Cambios', 'Informar', 'Editar'],
        Multimedia: ['Imágenes de fondo', 'Logos', 'Carteles', 'Videos'],
        Fandom: ['Debates', 'Reseñas'],
        Compartir: ['Compartir enlace', 'Facebook', 'Tweet'],
      };
      const submenuStyles = 'absolute bg-white pt-[17px] pb-[17px] pl-[17px] pr-[58px] rounded-[7px] shadow-[0_1px_2px_rgba(0,0,0,0.2)] left-[12px] top-[40px] hidden z-[2000]    group-hover:block';
      useEffect(() => {
        const getMovieDetails = async () => {
          try {
            const movieData = await fetchMovies<Result>(options, `movie/${id}?language=es-MX`);
            setMovieDetails(movieData);
            console.log('MOVIE DATA:', movieData);
          } catch (error) {
            console.error('Error al obtener los detalles de la película:', error);
          }
        };
    
        if (id) {
          getMovieDetails();
        }
      }, [id]);
      useEffect(() => {
        const getImages = async () => {
            const imageMovies = await fetchMovies<ImagesRequest>(options, `movie/${id}/images`);
            console.log('Imágenes....',`https://image.tmdb.org/t/p/w500${imageMovies.posters[0].file_path}`);
            console.log('Backdrops....', `https://image.tmdb.org/t/p/w500${imageMovies.backdrops[0].file_path}`);
            setPoster(`https://image.tmdb.org/t/p/w500${imageMovies.posters[0].file_path}`);
            setBackdrop(`https://image.tmdb.org/t/p/w500${imageMovies.backdrops[0].file_path}`);
            console.log(`MOVIE ID: ${id}`);
            const movieProvidersRequest = await fetchMovies<MovieProviders>(options, `movie/${id}/watch/providers`);
            console.log('Proveedores....', movieProvidersRequest);
        };
        getImages();
      },[id]);
    const handleMouseEnter = (menuName: string) => {
        setVisibleMenu(menuName);
      };
    const handleMouseLeave = () => {
        setVisibleMenu(null);
    };
  return (
    <>
        <Header />
        <div>
            <ul className='flex justify-between mb-5 list-none m-0 p-0 max-w-[40%] mx-auto'>
                {
                    principalMenu.map((menu, index) => {
                        return <li key={index} className='px-5 py-[10px] font-sans text-[18px] tracking-[0.5px] relative cursor-pointer group' onMouseEnter={() => handleMouseEnter(menu)} onMouseLeave={() => handleMouseLeave()}>
                            {menu}
                            <Submenu submenuItems={submenus[menu]} styles={submenuStyles} />
                            </li>;
                    })
                }
            </ul>
        </div>
        {/* movie-details */}
        <div className="h-[800px] grid grid-cols-[3fr_8fr] bg-[url('https://image.tmdb.org/t/p/w500/9nhjGaFLKtddDPtPaX5EmKqsWdH.jpg')] bg-no-repeat bg-[80%_100%] bg-right"
        // style={{ backgroundImage: `url(${backdrop})` }}
        >
            <div>
              {/* Poster */}
                <img 
                  className='mt-10 rounded-[13px] max-w-[400px] relative left-5'
                  src={poster} 
                  alt={'Movie Poster'}
                />
            </div>
            <div className='pl-[60px] bg-violet-500'>
              <h2>Kraven the Hunter (2024)</h2>
              <p>B-15
                11/12/2024 (MX)
                Acción, Aventura, Suspense
                2h 6m</p>
                <div className='relative flex items-center'>
                  <AverageBig {...movieDetails} />
                  <span className='text-xl font-sans font-bold text-white inline-block max-w-[110px] leading-[1.5] ml-[6px]'>Puntuación de usuarios</span>

                  <ul className='list-none m-0 p-0 ml-5'>
                    <li className='relative inline-block bg-[#000] rounded-full w-[39px] h-[39px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.3] hover:z-[1000] not-first:-ml-[10px]'><img className='w-[32px] h-[32px] absolute top-[calc((39px-32px)/2)] left-[calc((39px-32px)/2)]' src="/src/assets/images/face-heart.svg" alt="Face Heart" /></li>
                    <li className='relative inline-block bg-[#000] rounded-full w-[39px] h-[39px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.3] hover:z-[1000] not-first:-ml-[10px]'><img className='w-[32px] h-[32px] absolute top-[calc((39px-32px)/2)] left-[calc((39px-32px)/2)]' src="/src/assets/images/face-smile.svg" alt="Face Smiling" /></li>
                    <li className='relative inline-block bg-[#000] rounded-full w-[39px] h-[39px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.3] hover:z-[1000] not-first:-ml-[10px]'><img className='w-[32px] h-[32px] absolute top-[calc((39px-32px)/2)] left-[calc((39px-32px)/2)]' src="/src/assets/images/face-blow.svg" alt="Face Blowing" /></li>
                  </ul>

                  <div className='bg-[#032541] rounded-[40px] flex h-[50px] justify-center items-center gap-[5px] px-[10px] cursor-pointer ml-[21px] transition-transform duration-300 ease-in-out hover:scale-105'>
                    <span className='text-white font-arial font-bold text-[19px]'>¿Cuál es tu <span className='border-b-[3px] border-b-[#01B4E4] pb-0'>vibra</span>?</span>
                    <span className='inline-blok w-[20px] h-[20px] bg-info-icon invert'></span>
                  </div>
                </div>
                <div className='flex items-center mt-[13px]'>
                    <div className='flex justify-center items-center bg-[#032541] rounded-full w-[60px] h-[60px] cursor-pointer'><span className='inline-block w-[20px] h-[20px] bg-list-icon'></span></div>
                    <div className='flex justify-center items-center bg-[#032541] rounded-full w-[60px] h-[60px] cursor-pointer ml-[20px]'><span className='inline-block w-[20px] h-[20px] bg-heart-icon'></span></div>
                    <div className='flex justify-center items-center bg-[#032541] rounded-full w-[60px] h-[60px] cursor-pointer ml-[20px]'><span className='inline-block w-[20px] h-[20px] bg-following-icon'></span></div>
                    <div className='ml-7 flex items-center gap-1 h-6 cursor-pointer group'>
                      <svg className="inline-block w-[29px] h-[29px] bg-[url('/src/assets/images/play.svg')] bg-no-repeat bg-[100%_100%] fill-white" id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path className='group-hover:fill-[rgb(185,185,185)]' id="play" d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"/>
                      </svg>
                      <p className='inline-block m-0 p-0 font-sans font-bold text-white text-[17px]  group-hover:text-[rgb(185,185,185)]'>Reproducir tráiler</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
