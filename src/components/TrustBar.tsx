import { motion } from "framer-motion";
import { Award, TrendingUp, Headphones, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Award, value: 10, suffix: "+", label: "Years Experience", prefix: "" },
  { icon: TrendingUp, value: 5000, suffix: "+", label: "Successful Moves", prefix: "" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Customer Support", prefix: "" },
  { icon: Users, value: 100, suffix: "%", label: "Professional Team", prefix: "" },
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-heading text-3xl sm:text-4xl font-extrabold text-accent">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-1">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
