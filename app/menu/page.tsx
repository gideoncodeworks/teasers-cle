import data from "@/context/teasersCLE.json";

export default function MenuPage() {
  const { menu } = data;

  const bites = menu.filter(item => item.type === "bite");
  const cocktails = menu.filter(item => item.type === "cocktail");
  const desserts = menu.filter(item => item.type === "dessert");

  const Section = ({ title, items }: { title: string; items: typeof menu }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-serif text-neonPink mb-4">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.title} className="bg-dark/80 rounded-xl p-6 border border-neonBlue/30 hover:border-neonPink/50 hover:shadow-neon transition-all">
            <h3 className="text-lg font-semibold text-neonBlue mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-dark text-white p-8">
      <h1 className="text-4xl font-serif neon-text mb-8 text-center">The Menu</h1>
      <Section title="Bites" items={bites} />
      <Section title="Cocktails" items={cocktails} />
      <Section title="Desserts" items={desserts} />
    </section>
  );
}
