import { motion } from 'motion/react';
import { Award, ShieldCheck, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="story" className="py-24 bg-cream/30 dark:bg-zinc-950/40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Showcase (Images) */}
          <div className="relative order-2 lg:order-1" id="about-visuals">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white dark:border-zinc-900 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
                alt="Pastry Chef in Kitchen"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-64 aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white dark:border-zinc-900 hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=600&auto=format&fit=crop"
                alt="Baking Fresh Bread"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Accent badge */}
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-amber-100 dark:bg-zinc-900 border border-gold-accent/30 flex flex-col items-center justify-center text-center shadow-lg z-20 p-2">
              <span className="font-serif text-2xl font-bold text-chocolate dark:text-amber-500">100%</span>
              <span className="font-sans text-[9px] uppercase tracking-wider font-semibold text-chocolate/80 dark:text-zinc-300">Organic Flour</span>
            </div>
          </div>

          {/* Written Story */}
          <div className="order-1 lg:order-2 flex flex-col justify-center" id="about-text">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-serif text-lg italic text-amber-800 dark:text-amber-500 block mb-2">Bakingtreasure History</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate dark:text-cream leading-tight mb-6">
                Our Story
              </h2>
              
              <p className="font-sans text-base text-chocolate/80 dark:text-zinc-300 leading-relaxed mb-8">
                Bakingtreasure was created with a passion for bringing happiness through handcrafted baked goods. Every cake, pastry, and dessert is carefully prepared using fresh ingredients, creative designs, and exceptional attention to detail.
              </p>

              {/* Milestones / Core Pillars */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-beige/20 dark:bg-zinc-900 flex items-center justify-center text-chocolate dark:text-amber-500 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-chocolate dark:text-cream">Masterful Craftsmanship</h4>
                    <p className="font-sans text-sm text-chocolate/70 dark:text-zinc-400">Award-winning pastry chefs dedicated to translating flavor ideas into luxurious edible sculptures.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-beige/20 dark:bg-zinc-900 flex items-center justify-center text-chocolate dark:text-amber-500 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-chocolate dark:text-cream">Pure Ingredients Only</h4>
                    <p className="font-sans text-sm text-chocolate/70 dark:text-zinc-400">Zero artificial preservatives. We import real Madagascar vanilla, Belgian white chocolates, and grass-fed butter.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-beige/20 dark:bg-zinc-900 flex items-center justify-center text-chocolate dark:text-amber-500 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-chocolate dark:text-cream">Daily Batch Baking</h4>
                    <p className="font-sans text-sm text-chocolate/70 dark:text-zinc-400">We bake limited batches throughout the day. Your celebration orders are finished just hours before hand-off.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
