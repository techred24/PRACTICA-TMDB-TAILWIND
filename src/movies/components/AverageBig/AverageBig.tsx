// import React from 'react'

import { getColorByRating } from '../../../helpers/movies';
import { ResultWithClassName } from '../../interfaces';
import './_averagebig.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AverageBig = (movie:ResultWithClassName) => {
  return (
        <div className='relative z-[1000] bg-black rounded-full inline-block w-[78px] h-[78px]'>
        <div className='flex h-full justify-center items-center'>
          <span className="text-[#fff] right-[2.5px] font-arial font-bold text-[24px] after:content-['%'] after:text-[9px] after:absolute after:top-[27px] after:right-[18px]">
              {Math.round(movie.vote_average * 10)}
          </span>
        </div>
        <svg width="77" height="77" viewBox="0 0 120 120" className='absolute top-[calc((78px-77px)/2)] left-[calc((78px-77px)/2)]'>
            <circle
            cx="60" cy="60" r="50"
            fill="none"
            stroke={getColorByRating(movie.vote_average).light}
            strokeWidth="8"
            ></circle>
            <circle
            cx="60" cy="60" r="50"
            fill="none"
            stroke={getColorByRating(movie.vote_average).base}
            strokeWidth="8"
            strokeDasharray="314.1592653589793" 
            strokeDashoffset={`${314.1592653589793 - ((314.1592653589793 / 100) * (Math.round(movie.vote_average * 10)))}`}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
            ></circle>
        </svg>
        </div>
  );
};
