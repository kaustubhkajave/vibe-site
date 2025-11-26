import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-black/50 flex flex-col lg:flex-row items-center gap-12 border border-gray-700">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Capturing Moments in <span className="text-teal-400">Teal & Shadow</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I'm Alex. I am a photographer obsessed with the quiet moments in chaotic cities. My work focuses on finding beauty in the mundane, utilizing a distinctive color palette that emphasizes mood and atmosphere.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With over a decade of experience behind the lens, I've worked with brands and individuals who want to tell a deeper story. Whether it's a neon-soaked street or a silent misty morning, I bring a cinematic quality to every shot.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 text-teal-300 font-medium">
                Portrait
              </div>
              <div className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 text-teal-300 font-medium">
                Urban
              </div>
              <div className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 text-teal-300 font-medium">
                Editorial
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
              <img 
                src="https://picsum.photos/800/800?random=99" 
                alt="Photographer Portrait" 
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;