import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "INR";
  } = {}
) {
  const { currency = "INR" } = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  let notation = "standard"; // Default notation

  // Check if the price is greater than or equal to 1000
  if (Math.abs(numericPrice) >= 1000 && Math.abs(numericPrice) < 1000000) {
    notation = "compact"; // Use compact notation for thousands
  } else if (Math.abs(numericPrice) >= 1000000) {
    notation = "compact"; // Use compact notation for millions
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,

    maximumFractionDigits: 2,
  }).format(numericPrice);
}
