import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';

// Static mock data for jewellery demonstration
const mockProducts = [
  { _id: '1', name: 'Celestial Diamond Ring', slug: 'celestial-diamond-ring', price: 1240, category: { name: 'Rings' }, images: ['/images/product-1.png'] },
  { _id: '2', name: 'Rose Gold Halo Set', slug: 'rose-gold-halo-set', price: 980, category: { name: 'Sets' }, images: ['/images/product-2.png'] },
  { _id: '3', name: 'Pearl Grace Pendant', slug: 'pearl-grace-pendant', price: 760, category: { name: 'Pendants' }, images: ['/images/product-3.png'] },
  { _id: '4', name: 'Midnight Diamond Earrings', slug: 'midnight-diamond-earrings', price: 1450, category: { name: 'Earrings' }, images: ['/images/product-4.png'] },
  { _id: '5', name: 'Eternal Love Bracelet', slug: 'eternal-love-bracelet', price: 890, category: { name: 'Bracelets' }, images: ['/images/product-5.png'] },
  { _id: '6', name: 'Royal Sapphire Ring', slug: 'royal-sapphire-ring', price: 2100, category: { name: 'Rings' }, images: ['/images/product-6.png'] },
  { _id: '7', name: 'Vintage Crystal Necklace', slug: 'vintage-crystal-necklace', price: 1350, category: { name: 'Necklaces' }, images: ['/images/product-7.png'] },
  { _id: '8', name: 'Diamond Stud Earrings', slug: 'diamond-stud-earrings', price: 680, category: { name: 'Earrings' }, images: ['/images/product-8.png'] },
];

export default function ProductsPage() {
  return (
    <div>
      <Header />
      
      {/* Page Title and Description Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite collection of fine jewellery, where each piece is meticulously crafted with precision and passion. From timeless classics to contemporary designs, find the perfect expression of your unique style.
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        {mockProducts.length ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 py-12 text-center">
            No products available at the moment.
          </p>
        )}
      </section>
    </div>
  );
}
