'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LineText, MaskReveal } from '@/components/motion/text';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { Parallax } from '@/components/motion/parallax';
import { Magnetic } from '@/components/motion/magnetic';
import { EASE, DURATION } from '@/lib/motion';
import { artists, exhibitions, featuredArtworks, gallery } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-28 pb-8">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: DURATION.hero, ease: EASE.out }}
          className="absolute inset-0"
        >
          <Image
            src={exhibitions.current.hero}
            alt={exhibitions.current.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/25 to-ink/30" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] w-[min(1100px,92vw)] flex-col justify-end pb-20 text-bg">
          <Reveal>
            <p className="section-label !text-bg/80">Current Exhibition</p>
          </Reveal>
          <h1 className="editorial-title mt-4 max-w-4xl text-5xl md:text-8xl">
            <LineText delay={0.1}>{exhibitions.current.title}</LineText>
          </h1>
          <Reveal delay={0.25}>
            <p className="mt-5 max-w-2xl text-bg/90 md:text-lg">
              {exhibitions.current.description}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Magnetic strength={0.5} className="mt-9 inline-block">
              <Link
                href="/exhibitions"
                data-cursor="grow"
                className="inline-block border border-bg/50 px-7 py-3 text-sm uppercase tracking-[0.22em] transition-colors hover:bg-bg hover:text-ink"
              >
                View Exhibition
              </Link>
            </Magnetic>
          </Reveal>
        </div>
        <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-bg/70">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-xs uppercase tracking-[0.3em]"
          >
            Scroll
          </motion.div>
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className="mx-auto w-[min(1100px,92vw)]">
        <Reveal>
          <p className="section-label">Featured Works</p>
        </Reveal>
        <Stagger className="mt-6 grid gap-5 md:grid-cols-3">
          {featuredArtworks.map((art) => (
            <StaggerItem key={art.id}>
              <article className="group overflow-hidden border border-ink/10 bg-white">
                <MaskReveal className="relative h-80 overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition duration-[900ms] group-hover:scale-105"
                  />
                </MaskReveal>
                <div className="space-y-1 p-5 text-sm">
                  <p className="font-medium">{art.title}</p>
                  <p className="text-ink/70">{art.artist}</p>
                  <p className="text-terracotta">{art.price}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ARTISTS */}
      <section className="mx-auto w-[min(1100px,92vw)]">
        <Reveal>
          <p className="section-label">Our Artists</p>
        </Reveal>
        <Stagger className="mt-6 grid gap-8 md:grid-cols-3">
          {artists.map((artist, idx) => (
            <StaggerItem key={artist.slug}>
              <Link href={`/artists/${artist.slug}`} className="group block">
                <div className={`relative h-[440px] overflow-hidden ${idx % 2 === 1 ? 'md:mt-12' : ''}`}>
                  <Image
                    src={artist.portrait}
                    alt={artist.name}
                    fill
                    className="object-cover grayscale transition duration-[900ms] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                </div>
                <p className="mt-4 text-2xl font-serif italic transition-colors group-hover:text-terracotta">
                  {artist.name}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* VISIT CTA */}
      <section className="mx-auto w-[min(1100px,92vw)]">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-mist px-8 py-20 text-center md:px-20">
            <Parallax speed={0.08} className="pointer-events-none absolute -right-10 -top-10 select-none font-serif text-[10rem] italic text-ink/5">
              ark.
            </Parallax>
            <p className="section-label">Visit the Gallery</p>
            <h2 className="editorial-title mx-auto mt-5 max-w-3xl text-4xl md:text-5xl">
              {gallery.about}
            </h2>
            <Magnetic strength={0.5} className="mt-10 inline-block">
              <Link
                href="/visit"
                data-cursor="grow"
                className="inline-block border border-ink/20 px-7 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-ink hover:text-bg"
              >
                Plan your visit
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
