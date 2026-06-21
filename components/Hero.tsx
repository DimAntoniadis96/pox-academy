"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/academy/academy1.png"
          fill
          alt="POX Academy Training"
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 z-15 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center z-30 relative text-center px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] mb-8"
        >
          <Image
            src="/assets/team-logo-v3.png"
            fill
            alt="Π.Ο. Ξηροκρήνης"
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Badge - Est. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-sm xl:text-base tracking-[0.4em] uppercase text-white/70 font-secondary">
            Από το 1943 · Θεσσαλονίκη
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-primary"
        >
          <span className="text-[50px] md:text-[80px] xl:text-[120px] leading-[1] font-bold block text-white drop-shadow-md">
            Ακαδημία
          </span>
          <span className="text-[50px] md:text-[80px] xl:text-[120px] leading-[1] font-bold block text-accent drop-shadow-md">
            Ποδοσφαίρου
          </span>
        </motion.h1>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-[80px] h-[3px] bg-accent my-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="lead font-light max-w-[500px] xl:max-w-[600px] mb-10 text-white/80 text-lg"
        >
          Διαμορφώνουμε τους αυριανούς ποδοσφαιριστές μέσα από αξίες, πειθαρχία
          και αγάπη για το παιχνίδι.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="#contact">
            <button className="btn">Εγγραφή Τώρα</button>
          </Link>
          <Link href="#programs">
            <button className="btn-outline">Τα Τμήματά Μας</button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
