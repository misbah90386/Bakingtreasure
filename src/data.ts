import { Product, Category, Testimonial, FAQItem } from './types';

export const BRAND_COLORS = {
  cream: '#FFF8F0',
  chocolate: '#5A3825',
  beige: '#D9B99B',
  pink: '#F8D9E2',
  gold: '#D4AF37'
};

export const CATEGORIES: Category[] = [
  {
    id: 'celebration-cakes',
    name: 'Celebration Cakes',
    icon: 'Cake',
    description: 'Elegant custom cakes for life’s grandest milestones.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'birthday-cakes',
    name: 'Birthday Cakes',
    icon: 'Sparkles',
    description: 'Whimsical and classic designs for a perfect celebration.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'wedding-cakes',
    name: 'Wedding Cakes',
    icon: 'Heart',
    description: 'Breathtaking multi-tiered masterpieces matching your love story.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    icon: 'Cupcake',
    description: 'Bite-sized luxury topped with rich, velvety frosting.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'brownies',
    name: 'Brownies',
    icon: 'Boxes',
    description: 'Fudgy, dense chocolate squares made with Belgian cacao.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cookies',
    name: 'Cookies',
    icon: 'Cookie',
    description: 'Soft-baked, golden-edged cookies loaded with premium toppings.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cheesecakes',
    name: 'Cheesecakes',
    icon: 'CircleDot',
    description: 'Creamy, rich cheesecakes on buttery graham cracker crusts.',
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'macarons',
    name: 'Macarons',
    icon: 'Circle',
    description: 'Delicate French almond shells sandwiching smooth ganache.',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'donuts',
    name: 'Donuts',
    icon: 'Donut',
    description: 'Fluffy brioche donuts glazed with homemade artisan sauces.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dessert-boxes',
    name: 'Dessert Boxes',
    icon: 'Gift',
    description: 'Curated assortments of our finest baked treats.',
    image: 'https://images.unsplash.com/photo-1513201099495-a636c5e5a24b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'pastries',
    name: 'Pastries',
    icon: 'Croissant',
    description: 'Flaky, laminated French pastries layered with pure butter.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'seasonal-specials',
    name: 'Seasonal Specials',
    icon: 'Calendar',
    description: 'Limited-edition creations inspired by nature’s turning seasons.',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop'
  }
];

export const PRODUCTS: Product[] = [
  // Celebration Cakes
  {
    id: 'cc-1',
    name: 'Golden Elegance Cake',
    category: 'celebration-cakes',
    description: 'Vanilla bean layers frosted in velvet buttercream and decorated with 24k gold leaf details.',
    startingPrice: 120,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    prepTime: '3 Days',
    tags: ['Best Seller', 'Gold Leaf', 'Vanilla'],
    popular: true
  },
  {
    id: 'cc-2',
    name: 'Floral cascade Celebration Cake',
    category: 'celebration-cakes',
    description: 'Decadent chocolate layers draped in lavender watercolor fondant and real pressed organic flowers.',
    startingPrice: 145,
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    prepTime: '3 Days',
    tags: ['Floral', 'Fondant', 'Chocolate']
  },

  // Birthday Cakes
  {
    id: 'bc-1',
    name: 'Choco-Berry Fantasy',
    category: 'birthday-cakes',
    description: 'Belgian chocolate ganache sponge adorned with fresh forest berries and golden macarons.',
    startingPrice: 85,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    prepTime: '2 Days',
    tags: ['Chocolate', 'Berries', 'Birthday'],
    popular: true
  },
  {
    id: 'bc-2',
    name: 'Pastel Unicorn Cake',
    category: 'birthday-cakes',
    description: 'Rainbow swirl sponge with strawberry buttercream and edible sugar-sculpted golden horn and ears.',
    startingPrice: 95,
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    prepTime: '2 Days',
    tags: ['Kids', 'Strawberry', 'Unicorn']
  },

  // Wedding Cakes
  {
    id: 'wc-1',
    name: 'Modern Marble Tiered Masterpiece',
    category: 'wedding-cakes',
    description: 'Three tiers of salted caramel and red velvet cakes styled with a striking marble fondant effect.',
    startingPrice: 480,
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop',
    rating: 5.0,
    prepTime: '7 Days',
    tags: ['Luxury', 'Wedding', 'Salted Caramel'],
    popular: true
  },
  {
    id: 'wc-2',
    name: 'Botanical Whimsical Cascade',
    category: 'wedding-cakes',
    description: 'Rustic naked cake design with rich honey-lemon sponge, rosemary sprigs and sugar-dusted berries.',
    startingPrice: 390,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    prepTime: '5 Days',
    tags: ['Naked Cake', 'Rustic', 'Lemon']
  },

  // Cupcakes
  {
    id: 'cu-1',
    name: 'Velvet Rose Cupcakes',
    category: 'cupcakes',
    description: 'Classic red velvet base crowned with smooth cream cheese roses and a dusting of pink shimmer.',
    startingPrice: 24,
    image: 'https://images.unsplash.com/photo-1614707267537-b85acf00c4b8?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    prepTime: '1 Day',
    tags: ['Red Velvet', 'Box of 6'],
    popular: true
  },
  {
    id: 'cu-2',
    name: 'Salted Caramel gold Cups',
    category: 'cupcakes',
    description: 'Chocolate sponge with a liquid caramel core, topped with gold-dusted caramel buttercream.',
    startingPrice: 26,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    prepTime: '1 Day',
    tags: ['Caramel', 'Box of 6']
  },

  // Brownies
  {
    id: 'br-1',
    name: 'Signature Sea Salt Fudge Brownies',
    category: 'brownies',
    description: 'Ultra-fudgy brownies containing chunks of 70% dark chocolate and topped with Maldon sea salt.',
    startingPrice: 22,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    prepTime: '1 Day',
    tags: ['Chocolate', 'Fudge', 'Sea Salt'],
    popular: true
  },

  // Cookies
  {
    id: 'co-1',
    name: 'Biscoff Stuffed Giant Cookies',
    category: 'cookies',
    description: 'Oversized golden brown cookies stuffed with a creamy cookie butter center and chocolate chips.',
    startingPrice: 18,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    prepTime: '1 Day',
    tags: ['Biscoff', 'Giant Cookies'],
    popular: true
  },

  // Cheesecakes
  {
    id: 'ch-1',
    name: 'Basque Burnt Cheesecake',
    category: 'cheesecakes',
    description: 'Caramelized burnt crust on the outside with a super creamy, melt-in-your-mouth interior.',
    startingPrice: 42,
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    prepTime: '1 Day',
    tags: ['Basque', 'Creamy'],
    popular: true
  },

  // Macarons
  {
    id: 'ma-1',
    name: 'Royal Paris Macaron Box',
    category: 'macarons',
    description: 'An elegant selection of Earl Grey, Pistachio, Salted Caramel, and Raspberry luxury macarons.',
    startingPrice: 32,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop',
    rating: 5.0,
    prepTime: '1 Day',
    tags: ['French', 'Gluten Free', 'Box of 12'],
    popular: true
  },

  // Donuts
  {
    id: 'do-1',
    name: 'Artisan Glazed Crème Brûlée Donuts',
    category: 'donuts',
    description: 'Fluffy brioche donuts filled with vanilla bean pastry cream and coated in a shattered-sugar glaze.',
    startingPrice: 20,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    prepTime: '1 Day',
    tags: ['Custard', 'Glazed', 'Box of 4']
  },

  // Dessert Boxes
  {
    id: 'db-1',
    name: 'Grand Celebration Treasure Box',
    category: 'dessert-boxes',
    description: 'A beautiful luxury box packed with macarons, sea-salt brownies, artisanal cupcakes, and cakepops.',
    startingPrice: 65,
    image: 'https://images.unsplash.com/photo-1513201099495-a636c5e5a24b?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    prepTime: '2 Days',
    tags: ['Assorted', 'Gift Box', 'Celebration'],
    popular: true
  },

  // Pastries
  {
    id: 'pa-1',
    name: 'Double Butter Pistachio Croissant',
    category: 'pastries',
    description: 'Laminated croissant filled with handmade pistachio cream and topped with crushed green pistachios.',
    startingPrice: 16,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    prepTime: '1 Day',
    tags: ['Pistachio', 'Flaky', 'Fresh Baked']
  },

  // Seasonal Specials
  {
    id: 'ss-1',
    name: 'Summer Spiced Fig Tart',
    category: 'seasonal-specials',
    description: 'Sweet pastry shell loaded with almond frangipane, cardamom cream, and fresh black honey figs.',
    startingPrice: 38,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    prepTime: '2 Days',
    tags: ['Limited', 'Fresh Fig', 'Summer']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Genevieve Sinclair',
    text: 'Absolutely delicious! I ordered the Modern Marble Wedding Cake for our vow renewal and it was the highlight of the night. Beautiful cake and amazing taste.',
    rating: 5,
    role: 'Bride & Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop'
  },
  {
    id: 't-2',
    name: 'Harrison Sterling',
    text: 'Best bakery experience. The level of customization they offered for our company celebration was remarkable. Highly recommended!',
    rating: 5,
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120&auto=format&fit=crop'
  },
  {
    id: 't-3',
    name: 'Alessia Moretti',
    text: 'Professional service and stunning cake designs. The macarons literally transport me back to Paris. They are absolute treasures!',
    rating: 5,
    role: 'Food & Lifestyle Blogger',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I place an order?',
    answer: 'You can explore our Featured Products and click the "Order Now" button on any item to open the dynamic checkout. Alternatively, use our interactive "Design Your Dream Cake" section to submit custom requests directly, or call/WhatsApp us!'
  },
  {
    id: 'faq-2',
    question: 'Can I customize cakes?',
    answer: 'Absolutely! Customization is our specialty. Use our "Design Your Dream Cake" builder on the website, where you can select flavor, size, shape, frosting, theme, color palette, and even upload inspiration images.'
  },
  {
    id: 'faq-3',
    question: 'How much notice is required?',
    answer: 'For standard cupcakes, pastries, and signature cakes, 1-2 days is sufficient. For tiered celebration and wedding cakes, we require at least 3-7 days notice to ensure proper craftsmanship and detail.'
  },
  {
    id: 'faq-4',
    question: 'Do you offer delivery?',
    answer: 'Yes! We offer professional temperature-controlled delivery for all our cakes and desserts across the metropolitan area to ensure your sweet treats arrive in pristine, perfect condition.'
  },
  {
    id: 'faq-5',
    question: 'Which payment methods are accepted?',
    answer: 'We accept all major credit cards, Apple Pay, Google Pay, and direct bank transfers. For custom order inquiries, we offer secure online invoicing upon confirming details.'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Apple',
    title: 'Fresh Ingredients',
    description: 'We source organic dairy, premium Belgian chocolates, and fresh farm-direct fruits.'
  },
  {
    icon: 'ChefHat',
    title: 'Handmade Daily',
    description: 'Every dessert is mixed, baked, and detailed fresh from scratch every morning.'
  },
  {
    icon: 'Award',
    title: 'Premium Quality',
    description: 'Uncompromising culinary standards with luxury award-winning presentation.'
  },
  {
    icon: 'Sparkles',
    title: 'Beautiful Custom Designs',
    description: 'We translate your moodboards and inspirations into edible centerpiece masterpieces.'
  },
  {
    icon: 'Truck',
    title: 'Fast Delivery',
    description: 'Secure, temperature-regulated delivery directly to your venue doorstep.'
  },
  {
    icon: 'DollarSign',
    title: 'Affordable Prices',
    description: 'Premium luxury experiences priced accessibly for everyday sweet moments.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Hygienic Preparation',
    description: 'Strict state-of-the-art sanitization protocols followed in our artisan kitchen.'
  },
  {
    icon: 'Smile',
    title: 'Customer Satisfaction',
    description: 'Over 5,000 celebration stories made sweeter with our 5-star customer reviews.'
  }
];

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=800&auto=format&fit=crop',
    title: 'Luxury Cake Sculpture',
    category: 'Wedding'
  },
  {
    src: 'https://images.unsplash.com/photo-1513201099495-a636c5e5a24b?q=80&w=800&auto=format&fit=crop',
    title: 'Gourmet Treasure Boxes',
    category: 'Dessert Boxes'
  },
  {
    src: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop',
    title: 'French Macaron Cascade',
    category: 'Macarons'
  },
  {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
    title: 'Choco-Berry Birthday Cake',
    category: 'Birthday'
  },
  {
    src: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop',
    title: 'Salted Caramel Gold Cups',
    category: 'Cupcakes'
  },
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    title: 'Double-Butter Croissants',
    category: 'Pastries'
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop',
    title: 'Contemporary Marble Fondant',
    category: 'Wedding'
  },
  {
    src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
    title: 'Sea Salt Fudge Brownies',
    category: 'Brownies'
  },
  {
    src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop',
    title: 'Botanical Rustic Tiers',
    category: 'Wedding'
  }
];
