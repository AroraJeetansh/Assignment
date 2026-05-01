import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-[1200px] mx-auto font-body">
      <div className="flex items-center">
        <img src="/image.png" alt="Olive Logo" className="h-12 w-auto object-contain" />
      </div>
      
      <ul className="hidden lg:flex gap-8 items-center">
        <li>
          <a href="#solutions" className="text-[0.95rem] font-medium text-textMain hover:text-primary transition-colors duration-200 flex items-center gap-1">Solutions <span className="text-[0.7rem] opacity-60">v</span></a>
        </li>
        <li><a href="#features" className="text-[0.95rem] font-medium text-textMain hover:text-primary transition-colors duration-200 flex items-center gap-1">Features</a></li>
        <li><a href="#pricing" className="text-[0.95rem] font-medium text-textMain hover:text-primary transition-colors duration-200 flex items-center gap-1">Pricing</a></li>
        <li>
          <a href="#blog" className="text-[0.95rem] font-medium text-textMain hover:text-primary transition-colors duration-200 flex items-center gap-1">Blog <span className="text-[0.7rem] opacity-60">v</span></a>
        </li>
        <li><a href="#restaurants" className="text-[0.95rem] font-medium text-textMain hover:text-primary transition-colors duration-200 flex items-center gap-1">Restaurants</a></li>
        <li>
          <a href="#food" className="text-[0.95rem] font-medium text-textMain hover:text-primary transition-colors duration-200 flex items-center gap-1">Food <span className="text-[0.7rem] opacity-60">v</span></a>
        </li>
      </ul>

      <div className="hidden lg:flex items-center gap-6">
        <a href="#signin" className="font-medium text-[0.95rem] hover:opacity-70 transition-opacity duration-200">Sign in</a>
        <button className="bg-darkOlive text-white py-3 px-5 rounded-full font-medium text-[0.95rem] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#3e5224] flex items-center gap-1">Get Olive &rarr;</button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden flex flex-col gap-1.5 z-50 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bg z-40 flex flex-col pt-24 px-8 transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-6 items-start w-full">
          <li><a href="#solutions" className="text-xl font-medium text-textMain" onClick={() => setIsMenuOpen(false)}>Solutions</a></li>
          <li><a href="#features" className="text-xl font-medium text-textMain" onClick={() => setIsMenuOpen(false)}>Features</a></li>
          <li><a href="#pricing" className="text-xl font-medium text-textMain" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
          <li><a href="#blog" className="text-xl font-medium text-textMain" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
          <li><a href="#restaurants" className="text-xl font-medium text-textMain" onClick={() => setIsMenuOpen(false)}>Restaurants</a></li>
          <li><a href="#food" className="text-xl font-medium text-textMain" onClick={() => setIsMenuOpen(false)}>Food</a></li>
        </ul>
        <div className="flex flex-col gap-4 mt-8 w-full border-t border-gray-200 pt-8">
          <a href="#signin" className="font-medium text-xl w-full text-center py-3" onClick={() => setIsMenuOpen(false)}>Sign in</a>
          <button className="bg-darkOlive text-white py-4 px-5 rounded-full font-medium text-lg w-full transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Get Olive &rarr;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
