"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { IoMdQuote } from "react-icons/io";

const testimonials = [
  {
    message:
      "Το παιδί μου ξεκίνησε στην ακαδημία στα 6 του. Σήμερα, στα 10, είναι ένα εντελώς διαφορετικό παιδί — πιο πειθαρχημένο, πιο κοινωνικό και με τεράστια αγάπη για το ποδόσφαιρο.",
    name: "Μαρία Κ.",
    role: "Μητέρα αθλητή Κ10",
  },
  {
    message:
      "Οι προπονητές εδώ δεν κοιτάνε μόνο τον αθλητή, κοιτάνε τον άνθρωπο. Αυτό κάνει τη διαφορά. Ο γιος μου πηγαίνει στην προπόνηση σαν γιορτή.",
    name: "Γιάννης Σ.",
    role: "Πατέρας αθλητή Κ8",
  },
  {
    message:
      "Από τις πιο οργανωμένες ακαδημίες που έχουμε δει. Πρόγραμμα, επικοινωνία με τους γονείς, αγώνες — όλα δουλεύουν σωστά. Συστήνουμε ανεπιφύλακτα.",
    name: "Ελένη Μ.",
    role: "Μητέρα αθλητή Κ12",
  },
  {
    message:
      "Η κόρη μου ήθελε να παίξει ποδόσφαιρο και εδώ βρήκε το χώρο της. Περιβάλλον χωρίς αποκλεισμούς, με σεβασμό και πάθος για το άθλημα.",
    name: "Δημήτρης Α.",
    role: "Πατέρας αθλήτριας Κ10",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 xl:py-32 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-[200px] h-[200px] bg-accent/5 rounded-full" />
      <div className="absolute bottom-10 right-20 w-[300px] h-[300px] bg-sky/5 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-[0.3em] uppercase text-sm block mb-4">
            Μαρτυρίες
          </span>
          <h2 className="h2 text-white mb-6">
            Τι Λένε Οι <span className="text-accent">Γονείς</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Η εμπιστοσύνη των οικογενειών μας είναι η μεγαλύτερη επιβράβευση.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="pb-16"
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((person, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 xl:p-10 h-full">
                  {/* Quote Icon */}
                  <IoMdQuote className="text-4xl text-accent mb-6" />

                  {/* Message */}
                  <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                    &ldquo;{person.message}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-lg">
                        {person.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{person.name}</p>
                      <p className="text-white/50 text-sm">{person.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Swiper Styles Override */}
      <style jsx global>{`
        #testimonials .swiper-button-next::after,
        #testimonials .swiper-button-prev::after {
          color: white !important;
          font-size: 1.5rem !important;
        }
        #testimonials .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3) !important;
          width: 10px !important;
          height: 10px !important;
        }
        #testimonials .swiper-pagination-bullet-active {
          background: #c8102e !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
