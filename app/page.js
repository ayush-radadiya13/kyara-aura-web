import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import CategoryGrid from '@/components/CategoryGrid';
import ProductList from '@/components/ProductList';

export default function HomePage() {
  return (
      <div className="bg-white text-gray-950">
        <div>
          <Header />
          <HeroCarousel variant="editorial" />
        </div>

        {/* Categories Section */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="mb-8">
          <h2 className="font-display text-3xl font-light text-gray-950 sm:text-4xl ">Categories</h2>
          </div>

          <CategoryGrid variant="strip" limit={6} />
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
          <div className="mb-8 flex items-center justify-between gap-6">
            <h2 className="font-display text-3xl font-light text-gray-950 sm:text-4xl">Products</h2>
            <div className="hidden items-center gap-4 text-[10px] text-gray-400 sm:flex">
              <span>Sort by</span>
              <Link
                  href="/products"
                  className="border-b border-gray-200 px-5 pb-3 text-gray-950 transition hover:border-gray-950"
              >
                Women Product
              </Link>
              <span className="text-gray-500">⌄</span>
            </div>
          </div>
          <ProductList
              featured
              limit={6}
              variant="editorial"
              emptyMessage="No featured products available at the moment."
          />
        </section>


        <section className="relative min-h-[72vh] overflow-hidden bg-gray-950">
          <video
              className="absolute inset-0 h-full w-full object-cover opacity-[0.45]"
              src="/vedio/vedio1.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/home4.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/45" />
          <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-5xl flex-col items-center justify-center px-6 text-center text-white">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-white/80">
              Jewellery
            </p>
            <h1 className="font-display text-5xl font-light uppercase leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-[92px]">
              New Arrival
            </h1>
            <p className="mt-5 max-w-xl text-xs leading-5 text-white/85 sm:text-sm">
              Presented in timeless adornment, for those who seek both beauty and refined minimalism.
            </p>
            <Link
                href="/products"
                className="mt-8 border border-white/70 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-gray-950"
            >
              Shop Now
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="mb-10 grid grid-cols-2 items-center gap-8 text-center text-xs uppercase tracking-[0.28em] text-gray-300 sm:grid-cols-3 lg:grid-cols-6">
            {['Holliage', 'Aura', 'QKE', 'Bridal', 'Kyara', 'Lumiere'].map((brand) => (
                <span key={brand} className="font-display normal-case tracking-normal">
              {brand}
            </span>
            ))}
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative aspect-[1.1] overflow-hidden bg-[#f6f3ef]">
              <Image
                  src="/assets/home2.jpg"
                  alt="Model wearing gold jewellery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
              />
              <span className="absolute bottom-5 right-5 bg-gray-950 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
              Limited Stock
            </span>
            </div>

            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-gray-400">New story</p>
              <h2 className="font-display text-4xl font-light text-gray-950 sm:text-5xl">
                EVE Collection
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
                Embrace the enchanting allure of the EVE Collection, a limited edition jewellery line
                that intertwines graceful symbolism with a modern golden glow.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { title: 'Earrings', price: 'Rs. 13,999', image: '/assets/home1.jpg' },
                  { title: 'Necklace', price: 'Rs. 10,999', image: '/assets/home4.jpg' },
                  { title: 'Ring', price: 'Rs. 9,999', image: '/assets/home2.jpg' },
                ].map((item) => (
                    <div key={item.title} className="group bg-[#f8f8f7]">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 15vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-md font-semibold text-gray-950">{item.title}</h3>
                        <p className="mt-1 text-xs text-gray-500">{item.price}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Best Seller Products Section */}
        <section className="bg-[#faf9f7]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[260px_1fr]">
            <div className="lg:pt-8">
              <p className="mb-6 text-[10px] uppercase tracking-[0.32em] text-gray-400">Shop</p>
              <h2 className="font-display text-3xl font-light text-gray-950 sm:text-4xl">
                On Trending
                <span className="block">Products</span>
              </h2>
              <p className="mt-5 text-sm leading-6 text-gray-600">
                Discover our handpicked collection of exquisite jewellery pieces, curated to elevate
                every style and capture the essence of sophistication.
              </p>
            </div>

            <div>
              <div className="mb-8 flex items-center justify-between gap-6">
                <h2 className="font-display text-3xl font-light text-gray-950 sm:text-4xl">
                  Best Seller
                </h2>
                <div className="hidden items-center gap-4 text-[10px] text-gray-400 sm:flex">
                  <span>Sort by</span>
                  <Link
                      href="/products"
                      className="border-b border-gray-200 px-5 pb-3 text-gray-950 transition hover:border-gray-950"
                  >
                    Women Product
                  </Link>
                  <span className="text-gray-500">⌄</span>
                </div>
              </div>
              <ProductList
                  featured
                  pageSize={12}
                  variant="editorial"
                  emptyMessage="No featured products available at the moment."
              />
            </div>
          </div>
        </section>
      </div>
  );
}
