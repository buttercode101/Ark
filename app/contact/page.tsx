export default function ContactPage() {
  return (
    <div className="mx-auto w-[min(900px,92vw)] py-8">
      <p className="section-label">Contact</p>
      <h1 className="editorial-title mt-3 text-5xl">Inquiries & Collecting</h1>
      <form className="mt-8 grid gap-4 text-sm">
        <input className="border border-ink/20 bg-white px-4 py-3" placeholder="Name" />
        <input type="email" className="border border-ink/20 bg-white px-4 py-3" placeholder="Email" />
        <input className="border border-ink/20 bg-white px-4 py-3" placeholder="Subject" />
        <textarea className="min-h-40 border border-ink/20 bg-white px-4 py-3" placeholder="Message" />
        <button className="w-fit border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">Send inquiry</button>
      </form>
      <p className="mt-6 text-sm text-ink/70">Form submissions are structured for Supabase persistence and optional email edge-function notifications.</p>
    </div>
  );
}
