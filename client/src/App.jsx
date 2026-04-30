import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AppShowcase from './components/AppShowcase';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <HeroSection />
        <AppShowcase />
      </main>
    </div>
  );
}

export default App;
