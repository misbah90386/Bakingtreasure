import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, ShoppingBag, Plus, Minus, Info, Check } from 'lucide-react';
import { Product } from '../types';

interface OrderModalProps {
  product: Product | null;
  onClose: () => void;
  onSubmitOrder: (orderDetail: {
    product: Product;
    quantity: number;
    specialInstructions: string;
    date: string;
    name: string;
    email: string;
    phone: string;
    method: 'pickup' | 'delivery';
  }) => void;
}

export default function OrderModal({ product, onClose, onSubmitOrder }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [method, setMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [success, setSuccess] = useState(false);

  if (!product) return null;

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const calculatedTotal = product.startingPrice * quantity;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date) {
      alert('Please fill out all contact credentials and selected date.');
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      onSubmitOrder({
        product,
        quantity,
        specialInstructions: instructions,
        date,
        name,
        email,
        phone,
        method
      });
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs" id="product-order-modal">
        {/* Background Dim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ scale: 0.92, y: 15, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: 15, opacity: 0 }}
          className="bg-cream dark:bg-zinc-900 border border-beige/30 dark:border-zinc-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 border-b border-beige/10 dark:border-zinc-800 flex items-center justify-between bg-cream/50 dark:bg-zinc-900/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-800 dark:text-amber-500" />
              <h3 className="font-serif text-lg font-bold text-chocolate dark:text-cream">Configure Your Order</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-beige/15 dark:hover:bg-zinc-800 text-chocolate/50 dark:text-zinc-400 transition-colors"
              aria-label="Close product configuration modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrolling Content form */}
          <form onSubmit={handleFormSubmit} className="p-6 overflow-y-auto space-y-6 flex-grow text-left">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.div
                  key="form-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Product Mini Banner */}
                  <div className="flex gap-4 items-start bg-beige/10 dark:bg-zinc-950/40 p-4 rounded-xl border border-beige/10 dark:border-zinc-800/80">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-lg object-cover shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-beige dark:text-zinc-500">
                        {product.category.replace('-', ' ')}
                      </span>
                      <h4 className="font-serif text-base font-bold text-chocolate dark:text-cream mt-0.5">{product.name}</h4>
                      <p className="font-sans text-[11px] text-chocolate/70 dark:text-zinc-400 line-clamp-2 mt-1">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Quantity and Total calculation */}
                  <div className="grid grid-cols-2 gap-4 items-center border-b border-beige/10 dark:border-zinc-800 pb-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 dark:text-zinc-400 block mb-1.5">Select Quantity</label>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={handleDecrement}
                          className="w-8 h-8 rounded-full border border-beige/35 dark:border-zinc-700 hover:bg-beige/10 dark:hover:bg-zinc-800 flex items-center justify-center text-chocolate dark:text-cream text-lg transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-10 text-center font-bold font-sans text-chocolate dark:text-cream">{quantity}</span>
                        <button
                          type="button"
                          onClick={handleIncrement}
                          className="w-8 h-8 rounded-full border border-beige/35 dark:border-zinc-700 hover:bg-beige/10 dark:hover:bg-zinc-800 flex items-center justify-center text-chocolate dark:text-cream text-lg transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-chocolate/55 dark:text-zinc-500 uppercase tracking-wider font-bold block">Estimated Total</span>
                      <span className="font-serif text-2xl font-extrabold text-chocolate dark:text-amber-500" style={{ color: '#D4AF37' }}>
                        ${calculatedTotal}
                      </span>
                    </div>
                  </div>

                  {/* Special customization instructions */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 dark:text-zinc-400 block mb-2">Special Instructions / Wording</label>
                    <textarea
                      rows={2}
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      placeholder="e.g. Please add a chocolate plaque saying 'Happy Anniversary Chef!' / Pack as individual portions"
                      className="w-full py-2.5 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream placeholder-chocolate/40 dark:placeholder-zinc-600 focus:outline-none"
                    />
                  </div>

                  {/* Delivery date & Hand-off logistics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 dark:text-zinc-400 block mb-2">Date Required *</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none"
                        />
                        <Calendar className="w-4 h-4 text-chocolate/40 dark:text-zinc-600 absolute left-3 top-2.5" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 dark:text-zinc-400 block mb-2">Delivery Method</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setMethod('pickup')}
                          className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
                            method === 'pickup'
                              ? 'bg-chocolate border-chocolate text-cream dark:bg-amber-600 dark:border-amber-600'
                              : 'border-beige/30 dark:border-zinc-800 text-chocolate dark:text-zinc-300 hover:bg-beige/10'
                          }`}
                        >
                          Pickup
                        </button>
                        <button
                          type="button"
                          onClick={() => setMethod('delivery')}
                          className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
                            method === 'delivery'
                              ? 'bg-chocolate border-chocolate text-cream dark:bg-amber-600 dark:border-amber-600'
                              : 'border-beige/30 dark:border-zinc-800 text-chocolate dark:text-zinc-300 hover:bg-beige/10'
                          }`}
                        >
                          Delivery
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-4 border-t border-beige/10 dark:border-zinc-800 pt-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-chocolate dark:text-cream block">Secure Hand-off Credentials</span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-1">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full py-2 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <input
                          type="email"
                          required
                          placeholder="Email *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full py-2 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <input
                          type="tel"
                          required
                          placeholder="WhatsApp Phone *"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full py-2 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Advisory Notice */}
                  <div className="flex gap-2 items-start bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-500 rounded-xl p-3 text-[11px] leading-relaxed">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>No deposit is requested right now. Submitting this form secures the ingredients and registers a tentative order. Our concierge team will reach out to verify and invoice you.</p>
                  </div>

                  {/* Submit buttons */}
                  <button
                    type="submit"
                    className="w-full bg-chocolate hover:bg-chocolate/95 dark:bg-amber-600 dark:hover:bg-amber-500 text-cream font-sans font-bold text-xs py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider"
                  >
                    <span>Secure Reservation</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="success-content"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-chocolate dark:text-cream mb-1">Reservation Registered!</h4>
                  <p className="font-sans text-xs text-chocolate/80 dark:text-zinc-400 max-w-xs">
                    Securing your sweet treasure... Your order is being added to your current session cart.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
