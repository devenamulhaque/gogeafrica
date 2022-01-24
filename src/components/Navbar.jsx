import React from 'react';

export const Navbar = () => {
  return(
      <div className='flex items-center justify-end'>
          <ul className='nav flex items-center flex-wrap space-x-8 font-semibold'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href='#'>Project</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
          <div className="ml-8">
            <a href='#' className=' bg-orange hover:bg-orange text-white font-bold py-4 px-8 rounded-full'>
                Sign In
            </a>
          </div>
      </div>
  );
};
