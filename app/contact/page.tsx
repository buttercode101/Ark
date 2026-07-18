'use client';

import { useState } from 'react';
import { gallery } from '@/lib/data';
import { Reveal } from '@/components/motion/reveal';
import { LineText } from '@/components/motion/text';
import { Magnetic } from '@/components/motion/magnetic';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok && data.status === 'ok') {
        setStatus('ok');
        setMessage(data.message);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <div className="mx-auto w-[min(900px,92vw)] py-8">
      <Reveal>
        <p className="section-label">Contact</p>
        <h1 className="editorial-title mt-3 text-5xl md:text-6xl">
          <LineText>Inquiries & Collecting</LineText>
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/70">
          For acquisitions, commissions, studio visits or press, reach the gallery directly or send a
          note below. {gallery.manager} will be in touch.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <aside className="space-y-6 text-sm">
            <div>
              <p className="section-label">Email</p>
              <a href={`mailto:${gallery.email}`} className="transition-colors hover:text-terracotta">
                {gallery.email}
              </a>
            </div>
            <div>
              <p className="section-label">Phone</p>
              <a
                href={`tel:${gallery.phone.replace(/\s/g, '')}`}
                className="transition-colors hover:text-terracotta"
              >
                {gallery.phone}
              </a>
            </div>
            <div>
              <p className="section-label">Gallery</p>
              <p className="text-ink/70">{gallery.address}</p>
            </div>
          </aside>
        </Reveal>

        <form onSubmit={handleSubmit} className="grid gap-4 text-sm">
          <input
            className="border border-ink/20 bg-white px-4 py-3 transition-colors focus:border-terracotta"
            placeholder="Name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            required
          />
          <input
            type="email"
            className="border border-ink/20 bg-white px-4 py-3 transition-colors focus:border-terracotta"
            placeholder="Email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            required
          />
          <input
            className="border border-ink/20 bg-white px-4 py-3 transition-colors focus:border-terracotta"
            placeholder="Subject (optional)"
            value={form.subject}
            onChange={(e) => update('subject', e.target.value)}
          />
          <textarea
            className="min-h-40 border border-ink/20 bg-white px-4 py-3 transition-colors focus:border-terracotta"
            placeholder="Message"
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            required
          />
          <Magnetic strength={0.5} className="w-fit">
            <button
              type="submit"
              disabled={status === 'sending'}
              data-cursor="grow"
              className="w-fit border border-ink/20 px-7 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-bg disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send inquiry'}
            </button>
          </Magnetic>
          {message && (
            <p
              className={`text-sm ${status === 'ok' ? 'text-terracotta' : 'text-red-600'}`}
              role="status"
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
