'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ParticleCard } from './MagicBento';
import ShinyText from './ShinyText';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Critly',
      category: 'Mobile App',
      image: 'p-img-1.png',
      bgColor: 'bg-purple-600'
    },
    {
      id: 2,
      title: 'Tenato',
      category: 'Web Design',
      image: 'p-img-2.png',
      bgColor: 'bg-lime-400'
    },
    {
      id: 3,
      title: 'Santa',
      category: 'Mobile App & Branding',
      image: 'p-img-3.png',
      bgColor: 'bg-blue-500'
    },
    {
      id: 4,
      title: 'Crint',
      category: 'Mobile App',
      image: 'p-img-4.jfif',
      bgColor: 'bg-orange-400'
    }
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex justify-between items-start mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div>
            <div className="inline-block px-6 py-2 mb-4 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', borderRadius: '10px' }}>
              <ShinyText text="Projects" className="text-2xl font-bold" speed={3} />
            </div>
            <p className="text-gray-700 max-w-md leading-relaxed">
              As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.
            </p>
          </div>
          <button className="text-gray-900 font-semibold flex items-center gap-2 hover:text-orange-400 transition-colors duration-300">
            More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {/* Project Card */}
              <ParticleCard
                className="group cursor-pointer"
                glowColor="132, 0, 255"
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                particleCount={12}
              >
                {/* Image Container */}
                <div className={`${project.bgColor} rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8 mb-4 transition-transform duration-300 group-hover:scale-[1.02]`}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Placeholder for project image */}
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.title}
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </ParticleCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
