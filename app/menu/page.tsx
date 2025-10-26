import Link from "next/link";
import data from "@/context/teasersCLE.json";

type MenuItem = (typeof data.menu)[number];

const MenuSection = ({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: MenuItem[];
}) => (
  <section className="space-y-6">
    <header>
      <h2 className="text-3xl font-serif text-neonPink">{title}</h2>
      <p className="text-sm uppercase tracking-[0.3em] text-neonBlue mt-2">{subtitle}</p>
    </header>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-black/70 border border-neonBlue/30 rounded-3xl p-6 shadow-neon hover:border-neonPink/50 transition-all"
        >
          <h3 className="text-xl font-serif text-neonBlue">{item.title}</h3>
          <p className="text-sm text-gray-300 mt-3 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default function MenuPage() {
  const { menu, brand } = data;

  const bites = menu.filter(item => item.type === "bite");
  const cocktails = menu.filter(item => item.type === "cocktail");
  const desserts = menu.filter(item => item.type === "dessert");

  return (
    <div className="min-h-screen bg-dark text-white">
      <section className="px-6 pt-24 pb-16 text-center bg-gradient-to-b from-neonPink/15 via-dark to-black">
        <span className="tracking-[0.35em] uppercase text-sm text-neonBlue">
          Savor Every Tease
        </span>
        <h1 className="text-4xl md:text-5xl font-serif neon-text mt-6">
          The Menu
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 mt-6 leading-relaxed">
          Curated culinary sequences that match the energy of each Teasers CLE performance.
          Expect the unexpected—courses evolve with the story unfolding around you.
        </p>
      </section>

      <div className="relative px-6 pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neonBlue/10 via-dark to-neonPink/10 opacity-50" />
        <div className="max-w-6xl mx-auto space-y-16">
          <MenuSection
            title="Bites"
            subtitle="Immersive Opening Notes"
            items={bites}
          />

          <MenuSection
            title="Cocktails"
            subtitle="Liquid Dramaturgy"
            items={cocktails}
          />

          <MenuSection
            title="Desserts"
            subtitle="Final Curtain"
            items={desserts}
          />
        </div>
      </div>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-black/80 border border-neonPink/40 rounded-3xl p-12 shadow-neon">
          <h2 className="text-3xl font-serif text-neonPink">
            Reserve A Tasting Flight
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our culinary team customizes each menu for the night&apos;s theme and seasonality.
            Share your preferences, and we&apos;ll craft moments that excite every sense.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="neon-btn">
              Plan A Private Dinner
            </Link>
            <Link href="/experiences" className="neon-btn">
              Explore Event Pairings
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-gray-500">
          Menu concept by {brand.name} · {brand.city}
        </p>
      </section>
    </div>
  );
}
