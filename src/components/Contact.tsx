import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setSuccess(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const businessHours = [
    { days: 'Monday – Friday', hours: '08:00 AM – 07:00 PM' },
    { days: 'Saturday', hours: '09:00 AM – 06:00 PM' },
    { days: 'Sunday', hours: '10:00 AM – 04:00 PM' }
  ];

  return (
    <section id="contact" className="py-24 bg-cream dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-lg italic text-amber-800 dark:text-amber-500 block mb-2">Connect With Us</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate dark:text-cream mb-4">
            Contact Us
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/80 dark:text-zinc-300">
            Have questions about pricing, event catering, or custom deliveries? Drop us a line, call us, or chat directly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-details-grid">
          
          {/* Contact Details & Hours & Map (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Quick Contacts */}
            <div className="bg-cream/40 dark:bg-zinc-900/40 p-6 rounded-2xl border border-beige/20 dark:border-zinc-800/80 space-y-5">
              <h3 className="font-serif text-xl font-bold text-chocolate dark:text-cream mb-2">Our Boutique Details</h3>
              
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-amber-800 dark:text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-chocolate/55 dark:text-zinc-500">Visit Our Kitchen</h4>
                  <p className="font-serif text-sm text-chocolate dark:text-cream mt-0.5">42 Bruton Place, Mayfair, London, W1J 6NP</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-amber-800 dark:text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-chocolate/55 dark:text-zinc-500">Call Support</h4>
                  <a href="tel:+442079460192" className="font-serif text-sm text-chocolate dark:text-cream mt-0.5 hover:underline block">+44 (0) 20 7946 0192</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-amber-800 dark:text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-chocolate/55 dark:text-zinc-500">Email Inquiries</h4>
                  <a href="mailto:concierge@bakingtreasure.com" className="font-serif text-sm text-chocolate dark:text-cream mt-0.5 hover:underline block">concierge@bakingtreasure.com</a>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-3">
                <a
                  href="https://wa.me/442079460192?text=Hello%20Bakingtreasure!%20I'd%20love%20to%20inquire%20about%20a%20luxury%20custom%20cake!"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-cream font-sans font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all uppercase tracking-wider hover:scale-[1.02] active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-cream/40 dark:bg-zinc-900/40 p-6 rounded-2xl border border-beige/20 dark:border-zinc-800/80">
              <h3 className="font-serif text-xl font-bold text-chocolate dark:text-cream mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-800 dark:text-amber-500" />
                <span>Boutique Hours</span>
              </h3>
              <div className="space-y-3">
                {businessHours.map((bh, idx) => (
                  <div key={idx} className="flex justify-between text-xs sm:text-sm border-b border-beige/10 dark:border-zinc-800 pb-2 last:border-0 last:pb-0">
                    <span className="font-sans text-chocolate/80 dark:text-zinc-400 font-semibold">{bh.days}</span>
                    <span className="font-serif font-bold text-chocolate dark:text-cream">{bh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Secure Interactive Contact Form (Right 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-cream dark:bg-zinc-900/60 border border-beige/25 dark:border-zinc-800 p-8 rounded-2xl shadow-xl flex flex-col h-full justify-between" id="contact-form-card">
              
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSendMessage}
                    className="space-y-5"
                  >
                    <h3 className="font-serif text-xl font-bold text-chocolate dark:text-cream border-b border-beige/10 dark:border-zinc-800 pb-2 mb-2">Send Secure Message</h3>
                    
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 dark:text-zinc-400 mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sophia Lawrence"
                        className="w-full py-2.5 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 dark:text-zinc-400 mb-2 block">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sophia@example.com"
                          className="w-full py-2.5 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 dark:text-zinc-400 mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+44 (0) 7946 0192"
                          className="w-full py-2.5 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-chocolate/70 dark:text-zinc-400 mb-2 block">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help? Tell us about your planned celebrations, dessert ideas, or bulk custom requirements."
                        className="w-full py-2.5 px-3 border border-beige/30 dark:border-zinc-800 bg-cream/50 dark:bg-zinc-900 rounded-lg text-xs font-semibold text-chocolate dark:text-cream focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-chocolate hover:bg-chocolate/95 dark:bg-amber-600 dark:hover:bg-amber-500 text-cream font-sans font-bold text-xs py-3.5 rounded-full shadow transition-all flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-8 h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-500 flex items-center justify-center mb-4 shadow">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-chocolate dark:text-cream mb-2">Message Dispatched!</h3>
                    <p className="font-sans text-xs sm:text-sm text-chocolate/80 dark:text-zinc-300 max-w-sm mb-6 leading-relaxed">
                      Thank you for contacting Bakingtreasure, <strong>{name}</strong>! Your inquiry was safely received. Our concierge team is already reviewing it and will get back to you via <strong>{email}</strong> shortly.
                    </p>
                    <button
                      onClick={handleResetForm}
                      className="bg-chocolate hover:bg-chocolate/95 dark:bg-amber-600 dark:hover:bg-amber-500 text-cream font-sans font-semibold text-xs px-6 py-2.5 rounded-full shadow transition-all uppercase tracking-wider"
                    >
                      Write New Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Embedded Interactive Map block */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-beige/25 dark:border-zinc-800 shadow-xl h-96 relative" id="location-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9056262450843!2d-0.1481512!3d51.5112658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d5302fa551%3A0xe98fc38b4ff51ab5!2sBruton%20Pl%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1719746358321!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bakingtreasure Mayfair Boutique Location Map"
          />
        </div>

      </div>
    </section>
  );
}
