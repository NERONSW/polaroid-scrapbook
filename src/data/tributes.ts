/**
 * Wall of Wishes data — extracted verbatim from reference/code.html.
 *
 * The source's UI copy advertises "24 Tributes", but it physically contains
 * 22 folded-note cards (see `<article class="masonry-item">` in code.html).
 * All 22 have been transcribed here in full, in source order.
 *
 * Order matters: ids 1–6 are the "core" family tributes rendered by default,
 * and ids 7–22 are revealed by the progressive-disclosure accordion.
 */

export type TributeLanguage = 'en' | 'si';

export interface Tribute {
  /** Stable 1-based position in the archive. */
  id: number;
  /** Name(s) signing the note. */
  author: string;
  /** Relationship / affiliation subtitle. */
  relation: string;
  /** Handwritten headline. */
  title: string;
  /** The body of the letter / memory. */
  content: string;
  /**
   * No per-tribute date exists in the source, so this is left optional and
   * unset; the global milestone context (Oct 24 2024, 1964–2024) applies.
   */
  date?: string;
  /** 'en' for English, 'si' for Sinhala (Noto Serif Sinhala) entries. */
  language: TributeLanguage;
  /** Washi-tape label pinned to the top of the card. */
  badge?: string;
  /** Footer category stamp. */
  tag?: string;
  /** Handwritten sign-off. */
  signature?: string;
}

/** Number of tributes shown before the accordion expands. */
export const INITIAL_VISIBLE_TRIBUTE_COUNT = 6;

export const tributes: Tribute[] = [
  {
    id: 1,
    author: 'Clara & Maya',
    relation: 'Daughter & Granddaughter',
    title: 'To Our Favorite Storyteller',
    content:
      'Happy 60th to our favorite storyteller! Watching you hold Maya reminds me of every tender bedtime story when rain pounded against the glass. You always made us feel completely secure in this world.',
    language: 'en',
    badge: "Pops' Fans ♡",
    tag: 'Roots & Sunshine',
    signature: '— Clara & Maya ♡',
  },
  {
    id: 2,
    author: 'Sarah Edwards',
    relation: 'Your Wife & Companion',
    title: 'My Rock, My Joy, My Whole World',
    content:
      'Thirty-six years since we pledged our lives in that small brick chapel, Art. Through every leaky roof, chaotic kitchen renovation, and sunrise over tea, you’ve made every day an adventure of tenderness. Here’s to our golden afternoon together.',
    language: 'en',
    badge: '36 Years Together',
    tag: 'Forever & Always',
    signature: 'All my love, Sarah ♡',
  },
  {
    id: 3,
    author: 'Marcus Vance',
    relation: 'Lifelong Friend',
    title: 'The Ten Bucks & The Rain',
    content:
      'Forty-five years ago on the flooded library steps, you handed me your last tenner and walked two miles home in the rain with a soggy baguette. Best friend a chap could ever dream of having!',
    language: 'en',
    badge: 'Since 1978',
    tag: 'Pint on me! 🍻',
    signature: '— Marcus',
  },
  {
    id: 4,
    author: 'Julian Edwards',
    relation: 'Son & Woodshop Apprentice',
    title: 'Measure Twice, Speak Honestly',
    content:
      'Dad, everything I know about integrity began in your garage workshop. You showed me that how you build things in the quiet hours reflects how you honor people. Thank you for never rushing me.',
    language: 'en',
    badge: 'Craftsman Bond ★',
    tag: 'Proud Son',
    signature: '— Julian',
  },
  {
    id: 5,
    author: 'Elena Rossi',
    relation: 'Devoted Sister, Since 1964',
    title: 'The Cherry Tree at No. 42',
    content:
      'Dearest Artie, who knew the boy who fell out of the orchard tree and blamed the magpie would grow into the most dignified patriarch of this family? 60 years of being your big sister and loving each chapter!',
    language: 'en',
    badge: 'Big Sister',
    tag: 'Always Family',
    signature: '— Elena ♡',
  },
  {
    id: 6,
    author: 'Uncle Henry & Aunt Beatrice',
    relation: 'Devonshire Family',
    title: 'The Devon Cliffs & Blackberry Jam',
    content:
      'We still remember you at eight years old, with berry-stained fingers and scratched knees on the moors, promising to build a castle with your own hands. You did build a castle, Arthur—one of warmth and honor.',
    language: 'en',
    badge: 'Devon Memories',
    tag: 'With Pride',
    signature: '— Uncle Henry & Bea',
  },
  {
    id: 7,
    author: 'Liam (8) & Oliver (5)',
    relation: 'Grandchildren',
    title: 'Best Grandpa in the Galaxy!',
    content:
      'Grandpa makes the greatest pancakes with funny blueberry faces and he never gets mad when our wooden train set takes over his entire sitting room floor! Happy 60th Grandpa!',
    language: 'en',
    badge: 'Lego Mastermind',
    tag: 'Grandpa Rocks',
    signature: 'Liam & Olly 🚀',
  },
  {
    id: 8,
    author: 'Chloe Jenkins',
    relation: 'St. Jude Community Allotment',
    title: 'Heirloom Tomatoes & Pruning Tips',
    content:
      'Arthur, our community greenhouse would have fallen flat without your clever rainwater collector and endless patience explaining grafting to us novices. Happy milestone birthday!',
    language: 'en',
    badge: 'Greenhouse Crew',
    tag: 'Green Thumbs',
    signature: '— Chloe J. 🌱',
  },
  {
    id: 9,
    author: 'Dr. Robert Sterling',
    relation: 'Kings College London',
    title: 'A Rare Mind and Steady Hand',
    content:
      'Over thirty years of departmental meetings, you were always the calm voice in the tempest. Your dedication to scholarship was matched only by your devotion to mentoring young fellows.',
    language: 'en',
    badge: 'Colleague & Co-Author',
    tag: 'In Fellowship',
    signature: '— Robert Sterling',
  },
  {
    id: 10,
    author: 'Thomas & Evelyn Ward',
    relation: 'Corner of Elmwood Lane',
    title: 'Thirty Years Over the Fence',
    content:
      'The neighborhood won’t ever find a more considerate neighbor. Snow shoveled before daybreak, hedge clippers cheerfully lent, and warm conversations on summer dusk. Happy 60th, Arthur!',
    language: 'en',
    badge: 'Next Door Neighbors',
    tag: 'Good Neighbors',
    signature: '— Tom & Evie',
  },
  {
    id: 11,
    author: 'Margaret Higgins',
    relation: 'Parish Council Chair',
    title: 'Quiet Service, True Grace',
    content:
      'Arthur, thank you for the countless repairs to the church hall benches and always ensuring the Christmas tree lights shone bright. A true servant’s heart.',
    language: 'en',
    tag: 'Parish Warmth',
    signature: '— Margaret H.',
  },
  {
    id: 12,
    author: "David 'Mac' Mackenzie",
    relation: 'Climbing Partner Since 1989',
    title: 'Ben Nevis in the Mist',
    content:
      "Remember when our map got soaked through halfway up the ridge and you guided us back down with a chocolate bar and sheer Scottish stubbornness? You're a true brother of the trail.",
    language: 'en',
    badge: 'Highland Hikes',
    tag: 'Slàinte Mhath!',
    signature: '— Mac',
  },
  {
    id: 13,
    author: "Father Peter O'Connell",
    relation: "St. Dunstan's Parish",
    title: 'Blessings Upon a Good Man',
    content:
      '“A good name is better than precious ointment.” May the Lord continue to shine His light upon your hearth, your generous soul, and your children’s children.',
    language: 'en',
    tag: 'Benediction',
    signature: '— Fr. Peter',
  },
  {
    id: 14,
    author: 'Sophia & Daniel Wright',
    relation: 'Niece & Nephew-in-Law',
    title: 'Uncle Art’s Bonfire Tales',
    content:
      'Every autumn Guy Fawkes night at your house is burned in our happiest memories: hot baked potatoes wrapped in foil and your ghost stories that made us giggle and shiver.',
    language: 'en',
    tag: 'With Warmth',
    signature: '— Sophia & Dan',
  },
  {
    id: 15,
    author: 'Old Crew at The Red Lion',
    relation: 'The Pub Trivia & Darts Team',
    title: 'Captain of the Bullseye',
    content:
      'Still unmatched in 19th-century geography trivia! We’ve kept your seat by the fire warm and your tankard polished. Cheers to 60 magnificent years, Artie!',
    language: 'en',
    badge: 'Thursday Darts',
    tag: 'Cheers! 🍺',
    signature: '— Barnaby, Greg & Stan',
  },
  {
    id: 16,
    author: 'Chef Antonio Moretti',
    relation: 'Trattoria Bella (Since 1991)',
    title: 'The Corner Table Regular',
    content:
      'For thirty years you and Sarah sat at table five every anniversary! A true gentleman who honors good food and good wine. Tanti auguri di cuore, Arthur!',
    language: 'en',
    tag: 'Buon Compleanno',
    signature: '— Antonio & Staff',
  },
  {
    id: 17,
    author: 'Beth & Sam Crawford',
    relation: 'Family Friends',
    title: 'Kindness That Anchors',
    content:
      'When our basement flooded two winters back, you were at our door with sump pumps before the rain had even stopped. That’s who you are: always showing up.',
    language: 'en',
    tag: 'True Friends',
    signature: '— Beth & Sam',
  },
  {
    id: 18,
    author: 'Granddaughter Lily (12)',
    relation: 'Your Drawing Partner',
    title: 'Thank You For Teaching Me Watercolor',
    content:
      'Grandpa, I framed the bird picture we painted together in July! You always say ‘there are no mistakes in art, only interesting new pathways.’ I love you so much!',
    language: 'en',
    badge: "Lily's Hugs",
    tag: 'Artist Pals',
    signature: 'Love, Lily ♡',
  },
  {
    id: 19,
    author: 'Master Woodworkers Guild',
    relation: 'London Guild Chapter',
    title: 'Dovetails & Hand Planes',
    content:
      'Nobody planes English oak with quite the finesse you possess, Arthur. Congratulations on six decades of true craftsmanship and generous guidance to young woodworkers.',
    language: 'en',
    tag: 'Master Craftsman',
    signature: '— James & Guildmates',
  },
  {
    id: 20,
    author: 'Sister Ruth Edwards',
    relation: 'Edinburgh',
    title: 'Singing By the Piano',
    content:
      'Remember mother playing the upright piano on Boxing Day while you insisted on singing carols off-key to make the cousins giggle? Sixty years and your laughter remains infectious.',
    language: 'en',
    tag: 'Sibling Love',
    signature: '— Little Sister Ruth',
  },
  {
    id: 21,
    author: 'Prof. Alistair Davies',
    relation: 'Oxford Mentor (1982–1985)',
    title: 'An Inquiring Soul',
    content:
      'A teacher remembers certain students forever. Arthur had that rare balance of keen intellect and deep humility. It has been a pleasure following your journey across the decades.',
    language: 'en',
    tag: 'Alma Mater',
    signature: '— A. Davies',
  },
  {
    id: 22,
    author: 'Sunday Morning Ramblers',
    relation: 'Hampstead Heath Loop',
    title: 'Misty Mornings & Thermos Flasks',
    content:
      'Rain or shine at 7:30 AM! You bring the warm almond biscuits and the best tales of old London. We wouldn’t trek five miles in winter for anyone else. Happy 60th milestone!',
    language: 'en',
    tag: 'Trek On! 🥾',
    signature: '— The Heath Ramblers',
  },
];
