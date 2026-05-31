import Header from '@/components/Header';
import CartCheckout from '@/components/cart/CartCheckout';

export const metadata = {
  title: 'Bag | Kyara Aura',
  description: 'Review your bag and continue to payment.',
};

export default function CartPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbfaf7]">
      <Header />
      <main className="flex-1">
        <CartCheckout />
      </main>
    </div>
  );
}
