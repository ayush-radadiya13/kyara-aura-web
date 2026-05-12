'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '../../../components/Header';

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 50, seconds: 2 });
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    '/images/product-detail-1.jpg',
    '/images/product-detail-2.jpg', 
    '/images/product-detail-3.jpg',
    '/images/product-detail-4.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return `${time.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images Section - Left Side */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ aspectRatio: '1/1' }}>
              <Image
                src={productImages[selectedImage]}
                alt="Product main image"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative bg-gray-100 rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  style={{ aspectRatio: '1/1' }}
                >
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information Section - Right Side */}
          <div className="space-y-6">
            {/* Offer Banner */}
            <div className="bg-red-500 text-white px-6 py-3 rounded-lg inline-block font-bold text-xl">
              Buy 2 Get 1 Free
            </div>

            {/* Product Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Plain Silver Bangles For Women (2 Bangles)
            </h1>

            {/* Price Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">₹599</span>
                <span className="text-2xl text-gray-500 line-through">₹1,899</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-lg font-semibold">
                  68% OFF
                </span>
              </div>
              
              {/* Countdown Timer */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-orange-800 font-bold text-lg">Hurry Up, Shop Now!</span>
                  <div className="text-orange-600 font-mono font-bold text-lg">
                    {formatTime(timeLeft.hours)}H:{formatTime(timeLeft.minutes)}M:{formatTime(timeLeft.seconds)}S
                  </div>
                </div>
              </div>

              {/* Additional Offer */}
              <div className="text-green-600 font-bold text-lg">
                Get this as low as ₹499
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-3 text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Cash on Delivery</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600 text-center">
                    Return or Exchange <br /> within 3 days
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Free Delivery</span>
                </div>
              </div>
              <div className="bg-gray-200 text-gray-800 text-center py-3 rounded-md font-semibold text-base">
                Get it delivered in 3-6 days
              </div>
            </div>

            {/* Size and Quantity Selection */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>2.4</option>
                  <option>2.6</option>
                  <option>2.8</option>
                  <option>2.10</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to bag
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Information Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Information</h2>
          <div className="space-y-1">
            <div className="flex justify-between py-4 border-b border-gray-200">
              <span className="text-gray-600 text-base">Brand</span>
              <span className="font-medium text-gray-900 text-base">Velisse Jewells</span>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-200">
              <span className="text-gray-600 text-base">Base Material</span>
              <span className="font-medium text-gray-900 text-base">Brass</span>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-200">
              <span className="text-gray-600 text-base">Plating</span>
              <span className="font-medium text-gray-900 text-base">Silver Plated</span>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-200">
              <span className="text-gray-600 text-base">Gemstone</span>
              <span className="font-medium text-gray-900 text-base">American Diamond</span>
            </div>
            <div className="flex justify-between py-4">
              <span className="text-gray-600 text-base">Package Contents</span>
              <span className="font-medium text-gray-900 text-base">2 Bangles</span>
            </div>
          </div>
          <button className="mt-8 text-blue-600 font-medium text-base underline hover:no-underline">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
