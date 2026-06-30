import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cake, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenOrderCount: number;
  onCartClick: () => void;
}

export default function Navbar({ darkMode, setDarkMode, onOpenOrderCount, onCartClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Custom Cake', href: '#custom-cake' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-md py-3 border-b border-beige/20 dark:border-zinc-800'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="nav-logo">
            <div className="w-10 h-10 rounded-full bg-chocolate dark:bg-amber-600 flex items-center justify-center text-cream shadow-md group-hover:scale-105 transition-transform">
              <Cake className="w-5 h-5 text-gold-accent" style={{ color: '#D4AF37' }} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-chocolate dark:text-cream leading-tight">
                Bakingtreasure
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-beige dark:text-amber-500 font-sans font-medium">
                Artisan Bakery
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" id="nav-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-chocolate/85 hover:text-chocolate dark:text-zinc-300 dark:hover:text-cream transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 dark:after:bg-amber-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4" id="nav-desktop-actions">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-beige/20 dark:hover:bg-zinc-800 transition-colors text-chocolate dark:text-zinc-300"
              aria-label="Toggle dark mode"
              id="theme-toggle-desktop"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* View Orders Icon */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-beige/20 dark:hover:bg-zinc-800 transition-colors text-chocolate dark:text-zinc-300 flex items-center"
              aria-label="View current orders"
              id="orders-button-desktop"
            >
              <ShoppingBag className="w-5 h-5" />
              {onOpenOrderCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-cream bg-amber-600 rounded-full animate-bounce">
                  {onOpenOrderCount}
                </span>
              )}
            </button>

            {/* Primary Order Button */}
            <a
              href="#menu"
              className="bg-chocolate hover:bg-chocolate/95 dark:bg-amber-600 dark:hover:bg-amber-500 text-cream font-sans font-medium text-xs px-5 py-2.5 rounded-full shadow-md tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95"
              id="cta-order-now-desktop"
            >
              Order Now
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-beige/20 dark:hover:bg-zinc-800 transition-colors text-chocolate dark:text-zinc-300"
              aria-label="Toggle dark mode"
              id="theme-toggle-mobile"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Shopping Bag */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-beige/20 dark:hover:bg-zinc-800 transition-colors text-chocolate dark:text-zinc-300"
              aria-label="View current orders"
              id="orders-button-mobile"
            >
              <ShoppingBag className="w-5 h-5" />
              {onOpenOrderCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-cream bg-amber-600 rounded-full">
                  {onOpenOrderCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-chocolate dark:text-cream hover:bg-beige/10 focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-hamburger"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-[60px] left-0 right-0 bg-cream/98 dark:bg-zinc-950/98 backdrop-blur-lg border-b border-beige/20 dark:border-zinc-800 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-6 px-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        id="mobile-nav-panel"
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-base font-semibold text-chocolate/90 dark:text-zinc-200 hover:text-chocolate dark:hover:text-cream py-2 border-b border-beige/10 dark:border-zinc-800/50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center bg-chocolate dark:bg-amber-600 text-cream font-sans font-medium text-sm py-3 rounded-full shadow-md tracking-wider uppercase transition-transform active:scale-95"
            id="mobile-nav-cta"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
