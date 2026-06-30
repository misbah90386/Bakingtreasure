import { motion } from 'motion/react';
import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  const floatingDesserts = [
    { emoji: '🍰', top: '15%', left: '8%', delay: 0, duration: 6, size: 'text-3xl' },
    { emoji: '🧁', top: '25%', right: '12%', delay: 1.5, duration: 8, size: 'text-2xl' },
    { emoji: '🍪', top: '65%', left: '10%', delay: 0.5, duration: 7, size: 'text-3xl' },
    { emoji: '🥐', top: '75%', right: '15%', delay: 2, duration: 9, size: 'text-4xl' },
    { emoji: '🍩', top: '45%', left: '85%', delay: 1, duration: 7.5, size: 'text-2xl' },
    { emoji: '✨', top: '55%', left: '20%', delay: 2.5, duration: 5, size: 'text-xl' },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cream dark:bg-zinc-950"
    >
      {/* Background Image with Rich Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/luxury_bakery_hero_1782834265848.jpg"
          alt="Luxury Artisan Bakery Display"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant vignette gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-transparent dark:from-zinc-950/95 dark:via-zinc-950/80 dark:to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/90 to-cream dark:from-zinc-950/80 dark:via-zinc-950/90 dark:to-zinc-950 md:hidden block" />
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
      </div>

      {/* Floating Dessert Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {floatingDesserts.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.size} drop-shadow-xl select-none filter contrast-125`}
            style={{ top: item.top, left: item.left, right: item.right }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left pt-20">
        <div className="max-w-2xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chocolate/10 dark:bg-amber-600/20 border border-chocolate/20 dark:border-amber-500/30 text-chocolate dark:text-amber-500 font-sans text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Star className="w-3.5 h-3.5 fill-current" style={{ color: '#D4AF37' }} />
            <span>Award Winning Patisserie</span>
          </motion.div>

          {/* Luxury Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-chocolate dark:text-cream leading-[1.1] mb-6"
            id="hero-headline"
          >
            Every Bite is a <br />
            <span className="relative text-amber-800 dark:text-amber-500 font-serif inline-block">
              Sweet Treasure
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-gold-accent/40 rounded" style={{ backgroundColor: 'rgba(212, 175, 55, 0.4)' }} />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-base sm:text-lg text-chocolate/80 dark:text-zinc-300 leading-relaxed mb-8"
            id="hero-subheading"
          >
            Freshly baked with love using premium ingredients. From custom celebration cakes to delightful everyday treats, Bakingtreasure makes every moment unforgettable.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
            id="hero-buttons"
          >
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-full bg-chocolate hover:bg-chocolate/95 dark:bg-amber-600 dark:hover:bg-amber-500 text-cream font-sans font-semibold text-sm shadow-lg shadow-chocolate/20 dark:shadow-amber-900/20 tracking-wider uppercase transition-all duration-300 hover:scale-105"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-full bg-white/70 hover:bg-white dark:bg-zinc-900/80 dark:hover:bg-zinc-800 border border-chocolate/20 dark:border-zinc-700 text-chocolate dark:text-cream font-sans font-semibold text-sm shadow-md tracking-wider uppercase backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.a
          href="#story"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center text-xs font-semibold text-chocolate/60 dark:text-zinc-400 hover:text-chocolate dark:hover:text-cream uppercase tracking-widest gap-2"
        >
          <span>Discover Story</span>
          <ArrowDown className="w-4 h-4 text-chocolate dark:text-amber-500" />
        </motion.a>
      </div>
    </section>
  );
}
