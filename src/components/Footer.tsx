import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const quickLinks = ["Home", "Services", "Price Estimator", "FAQ", "Contact"];
const serviceLinks = ["House Shifting", "Office Relocation", "Car Carrier", "Packing Services", "Handyman Services", "Warehouse Storage"];

export function Footer() {
  const [callbackPhone, setCallbackPhone] = useState("");

  return (
    <footer className="bg-primary pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-primary-foreground/10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-extrabold text-primary-foreground mb-3">
              HP<span className="text-accent"> Packers</span> Movers
            </h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-5">
              Pakistan's trusted partner for house shifting, office relocation, car transport, and home maintenance services.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Facebook className="w-4 h-4 text-primary-foreground/70" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Instagram className="w-4 h-4 text-primary-foreground/70" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Youtube className="w-4 h-4 text-primary-foreground/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Callback */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3 mb-6">
              <a href="tel:+923001234567" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> +92 300 1234567
              </a>
              <a href="https://wa.me/923001234567" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="mailto:info@hppackersmovers.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> info@hppackersmovers.com
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Karachi, Pakistan
              </div>
            </div>

            {/* Callback */}
            <div>
              <p className="text-xs font-semibold text-primary-foreground/80 mb-2">Request Callback</p>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="flex-1 h-9 px-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent/50"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                />
                <Button variant="orange" size="sm" onClick={() => {
                  if (callbackPhone) {
                    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(`Please call me back at ${callbackPhone}`)}`, "_blank");
                    setCallbackPhone("");
                  }
                }}>
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} HP Packers Movers. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/40">Serving across Pakistan with trust & professionalism.</p>
        </div>
      </div>
    </footer>
  );
}
