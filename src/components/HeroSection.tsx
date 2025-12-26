'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Particles from './Particles';
import SplitText from './SplitText';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={150}
          particleSpread={8}
          speed={0.08}
          particleColors={['#F2AB01', '#01435F']}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.8}
          cameraDistance={25}
          disableRotation={false}
          className="opacity-60"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            {/* Main Headline with SplitText Animation */}
            <div className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight">
              <SplitText
                text="Websites &"
                className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900"
                tag="h1"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50, rotateX: -90 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
                threshold={0.1}
                textAlign="left"
              />
              <br />
              <SplitText
                text="Branding"
                className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800"
                tag="span"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50, rotateX: -90 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
                threshold={0.1}
                textAlign="left"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-orange-400 font-semibold text-lg tracking-wide">
                Let's Talk
              </p>
              <a
                href="mailto:info.krinetra@gmail.com"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg"
              >
                info.krinetra@gmail.com
              </a>
            </div>

            {/* Decorative Line */}
            <div className="pt-8">
              <div className="w-24 h-1 bg-black"></div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            {/* Tagline */}
            <div className="space-y-4">
              <p className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
                Powering Your Business Digitally and Driving Growth with Technology
              </p>
            </div>

            {/* Scroll Down Indicator */}
            <div className="pt-4">
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  border: '0.1px solid black',
                }}
              >
                <span 
                  className="text-lg font-bold tracking-wider"
                  style={{ color: '#C38F2F' }}
                >
                  SCROLL DOWN
                </span>
                <span style={{ color: '#C38F2F' }}>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}