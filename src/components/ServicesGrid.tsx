import { motion } from "framer-motion";
import { Home, Building2, Car, Package, Armchair, Truck, Warehouse, Wrench } from "lucide-react";

const services = [
  { icon: Home, title: "House Shifting", desc: "Complete residential moving with careful handling of your belongings from packing to setup." },
  { icon: Building2, title: "Office Relocation", desc: "Minimize downtime with our efficient corporate office moving and IT equipment handling." },
  { icon: Car, title: "Car Carrier", desc: "Safe vehicle transport across cities with enclosed carriers and real-time tracking." },
  { icon: Package, title: "Packing Services", desc: "Premium packing materials and expert techniques to protect every item during transit." },
  { icon: Armchair, title: "Furniture Moving", desc: "Careful dismantling, transport, and reassembly of all furniture types by trained staff." },
  { icon: Truck, title: "Loading & Unloading", desc: "Professional labor for heavy lifting with the right equipment and safety measures." },
  { icon: Warehouse, title: "Warehouse Storage", desc: "Secure short-term and long-term storage in clean, monitored warehouse facilities." },
  { icon: Wrench, title: "Handyman Services", desc: "Electrician, plumber, carpenter, and AC services — all under one roof for your convenience." },
];

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Everything You Need for a Smooth Move
          </h2>
          <p className="mt-4 text-muted-foreground">
            From packing your first box to setting up your new space — we cover every step.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
