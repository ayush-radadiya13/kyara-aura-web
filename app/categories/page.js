import { Suspense } from 'react';
import Header from '../../components/Header';
import CategoryBrowser from '@/components/CategoryBrowser';
import { LoaderBlock } from '@/components/ui/loader';

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

      <Suspense fallback={<LoaderBlock />}>
        <CategoryBrowser />
      </Suspense>
    </div>
  );
}
