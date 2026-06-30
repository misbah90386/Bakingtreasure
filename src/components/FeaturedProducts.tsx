import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, Search, ShoppingBag } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data';
import { Product } from '../types';

interface FeaturedProductsProps {
  onOrderProduct: (product: Product) => void;
}

export default function FeaturedProducts({ onOrderProduct }: FeaturedProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-cream dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-lg italic text-amber-800 dark:text-amber-500 block mb-2">Our Exquisite Offerings</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate dark:text-cream mb-4">
            Featured Products
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/80 dark:text-zinc-300">
            Handcrafted luxury desserts prepared daily by our expert chefs. Click on any creation to customize your order details.
          </p>
        </div>

        {/* Filter and Search controls */}
        <div className="mb-12 space-y-6">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative" id="menu-search-container">
            <input
              type="text"
              placeholder="Search our delicious creations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-beige/40 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 text-chocolate dark:text-cream placeholder-chocolate/50 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all text-sm shadow-inner"
            />
            <Search className="w-5 h-5 text-chocolate/50 dark:text-zinc-500 absolute left-4 top-3.5" />
          </div>

          {/* Category Tabs Wrapper with custom horizontal scroll */}
          <div className="flex justify-center" id="menu-categories">
            <div className="flex gap-2.5 overflow-x-auto pb-4 max-w-full px-2 no-scrollbar scroll-smooth">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap transition-all duration-300 shadow-sm ${
                  selectedCategory === 'all'
                    ? 'bg-chocolate text-cream dark:bg-amber-600'
                    : 'bg-beige/10 hover:bg-beige/25 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 text-chocolate dark:text-zinc-300 border border-beige/10 dark:border-zinc-800/50'
                }`}
              >
                All Treasures
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap transition-all duration-300 shadow-sm ${
                    selectedCategory === cat.id
                      ? 'bg-chocolate text-cream dark:bg-amber-600'
                      : 'bg-beige/10 hover:bg-beige/25 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 text-chocolate dark:text-zinc-300 border border-beige/10 dark:border-zinc-800/50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              id="menu-products-grid"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-cream dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-beige/20 dark:border-zinc-800 hover:shadow-xl hover:border-gold-accent/40 dark:hover:border-amber-500/30 transition-all flex flex-col h-full"
                >
                  {/* Image & Badges */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient shadow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-cream/95 dark:bg-zinc-950/95 text-chocolate dark:text-amber-500 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded shadow-sm border border-beige/20 dark:border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Prep time */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-1 rounded-md">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{product.prepTime} prep</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-beige dark:text-zinc-500">
                        {CATEGORIES.find((c) => c.id === product.category)?.name || product.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-xs font-bold">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-chocolate dark:text-cream group-hover:text-amber-800 dark:group-hover:text-amber-500 transition-colors mb-2">
                      {product.name}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-chocolate/75 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Bottom Action bar */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-beige/10 dark:border-zinc-800">
                      <div>
                        <span className="text-[10px] text-chocolate/50 dark:text-zinc-500 block uppercase tracking-wider font-semibold">Starting at</span>
                        <span className="font-serif text-xl font-extrabold text-chocolate dark:text-amber-500" style={{ color: '#D4AF37' }}>
                          ${product.startingPrice}
                        </span>
                      </div>

                      <button
                        onClick={() => onOrderProduct(product)}
                        className="bg-chocolate hover:bg-chocolate/95 dark:bg-amber-600 dark:hover:bg-amber-500 text-cream font-sans font-semibold text-xs px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md transition-all group-hover:translate-x-1"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Order Now</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16" id="menu-empty-state">
              <p className="font-sans text-chocolate/70 dark:text-zinc-400">No sweet treasures matched your query. Please try searching something else.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
