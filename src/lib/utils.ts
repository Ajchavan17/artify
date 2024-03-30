import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
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

export function constructMetadata({
  title = "DigitalHippo - the marketplace for digital assets",
  description = "DigitalHippo is an open-source marketplace for high-quality digital goods.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@joshtriedcoding",
    },
    icons,
    metadataBase: new URL("https://digitalhippo.up.railway.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
