/**
 * Archival photo album data — extracted verbatim from reference/code.html.
 *
 * 22 curated Polaroid snapshots spanning Arthur's six decades (1964–2024).
 * Image URLs are preserved exactly as authored in the source.
 */

export type WashiTone =
  | "terracotta"
  | "gold"
  | "blush"
  | "amber"
  | "emerald"
  | "pink";

export interface Photo {
  /** Stable 1-based position — drives the lightbox "Photo X of 22" counter. */
  id: number;
  imageUrl: string;
  title: string;
  caption: string;
  year: string;
  /**
   * Location is embedded in title/caption in the source rather than an
   * explicit field, so it is left optional for downstream display logic.
   */
  location?: string;
  /** Organic Polaroid micro-rotation in degrees (negative = counter-clockwise). */
  rotation?: number;
  /** Washi tape accent tone, mapped from the source's Tailwind tape classes. */
  tapeTone?: WashiTone;
}

export const photos: Photo[] = [
  {
    id: 23,
    imageUrl: "/gallery/15.jpeg",
    title: "චූටි උක්කුන්",
    caption: "“ජීවිතය දුන් ආදරබර හෝඩිය පන්තියේ ගුරුතුමිය.”",
    year: "2025",
    rotation: 1,
    tapeTone: "terracotta",
  },
  {
    id: 24,
    imageUrl: "/gallery/17.jpeg",
    title: "The Day Forever Began",
    caption:
      "“The foundation of our home, our laughter, and everything we are today..”",
    year: "1996",
    rotation: 1,
    tapeTone: "blush",
  },
  {
    id: 1,
    imageUrl: "/gallery/14.jpeg",
    title: "His Majesty the King and Her Majesty the Queen",
    caption: "“Beneath the Melbourne skies, on a trip to Geelong.”",
    year: "2026",
    rotation: -1.5,
    tapeTone: "terracotta",
  },
  {
    id: 2,
    imageUrl: "/gallery/22.jpeg",
    title: "Proud dad moment",
    caption:
      "“Two daughters, two degrees, and one Dad who still insists he taught us everything we know”",
    year: "2024",
    rotation: 2,
    tapeTone: "pink",
  },
  {
    id: 3,
    imageUrl: "/gallery/23.jpeg",
    title: "Proud dad moment",
    caption:
      "“Two daughters, two degrees, and one Dad who still insists he taught us everything we know”",
    year: "2025",
    rotation: -1,
    tapeTone: "blush",
  },
  {
    id: 28,
    imageUrl: "/gallery/35.jpeg",
    title: "Warm Pride in Cold Weather",
    caption: "“Braving the chill together”",
    year: "2025",
    rotation: -1,
    tapeTone: "pink",
  },
  {
    id: 29,
    imageUrl: "/gallery/36.jpeg",
    title: "Official Cake Inspector",
    caption: "“Guiding the knife with precision”",
    year: "2003",
    rotation: -1,
    tapeTone: "gold",
  },
  {
    id: 4,
    imageUrl: "/gallery/24.jpeg",
    title: "Growing the Roster",
    caption: "“Started with four, upgraded to six”",
    year: "2026",
    rotation: 1.5,
    tapeTone: "terracotta",
  },
  {
    id: 5,
    imageUrl: "/gallery/25.jpeg",
    title: "Amma and Thaththa",
    caption: "“Morning gossip sessions”",
    year: "2018",
    rotation: 1,
    tapeTone: "terracotta",
  },
  {
    id: 6,
    imageUrl: "/gallery/2.jpeg",
    title: "ජනාවලෝකනය",
    caption: "“දිනක් උදෑසනක රටවැසියන් කෙරෙහි අනුකම්පාවෙන්...”",
    year: "2018",
    rotation: 1,
    tapeTone: "terracotta",
  },
  {
    id: 7,
    imageUrl: "/gallery/4.jpeg",
    title: "On the way to Diyathalawa",
    caption: "“With their second set of kids, Chami & Maheesha.”",
    year: "2024",
    rotation: -1.5,
    tapeTone: "blush",
  },
  {
    id: 8,
    imageUrl: "/gallery/30.jpeg",
    title: "කියවීමේ කලාව",
    caption: "“කියවනවා වගේ ඉන්න ඕනේ”",
    year: "2018",
    rotation: 1.2,
    tapeTone: "pink",
  },
  {
    id: 9,
    imageUrl: "/gallery/29.jpeg",
    title: "Play time",
    caption: "“Proof that Dad is still the biggest kid in the room”",
    year: "2004",
    rotation: -1,
    tapeTone: "terracotta",
  },
  {
    id: 10,
    imageUrl: "/gallery/28.jpeg",
    title: "මස්සිනාලාගේ සංගමය",
    caption: "“ලොකු අය්යයි, මල්ලිලා දෙන්නයි”",
    year: "2022",
    rotation: 1.8,
    tapeTone: "gold",
  },
  {
    id: 11,
    imageUrl: "/gallery/19.jpeg",
    title: "පවුලේ ලොක්කෝ",
    caption:
      "“අම්මා, සුදු අම්මා සහ ධම්මි නැන්දා (තාත්තත් ඒ අතර ඉන්නවා කියලා හිතන් ඉන්නවා)”",
    year: "2001",
    rotation: -0.8,
    tapeTone: "blush",
  },
  {
    id: 12,
    imageUrl: "/gallery/9.jpg",
    title: "අය්යා මල්ලී වාගේ",
    caption: "“සහෝදර බැඳීම”",
    year: "එකදාස් නවසිය බර ගනන් වල",
    rotation: 1.4,
    tapeTone: "terracotta",
  },
  {
    id: 13,
    imageUrl: "/gallery/11.jpg",
    title: "Pre-Responsible Era",
    caption: "“Source of all the funny stories”",
    year: "1989",
    rotation: -1.5,
    tapeTone: "gold",
  },
  {
    id: 14,
    imageUrl: "/gallery/12.jpeg",
    title: "Birthday Wishes",
    caption: "“From Sripali and family”",
    year: "2026",
    rotation: 2,
    tapeTone: "terracotta",
  },
  {
    id: 15,
    imageUrl: "/gallery/5.jpeg",
    title: "Lost in the türkiye",
    caption: "“Where ancient ruins meet the sea”",
    year: "2014",
    rotation: -1.2,
    tapeTone: "blush",
  },
  {
    id: 25,
    imageUrl: "/gallery/32.jpeg",
    title: "ජ්‍යෙෂ්ඨ කළමනාකාරිත්වය",
    caption:
      "“විහිළු තහළු, මුරණ්ඩුකම් වගේම අපිට දුන්න හැම උපදෙසක්ම ලැබුණු තැන”",
    year: "2014",
    rotation: -1.2,
    tapeTone: "pink",
  },
  {
    id: 19,
    imageUrl: "/gallery/21.jpeg",
    title: "The Root of the Tree",
    caption: "“Three generations gathered around the man who started it all”",
    year: "2022",
    rotation: -0.7,
    tapeTone: "gold",
  },
  {
    id: 21,
    imageUrl: "/gallery/16.jpeg",
    title: "හබුන් කටයි බත් දෙකටයි",
    caption: "“අම්මා ළඟදී තාම හුරතල් වෙන චූටි උක්කුන්”",
    year: "2023",
    rotation: -1.4,
    tapeTone: "gold",
  },
  {
    id: 26,
    imageUrl: "/gallery/33.jpeg",
    title: "Best dressed moments",
    caption: "“Bringing out the glam for special occasions”",
    year: "2000",
    rotation: 1,
    tapeTone: "pink",
  },
  {
    id: 20,
    imageUrl: "/gallery/31.jpeg",
    title: "All the way from Bandarawela",
    caption: "“The kind of friendships that time never changes”",
    year: "2022",
    rotation: 2,
    tapeTone: "terracotta",
  },
  {
    id: 16,
    imageUrl: "/gallery/8.jpg",
    title: "Work OGs",
    caption: "“Decades long friendships Stil going strong”",
    year: "2017",
    rotation: 1,
    tapeTone: "gold",
  },
  {
    id: 17,
    imageUrl: "/gallery/7.png",
    title: "Wedding memories",
    caption: "“Saumya du's wedding”",
    year: "2019",
    rotation: -1.6,
    tapeTone: "terracotta",
  },
  {
    id: 18,
    imageUrl: "/gallery/6.jpeg",
    title: "Sri Lankans in türkiye",
    caption: "“Establishing proud Sri Lankan identity across oceans”",
    year: "2024",
    rotation: 1.3,
    tapeTone: "blush",
  },
  {
    id: 27,
    imageUrl: "/gallery/34.jpeg",
    title: "Timeless Connections",
    caption: "“Different generations, one big family and a whole lot of love”",
    year: "2021",
    rotation: 1.3,
    tapeTone: "gold",
  },
];
