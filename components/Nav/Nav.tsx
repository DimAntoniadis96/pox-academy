import { motion } from "framer-motion";
import NavList from "./NavList";

const heightAnimation = {
  initial: { height: 0 },
  open: {
    height: "100vh",
    transition: { duration: 0.8, ease: [0.75, 0, 0.23, 1] },
  },
  close: {
    height: 0,
    transition: { duration: 0.8, ease: [0.75, 0, 0.23, 1] },
  },
};

const Nav = ({ closeNav }: { closeNav: () => void }) => {
  return (
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="bg-primary overflow-hidden fixed inset-0 z-[50]"
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <NavList closeNav={closeNav} />
      </div>
    </motion.nav>
  );
};

export default Nav;
