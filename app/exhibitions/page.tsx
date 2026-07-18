import Image from 'next/image';
import Link from 'next/link';
import { exhibitions, featuredArtworks } from '@/lib/data';

export default function ExhibitionsPage() {
  const { current, past } = exhibitions;
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-14 py-8">
      <section className="grid gap-8 md:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden rounded-sm">
          <Image src={current.hero} alt={current.title} fill className="object-cover" />
        </div>
        <div className="self-center">
          <p className="section-label">Current · {current.dates}</p>
          <h1 className="editorial-title mt-2 text-5xl">{current.title}</h1>
          <p className="mt-3 text-sm text-ink/70">{current.artist}</p>
          <p className="mt-5 text-sm leading-relaxed">{current.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="border border-ink/20 px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-bg"
            >
              Book a private viewing
            </Link>
            {current.pdf && (
              <a
                href={current.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink/20 px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-bg"
              >
                Download catalogue
              </a>
            )}
          </div>
        </div>
      </section>

      <section>
        <p className="section-label">Featured in this exhibition</p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {featuredArtworks.map((work) => (
            <article key={work.id} className="border border-ink/10 p-3 text-sm">
              <div className="relative h-64 overflow-hidden">
                <Image src={work.image} alt={work.title} fill className="object-cover" />
              </div>
              <p className="mt-3 font-medium">{work.title}</p>
              <p className="text-ink/70">{work.artist}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <p className="section-label">Archive</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {past.map((item) => (
            <article key={item.title} className="border border-ink/10 p-3">
              <div className="relative h-64 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <p className="mt-3 text-2xl font-serif italic">{item.title}</p>
              <p className="text-sm text-ink/70">{item.year}</p>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
              )}
              {item.pdf && (
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-terracotta hover:underline"
                >
                  Catalogue →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
