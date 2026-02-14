import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artists } from '@/lib/data';
import { artists, featuredArtworks } from '@/lib/data';

export default function ArtistProfile({ params }: { params: { slug: string } }) {
  const artist = artists.find((entry) => entry.slug === params.slug);
  if (!artist) return notFound();

  const works = featuredArtworks.filter((work) => work.artist === artist.name);

  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-12 py-8">
      <header className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="section-label">Artist Profile</p>
          <h1 className="editorial-title mt-3 text-5xl md:text-6xl">{artist.name}</h1>
          <p className="mt-3 text-ink/70">{artist.tagline}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 text-sm leading-relaxed">
            <p>{artist.bio}</p>
            <p>{artist.statement}</p>
          </div>
          <div className="mt-4 flex gap-4 text-sm">
            {artist.website ? <a href={artist.website} className="text-terracotta underline">Website</a> : null}
            {artist.instagram ? <a href={artist.instagram} className="text-terracotta underline">Instagram</a> : null}
          </div>
        </div>
        <div className="relative h-[520px] overflow-hidden rounded-sm">
          <Image src={artist.portrait} alt={artist.name} fill className="object-cover grayscale" />
        </div>
      </header>

      <section>
        <p className="section-label">Selected Works</p>
        <div className="mt-6 space-y-6">
          {artist.works.map((work, idx) => (
          {works.map((work, idx) => (
            <article key={work.id} className="grid gap-5 border border-ink/10 p-4 md:grid-cols-2">
              <div className={`relative h-[320px] overflow-hidden ${idx % 2 ? 'md:order-2' : ''}`}>
                <Image src={work.image} alt={work.title} fill className="object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center gap-2 text-sm">
                <p className="text-2xl font-serif italic">{work.title}</p>
                <p>{work.medium}</p>
                <p>{work.size}</p>
                <p>{work.medium} · {work.size}</p>
                <p className="text-terracotta">{work.price}</p>
                <button className="mt-3 w-fit border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.2em]">Inquire</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <nav className="border-t border-ink/10 pt-6 text-sm">
        <Link href="/artists" className="hover:text-terracotta">Back to all artists</Link>
      </nav>
    </div>
  );
}
