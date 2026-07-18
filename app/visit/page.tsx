import Image from 'next/image';
import { gallery } from '@/lib/data';

const galleryImages = [
  'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-21.jpg',
  'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-24.jpg'
];

export default function VisitPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-10 py-8">
      <div>
        <p className="section-label">Visit</p>
        <h1 className="editorial-title mt-3 text-5xl">Plan your Rosendal journey.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">{gallery.about}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {galleryImages.map((src) => (
          <div key={src} className="relative h-80 overflow-hidden rounded-sm">
            <Image src={src} alt="ark. contemporary gallery space" fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="grid gap-8 text-sm md:grid-cols-3">
        <div>
          <p className="section-label">Address</p>
          <p className="mt-2">{gallery.address}</p>
          <p className="text-ink/70">{gallery.region}</p>
        </div>
        <div>
          <p className="section-label">Opening Hours</p>
          <p className="mt-2">{gallery.hours}</p>
        </div>
        <div>
          <p className="section-label">Gallery Manager</p>
          <p className="mt-2">{gallery.manager}</p>
          <p className="mt-2">
            <a href={`mailto:${gallery.email}`} className="hover:text-terracotta transition-colors">
              {gallery.email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${gallery.phone.replace(/\s/g, '')}`}
              className="hover:text-terracotta transition-colors"
            >
              {gallery.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
