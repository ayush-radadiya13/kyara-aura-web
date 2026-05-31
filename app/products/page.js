
import Header from '../../components/Header';
import ProductCategoryNav from '@/components/ProductCategoryNav';
import ProductList from '@/components/ProductList';

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const categoryId = Array.isArray(params?.category)
    ? params.category[0]
    : params?.category;

  return (
    <div className="bg-white text-gray-950">
      <Header />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:pb-24">
        <div className="mb-8 text-center">
          <h1 className="font-display text-4xl font-light text-gray-950 md:text-5xl">
            Products
          </h1>

          <ProductCategoryNav activeCategoryId={categoryId} />
        </div>

        <ProductList
          categoryId={categoryId}
          pageSize={16}
          variant="catalog"
        />
      </section>
    </div>
  );
}
