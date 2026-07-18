'use client';

import { useState } from 'react';
import { gallery } from '@/lib/data';

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
      <p className="section-label">Contact</p>
      <h1 className="editorial-title mt-3 text-5xl">Inquiries & Collecting</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
        For acquisitions, commissions, studio visits or press, reach the gallery directly or send a
        note below. {gallery.manager} will be in touch.
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_2fr]">
        <aside className="space-y-4 text-sm">
          <div>
            <p className="section-label">Email</p>
            <a href={`mailto:${gallery.email}`} className="hover:text-terracotta transition-colors">
              {gallery.email}
            </a>
          </div>
          <div>
            <p className="section-label">Phone</p>
            <a
              href={`tel:${gallery.phone.replace(/\s/g, '')}`}
              className="hover:text-terracotta transition-colors"
            >
              {gallery.phone}
            </a>
          </div>
          <div>
            <p className="section-label">Gallery</p>
            <p className="text-ink/70">{gallery.address}</p>
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="grid gap-4 text-sm">
          <input
            className="border border-ink/20 bg-white px-4 py-3"
            placeholder="Name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            required
          />
          <input
            type="email"
            className="border border-ink/20 bg-white px-4 py-3"
            placeholder="Email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            required
          />
          <input
            className="border border-ink/20 bg-white px-4 py-3"
            placeholder="Subject (optional)"
            value={form.subject}
            onChange={(e) => update('subject', e.target.value)}
          />
          <textarea
            className="min-h-40 border border-ink/20 bg-white px-4 py-3"
            placeholder="Message"
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-fit border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-bg disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send inquiry'}
          </button>
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
