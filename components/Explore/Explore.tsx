/**
 * Explore Component
 * 
 * Showcases different coffee types and varieties.
 * Features:
 * - Three-column layout: Left items, Center image, Right items
 * - Parallax effect on center image using Locomotive Scroll
 * - Responsive: Stacks vertically on mobile, horizontal on desktop
 * - Each side displays 2 coffee type items
 */

import Image from "next/image";
import ExploreItem from "./ExploreItem";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        {/* Three-column layout: Left | Center | Right */}
        <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Left Column - First 2 items, right-aligned on desktop */}
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            <ExploreItem
              itemCSS="xl:text-right xl:items-end" // Right-align on desktop
              icon="coffee-1.svg"
              text={{
                title: "Cocktails",
                description:
                  "Οι bartenders μας φτιάχνουν συνδυασμούς που δεν τους βρίσκεις αλλού. Από Negroni μέχρι τρελά signatures, κάθε ποτήρι είναι και μια εμπειρία.",
              }}
            />
            {/* Item 2 */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-2.svg"
              text={{
                title: "Πίτσα ξυλόφουρνου",
                description:
                  "Ζύμη χειροποίητη, φρέσκα υλικά και ξυλόφουρνος που κάνει τη διαφορά. Δοκίμασέ την μια φορά και θα γίνει ρουτίνα.",
              }}
            />
          </div>
          
          {/* Center Column - Coffee cup image without parallax to prevent clipping */}
          <div className="hidden xl:flex w-[420px] flex-shrink-0 justify-center items-center">
            <img
              src="/assets/routina/logo-pizza4.png"
              alt="Routina Pizza"
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </div>
          {/* Right Column - Last 2 items, left-aligned on desktop */}
          <div className="flex-1  flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            <ExploreItem
              itemCSS="xl:text-left items-start" // Left-align on desktop
              icon="coffee-3.svg"
              text={{
                title: "Premium Ποτά",
                description:
                  "Ουίσκι, τεκίλες, ρούμια, gin — ό,τι πιεις το πίνεις σωστά. Η κάβα μας είναι επιλεγμένη για όσους ξέρουν.",
              }}
            />
            {/* Item 4 */}
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="orektika-icon.svg"
              text={{
                title: "Ορεκτικά",
                description:
                  "Σκορδόψωμο από τον φούρνο, πατάτες που εξαφανίζονται σε δευτερόλεπτα και σνακ που πάνε με τα πάντα. Ιδανικά για sharing.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
