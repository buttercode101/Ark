import Image from 'next/image';
import { gallery } from '@/lib/data';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { MaskReveal } from '@/components/motion/text';
import { LineText } from '@/components/motion/text';
import { Parallax } from '@/components/motion/parallax';

const galleryImages = [
  'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-21.jpg',
  'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-24.jpg'
];

export default function VisitPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-12 py-8">
      <div>
        <Reveal>
          <p className="section-label">Visit</p>
          <h1 className="editorial-title mt-3 text-5xl md:text-7xl">
            <LineText>Plan your Rosendal journey.</LineText>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/70">{gallery.about}</p>
        </Reveal>
      </div>

      <Stagger className="grid gap-5 md:grid-cols-2">
        {galleryImages.map((src) => (
          <StaggerItem key={src}>
            <MaskReveal className="relative h-80 overflow-hidden rounded-sm">
              <Image src={src} alt="ark. contemporary gallery space" fill className="object-cover" />
            </MaskReveal>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal>
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
              <a href={`mailto:${gallery.email}`} className="transition-colors hover:text-terracotta">
                {gallery.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${gallery.phone.replace(/\s/g, '')}`}
                className="transition-colors hover:text-terracotta"
              >
                {gallery.phone}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
