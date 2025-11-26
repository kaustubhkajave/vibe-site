import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Navbar />
      
      {/* Hero Header Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/50 to-gray-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            See the World in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">New Light</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
            Professional photography specializing in urban landscapes, emotive portraits, and cinematic storytelling.
          </p>
          <a 
            href="#gallery"
            className="inline-block border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 uppercase tracking-widest text-sm"
          >
            View Portfolio
          </a>
        </div>
      </header>

      <main>
        <Gallery />
        <About />
        <Contact />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;