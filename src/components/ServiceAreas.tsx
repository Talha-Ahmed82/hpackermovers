import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const majorCities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Hyderabad", "Multan", "Faisalabad"];
const karachiAreas = ["DHA", "Clifton", "Gulshan-e-Iqbal", "Johar", "PECHS", "Nazimabad", "Bahria Town", "North Nazimabad", "Malir", "Korangi", "Saddar", "Gulistan-e-Johar"];

export function ServiceAreas() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Coverage</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Serving Homes & Businesses Across Pakistan
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Major Cities */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" /> Major Cities
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {majorCities.map((city) => (
                <div key={city} className="flex items-center gap-2 bg-surface rounded-xl px-4 py-3 border border-border">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-foreground">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Karachi Areas */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" /> Karachi Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {karachiAreas.map((area) => (
                <span key={area} className="bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
