import Image from 'next/image';
import { contactInfo, exhibitions } from '@/lib/data';

const galleryImages = [
  'https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1300&q=80'
];

export default function VisitPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-10 py-8">
      <div>
        <p className="section-label">Visit</p>
        <h1 className="editorial-title mt-3 text-5xl">Plan your Rosendal journey.</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {[contactInfo.image, ...exhibitions.spaceImages.slice(0, 2)].map((src) => (
      <div className="grid gap-5 md:grid-cols-2">
        {galleryImages.map((src) => (
          <div key={src} className="relative h-80 overflow-hidden rounded-sm">
            <Image src={src} alt="Gallery space" fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="grid gap-8 text-sm md:grid-cols-3">
        <div><p className="section-label">Address</p><div className="mt-2">{contactInfo.addressLines.map((line) => <p key={line}>{line}</p>)}</div></div>
        <div><p className="section-label">Gallery Hours</p><ul className="mt-2 space-y-1">{contactInfo.hours.map((h) => <li key={h}>{h}</li>)}</ul></div>
        <div><p className="section-label">Contact</p><p className="mt-2">{contactInfo.manager}<br />{contactInfo.phone}<br />{contactInfo.email}</p></div>
        <div><p className="section-label">Address</p><p className="mt-2">18 Main Street, Rosendal, Free State</p></div>
        <div><p className="section-label">Opening Hours</p><p className="mt-2">Thu–Sun, 10:00–16:00</p></div>
        <div><p className="section-label">Destination</p><p className="mt-2">Set against mountain views, ARK invites slow looking and thoughtful conversation.</p></div>
      </div>
    </div>
  );
}
