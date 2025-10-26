export default function ContactPage() {
  return (
    <section className="min-h-screen bg-dark text-white flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-serif neon-text mb-6">Join the Guestlist</h1>
      <form className="w-full max-w-md bg-dark/80 p-6 rounded-lg border border-neonBlue/40 shadow-neon">
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 rounded bg-black border-2 border-neonBlue/50 text-white focus:border-neonPink focus:outline-none transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded bg-black border-2 border-neonBlue/50 text-white focus:border-neonPink focus:outline-none transition-colors"
        />
        <textarea
          placeholder="Message or partnership inquiry"
          rows={4}
          className="w-full mb-4 p-3 rounded bg-black border-2 border-neonBlue/50 text-white focus:border-neonPink focus:outline-none transition-colors"
        />
        <button type="submit" className="w-full neon-btn">
          Submit
        </button>
      </form>
    </section>
  );
}
