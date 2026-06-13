'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useScrollLock } from '@/hooks/use-scroll-lock';

const BANGLE_SIZES = [
  { size: '2-2', cms: '5.4', mms: '54', inches: '2.125' },
  { size: '2-4', cms: '5.7', mms: '57.2', inches: '2.25' },
  { size: '2-6', cms: '6.0', mms: '60.3', inches: '2.375' },
  { size: '2-8', cms: '6.3', mms: '63.5', inches: '2.5' },
  { size: '2-10', cms: '6.6', mms: '66.7', inches: '2.625' },
  { size: '2-12', cms: '7.0', mms: '69.9', inches: '2.75' },
  { size: '2-14', cms: '7.3', mms: '73', inches: '2.87' },
  { size: '3', cms: '7.6', mms: '76.3', inches: '3' },
];

function DiameterIllustration() {
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 210 180" className="h-40 w-48 text-gray-900" aria-hidden="true">
        <circle cx="105" cy="88" r="78" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="30" y1="88" x2="180" y2="88" stroke="currentColor" strokeWidth="2" />
        <path d="M30 88 L38 83 L38 93 Z" fill="currentColor" />
        <path d="M180 88 L172 83 L172 93 Z" fill="currentColor" />
        <text x="105" y="111" textAnchor="middle" className="fill-gray-900 text-[11px] font-bold">
          INNER DIAMETER
        </text>
      </svg>
    </div>
  );
}

function RulerIllustration() {
  const ticks = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className="flex flex-col items-center text-center">
      <svg viewBox="0 0 150 56" className="h-16 w-40 text-gray-900" aria-hidden="true">
        <path d="M15 10 H135 V42 H15 Z" fill="none" stroke="currentColor" strokeWidth="4" />
        {ticks.map((tick) => {
          const x = 25 + tick * 12;
          const isMajor = tick % 2 === 0;

          return (
            <line
              key={tick}
              x1={x}
              y1="10"
              x2={x}
              y2={isMajor ? 30 : 23}
              stroke="currentColor"
              strokeWidth="3"
            />
          );
        })}
      </svg>
      <p className="max-w-[190px] text-[10px] font-extrabold uppercase leading-4 tracking-tight text-gray-800">
        Use a scale to measure inner diameter of your bangle &amp; compare with chart below
      </p>
    </div>
  );
}

export default function SizeChartModal({ open, onClose }) {
  useScrollLock(open);

  useEffect(() => {
    if (!open) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="size-chart-title"
    >
      <button type="button" className="absolute inset-0" aria-label="Close size chart" onClick={onClose} />

      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-white p-4 shadow-2xl sm:p-6" data-lenis-prevent>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:text-gray-950"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-10">
          <h2 id="size-chart-title" className="text-3xl font-extrabold uppercase leading-none tracking-wide text-[#4964d9] sm:text-4xl">
            Size Guide
          </h2>
          <p className="mt-1 text-[11px] font-extrabold uppercase tracking-wide text-gray-900 sm:text-xs">
            We have provided the body measurements to help you decide which size to buy.
          </p>
        </div>

        <div className="mt-3 flex flex-col items-center gap-2 sm:mt-4">
          <div className="grid w-full max-w-[500px] grid-cols-1 items-center justify-items-center gap-2 sm:grid-cols-[1fr_0.85fr]">
            <DiameterIllustration />
            <RulerIllustration />
          </div>

          <div className="w-full overflow-x-auto">
            <table className="mx-auto min-w-[430px] border-collapse text-center text-[11px] text-gray-900 sm:text-xs">
              <thead>
                <tr>
                  <th className="w-[112px] border border-gray-500 bg-black px-3 py-3 font-extrabold uppercase leading-4 text-white">
                    Indian Bangle Size Guide - Macs Jewelry
                  </th>
                  <th className="w-[112px] border border-gray-500 bg-black px-3 py-3 font-extrabold uppercase leading-4 text-white">
                    Inner Diameter (in CMS)
                  </th>
                  <th className="w-[112px] border border-gray-500 bg-black px-3 py-3 font-extrabold uppercase leading-4 text-white">
                    Inner Diameter (in MMS)
                  </th>
                  <th className="w-[112px] border border-gray-500 bg-black px-3 py-3 font-extrabold uppercase leading-4 text-white">
                    Inner Diameter (in Inches)
                  </th>
                </tr>
              </thead>
              <tbody>
                {BANGLE_SIZES.map((row) => (
                  <tr key={row.size}>
                    <th className="border border-gray-400 bg-[#d8d8d8] px-4 py-2 font-extrabold">
                      {row.size}
                    </th>
                    <td className="border border-gray-400 px-4 py-2 font-semibold">{row.cms}</td>
                    <td className="border border-gray-400 px-4 py-2 font-semibold">{row.mms}</td>
                    <td className="border border-gray-400 px-4 py-2 font-semibold">{row.inches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
