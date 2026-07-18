// Real content migrated from arkcontemporary.co.za (WordPress REST API).
// Artists, exhibitions, about, and contact details reflect the live gallery.

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  medium: string;
  size: string;
  price: string;
  image: string;
};

// Curated highlights drawn from real ark. contemporary exhibitions.
// Galleries list works as "Enquire" (price on application) rather than fixed prices.
export const featuredArtworks: Artwork[] = [
  {
    id: 'aw-substraction',
    title: 'Substraction',
    artist: 'ark. contemporary collective',
    medium: 'Mixed media',
    size: 'Various',
    price: 'Enquire',
    image:
      'https://arkcontemporary.co.za/wp-content/uploads/2026/07/20260620_161023-scaled.jpg'
  },
  {
    id: 'aw-tone-value',
    title: 'Tone & Value',
    artist: 'ark. contemporary collective',
    medium: 'Painting & drawing',
    size: 'Various',
    price: 'Enquire',
    image:
      'https://arkcontemporary.co.za/wp-content/uploads/2026/04/Ark_Tones-Values-103-scaled.jpg'
  },
  {
    id: 'aw-summer',
    title: 'Summer Exhibition 2026',
    artist: 'ark. contemporary collective',
    medium: 'Mixed media',
    size: 'Various',
    price: 'Enquire',
    image:
      'https://arkcontemporary.co.za/wp-content/uploads/2026/01/Ark-Summer-2026-5.jpg'
  }
];

export type Artist = {
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  statement: string;
  portrait: string;
};

export const artists: Artist[] = [
  {
    slug: 'elsamaritz',
    name: 'Elsa Maritz',
    tagline: 'Interdisciplinary work on transience, grief & vulnerability.',
    bio: 'Elsa Maritz is an interdisciplinary artist who explores themes of transience, grief, and vulnerability. Her practice involves sensory interactions with nature and meditative experiences using multimedia, allowing her art to serve as a means of grounding, flowing, and releasing. Born in KwaZulu Natal, South Africa, Elsa embarked on a five-year journey as a performing artist before enrolling at the University of Stellenbosch, where she completed her BA in Visual Arts in 2011. Her studies focused on relational aesthetics, social sculptures, and performance art. Over the next decade, Elsa expanded her artistic repertoire to include photography and videography in a commercial context, while also exploring digital art, mixed media, drawing, painting, and performance. In 2023, Elsa was selected as a finalist in the Sasol New Signatures competition.',
    statement:
      'My practice is a means of grounding, flowing, and releasing — art as a quiet, meditative encounter with nature.',
    portrait:
      'https://arkcontemporary.co.za/wp-content/uploads/2024/11/Elsa-Bio-1-683x1024.jpg'
  },
  {
    slug: 'wesselvanhuyssteen',
    name: 'Wessel van Huyssteen',
    tagline: 'Artist, educator, curator & filmmaker since 1986.',
    bio: 'Wessel van Huyssteen has been active as an artist, community arts educator, lecturer, curator and film maker since 1986 when he graduated in Fine Arts from the University of the Orange Free State. He has been nominated for and won several local and international documentary film awards. He completed his Masters of Art in Fine Arts at Wits University in 2017 and continues to work across painting, film, and community arts development in the Free State.',
    statement:
      'A sustained inquiry across painting, film, and community — art as a way of seeing and belonging.',
    portrait:
      'https://arkcontemporary.co.za/wp-content/uploads/2023/10/WesselvH-787x1024.jpeg'
  },
  {
    slug: 'stellaolivier',
    name: 'Stella Olivier',
    tagline: 'Photography as evidence of stories in real time.',
    bio: "Stella Olivier is a photographer based in Rosendal. As a photographer, she is primarily interested in capturing evidence of stories, as they happen in real time, and seconds later, become historic. Within every story, there are layers that are visible, and invisible. She is always aiming to capture both — the spoken and the unspoken — in a single frame.",
    statement:
      'As a photographer, I am primarily interested in capturing evidence of stories, as they happen in real time, and seconds later, become historic.',
    portrait:
      'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Stella-Olivier-981x1024.jpg'
  },
  {
    slug: 'louisolivier',
    name: 'Louis Olivier',
    tagline: 'Sculptor deconstructing & reconstructing the human figure.',
    bio: 'Louis Olivier is a sculptor based in Johannesburg. Born in 1976 in Vereeniging, he grew up in Bethal in Mpumalanga. He graduated with a degree in Fine Art and went on to develop a practice centred on the human figure. Olivier’s sculpture and drawings deconstruct the human figure and investigate the fragments individually. What follows is a reconstructing of form with a variety of materials and tensions. After working in the IT field for three years, he made a dramatic career change in 2001 to work as a full-time artist, embracing the challenge of traditional and contemporary sculptural media.',
    statement:
      'I deconstruct the human figure into fragments, then reconstruct it anew — form rebuilt from tension and material.',
    portrait:
      'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier.jpg'
  },
  {
    slug: 'michelenigrini',
    name: 'Michèle Nigrini',
    tagline: 'Painter of intense colour, light & interior worlds.',
    bio: 'Michèle attracted nationwide interest in 1994 when the Rupert Art Foundation bought all of the available work from her first Solo Exhibition, including her Masters body of work. Michèle holds the following qualifications from the University of Pretoria: BA (Fine Arts), BA Hons (History of Art), and MA (Fine Arts). Her career has included 22 solo exhibitions and more than 200 group exhibitions across South African art festivals and institutions.',
    statement:
      'My painting pursues intense colour and light as a way into the interior worlds we carry.',
    portrait:
      'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Michele-1-1024x809.jpg'
  },
  {
    slug: 'grietjie-lee',
    name: 'Grietjie Lee',
    tagline: 'Experimental practice probing AI vs the human soul.',
    bio: 'Grietjie Lee is an experimental and explorative artist based in Rosendal, South Africa. Lee’s artistic practice is multifaceted, encompassing various mediums and approaches. One of the main focuses of Lee’s work is the future and the impact of artificial intelligence (AI) on human life, collectively and individually. Through her art, Lee challenges the status quo by examining the possibility that AI might replace the true observations of the human soul, deliberately working against the friction between technology and human presence.',
    statement:
      'I examine whether AI might replace the true observations of the human soul — and work deliberately against that loss.',
    portrait:
      'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Grietjie-Lee-1024x768.jpg'
  }
];

export type ExhibitionItem = {
  title: string;
  year: string;
  description: string;
  image: string;
  pdf?: string;
};

export const exhibitions = {
  current: {
    title: 'Substraction',
    dates: '2026',
    artist: 'ark. contemporary collective',
    description:
      'Substraction is a play on the words subtraction and abstraction. Rooted in the Latin prefix sub- (“under” or “beneath”), the exhibition explores abstraction as a process of reduction — removing excess to reveal the underlying ideas, structures, and relationships at the heart of each work.',
    hero: 'https://arkcontemporary.co.za/wp-content/uploads/2026/07/20260620_161023-scaled.jpg',
    pdf: 'https://arkcontemporary.co.za/wp-content/uploads/2026/07/ARK_Substraction-1-compressed.pdf'
  },
  upcoming: [] as ExhibitionItem[],
  past: [
    {
      title: 'Tone & Value',
      year: '2026',
      description:
        'Tone, or value, refers to the lightness or darkness of a colour and its role in shaping depth, structure, and mood. The exhibition explored how value carries feeling across painting and drawing.',
      image:
        'https://arkcontemporary.co.za/wp-content/uploads/2026/04/Ark_Tones-Values-103-scaled.jpg',
      pdf: 'https://arkcontemporary.co.za/wp-content/uploads/2026/05/ARK_Tone-Value_Exhibition-Catalogue_May-2026-compressed.pdf'
    },
    {
      title: 'Summer Exhibition 2026',
      year: '2026',
      description:
        'The Summer Exhibition 2026 at ark. contemporary brought together a curated selection of contemporary South African artists across painting, sculpture, photography, and mixed media.',
      image:
        'https://arkcontemporary.co.za/wp-content/uploads/2026/01/Ark-Summer-2026-5.jpg',
      pdf: 'https://arkcontemporary.co.za/wp-content/uploads/2026/01/ARK_Summer-2026_Exhibition-Catalogue-2-compressed.pdf'
    },
    {
      title: 'Spring Exhibition 2025',
      year: '2025',
      description:
        'A vibrant Spring exhibition at ark. contemporary, uniting sculpture, photography, tapestry, painting, and mixed media from the gallery’s represented artists.',
      image:
        'https://arkcontemporary.co.za/wp-content/uploads/2025/09/Photo-13-of-14-scaled.jpg',
      pdf: 'https://arkcontemporary.co.za/wp-content/uploads/2025/09/ARK_SpringExhibition_20250922-1.pdf'
    },
    {
      title: 'Fertile Ground',
      year: '2025',
      description:
        'Celebrating four years of ark. contemporary, Fertile Ground brought together artists working across themes of landscape, material, and making — a reflection on the ground the gallery has cultivated since 2021.',
      image:
        'https://arkcontemporary.co.za/wp-content/uploads/2025/08/Fertile-Ground-2.jpg',
      pdf: 'https://arkcontemporary.co.za/wp-content/uploads/2025/08/Gallery-2-Catalogue-G2-ARK-2025-Statements_compressed.pdf'
    },
    {
      title: 'Gallery Raffle',
      year: '2024',
      description:
        'Held on 21 December 2024, the latest ark. contemporary Gallery Raffle was a night to remember. Guests enjoyed great conversation, community, and the chance to take a work of art home.',
      image:
        'https://arkcontemporary.co.za/wp-content/uploads/2025/04/ark-Raffle-2024-27.jpg'
    },
    {
      title: 'Equilibrium',
      year: '2024',
      description:
        'ark. contemporary hosted the first Free State Art Collective (FSAC) art exhibition following the Covid lockdown — a moment of reconnection and equilibrium for the regional arts community.',
      image:
        'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-21.jpg'
    }
  ] as ExhibitionItem[]
};

export const gallery = {
  name: 'ark. contemporary',
  tagline: 'art + rosendal + kuns',
  established: 2021,
  address: '342 Kriek Street (Corner van der Merwe Street), Rosendal',
  region: 'Free State, South Africa',
  manager: 'Heather Grundy, Gallery Manager',
  phone: '079 587 6282',
  email: 'arkcontemporary@gmail.com',
  hours: 'Thu 10–4 · Fri 10–5 · Sat 9–5 · Sun 9–2 · Mon by appointment',
  about:
    'Established in 2021, ark.contemporary showcases the collective endeavours of a group of accomplished Rosendal-based artists. Hailing from diverse artistic backgrounds, these individuals converge at ark.contemporary to foster collaboration and showcase their unique visual perspectives. The gallery provides a dedicated exhibition space separate from their personal studios, offering visitors an opportunity to engage with their work and immerse themselves in creative expression.'
};
