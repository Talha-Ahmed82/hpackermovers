import { motion } from "framer-motion";
import { ShieldCheck, Package, DollarSign, MessageCircle, HandMetal, Building2 } from "lucide-react";

const trustPoints = [
  { icon: ShieldCheck, title: "Verified & Trained Team", desc: "Every team member is background-checked, trained, and equipped with professional tools." },
  { icon: Package, title: "Safe Packing Materials", desc: "We use bubble wrap, foam sheets, corrugated boxes, and stretch film — no shortcuts." },
  { icon: DollarSign, title: "Affordable Transparent Pricing", desc: "No hidden charges. Get a clear breakdown before we start — what you see is what you pay." },
  { icon: MessageCircle, title: "Fast WhatsApp Response", desc: "Message us anytime. We typically respond within minutes, not hours." },
  { icon: HandMetal, title: "Damage-Minimized Handling", desc: "We treat your belongings like our own — careful handling at every step of the process." },
  { icon: Building2, title: "Residential & Corporate Expertise", desc: "Whether it's a 2-bedroom flat or a 50-seat office, we've done it all." },
];

export function WhyTrustUs() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-primary-foreground">
            Why Customers Trust HP Packers Movers
          </h2>
          <p className="mt-4 text-primary-foreground/60">
            We don't just move things — we move them right. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
