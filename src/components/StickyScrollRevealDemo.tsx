"use client";

import { motion, useScroll, useTransform } from "framer-motion";
// import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Abhigyan Gurukul",
    description:
      "A comprehensive mobile application designed for educational institutions, providing seamless communication between students, teachers, and parents. Features include attendance tracking, assignment management, and real-time notifications to keep everyone connected.",
    image: "/p-1 2.png",
    tags: ["Mobile App", "Education", "React Native"],
  },
  {
    id: 2,
    title: "Mak Watches",
    description:
      "An elegant e-commerce platform showcasing luxury watches with a stunning user interface. Built with modern web technologies to provide a smooth shopping experience, featuring high-quality product imagery, detailed specifications, and secure checkout process.",
    image: "/p-2.png",
    tags: ["E-commerce", "Next.js", "UI/UX"],
  },
  {
    id: 3,
    title: "Muktivatm",
    description:
      "A spiritual and wellness website designed to promote mindfulness and inner peace. Features meditation guides, wellness tips, and community forums.",
    image: "/p-img3.png",
    tags: ["Wellness", "Web App", "Community"],
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "A full-featured shopping application with advanced filtering, wishlist functionality, and personalized recommendations for an enhanced shopping experience.",
    image: "/p-4.webp",
    tags: ["Shopping", "Full Stack", "React"],
  },
];

const StickyProjectCard = ({
  i,
  project,
  progress,
  range,
  targetScale,
}: {
  i: number;
  project: Project;
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
        {/* Image */}
        <div className="mb-5 w-full h-40 relative rounded-lg overflow-hidden">
          <Image
            src={project.image}
            fill
            className="object-contain"
            alt={project.title}
          />
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-4 text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed mb-auto">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function StickyScrollRevealDemo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div>
      <div className="w-full">
        {/* Text Section */}
        <div className="w-full py-12 text-center bg-white">
          <span className="text-4xl font-bold text-gray-900 uppercase tracking-wide">
            Our Featured Projects
          </span>
        </div>

        {/* Main Scrolling Section */}
        <main
          ref={container}
          className="relative flex w-full flex-col items-center justify-center pb-[50vh] px-6"
        >
          {/* Project Cards */}
          <div className="w-full max-w-162.5 flex flex-col pt-[10vh]">
            {projects.map((project, i) => {
              const targetScale = Math.max(
                0.5,
                1 - (projects.length - i - 1) * 0.1,
              );
              return (
                <StickyProjectCard
                  key={`p_${i}`}
                  i={i}
                  project={project}
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
}
