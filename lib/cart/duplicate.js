export const CART_DUPLICATE_MESSAGE = 'This product is already in your cart.';

export function hasCartItemWithProductSize(items, productSizeId) {
  if (!productSizeId || !Array.isArray(items)) return false;

  const requestedProductSizeId = String(productSizeId);

  return items.some((item) => {
    const cartProductSizeId = item.productSizeId ?? item.raw?.product_size_id;
    return cartProductSizeId != null && String(cartProductSizeId) === requestedProductSizeId;
  });
}

export function isDuplicateCartError(error) {
  const message = error?.response?.data?.message || error?.message || '';
  return /already.*cart|cart.*already/i.test(message);
}
