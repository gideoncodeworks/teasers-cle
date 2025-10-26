import data from "@/context/teasersCLE.json";

export default function Footer() {
  const { socials, brand } = data;

  return (
    <footer className="bg-[#2b0f18] text-white py-8 text-center border-t border-[#d4af37]/30">
      <p className="text-sm mb-4 text-gray-400">© {new Date().getFullYear()} {brand.name} — Cleveland, Ohio</p>
      <div className="flex justify-center gap-6 text-[#d4af37]">
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href={socials.eventbrite} target="_blank" rel="noopener noreferrer">Eventbrite</a>
      </div>
    </footer>
  );
}
