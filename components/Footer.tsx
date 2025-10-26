import Image from "next/image";
import data from "@/context/teasersCLE.json";

export default function Footer() {
  const { socials, brand } = data;

  return (
    <footer className="bg-dark text-white py-10 text-center border-t-2 border-neonBlue/50 relative">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-40">
          <Image
            src="/brand/logo.png"
            alt={`${brand.name} logo`}
            fill
            className="object-contain drop-shadow-[0_0_12px_rgba(0,184,255,0.35)]"
            sizes="10rem"
          />
        </div>
        <p className="text-sm text-gray-400 max-w-md">
          {brand.tagline}
        </p>
      </div>
      <p className="text-sm mt-6 text-gray-500">
        © {new Date().getFullYear()} {brand.name} — {brand.city}
      </p>
      <div className="mt-4 flex justify-center gap-6">
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-neonPink transition-colors">Instagram</a>
        <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-neonPink transition-colors">TikTok</a>
        <a href={socials.eventbrite} target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-neonPink transition-colors">Eventbrite</a>
      </div>
    </footer>
  );
}
