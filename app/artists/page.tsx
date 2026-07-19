import Link from 'next/link';
import Image from 'next/image';
import { artists } from '@/lib/data';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { MaskReveal } from '@/components/motion/text';
import { LineText } from '@/components/motion/text';

export default function ArtistsPage() {
  return (
    <section className="mx-auto w-[min(1100px,92vw)] py-8">
      <Reveal>
        <h1 className="editorial-title mt-3 text-5xl md:text-7xl">
          <LineText>Gallery Roster</LineText>
        </h1>
      </Reveal>

      <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
        {artists.map((artist, i) => (
          <StaggerItem key={artist.slug}>
            <Link
              href={`/artists/${artist.slug}`}
              className="group block"
              data-cursor="grow"
            >
              <MaskReveal className="relative h-[460px] overflow-hidden border border-ink/10">
                <Image
                  src={artist.portrait}
                  alt={artist.name}
                  fill
                  className="object-cover transition duration-[900ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/50 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-sm uppercase tracking-[0.2em] text-white">
                    View Portfolio
                  </span>
                </div>
              </MaskReveal>
              <p className="mt-5 text-xs text-terracotta">{String(i + 1).padStart(2, '0')}</p>
              <p className="text-3xl font-serif italic transition-colors group-hover:text-terracotta">
                {artist.name}
              </p>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
