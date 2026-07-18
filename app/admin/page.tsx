import Link from 'next/link';
import { artists, exhibitions } from '@/lib/data';

export default function AdminPage() {
  const { current, past } = exhibitions;
  return (
    <div className="mx-auto w-[min(1000px,92vw)] py-8">
      <p className="section-label">Admin CMS (Demo)</p>
      <h1 className="editorial-title mt-3 text-5xl">Content Management</h1>
      <p className="mt-3 max-w-2xl text-sm text-ink/70">
        A shell for the future Sanity-backed CMS. Today it reflects the content currently compiled into
        the site. In production these cards become live editors wired to Sanity datasets.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3 text-sm">
        <div className="border border-ink/10 bg-white p-5">
          <p className="font-medium">Artists</p>
          <p className="mt-2 text-ink/70">{artists.length} represented artists</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {artists.map((a) => (
              <span key={a.slug} className="border border-ink/10 px-2 py-1 text-xs">
                {a.name}
              </span>
            ))}
          </div>
        </div>
        <div className="border border-ink/10 bg-white p-5">
          <p className="font-medium">Exhibitions</p>
          <p className="mt-2 text-ink/70">
            1 current · {past.length} archived
          </p>
          <p className="mt-3 text-terracotta">{current.title} (now showing)</p>
        </div>
        <div className="border border-ink/10 bg-white p-5">
          <p className="font-medium">Inquiries</p>
          <p className="mt-2 text-ink/70">
            Received via <Link href="/contact" className="hover:text-terracotta">/contact</Link> and
            written to <code className="text-xs">.data/inquiries.json</code> in this demo build.
          </p>
        </div>
      </div>
    </div>
  );
}
