// Central motion language for ark. contemporary.
// Editorial, restrained, gallery-grade: slow reveals, soft easings,
// scroll choreography. No bounce, no theatre.

export const EASE = {
  // warm, architectural ease — used for most reveals
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  // a touch of overshoot for tactile micro-interactions only
  soft: [0.34, 1.56, 0.64, 1] as const
};

export const DURATION = {
  fast: 0.5,
  base: 0.8,
  slow: 1.1,
  hero: 1.8
};

// Image / block mask reveal: clip-path wipes up from the baseline.
export const maskReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: (delay = 0) => ({
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: DURATION.slow, ease: EASE.out, delay }
  })
};

// Text line: rises from below a mask. Pair with overflow-hidden parent.
export const lineReveal = {
  hidden: { y: '110%' },
  visible: (delay = 0) => ({
    y: '0%',
    transition: { duration: DURATION.base, ease: EASE.out, delay }
  })
};

// Generic fade + rise for sections.
export const fadeRise = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE.out }
  }
};

// Stagger container.
export const stagger = (stagger = 0.09, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay }
  }
});

// Navbar link underline.
export const linkUnderline = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.4, ease: EASE.out } }
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
