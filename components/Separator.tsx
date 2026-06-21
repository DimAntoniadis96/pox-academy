const Separator = ({ bg = "accent" }: { bg?: "accent" | "white" | "primary" }) => {
  const bgColors = {
    accent: "bg-accent",
    white: "bg-white",
    primary: "bg-primary",
  };

  return (
    <div className="relative w-[80px] mx-auto flex items-center justify-center">
      <div className={`h-[3px] w-full ${bgColors[bg]} rounded-full`}></div>
    </div>
  );
};

export default Separator;
