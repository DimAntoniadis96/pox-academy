"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 xl:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[250px] xl:h-[320px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/academy/training-session.png"
                  fill
                  alt="Προπόνηση"
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="relative h-[250px] xl:h-[320px] rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/assets/academy/team-celebration.png"
                  fill
                  alt="Ομαδικότητα"
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="relative h-[250px] xl:h-[320px] rounded-2xl overflow-hidden col-span-2">
                <Image
                  src="/assets/academy/about-academy.png"
                  fill
                  alt="Ακαδημία"
                  className="object-cover"
                  quality={90}
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl">
                  <p className="font-primary text-3xl">80+ Χρόνια</p>
                  <p className="text-white/70 text-sm">Ιστορίας & Πάθους</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <span className="text-accent font-semibold tracking-[0.3em] uppercase text-sm block mb-4">
              Η Ακαδημία Μας
            </span>
            <h2 className="h2 text-primary mb-6">
              Εκεί Που Γεννιούνται <span className="text-accent">Πρωταθλητές</span>
            </h2>
            <p className="text-secondary leading-relaxed mb-6 text-lg">
              Η ακαδημία ποδοσφαίρου του Π.Ο. Ξηροκρήνης λειτουργεί με σκοπό
              την αθλητική και ψυχολογική ανάπτυξη των παιδιών μέσα από το
              ποδόσφαιρο. Με ιστορία από το 1943, χτίζουμε χαρακτήρες
              μέσα στο γήπεδο.
            </p>
            <p className="text-secondary leading-relaxed mb-8">
              Οι προπονητές μας είναι πιστοποιημένοι από την ΕΠΟ και αφοσιωμένοι
              στην εξέλιξη κάθε νεαρού αθλητή. Δίνουμε έμφαση στην τεχνική,
              την τακτική, αλλά και στις αξίες του fair play, της ομαδικότητας
              και της πειθαρχίας.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { title: "Πειθαρχία", desc: "Μαθαίνουμε να δίνουμε τον καλύτερο εαυτό μας" },
                { title: "Ομαδικότητα", desc: "Μαζί πετυχαίνουμε περισσότερα" },
                { title: "Σεβασμός", desc: "Στον αντίπαλο, στον διαιτητή, στο παιχνίδι" },
                { title: "Εξέλιξη", desc: "Κάθε μέρα καλύτεροι από χθες" },
              ].map((value, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary text-sm">{value.title}</p>
                    <p className="text-secondary text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact">
              <button className="btn">Γράψε Το Παιδί Σου</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
