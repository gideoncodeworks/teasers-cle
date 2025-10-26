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
      <h2 className="text-3xl font-serif text-roseGold">{title}</h2>
      <p className="text-sm uppercase tracking-[0.3em] text-emerald mt-2">{subtitle}</p>
    </header>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-black/70 border border-emerald/30 rounded-3xl p-6 shadow-neon hover:border-roseGold/50 transition-all"
        >
          <h3 className="text-xl font-serif text-emerald">{item.title}</h3>
          <p className="text-sm text-gray-300 mt-3 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default function MenuPage() {
  const { menu, brand } = data;

  const passed = menu.filter(item => item.type === "passed");
  const cocktails = menu.filter(item => item.type === "cocktail");
  const experiences = menu.filter(item => item.type === "experience");

  return (
    <div className="min-h-screen bg-hunter text-white">
      <section className="px-4 pt-24 pb-14 text-center sm:px-6 sm:pt-28 sm:pb-16 bg-gradient-to-b from-roseGold/15 via-hunter to-graphite">
        <span className="tracking-[0.35em] uppercase text-sm text-emerald">
          Savor Every Tease
        </span>
        <h1 className="text-4xl md:text-5xl font-serif neon-text mt-6">
          The Menu
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 mt-6 leading-relaxed">
          Curated roaming bites, rum-forward cocktails, and beverage experiences that travel with every Teasers CLE drop.
          We prototype flavors during our nightlife series, refining them for the future lounge.
        </p>
      </section>

      <div className="relative px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald/12 via-hunter to-roseGold/12 opacity-60" />
        <div className="max-w-6xl mx-auto space-y-14 sm:space-y-16">
          <MenuSection
            title="Passed Bites"
            subtitle="Street food nostalgia elevated for the dance floor"
            items={passed}
          />

          <MenuSection
            title="Cocktails"
            subtitle="Signature pours roaming through every pop-up"
            items={cocktails}
          />

          <MenuSection
            title="Experiences"
            subtitle="Service rituals that anchor the Emerald Noir aesthetic"
            items={experiences}
          />
        </div>
      </div>

      <section className="px-4 pb-24 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-graphite/75 border border-roseGold/40 rounded-3xl p-10 shadow-neon sm:p-12">
          <h2 className="text-3xl font-serif text-roseGold">
            Reserve A Tasting Flight
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our team tailors roaming menus for each pop-up, mirroring how we&apos;ll program the eventual lounge.
            Tell us your flavor lane and we&apos;ll customize a tasting flight or sponsor menu for your crew.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="neon-btn">
              Curate A Private Tasting
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
