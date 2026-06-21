/**
 * OpeningHours Component
 * 
 * Displays business opening hours information.
 * Features:
 * - Two-column layout: Image side (desktop) and Hours side
 * - Background image with overlay on hours side
 * - Badge overlay on image side
 * - Opening hours badge/schedule image
 * - Responsive: Single column on mobile, two columns on desktop
 */

import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const OpeningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      {/* Left Side - Image with Badge Overlay (Hidden on mobile, visible on xl) */}
      <div className="hidden relative xl:flex flex-1 justify-center items-center">
        {/* Dark Overlay - 60% opacity for contrast */}
        <div className="w-full h-full absolute z-40 top-0 bg-black/60" />
        {/* Background Image */}
        <Image
          src="/assets/routina/logo-pizza.png"
          fill
          alt=""
          quality={100}
          priority
          className="object-cover grayscale contrast-125"
        />
      </div>

      {/* Right Side - Opening Hours Content */}
      <div className="flex-1 bg-black flex flex-col justify-center items-center relative">
        {/* Dark Overlay - 85% opacity for text readability */}
        <div className="w-full h-full absolute top-0 bg-black/[0.85] z-10" />
        
        {/* Content Container */}
        <div className="z-20 flex flex-col items-center justify-center">
          {/* Section Title */}
          <h2 className="h2 text-white mb-4">Πότε Μας Βρίσκεις</h2>
          
          {/* Decorative Separator */}
          <Separator bg="accent" />
          
          {/* Opening Hours Text */}
          <div className="mt-12 flex flex-col items-center justify-center text-center gap-8 text-white font-secondary text-2xl xl:text-4xl tracking-widest">
            <div>
              <p className="font-bold text-accent mb-2">Δευτερα - Παρασκευη</p>
              <p>18:00 - 02:00</p>
            </div>
            <div>
              <p className="font-bold text-accent mb-2">Σαββατο - Κυριακη</p>
              <p>12:00 - 03:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
