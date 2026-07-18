'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Magnetic } from '@/components/motion/magnetic';
import { EASE, DURATION } from '@/lib/motion';

const links = [
  ['Home', '/'],
  ['Exhibitions', '/exhibitions'],
  ['Artists', '/artists'],
  ['Visit', '/visit'],
  ['Contact', '/contact']
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-4' : 'py-6'
        }`}
      >
        <div className="mx-auto flex w-[min(1100px,92vw)] items-center justify-between">
          <Magnetic strength={0.25}>
            <Link
              href="/"
              className="text-sm uppercase tracking-[0.35em] transition-colors hover:text-terracotta"
            >
              ark. contemporary
            </Link>
          </Magnetic>
          <nav className="hidden gap-9 md:flex">
            {links.map(([label, href]) => (
              <Magnetic key={href} strength={0.4}>
                <Link
                  href={href}
                  className="group relative text-sm transition-colors hover:text-terracotta"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-terracotta transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </Magnetic>
            ))}
          </nav>
          <button
            className="text-xs uppercase tracking-[0.2em] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ink/97 text-bg md:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-7 px-10">
              {links.map(([label, href], i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: DURATION.base, ease: EASE.out }}
                >
                  <Link
                    href={href}
                    className="text-4xl font-serif italic"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
