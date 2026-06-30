import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream/30 dark:bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-lg italic text-amber-800 dark:text-amber-500 block mb-2">Our Sweet Success</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate dark:text-cream mb-4">
            Customer Testimonials
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/80 dark:text-zinc-300">
            Hear from our wonderful community of celebration organizers, couples, and dessert connoisseurs who have shared their magical moments with us.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-cream dark:bg-zinc-900/40 rounded-2xl p-8 border border-beige/20 dark:border-zinc-800/80 hover:border-gold-accent/40 dark:hover:border-amber-500/30 hover:shadow-xl transition-all relative flex flex-col justify-between"
            >
              {/* Decorative Quotation Icon */}
              <Quote className="w-10 h-10 text-beige/25 dark:text-zinc-800 absolute top-6 right-8" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 text-amber-500 mb-5">
                  {Array.from({ length: item.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base text-chocolate/85 dark:text-zinc-300 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 mt-4 border-t border-beige/10 dark:border-zinc-800 pt-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover shadow-sm border border-beige/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-chocolate dark:text-cream leading-tight">
                    {item.name}
                  </h4>
                  <span className="font-sans text-[10px] text-chocolate/60 dark:text-zinc-500 font-medium">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
