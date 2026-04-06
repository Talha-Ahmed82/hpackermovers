import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const moveTypes = ["House Shifting", "Office Relocation", "Furniture Only", "Car Carrier"];
const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Hyderabad", "Multan", "Faisalabad"];
const propertySizes = ["Studio/1 Room", "2 Rooms", "3 Rooms", "4+ Rooms", "Full House", "Office (Small)", "Office (Large)"];

export function PriceEstimator() {
  const [form, setForm] = useState({
    moveType: "",
    pickupCity: "",
    dropCity: "",
    propertySize: "",
    floor: "0",
    liftAvailable: "yes",
    packingRequired: "yes",
    furnitureDismantling: "no",
    acInstallation: "no",
    date: "",
  });

  const estimate = useMemo(() => {
    if (!form.moveType || !form.pickupCity || !form.propertySize) return null;
    let base = 15000;
    const sizeMultiplier: Record<string, number> = {
      "Studio/1 Room": 1, "2 Rooms": 1.5, "3 Rooms": 2.2, "4+ Rooms": 3,
      "Full House": 3.5, "Office (Small)": 2.5, "Office (Large)": 4.5,
    };
    base *= sizeMultiplier[form.propertySize] || 1;
    if (form.pickupCity !== form.dropCity && form.dropCity) base *= 2.5;
    if (form.moveType === "Car Carrier") base = 25000;
    const floorNum = parseInt(form.floor) || 0;
    if (floorNum > 0 && form.liftAvailable === "no") base += floorNum * 2000;
    if (form.packingRequired === "yes") base *= 1.3;
    if (form.furnitureDismantling === "yes") base += 5000;
    if (form.acInstallation === "yes") base += 4000;
    const low = Math.round(base * 0.85 / 1000) * 1000;
    const high = Math.round(base * 1.2 / 1000) * 1000;
    return { low, high };
  }, [form]);

  const selectClass = "w-full h-11 px-4 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50";
  const inputClass = selectClass;

  return (
    <section className="py-20 lg:py-28 bg-surface" id="estimator">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Price Estimator</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Get an Instant Price Estimate
          </h2>
          <p className="mt-4 text-muted-foreground">
            Answer a few questions and get an approximate price range in seconds.
          </p>
        </motion.div>

        <motion.div
          className="bg-card rounded-3xl border border-border shadow-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Move Type</label>
              <select className={selectClass} value={form.moveType} onChange={(e) => setForm((p) => ({ ...p, moveType: e.target.value }))}>
                <option value="">Select</option>
                {moveTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Property Size</label>
              <select className={selectClass} value={form.propertySize} onChange={(e) => setForm((p) => ({ ...p, propertySize: e.target.value }))}>
                <option value="">Select</option>
                {propertySizes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Pickup City</label>
              <select className={selectClass} value={form.pickupCity} onChange={(e) => setForm((p) => ({ ...p, pickupCity: e.target.value }))}>
                <option value="">Select</option>
                {cities.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Drop City</label>
              <select className={selectClass} value={form.dropCity} onChange={(e) => setForm((p) => ({ ...p, dropCity: e.target.value }))}>
                <option value="">Select</option>
                {cities.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Floor Number</label>
              <input type="number" min="0" max="20" className={inputClass} value={form.floor} onChange={(e) => setForm((p) => ({ ...p, floor: e.target.value }))} />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Lift Available?</label>
              <select className={selectClass} value={form.liftAvailable} onChange={(e) => setForm((p) => ({ ...p, liftAvailable: e.target.value }))}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Packing Required?</label>
              <select className={selectClass} value={form.packingRequired} onChange={(e) => setForm((p) => ({ ...p, packingRequired: e.target.value }))}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Furniture Dismantling?</label>
              <select className={selectClass} value={form.furnitureDismantling} onChange={(e) => setForm((p) => ({ ...p, furnitureDismantling: e.target.value }))}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">AC Installation Needed?</label>
              <select className={selectClass} value={form.acInstallation} onChange={(e) => setForm((p) => ({ ...p, acInstallation: e.target.value }))}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Preferred Date</label>
              <input type="date" className={inputClass} value={form.date} onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))} />
            </div>
          </div>

          {/* Result */}
          {estimate && (
            <motion.div
              className="mt-8 bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Estimated Price Range</span>
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                PKR {estimate.low.toLocaleString()} — {estimate.high.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-2">*Final price confirmed after free survey</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="orange" size="lg">
                  <CalendarCheck className="mr-1" /> Book Free Survey
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={`https://wa.me/923001234567?text=${encodeURIComponent(`Hi, I got an estimate of PKR ${estimate.low}-${estimate.high} for ${form.moveType}. Please confirm.`)}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-1" /> Get Final Quote on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
