"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(-1);
  const [animatingCard, setAnimatingCard] = useState<number | null>(null);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    
    // Only update if the card actually changed
    if (closestBreakpointIndex !== activeCard) {
      setActiveCard(closestBreakpointIndex);
      // Trigger animation for the new active card
      setAnimatingCard(closestBreakpointIndex);
    }
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);0

  return (
    <motion.div
      className="relative"
      ref={ref}
    >
      <div className="flex justify-center space-x-10">
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl space-y-160">
            {content.map((item, index) => (
              <div key={item.title + index} className="min-h-120 flex flex-col justify-center">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ 
                    opacity: activeCard === index ? 1 : 0.5,
                  }}
                  className="text-2xl font-bold"
                  style={{ color: '#C38F2F' }}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.7,
                  }}
                  className="text-kg mt-10 max-w-sm"
                  style={{ color: '#01435F' }}
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={cn(
            "sticky top-50 hidden h-60 w-80 lg:block",
            contentClassName,
          )}
        >
          {activeCard >= 0 && (
            <div 
              key={`project-${activeCard}`}
              className={`overflow-hidden rounded-md h-full w-full ${animatingCard === activeCard ? 'animate-zoom-out' : 'opacity-0 scale-125'}`}
            >
              {content[activeCard].content ?? null}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
