import { Phone, MessageCircle, FileText } from "lucide-react";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-primary border-t border-primary-foreground/10 safe-area-pb">
      <div className="grid grid-cols-3">
        <a
          href="tel:+923001234567"
          className="flex flex-col items-center gap-1 py-3 text-primary-foreground/80 hover:text-accent transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Call Now</span>
        </a>
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 bg-trust-green text-accent-foreground"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
        <button
          onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-1 py-3 text-primary-foreground/80 hover:text-accent transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Get Quote</span>
        </button>
      </div>
    </div>
  );
}
