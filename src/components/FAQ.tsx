import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-cream/30 dark:bg-zinc-950/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-lg italic text-amber-800 dark:text-amber-500 block mb-2">Answering Your Questions</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate dark:text-cream mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/80 dark:text-zinc-300">
            Everything you need to know about placing signature cake orders, custom designs, dietary guidelines, and delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-container">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className="bg-cream dark:bg-zinc-900 border border-beige/20 dark:border-zinc-800/80 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-beige/5 dark:hover:bg-zinc-800/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-3.5 items-center pr-4">
                    <HelpCircle className="w-5 h-5 text-chocolate/55 dark:text-amber-500 shrink-0" />
                    <span className="font-serif text-sm sm:text-base font-bold text-chocolate dark:text-cream leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-chocolate/40 dark:text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-chocolate dark:text-cream' : ''
                    }`}
                  />
                </button>

                {/* Answer Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-beige/10 dark:border-zinc-800/40 text-xs sm:text-sm text-chocolate/75 dark:text-zinc-400 leading-relaxed font-sans">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
