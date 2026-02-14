export type Artwork = {
  id: string;
  title: string;
  artist: string;
  medium: string;
  size: string;
  price: string;
  image: string;
};

export const featuredArtworks: Artwork[] = [
  {
    id: 'aw1',
    title: 'Dry Season Hymn',
    artist: 'Lerato Molefe',
    medium: 'Oil on canvas',
    size: '120 x 90 cm',
    price: 'R 48,000',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'aw2',
    title: 'Rosendal Fog',
    artist: 'Daniel Khumalo',
    medium: 'Photographic print',
    size: '80 x 80 cm',
    price: 'POA',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'aw3',
    title: 'Earthen Archive',
    artist: 'Thandi Maseko',
    medium: 'Mixed media',
    size: '100 x 140 cm',
    price: 'R 62,000',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1400&q=80'
  }
];

export const artists = [
  {
    slug: 'lerato-molefe',
    name: 'Lerato Molefe',
    tagline: 'Memory mapped in terracotta and ash.',
    bio: 'Molefe explores rural belonging through gestural painting and found pigments sourced from Free State soil.',
    statement:
      'My works are witnesses of silence. They hold the dust, language and patience of inland South Africa.',
    portrait:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'daniel-khumalo',
    name: 'Daniel Khumalo',
    tagline: 'The architecture of stillness.',
    bio: 'Khumalo photographs hidden textures of small-town life and transforms them into large-format meditations.',
    statement:
      'I photograph absence as a material, where quiet streets become sites of emotional scale.',
    portrait:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'thandi-maseko',
    name: 'Thandi Maseko',
    tagline: 'Fragments of ceremony and repair.',
    bio: 'Maseko works with thread, charcoal and paper, reconstructing family histories through tactile abstraction.',
    statement:
      'I build visual rituals from remnants, making room for the unspoken to become form.',
    portrait:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80'
  }
];

export const exhibitions = {
  current: {
    title: 'Curating the Unspoken',
    dates: '12 Jul — 28 Sep 2026',
    artist: 'Group Exhibition',
    description:
      'An immersive exhibition foregrounding interior narratives, material memory and ecological time across South African contemporary practice.',
    hero:
      'https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?auto=format&fit=crop&w=1800&q=80'
  },
  upcoming: [
    {
      title: 'After Rain',
      dates: 'Oct 2026',
      description: 'New photographic works by Daniel Khumalo.',
      image:
        'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  past: [
    {
      title: 'Field Notes',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Threshold',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=1200&q=80'
    }
  ]
};
