import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#home", name: "Αρχική" },
  { href: "#programs", name: "Τμήματα" },
  { href: "#about", name: "Ακαδημία" },
  { href: "#schedule", name: "Πρόγραμμα" },
  { href: "#testimonials", name: "Γονείς" },
  { href: "#contact", name: "Επικοινωνία" },
] as const;

const letterAnim = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, 0, 0.2, 1],
      delay: i[0],
    },
  }),
  exit: (i: [number, number]) => ({
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0, 0.2, 1],
      delay: i[1],
    },
  }),
};

const getLetter = (name: (typeof links)[number]["name"]) => {
  let letters: JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

const NavList = ({ closeNav }: { closeNav: () => void }) => {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl md:text-5xl font-semibold text-white items-center uppercase">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          onClick={closeNav}
          className="flex overflow-hidden hover:text-accent transition-all"
        >
          {getLetter(link.name)}
        </Link>
      ))}
      <li className="mt-4">
        <Link href="#contact" onClick={closeNav}>
          <button className="btn">Εγγραφή</button>
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
