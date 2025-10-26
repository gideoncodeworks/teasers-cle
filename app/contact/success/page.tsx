import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function SuccessPage() {
  const { brand } = data;

  return (
    <div className="min-h-screen bg-hunter text-white px-6 py-24 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-6xl">✓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif neon-text">
            Message Received!
          </h1>
          <p className="text-xl text-emerald">
            We'll get back to you within 48 hours.
          </p>
        </div>

        <div className="bg-graphite/80 border border-emerald/30 rounded-3xl p-8 shadow-neon space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Your submission has been sent directly to the {brand.name} founding team.
            Check your email for a confirmation message.
          </p>
          <p className="text-sm text-gray-400">
            We respond to every inquiry. If you don't hear from us within 48 hours,
            check your spam folder or reach out directly at info@teaserscle.com.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="neon-btn">
            Back to Home
          </Link>
          <Link href="/experiences" className="neon-btn">
            View Experiences
          </Link>
          <Link href="/contact" className="neon-btn">
            Submit Another Request
          </Link>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
          {brand.name} · {brand.city}
        </p>
      </div>
    </div>
  );
}
