import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-trust-green rounded-full flex items-center justify-center shadow-lg shadow-trust-green/30 hover:scale-110 transition-transform group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-accent-foreground" />
      <span className="absolute w-14 h-14 rounded-full bg-trust-green/50 animate-ping pointer-events-none" />
    </a>
  );
}
