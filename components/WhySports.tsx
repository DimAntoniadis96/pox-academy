"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhySports = () => {
  return (
    <section className="py-20 xl:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-[0.3em] uppercase text-sm block mb-4">
            Αξιες
          </span>
          <h2 className="h2 text-primary mb-6">
            Οι Αξίες <span className="text-accent">Μας</span>
          </h2>
          <p className="text-secondary max-w-3xl mx-auto text-lg leading-relaxed">
            Ο αθλητισμός δεν χτίζει μόνο σώματα, αλλά και χαρακτήρες. Μέσα από το ποδόσφαιρο,
            το παιδί σας μαθαίνει την αξία της ομαδικότητας, της πειθαρχίας και του σεβασμού.
            Είναι το ασφαλέστερο περιβάλλον για να μάθει πώς να διαχειρίζεται την επιτυχία
            αλλά και την αποτυχία, εφόδια πολύτιμα για όλη του τη ζωή.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-md border border-slate-100 border-t-4 border-t-sky text-left hover:shadow-lg transition-all overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-[220px]">
              <Image src="/assets/academy/card1.png" alt="Υγεία & Ευεξία" fill className="object-cover object-[center_20%]" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="h3 text-primary mb-4 text-xl">Υγεία & Ευεξία</h3>
              <p className="text-secondary leading-relaxed">
                Βελτιώνει τη φυσική κατάσταση, χτίζει γερό ανοσοποιητικό και βοηθά στην
                καταπολέμηση του άγχους, προσφέροντας μια υγιή διέξοδο στην ενέργεια των παιδιών.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-md border border-slate-100 border-t-4 border-t-accent text-left hover:shadow-lg transition-all overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-[220px]">
              <Image src="/assets/academy/card2.png" alt="Ομαδικότητα" fill className="object-cover" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="h3 text-primary mb-4 text-xl">Ομαδικότητα</h3>
              <p className="text-secondary leading-relaxed">
                Μαθαίνουν να συνεργάζονται, να βοηθούν τους συμπαίκτες τους και να κατανοούν
                ότι οι μεγάλοι στόχοι κατακτώνται μέσα από τη συλλογική προσπάθεια.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-md border border-slate-100 border-t-4 border-t-primary text-left hover:shadow-lg transition-all overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-[220px]">
              <Image src="/assets/academy/card3.png" alt="Πειθαρχία & Στόχοι" fill className="object-cover" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="h3 text-primary mb-4 text-xl">Πειθαρχία & Στόχοι</h3>
              <p className="text-secondary leading-relaxed">
                Η προπόνηση απαιτεί αφοσίωση. Τα παιδιά μαθαίνουν να βάζουν στόχους, να
                ακολουθούν κανόνες και να δουλεύουν σκληρά για την επίτευξή τους.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySports;
