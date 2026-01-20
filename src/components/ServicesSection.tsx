'use client';

import { useEffect, useState } from 'react';
import ShinyText from './ShinyText';
import ScrollStack from './ScrollStack';

const services = [
  {
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance.',
    points: ['Responsive Design', 'Fast Loading', 'SEO Optimized'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" fill="#3B82F6" />
        <rect x="4" y="5" width="16" height="8" rx="1" fill="#60A5FA" />
        <line x1="8" y1="21" x2="16" y2="21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'App Development',
    description:
      'Cross-platform mobile applications that deliver native-like experiences on both iOS and Android devices.',
    points: ['React Native', 'Expo', 'Progressive Web Apps'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" fill="#8B5CF6" />
        <rect x="7" y="4" width="10" height="14" rx="1" fill="#A78BFA" />
        <circle cx="12" cy="19" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful and intuitive user interfaces designed to engage users and enhance their experience with your product.',
    points: ['User Research', 'Wireframing', 'Prototyping'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 19l7-7 3 3-7 7-3-3z" fill="#EC4899" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" fill="#F472B6" />
        <circle cx="11" cy="11" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    title: 'Backend Development',
    description:
      'Robust server-side solutions with scalable architecture, secure APIs, and efficient database management.',
    points: ['Express.js', 'Mongo DB', 'Cloud integration'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="8" rx="2" fill="#10B981" />
        <rect x="2" y="14" width="20" height="8" rx="2" fill="#34D399" />
        <circle cx="6" cy="6" r="1" fill="#fff" />
        <circle cx="6" cy="18" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Complete online store development with secure payment integration, inventory management, and seamless checkout experience.',
    points: ['Payment Gateway', 'Product Management', 'Order Tracking'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="9" cy="21" r="1.5" fill="#F59E0B" />
        <circle cx="20" cy="21" r="1.5" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing technical support and maintenance to keep your applications running smoothly with regular updates and bug fixes.',
    points: ['24/7 Support', 'Regular Updates', 'Bug Fixes'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="#EF4444" />
        <circle cx="14.7" cy="6.3" r="1.5" fill="#F87171" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="services" className="relative py-16 sm:py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
              <ShinyText text="Services" className="text-sm font-semibold" speed={3} />
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: '#C38F2F' }}></span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-600">For Business Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Technical services crafted for ambitious teams
            </h2>
            <p className="text-gray-700 max-w-2xl leading-relaxed">
              Full-stack product help — from brand to build to launch — optimized for mobile-first users and measurable business outcomes.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center text-sm text-gray-600">
              <span className="h-2 w-2 rounded-full mr-2" style={{ backgroundColor: '#15c47e' }}></span>
              Mobile-first, fast, and reliable
            </div>
            <a href="tel:+919773109035">
              <button
                className="px-5 py-2 rounded-lg text-white text-sm font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] active:scale-95"
                style={{ backgroundImage: 'linear-gradient(135deg, #5E94FF, #164952)' }}
              >
                Book a call
              </button>
            </a>
          </div>
        </div>

        {/* Animated Scroll Stack */}
        <div className="mt-6">
          <ScrollStack
            cards={services.map((s) => ({
              title: s.title,
              subtitle: s.description,
              // pass points through for rendering inside ScrollStack
              // @ts-ignore
              points: s.points || s.points,
              // @ts-ignore
              icon: s.icon,
            }))}
            cardHeight="56vh"
            sectionHeightMultiplier={3}
            className="pb-24"
          />
        </div>
      </div>
    </section>
  );
}
