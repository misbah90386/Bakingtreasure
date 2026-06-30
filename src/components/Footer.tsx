import React, { useState, useEffect } from 'react';
import { Cake, ArrowUp, Send, Facebook, Instagram, Twitter, MessageSquare, CheckCircle2 } from 'lucide-react';
import { CATEGORIES } from '../data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/bakingtreasure' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/bakingtreasure' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/bakingtreasure' }
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 font-sans border-t border-zinc-800/60 pt-20 pb-10 relative z-10" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/60">
          
          {/* Col 1: Brand details (4 Columns width) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-cream shadow-md">
                <Cake className="w-5 h-5 text-gold-accent" style={{ color: '#D4AF37' }} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-cream leading-tight">
                  Bakingtreasure
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-500 font-medium">
                  Artisan Bakery
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              We translate flavor dreams into custom centerpiece treasures. Experience premium, handcrafted luxury desserts prepared fresh daily with the finest ingredients in Mayfair.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s, idx) => {
                const IconComp = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.name}
                    className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500 hover:bg-zinc-800 transition-all"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (2 Columns width) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-cream border-b border-zinc-800/60 pb-1">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <a href="#story" className="hover:text-amber-500 transition-colors">Our Story</a>
              <a href="#menu" className="hover:text-amber-500 transition-colors">Featured Menu</a>
              <a href="#why-us" className="hover:text-amber-500 transition-colors">Why Choose Us</a>
              <a href="#custom-cake" className="hover:text-amber-500 transition-colors">Cake Designer</a>
              <a href="#gallery" className="hover:text-amber-500 transition-colors">Photo Gallery</a>
              <a href="#faq" className="hover:text-amber-500 transition-colors">Help & FAQ</a>
              <a href="#contact" className="hover:text-amber-500 transition-colors">Get In Touch</a>
            </div>
          </div>

          {/* Col 3: Product Categories (3 Columns width) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-cream border-b border-zinc-800/60 pb-1">
              Product Categories
            </h4>
            <div className="grid grid-cols-1 gap-3 text-xs sm:text-sm">
              {CATEGORIES.slice(0, 6).map((c) => (
                <a key={c.id} href="#menu" className="hover:text-amber-500 transition-colors">
                  {c.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Newsletter Subscription (3 Columns width) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-cream border-b border-zinc-800/60 pb-1">
              Newsletter
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to unlock secret seasonal recipe reveals, priority customized cake reservations, and weekly baking events.
            </p>

            {/* Newsletter input form */}
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="relative mt-2" id="footer-newsletter">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-full pl-4.5 pr-11 py-2.5 text-xs text-cream focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder-zinc-600 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 w-8.5 h-8.5 bg-amber-600 hover:bg-amber-500 text-cream rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                  aria-label="Submit email newsletter signup"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-emerald-500 text-xs py-2 px-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="font-semibold">Subscribed with gold!</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright alignment */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <div>
            <p>© {new Date().getFullYear()} Bakingtreasure Ltd. All Rights Reserved. Designed in Mayfair.</p>
          </div>
          <div className="flex gap-4">
            <a href="#contact" className="hover:underline hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:underline hover:text-zinc-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#contact" className="hover:underline hover:text-zinc-400 transition-colors">Custom Policy</a>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-chocolate text-cream hover:bg-chocolate/90 dark:bg-amber-600 dark:hover:bg-amber-500 shadow-xl border border-gold-accent/20 dark:border-zinc-800 transition-all hover:scale-105 active:scale-95"
          style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
          aria-label="Scroll back to top"
          id="back-to-top-footer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
