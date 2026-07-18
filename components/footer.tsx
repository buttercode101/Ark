import Link from 'next/link';
import { gallery } from '@/lib/data';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 py-12">
      <div className="mx-auto grid w-[min(1100px,92vw)] gap-8 md:grid-cols-3">
        <div>
          <p className="section-label">ark. contemporary</p>
          <p className="mt-3 text-sm text-ink/70">
            {gallery.tagline}
            <br />
            {gallery.address}
            <br />
            {gallery.region}
          </p>
        </div>
        <div>
          <p className="section-label">Hours</p>
          <p className="mt-3 text-sm text-ink/70">{gallery.hours}</p>
        </div>
        <div>
          <p className="section-label">Connect</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href={`mailto:${gallery.email}`} className="hover:text-terracotta transition-colors">
              {gallery.email}
            </a>
            <a href={`tel:${gallery.phone.replace(/\s/g, '')}`} className="hover:text-terracotta transition-colors">
              {gallery.phone}
            </a>
            <Link href="/contact" className="hover:text-terracotta transition-colors">
              Inquire
            </Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 w-[min(1100px,92vw)] text-xs text-ink/40">
        © {new Date().getFullYear()} ark. contemporary. Established {gallery.established}.
      </p>
    </footer>
  );
}
