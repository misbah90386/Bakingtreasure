import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Wedding', 'Birthday', 'Cupcakes', 'Macarons', 'Pastries', 'Brownies', 'Dessert Boxes'];

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-cream dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-lg italic text-amber-800 dark:text-amber-500 block mb-2">Our Sweet Masterpieces</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate dark:text-cream mb-4">
            Our Gallery
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/80 dark:text-zinc-300">
            A visual showcase of our custom handcrafted luxury desserts, celebration banquet setups, and delicate oven masterpieces.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-chocolate text-cream dark:bg-amber-600'
                  : 'bg-beige/10 hover:bg-beige/25 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 text-chocolate dark:text-zinc-300 border border-beige/10 dark:border-zinc-800/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]" id="gallery-masonry-grid">
          {filteredImages.map((img, idx) => (
            <motion.div
              layout
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow border border-beige/15 dark:border-zinc-800 cursor-pointer bg-zinc-100"
              onClick={() => setLightboxIndex(idx)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Luxury hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <ZoomIn className="w-8 h-8 text-white mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                <h4 className="font-serif text-lg font-bold text-white leading-tight">{img.title}</h4>
                <span className="font-sans text-[10px] text-zinc-300 uppercase tracking-widest mt-1">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-xs"
            id="gallery-lightbox-modal"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Carousel Stage */}
            <div className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center px-12">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Active Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Label Caption */}
            <div className="text-center mt-6 text-white max-w-md px-4" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-serif text-xl font-bold">{filteredImages[lightboxIndex].title}</h3>
              <p className="font-sans text-[11px] text-zinc-400 uppercase tracking-wider mt-1">
                {filteredImages[lightboxIndex].category} ({lightboxIndex + 1} of {filteredImages.length})
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
