import { contactInfo, newsletterContent } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="mx-auto w-[min(900px,92vw)] py-8">
      <p className="section-label">Contact</p>
      <h1 className="editorial-title mt-3 text-5xl">Inquiries & Collecting</h1>
      <div className="mt-4 text-sm text-ink/70">
        {contactInfo.addressLines.map((line) => <p key={line}>{line}</p>)}
      </div>
      <p className="mt-2 text-sm text-ink/70">Gallery Manager: {contactInfo.manager}</p>
      <p className="text-sm text-ink/70">{contactInfo.phone} · {contactInfo.email}</p>
      <a href={contactInfo.instagram} className="mt-2 inline-block text-sm text-terracotta underline">Instagram</a>

      <form className="mt-8 grid gap-4 text-sm">
        <input className="border border-ink/20 bg-white px-4 py-3" placeholder="Name" />
        <input type="email" className="border border-ink/20 bg-white px-4 py-3" placeholder="Email" />
        <input className="border border-ink/20 bg-white px-4 py-3" placeholder="Subject" />
        <textarea className="min-h-40 border border-ink/20 bg-white px-4 py-3" placeholder="Message" />
        <button className="w-fit border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">Send inquiry</button>
      </form>

      <div className="mt-12 border-t border-ink/10 pt-8">
        <p className="section-label">Newsletter</p>
        <h2 className="editorial-title mt-2 text-3xl">{newsletterContent.title}</h2>
        <form className="mt-4 grid gap-3 max-w-md">
          <input className="border border-ink/20 bg-white px-4 py-3 text-sm" placeholder={newsletterContent.fields[0]} />
          <input className="border border-ink/20 bg-white px-4 py-3 text-sm" placeholder={newsletterContent.fields[1]} />
          <button className="w-fit border border-ink/20 px-5 py-2 text-xs uppercase tracking-[0.2em]">{newsletterContent.cta}</button>
        </form>
      </div>
    </div>
  );
}
