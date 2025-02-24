import { Route, Routes, Navigate } from 'react-router-dom';
import { Movies } from '../movies/pages/Movies';
import { TVShows } from '../movies/pages/TVShows';
import { People } from '../movies/pages/People';
import { More } from '../movies/pages/More';
import { MovieDetails } from '../movies/pages/MovieDetails';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/movies" element={<Movies/>}/>
            <Route path='/tv-shows' element={<TVShows/>}/>
            <Route path='/people' element={<People/>}/>
            <Route path='/more' element={<More/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>} />

            <Route path='/' element={<Navigate to={'/movies'}/>}/>
        </Routes>
    </>
  );
};
