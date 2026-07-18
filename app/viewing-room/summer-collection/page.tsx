import { exhibitions } from '@/lib/data';

export default function ViewingRoomPage() {
  const { current, past } = exhibitions;
  const rooms = [current, ...past];
  return (
    <div className="mx-auto w-[min(1000px,92vw)] space-y-10 py-8">
      <div>
        <p className="section-label">Private Viewing Room</p>
        <h1 className="editorial-title mt-3 text-5xl">Collector Previews</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
          The viewing room hosts password-protected previews of available works for collectors and
          curators. In production this route is gated with NextAuth role-based access. Below is a
          preview of the exhibitions available to browse.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {rooms.map((room) => (
          <article key={room.title} className="border border-ink/10 p-4">
            <div className="relative h-64 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={(room as { hero?: string; image?: string }).hero || (room as { image?: string }).image}
                alt={room.title}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-2xl font-serif italic">{room.title}</p>
            <p className="text-sm text-ink/70">{('year' in room ? room.year : room.dates) || ''}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
