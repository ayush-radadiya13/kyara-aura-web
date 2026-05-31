'use client';

import { useRouter } from 'next/navigation';
import CheckoutSteps from '@/components/cart/CheckoutSteps';
import CartBag from '@/components/cart/CartBag';
import { formatInr } from '@/lib/cart/format';
import { useCartStore } from '@/lib/cart/store';
import { APP_ROUTES } from '@/lib/routes';

export default function CartCheckout() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const itemCount = useCartStore((state) => state.itemCount);

  const visibleTotal = total || items.reduce((sum, item) => sum + (item.subtotal ?? item.price * item.quantity), 0);
  const visibleCount = itemCount || items.reduce((sum, item) => sum + item.quantity, 0);
  const hasItems = items.length > 0;

  const handleCheckout = () => {
    if (!hasItems) return;
    router.push(APP_ROUTES.PAYMENT_METHOD);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6aab8e]/20 blur-3xl" aria-hidden />
      <div className="absolute right-0 top-32 h-56 w-56 rounded-full bg-[#d4a373]/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:py-12">
        <div className="mb-8 rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_24px_80px_rgba(17,24,39,0.08)] backdrop-blur sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6aab8e]">
                Secure checkout
              </p>
              <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                Your bag is ready for a faster payment flow.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                Continue from your bag and open Payment Method directly.
              </p>
            </div>

            <CheckoutSteps activeStep={1} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-8 lg:items-start">
          <div className="rounded-[2rem] border border-white/80 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)] sm:p-8">
            <CartBag />
          </div>

          <aside className="overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-950 text-white shadow-[0_24px_70px_rgba(17,24,39,0.2)]">
            <div className="relative p-6 sm:p-7">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#6aab8e]/30 blur-2xl" aria-hidden />
              <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                Checkout lane
              </p>
              <h2 className="relative mt-3 text-2xl font-bold">Payment Method</h2>
              <p className="relative mt-2 text-sm leading-6 text-white/65">
                Click checkout to choose your payment method directly.
              </p>

              <div className="relative mt-7 rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                <div className="flex items-center justify-between text-sm text-white/65">
                  <span>Bag total</span>
                  <span>
                    {visibleCount} {visibleCount === 1 ? 'item' : 'items'}
                  </span>
                </div>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <span className="text-sm text-white/55">Payable now</span>
                  <span className="text-3xl font-bold">{formatInr(visibleTotal)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={!hasItems}
                className="relative mt-6 flex h-14 w-full items-center justify-center rounded-full bg-[#6aab8e] px-5 text-sm font-bold text-white shadow-lg shadow-[#6aab8e]/25 transition hover:bg-[#5a987e] disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-white/45 disabled:shadow-none"
              >
                Proceed to Payment Method
              </button>

              <p className="relative mt-5 text-center text-xs leading-5 text-white/45">
                Payment Method opens directly from this cart page.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
