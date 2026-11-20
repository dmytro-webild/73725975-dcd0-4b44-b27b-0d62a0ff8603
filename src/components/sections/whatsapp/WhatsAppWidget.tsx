import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

export default function WhatsAppWidget() {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/41790000000?text=${encodeURIComponent(
    "Hello JD Car Wrapping Atelier Zurich! I am inquiring about vehicle wrapping / PPF / customization services."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with JD Car Wrapping Atelier"
        className="flex items-center gap-3 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl rounded-full border border-emerald-400/40 transition-all duration-300 hover:scale-105 group-hover:pr-5 cursor-pointer"
      >
        <div className="relative">
          <MessageCircle className="size-6 text-white" />
          <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-emerald-300 animate-ping" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-100 leading-none">
            {t.whatsappWidget.tooltip}
          </span>
          <span className="text-xs font-mono font-semibold tracking-wide text-white leading-tight">
            {t.whatsappWidget.label}
          </span>
        </div>
      </a>
    </div>
  );
}
