import data from "@/context/teasersCLE.json";

export default function MenuPage() {
  const { menu } = data;

  const bites = menu.filter(item => item.type === "bite");
  const cocktails = menu.filter(item => item.type === "cocktail");
  const desserts = menu.filter(item => item.type === "dessert");

  const Section = ({ title, items }: { title: string; items: typeof menu }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-serif text-[#d4af37] mb-4">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.title} className="bg-[#2b0f18] rounded-xl p-6 border border-[#d4af37]/20">
            <h3 className="text-lg font-semibold text-[#e8b6a9] mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-serif text-[#d4af37] mb-8">The Menu</h1>
      <Section title="Bites" items={bites} />
      <Section title="Cocktails" items={cocktails} />
      <Section title="Desserts" items={desserts} />
    </section>
  );
}
