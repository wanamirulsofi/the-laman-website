import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WHATSAPP_URL } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppUrl() {
  return WHATSAPP_URL;
}
