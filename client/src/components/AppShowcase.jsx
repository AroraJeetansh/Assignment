import React from 'react';
import showcaseImg from '../assets/app_mockup.png';

const AppShowcase = () => {
  return (
    <section className="flex justify-center items-center mt-16 pb-20 relative max-w-[1200px] mx-auto px-8 animate-fade-up delay-300">
      <div className="relative flex justify-center items-center max-w-[800px] w-full">
        <div className="w-[320px] h-[650px] bg-white rounded-[40px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),0_0_2px_rgba(0,0,0,0.05)] p-2 relative z-10 overflow-hidden border-4 border-[#F0F2ED] transition-transform duration-300 hover:-translate-y-[5px]">
          <div className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-[20px] z-20"></div>
          <img src={showcaseImg} alt="App UI Showcase" className="w-full h-full object-cover rounded-[32px]" />
        </div>
        
        <div className="hidden md:block absolute w-[280px] h-[560px] bg-white/40 rounded-[32px] backdrop-blur-[8px] border-2 border-white/60 z-0 left-[10%] shadow-[-10px_20px_30px_rgba(0,0,0,0.05)] [transform:perspective(800px)_rotateY(15deg)_scale(0.9)]"></div>
        <div className="hidden md:block absolute w-[280px] h-[560px] bg-white/40 rounded-[32px] backdrop-blur-[8px] border-2 border-white/60 z-0 right-[10%] shadow-[10px_20px_30px_rgba(0,0,0,0.05)] [transform:perspective(800px)_rotateY(-15deg)_scale(0.9)]"></div>
      </div>
    </section>
  );
};

export default AppShowcase;
