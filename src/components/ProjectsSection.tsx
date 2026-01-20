'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ShinyText from './ShinyText';
import { StickyScroll } from './ui/sticky-scroll-reveal';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (src: string) => {
    setModalImgSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const projects = [
    {
      title: 'Abhigyan Gurukul website & app',
      description: 'A comprehensive educational platform featuring responsive web design and mobile app development. We delivered end-to-end solutions including UI/UX design, backend development, and seamless integration across all devices, creating an intuitive learning experience for students and educators.',
      content: (
        <div className="gallery flex h-full w-full items-center justify-center rounded-md overflow-hidden cursor-pointer">
          <Image
            src="/p-img-1.png"
            width={500}
            height={500}
            className="h-full w-full object-contain"
            alt="Critly project"
            onClick={() => openModal('/p-img-1.png')}
          />
        </div>
      ),
    },
    {
      title: 'Muktivatm',
      description: 'An elegant insurance platform combining stunning web design with robust functionality. Our services included web development and simplifies insurance buying across all devices',
      content: (
        <div className="gallery flex h-full w-full items-center justify-center rounded-md overflow-hidden cursor-pointer">
          <Image
            src="/p-img-2.png"
            width={500}
            height={500}
            className="h-full w-full object-contain"
            alt="Tenato project"
            onClick={() => openModal('/p-img-2.png')}
          />
        </div>
      ),
    },
    {
      title: 'MAK Watches website', 
      description: 'A premium e-commerce solution for luxury watches featuring sophisticated web design and branding. We provided complete e-commerce integration, and custom backend solutions to create an elegant online shopping experience that reflects the brand\'s prestige.',
      content: (
        <div className="gallery flex h-full w-full items-center justify-center rounded-md overflow-hidden cursor-pointer">
          <Image
            src="/p-img-3.png"
            width={500}
            height={500}
            className="h-full w-full object-contain"
            alt="Santa project"
            onClick={() => openModal('/p-img-3.png')}
          />
        </div>
      ),
    },
    {
      title: 'Digital Maintenance & Support',
      description: 'Ongoing technical excellence through our comprehensive maintenance and support services. We provide continuous monitoring, updates, bug fixes, performance optimization, and 24/7 support to ensure your web and mobile applications run smoothly and stay up-to-date with the latest technologies.',
      content: (
        <div className="gallery flex h-full w-full items-center justify-center rounded-md overflow-hidden cursor-pointer">
          <Image
            src="/p-img-4.png"
            width={500}
            height={500}
            className="h-full w-full object-contain"
            alt="Crint project"
            onClick={() => openModal('/p-img-4.png')}
          />
        </div>
      ),
    },
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

        {/* Sticky Scroll Projects */}
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <StickyScroll content={projects} contentClassName="h-96 w-96" />
        </div>
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div className="img-modal" id="imgModal" style={{ display: 'flex' }}>
          <span className="close" onClick={closeModal}>&times;</span>
          <Image
            id="modalImg"
            src={modalImgSrc}
            alt="Project preview"
            width={1920}
            height={1080}
            className="max-w-[90%] max-h-[90%] rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
}
