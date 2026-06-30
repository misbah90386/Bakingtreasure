import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Heart, ChefHat } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [msgText, setMsgText] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'concierge', text: string }>>([]);

  useEffect(() => {
    // Seed initial greeting message
    setChatHistory([
      {
        sender: 'concierge',
        text: 'Bonjour! Welcome to Bakingtreasure. I am Chef Émilie, your sweet concierge. How can I help make your celebration unforgettable today?'
      }
    ]);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgText.trim()) return;

    const userMsg = msgText;
    setChatHistory(prev => [...prev, { sender: 'user', text: userMsg }]);
    setMsgText('');

    // Simulate concierge typing
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        {
          sender: 'concierge',
          text: 'Perfect! Click below to send your request directly to our master kitchen via secure WhatsApp line so we can organize your delivery.'
        }
      ]);
    }, 1000);
  };

  const constructWhatsAppLink = (message: string) => {
    const defaultText = `Hello Bakingtreasure! I am interested in placing an order.`;
    const finalMsg = message ? encodeURIComponent(message) : encodeURIComponent(defaultText);
    return `https://wa.me/442079460192?text=${finalMsg}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end" id="whatsapp-floating-widget">
      
      {/* Interactive Chat bubble screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            className="w-80 sm:w-85 bg-cream dark:bg-zinc-900 border border-beige/30 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden mb-4 flex flex-col max-h-[420px] filter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header branding */}
            <div className="bg-emerald-600 p-4.5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center text-cream relative">
                  <ChefHat className="w-5.5 h-5.5" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold leading-tight">Chef Émilie</h4>
                  <span className="text-[10px] text-emerald-100 uppercase tracking-wider block font-sans font-medium">Bakingtreasure Master Chef</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Close chat window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrolling Chat log */}
            <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-cream/40 dark:bg-zinc-950/40 text-xs sm:text-sm">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-cream rounded-tr-none'
                        : 'bg-cream dark:bg-zinc-900 text-chocolate dark:text-zinc-300 rounded-tl-none border border-beige/10 dark:border-zinc-800/80'
                    }`}
                  >
                    <p className="font-sans leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Text input + external redirection link */}
            <div className="p-3 bg-cream dark:bg-zinc-900 border-t border-beige/10 dark:border-zinc-800 space-y-2">
              <form onSubmit={handleSend} className="flex gap-2 relative">
                <input
                  type="text"
                  placeholder="Type your inquiry..."
                  value={msgText}
                  onChange={(e) => setMsgText(e.target.value)}
                  className="flex-grow bg-beige/10 dark:bg-zinc-950 border border-beige/25 dark:border-zinc-800 text-xs rounded-full py-2.5 pl-4 pr-10 text-chocolate dark:text-cream placeholder-chocolate/40 dark:placeholder-zinc-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-cream flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                  aria-label="Send messages"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Direct redirect Link */}
              <div className="pt-1 text-center">
                <a
                  href={constructWhatsAppLink(chatHistory.filter(m => m.sender === 'user').pop()?.text || '')}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 font-sans font-bold uppercase tracking-wider block hover:underline"
                >
                  Open WhatsApp Redirection →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating pulsing button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={!isOpen ? { scale: [1, 1.05, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-cream flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-transform relative border border-emerald-500/20"
        aria-label="Open custom WhatsApp helper chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

    </div>
  );
}
