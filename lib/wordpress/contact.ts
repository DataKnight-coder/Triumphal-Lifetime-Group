import type { GlobalSettings } from "./client";

export function nigeriaWhatsAppContact(settings: GlobalSettings) {
  const digits = (settings.whatsapp || "").replace(/\D/g, "");
  if (!/^234\d{10}$/.test(digits)) return null;

  const national = `0${digits.slice(3)}`;
  return {
    display: `${national.slice(0, 4)} ${national.slice(4, 7)} ${national.slice(7)}`,
    international: `+${digits}`,
    whatsappUrl: `https://wa.me/${digits}`,
  };
}
