import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
            Ready to Move Without Stress?
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Get a fast, safe, and affordable moving solution from a professional team you can trust.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="orange" size="xl" onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}>
              <FileText className="mr-1" /> Get Free Quote
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1" /> WhatsApp Us
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+923001234567">
                <Phone className="mr-1" /> Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
