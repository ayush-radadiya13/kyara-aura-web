import Header from '@/components/Header';
import PaymentMethodFlow from '@/components/cart/PaymentMethodFlow';

export const metadata = {
  title: 'Payment Method | Kyara Aura',
  description: 'Choose a secure payment method for your Kyara Aura order.',
};

export default function PaymentMethodPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PaymentMethodFlow />
      </main>
    </div>
  );
}
