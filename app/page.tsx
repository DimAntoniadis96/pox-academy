"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div className="h-full overflow-x-hidden">
      <div id="home"><Hero /></div>
      <div id="programs"><Programs /></div>
      <div id="about"><About /></div>
      <div id="schedule"><Schedule /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Home;
