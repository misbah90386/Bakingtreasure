import { useState, useEffect } from 'react';
import { Product } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import CustomCakeDesigner from './components/CustomCakeDesigner';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import OrderingProcess from './components/OrderingProcess';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import OrderModal from './components/OrderModal';
import CartDrawer, { CartItem } from './components/CartDrawer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('bakingtreasure-theme');
    return saved === 'dark';
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('bakingtreasure-cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync dark class on mount and theme state change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bakingtreasure-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bakingtreasure-theme', 'light');
    }
  }, [darkMode]);

  // Sync cart items to localStorage for instant persistency
  useEffect(() => {
    localStorage.setItem('bakingtreasure-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleOpenOrderModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseOrderModal = () => {
    setSelectedProduct(null);
  };

  const handleAddOrderItem = (orderDetail: {
    product: Product;
    quantity: number;
    specialInstructions: string;
    date: string;
    name: string;
    email: string;
    phone: string;
    method: 'pickup' | 'delivery';
  }) => {
    const newItem: CartItem = {
      id: `order-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      product: orderDetail.product,
      quantity: orderDetail.quantity,
      specialInstructions: orderDetail.specialInstructions,
      date: orderDetail.date,
      name: orderDetail.name,
      email: orderDetail.email,
      phone: orderDetail.phone,
      method: orderDetail.method,
    };

    setCartItems((prev) => [newItem, ...prev]);
  };

  const handleRemoveOrderItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream text-chocolate dark:bg-zinc-950 dark:text-cream font-sans selection:bg-amber-600 selection:text-cream transition-colors duration-300">
      
      {/* Sticky Top Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenOrderCount={cartItems.length}
        onCartClick={handleOpenCart}
      />

      {/* Main Flow Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <FeaturedProducts onOrderProduct={handleOpenOrderModal} />
        <WhyChooseUs />
        <CustomCakeDesigner />
        <Gallery />
        <Testimonials />
        <OrderingProcess />
        <FAQ />
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />

      {/* Interactive Floating Quick Channels */}
      <FloatingWhatsApp />

      {/* Modal overlays */}
      <OrderModal
        product={selectedProduct}
        onClose={handleCloseOrderModal}
        onSubmitOrder={handleAddOrderItem}
      />

      {/* Sidebar Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cartItems={cartItems}
        onRemoveItem={handleRemoveOrderItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
