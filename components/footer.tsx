import Link from 'next/link';
import { contactInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 py-12">
      <div className="mx-auto grid w-[min(1100px,92vw)] gap-8 md:grid-cols-3">
        <div>
          <p className="section-label">ARK Contemporary</p>
          <div className="mt-3 text-sm text-ink/70">
            {contactInfo.addressLines.map((line) => <p key={line}>{line}</p>)}
          </div>
        </div>
        <div>
          <p className="section-label">Hours</p>
          <div className="mt-3 text-sm text-ink/70 space-y-1">
            {contactInfo.hours.map((hour) => <p key={hour}>{hour}</p>)}
          </div>
        </div>
        <div>
          <p className="section-label">Connect</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <a href={contactInfo.instagram}>Instagram</a>
          <p className="mt-3 text-sm text-ink/70">Rosendal, Free State, South Africa</p>
        </div>
        <div>
          <p className="section-label">Hours</p>
          <p className="mt-3 text-sm text-ink/70">Thu–Sun · 10:00–16:00</p>
        </div>
        <div>
          <p className="section-label">Connect</p>
          <div className="mt-3 flex gap-4 text-sm">
            <Link href="#">Instagram</Link>
            <Link href="#">WhatsApp</Link>
            <Link href="/contact">Inquire</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
