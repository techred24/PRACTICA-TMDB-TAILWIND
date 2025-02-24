// import React from 'react'

import { getColorByRating } from '../../../helpers/movies';
import { ResultWithClassName } from '../../interfaces';
import './_average.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Average = (movie:ResultWithClassName) => {

  return (
        <div className={'absolute z-[1000] bg-black rounded-full flex justify-center items-center w-[43px] h-[43px] -top-[21px] left-[10px]'}>
        <span className="relative text-white right-[2.5px] font-sans font-bold text-[13px]   after:content-['%'] after:text-[6px] after:absolute after:-top-[1px] after:-right-[6px]">
            {Math.round(movie.vote_average * 10)}
        </span>
        <svg width="42" height="42" viewBox="0 0 120 120" className='absolute top-[calc((43px-42px)/2)] left-[calc((43px-42px)/2)]'>
            <circle
            cx="60" cy="60" r="50"
            fill="none"
            stroke={getColorByRating(movie.vote_average).light}
            strokeWidth="10"
            ></circle>
            <circle
            cx="60" cy="60" r="50"
            fill="none"
            stroke={getColorByRating(movie.vote_average).base}
            strokeWidth="10"
            strokeDasharray="314.1592653589793" 
            strokeDashoffset={`${314.1592653589793 - ((314.1592653589793 / 100) * (Math.round(movie.vote_average * 10)))}`}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
            ></circle>
        </svg>
        </div>
  );
};
