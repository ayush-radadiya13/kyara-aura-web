import { SIZE_API_ROUTES } from "@/lib/routes";
import { withoutTokenApi } from "@/utils/api";

function normalizeSize(size) {
  const id = size.id ?? size._id;
  const name = String(size.name ?? size.size ?? size.size_text ?? "").trim();

  return {
    ...size,
    _id: String(id),
    id,
    name,
    label: name,
  };
}

export async function getSizesApi() {
  const { data } = await withoutTokenApi.get(SIZE_API_ROUTES.LIST);
  const sizes = Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data?.data?.data)
    ? data.data.data
    : Array.isArray(data)
    ? data
    : [];

  return sizes
    .filter((size) => size?.is_active !== false)
    .sort((first, second) => Number(first.sort_order ?? 0) - Number(second.sort_order ?? 0))
    .map(normalizeSize);
}
