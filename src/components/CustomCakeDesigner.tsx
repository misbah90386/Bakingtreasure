import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Upload, CheckCircle2, FileText, Trash2, Calendar, User, Mail, Phone, MapPin } from 'lucide-react';
import { CustomCakeRequest } from '../types';

const FLAVORS = [
  { name: 'Classic Vanilla Bean', desc: 'Fluffy sponge with real Madagascar vanilla bean seeds.' },
  { name: 'Decadent Belgian Chocolate', desc: 'Rich 70% dark chocolate sponge with fudgy ganache.' },
  { name: 'Luscious Red Velvet', desc: 'Moist crimson cocoa sponge layered with sweet cream cheese.' },
  { name: 'Zesty Lemon Honey', desc: 'Tangy citrus sponge soaked in pure lavender honey.' },
  { name: 'Salted Caramel Pecan', desc: 'Golden sponge with butterscotch and roasted pecans.' },
  { name: 'Fresh Strawberry Cream', desc: 'Summer strawberries folded into airy buttermilk sponge.' }
];

const SIZES = [
  { value: '6-inch', label: '6" Single Tier', servings: 'Serves 8-12', basePrice: 75 },
  { value: '8-inch', label: '8" Single Tier', servings: 'Serves 15-22', basePrice: 95 },
  { value: '2-tier', label: '2-Tier (8" + 6")', servings: 'Serves 30-45', basePrice: 195 },
  { value: '3-tier', label: '3-Tier (10" + 8" + 6")', servings: 'Serves 60-80', basePrice: 380 }
];

const SHAPES = [
  { value: 'round', label: 'Classic Round', style: 'rounded-full' },
  { value: 'square', label: 'Modern Square', style: 'rounded-md' },
  { value: 'heart', label: 'Romantic Heart', style: 'clip-path-heart' },
  { value: 'hexagon', label: 'Art Deco Hexagon', style: 'clip-path-hex' }
];

const FROSTINGS = [
  { value: 'buttercream', label: 'Silky Swiss Buttercream' },
  { value: 'fondant', label: 'Satin Rolled Fondant' },
  { value: 'creamcheese', label: 'Velvet Cream Cheese' },
  { value: 'naked', label: 'Rustic Naked Cake' }
];

const THEMES = [
  { value: 'floral', label: 'Botanical / Real Pressed Flowers' },
  { value: 'gold-leaf', label: 'Royal Gold Leaf & Shimmer' },
  { value: 'pastel-swirl', label: 'Playful Pastel Watercolor' },
  { value: 'marble', label: 'Modern Luxury Carrara Marble' },
  { value: 'vintage-lambeth', label: 'Vintage French Lambeth Piping' }
];

const COLORS = [
  { name: 'Soft Rose', hex: '#F8D9E2', darkText: true },
  { name: 'Royal Gold', hex: '#D4AF37', darkText: false },
  { name: 'Vanilla Cream', hex: '#FFF8F0', darkText: true },
  { name: 'Rich Espresso', hex: '#5A3825', darkText: false },
  { name: 'Earthy Sage', hex: '#C2D1C2', darkText: true },
  { name: 'Cosmic Slate', hex: '#4B5563', darkText: false },
  { name: 'Lavender Mist', hex: '#E9D5FF', darkText: true }
];

export default function CustomCakeDesigner() {
  const [flavor, setFlavor] = useState(FLAVORS[0].name);
  const [size, setSize] = useState(SIZES[1].value);
  const [shape, setShape] = useState(SHAPES[0].value);
  const [frosting, setFrosting] = useState(FROSTINGS[0].value);
  const [theme, setTheme] = useState(THEMES[1].value);
  const [cakeColor, setCakeColor] = useState(COLORS[2]);
  const [message, setMessage] = useState('');
  const [inspirationImage, setInspirationImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');
  
  // Contact state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeSizeObj = SIZES.find(s => s.value === size) || SIZES[1];

  const handleFileChange = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setInspirationImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeInspiration = () => {
    setInspirationImage(null);
    setImageName('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date) {
      alert('Please fill out all contact and date details before requesting.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 1800);
  };

  const resetDesigner = () => {
    setShowSuccess(false);
    setFlavor(FLAVORS[0].name);
    setSize(SIZES[1].value);
    setShape(SHAPES[0].value);
    setFrosting(FROSTINGS[0].value);
    setTheme(THEMES[1].value);
    setCakeColor(COLORS[2]);
    setMessage('');
    setInspirationImage(null);
    setImageName('');
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setDeliveryMethod('pickup');
    setNotes('');
  };

  return (
    <section id="custom-cake" className="py-24 bg-cream/30 dark:bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-lg italic text-amber-800 dark:text-amber-500 block mb-2">Edible Centerpieces</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate dark:text-cream mb-4">
            Design Your Dream Cake
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/80 dark:text-zinc-300">
            Use our premium interactive builder to configure flavors, sizes, frosting layers, and themes, then submit an instantly calculated proposal to our bakery master.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="cake-designer-layout">
          
          {/* Interactive Live Preview (Sticky left side) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-cream dark:bg-zinc-900 border border-beige/30 dark:border-zinc-800 p-8 rounded-2xl shadow-xl flex flex-col items-center">
            <h3 className="font-serif text-lg font-bold text-chocolate dark:text-cream mb-1 text-center">Interactive Live Canvas</h3>
            <span className="text-[10px] uppercase font-bold tracking-widest text-beige dark:text-zinc-500 mb-8 block text-center">Real-Time Cake Blueprint</span>

            {/* Cake Mockup Render Stage */}
            <div className="relative w-64 h-64 bg-beige/5 dark:bg-zinc-950/40 rounded-xl flex flex-col items-center justify-end pb-8 border border-beige/10 dark:border-zinc-800/40 shadow-inner mb-6">
              
              {/* Dynamic Tier Renderer */}
              <div className="relative flex flex-col items-center justify-end z-10 w-full px-8">
                {/* 3 Tier Top Cake */}
                {size === '3-tier' && (
                  <motion.div
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    className={`h-10 w-24 mb-0.5 border-b-2 border-black/10 flex items-center justify-center relative overflow-hidden transition-all duration-500 ${
                      shape === 'round' ? 'rounded-t-full' : shape === 'heart' ? 'rounded-t-lg' : 'rounded-t-sm'
                    }`}
                    style={{ backgroundColor: cakeColor.hex }}
                  >
                    <div className="absolute inset-x-0 bottom-0 h-2 bg-black/15 blur-[1px]" />
                  </motion.div>
                )}

                {/* 2 & 3 Tier Mid Cake */}
                {(size === '2-tier' || size === '3-tier') && (
                  <motion.div
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    className={`h-12 w-36 mb-0.5 border-b-2 border-black/10 flex items-center justify-center relative overflow-hidden transition-all duration-500 ${
                      shape === 'round' ? 'rounded-t-full' : shape === 'heart' ? 'rounded-t-md' : 'rounded-t-sm'
                    }`}
                    style={{ backgroundColor: cakeColor.hex }}
                  >
                    <div className="absolute inset-x-0 bottom-0 h-3 bg-black/15 blur-[1px]" />
                  </motion.div>
                )}

                {/* Base Cake (Always Visible) */}
                <motion.div
                  layout
                  className={`h-16 w-48 border-b-2 border-black/10 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 shadow-md ${
                    shape === 'round' ? 'rounded-t-full' : shape === 'heart' ? 'rounded-t-sm' : 'rounded-t-sm'
                  }`}
                  style={{ backgroundColor: cakeColor.hex }}
                >
                  {/* Embossed customized piping text */}
                  {message ? (
                    <span
                      className={`text-[10px] font-semibold text-center italic drop-shadow px-2 break-all z-20 ${
                        cakeColor.darkText ? 'text-chocolate' : 'text-cream'
                      }`}
                    >
                      "{message}"
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest pointer-events-none">Sweet Treasure</span>
                  )}
                  
                  {/* Bottom crust edge shading */}
                  <div className="absolute inset-x-0 bottom-0 h-4 bg-black/20 blur-[1px]" />
                </motion.div>
              </div>

              {/* Pedestal Stand */}
              <div className="w-56 h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full z-0 relative">
                <div className="w-16 h-12 bg-zinc-300 dark:bg-zinc-700 mx-auto absolute bottom-[-45px] left-[104px] clip-path-pedestal shadow" />
                <div className="w-32 h-2 bg-zinc-300 dark:bg-zinc-700 mx-auto absolute bottom-[-45px] left-[60px] rounded" />
              </div>
            </div>

            {/* Quick Live Bill */}
            <div className="w-full border-t border-beige/10 dark:border-zinc-800 pt-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-chocolate/60 dark:text-zinc-400">Flavor Base:</span>
                <span className="font-semibold text-chocolate dark:text-cream">{flavor}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-chocolate/60 dark:text-zinc-400">Frosting Shell:</span>
                <span className="font-semibold text-chocolate dark:text-cream">
                  {FROSTINGS.find(f => f.value === frosting)?.label}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-chocolate/60 dark:text-zinc-400">Luxury Theme:</span>
                <span className="font-semibold text-chocolate dark:text-cream">
                  {THEMES.find(t => t.value === theme)?.label}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-chocolate/60 dark:text-zinc-400">Selected Shade:</span>
                <div className="flex items-center gap-1.5 font-semibold text-chocolate dark:text-cream">
                  <span className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: cakeColor.hex }} />
                  <span>{cakeColor.name}</span>
                </div>
              </div>
              <div className="flex justify-between pt-3 border-t border-dashed border-beige/20 dark:border-zinc-800">
                <span className="text-sm font-bold text-chocolate dark:text-cream">Estimated Starting Cost:</span>
                <span className="text-lg font-serif font-extrabold text-chocolate dark:text-amber-500" style={{ color: '#D4AF37' }}>
                  ${activeSizeObj.basePrice}
                </span>
              </div>
            </div>
          </div>

          {/* Configuration Form (Right side) */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-cream dark:bg-zinc-900/60 border border-beige/25 dark:border-zinc-800 p-8 rounded-2xl shadow-xl space-y-8" id="cake-designer-form">
            
            {/* Step 1: Design Aesthetics */}
            <div>
              <h4 className="font-serif text-lg font-bold text-chocolate dark:text-cream border-b border-beige/10 dark:border-zinc-800 pb-2 mb-4">
                1. Select Aesthetics
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cake Shape */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2.5 block">Cake Shape</label>
                  <div className="grid grid-cols-2 gap-2">
                    {SHAPES.map((sh) => (
                      <button
                        key={sh.value}
                        type="button"
                        onClick={() => setShape(sh.value)}
                        className={`py-2 px-3 rounded-lg border text-xs font-semibold tracking-wide transition-all ${
                          shape === sh.value
                            ? 'bg-chocolate border-chocolate text-cream dark:bg-amber-600 dark:border-amber-600'
                            : 'border-beige/30 dark:border-zinc-800 text-chocolate dark:text-zinc-300 hover:bg-beige/10'
                        }`}
                      >
                        {sh.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cake Colors */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2.5 block">Frosting Palette</label>
                  <div className="flex flex-wrap gap-2.5">
                    {COLORS.map((col) => (
                      <button
                        key={col.name}
                        type="button"
                        onClick={() => setCakeColor(col)}
                        title={col.name}
                        className={`w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center shadow-sm relative ${
                          cakeColor.name === col.name
                            ? 'border-chocolate dark:border-amber-500 scale-110'
                            : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: col.hex }}
                      >
                        {cakeColor.name === col.name && (
                          <span className={`text-[10px] font-bold ${col.darkText ? 'text-chocolate' : 'text-cream'}`}>✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Tier Size & Batter Flavor */}
            <div className="space-y-6">
              <h4 className="font-serif text-lg font-bold text-chocolate dark:text-cream border-b border-beige/10 dark:border-zinc-800 pb-2 mb-4">
                2. Size, Sizing & Flavor Core
              </h4>

              {/* Sizing Tiers Selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-3 block">Choose Size / Tiers</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SIZES.map((sz) => (
                    <button
                      key={sz.value}
                      type="button"
                      onClick={() => setSize(sz.value)}
                      className={`p-3 rounded-xl border text-left flex flex-col transition-all ${
                        size === sz.value
                          ? 'bg-chocolate border-chocolate text-cream dark:bg-amber-600 dark:border-amber-600'
                          : 'border-beige/30 dark:border-zinc-800 text-chocolate dark:text-zinc-300 hover:bg-beige/10'
                      }`}
                    >
                      <span className="text-xs font-bold block">{sz.label}</span>
                      <span className={`text-[10px] block mt-1 ${size === sz.value ? 'text-cream/80' : 'text-chocolate/60 dark:text-zinc-500'}`}>
                        {sz.servings}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavor Selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-3 block">Sponge Flavor</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FLAVORS.map((fl) => (
                    <button
                      key={fl.name}
                      type="button"
                      onClick={() => setFlavor(fl.name)}
                      className={`p-3 rounded-xl border text-left flex flex-col transition-all ${
                        flavor === fl.name
                          ? 'bg-chocolate border-chocolate text-cream dark:bg-amber-600 dark:border-amber-600'
                          : 'border-beige/30 dark:border-zinc-800 text-chocolate dark:text-zinc-300 hover:bg-beige/10'
                      }`}
                    >
                      <span className="text-xs font-bold block">{fl.name}</span>
                      <span className={`text-[10px] mt-1 ${flavor === fl.name ? 'text-cream/80' : 'text-chocolate/60 dark:text-zinc-500'}`}>
                        {fl.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Frosting Type, Theme and Personalized Piping */}
            <div className="space-y-6">
              <h4 className="font-serif text-lg font-bold text-chocolate dark:text-cream border-b border-beige/10 dark:border-zinc-800 pb-2 mb-4">
                3. Textures, Themes & Shimmer
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frosting Shell */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2 block">Frosting Finish</label>
                  <select
                    value={frosting}
                    onChange={(e) => setFrosting(e.target.value)}
                    className="w-full py-2.5 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                  >
                    {FROSTINGS.map(fr => (
                      <option key={fr.value} value={fr.value}>{fr.label}</option>
                    ))}
                  </select>
                </div>

                {/* Theme Design */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2 block">Design Theme</label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full py-2.5 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                  >
                    {THEMES.map(th => (
                      <option key={th.value} value={th.value}>{th.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personalized Message */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2 block">Personalized message piped in icing (Max 35 chars)</label>
                <input
                  type="text"
                  maxLength={35}
                  placeholder="e.g. Happy 30th Sophia! / Just Married"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full py-2.5 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream placeholder-chocolate/40 dark:placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                />
              </div>

              {/* File Upload Inspiration (Drag-and-Drop) */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2 block">Inspiration Image Upload</label>
                <div
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  onClick={triggerFileInput}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-2 ${
                    isDragging
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-beige/40 dark:border-zinc-800 hover:border-amber-500/50 hover:bg-beige/5 dark:hover:bg-zinc-800/20'
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileChange(e.target.files[0]);
                      }
                    }}
                    accept="image/*"
                    className="hidden"
                  />
                  {inspirationImage ? (
                    <div className="w-full flex items-center justify-between gap-4 px-2" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-3">
                        <img src={inspirationImage} alt="Preview" className="w-12 h-12 rounded object-cover border border-beige/40" />
                        <div className="text-left">
                          <span className="text-xs font-semibold text-chocolate dark:text-cream block truncate max-w-[200px]">{imageName}</span>
                          <span className="text-[10px] text-chocolate/50 dark:text-zinc-500 block">Successfully selected</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeInspiration}
                        className="p-1.5 rounded-full hover:bg-red-500/10 text-red-500 transition-colors"
                        title="Remove inspiration image"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-beige/10 dark:bg-zinc-800 flex items-center justify-center text-chocolate/70 dark:text-zinc-400">
                        <Upload className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-chocolate dark:text-zinc-300">
                        Drag & Drop or Click to browse
                      </span>
                      <span className="text-[10px] text-chocolate/50 dark:text-zinc-500 block">
                        Accepts JPG, PNG, WEBP (Max 5MB)
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Step 4: Contact & Delivery Logistics */}
            <div className="space-y-6">
              <h4 className="font-serif text-lg font-bold text-chocolate dark:text-cream border-b border-beige/10 dark:border-zinc-800 pb-2 mb-4">
                4. Logistics & Your Details
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2 block">Your Full Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sophia Lawrence"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                    />
                    <User className="w-4 h-4 text-chocolate/40 dark:text-zinc-600 absolute left-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2 block">Email Address *</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="e.g. sophia@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                    />
                    <Mail className="w-4 h-4 text-chocolate/40 dark:text-zinc-600 absolute left-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2 block">Phone Number (WhatsApp preferred) *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                    />
                    <Phone className="w-4 h-4 text-chocolate/40 dark:text-zinc-600 absolute left-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2 block">Requested Date * (At least 3 days notice)</label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                    />
                    <Calendar className="w-4 h-4 text-chocolate/40 dark:text-zinc-600 absolute left-3 top-3.5" />
                  </div>
                </div>
              </div>

              {/* Delivery method */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2.5 block">Delivery / Hand-off Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`py-3 px-4 rounded-lg border text-xs font-bold transition-all ${
                      deliveryMethod === 'pickup'
                        ? 'bg-chocolate border-chocolate text-cream dark:bg-amber-600 dark:border-amber-600'
                        : 'border-beige/30 dark:border-zinc-800 text-chocolate dark:text-zinc-300 hover:bg-beige/10'
                    }`}
                  >
                    Artisan Kitchen Pickup (Free)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`py-3 px-4 rounded-lg border text-xs font-bold transition-all ${
                      deliveryMethod === 'delivery'
                        ? 'bg-chocolate border-chocolate text-cream dark:bg-amber-600 dark:border-amber-600'
                        : 'border-beige/30 dark:border-zinc-800 text-chocolate dark:text-zinc-300 hover:bg-beige/10'
                    }`}
                  >
                    Temperature-Controlled Delivery
                  </button>
                </div>
              </div>

              {/* Custom Directions */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-chocolate/80 dark:text-zinc-400 mb-2 block">Any special requests / allergies / directions</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Please make it eggless. Write 'Gluten-free sponge requested' if any dietary needs."
                  className="w-full py-2.5 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream placeholder-chocolate/40 dark:placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-chocolate hover:bg-chocolate/95 dark:bg-amber-600 dark:hover:bg-amber-500 text-cream font-sans font-bold text-sm py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 tracking-wider uppercase active:scale-98 disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-t-transparent border-white animate-spin" />
                  <span>Processing Your Design...</span>
                </div>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-gold-accent" style={{ color: '#D4AF37' }} />
                  <span>Request a Custom Cake</span>
                </>
              )}
            </button>
          </form>

        </div>
      </div>

      {/* Success Modal overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-cream dark:bg-zinc-900 rounded-3xl p-8 max-w-lg w-full border border-beige/30 dark:border-zinc-800 shadow-2xl relative overflow-hidden text-center"
            >
              {/* Gold sparkles inside */}
              <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-zinc-800 text-amber-600 dark:text-amber-500 flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-chocolate dark:text-cream mb-3">
                Design Submitted!
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-chocolate/85 dark:text-zinc-300 leading-relaxed mb-6">
                Thank you, <strong className="text-chocolate dark:text-amber-500">{name}</strong>! Your interactive cake blueprint for the <strong className="text-chocolate dark:text-cream">{flavor}</strong> cake is locked in. Our Master Pastry Chef is reviewing your theme options and inspiration file.
              </p>

              {/* Receipt detail block */}
              <div className="bg-beige/10 dark:bg-zinc-950/60 rounded-xl p-4 text-left text-xs space-y-2 mb-8 border border-beige/10 dark:border-zinc-800/80">
                <div className="flex justify-between">
                  <span className="text-chocolate/60 dark:text-zinc-500">Tier Setup:</span>
                  <span className="font-bold text-chocolate dark:text-cream">{activeSizeObj.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-chocolate/60 dark:text-zinc-500">Frosting Finish:</span>
                  <span className="font-bold text-chocolate dark:text-cream">
                    {FROSTINGS.find(f => f.value === frosting)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-chocolate/60 dark:text-zinc-500">Hand-off Date:</span>
                  <span className="font-bold text-chocolate dark:text-cream">{date}</span>
                </div>
                <div className="flex justify-between border-t border-beige/10 dark:border-zinc-800 pt-2 font-semibold">
                  <span className="text-chocolate/80 dark:text-zinc-400">Estimated Quote:</span>
                  <span className="text-sm text-amber-800 dark:text-amber-500 font-extrabold" style={{ color: '#D4AF37' }}>
                    ${activeSizeObj.basePrice}*
                  </span>
                </div>
                <span className="text-[10px] text-chocolate/40 dark:text-zinc-500 block text-center mt-1 italic">*Final cost may adjust slightly depending on custom decoration complexity.</span>
              </div>

              <p className="font-sans text-xs text-chocolate/60 dark:text-zinc-400 mb-6">
                We sent a detailed confirmation invoice summary to <strong>{email}</strong> and will follow up on WhatsApp at <strong>{phone}</strong> within 2 hours.
              </p>

              <button
                onClick={resetDesigner}
                className="w-full bg-chocolate hover:bg-chocolate/95 dark:bg-amber-600 dark:hover:bg-amber-500 text-cream font-sans font-semibold text-xs py-3.5 rounded-full shadow transition-all uppercase tracking-wider"
              >
                Return to Designer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
