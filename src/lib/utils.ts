import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatCurrency(
  amount: number,
  currency = "USD"
): string {
  return new Intl.NumberFormat("es", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${period}`;
}

export function normalizeMapsUrl(value: string | null | undefined): string | null {
  const raw = value?.trim();
  if (!raw) return null;

  const iframeSrc = raw.match(/src=["']([^"']+)["']/i)?.[1]?.trim();
  const candidate = iframeSrc || raw;

  try {
    const url = new URL(candidate);
    const host = url.hostname.replace(/^www\./, "");

    if (host.includes("google.") || host.includes("goo.gl")) {
      if (url.pathname.includes("/maps/embed") || url.pathname.includes("/embed")) {
        return url.toString();
      }

      const query = url.searchParams.get("q") || url.searchParams.get("query");
      if (query) {
        return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&hl=es`;
      }

      const coords = candidate.match(/@([-\d.]+),([-\d.]+)/);
      if (coords) {
        return `https://www.google.com/maps?q=${coords[1]},${coords[2]}&output=embed&hl=es`;
      }

      const place = url.pathname.match(/\/place\/([^/]+)/);
      if (place) {
        return `https://www.google.com/maps?q=${encodeURIComponent(decodeURIComponent(place[1]).replace(/\+/g, " "))}&output=embed&hl=es`;
      }
    }
  } catch {
    return null;
  }

  return candidate;
}
