"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryGrid from "@/components/CategoryGrid";
import ProductList from "@/components/ProductList";
import { useCategories } from "@/hooks/use-categories";

export default function CategoryBrowser() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryCategoryId = searchParams.get("category") ?? "";
  const { data: categories = [] } = useCategories();
  const [localCategoryId, setLocalCategoryId] = useState("");
  const selectedCategoryId = queryCategoryId || localCategoryId || categories[0]?._id || "";

  const selectedCategory = categories.find(
    (category) => String(category._id) === String(selectedCategoryId)
  );

  const handleCategorySelect = (category) => {
    setLocalCategoryId(category._id);
    router.replace(`/categories?category=${encodeURIComponent(category._id)}`, {
      scroll: false,
    });
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <CategoryGrid
          selectedCategoryId={selectedCategoryId}
          onCategorySelect={handleCategorySelect}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20 border-t border-gray-200 bg-gray-50/50">
        <div className="text-center mb-12 pt-12">
          <h2 className="font-display text-2xl md:text-3xl text-gray-900 mb-4">
            {selectedCategory ? `${selectedCategory.name} Products` : "Category Products"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse pieces from the selected category.
          </p>
        </div>
        <ProductList
          key={selectedCategoryId || "category-products"}
          categoryId={selectedCategoryId}
          emptyMessage="No products available for this category."
        />
      </section>
    </>
  );
}
