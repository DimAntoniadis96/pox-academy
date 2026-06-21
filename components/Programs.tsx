"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFutbol, FaUsers, FaMedal, FaRunning } from "react-icons/fa";

const programs = [
  {
    id: "k8",
    title: "Κ8",
    subtitle: "Γεννημένοι 2018-2019",
    description:
      "Πρώτη γνωριμία με τη μπάλα. Παιχνίδι, κινητική ανάπτυξη και βασικές δεξιότητες σε ένα ασφαλές και διασκεδαστικό περιβάλλον.",
    icon: <FaFutbol className="text-3xl" />,
    color: "bg-sky",
    features: ["Ψυχοκινητική ανάπτυξη", "Βασική τεχνική", "Ομαδικό παιχνίδι"],
  },
  {
    id: "k10",
    title: "Κ10",
    subtitle: "Γεννημένοι 2016-2017",
    description:
      "Ανάπτυξη βασικής τεχνικής και κατανόηση θέσεων. Τα παιδιά μαθαίνουν πάσα, σουτ και ντρίμπλα μέσα από δομημένες προπονήσεις.",
    icon: <FaRunning className="text-3xl" />,
    color: "bg-accent",
    features: ["Τεχνική κατάρτιση", "Τακτική θέσεων", "Mini αγώνες"],
  },
  {
    id: "k12",
    title: "Κ12",
    subtitle: "Γεννημένοι 2014-2015",
    description:
      "Ατομική βελτίωση και ομαδική τακτική. Προετοιμασία για πρωταθλήματα με εντατικές προπονήσεις και αγωνιστική εμπειρία.",
    icon: <FaMedal className="text-3xl" />,
    color: "bg-primary",
    features: ["Αγωνιστική προετοιμασία", "Σύστημα παιχνιδιού", "Τουρνουά"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Programs = () => {
  return (
    <section className="py-20 xl:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 xl:mb-20"
        >
          <span className="text-accent font-semibold tracking-[0.3em] uppercase text-sm block mb-4">
            Τμήματα
          </span>
          <h2 className="h2 text-primary mb-6">
            Τα Τμήματά <span className="text-accent">Μας</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Τρία τμήματα ηλικιών με εξειδικευμένο πρόγραμμα προπόνησης,
            σχεδιασμένα για κάθε αναπτυξιακό στάδιο.
          </p>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 relative"
            >
              {/* Card Top Accent Bar */}
              <div className={`h-1.5 ${program.color}`} />

              {/* Card Content */}
              <div className="p-8 xl:p-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="font-primary text-4xl text-primary">
                      {program.title}
                    </h3>
                    <p className="text-secondary text-sm">{program.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <span className={`w-2 h-2 rounded-full ${program.color}`} />
                      <span className="text-primary/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Μάθε Περισσότερα
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "80+", label: "Αθλητές" },
            { number: "1943", label: "Έτος Ίδρυσης" },
            { number: "8", label: "Προπονητές" },
            { number: "3", label: "Τμήματα" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-primary text-5xl xl:text-6xl text-primary">
                {stat.number}
              </p>
              <p className="text-secondary mt-1 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
