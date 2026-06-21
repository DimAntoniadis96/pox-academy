/**
 * Menu Component
 * 
 * Displays the coffee shop menu with a grid of menu items.
 * Features:
 * - Grid layout: 1 column on mobile, 2 columns on desktop
 * - 10 menu items displayed
 * - Section header with title and separator
 * - Call-to-action button
 */

import Separator from "../Separator";
import MenuItem from "./MenuItem";

// Menu items data - Cocktail and Pizza offerings
const menuItems = [
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Κλασικό Negroni",
    description: "Τζιν, Campari, Γλυκό Βερμούτ, Φλούδα Πορτοκαλιού",
    price: 10.0,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Margarita",
    description: "Τεκίλα, Triple Sec, Φρέσκος Χυμός Λάιμ, Χείλος με Αλάτι",
    price: 9.5,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Old Fashioned",
    description: "Bourbon, Angostura Bitters, Ζάχαρη, Φλούδα Πορτοκαλιού",
    price: 11.0,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Aperol Spritz",
    description: "Aperol, Prosecco, Σόδα, Φέτα Πορτοκάλι",
    price: 9.0,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Espresso Martini",
    description: "Βότκα, Λικέρ Καφέ, Φρέσκος Espresso",
    price: 12.0,
  },
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Πίτσα Μαργαρίτα",
    description: "Ντομάτα San Marzano, Φρέσκια Μοτσαρέλα, Βασιλικός, Έξτρα Παρθένο Ελαιόλαδο",
    price: 14.0,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Πίτσα Diavola",
    description: "Σάλτσα Ντομάτας, Μοτσαρέλα, Πικάντικο Σαλάμι, Νιφάδες Τσίλι",
    price: 16.5,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Τρούφα & Μανιτάρια",
    description: "Λευκή Βάση, Μοτσαρέλα, Ποικιλία Μανιταριών, Λάδι Τρούφας",
    price: 18.0,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Προσιούτο & Ρόκα",
    description: "Μοτσαρέλα, Ντοματίνια, Προσιούτο, Ρόκα, Παρμεζάνα",
    price: 19.5,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Capricciosa",
    description: "Ντομάτα, Μοτσαρέλα, Αγκινάρες, Ελιές, Ζαμπόν, Μανιτάρια",
    price: 17.0,
  },
] as const;

const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Το Μενού</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          {/* Section Description */}
          <p className="text-center max-w-[620px] mx-auto">
            Ορισμένα από τα αγαπημένα μας. Από πίτσες ξυλοφούρνου μέχρι cocktails που θα θέλεις να ξαναπαραγγείλεις.
          </p>
        </div>
        
        {/* Menu Grid and Button */}
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          {/* Menu Items Grid - Responsive: 1 column mobile, 2 columns desktop */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  key={index}
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                />
              );
            })}
          </div>
          {/* Call-to-Action Button */}
          <button className="btn">Ολόκληρο το μενού</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
