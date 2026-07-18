import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artists, gallery } from '@/lib/data';
import { Reveal } from '@/components/motion/reveal';
import { MaskReveal } from '@/components/motion/text';
import { LineText } from '@/components/motion/text';
import { Magnetic } from '@/components/motion/magnetic';

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export default function ArtistProfile({ params }: { params: { slug: string } }) {
  const artist = artists.find((entry) => entry.slug === params.slug);
  if (!artist) return notFound();

  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-12 py-8">
      <header className="grid gap-10 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="section-label">Artist Profile</p>
          </Reveal>
          <h1 className="editorial-title mt-3 text-5xl md:text-7xl">
            <LineText>{artist.name}</LineText>
          </h1>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg text-ink/70">{artist.tagline}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 grid gap-6 text-sm leading-relaxed">
              <p>{artist.bio}</p>
              <blockquote className="border-l-2 border-terracotta pl-5 italic text-ink/80">
                {artist.statement}
              </blockquote>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <Magnetic strength={0.5} className="mt-8 inline-block">
              <a
                href={`mailto:${gallery.email}?subject=${encodeURIComponent(
                  `Inquiry — ${artist.name}`
                )}`}
                data-cursor="grow"
                className="inline-block border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-bg"
              >
                Inquire about works
              </a>
            </Magnetic>
          </Reveal>
        </div>
        <MaskReveal className="relative h-[560px] overflow-hidden rounded-sm" delay={0.1}>
          <Image src={artist.portrait} alt={artist.name} fill className="object-cover grayscale" />
        </MaskReveal>
      </header>

      <nav className="border-t border-ink/10 pt-6 text-sm">
        <Link href="/artists" className="transition-colors hover:text-terracotta">
          Back to all artists
        </Link>
      </nav>
    </div>
  );
}
