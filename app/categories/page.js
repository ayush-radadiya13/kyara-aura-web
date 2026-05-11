import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';

// Static mock data for jewellery demonstration
const mockCategories = [
  { _id: '1', name: 'Rings', image: '/images/rings-category.jpg', description: 'Elegant rings crafted with precision and love' },
  { _id: '2', name: 'Necklaces', image: '/images/necklaces-category.jpg', description: 'Stunning necklaces that capture every gaze' },
  { _id: '3', name: 'Earrings', image: '/images/earrings-category.jpg', description: 'Beautiful earrings to complement your style' },
  { _id: '4', name: 'Bracelets', image: '/images/bracelets-category.jpg', description: 'Delicate bracelets for everyday elegance' },
  { _id: '5', name: 'Pendants', image: '/images/pendants-category.jpg', description: 'Charming pendants with meaningful designs' },
  { _id: '6', name: 'Sets', image: '/images/sets-category.jpg', description: 'Coordinated sets for complete elegance' },
];

const mockProducts = [
  { _id: '1', name: 'Celestial Diamond Ring', slug: 'celestial-diamond-ring', price: 1240, category: { name: 'Rings' }, images: ['/images/product-1.png'] },
  { _id: '2', name: 'Rose Gold Halo Set', slug: 'rose-gold-halo-set', price: 980, category: { name: 'Sets' }, images: ['/images/product-2.png'] },
  { _id: '3', name: 'Pearl Grace Pendant', slug: 'pearl-grace-pendant', price: 760, category: { name: 'Pendants' }, images: ['/images/product-3.png'] },
  { _id: '4', name: 'Midnight Diamond Earrings', slug: 'midnight-diamond-earrings', price: 1450, category: { name: 'Earrings' }, images: ['/images/product-4.png'] },
  { _id: '5', name: 'Eternal Love Bracelet', slug: 'eternal-love-bracelet', price: 890, category: { name: 'Bracelets' }, images: ['/images/product-5.png'] },
  { _id: '6', name: 'Royal Sapphire Ring', slug: 'royal-sapphire-ring', price: 2100, category: { name: 'Rings' }, images: ['/images/product-6.png'] },
];

function categoryImageSrc(image) {
  if (!image || typeof image !== 'string') return '';
  if (image.startsWith('http')) return image;
  return image;
}

export default function CategoriesPage() {
  return (
    <div>
      <Header />
      
      {/* Page Title and Description Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl text-gray-900 mb-4">
            Shop by Category
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our curated collections organized by category. From timeless rings to elegant necklaces, each category showcases our commitment to craftsmanship and beauty. Find the perfect piece that speaks to your heart and complements your unique style.
          </p>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {mockCategories.map((category) => {
            const src = categoryImageSrc(category.image);
            return (
              <Link
                key={category._id}
                href={`/products?category=${category._id}`}
                className="group relative aspect-square rounded-lg overflow-hidden glass-card hover:shadow-gold-glow-sm transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-white"
              >
                {src ? (
                  <Image
                    src={src}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-gray-50 to-gray-100 flex items-center justify-center p-4">
                    <span className="font-display text-sm sm:text-lg text-gray-600/80 text-center">{category.name}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 font-medium text-white text-xs sm:text-sm text-center">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20 border-t border-gray-200 bg-gray-50/50">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked pieces from our collection that showcase the finest craftsmanship and design
          </p>
        </div>
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
