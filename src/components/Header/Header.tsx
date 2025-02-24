// import React from 'react'
//  import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Submenu } from '../Submenu/Submenu';

export const Header: React.FC = () => {
  const moviesSubmenu: string[] = ['Popular', 'En cartelera', 'Próximamente', 'Mejor puntuadas'];
  const tvShowsSubmenu: string[] = ['Popular', 'Se emiten hoy', 'En televisión', 'Mejor valoradas'];
  const peopleSubmenu: string[] = ['Gente popular'];
  const moreSubmenu: string[] = ['Debates', 'Tabla de clasificación', 'Soporte', 'API'];
  const submenuStyles = 'absolute bg-white pt-[17px] pb-[17px] pl-[17px] pr-[58px] rounded-[7px] shadow-[0_1px_2px_rgba(0,0,0,0.2)] left-[-7px] top-[27px] hidden z-[2000]    group-hover:block';

  return (
    // <header className="header">
    <header className="bg-[rgb(3,37,65)]">
        <div className="w-[93%] flex justify-between mx-auto py-[25px]">
            <nav className="flex gap-[25px] items-center">
                <img src="/src/assets/images/logo.svg" alt="Logo"  className="max-w-[190px]"/>
                <ul className="list-none p-0 m-0 flex gap-[38px]">
                    <li className='relative group'>
                      <NavLink
                        className={'text-white font-arial text-[18px] font-bold whitespace-nowrap no-underline'} 
                        to='/movies'
                      >
                        Movies
                      </NavLink>
                    <Submenu submenuItems={moviesSubmenu} styles={submenuStyles} />
                    </li>
                    <li className='relative group'>
                      <NavLink 
                        className={'text-white font-arial text-[18px] font-bold whitespace-nowrap no-underline'} 
                        to='/tv-shows'
                      >
                        TV Shows
                      </NavLink>
                      <Submenu submenuItems={tvShowsSubmenu} styles={submenuStyles}/>
                    </li>
                    <li className='relative group'>
                      <NavLink 
                        className={'text-white font-arial text-[18px] font-bold whitespace-nowrap no-underline'} 
                        to='/people'
                      >
                        People
                      </NavLink>
                      <Submenu submenuItems={peopleSubmenu} styles={submenuStyles}/>
                    </li>
                    <li className='relative group'>
                      <NavLink 
                        className={'text-white font-arial text-[18px] font-bold whitespace-nowrap no-underline'} 
                        to='/more'
                      >
                        More
                      </NavLink>
                      <Submenu submenuItems={moreSubmenu} styles={submenuStyles}/>
                    </li>
                </ul>
            </nav>

            <div className="flex gap-[25px] items-center">
                <img src="/src/assets/images/cruz.svg" alt="Añadir"  className="w-[29px] cursor-pointer"/>
                <span className="text-white font-sans font-bold border border-white rounded-[3px] p-1.5 hover:bg-white hover:text-[rgb(3,37,65)] hover:cursor-pointer">ES</span>
                <img src="/src/assets/images/campana.svg" alt="Notificaciones" className="w-[28px] cursor-pointer"/>
                <div className="w-[42px] h-[42px] bg-white rounded-full cursor-pointer"></div>
                <img src="/src/assets/images/lupa.svg" alt="Search Icon" className='w-[37px]'/>
            </div>
        </div>
    </header>
  );
};
