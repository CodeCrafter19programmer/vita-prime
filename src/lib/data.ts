export type ProductCategory =
  | 'vitamins' | 'omega' | 'protein' | 'womens' | 'mens'
  | 'kids' | 'immune' | 'beauty' | 'joint' | 'sleep'

export type ProductTag = 'bestseller' | 'new' | 'sale' | ''

export interface Product {
  id: number
  slug: string
  name: string
  subtitle: string
  category: ProductCategory
  tag: ProductTag
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  description: string
  // Bottle display
  bottleHue: string   // HSL hue for gradient
  capColor: string
  inStock: boolean
}

export interface HealthGoal {
  emoji: string
  name: string
  slug: string
  productCount: number
}

export const PRODUCTS: Product[] = [
  {
    id: 1, slug: 'wellwoman-original',
    name: 'Wellwoman Original', subtitle: 'Complete Women\'s Multi',
    category: 'womens', tag: 'bestseller',
    price: 42000, originalPrice: 52000,
    rating: 5, reviewCount: 412,
    description: 'Complete multivitamin formula designed for women. Supports energy, skin, hair & hormonal balance.',
    bottleHue: '340', capColor: '#C9627A', inStock: true,
  },
  {
    id: 2, slug: 'wellman-sport',
    name: 'Wellman Sport', subtitle: 'Performance Men\'s Multi',
    category: 'mens', tag: 'bestseller',
    price: 48000,
    rating: 5, reviewCount: 287,
    description: 'Performance multivitamin for active men. B-vitamins, zinc & antioxidants for daily vitality.',
    bottleHue: '155', capColor: '#2D7A4F', inStock: true,
  },
  {
    id: 3, slug: 'omega-3-pro',
    name: 'Omega-3 Pro Max', subtitle: 'Ultra-Pure Fish Oil',
    category: 'omega', tag: 'new',
    price: 38000, originalPrice: 45000,
    rating: 4, reviewCount: 156,
    description: 'Ultra-pure concentrated fish oil. 1000mg EPA+DHA per capsule for heart, brain & joint support.',
    bottleHue: '210', capColor: '#2A6090', inStock: true,
  },
  {
    id: 4, slug: 'wellkid-gummies',
    name: 'Wellkid Smart', subtitle: 'Children\'s Gummies',
    category: 'kids', tag: 'bestseller',
    price: 35000,
    rating: 5, reviewCount: 534,
    description: 'Delicious sugar-free gummies with vitamins A, C, D & zinc to support growing children aged 4–12.',
    bottleHue: '85', capColor: '#5A8F2A', inStock: true,
  },
  {
    id: 5, slug: 'collagen-beauty',
    name: 'Collagen Beauty', subtitle: 'Marine Collagen + Vit C',
    category: 'beauty', tag: 'new',
    price: 55000, originalPrice: 65000,
    rating: 5, reviewCount: 198,
    description: 'Marine collagen with vitamin C. Supports skin elasticity, reduces fine lines & strengthens nails.',
    bottleHue: '28', capColor: '#C07835', inStock: true,
  },
  {
    id: 6, slug: 'vitamin-d3',
    name: 'Vitamin D3 5000IU', subtitle: 'High-Strength Sunshine Vitamin',
    category: 'vitamins', tag: 'sale',
    price: 28000, originalPrice: 38000,
    rating: 4, reviewCount: 321,
    description: 'High-strength Vitamin D3 softgels. Essential for immunity, bone density & mood regulation.',
    bottleHue: '45', capColor: '#B08820', inStock: true,
  },
  {
    id: 7, slug: 'immune-defense',
    name: 'Immune Defence', subtitle: 'Immunity Complex',
    category: 'immune', tag: 'bestseller',
    price: 32000, originalPrice: 40000,
    rating: 5, reviewCount: 445,
    description: 'Powerful immunity complex with Vitamin C, zinc, elderberry & echinacea. Stay protected year-round.',
    bottleHue: '165', capColor: '#1A7060', inStock: true,
  },
  {
    id: 8, slug: 'glucosamine-max',
    name: 'Glucosamine Max', subtitle: 'Joint & Bone Formula',
    category: 'joint', tag: '',
    price: 45000,
    rating: 4, reviewCount: 89,
    description: 'Advanced joint formula with glucosamine, chondroitin & MSM for cartilage support & mobility.',
    bottleHue: '25', capColor: '#9A5820', inStock: true,
  },
]

export const HEALTH_GOALS: HealthGoal[] = [
  { emoji: '💪', name: 'Build Muscle', slug: 'muscle', productCount: 18 },
  { emoji: '🧠', name: 'Brain & Focus', slug: 'brain', productCount: 12 },
  { emoji: '😴', name: 'Better Sleep', slug: 'sleep', productCount: 9 },
  { emoji: '🛡️', name: 'Boost Immunity', slug: 'immunity', productCount: 21 },
  { emoji: '⚖️', name: 'Weight Management', slug: 'weight', productCount: 15 },
  { emoji: '💆', name: 'Stress & Mood', slug: 'stress', productCount: 11 },
  { emoji: '🌸', name: 'Women\'s Wellness', slug: 'womens', productCount: 24 },
  { emoji: '🦴', name: 'Bones & Joints', slug: 'joints', productCount: 14 },
  { emoji: '✨', name: 'Skin & Beauty', slug: 'beauty', productCount: 17 },
  { emoji: '❤️', name: 'Heart Health', slug: 'heart', productCount: 10 },
]

export const TESTIMONIALS = [
  {
    name: 'Aisha Kamya', location: 'Ntinda, Kampala', initials: 'AK', hue: '340',
    text: 'I\'ve been taking the Wellwoman vitamins for 3 months and the difference in my energy is incredible. Delivery to Ntinda was next day — I was shocked how fast!',
    rating: 5,
  },
  {
    name: 'James Mugisha', location: 'Entebbe', initials: 'JM', hue: '155',
    text: 'Finally a trusted place to get Omega-3 in Uganda without worrying if it\'s fake. I\'ve ordered four times now — always genuine, always on time.',
    rating: 5,
  },
  {
    name: 'Ruth Nakato', location: 'Mbarara', initials: 'RN', hue: '28',
    text: 'My kids love the Wellkid gummies! Customer service on WhatsApp helped me pick the right product. Will always shop here for the whole family.',
    rating: 5,
  },
]
