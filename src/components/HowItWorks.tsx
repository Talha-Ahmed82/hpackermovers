import { motion } from "framer-motion";
import { FileText, PhoneCall, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: FileText, step: "01", title: "Request a Quote", desc: "Fill out our quick form or message us on WhatsApp with your move details." },
  { icon: PhoneCall, step: "02", title: "Free Survey & Confirmation", desc: "Our team visits or calls to assess the scope and confirm the final price." },
  { icon: Truck, step: "03", title: "Packing & Transportation", desc: "We pack, load, and transport with premium materials and trained handlers." },
  { icon: CheckCircle2, step: "04", title: "Safe Delivery & Setup", desc: "Items delivered safely, unpacked, and set up at your new location." },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four simple steps from booking to moving day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative text-center"
            >
              <div className="relative mx-auto w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-accent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground font-heading text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
