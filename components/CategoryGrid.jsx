"use client";

import Image from "next/image";
import Link from "next/link";
import { LoaderBlock } from "@/components/ui/loader";
import { useCategories } from "@/hooks/use-categories";

function categoryImageSrc(image) {
  if (!image || typeof image !== "string") return "";
  if (image.startsWith("http")) return image;
  return image;
}

function categoryHref(category) {
  const categoryId = category?._id ?? category?.id ?? category?.slug;
  return categoryId ? `/categories?category=${encodeURIComponent(categoryId)}` : "/categories";
}

export default function CategoryGrid({
  variant = "grid",
  limit,
  selectedCategoryId,
  onCategorySelect,
}) {
  const { data: categories = [], isLoading, isError } = useCategories();
  const visibleCategories = limit ? categories.slice(0, limit) : categories;

  if (isLoading) {
    return <LoaderBlock />;
  }

  if (isError || !visibleCategories.length) {
    return (
      <p className="text-gray-600 py-12 text-center">
        No categories available at the moment.
      </p>
    );
  }

  if (variant === "strip") {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
        {visibleCategories.map((category, index) => {
          const src = categoryImageSrc(category.image);
          const isSelected = String(selectedCategoryId ?? "") === String(category._id ?? "");
          const interactiveClassName = `group relative aspect-[1.03] overflow-hidden bg-[#f7f7f5] transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900/30 ${
            isSelected || (!selectedCategoryId && index === 0) ? "border border-gray-900/70 shadow-sm" : ""
          }`;
          const content = (
            <>
              {src ? (
                <Image
                  src={src}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <span className="font-display text-2xl text-gray-300">
                    {category.name?.charAt(0)}
                  </span>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0  px-2 py-4 text-center backdrop-blur-[2px]">
                <span className="text-[14px] font-semibold uppercase  text-gray-900">
                  {category.name}
                </span>
              </div>
            </>
          );

          return onCategorySelect ? (
            <button
              key={category._id}
              type="button"
              onClick={() => onCategorySelect(category)}
              aria-pressed={isSelected}
              className={interactiveClassName}
            >
              {content}
            </button>
          ) : (
            <Link
              key={category._id}
              href={categoryHref(category)}
              className={interactiveClassName}
            >
              {content}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
      {visibleCategories.map((category) => {
        const src = categoryImageSrc(category.image);
        const isSelected = String(selectedCategoryId ?? "") === String(category._id ?? "");
        const interactiveClassName = `group relative aspect-square rounded-lg overflow-hidden glass-card transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-white ${
          isSelected ? "shadow-gold-glow-sm ring-2 ring-gold/70 ring-offset-2 ring-offset-white" : "hover:shadow-gold-glow-sm"
        }`;
        const content = (
          <>
            {src ? (
              <Image
                src={src}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-gray-50 to-gray-100 flex items-center justify-center p-4">
                <span className="font-display text-sm sm:text-lg text-gray-600/80 text-center">
                  {category.name}
                </span>
              </div>
            )}
            <div className={`absolute inset-0 bg-gradient-to-t ${
              isSelected ? "from-black/75 via-black/10 to-transparent" : "from-black/60 via-transparent to-transparent"
            }`} />
            <span className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 font-medium text-white text-xs sm:text-sm text-center">
              {category.name}
            </span>
          </>
        );

        return onCategorySelect ? (
          <button
            key={category._id}
            type="button"
            onClick={() => onCategorySelect(category)}
            aria-pressed={isSelected}
            className={interactiveClassName}
          >
            {content}
          </button>
        ) : (
          <Link
            key={category._id}
            href={categoryHref(category)}
            className={interactiveClassName}
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}
