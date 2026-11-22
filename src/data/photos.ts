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
    tapeTone: "gold",
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
    tapeTone: "gold",
  },
  {
    id: 9,
    imageUrl: "/gallery/29.jpeg",
    title: "Julian’s First Camping Trip",
    caption:
      "“Roasting marshmallows over the fire and teaching young Julian constellations.”",
    year: "1996",
    rotation: -1,
    tapeTone: "terracotta",
  },
  {
    id: 10,
    imageUrl: "/gallery/28.jpeg",
    title: "Chess by the Hearth with the Kids",
    caption:
      "“Patience and grace across 64 squares while the winter gale rattled outside.”",
    year: "1998",
    rotation: 1.8,
    tapeTone: "gold",
  },
  {
    id: 11,
    imageUrl: "/gallery/19.jpeg",
    title: "Building the Garden Woodshop",
    caption:
      "“Every timber squared by your own hands. Cedar shavings smelling like autumn.”",
    year: "2001",
    rotation: -0.8,
    tapeTone: "blush",
  },
  {
    id: 12,
    imageUrl: "/gallery/9.jpg",
    title: "Father & Son: First Oak Blanket Chest",
    caption:
      "“Dovetail joints cut by hand. A workshop moment sealed into living history.”",
    year: "2004",
    rotation: 1.4,
    tapeTone: "terracotta",
  },
  {
    id: 13,
    imageUrl: "/gallery/11.jpg",
    title: "Lake District Rambles with Mac",
    caption:
      "“Wind blowing mist across Derwentwater. Tea never tasted as glorious.”",
    year: "2007",
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
    id: 16,
    imageUrl: "/gallery/8.jpg",
    title: "Clara’s Wedding Day: Father of the Bride",
    caption:
      "“A tear in your eye and an unforgettable waltz that had everybody crying.”",
    year: "2017",
    rotation: 1,
    tapeTone: "gold",
  },
  {
    id: 17,
    imageUrl: "/gallery/7.png",
    title: "Grandpa Arthur Meets Maya",
    caption:
      "“The gentlest giant. You cradled her tiny head and whispered lifelong promises.”",
    year: "2019",
    rotation: -1.6,
    tapeTone: "terracotta",
  },
  {
    id: 18,
    imageUrl: "/gallery/6.jpeg",
    title: "Quiet Allotment Harvest",
    caption:
      "“Record-breaking pumpkins and a basket full of sweet heirloom tomatoes.”",
    year: "2021",
    rotation: 1.3,
    tapeTone: "blush",
  },
  {
    id: 19,
    imageUrl: "/gallery/21.jpeg",
    title: "Storytime Under the Bedside Lamp",
    caption:
      "“Doing all the voices from the Peter Rabbit books until Maya fell asleep.”",
    year: "2022",
    rotation: -0.7,
    tapeTone: "gold",
  },
  {
    id: 20,
    imageUrl: "/gallery/31.jpeg",
    title: "Arthur's Famous Summer Backyard BBQ",
    caption:
      "“Grilling apron on, secret seasoning mix, and laughter rolling across the lawn.”",
    year: "2023",
    rotation: 2,
    tapeTone: "terracotta",
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
    id: 22,
    imageUrl: "/gallery/10.jpg",
    title: "The Milestone: Sixty Years Young",
    caption:
      "“Surrounded by sixty years of love, grandchildren on knees, and hearts full.”",
    year: "2024",
    rotation: 1,
    tapeTone: "terracotta",
  },
];
