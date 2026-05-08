"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Gem,
  Menu,
  ShoppingBag,
  Sparkles,
  User,
  X,
} from "lucide-react";

const navItems = ["Home", "Collections", "About", "Services", "Journal", "Contact"];

const featuredCollections = [
  { name: "Celestial Diamond Ring", price: "$1,240", image: "/images/product-1.png" },
  { name: "Rose Gold Halo Set", price: "$980", image: "/images/product-2.png" },
  { name: "Pearl Grace Pendant", price: "$760", image: "/images/product-3.png" },
];

const featureItems = [
  {
    title: "Ethically Sourced Stones",
    description: "Certified diamonds and gemstones selected through transparent sourcing.",
    icon: "/images/truck.svg",
  },
  {
    title: "Easy Personal Styling",
    description: "Find pieces for daily elegance and bridal moments with guided support.",
    icon: "/images/bag.svg",
  },
  {
    title: "Concierge Assistance",
    description: "Our jewellery experts are available every day for styling and gifting help.",
    icon: "/images/support.svg",
  },
  {
    title: "Lifetime Service",
    description: "Enjoy cleaning, resizing, and care support for all signature pieces.",
    icon: "/images/return.svg",
  },
];

const spotlightProducts = [
  {
    title: "Starlight Ring",
    description: "An elegant everyday ring with a refined finish and modern profile.",
    image: "/images/product-1.png",
  },
  {
    title: "Aurora Earrings",
    description: "Lightweight drop earrings crafted for evening celebrations.",
    image: "/images/product-2.png",
  },
  {
    title: "Velvet Pendant",
    description: "A polished pendant made to complement both modern and classic attire.",
    image: "/images/product-3.png",
  },
];

const testimonials = [
  {
    quote:
      "Kyara Aura made my wedding jewellery shopping effortless. Every detail felt premium and personal from consultation to delivery.",
    author: "Nisha Sharma",
    role: "Bridal Client",
  },
  {
    quote:
      "The craftsmanship is beautiful and the quality is exceptional. I receive compliments every time I wear my pendant set.",
    author: "Ritika Mehta",
    role: "Returning Customer",
  },
  {
    quote:
      "I needed a luxury gift with short notice. Their team suggested the perfect piece and shipped it the same day.",
    author: "Arjun Kapoor",
    role: "Corporate Buyer",
  },
];

const blogPosts = [
  {
    title: "How to Choose Jewellery for Your Wedding Look",
    image: "/images/post-1.jpg",
    author: "Anaya Rao",
    date: "May 1, 2026",
  },
  {
    title: "Daily Jewellery Care Tips to Keep Pieces Brilliant",
    image: "/images/post-2.jpg",
    author: "Ishita Das",
    date: "Apr 26, 2026",
  },
  {
    title: "Layering Necklaces: Minimal to Occasion Styling",
    image: "/images/post-3.jpg",
    author: "Sana Malhotra",
    date: "Apr 18, 2026",
  },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const goToPreviousTestimonial = () =>
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  const goToNextTestimonial = () =>
    setActiveTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );

  return (
    <div className="bg-[#fffaf5] text-[#2e1f1d]">
      <header className="bg-[#2b211f] text-white">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-semibold tracking-wide">
            Kyara Aura<span className="text-amber-300">.</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/80 transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <button aria-label="Account" className="rounded-full p-2 hover:bg-white/10">
              <User size={18} />
            </button>
            <button aria-label="Cart" className="rounded-full p-2 hover:bg-white/10">
              <ShoppingBag size={18} />
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#" className="block text-white/90">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        <section className="bg-[#2b211f] pb-14 pt-12 text-white">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Timeless Jewellery <span className="block text-amber-300">for Every Story</span>
              </h1>
              <p className="mt-4 max-w-xl text-white/80">
                Discover handcrafted rings, necklaces, and statement sets designed
                to celebrate your moments with elegance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#collections"
                  className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-[#2b211f]"
                >
                  Shop Now
                </a>
                <a
                  href="#story"
                  className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white"
                >
                  Explore
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-lg">
              <Image
                src="/images/couch.png"
                alt="Jewellery collection hero visual"
                width={820}
                height={640}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </section>

        <section id="collections" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-3xl font-semibold">Crafted with precious materials.</h2>
              <p className="mt-4 text-[#6f5a55]">
                Each piece is designed in-house with expert finishing and carefully
                selected stones to create lasting sparkle.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex rounded-full bg-[#2b211f] px-5 py-2 text-sm font-semibold text-white"
              >
                Explore
              </a>
            </div>

            {featuredCollections.map((product) => (
              <a
                key={product.name}
                href="#"
                className="group rounded-2xl border border-[#eaded6] bg-white p-4 text-center shadow-sm transition hover:-translate-y-1"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={260}
                  height={220}
                  className="mx-auto h-48 w-auto object-contain"
                />
                <h3 className="mt-3 font-semibold">{product.name}</h3>
                <p className="mt-1 text-[#7f675f]">{product.price}</p>
                <span className="mt-3 inline-block rounded-full bg-[#f8efe8] px-4 py-1 text-sm text-[#4d3834] group-hover:bg-[#edd6c8]">
                  Add to cart
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-[#fff4ec] py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Why Choose Us</h2>
              <p className="mt-4 text-[#6f5a55]">
                We blend premium artistry, transparent quality, and dedicated service
                to make your jewellery experience seamless.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {featureItems.map((feature) => (
                  <article key={feature.title}>
                    <Image src={feature.icon} alt="" width={34} height={34} />
                    <h3 className="mt-3 font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-[#6f5a55]">{feature.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <Image
                src="/images/why-choose-us-img.jpg"
                alt="Jewellery studio craftsmanship"
                width={600}
                height={700}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/img-grid-1.jpg"
                alt="Jewellery detail"
                width={360}
                height={460}
                className="h-full rounded-2xl object-cover"
              />
              <Image
                src="/images/img-grid-2.jpg"
                alt="Model styling jewellery"
                width={360}
                height={260}
                className="rounded-2xl object-cover"
              />
              <Image
                src="/images/img-grid-3.jpg"
                alt="Jewellery boutique interior"
                width={360}
                height={260}
                className="col-span-2 rounded-2xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Jewellery that matches your moments</h2>
              <p className="mt-4 text-[#6f5a55]">
                From engagement ceremonies to daily elegance, our collection is curated
                to help you style every occasion with confidence.
              </p>
              <ul className="mt-6 space-y-3 text-[#4d3834]">
                <li>Certified diamonds and hallmark gold standards.</li>
                <li>Custom sizing and personalized engraving options.</li>
                <li>Hand-finished designs crafted by experienced artisans.</li>
                <li>Secure packaging for gifting and safe doorstep delivery.</li>
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex rounded-full bg-[#2b211f] px-5 py-2 text-sm font-semibold text-white"
              >
                Explore
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#fff4ec] py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {spotlightProducts.map((item) => (
                <article key={item.title} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="h-24 w-24 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#6f5a55]">{item.description}</p>
                    <a href="#" className="mt-2 inline-block text-sm font-semibold text-[#6d3f33]">
                      Read More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold">Testimonials</h2>
          <div className="mt-8 rounded-3xl border border-[#ecdccf] bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-[#523b35]">{testimonials[activeTestimonial].quote}</p>
            <p className="mt-6 text-base font-semibold">{testimonials[activeTestimonial].author}</p>
            <p className="text-sm text-[#8b716b]">{testimonials[activeTestimonial].role}</p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                aria-label="Previous testimonial"
                onClick={goToPreviousTestimonial}
                className="rounded-full border border-[#dbc8bb] p-2 text-[#5e443d] hover:bg-[#f9f1eb]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={goToNextTestimonial}
                className="rounded-full border border-[#dbc8bb] p-2 text-[#5e443d] hover:bg-[#f9f1eb]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold">Recent Journal</h2>
            <a href="#" className="font-semibold text-[#6d3f33]">
              View All Posts
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={420}
                  height={260}
                  className="h-52 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="mt-2 text-sm text-[#8b716b]">
                    by {post.author} on {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#2b211f] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <h3 className="text-2xl font-semibold">Subscribe to our newsletter</h3>
            <form className="flex flex-wrap gap-3">
              <input
                type="text"
                placeholder="Enter your name"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm placeholder:text-white/60"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm placeholder:text-white/60"
              />
              <button
                type="button"
                className="rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-[#2b211f]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid gap-8 border-y border-white/15 py-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-2xl font-semibold">Kyara Aura.</p>
              <p className="mt-4 max-w-md text-sm text-white/75">
                Premium jewellery for modern celebrations. Designed with care, crafted
                for elegance, and made to shine for years.
              </p>
              <div className="mt-5 flex gap-3">
                <a href="#" className="rounded-full border border-white/20 p-2 text-white/80">
                  <Gem size={16} />
                </a>
                <a href="#" className="rounded-full border border-white/20 p-2 text-white/80">
                  <Sparkles size={16} />
                </a>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#">Support</a></li>
              <li><a href="#">Knowledge base</a></li>
              <li><a href="#">Live chat</a></li>
            </ul>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#">Bridal Collection</a></li>
              <li><a href="#">Diamond Rings</a></li>
              <li><a href="#">Signature Pendants</a></li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-white/70">
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
