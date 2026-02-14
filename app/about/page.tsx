import Image from 'next/image';
import Link from 'next/link';
import { exhibitions, artists, aboutContent } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-10 py-8">
      <div>
        <p className="section-label">About</p>
        <h1 className="editorial-title mt-3 text-5xl">{aboutContent.headline}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed">{aboutContent.body}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {exhibitions.spaceImages.map((src) => (
          <div key={src} className="relative h-72 overflow-hidden rounded-sm"><Image src={src} alt="Rosendal gallery space" fill className="object-cover" /></div>
        ))}
      </div>
      <div>
        <p className="section-label">Permanent artists</p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          {aboutContent.permanentArtists.map((name) => {
            const artist = artists.find((entry) => entry.name === name);
            if (!artist) return null;
            return (
              <Link key={artist.slug} href={`/artists/${artist.slug}`} className="border border-ink/20 px-3 py-2 hover:text-terracotta">{artist.name}</Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
