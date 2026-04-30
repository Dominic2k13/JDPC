import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageBanner } from "../components/PageParts";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "../data/siteData";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageBanner title="Photo Gallery" />
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* CATEGORY TABS */}
        <div className="flex flex-wrap gap-2 mb-8">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 text-xs font-semibold border transition-colors rounded
                ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-16">No images in this category yet.</p>
        )}
      </div>
    </>
  );
}