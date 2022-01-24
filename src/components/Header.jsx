import React from 'react';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
      <header className=' py-9'>
          <div className="md:container md:mx-auto px-4">
              <div className="flex justify-between items-center">
              <Logo />
              <Navbar />
              </div>
          </div>
      </header>
  );
};
