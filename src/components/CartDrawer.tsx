import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, CheckCircle2, MessageSquare, Info } from 'lucide-react';
import { Product } from '../types';

export interface CartItem {
  id: string; // unique order item id
  product: Product;
  quantity: number;
  specialInstructions: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  method: 'pickup' | 'delivery';
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }: CartDrawerProps) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.startingPrice * item.quantity, 0);

  const handleFinalize = () => {
    alert('Congratulations! Your order requests have been securely transmitted to the Bakingtreasure Master Kitchen. Check your email and phone for confirmation notes.');
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" id="session-cart-drawer">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-cream dark:bg-zinc-900 border-l border-beige/20 dark:border-zinc-800 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-5 border-b border-beige/10 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-chocolate dark:text-cream">
                  <ShoppingBag className="w-5 h-5 text-amber-800 dark:text-amber-500" />
                  <span className="font-serif text-lg font-bold">Your Session Reservations</span>
                  <span className="text-xs bg-beige/25 dark:bg-zinc-800 px-2 py-0.5 rounded-full font-sans font-bold">
                    {cartItems.length}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-beige/10 dark:hover:bg-zinc-800 text-chocolate/50 dark:text-zinc-400"
                  aria-label="Close cart sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrolling List items */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cartItems.length > 0 ? (
                  <AnimatePresence mode="popLayout">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-4 bg-cream dark:bg-zinc-950/40 rounded-2xl border border-beige/15 dark:border-zinc-800/80 space-y-3 relative overflow-hidden"
                      >
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="absolute top-4 right-4 text-red-500 hover:bg-red-500/10 p-1.5 rounded-full transition-colors"
                          title="Cancel this order item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="flex gap-3 items-start">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-12 h-12 rounded-lg object-cover border border-beige/10 dark:border-zinc-800"
                            referrerPolicy="no-referrer"
                          />
                          <div className="pr-6">
                            <h4 className="font-serif text-sm font-bold text-chocolate dark:text-cream leading-tight">{item.product.name}</h4>
                            <div className="flex gap-1.5 text-[10px] text-chocolate/50 dark:text-zinc-500 mt-1 uppercase font-bold">
                              <span>Qty: {item.quantity}</span>
                              <span>•</span>
                              <span>{item.method}</span>
                            </div>
                          </div>
                        </div>

                        {/* Customer / instructions note */}
                        <div className="bg-beige/5 dark:bg-zinc-900/60 rounded-lg p-2.5 text-[11px] text-chocolate/85 dark:text-zinc-400 space-y-1">
                          {item.specialInstructions && (
                            <p><strong>Note:</strong> "{item.specialInstructions}"</p>
                          )}
                          <p><strong>Deliver to:</strong> {item.name} on {item.date}</p>
                        </div>

                        {/* Cost calc */}
                        <div className="flex justify-between items-center text-xs font-serif pt-1">
                          <span className="text-chocolate/60 dark:text-zinc-500">Starting Price Rate:</span>
                          <span className="font-bold text-chocolate dark:text-amber-500">${item.product.startingPrice * item.quantity}</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500 py-12">
                    <ShoppingBag className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mb-2" />
                    <p className="font-sans text-xs">Your order clipboard is currently empty.</p>
                    <a
                      href="#menu"
                      onClick={onClose}
                      className="text-xs text-amber-800 dark:text-amber-500 font-bold hover:underline mt-2 inline-block"
                    >
                      Browse Featured Menu →
                    </a>
                  </div>
                )}
              </div>

              {/* Bottom total review & checkout */}
              {cartItems.length > 0 && (
                <div className="p-5 border-t border-beige/15 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900/50 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-chocolate/70 dark:text-zinc-400">
                      <span>Total Reserved Items:</span>
                      <span className="font-bold">{cartItems.length}</span>
                    </div>
                    <div className="flex justify-between text-base font-serif border-t border-dashed border-beige/20 dark:border-zinc-800 pt-3">
                      <span className="font-bold text-chocolate dark:text-cream">Cumulative Subtotal:</span>
                      <span className="font-extrabold text-chocolate dark:text-amber-500" style={{ color: '#D4AF37' }}>
                        ${subtotal}
                      </span>
                    </div>
                  </div>

                  {/* Advisory */}
                  <div className="flex gap-2 items-start bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-500 rounded-xl p-2.5 text-[10px] leading-relaxed">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <p>Submitting this finalizes the kitchen ingredient hold. Our Mayfair boutique will immediately send a digital invoice to your registered credentials.</p>
                  </div>

                  {/* Checkout Actions */}
                  <div className="space-y-2">
                    <button
                      onClick={handleFinalize}
                      className="w-full bg-chocolate hover:bg-chocolate/95 dark:bg-amber-600 dark:hover:bg-amber-500 text-cream font-sans font-bold text-xs py-3 rounded-full shadow-lg transition-transform uppercase tracking-wider active:scale-98"
                    >
                      Finalize with Bakery Master
                    </button>
                    <button
                      onClick={onClearCart}
                      className="w-full text-center text-red-500 hover:text-red-400 text-[11px] font-sans font-bold uppercase tracking-wider block transition-colors"
                    >
                      Clear All Reservations
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
