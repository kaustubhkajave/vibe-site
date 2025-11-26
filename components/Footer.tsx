import React from 'react';
import { Instagram, Twitter, Linkedin, Camera } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center space-x-2">
          <Camera className="text-teal-500" size={24} />
          <span className="text-xl font-bold text-gray-200">LUMINA LENS</span>
        </div>

        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Alex Photography. All rights reserved.
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;