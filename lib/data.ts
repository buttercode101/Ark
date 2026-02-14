export type Artwork = {
  id: string;
  title: string;
  artist: string;
  medium: string;
  size: string;
  image: string;
};

export type Artist = {
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  statement: string;
  portrait: string;
  website?: string;
  instagram?: string;
  works: Artwork[];
};

export type Exhibition = {
  slug: string;
  title: string;
  dates: string;
  description: string;
  image: string;
  catalog?: string;
};

export const artists: Artist[] = [
  {
    slug: 'elsa-maritz',
    name: 'Elsa Maritz',
    tagline: 'Landscape, spirit, vulnerability.',
    bio: 'Elsa Maritz is an interdisciplinary artist who explores themes of landscape, spirit, and vulnerability. Born in Middelburg, South Africa and raised in a mining town, she began photographing at sixteen, completed a BA in Visual Arts at Stellenbosch University, and later earned an MA in Fine Art at the University of Cape Town in 2010 with distinction.',
    statement:
      'Her work reflects presence, belonging, and the quiet spiritual resonance of the natural world. Working primarily in photography, she creates poetic black-and-white images suggesting mythic encounters between humans and landscape, navigating documentary and dreamlike states.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2024/11/Elsa-Bio-1-683x1024.jpg',
    website: 'https://www.elsamaritz.com',
    works: [
      { id: 'em1', title: 'Untitled, Swell Series', artist: 'Elsa Maritz', medium: 'Photography', size: 'Details as per original listing', image: 'https://arkcontemporary.co.za/wp-content/uploads/2024/11/Limb_limbic.jpg' },
      { id: 'em2', title: 'Kept in Drift', artist: 'Elsa Maritz', medium: 'Photography', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2024/11/roots-scaled.jpg' },
      { id: 'em3', title: 'The Moth, Nov 2021 – Jun 2023', artist: 'Elsa Maritz', medium: 'Photography', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2024/11/vivememoir.jpg' },
      { id: 'em4', title: 'Drift, Jun 2023', artist: 'Elsa Maritz', medium: 'Photography', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2024/11/clay-scaled.jpg' },
      { id: 'em5', title: 'The Womb, Nov 2022 – Jun 2023', artist: 'Elsa Maritz', medium: 'Photography', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2024/11/womb.jpg' },
      { id: 'em6', title: 'Exile, 2023', artist: 'Elsa Maritz', medium: 'Performance and Photography', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2024/11/circle.jpg' }
    ]
  },
  {
    slug: 'grietjie-lee',
    name: 'Grietjie Lee',
    tagline: 'AI, ritual, ecology, spirit.',
    bio: 'Grietjie Lee is an experimental and explorative artist based in Rosendal, South Africa. Through her work she investigates human-machine entanglements, states of consciousness, and tensions between ecology, technology, science, and spirituality. Born in Mokopane in 1956, she completed a National Diploma in Fine Arts at TUT Pretoria in 1987 and has exhibited widely in group and solo contexts.',
    statement:
      'Lee examines whether AI can replace true observations of the human soul. She counters technological acceleration with symbolism, nature and folklore, mapping geographic space, time, and emotion through code and colour.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Grietjie-Lee-1024x768.jpg',
    instagram: 'https://www.instagram.com/grietjie_lee/',
    works: [
      { id: 'gl1', title: 'Liquorice, 2023', artist: 'Grietjie Lee', medium: 'Watercolour', size: '70 mm x 415 mm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Liquescent-3-scaled.jpg' },
      { id: 'gl2', title: 'The Window of Tolerance', artist: 'Grietjie Lee', medium: 'Oil', size: '310 mm x 1180 mm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/09/page_2.png' },
      { id: 'gl3', title: 'Bright Box, 2022', artist: 'Grietjie Lee', medium: 'Watercolour', size: '200 mm x 300 mm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/BrightBoy-2.png' },
      { id: 'gl4', title: 'Abstract Landscape 2, 2020', artist: 'Grietjie Lee', medium: 'Watercolour and ink', size: '210 mm x 297 mm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Abstract-landscape2-2.jpg' },
      { id: 'gl5', title: 'Tender, 2022', artist: 'Grietjie Lee', medium: 'Mixed media / oil encaustic wax on board', size: '280 mm x 220 mm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Tender-1.png' },
      { id: 'gl6', title: 'Nocturnal, 2023', artist: 'Grietjie Lee', medium: 'Mixed media / oil pastel and beeswax', size: '160 mm x 120 mm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Nocturnal2.jpg' }
    ]
  },
  {
    slug: 'louis-olivier',
    name: 'Louis Olivier',
    tagline: 'The figure between flesh and spirit.',
    bio: 'Louis Olivier is a Johannesburg-based sculptor born in 1976 in Vereeniging and raised in Bethal, Mpumalanga. A University of Pretoria IT graduate (1998), he transitioned to full-time artistic practice in 2001. His work explores existence, mortality and afterlife through sculpture, drawing and installations centered on the human form.',
    statement:
      'Olivier deconstructs and reconstructs the body to interrogate interior space rather than hyper-real exterior likeness. His figures and drawings suggest emotional states such as strength, vulnerability, honesty and humility.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier.jpg',
    works: [
      { id: 'lo1', title: 'Clockwise Require', artist: 'Louis Olivier', medium: 'Bronze', size: '57 x 15 x 15 cm · Edition 8', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier_2015_01b.jpg' },
      { id: 'lo2', title: 'Best Fit for That Meaning', artist: 'Louis Olivier', medium: 'Cardboard, paper and wood', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier_2015_05.jpg' },
      { id: 'lo3', title: 'Signs versus Words', artist: 'Louis Olivier', medium: 'Collage, ink and charcoal on paper', size: '400 x 620 mm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier_2015_13.jpg' },
      { id: 'lo4', title: 'A Story with a Strange Beginning', artist: 'Louis Olivier', medium: 'Bronze', size: '370 x 80 x 80 mm · Edition 8', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier_2017_22.jpg' },
      { id: 'lo5', title: 'Tipping Point', artist: 'Louis Olivier', medium: 'Collage, paper, ink and charcoal', size: '76.5 x 112.5 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier_2017_01.jpg' },
      { id: 'lo6', title: 'Hornbill', artist: 'Louis Olivier', medium: 'Collage, ink and charcoal on paper', size: '1120 x 1515 mm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier_2017_14.jpg' }
    ]
  },
  {
    slug: 'michele-nigrini',
    name: 'Michèle Nigrini',
    tagline: 'Expressive abstraction and intuitive layering.',
    bio: 'Michèle Nigrini is an award-winning South African artist based in Stellenbosch. She works primarily in mixed media and painting, exploring abstraction through layered mark-making, gesture and texture. She studied BA Fine Art and MA Fine Art at the University of Pretoria and has exhibited extensively in South Africa and internationally.',
    statement:
      'Her practice reflects emotional landscapes and internal dialogues through dynamic compositions and layered surfaces. Recognitions include finalist/merit placements in Thami Mnyele Fine Art Awards, Sasol New Signatures, and ABSA L’Atelier.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Michele-1-1024x809.jpg',
    website: 'https://www.michelenigrini.co.za',
    instagram: 'https://www.instagram.com/michelenigrini/',
    works: [
      { id: 'mn1', title: 'Blue Garden Series', artist: 'Michèle Nigrini', medium: 'Mixed media on canvas', size: '120 cm x 100 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Bed-time-stories-100-x-100cm-x-5cm-mixed-media-on-wooden-canvas-scaled.jpg' },
      { id: 'mn2', title: 'Poppies, 2016', artist: 'Michèle Nigrini', medium: 'Mixed media (oil, ink and paper)', size: '120 cm x 100 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Peppery-Nose-mixed-media-on-hahnemuhle-paper-Framed-60-x-60cm-scaled.jpg' },
      { id: 'mn3', title: 'Flight Path / Study', artist: 'Michèle Nigrini', medium: 'Mixed media on paper', size: '50 cm x 70 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Fight-for-your-Fairytale-60-x-60-x-4cm-mixed-media-on-wooden-canvas-scaled.jpg' },
      { id: 'mn4', title: 'Studio Process', artist: 'Michèle Nigrini', medium: 'Mixed media on paper', size: '48 cm x 68 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Chain-Reaction-80-x-80-x-4cm-mixed-media-on-wooden-canvas-scaled.jpg' },
      { id: 'mn5', title: 'Selected Series II', artist: 'Michèle Nigrini', medium: 'Mixed media on canvas', size: '120 cm x 75 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Scherzi-Series-III-120-x-120-x-5cm-mixed-media-on-wooden-canvas-scaled.jpg' },
      { id: 'mn6', title: 'Should We Know You – Study', artist: 'Michèle Nigrini', medium: 'Mixed media on canvas', size: '120 cm x 75 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/A-Handful-of-kisses-from-the-sky-mixed-media-on-wooden-canvas-scaled.jpg' }
    ]
  },
  {
    slug: 'stella-olivier',
    name: 'Stella Olivier',
    tagline: 'Visible and invisible stories.',
    bio: 'As a photographer, Stella Olivier is interested in capturing evidence of stories in real time as they become history.',
    statement:
      'Her drawings combine her own images with vintage black-and-white photographs to create evidence of stories that never existed, and together form a narrative of her subliminal journey.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Stella-Olivier-981x1024.jpg',
    works: [
      { id: 'so1', title: 'Debate, 2017', artist: 'Stella Olivier', medium: 'Charcoal and ink', size: '38 cm x 21.5 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/IMG_1336.jpg' },
      { id: 'so2', title: 'Guidance, 2022', artist: 'Stella Olivier', medium: 'Charcoal and ink', size: '38 cm x 27.5 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/IMG_7466.jpg' },
      { id: 'so3', title: 'Split, 2022', artist: 'Stella Olivier', medium: 'Charcoal and ink', size: '55 cm x 75 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/IMG_2731.jpg' },
      { id: 'so4', title: 'Reach, 2022', artist: 'Stella Olivier', medium: 'Charcoal and ink', size: '75 cm x 55 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/IMG_1466.jpg' },
      { id: 'so5', title: 'Free, 2021', artist: 'Stella Olivier', medium: 'Charcoal and ink', size: '38 cm x 27.5 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/IMG_0547.jpg' },
      { id: 'so6', title: 'Entrado, 2021', artist: 'Stella Olivier', medium: 'Charcoal and ink', size: '45.5 cm x 37 cm', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/IMG_8596.jpg' }
    ]
  },
  {
    slug: 'wessel-van-huyssteen',
    name: 'Wessel van Huyssteen',
    tagline: 'Layered abstraction and expressive surfaces.',
    bio: 'Wessel van Huyssteen is a South African artist whose practice centers around layered abstraction and expressive surface work. His paintings are characterized by dynamic color fields, textured surfaces, and gestural mark-making suggesting landscape, memory, and psychological space.',
    statement:
      'Working primarily in mixed media on canvas, van Huyssteen builds complex compositions through layering, scraping and reworking surfaces to balance chaos and control, density and openness.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/WesselvH-787x1024.jpeg',
    website: 'https://www.wesselvanhuyssteen.com',
    works: [
      { id: 'wv1', title: 'Untitled', artist: 'Wessel van Huyssteen', medium: 'Mixed media on canvas', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Kankerbos.-2023.-300X400.-Watercolour-on-paper-scaled.jpg' },
      { id: 'wv2', title: 'Fields, 2020', artist: 'Wessel van Huyssteen', medium: 'Oil on canvas', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Shortcut.-2023.-Embroidered-Rayon-and-viscos.-985X1445.--scaled.jpg' },
      { id: 'wv3', title: 'Untitled (Figure Study)', artist: 'Wessel van Huyssteen', medium: 'Mixed media on canvas', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/The-hand-that-guides-the-needle-2023-1200x1730-Hand-and-machine-stitched-Rayon-Cotton-and-Viscos-scaled.jpg' },
      { id: 'wv4', title: 'Untitled (Red Field)', artist: 'Wessel van Huyssteen', medium: 'Mixed media on canvas', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Red-Hot-pokers-I.-2023.-Watercolour-on-paper.-240X320-scaled.jpg' },
      { id: 'wv5', title: 'Concrete Memory, 2021', artist: 'Wessel van Huyssteen', medium: 'Oil and mixed media on canvas', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Scape-sans-sky.2023.-Rayon-Viscos-Nylon-Cotton.-1725x1105-1-scaled.jpg' },
      { id: 'wv6', title: 'Over and Under, 2023', artist: 'Wessel van Huyssteen', medium: 'Mixed media on canvas', size: 'As listed', image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Crinum-bulbispermum-II.-2022-280x380.-Watercolour-on-cotton-paper-scaled.jpg' }
    ]
  }
];

export const featuredArtworks = artists.flatMap((a) => a.works).slice(0, 9);

export const exhibitions: {
  current: Exhibition;
  past: Exhibition[];
  callouts: { title: string; dates: string; description: string }[];
  quote: string;
  spaceImages: string[];
} = {
  current: {
    slug: 'summer-2026-exhibition',
    title: 'Summer 2026 Exhibition',
    dates: '6 January 2026 – 31 January 2026',
    description:
      'The Summer Exhibition 2026 is a contemporary showcase bringing together a diverse selection of works by Rosendal-based artists. Featuring painting, photography, sculpture, and mixed media, the exhibition presents a dynamic range of practices, thoughtfully curated to explore and reflect personal and collective narratives.',
    image: 'https://arkcontemporary.co.za/wp-content/uploads/2026/01/Ark-Summer-2026-5.jpg',
    catalog: 'https://arkcontemporary.co.za/wp-content/uploads/2026/01/ARK_Summer-2026_Exhibition-Catalogue-2-compressed.pdf'
  },
  past: [
    {
      slug: 'spring-2025-exhibition',
      title: 'Spring 2025 Exhibition',
      dates: 'Spring Exhibition',
      description:
        'A vibrant Spring exhibition at ark.contemporary, offering sculpture, photography, tapestry, painting, and mixed media. Featuring new works by Louis Olivier, Stella Olivier, Grietjie Lee, and Wessel van Huyssteen.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/09/Photo-13-of-14.jpg',
      catalog: 'https://arkcontemporary.co.za/wp-content/uploads/2025/09/ARK_SpringExhibition_20250922-1.pdf'
    },
    {
      slug: 'fertile-ground',
      title: 'Fertile Ground',
      dates: '30 July – 28 August',
      description:
        'Celebrating ten years of ark.contemporary, Fertile Ground brings together artists and explores themes of landscape, memory, identity, and belonging. Curated by Wessel van Huyssteen in collaboration with Grietjie Lee.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/08/Fertile-Ground-2.jpg',
      catalog: 'https://arkcontemporary.co.za/wp-content/uploads/2025/08/Gallery-2-Catalogue-G2-ARK-2025-Statements_compressed.pdf'
    },
    {
      slug: 'autumn-exhibition-2025',
      title: 'Autumn Exhibition',
      dates: 'April – June 2025',
      description:
        'A captivating Autumn exhibition showcasing fresh new works from gallery artists, complemented by exciting pieces from invited artists and emerging talent. This seasonal exhibition invites viewers to step into a space where colour, texture, emotion, and narrative intersect.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/06/Ark_Heino-31-scaled.jpg',
      catalog: 'https://arkcontemporary.co.za/wp-content/uploads/2025/07/Ark-Autumn-2025-Catalogue.pdf'
    }
  ],
  callouts: [
    {
      title: 'Summer Exhibition',
      dates: '3 January – 1 February 2025',
      description:
        'In a striking exhibition marking the new year, ark.contemporary once again brings together a dynamic selection of works by gallery artists Louis Olivier, Stella Olivier, Grietjie Lee, Wessel van Huyssteen, Elsa Maritz, and invited artists.'
    },
    {
      title: 'Gallery Raffle',
      dates: 'December 2024',
      description:
        'Held on 21 December 2024, the year-end contemporary Gallery Raffle was a highlight of the season with art conversations, live music, refreshments, and raffle-ticket sales supporting the local art scene.'
    },
    {
      title: 'Equilibrium',
      dates: 'April 2024 – May 2024',
      description:
        'Curated by photographer and eco-activist Kevin Duke, Equilibrium explored the intersection of nature and humanity through a multi-disciplinary group exhibition with established and emerging voices.'
    }
  ],
  quote:
    '“Equilibrium is not static; it is in its fluid nature, a dynamic interplay between states of illusion and reality.”',
  spaceImages: [
    'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-21.jpg',
    'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-24.jpg',
    'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-37.jpg'
  ]
};

export const aboutContent = {
  headline: 'ark. = art + rosendal + kuns.',
  body: 'Established in 2021 ark.contemporary showcases the collective endeavours of a group of accomplished Rosendal-based artists. Hailing from diverse artistic backgrounds, these individuals converge at ark.contemporary to foster collaboration and showcase their unique visual perspectives. The gallery provides a dedicated exhibition space separate from their personal studios, offering visitors an opportunity to engage with their work and immerse themselves in creative expression.',
  permanentArtists: ['Grietjie Lee', 'Elsa Maritz', 'Louis Olivier', 'Stella Olivier', 'Wessel van Huyssteen']
};

export const contactInfo = {
  addressLines: ['342 Kriek Street', '(Corner van der Merwe Street)', 'Rosendal'],
  manager: 'Heather Grundy',
  phone: '079 587 6282',
  email: 'arkcontemporary@gmail.com',
  instagram: 'https://www.instagram.com/arkrosendal/',
  hours: ['Thursday: 10 – 4', 'Friday: 10 – 5', 'Saturday: 9 – 5', 'Sunday: 9 – 2', 'Monday: By appointment only'],
  image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/IMG_0333BW-1024x981.jpg',
  homeHero: 'https://arkcontemporary.co.za/wp-content/uploads/2025/09/Ark_Home-page-scaled.jpg'
};

export const newsletterContent = {
  title: 'Subscribe to our newsletter',
  fields: ['First Name', 'Email Address'],
  cta: 'Sign Up'
};
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
