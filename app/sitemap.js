import { getCategories } from "@/lib/categories";
import { getAllProducts } from "@/lib/products";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/products",
  "/categories",
  "/terms",
  "/privacy",
  "/shipping-policy",
  "/return-policy",
  "/forgot-password",
];

export default async function sitemap() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ]);

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const productEntries = products.map((product) => ({
    url: absoluteUrl(`/products/${product.slug}`),
    lastModified: new Date(product.updated_at ?? product.updatedAt ?? Date.now()),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryEntries = categories.map((category) => {
    const categoryId = category._id ?? category.id ?? category.slug;

    return {
      url: absoluteUrl(`/categories?category=${encodeURIComponent(categoryId)}`),
      lastModified: new Date(category.updated_at ?? category.updatedAt ?? Date.now()),
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
