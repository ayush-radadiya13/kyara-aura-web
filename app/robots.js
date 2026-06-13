import { absoluteUrl } from "@/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/account", "/payment-method"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
