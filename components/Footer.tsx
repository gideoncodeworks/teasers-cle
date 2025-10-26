import data from "@/context/teasersCLE.json";

export default function Footer() {
  const { socials, brand } = data;

  return (
    <footer className="bg-dark text-white py-8 text-center border-t-2 border-neonBlue/50 relative">
      {/* Neon glow line at top - handled by globals.css footer::before */}
      <p className="text-sm mb-4 text-gray-400">© {new Date().getFullYear()} {brand.name} — Cleveland, Ohio</p>
      <div className="flex justify-center gap-6">
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-neonPink transition-colors">Instagram</a>
        <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-neonPink transition-colors">TikTok</a>
        <a href={socials.eventbrite} target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-neonPink transition-colors">Eventbrite</a>
      </div>
    </footer>
  );
}
