import data from "@/context/teasersCLE.json";

export default function PressPage() {
  const { press } = data;

  return (
    <section className="min-h-screen bg-dark text-white p-8">
      <h1 className="text-4xl font-serif neon-text mb-8 text-center">Press & Buzz</h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        {press.map((item, index) => (
          <div key={index} className="border-l-4 border-neonPink pl-6 py-2 hover:shadow-neon transition-all">
            <p className="italic text-lg mb-2 text-gray-200">"{item.quote}"</p>
            <p className="text-sm text-neonBlue">— {item.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
