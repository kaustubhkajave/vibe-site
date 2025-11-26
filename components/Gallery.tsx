import React, { useState } from 'react';
import { Photo } from '../types';
import { ZoomIn } from 'lucide-react';

const SAMPLE_PHOTOS: Photo[] = [
  { id: 1, url: 'https://picsum.photos/800/1200?random=1', title: 'Urban Solitude', category: 'Urban', heightClass: 'aspect-[2/3]' },
  { id: 2, url: 'https://picsum.photos/800/600?random=2', title: 'Midnight City', category: 'Landscape', heightClass: 'aspect-[4/3]' },
  { id: 3, url: 'https://picsum.photos/800/800?random=3', title: 'Teal Gaze', category: 'Portrait', heightClass: 'aspect-square' },
  { id: 4, url: 'https://picsum.photos/800/1000?random=4', title: 'Rain Reflections', category: 'Urban', heightClass: 'aspect-[4/5]' },
  { id: 5, url: 'https://picsum.photos/800/500?random=5', title: 'Neon Nights', category: 'Landscape', heightClass: 'aspect-[16/9]' },
  { id: 6, url: 'https://picsum.photos/800/1200?random=6', title: 'Silent Observer', category: 'Portrait', heightClass: 'aspect-[2/3]' },
  { id: 7, url: 'https://picsum.photos/800/900?random=7', title: 'Concrete Dreams', category: 'Urban', heightClass: 'aspect-[4/5]' },
  { id: 8, url: 'https://picsum.photos/800/800?random=8', title: 'Abstract Flow', category: 'Art', heightClass: 'aspect-square' },
  { id: 9, url: 'https://picsum.photos/800/1100?random=9', title: 'Shadow Play', category: 'Portrait', heightClass: 'aspect-[3/4]' },
];

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Work</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Exploring the interplay of light, shadow, and color in modern environments.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {SAMPLE_PHOTOS.map((photo) => (
            <div 
              key={photo.id} 
              className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-teal-900/20 transition-all duration-500"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-teal-400 text-xs font-bold tracking-wider uppercase mb-1">{photo.category}</span>
                <h3 className="text-white text-xl font-bold">{photo.title}</h3>
                <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all delay-100 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
             <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl shadow-teal-900/20"
              onClick={(e) => e.stopPropagation()} 
            />
            <div className="mt-4 text-center">
                <h3 className="text-2xl text-white font-bold">{selectedPhoto.title}</h3>
                <p className="text-teal-400">{selectedPhoto.category}</p>
            </div>
            <button 
              className="absolute top-0 right-0 m-4 text-white hover:text-teal-400 p-2"
              onClick={() => setSelectedPhoto(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;