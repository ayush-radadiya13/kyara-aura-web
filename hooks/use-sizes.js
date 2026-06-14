"use client";

import { useQuery } from "@tanstack/react-query";
import { getSizesApi } from "@/services/sizes";

export function useSizes(options = {}) {
  return useQuery({
    queryKey: ["sizes"],
    queryFn: getSizesApi,
    refetchOnMount: "always",
    retry: false,
    ...options,
  });
}
