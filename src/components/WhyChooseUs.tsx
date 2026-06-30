import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-cream/50 dark:bg-zinc-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-lg italic text-amber-800 dark:text-amber-500 block mb-2">Our Quality Commitment</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate dark:text-cream mb-4">
            Why Choose Bakingtreasure
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/80 dark:text-zinc-300">
            We hold ourselves to elevated luxury standards, crafting unforgettably rich experiences for your tastebuds.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="why-us-grid">
          {WHY_CHOOSE_US.map((item, index) => {
            // Dynamically resolve icon from Icons namespace
            const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream dark:bg-zinc-900/40 rounded-2xl p-6 border border-beige/25 dark:border-zinc-800/80 hover:border-gold-accent/40 dark:hover:border-amber-500/30 hover:shadow-lg transition-all group text-center flex flex-col items-center"
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-full bg-beige/10 dark:bg-zinc-800/50 flex items-center justify-center text-chocolate dark:text-amber-500 group-hover:scale-110 group-hover:bg-chocolate group-hover:text-cream dark:group-hover:bg-amber-600 transition-all duration-350 mb-4 shadow-sm border border-beige/25 dark:border-zinc-800">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-chocolate dark:text-cream mb-2 group-hover:text-amber-900 dark:group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-chocolate/70 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
