import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artists, gallery } from '@/lib/data';

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
          <p className="section-label">Artist Profile</p>
          <h1 className="editorial-title mt-3 text-5xl md:text-6xl">{artist.name}</h1>
          <p className="mt-3 text-ink/70">{artist.tagline}</p>
          <div className="mt-8 grid gap-6 text-sm leading-relaxed">
            <p>{artist.bio}</p>
            <blockquote className="border-l-2 border-terracotta pl-4 italic text-ink/80">
              {artist.statement}
            </blockquote>
          </div>
          <a
            href={`mailto:${gallery.email}?subject=${encodeURIComponent(
              `Inquiry — ${artist.name}`
            )}`}
            className="mt-6 inline-block border border-ink/20 px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-bg"
          >
            Inquire about works
          </a>
        </div>
        <div className="relative h-[520px] overflow-hidden rounded-sm">
          <Image src={artist.portrait} alt={artist.name} fill className="object-cover grayscale" />
        </div>
      </header>

      <nav className="border-t border-ink/10 pt-6 text-sm">
        <Link href="/artists" className="hover:text-terracotta">
          Back to all artists
        </Link>
      </nav>
    </div>
  );
}
