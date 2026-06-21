import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

const footerLinks = [
  { href: "#home", name: "Αρχική" },
  { href: "#programs", name: "Τμήματα" },
  { href: "#about", name: "Ακαδημία" },
  { href: "#schedule", name: "Πρόγραμμα" },
  { href: "#testimonials", name: "Γονείς" },
  { href: "#contact", name: "Επικοινωνία" },
];

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <Link
              href="/"
              className="relative w-[80px] h-[80px] block mb-6"
            >
              <Image
                src="/assets/team-logo-v3.png"
                fill
                alt="Π.Ο. Ξηροκρήνης"
                className="object-contain"
              />
            </Link>
            <p className="text-white/60 leading-relaxed text-sm">
              Η Ακαδημία Ποδοσφαίρου του Π.Ο. Ξηροκρήνης. Από το 1943
              διαμορφώνουμε αθλητές και χαρακτήρες μέσα από το ποδόσφαιρο.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-primary text-2xl text-white mb-6 uppercase tracking-wider">
              Σύνδεσμοι
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="text-white/60 hover:text-accent transition-all text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-primary text-2xl text-white mb-6 uppercase tracking-wider">
              Επικοινωνία
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-accent text-sm" />
                <span className="text-white/60 text-sm">+30 694 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent text-sm" />
                <span className="text-white/60 text-sm">info@poxacademy.gr</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent text-sm">📍</span>
                <span className="text-white/60 text-sm">
                  Ξηροκρήνη, Θεσσαλονίκη
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/pox_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Π.Ο. Ξηροκρήνης. Με επιφύλαξη
            παντός δικαιώματος.
          </p>
          <p className="text-white/30 text-xs">
            Ακαδημία Ποδοσφαίρου · Ιδρύθηκε 1943
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
