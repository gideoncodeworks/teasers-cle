import data from "@/context/teasersCLE.json";

export default function PressPage() {
  const { press } = data;

  return (
    <section className="min-h-screen bg-[#2b0f18] text-white p-8">
      <h1 className="text-4xl font-serif text-[#d4af37] mb-8">Press & Buzz</h1>
      <div className="space-y-8">
        {press.map((item, index) => (
          <div key={index} className="border-l-4 border-[#d4af37] pl-4">
            <p className="italic text-lg mb-2">"{item.quote}"</p>
            <p className="text-sm text-gray-400">— {item.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
