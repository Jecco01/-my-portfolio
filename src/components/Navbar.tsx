import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-blue-600 flex items-center px-4  relative top-0">
        <Link className="text-white text-lg font-bold hover:text-blue-300 transition-colors" href="/">ANIPHIC LAB&trade;</Link>

    </nav>
  )
}

export default Navbar
