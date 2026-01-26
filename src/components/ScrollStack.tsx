"use client";

import React, { useEffect, useRef, useState } from "react";

export interface ScrollStackCard {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  content?: React.ReactNode;
}

interface ScrollStackProps {
  cards: ScrollStackCard[];
  backgroundColor?: string;
  cardHeight?: string;
  animationDuration?: string;
  sectionHeightMultiplier?: number;
  intersectionThreshold?: number;
  className?: string;
}

const defaultBackgrounds = [
  "/s-img.png",
  "/s-img.png",
  "/s-img.png",
];

const ScrollStack: React.FC<ScrollStackProps> = ({
  cards,
  backgroundColor = "bg-background",
  cardHeight = "60vh",
  animationDuration = "0.5s",
  sectionHeightMultiplier = 3,
  intersectionThreshold = 0.1,
  className = "",
}) => {
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const cardCount = Math.max(cards.length, 1);

  const cardStyle: React.CSSProperties = {
    height: cardHeight,
    maxHeight: "500px",
    borderRadius: 20,
    transition: `transform ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1), opacity ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1)`,
    willChange: "transform, opacity",
    overflow: "hidden",
    backgroundColor: "rgba(240, 249, 255, 0.98)",
  };

  // No body scroll-locking: drive the stack with normal window scroll.

  // No wheel handler; we rely on window scroll to update card progress.

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);

        if (!entry.isIntersecting) {
          if (entry.boundingClientRect.top > 0) {
            // scrolled back up past the component: reset internal container if any
            if (scrollableSectionRef.current) {
              try {
                scrollableSectionRef.current.scrollTop = 0;
              } catch {}
            }
          }
        }
      },
      { threshold: intersectionThreshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [intersectionThreshold]);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current!.getBoundingClientRect();
          const sectionHeight = sectionRef.current!.offsetHeight;
          const windowH = window.innerHeight;

          // scrolled distance into the section (0..sectionHeight-windowH)
          const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(sectionHeight - windowH, 0));
          const denom = Math.max(sectionHeight - windowH, 1);
          const progress = Math.min(Math.max(scrolled / denom, 0), 1);

          // Map progress to card index (0 .. cardCount-1)
          const idx = Math.floor(progress * cardCount);
          setActiveCardIndex(Math.min(Math.max(idx, 0), Math.max(cardCount - 1, 0)));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [cardCount]);

  const getCardTransform = (index: number) => {
    const isVisible = isIntersecting && activeCardIndex >= index;
    const isActive = activeCardIndex === index;
    const scale = 1;
    let translateY = "80px";

    if (isVisible) {
      translateY = "0px";
    }

    return {
      transform: `translateY(${translateY}) scale(${scale})`,
      opacity: isActive ? 1 : 0,
      zIndex: 100 + index * 10,
      pointerEvents: isActive ? "auto" : "none",
    } as React.CSSProperties;
  };

  return (
    <section ref={scrollableSectionRef} className="relative w-full">
      <style>{`/* scrollbar hidden removed to allow normal page scroll */`}</style>

      <div ref={sectionRef} className={`relative ${className}`} style={{ height: `${sectionHeightMultiplier * 100}vh` }}>
        <div className={`sticky top-0.5 w-full h-screen flex items-center justify-center overflow-hidden ${backgroundColor}`}>
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto h-full flex flex-col md:flex-row items-center md:justify-center justify-start gap-4 md:gap-6 pt-24 pb-6 md:pt-0 md:pb-0">

            {/* Left sticky image - Below cards on mobile, left side on desktop */}
            <div className="w-full md:w-1/2 h-[32vh] md:h-[70vh] flex items-end md:items-center justify-center order-2 md:order-1 px-2 md:px-0 pb-0 md:pb-2">
              <div className="w-full max-w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl" style={{ backgroundColor: '#f5f5f5' }}>
                <img src="/s-img.png" alt="Decor" className="w-full h-full object-cover object-center" />
              </div>
            </div>

            {/* Right stacked cards - Above image on mobile, right side on desktop */}
            <div className="relative w-full md:w-1/2 h-[45vh] md:h-[70vh] flex items-start md:items-center px-2 md:px-0 order-1 md:order-2">
              <div ref={cardsContainerRef} className="relative w-full max-w-2xl mx-auto shrink-0" style={{ height: cardHeight }}>
                {cards.map((card, index) => {
                  const cardTransform = getCardTransform(index);
                  return (
                    <div
                      key={index}
                      className={`absolute z-50 overflow-hidden shadow-xl rounded-2xl transition-all duration-300`}
                      style={{
                        ...cardStyle,
                        top: 0,
                        left: "50%",
                        transform: `translateX(-50%) ${cardTransform.transform}`,
                        width: "100%",
                        opacity: cardTransform.opacity,
                        zIndex: cardTransform.zIndex,
                        pointerEvents: cardTransform.pointerEvents as React.CSSProperties["pointerEvents"],
                      }}
                    >
                      {/* No background image on cards per user request */}

                      {card.badge && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-50/90 border border-blue-100 text-gray-800 shadow-sm">
                            <span className="text-sm font-medium">{card.badge}</span>
                          </div>
                        </div>
                      )}

                      <div className="relative z-10 p-6 h-full flex items-center">
                        {card.content ? (
                          card.content
                        ) : (
                          <div className="max-w-md ml-0 md:ml-auto text-left md:text-right w-full">
                            <div className="flex items-center justify-start md:justify-end gap-3 mb-4">
                              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{card.title}</h3>
                              {/* @ts-ignore */}
                              {(card as any).icon && (
                                <div className="shrink-0">
                                  {/* @ts-ignore */}
                                  {(card as any).icon}
                                </div>
                              )}
                            </div>
                            {card.subtitle && <p className="text-lg text-gray-700 mb-4">{card.subtitle}</p>}

                            {/* If card has points array (from ServicesSection) render it */}
                            {/* @ts-ignore */}
                            {Array.isArray((card as any).points) && (
                              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                                {/* @ts-ignore */}
                                {(card as any).points.map((p: string) => (
                                  <li key={p}>{p}</li>
                                ))}
                              </ul>
                            )}

                            <div className="text-left md:text-right">
                              <a href="#contact">
                                <button className="px-4 py-2 rounded-md bg-linear-to-b from-blue-500 to-blue-700 text-white font-semibold">
                                  Get Service
                                </button>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
