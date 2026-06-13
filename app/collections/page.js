import { redirect } from 'next/navigation';
import { APP_ROUTES } from '@/lib/routes';

export default function CollectionsPage() {
  redirect(APP_ROUTES.PRODUCTS);
}
