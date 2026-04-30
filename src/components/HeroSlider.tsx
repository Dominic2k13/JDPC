import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "../data/siteData";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function HeroSlider() {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);

  const goNext = useCallback(() => {
    setSlide(([idx]) => [(idx + 1) % HERO_SLIDES.length, 1]);
  }, []);

  const goPrev = useCallback(() => {
    setSlide(([idx]) => [(idx - 1 + HERO_SLIDES.length) % HERO_SLIDES.length, -1]);
  }, []);

  const goTo = (index: number) => {
    setSlide(([idx]) => [index, index > idx ? 1 : -1]);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const slide = HERO_SLIDES[currentIndex];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-primary">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center text-center px-8">
            <div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg max-w-3xl mx-auto"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-8 flex gap-4 justify-center"
              >
                {/* Learn More Button */}
                <a
                  href="/about"
                  className="px-6 py-3 bg-accent text-white font-semibold rounded hover:opacity-90 transition-all hover:scale-105 text-sm uppercase tracking-wide"
                >
                  Learn More
                </a>

                {/* Contact Us Button */}
                <a
                  href="/contact"
                  className="px-6 py-3 bg-white/20 border border-white text-white font-semibold rounded hover:bg-white hover:text-primary transition-all text-sm uppercase tracking-wide"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}