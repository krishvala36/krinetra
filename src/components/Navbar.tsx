'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import GooeyNav from './GooeyNav';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: "Service's", href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center transition-all duration-300">
      <div className="w-full px-4" style={{ maxWidth: '1400px' }}>
        <div
          className="flex items-center justify-between h-20 px-6 md:px-8 shadow-lg"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.55)',
            border: '0.8px solid rgba(255, 255, 255, 0.14)',
            borderRadius: '16px',
            backdropFilter: 'blur(9px)',
            WebkitBackdropFilter: 'blur(9px)',
            opacity: 1,
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative transition-transform duration-300 group-hover:scale-110" style={{ width: '45px', height: '45px' }}>
              <Image
                src="/krinetra-logo.png"
                alt="Krinetra Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span 
              className="font-semibold transition-colors duration-300" 
              style={{ 
                fontSize: '32px', 
                color: '#01435F',
                WebkitTextStroke: '0.8px #F7B602',
              }}
            >
              Krinetra
            </span>
          </Link>

          {/* Navigation Links with GooeyNav */}
          <div className="hidden md:flex items-center" style={{ fontSize: '20px', fontWeight: '500' }}>
            <GooeyNav
              items={navItems}
              animationTime={600}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              initialActiveIndex={-1}
            />
          </div>

          {/* CTA Button */}
          <button 
            className="text-white px-6 py-2.5 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            style={{
              fontSize: '18px',
              fontWeight: '600',
              backgroundImage: 'linear-gradient(135deg, #5E94FF, #164952)',
              border: '1px solid #164952',
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
            }}
          >
            Get Now
          </button>
        </div>
      </div>
    </nav>
  );
}
