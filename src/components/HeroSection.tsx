import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText, ShieldCheck, Package, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-moving.jpg";

const trustBadges = [
  { icon: ShieldCheck, label: "Trained Staff" },
  { icon: Package, label: "Safe Packing" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Building2, label: "Residential & Commercial" },
];

const serviceOptions = [
  "House Shifting",
  "Office Relocation",
  "Car Carrier",
  "Packing Services",
  "Furniture Moving",
  "Loading & Unloading",
  "Warehouse Storage",
  "Handyman Services",
  "Electrician",
  "Plumber",
  "Carpenter",
  "AC Installation",
];

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    pickup: "",
    drop: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I need a quote for ${formData.service || "moving services"}.\nName: ${formData.name}\nPhone: ${formData.phone}\nPickup: ${formData.pickup}\nDrop: ${formData.drop}\nDate: ${formData.date}`;
    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-primary min-h-[90vh] flex items-center">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional moving team" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium">Pakistan's Trusted Moving Partner</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight">
              Stress-Free{" "}
              <span className="text-gradient-orange">House Shifting</span>,{" "}
              Office Relocation & Moving Services
            </h1>

            <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
              From home shifting and office relocation to car transport, packing, and handyman services — HP Packers Movers handles everything with safety, speed, and professionalism.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="orange" size="lg" onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}>
                <FileText className="mr-1" /> Get Free Quote
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1" /> Chat on WhatsApp
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="tel:+923001234567">
                  <Phone className="mr-1" /> Call Now
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-3 py-2.5">
                  <badge.icon className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-xs font-medium text-primary-foreground/80">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Quick Quote Card */}
          <motion.div
            id="quote-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl shadow-2xl shadow-black/20 p-6 sm:p-8 border border-border/50">
              <div className="text-center mb-6">
                <h2 className="font-heading text-2xl font-bold text-card-foreground">Get Your Free Quote</h2>
                <p className="text-sm text-muted-foreground mt-1">Tell us about your move — we'll respond fast</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  value={formData.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                  required
                />
                <select
                  className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  value={formData.service}
                  onChange={(e) => setFormData((p) => ({ ...p, service: e.target.value }))}
                  required
                >
                  <option value="">Select Service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Pickup Area"
                    className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                    value={formData.pickup}
                    onChange={(e) => setFormData((p) => ({ ...p, pickup: e.target.value }))}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Drop Area"
                    className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                    value={formData.drop}
                    onChange={(e) => setFormData((p) => ({ ...p, drop: e.target.value }))}
                    required
                  />
                </div>
                <input
                  type="date"
                  className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  value={formData.date}
                  onChange={(e) => setFormData((p) => ({ ...p, date: e.target.value }))}
                />
                <Button type="submit" variant="orange" size="lg" className="w-full">
                  Get My Quote
                </Button>
              </form>

              <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" /> Fast response on call & WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
