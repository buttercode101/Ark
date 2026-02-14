import Image from 'next/image';
import Link from 'next/link';
import { exhibitions } from '@/lib/data';

export default function ExhibitionsPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-14 py-8">
      <section className="grid gap-8 md:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden rounded-sm">
          <Image src={exhibitions.current.image} alt={exhibitions.current.title} fill className="object-cover" />
        </div>
        <div className="self-center">
          <p className="section-label">Current</p>
          <h1 className="editorial-title mt-2 text-5xl">{exhibitions.current.title}</h1>
          <p className="mt-3 text-sm text-ink/70">{exhibitions.current.dates}</p>
          <p className="mt-5 text-sm leading-relaxed">{exhibitions.current.description}</p>
          {exhibitions.current.catalog ? (
            <a href={exhibitions.current.catalog} className="mt-6 inline-block border border-ink/20 px-5 py-3 text-xs uppercase tracking-[0.2em]">Download</a>
          ) : null}
        </div>
      </section>

      <section>
        <p className="section-label">Past exhibitions</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {exhibitions.past.map((item) => (
            <article key={item.slug} className="border border-ink/10 p-3">
              <div className="relative h-64"><Image src={item.image} alt={item.title} fill className="object-cover" /></div>
              <p className="mt-3 text-2xl font-serif italic">{item.title}</p>
              <p className="text-sm text-ink/70">{item.dates}</p>
              <p className="mt-2 text-sm">{item.description}</p>
              {item.catalog ? <a href={item.catalog} className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-terracotta">Download</a> : null}
            </article>
          ))}
        </div>
      </section>

      <section>
        <p className="section-label">Archive</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {exhibitions.callouts.map((item) => (
            <div key={item.title} className="border border-ink/10 p-4 text-sm">
              <p className="font-medium">{item.title}</p>
              <p className="text-ink/60">{item.dates}</p>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-6 border-l-2 border-terracotta pl-4 text-sm italic text-ink/80">
          In the words of writer, photographer and science enthusiast Kevin Kelly, “Equilibrium is never.” It is this dynamic interplay between states of illusion and reality.
        </blockquote>
        <Link href="/contact" className="mt-6 inline-block border border-ink/20 px-5 py-3 text-xs uppercase tracking-[0.2em]">Book a private viewing</Link>
      </section>
    </div>
  );
}
