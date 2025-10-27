"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const neonColors = {
  pink: "#FF1493",
  purple: "#9D4EDD",
  blue: "#00D9FF",
  gold: "#FFD700",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const TicketCard = ({
  title,
  price,
  features,
  cta,
  highlight = false,
}: {
  title: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05, y: -10 }}
    className={`relative rounded-3xl p-8 transition-all ${
      highlight
        ? "bg-gradient-to-br from-[#FF1493]/20 via-[#9D4EDD]/20 to-[#00D9FF]/20 border-2 border-[#FF1493] shadow-[0_0_40px_rgba(255,20,147,0.3)]"
        : "bg-[#1a1a1a] border border-[#9D4EDD]/30 hover:border-[#00D9FF]/50"
    }`}
  >
    {highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF1493] text-black px-6 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        Most Popular
      </div>
    )}
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black" style={{ color: neonColors.pink }}>
            ${price}
          </span>
          <span className="text-gray-400">/person</span>
        </div>
      </div>
      <ul className="space-y-3 text-gray-300">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[#00D9FF] mt-1">✓</span>
            <span className="text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://TeasersCarnivalAfterDark.eventbrite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-4 text-center font-bold uppercase tracking-wider rounded-xl transition-all"
        style={{
          background: highlight
            ? `linear-gradient(135deg, ${neonColors.pink}, ${neonColors.purple})`
            : `linear-gradient(135deg, ${neonColors.purple}, ${neonColors.blue})`,
          boxShadow: `0 0 20px ${highlight ? neonColors.pink : neonColors.purple}40`,
        }}
      >
        {cta}
      </a>
    </div>
  </motion.div>
);

const ExperienceCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="bg-[#1a1a1a] border border-[#9D4EDD]/30 rounded-2xl p-6 hover:border-[#00D9FF]/50 transition-all"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#9D4EDD]/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-[#FF1493] transition-colors">
          {question}
        </span>
        <span
          className="text-2xl transition-transform"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", color: neonColors.pink }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="pb-6 text-gray-300 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function CarnivalAfterDarkPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated Neon Background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              `radial-gradient(circle at 20% 50%, ${neonColors.pink}40 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 50%, ${neonColors.purple}40 0%, transparent 50%)`,
              `radial-gradient(circle at 50% 80%, ${neonColors.blue}40 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 50%, ${neonColors.pink}40 0%, transparent 50%)`,
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-5xl space-y-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black tracking-tight"
            style={{
              background: `linear-gradient(135deg, ${neonColors.pink}, ${neonColors.purple}, ${neonColors.blue})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CARNIVAL AFTER DARK
          </motion.h1>

          <p className="text-2xl md:text-3xl font-light" style={{ color: neonColors.gold }}>
            Friday the 13th never felt this lucky.
          </p>

          <div className="space-y-2 text-lg text-gray-300">
            <p className="font-semibold">February 13, 2026 • 9PM–2AM</p>
            <p>Cleveland • Secret Location Revealed 48 Hours Prior</p>
          </div>

          <motion.a
            href="https://TeasersCarnivalAfterDark.eventbrite.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 text-xl font-bold uppercase tracking-wider rounded-full"
            style={{
              background: `linear-gradient(135deg, ${neonColors.pink}, ${neonColors.purple})`,
              boxShadow: `0 0 40px ${neonColors.pink}60`,
            }}
          >
            Get Tickets
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2
              className="text-4xl md:text-5xl font-black text-center mb-8"
              style={{ color: neonColors.pink }}
            >
              What Is This?
            </h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Experience Trinidad Carnival's electric energy reimagined for a Cleveland night. This isn't a
                concert—it's a full-body immersion into the most celebrated street party on earth. Soca rhythms pulse
                through a crowd dressed in sequins, feathers, and carnival-ready fits while servers circulate with
                champagne and Caribbean rum punches.
              </p>
              <p>
                Your ticket includes <strong style={{ color: neonColors.gold }}>passed food</strong>,{" "}
                <strong style={{ color: neonColors.gold }}>free drinks (9-11pm)</strong>,{" "}
                <strong style={{ color: neonColors.gold }}>live DJ</strong>,{" "}
                <strong style={{ color: neonColors.gold }}>body paint station</strong>, and pure island vibes until 2AM.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black text-center mb-16"
            style={{ color: neonColors.purple }}
          >
            What You Get
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ExperienceCard
              icon="🍾"
              title="Welcome Champagne"
              description="Bubbles on arrival to start your night right"
            />
            <ExperienceCard
              icon="🍹"
              title="Free Signature Cocktails"
              description="The Mas, Port of Spain Sunset, and rum punch (9-11pm)"
            />
            <ExperienceCard
              icon="🍖"
              title="Caribbean Bites"
              description="Doubles, jerk chicken, plantain chips, coconut shrimp (9-11pm)"
            />
            <ExperienceCard icon="🎵" title="Live Soca DJ" description="Non-stop island energy until 2AM" />
            <ExperienceCard
              icon="🎨"
              title="Body Paint Station"
              description="Neon pigments and glitter to complete your look"
            />
            <ExperienceCard
              icon="✨"
              title="Glow Accessories"
              description="LED bracelets at the door for everyone"
            />
            <ExperienceCard
              icon="🔒"
              title="Secret Location"
              description="Address revealed 48 hours before the event"
            />
          </motion.div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black text-center mb-4"
            style={{ color: neonColors.blue }}
          >
            Choose Your Experience
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-lg">All tickets include champagne, cocktails (9-11pm), food, DJ, and body paint</p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            <TicketCard
              title="Early Bird"
              price="50"
              cta="Buy Early Bird"
              features={[
                "Welcome champagne on arrival",
                "Free signature cocktails (9-11pm)",
                "Caribbean passed bites (9-11pm)",
                "Live Soca DJ until 2AM",
                "Body paint station access",
                "LED glow accessories",
                "Limited to 50 tickets",
              ]}
            />

            <TicketCard
              title="General Admission"
              price="65"
              cta="Buy GA Ticket"
              highlight={true}
              features={[
                "Everything in Early Bird",
                "Standard entry at 9pm",
                "Prime dance floor access",
                "Unlimited body paint designs",
                "Photo booth access",
                "Secret location reveal 48hrs prior",
              ]}
            />

            <TicketCard
              title="VIP Upgrade"
              price="130"
              cta="Buy VIP"
              features={[
                "Early entry at 8:30pm",
                "Double champagne on arrival",
                "Reserved VIP lounge seating",
                "Table service all night",
                "Late-night snacks (11pm-1am)",
                "Exclusive Teasers CLE merch",
                "Skip-the-line access",
                "Limited to 30 tickets",
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black text-center mb-16"
            style={{ color: neonColors.gold }}
          >
            What You're Eating & Drinking
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: neonColors.pink }}>
                  Passed Bites (9-11pm)
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Doubles shooters with tamarind chutney</li>
                  <li>• Jerk chicken lollipops with mango glaze</li>
                  <li>• Plantain chips with pepper sauce</li>
                  <li>• Coconut rum shrimp on sugarcane skewers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: neonColors.purple }}>
                  Signature Cocktails
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong>The Mas</strong> — Spiced rum, passionfruit, lime
                  </li>
                  <li>
                    <strong>Port of Spain Sunset</strong> — Coconut rum, mango, grenadine
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: neonColors.blue }}>
                  VIP Late-Night Snacks (11pm-1am)
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Mini beef patties</li>
                  <li>• Plantain sliders</li>
                  <li>• Spicy wings with lime</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border border-[#FFD700]/30 rounded-2xl p-6">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong style={{ color: neonColors.gold }}>Dietary restrictions?</strong> Contact us at
                  info@teaserscle.com and we'll do our best to accommodate.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black text-center mb-16"
            style={{ color: neonColors.pink }}
          >
            Questions?
          </motion.h2>

          <div className="space-y-2">
            <FAQItem
              question="What's the dress code?"
              answer="Costume encouraged—sequins, feathers, bold colors. Or just wear something you can dance in all night. This is carnival energy, so come dressed to celebrate!"
            />
            <FAQItem
              question="Where is the event?"
              answer="Secret location in Cleveland. The address will be revealed to all ticket holders 48 hours before the event via email and SMS."
            />
            <FAQItem
              question="Is there parking?"
              answer="Yes! Parking details will be sent along with the location reveal 48 hours before the event."
            />
            <FAQItem
              question="What if I have dietary restrictions?"
              answer="Contact us at info@teaserscle.com before the event and we'll do our best to accommodate your needs."
            />
            <FAQItem
              question="Can I buy tickets at the door?"
              answer="No. This is a ticketed event only. Once we hit capacity, sales close. Buy your tickets in advance to guarantee entry!"
            />
            <FAQItem
              question="What time does VIP entry start?"
              answer="VIP doors open at 8:30pm with early access. General Admission and Early Bird doors open at 9pm."
            />
            <FAQItem
              question="Is this a 21+ event?"
              answer="Yes. Valid ID is required for entry. No exceptions."
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              `radial-gradient(circle at 50% 50%, ${neonColors.pink}60 0%, transparent 70%)`,
              `radial-gradient(circle at 50% 50%, ${neonColors.purple}60 0%, transparent 70%)`,
              `radial-gradient(circle at 50% 50%, ${neonColors.blue}60 0%, transparent 70%)`,
              `radial-gradient(circle at 50% 50%, ${neonColors.pink}60 0%, transparent 70%)`,
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black" style={{ color: neonColors.gold }}>
            Ready to Experience Carnival?
          </h2>
          <p className="text-xl text-gray-300">
            Limited tickets available. Don't miss Cleveland's hottest nightlife event of 2026.
          </p>
          <motion.a
            href="https://TeasersCarnivalAfterDark.eventbrite.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 text-xl font-bold uppercase tracking-wider rounded-full"
            style={{
              background: `linear-gradient(135deg, ${neonColors.pink}, ${neonColors.purple})`,
              boxShadow: `0 0 40px ${neonColors.pink}60`,
            }}
          >
            Get Your Tickets Now
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#9D4EDD]/30 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div>
              <Link href="/" className="text-2xl font-black" style={{ color: neonColors.pink }}>
                TEASERS CLE
              </Link>
              <p className="text-gray-500 text-sm mt-2">Where anticipation is the main course.</p>
            </div>

            <div className="flex gap-6 items-center">
              <a
                href="https://instagram.com/teaserscle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF1493] transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:info@teaserscle.com"
                className="text-gray-400 hover:text-[#FF1493] transition-colors"
              >
                Contact
              </a>
              <Link href="/experiences" className="text-gray-400 hover:text-[#FF1493] transition-colors">
                All Events
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#9D4EDD]/20 text-center text-sm text-gray-500">
            <p>21+ Event • Valid ID Required • Powered by Teasers CLE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
