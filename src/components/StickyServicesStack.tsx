"use client";

import { motion, useScroll, useTransform } from "framer-motion";
// import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import StarBorder from "./StarBorder";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const StickyServiceCard = ({
  i,
  service,
  progress,
  range,
  targetScale,
}: {
  i: number;
  service: Service;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-start"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-3xl relative -top-1/4 flex h-120 w-full max-w-150 origin-top flex-col overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl p-10 text-white border border-slate-700"
      >
        {/* Icon */}
        <div className="text-5xl mb-5">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-4 text-white">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed mb-auto">
          {service.description}
        </p>

        {/* Features List as Tags */}
        <div className="flex flex-wrap gap-3 mt-6">
          {service.features.map((feature, idx) => (
            <span 
              key={idx} 
              className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-sm text-gray-300"
            >
              {feature}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const StickyServicesStack = ({ services }: { services: Service[] }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div>
      <div className="w-full">
        {/* Text Section - Shows first */}
        <div className="w-full py-12 text-center bg-white">
          <span className="text-4xl font-bold text-gray-900 uppercase tracking-wide">
            Scroll down to explore our services
          </span>
        </div>

        {/* Main Scrolling Section */}
        <main
          ref={container}
          className="relative flex w-full flex-row items-start justify-center pb-[50vh]"
        >
          {/* Fixed Left Image - Stays throughout services */}
          <div className="sticky top-[25vh] left-0 w-1/2 h-[70vh] flex items-center justify-center pl-12 z-10">
            <StarBorder
              as="div"
              color="#C38F2F"
              speed="8s"
              thickness={2}
              className="w-full max-w-150 h-full"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <img
                  src="/img-1.jpg"
                  alt="Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </StarBorder>
          </div>

          {/* Right Side - Scrolling Service Cards */}
          <div className="w-1/2 flex flex-col pr-12 pt-[10vh]">
          {services.map((service, i) => {
            const targetScale = Math.max(
              0.5,
              1 - (services.length - i - 1) * 0.1,
            );
            return (
              <StickyServiceCard
                key={`s_${i}`}
                i={i}
                service={service}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </main>
      </div>
    </div>
  );
};

export { StickyServicesStack, StickyServiceCard };
