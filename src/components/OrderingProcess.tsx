import { motion } from 'motion/react';
import { Search, Sliders, ClipboardCheck, Truck } from 'lucide-react';

export default function OrderingProcess() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Dessert',
      description: 'Explore our catalog of exquisite signature treats or start your dream custom cake blueprint.',
      icon: Search
    },
    {
      number: '02',
      title: 'Customize Your Order',
      description: 'Select tier dimensions, frosting flavors, text engravings, color palettes, and inspiration uploads.',
      icon: Sliders
    },
    {
      number: '03',
      title: 'Confirm Details',
      description: 'Review your instant quote and finalize delivery instructions with our master pastry kitchen.',
      icon: ClipboardCheck
    },
    {
      number: '04',
      title: 'Fresh Delivery',
      description: 'Relax as we bake, decorate, and hand-deliver your sweet treasures in perfect cold-chain transport.',
      icon: Truck
    }
  ];

  return (
    <section id="process" className="py-24 bg-cream dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-serif text-lg italic text-amber-800 dark:text-amber-500 block mb-2">Simplicity & Care</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate dark:text-cream mb-4">
            How It Works
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/80 dark:text-zinc-300">
            From the initial spark of inspiration to the first delightful mouthful, we make ordering dessert a seamless luxury.
          </p>
        </div>

        {/* Steps Grid Flow */}
        <div className="relative" id="ordering-process-flow">
          {/* Horizontal line (Desktop only) */}
          <div className="absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-beige/35 dark:bg-zinc-800/80 -translate-y-1/2 z-0 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center group bg-cream dark:bg-zinc-900/10 p-6 rounded-2xl border border-transparent hover:border-beige/10 dark:hover:border-zinc-800/40 transition-all"
                >
                  {/* Circle Step Number & Icon Container */}
                  <div className="relative mb-6">
                    {/* Circle badge */}
                    <div className="w-20 h-20 rounded-full bg-cream dark:bg-zinc-900 border-2 border-beige/40 dark:border-zinc-800 flex items-center justify-center text-chocolate dark:text-amber-500 shadow-md group-hover:scale-105 group-hover:border-chocolate dark:group-hover:border-amber-500 group-hover:bg-chocolate group-hover:text-cream transition-all duration-300 relative z-10">
                      <IconComp className="w-7 h-7" />
                    </div>

                    {/* Float step index badge */}
                    <span className="absolute -top-1 -right-1 w-7 h-7 bg-amber-100 dark:bg-zinc-800 text-chocolate dark:text-amber-500 border border-gold-accent/40 rounded-full flex items-center justify-center text-xs font-bold font-sans shadow-sm group-hover:bg-amber-600 group-hover:text-cream group-hover:border-amber-600 transition-colors z-20">
                      {step.number}
                    </span>
                  </div>

                  {/* Written block */}
                  <h3 className="font-serif text-lg font-bold text-chocolate dark:text-cream mb-2 group-hover:text-amber-800 dark:group-hover:text-amber-500 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-chocolate/75 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
