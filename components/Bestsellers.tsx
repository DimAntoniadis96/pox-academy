import Image from "next/image";

const bestsellers = [
  {
    id: 1,
    name: "Truffle Mushroom",
    description: "Μανιτάρια, κρέμα τρούφας, μοτσαρέλα και λάδι τρούφας. Η πίτσα που παραγγέλνουν όλοι για δεύτερη φορά.",
    image: "/assets/routina/pizza06.png",
    price: "14.50€"
  },
  {
    id: 2,
    name: "Routina Negroni",
    description: "Το signature μας. Gin, Campari, βερμούτ και μια twist που το κάνει μόνο δικό μας. Θα καταλάβεις από την πρώτη γουλιά.",
    image: "/assets/routina/explore_cocktail.png",
    price: "10.00€"
  },
  {
    id: 3,
    name: "Diavola",
    description: "Πικάντικο πεπερόνι, σάλτσα ντομάτας, μοτσαρέλα και λίγο καυτερό μέλι. Για όσους τολμάνε.",
    image: "/assets/routina/pizza07.png",
    price: "13.00€"
  }
];

const Bestsellers = () => {
  return (
    <section className="bg-white text-primary py-20 xl:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 xl:mb-24">
          <h2 className="h2 mb-4 text-primary">Δοκίμασέ τα</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Αυτά παραγγέλνουν όλοι ξανά και ξανά. Από τον ξυλόφουρνο στο τραπέζι, μαζί με το σωστό cocktail.
          </p>
        </div>

        {/* Bestsellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-14">
          {bestsellers.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#fcfcfc] rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl hover:border-black/20 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-[250px] w-full overflow-hidden bg-black/5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-primary uppercase tracking-wider text-primary">{item.name}</h3>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-secondary font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
