export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-serif text-[#d4af37] mb-6">Join the Guestlist</h1>
      <form className="w-full max-w-md bg-[#2b0f18] p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Name" className="w-full mb-4 p-2 rounded bg-black border border-[#d4af37] text-white" />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 rounded bg-black border border-[#d4af37] text-white" />
        <textarea placeholder="Message or partnership inquiry" rows={4} className="w-full mb-4 p-2 rounded bg-black border border-[#d4af37] text-white" />
        <button type="submit" className="w-full bg-[#d4af37] text-black font-semibold py-2 rounded hover:bg-[#e8b6a9] transition">
          Submit
        </button>
      </form>
    </section>
  );
}
