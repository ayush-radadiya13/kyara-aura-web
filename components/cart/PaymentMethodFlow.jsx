'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import {
  BadgeCheck,
  ChevronRight,
  CircleCheck,
  CreditCard,
  Gem,
  Percent,
  ShieldCheck,
  Smartphone,
  Truck,
  Wallet,
} from 'lucide-react';
import CheckoutSteps from '@/components/cart/CheckoutSteps';
import { formatInr } from '@/lib/cart/format';
import { useCartStore } from '@/lib/cart/store';
import { APP_ROUTES } from '@/lib/routes';

const PAYMENT_OPTIONS = [
  {
    id: 'online',
    title: 'Pay Online',
    description: 'Cards, UPI, wallet, and net banking accepted securely.',
    badge: '- ₹100 discount',
    discount: 100,
    Icon: CreditCard,
  },
  {
    id: 'advance',
    title: 'Pay ₹100 Advance',
    description: 'Pay a small advance now and the balance on delivery.',
    badge: '- ₹25 OFF',
    discount: 25,
    Icon: Smartphone,
  },
  {
    id: 'cod',
    title: 'Pay COD (Cash on Delivery)',
    description: 'Pay when your jewellery reaches your doorstep.',
    badge: 'Most flexible',
    discount: 0,
    Icon: Wallet,
  },
];

const TRUST_POINTS = [
  { label: 'Lowest Price', Icon: Percent },
  { label: 'Next day dispatch', Icon: Truck },
  { label: 'Superior Quality', Icon: BadgeCheck },
];

export default function PaymentMethodFlow() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const itemCount = useCartStore((state) => state.itemCount);
  const [selectedMethod, setSelectedMethod] = useState('cod');

  const visibleTotal = useMemo(
    () => total || items.reduce((sum, item) => sum + (item.subtotal ?? item.price * item.quantity), 0),
    [items, total],
  );
  const originalTotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + (item.originalPrice || item.price) * item.quantity,
        0,
      ) || visibleTotal,
    [items, visibleTotal],
  );
  const visibleCount = itemCount || items.reduce((sum, item) => sum + item.quantity, 0);
  const saleDiscount = Math.max(originalTotal - visibleTotal, 0);
  const selectedOption = PAYMENT_OPTIONS.find((option) => option.id === selectedMethod) ?? PAYMENT_OPTIONS[0];
  const paymentDiscount = visibleTotal > 0 ? Math.min(selectedOption.discount, visibleTotal) : 0;
  const finalTotal = Math.max(visibleTotal - paymentDiscount, 0);
  const totalSavings = saleDiscount + paymentDiscount;

  return (
    <div className="bg-white pb-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-10">
        <div className="mb-8">
          <CheckoutSteps activeStep={2} />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
          <ProductDetailsSection items={items} visibleCount={visibleCount} />

          <div className="space-y-6 lg:sticky lg:top-24">
            <section className="border-b border-gray-200 pb-5">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-xl font-bold text-gray-950">Delivery Address</h1>
                <Link
                  href={APP_ROUTES.CART}
                  className="text-sm font-bold text-[#4f63d9] underline underline-offset-2"
                >
                  Change
                </Link>
              </div>

              <div className="mt-4 border border-gray-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6aab8e]/10 text-[#4f8d73]">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-gray-950">Saved delivery location</p>
                    <p className="mt-1 text-sm leading-5 text-gray-700">
                      Your order will be delivered to the saved address on your account.
                    </p>
                    <p className="mt-2 text-sm font-semibold text-gray-950">Mobile: linked to your profile</p>
                  </div>
                </div>
                <div className="mt-4 bg-[#f2eee8] px-4 py-2 text-center text-sm font-bold text-gray-900">
                  Free Delivery within 3-6 days
                </div>
              </div>
            </section>

            <section className="border-b border-gray-200 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-gray-950">Payment Method</h2>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#4f63d9]">
                  <ShieldCheck className="h-4 w-4" />
                  100% safe payments
                </div>
              </div>

              <div className="mt-5 divide-y divide-gray-200">
                {PAYMENT_OPTIONS.map(({ id, title, description, badge, Icon }) => {
                  const isSelected = selectedMethod === id;

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSelectedMethod(id)}
                      className="flex w-full items-start gap-3 py-5 text-left sm:gap-4"
                    >
                      <span
                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          isSelected ? 'border-[#4f3128]' : 'border-gray-400'
                        }`}
                      >
                        {isSelected ? <span className="h-2.5 w-2.5 rounded-full bg-[#4f3128]" /> : null}
                      </span>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f0ea] text-[#4f3128]">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-gray-950">{title}</span>
                          {id === 'advance' ? (
                            <span className="rounded-full bg-[#eef1ff] px-2 py-0.5 text-xs font-bold text-[#4f63d9]">
                              new
                            </span>
                          ) : null}
                        </span>
                        <span className="mt-1 block text-sm leading-5 text-gray-500">{description}</span>
                      </span>

                      <span className="hidden shrink-0 text-sm font-bold text-[#4f63d9] sm:block">{badge}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-none border border-[#d6daef] bg-[#eef1ff] p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4f63d9] text-white">
                  <Percent className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-950">Save up to ₹100</p>
                  <p className="mt-1 text-sm text-gray-600">4 offers available</p>
                </div>
                <button type="button" className="text-sm font-bold text-[#4f63d9]">
                  Apply
                </button>
              </div>
            </section>

            <BillDetails
              visibleCount={visibleCount}
              originalTotal={originalTotal}
              saleDiscount={saleDiscount}
              paymentDiscount={paymentDiscount}
              finalTotal={finalTotal}
            />

            <div className="grid grid-cols-3 gap-3 border-y border-gray-200 py-7">
              {TRUST_POINTS.map(({ label, Icon }) => (
                <div key={label} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d4a373] bg-[#1f2a44] text-[#d4a373]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-3 text-xs font-bold text-gray-950 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>

            <div className="hidden border-t border-gray-200 pt-5 lg:flex lg:items-center lg:justify-between lg:gap-4">
              <div>
                <p className="text-sm font-bold text-gray-950">Total amount</p>
                <p className="text-xl font-bold text-gray-950">{formatInr(finalTotal)}</p>
                {totalSavings > 0 ? (
                  <p className="mt-1 text-xs font-semibold text-green-700">
                    You saved {formatInr(totalSavings)}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                disabled={items.length === 0}
                className="h-12 bg-[#4f3128] px-7 text-sm font-bold text-white transition hover:bg-[#3d261f] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white px-4 py-3 shadow-[0_-12px_30px_rgba(17,24,39,0.08)] lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-gray-950">Total amount</p>
            <p className="text-lg font-bold text-gray-950">{formatInr(finalTotal)}</p>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            className="h-12 bg-[#4f3128] px-7 text-sm font-bold text-white transition hover:bg-[#3d261f] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductDetailsSection({ items, visibleCount }) {
  return (
    <section aria-labelledby="payment-bag-heading" className="min-w-0">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#6aab8e]">Your selection</p>
          <h2 id="payment-bag-heading" className="mt-2 text-2xl font-bold text-gray-950">
            Bag
          </h2>
        </div>
        <span className="rounded-full bg-[#f5f0ea] px-4 py-2 text-sm font-bold text-[#4f3128]">
          {visibleCount} {visibleCount === 1 ? 'item' : 'items'}
        </span>
      </div>

      {items.length === 0 ? (
        <div className="mt-6 border border-dashed border-gray-300 bg-white p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f0ea] text-[#4f3128]">
            <Gem className="h-6 w-6" />
          </div>
          <p className="mt-4 text-sm font-bold text-gray-950">Your bag is empty.</p>
          <Link
            href={APP_ROUTES.PRODUCTS}
            className="mt-3 inline-flex text-sm font-bold text-[#4f3128] underline underline-offset-4"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <ul className="mt-6 space-y-4">
          {items.map((item, index) => {
            const productTotal = item.subtotal ?? item.price * item.quantity;
            const productOriginal = (item.originalPrice || item.price) * item.quantity;
            const productSaving = Math.max(productOriginal - productTotal, 0);

            return (
              <li key={item.id}>
                <Link
                  href={`${APP_ROUTES.PRODUCTS}/${item.slug}`}
                  className="group block overflow-hidden border border-gray-200 bg-white shadow-[0_16px_45px_rgba(17,24,39,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(17,24,39,0.1)]"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative min-h-44 bg-[#f7f1ea] sm:min-h-0 sm:w-44 sm:shrink-0">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 176px"
                          priority={index === 0}
                        />
                      ) : (
                        <div className="flex h-full min-h-44 items-center justify-center text-[#4f3128]">
                          <Gem className="h-10 w-10" />
                        </div>
                      )}
                      <span className="absolute left-3 top-3 bg-white/90 px-3 py-1 text-xs font-bold text-[#4f3128] shadow-sm">
                        Picked for you
                      </span>
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between p-4 sm:p-5">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-base font-bold leading-snug text-gray-950 sm:text-lg">
                            {item.title}
                            {item.sizeLabel ? ` (${item.sizeLabel})` : ''}
                          </h3>
                          <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#4f3128]" />
                        </div>
                        <p className="mt-2 text-sm font-semibold text-gray-600">
                          Size: {item.sizeLabel || item.size || 'Standard'} / Qty: {item.quantity}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
                        <div className="flex flex-wrap items-baseline gap-2">
                          {productOriginal > productTotal ? (
                            <span className="text-sm text-gray-400 line-through">
                              {formatInr(productOriginal)}
                            </span>
                          ) : null}
                          <span className="text-lg font-bold text-gray-950">{formatInr(productTotal)}</span>
                        </div>
                        {productSaving > 0 ? (
                          <span className="bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                            Save {formatInr(productSaving)}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

function BillDetails({
  visibleCount,
  originalTotal,
  saleDiscount,
  paymentDiscount,
  finalTotal,
}) {
  return (
    <section className="pb-2">
      <h2 className="text-xl font-bold text-gray-950">Bill Details</h2>
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <dt className="font-semibold text-gray-700">Items</dt>
          <dd className="font-bold text-gray-950">{visibleCount}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="font-semibold text-gray-700">Item total</dt>
          <dd className="font-bold text-gray-950">{formatInr(originalTotal)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="font-semibold text-gray-700">Sale Discount</dt>
          <dd className="font-bold text-green-700">-{formatInr(saleDiscount)}</dd>
        </div>
        {paymentDiscount > 0 ? (
          <div className="flex items-center justify-between">
            <dt className="font-semibold text-gray-700">Payment Discount</dt>
            <dd className="font-bold text-green-700">-{formatInr(paymentDiscount)}</dd>
          </div>
        ) : null}
        <div className="flex items-center justify-between">
          <dt className="font-semibold text-gray-700">Delivery fee</dt>
          <dd className="font-bold text-gray-950">₹0</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-3">
          <dt className="font-bold text-gray-950">Total amount</dt>
          <dd className="font-bold text-gray-950">{formatInr(finalTotal)}</dd>
        </div>
      </dl>

      {saleDiscount + paymentDiscount > 0 ? (
        <div className="mt-4 flex items-center justify-center gap-3 bg-[#eef1ff] px-4 py-4 text-center font-bold text-[#4f63d9]">
          <CircleCheck className="h-5 w-5 shrink-0" />
          <span>Yay! your total discount is {formatInr(saleDiscount + paymentDiscount)}</span>
        </div>
      ) : null}
    </section>
  );
}
