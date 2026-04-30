import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-[1200px] mx-auto font-body">
      <div className="flex items-center">
        <img src="/image.png" alt="Olive Logo" className="h-12 w-auto object-contain" />
      </div>
      
      <ul className="flex gap-8 items-center">
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

      <div className="flex items-center gap-6">
        <a href="#signin" className="font-medium text-[0.95rem] hover:opacity-70 transition-opacity duration-200">Sign in</a>
        <button className="bg-darkOlive text-white py-3 px-5 rounded-full font-medium text-[0.95rem] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#3e5224] flex items-center gap-1">Get Olive &rarr;</button>
      </div>
    </nav>
  );
};

export default Navbar;
