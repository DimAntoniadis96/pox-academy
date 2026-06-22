"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-20 xl:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-accent font-semibold tracking-[0.3em] uppercase text-sm block mb-4">
              Επικοινωνία
            </span>
            <h2 className="h2 text-primary mb-6">
              Ελάτε Στην <span className="text-accent">Ομάδα</span>
            </h2>
            <p className="text-secondary text-lg mb-10 leading-relaxed">
              Οι εγγραφές είναι ανοιχτές για όλα τα τμήματα. Επικοινωνήστε μαζί
              μας για περισσότερες πληροφορίες ή ελάτε σε μια δοκιμαστική
              προπόνηση.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-secondary">Τηλέφωνο</p>
                  <p className="text-primary font-semibold">+30 694 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-secondary">Email</p>
                  <p className="text-primary font-semibold">info@poxacademy.gr</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-sm text-secondary">Γήπεδο</p>
                  <p className="text-primary font-semibold">
                    Ξηροκρήνη, Θεσσαλονίκη
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-[280px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 relative bg-slate-200 mb-8">
              <iframe
                src="https://www.google.com/maps?q=Λιγδών+και+Νικολάου+Καπάτου,+Θεσσαλονίκη+54629&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pox_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl p-8 xl:p-10 shadow-xl border border-slate-100">
              <h3 className="font-primary text-3xl text-primary mb-2">
                Φόρμα Εγγραφής
              </h3>
              <p className="text-secondary text-sm mb-8">
                Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας
                άμεσα.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-primary text-sm font-semibold block mb-2">
                      Ονοματεπώνυμο Γονέα
                    </label>
                    <input
                      type="text"
                      placeholder="π.χ. Γιάννης Παπαδόπουλος"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-primary placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-primary text-sm font-semibold block mb-2">
                      Τηλέφωνο
                    </label>
                    <input
                      type="tel"
                      placeholder="694 XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-primary placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-primary text-sm font-semibold block mb-2">
                      Όνομα Παιδιού
                    </label>
                    <input
                      type="text"
                      placeholder="π.χ. Αλέξανδρος"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-primary placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-primary text-sm font-semibold block mb-2">
                      Ημερομηνία Γέννησης
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-primary text-sm font-semibold block mb-2">
                    Τμήμα Ενδιαφέροντος
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-primary bg-white">
                    <option value="">Επιλέξτε τμήμα</option>
                    <option value="k8">Κ8 (2018-2019)</option>
                    <option value="k10">Κ10 (2016-2017)</option>
                    <option value="k12">Κ12 (2014-2015)</option>
                  </select>
                </div>

                <div>
                  <label className="text-primary text-sm font-semibold block mb-2">
                    Μήνυμα (προαιρετικά)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Οποιαδήποτε ερώτηση ή σχόλιο..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-primary placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button type="submit" className="btn w-full justify-center">
                  Αποστολή Αίτησης
                </button>
              </form>
            </div>
          </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
