import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Estimator", href: "#estimator" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="font-heading text-xl font-extrabold text-primary-foreground">
          {/* HP<span className="text-accent"> Packers</span> Movers */}
          <img src="/logo-img.png" alt="HP Packers Movers" width={80} />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
          <a href="tel:+923001234567" className="flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/80 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" /> +92 300 1234567
          </a>
          <Button variant="orange" size="sm" asChild>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-primary-foreground/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors py-2">
                  {link.label}
                </a>
              ))}
              <a href="tel:+923001234567" className="flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/80 py-2">
                <Phone className="w-4 h-4" /> +92 300 1234567
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
