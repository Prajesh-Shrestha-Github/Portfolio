import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
