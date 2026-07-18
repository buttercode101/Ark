import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), '.data');
const INQUIRIES_FILE = join(DATA_DIR, 'inquiries.json');

type Inquiry = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
};

export async function POST(req: NextRequest) {
  let body: Partial<Inquiry>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ status: 'error', message: 'Invalid JSON body.' }, { status: 400 });
  }

  const name = (body.name || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const message = (body.message || '').toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { status: 'error', message: 'Name, email and message are required.' },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { status: 'error', message: 'A valid email address is required.' },
      { status: 400 }
    );
  }

  const inquiry: Inquiry = {
    name,
    email,
    subject: (body.subject || '').toString().trim(),
    message,
    createdAt: new Date().toISOString()
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    let existing: Inquiry[] = [];
    try {
      existing = JSON.parse(await readFile(INQUIRIES_FILE, 'utf8'));
    } catch {
      existing = [];
    }
    existing.push(inquiry);
    await writeFile(INQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf8');
  } catch {
    // Persisting to disk is best-effort; the inquiry was still received.
  }

  return NextResponse.json({ status: 'ok', message: 'Thank you — your inquiry has been received.' });
}
