'use client';

import { useState } from 'react';

export default function WishlistButton({ productId, className = '' }) {
  const [active, setActive] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setBusy(true);
    setAnimating(true);
    try {
      // Static toggle for now
      setActive(!active);
    } catch (err) {
      console.error(err);
    } finally {
      setBusy(false);
      setTimeout(() => setAnimating(false), 320);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      title={active ? 'Remove from wishlist' : 'Add to wishlist'}
      aria-label={active ? 'Remove from wishlist' : 'Add to wishlist'}
      className={`
        flex h-10 w-10 items-center justify-center rounded-full text-lg
        backdrop-blur-xl bg-gray-50/80 border border-gray-200
        transition-all duration-200 hover:border-gold/40 hover:shadow-gold-glow-sm
        disabled:opacity-60
        ${active ? 'text-red-500 border-red-300' : 'text-gray-600'}
        ${animating ? 'scale-125' : 'scale-100'}
        ${className}
      `}
    >
      <span
        className={`inline-block transition-transform duration-200 ${animating ? 'scale-110' : ''}`}
        aria-hidden
      >
        {active ? '❤️' : '♡'}
      </span>
    </button>
  );
}
