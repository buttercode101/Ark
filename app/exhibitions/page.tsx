import Image from 'next/image';
import Link from 'next/link';
import { exhibitions, featuredArtworks } from '@/lib/data';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { MaskReveal } from '@/components/motion/text';
import { LineText } from '@/components/motion/text';
import { Magnetic } from '@/components/motion/magnetic';

export default function ExhibitionsPage() {
  const { current, past } = exhibitions;
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-16 py-8">
      <section className="grid gap-10 md:grid-cols-2">
        <MaskReveal className="relative h-[540px] overflow-hidden rounded-sm">
          <Image src={current.hero} alt={current.title} fill className="object-cover" />
        </MaskReveal>
        <div className="self-center">
          <Reveal>
            <p className="section-label">Current · {current.dates}</p>
          </Reveal>
          <h1 className="editorial-title mt-3 text-5xl md:text-6xl">
            <LineText>{current.title}</LineText>
          </h1>
          <Reveal delay={0.15}>
            <p className="mt-3 text-sm text-ink/70">{current.artist}</p>
            <p className="mt-5 text-sm leading-relaxed">{current.description}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Magnetic strength={0.5}>
                <Link
                  href="/contact"
                  data-cursor="grow"
                  className="inline-block border border-ink/20 px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-bg"
                >
                  Book a private viewing
                </Link>
              </Magnetic>
              {current.pdf && (
                <a
                  href={current.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-ink/20 px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-bg"
                >
                  Download catalogue
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <Stagger className="mt-5 grid gap-5 md:grid-cols-3">
          {featuredArtworks.map((work) => (
            <StaggerItem key={work.id} className="border border-ink/10 p-3 text-sm">
              <MaskReveal className="relative h-64 overflow-hidden">
                <Image src={work.image} alt={work.title} fill className="object-cover" />
              </MaskReveal>
              <p className="mt-3 font-medium">{work.title}</p>
              <p className="text-ink/70">{work.artist}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section>
        <Reveal>
          <p className="section-label">Archive</p>
        </Reveal>
        <Stagger className="mt-5 grid gap-5 md:grid-cols-2">
          {past.map((item) => (
            <StaggerItem key={item.title} className="border border-ink/10 p-3">
              <MaskReveal className="relative h-64 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </MaskReveal>
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
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
