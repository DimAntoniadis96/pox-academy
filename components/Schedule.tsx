"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const scheduleData = [
  {
    day: "Δευτέρα",
    sessions: [
      { time: "17:00 - 18:00", group: "Κ8", type: "Προπόνηση" },
      { time: "18:00 - 19:30", group: "Κ10", type: "Προπόνηση" },
      { time: "19:30 - 21:00", group: "Κ12", type: "Προπόνηση" },
    ],
  },
  {
    day: "Τετάρτη",
    sessions: [
      { time: "17:00 - 18:00", group: "Κ8", type: "Προπόνηση" },
      { time: "18:00 - 19:30", group: "Κ10", type: "Προπόνηση" },
      { time: "19:30 - 21:00", group: "Κ12", type: "Προπόνηση" },
    ],
  },
  {
    day: "Παρασκευή",
    sessions: [
      { time: "17:00 - 18:00", group: "Κ8", type: "Τεχνική" },
      { time: "18:00 - 19:30", group: "Κ10", type: "Τακτική" },
      { time: "19:30 - 21:00", group: "Κ12", type: "Αγωνιστική" },
    ],
  },
  {
    day: "Σάββατο",
    sessions: [
      { time: "10:00 - 11:30", group: "Όλα", type: "Αγώνες / Τουρνουά" },
    ],
  },
];

const groupColors: Record<string, string> = {
  Κ8: "bg-sky text-white",
  Κ10: "bg-accent text-white",
  Κ12: "bg-primary text-white",
  Όλα: "bg-gold text-primary",
};

const Schedule = () => {
  return (
    <section className="py-20 xl:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/[0.03] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 xl:mb-20"
        >
          <span className="text-accent font-semibold tracking-[0.3em] uppercase text-sm block mb-4">
            Πρόγραμμα
          </span>
          <h2 className="h2 text-primary mb-6">
            Εβδομαδιαίο <span className="text-accent">Πρόγραμμα</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Οργανωμένες προπονήσεις τρεις φορές την εβδομάδα συν αγωνιστικό
            Σάββατο.
          </p>
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {scheduleData.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Day Header */}
              <div className="bg-primary px-6 py-4">
                <h3 className="font-primary text-2xl text-white uppercase tracking-wider">
                  {day.day}
                </h3>
              </div>

              {/* Sessions */}
              <div className="p-5 space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                        groupColors[session.group]
                      }`}
                    >
                      {session.group}
                    </span>
                    <div className="flex-1">
                      <p className="text-primary text-sm font-semibold">
                        {session.time}
                      </p>
                      <p className="text-secondary text-xs">{session.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-secondary text-sm mt-10"
        >
          * Τα ωράρια ενδέχεται να αλλάξουν λόγω αγωνιστικών υποχρεώσεων.
          Επικοινωνήστε μαζί μας για το τρέχον πρόγραμμα.
        </motion.p>
      </div>
    </section>
  );
};

export default Schedule;
