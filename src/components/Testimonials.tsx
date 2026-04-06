import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ahmed Raza", area: "DHA, Karachi", service: "House Shifting", stars: 5, text: "Absolutely professional team. They packed everything carefully and delivered on time. Highly recommended for anyone shifting in Karachi." },
  { name: "Fatima Shah", area: "Gulshan, Karachi", service: "Office Relocation", stars: 5, text: "We shifted our 30-person office over the weekend. Zero damage, zero downtime. HP Packers made it effortless." },
  { name: "Hassan Ali", area: "Bahria Town, Karachi", service: "Car Carrier", stars: 5, text: "Transported my car from Karachi to Islamabad. It arrived in perfect condition. Great communication throughout." },
  { name: "Nadia Hussain", area: "PECHS, Karachi", service: "Packing Services", stars: 4, text: "Very careful with fragile items. Used quality packing materials. The team was courteous and efficient." },
  { name: "Omar Farooq", area: "Clifton, Karachi", service: "Furniture Moving", stars: 5, text: "They dismantled, moved, and reassembled all our furniture perfectly. Saved us so much stress." },
  { name: "Sara Khan", area: "Nazimabad, Karachi", service: "House Shifting", stars: 5, text: "Best moving service in Karachi. Fair pricing, no hidden charges, and the WhatsApp coordination was excellent." },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trusted by families, offices, and businesses across Pakistan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-3" />
              <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className={`w-4 h-4 ${si < review.stars ? "fill-accent text-accent" : "text-border"}`} />
                ))}
              </div>
              <div>
                <div className="font-heading font-bold text-foreground text-sm">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.area} • {review.service}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
