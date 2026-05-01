import React from 'react';
import avatarImg from '../assets/avatars.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center mt-20 pb-16 max-w-[1200px] mx-auto px-8 animate-fade-up">
      <div className="flex items-center gap-4 mb-8 delay-100">
        <img src={avatarImg} alt="Trusted Users" className="h-8 w-auto object-contain rounded-2xl" />
        <span className="text-[0.9rem] text-textMuted font-medium">Trusted by thousands of healthy families</span>
      </div>
      
      <h1 className="text-4xl sm:text-[3.5rem] md:text-[5.5rem] font-semibold text-darkOlive leading-[1.1] md:leading-[1.05] mb-6 delay-200 px-2">
        The Safest Way to<br className="hidden md:block" />Shop for Groceries
      </h1>
      
      <p className="text-base sm:text-[1.125rem] text-textMuted font-normal leading-[1.6] mb-10 delay-300 max-w-2xl px-2">
        Use the Olive Food Scanner App to Instantly Eliminate<br className="hidden md:block"/>
        Harmful Ingredients from Your Family's Diet and Get<br className="hidden md:block"/>
        Expert-Backed Food Insights
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 delay-300 w-full sm:w-auto px-4 sm:px-0">
        <button className="w-full sm:w-auto bg-darkOlive text-white py-4 px-6 rounded-full font-medium text-base flex justify-center items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90">
          <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 24 184.8 8 274.1c-19 119.3 54.3 234.3 129.5 241 33.6 3 60.1-23.7 93.3-24 33.1-.3 57.6 24 93.9 23.3 49.3-1 92.4-78.2 110.1-137.9-57-23.2-117.8-59-116.1-107.8zM256.4 105.7c22.5-27.9 35.5-62 31.5-98.3-33 1.9-70.3 22.9-94.4 52-21 25.4-36.6 60.2-31.5 95.8 36.5 2.1 72.3-21 94.4-49.5z"/>
          </svg>
          Download for iOS
        </button>
        <button className="w-full sm:w-auto text-textMain font-semibold text-base transition-opacity duration-200 hover:opacity-70 flex justify-center items-center py-2">
          Join the Olive Community &rarr;
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
