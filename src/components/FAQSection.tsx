import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does house shifting cost?", a: "Our house shifting starts from PKR 15,000 depending on the number of rooms, floor, distance, and packing needs. Use our price estimator above or WhatsApp us for an exact quote." },
  { q: "Do you provide packing materials?", a: "Yes! We use premium-quality bubble wrap, corrugated boxes, foam sheets, stretch film, and tape — all included in our packing service packages." },
  { q: "Do you move office furniture and IT equipment?", a: "Absolutely. We specialize in corporate office relocation including desks, chairs, servers, monitors, and heavy equipment with minimal downtime." },
  { q: "Do you provide car carrier services?", a: "Yes. We offer enclosed and open car carrier transport between major cities in Pakistan with full insurance coverage and tracking." },
  { q: "Do you cover all areas in Karachi?", a: "We cover all major areas including DHA, Clifton, Gulshan, PECHS, Bahria Town, Nazimabad, Johar, Malir, Korangi, and more." },
  { q: "Can I book through WhatsApp?", a: "Yes! Simply message us on WhatsApp with your move details and we'll provide a quote and schedule within minutes." },
  { q: "Do you provide labor-only services?", a: "Yes. If you just need loading/unloading or heavy lifting help without packing, we offer flexible labor-only packages." },
  { q: "Do you work on weekends and holidays?", a: "Yes, we operate 7 days a week including weekends and public holidays. Weekend slots fill up fast — book early!" },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-background" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-2xl px-5 data-[state=open]:shadow-lg transition-shadow">
                <AccordionTrigger className="font-heading font-bold text-foreground text-left hover:no-underline py-5 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
