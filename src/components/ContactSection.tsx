'use client';

import { useState } from 'react';
import { ParticleCard } from './MagicBento';
import SpotlightCard from './SpotlightCard';
import ShinyText from './ShinyText';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <ShinyText text="Let's talk!" className="text-4xl sm:text-5xl font-bold" speed={3} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold" style={{ color: '#C38F2F' }}>
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <ParticleCard
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: 'rgba(232, 224, 209, 0.5)' }}
                glowColor="195, 143, 47"
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                particleCount={8}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:info.krinetra@gmail.com" className="text-gray-700 hover:text-gray-900">
                    info.krinetra@gmail.com
                  </a>
                </div>
              </ParticleCard>

              {/* Phone */}
              <ParticleCard
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: 'rgba(232, 224, 209, 0.5)' }}
                glowColor="195, 143, 47"
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                particleCount={8}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+919773109035" className="text-gray-700 hover:text-gray-900">
                    +91 9773109035
                  </a>
                </div>
              </ParticleCard>

              {/* Location */}
              <ParticleCard
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: 'rgba(232, 224, 209, 0.5)' }}
                glowColor="195, 143, 47"
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                particleCount={8}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-700">Vadodara, Gujarat</p>
                </div>
              </ParticleCard>
            </div>

            <div className="pt-4">
              <ParticleCard
                className="rounded-xl p-6 sm:p-8 shadow-md"
                style={{ backgroundColor: '#e8e0d180' }}
                glowColor="195, 143, 47"
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={false}
                particleCount={10}
              >
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </ParticleCard>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <SpotlightCard 
            className="rounded-2xl p-8 shadow-lg" 
            style={{ backgroundColor: 'rgba(60, 58, 57, 0.82)' }}
            spotlightColor="rgba(195, 143, 47, 0.25)"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-white mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-white mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-white mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-gray-500 resize-none transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg"
                style={{ backgroundColor: '#B8860B80'}}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                Send Message
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
