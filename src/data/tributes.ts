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

import type { WashiTone } from "@/data/photos";

export type TributeLanguage = "en" | "si";

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
  /** Washi-tape banner label pinned to the top of the card. */
  tapeText?: string;
  /** Washi-tape banner colour. */
  tapeColor?: WashiTone;
  /** Footer category stamp. */
  tag?: string;
  /** Handwritten sign-off. */
  signature?: string;
  /** Optional mini-polaroid portrait of the author(s). */
  authorImage?: string;
  /** Optional handwritten caption beneath the author portrait. */
  authorImageCaption?: string;
}

/** Number of tributes shown before the accordion expands. */
export const INITIAL_VISIBLE_TRIBUTE_COUNT = 6;

export const tributes: Tribute[] = [
  {
    id: 1,
    author: "Chulani Ekanayaka",
    relation: "Wife",
    title: "",
    content: `When I look back at 1994, I smile at how our journey began — Town Hall, my Russian translations, your heavy Zenith camera that is still in our cupboard, our Pancha children's paper, the rose plant with my mum, and your unforgettable blue shirt with cardboard still under the collar. On the 4th of September, 1998, we started a new chapter together, with no financial backing, but with determined dreams, hard work, faith in each other, and mutual trust. Today, when I look at how far we have come, I see a sixty-year-old with a brilliant mind, a writer’s soul, an engineer’s precision, an entrepreneur’s dream, a comedian’s sense of humour, and a heart that belongs to his family. Truly, one man with so many wonderful chapters. One of the greatest gifts you have given this world is our two wonderful daughters. You raised them with unconditional love, dedication, and sacrifice. You gave them not only a good education, but also confidence, courage, values, and the freedom to follow their dreams. You have also warmly embraced our sons-in-law as part of our family. To the world, you are a successful professional and a talented writer. To our daughters, you are their hero. And to me, you are the person with whom I turned life’s smallest beginnings into our most beautiful journey.
              Now it is time to enjoy the beauty of everything you have created. May your dreams flow like a river. Happy birthday to my life partner.
              You are truly lucky to have a queen like me, who has tolerated all your craziness with a sweet smile for the past 32 years!`,
    language: "en",
    tapeText: "Queen Chul",
    tapeColor: "gold",
    tag: "",
    signature: "— Her Majesty Chulani",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 38,
    author: "Dewni Ekanayaka",
    relation: "Elder Daughter",
    title: "",
    content: `ජීවිතය යනු තනි ඉරක් නොව, රටා රැසකින් පිරුණු අපූරු සිතුවමක් බවත්,
              ලෝකය පුරා විසිරී ඇති කටුක යථාර්ථයන් අතර මනුෂ්‍යත්වය මහා වටිනාකමක් ගන්නා බවත්,
              ගන්නා ඕනෑම තීරණයක් නිවැරදි තීරණයක් බවට පත්කර ගැනීමේ හැකියාව අප සතු බවත්,
              සෑම කෙනෙකුටම තමන්ටම ආවේණික වූ කතාවක් ඇති බවත්,
              තමන්ගේ විශ්වාසයන් මත පිහිටා නොසැලී ජීවත් විය යුතු බවත්,
              මට කියා දුන් තාත්තේ...
              ගඟ දිගේ යන්නට බලා හිඳිමි...`,
    language: "en",
    tapeText: "Sanki",
    tapeColor: "pink",
    tag: "",
    signature: "— Sanki",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 36,
    author: "Ovini Ekanayaka",
    relation: "Younger Daughter",
    title: "",
    content: `Hi Thaththa,
    I cant believe you are 60 already.  I still remember making a card for your 50th Birthday, in 2016, couple of weeks before you finished your work at Qatar and moved back to Lanka. Growing up was so much fun with you and Im extremely grateful for it. I know raising two daughters wasnt the easiest. You were never extremely strict with us but you always made sure we had the right values at our core. Yhe best part of my childhood was the bedtime stories. Every day before i went to bed up until I was 11 or 12 years old, you would tell us a story before bed, and then through skype when you moved abroad.  Me and akki always talk about the passion you have for everything you do and everyday life. Even now, you would be amazed at something, the way someone works and you would tell us. Growing up every day after school you would listen to me speak about everything that happened to me at school and my day. Even when i moved to australia, you always made time to listen my stories and i always look forward for our daily call at your lunch time. You always endlessly supported our dreams and made sure to push us in to the right direction.  We used to say thaththa made election promises as he would say yes to all our absurd childhood ideas and then say no when we ask him for it. Thaththa made an election promise years ago to take us camping. it involved walking in waters knee deep, and coming to camping grounds, and eating Smores and thaththas rrice and curry. I hope 60is where we stop witht he elction promises and act it out. I can’t wait to see you travel the world and travel the world with you where i can. Im excited to whats coming ahead. I hope you stay happu amd i hope you know you have succeeded in life in every way person. Most importantly thank you for being a dad i could love whole heartedly and look up to in every aspect of life. I love you thaththa.`,
    language: "en",
    tapeText: "Ovi",
    tapeColor: "gold",
    tag: "",
    signature: "— Ovi",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 39,
    author: "Nipuna Suraj",
    relation: "",
    title: "",
    content: `Happy 60th Birthday, Thaththa!
              You are truly one of the most remarkable and unique people I’ve ever had the privilege of knowing. The way you see the world, understand people, and approach life is genuinely inspiring. Your knowledge, wisdom, and life experiences never cease to amaze me.
              Dewni and I feel incredibly lucky to have you in our lives. We are truly grateful for your guidance, support, and the wisdom you share with us. Thank you for always being there for us and for being such an important part of our lives.
              Wishing you good health, happiness, and many more wonderful years ahead. ❤️
              \nP.S. All hail the King, තිලක ශ්‍රී ඒකනාථ II ! 👑😂`,
    language: "en",
    tapeText: "Nipuna",
    tapeColor: "blush",
    tag: "",
    signature: "— Nipuna Suraj",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 37,
    author: "Thisal Koswanage",
    relation: "",
    title: "",
    content: `Happy Birthday Thaththa
              I hope you have an amazing day. Thankyou for being such an incredible Thaththa. Ovi and I are so lucky to have you in our lives and are so grateful.
              Hearing and seeing your career journey and how it has progressed has been one of inspiration for me. One of the things I will always cherish are our conversations on different construction techniques and methods. I really enjoy discussing things we have both come across in the construction world that we are able to relate to. On top of that, I enjoy learning about other different methods that you have explained to me that I have still not encountered. I find these chats fascinating and intriguing. 
              Seeing, hearing and understanding your journey has been amazing. Something that I have always admired is how you have been able to manage your busy work schedule with other activities including lecturing and writing. Above all what I admire most is your caring nature. You have a positive impact on everyone you interact with and that is a testament to the special person you are. 
              Thankyou for being the most amazing Thaththa.
              Love Thisal`,
    language: "en",
    tapeText: "Thisal",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Thisal Koswanage",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 32,
    author: "Kithsiri Ekanayaka",
    relation: "Elder Brother",
    title: "",
    content: `One unforgettable memory I will always remember is my wedding day. You were supposed to be my best man, but you didn't even turn up! 😩😩 And the funniest part was that there was nobody else to hand the flower bouquet to Nilmini. In the end, Thilake Aiya, already married and with a child, had to step in and play the role! 🤩😂 Some memories are simply impossible to forget!
            Wishing you a very happy 60th birthday, my dear brother! May the years ahead bring you good health, happiness, laughter, and many more beautiful memories.`,
    language: "en",
    tapeText: "අය්යා",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Kithsiri Ekanayaka",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 28,
    author: "Wasantha Ekanayaka",
    relation: "Sister",
    title: "",
    content:
      "චූටි උක්කුන්ට නිකන් සිටීමට බැරිය.  කුමක් හෝ කඩමින් නැවත සාදමින් ඒ  ගැන පරීක්ෂණ කරමින් ඔහු දවස ගෙවයි.  ඔහුට දවසක් කැඩුණු  ට්‍රාන්සිස්ටර් රේඩියෝවක් අසු විය. ඔහුගේ පරීක්‍ෂණය වූයේ කැඩුණු transister රේඩියෝව යොදා loud speakerයක් සෑදීමයි.  ඔහු උඩ තට්ටුවේ ඔහුගේ කාමරයේ පර්යේෂණ කටයුතු කරයි.  transister radio එක   වයරයකින් සම්බන්ධ කර තිබුණේ ඔහුගේ කාමරය කෙලින්ම තිබූ යට තට්ටුවේ තාත්තාගේ කාමරයටයි.  තාත්තා ගෙදර නිදා සිටින  විට අප කිසිවකුට කිසිදු ශබ්දයක් කර නොහැක.  චූටි උක්කුන්  නොදැන සිටි දේනම් තාත්තා එදින හවස තාත්තාගේ කාමරයේ නිදා  සිටින බවයි.  ඔහුගේ පරීක්ෂණය ඔහු කරමින් සිටියේය.  එකවරම නිවසම දෙදරවමින් මහා හඬින් රේඩියෝ හඬ නගන්නට විය.  එම ශබ්දයත් සමඟ තාත්තා උඩ ගොස් බිම වැටුණේය.  (පසුව තාත්තා කී පරිදි)." +
      " මොකාද යකෝ මේක මෙතන දැම්මේ," +
      "කෑ ගසමින් තාත්තා උඩ කාමරයට එන විට  චූටි උක්කුන් මල්ලී,  කඩුල්ලෙන් පැන ගෙදරෙනුත් පැන ගොස් සිටියේය.  එදා දවසම ඔහු සිටියේ සැඟවිය. එදා ඔහු තාත්තාට අසූවූවා නම් කුමක් කුමකින් සිදුවේදැයි අදටත් මට සිතා ගත නොහැක",
    language: "en",
    tapeText: "වසන්තක්කා",
    tapeColor: "emerald",
    tag: "",
    signature: "— Wasantha Ekanayaka",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 17,
    author: "Deepani Ekanayake",
    relation: "Younger Sister",
    title: "",
    content:
      "මතකද පොඩි කාලෙ අපි කුඹුරෙ කුරුල්ලෝ එලවන්න ගියා,රණ්ඩු වෙලා තාත්තා අපි දෙන්නට ගස් බැදලා ගැහුවා...\nදැන් ඒ පොඩි අයියට 60යි.\nසුබ උපන්දිනයක් වේවා❤️",
    language: "si",
    tapeText: "දීපානි නංගි",
    tapeColor: "pink",
    tag: "",
    signature: "— Deepani Ekanayake",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 30,
    author: "Harsha Maddugodage",
    relation: "Sister-in-law",
    title: "",
    content:
      "චිත්තක්ශණයක් පාසා දියවෙන ජීවිතයක දශක හයක කාලයක අභිමුවට සපැමිණි අය්යේ,ඔබ අප පවුලේ සාමාජිකත්වය ලත් දා සිට ඔබෙන් අපටත්, අපෙන් ඔබටත් හුවමාරු වූ ආදරය, සෙනෙහස අදටත් එලෙසමය.අප පවුල් සංස්ථාවේ සුහද හමුවීම් වල බරසාර පිළිසඳරවලත්, සිනහවෙන් පිරුණු කවට කතාවේත් මුලසුන ඔබය. වගකීම් ඉදිරියේ මස්සිනා නොව අය්යාය. ඉතින් පතන්නම් ඔබට ආ දුරක් සේම තව දුර ගමනකට කාය ශක්තිය මෙන්ම මානසික ශක්තියද ලබන්නට වාසනාවද ආදරයෙන්! සතුට , සැනසීම ම ජනිත වන්නට!සියලු කර්තව්‍යන් සාර්ථක  වන්නට සෙනෙහසින්. මේ නංගී- හර්ෂී.",
    language: "si",
    tapeText: "හර්ෂී නංගී",
    tapeColor: "gold",
    tag: "",
    signature: "— Harsha Maddugodage",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 29,
    author: "Chandrarathna",
    relation: "",
    title: "",
    content:
      "කැපකිරීම්, බිඳවැටීම් මෙන්ම ජයග්‍රහණයන්, සාර්ථකත්වයන් සියල්ල පොදි බැඳ ජීවිතය දරාගෙන මෙපමණක් දුරක් ආ තිලකසිරි අය්යේ, තව දීර්ඝ කාලයකට ඔබට ශක්තිය, ධෛර්යය ලැබේවා! සුභම සුභ උපන්දිනයක් වේවා!",
    language: "en",
    tapeText: "",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Chandrarathna",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 21,
    author: "Indika Maddugodage",
    relation: "Brother-in-law",
    title: "",
    content:
      "How big he is, doesn't matter still Chooti Ukkun to mother. He loves that",
    language: "en",
    tapeText: "මල්ලි",
    tapeColor: "amber",
    tag: "",
    signature: "— Indika Maddugodage",
    authorImage: "",
    authorImageCaption: "",
  },

  {
    id: 35,
    author: "Sanuvi Inhara",
    relation: "",
    title: "",
    content: `Happy Birthday to our Kadawatha Superman!!
        Sometimes I wish we could turn back time and relive those old days all over again. All of us hanging around at your house, watching Atapattama at 6, waiting for ur magic shows, playing superman, and you showing off your strength by letting all four of us hang off your arm. And, of course, sending us straight home at 7pm sharp!
        I still remember those nights when Amma was on night duty and I got to stay over with sanki akka and ovini. මාමා would sit the three of us in a row and feed us all from the same plate. It's funny how these little moments turn into the memories we cherish the most.
        I wonder if our Superman can still hold all four of us again..
        Thank you for always being more than just a මාමා to me, but my Thaththa too. I'll always be grateful for all the love, care, and countless childhood memories.
        Wishing you good health, happiness and many more beautiful years ahead. ආදරෙයි මාමේ!!`,
    language: "en",
    tapeText: "Pinky",
    tapeColor: "pink",
    tag: "",
    signature: "— Sanuvi Inhara",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 25,
    author: "Vihara Wijesingha",
    relation: "",
    title: "",
    content:
      "Happy Birthday, Loku thathe! Not everyone has a family member as knowledgeable as you, and I feel lucky to learn from you. Your curiosity and insight inspire me in my own studies, and I hope one day I can be as wise as you are. Wishing you a wonderful year full of health, joy, and contentment.",
    language: "en",
    tapeText: "විහර පුතා",
    tapeColor: "gold",
    tag: "",
    signature: "— Vihara Wijesingha",
    authorImage: "",
    authorImageCaption: "",
  },

  {
    id: 38,
    author: "Ranjith Aiya and Anusha Akka",
    relation: "",
    title: "",
    content: `To Dearest Thilaka Malli,
              Happy 60th Birthday!
              We are so grateful that our families are connected through Thisal and Ovini!
              It was such a pleasure catching up with you last August. We will always cherish the memory of that special moment. It was truly a wonderful milestone for both parents!
              Thank you for sharing some beautiful memories and stories from your life during your short stay with us. We thoroughly enjoyed your company and the opportunity to get to know you better. Ànusha Akka will certainly never forget your fondness for tea! She will make sure her pantry cupboard is well stocked with plenty of tea bags before your next visit 😊.
              Turning 60 is a special milestone, a time to reflect on a life filled with growth, resilience, achievements, and personal journeys. You have built a beautiful family, established a career, nurtured lasting friendships, and created a legacy that you can look back on with immense pride and gratitude.
              You are truly a wonderful husband and an amazing father, someone any family would be blessed to have.
              Congratulations on reaching this remarkable milestone! May this new chapter of your life bring you good health, happiness, peace, and many more beautiful memories with your loved ones.
              Wishing you a very happy 60th birthday and a fantastic year ahead!
              With lots of love 
              Ranjith Aiya and Anusha Akka`,
    language: "en",
    tapeText: "",
    tapeColor: "pink",
    tag: "",
    signature: "— Ranjith Aiya and Anusha Akka",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 18,
    author: "Imalsha",
    relation: "",
    title: "",
    content:
      'ඉර හිසට ඉහලින් ස්ථානගතව පැවති එක්තරා දහවල් වරුවක අප දියතලාවේ සිට නිවසට යන්නට මත්තෙන් අවුරුදු 8ක් වත් නොමැති අහිංසක මා යම් අයෙක් සමග පොඩි කතාවකට වැටුනි.එම කෙටි සංවාදයේදී මාගේ කටින් "දන්නවා.." යැයි පැවසූනේ පුරුද්දට මෙනි.(දන්නවද? කියන එකට බදුල්ලෙ කියන්නෙ එහෙමයි )\nඒකට ඒ පුද්ගලයා සැර පරුශ ලීලාවෙන් "දන්නවා..නෙවෙ දන්නවද කියල අහන්න" යැයි පැවසුවේය.එය මා එම පුද්ගලයා සමග පවතින මතකයන්ගෙන් වඩාත් ලැජ්ජා සහගතම මතකයයි.\n\nඑයාට දැන් හැටයිලු\nඉතින්,\nසුබ උපන්දිනයක් වේවා උක්කුං මාමේ..',
    language: "si",
    tapeText: "දීපානි නංගිගෙ පොඩි එකා",
    tapeColor: "emerald",
    tag: "",
    signature: "— Imalsha",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 33,
    author: "Nethmi and Kevin",
    relation: "",
    title: "",
    content:
      "Happy 60th Birthday, Bappi! ❤️ Wishing you good health and happiness. May this milestone birthday bring you lots of love, laughter and beautiful memories with family and friends. Hope you have an amazing day celebrating! Lots of love.",
    language: "en",
    tapeText: "",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Nethmi and Kevin",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 12,
    author: "Maheesha Sathsarani",
    relation: "",
    title: "",
    content:
      "Happy Birthday, Uncle!! ❤️ Wishing you good health, happiness, and may all your wishes come true!\n\nYou have made such a positive difference in the lives of so many people around you, and I’m really grateful to be one of them.\n\nYou introduced me to the field of Civil Engineering and gave me my very first opportunity when I had no experience. That opportunity became the foundation of the career I have today and helped shape me into the engineer I am. I will always be grateful to you for believing in me and giving me that chance.\n\nOn your 60th birthday, I just want you to know how much of a positive impact you have made on the lives of so many people around you. You may not always realise how far your kindness, guidance, and support have reached, but I hope you know that they have made a lasting difference.\n\nI feel incredibly fortunate to have crossed paths with you, to know you, and to have had the opportunity to learn from you.\n\nThank you for being such an inspiration, Uncle. Happy 60th Birthday! ❤️",
    language: "en",
    tapeText: "මහීශා",
    tapeColor: "gold",
    tag: "",
    signature: "— Maheesha Sathsarani",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 6,
    author: "Chamithara Dewanga",
    relation: "",
    title: "",
    content:
      "Happy birthday Uncle!!!! You are one of the most inspiring people I have met! Cheers to many more happy years!",
    language: "en",
    tapeText: "චමි",
    tapeColor: "pink",
    tag: "",
    signature: "— Chamithara Dewanga",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 7,
    author: "Lal Hettiarachchi",
    relation: "",
    title: "",
    content:
      "Long time ago in year 2000 we met in somewhere (Balangoda) this lonely planet.",
    language: "en",
    tapeText: "",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Lal Hettiarachchi",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 8,
    author: "Thusitha Nugagahakumbura",
    relation: "",
    title: "",
    content:
      "Happy 60th Birthday, Thilakasiri Ayya! ❤️\n\nYou have always been much more than a brother to me. You may not be my brother by blood, but you are certainly one by heart.\n\nThank you for everything you have done for me over the years, and for the countless ways you have touched the lives of so many others. You have shown us, through your actions, your kindness and the way you live your life, what it truly means to be a good human being. You haven't just told us how to live; you have led by example, quietly inspiring and paving the way for so many of us to become better people.\n\nI feel truly fortunate to have you in my life.\n\nAs you step into this wonderful milestone, I wish you many more years of good health, happiness, peace and countless beautiful experiences. May life give back to you all the goodness and love you have given to others.\n\nMuch love and heartfelt wishes always, Ayya! ❤️",
    language: "en",
    tapeText: "",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Thusitha Nugagahakumbura",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 9,
    author: "Pradeepika and family",
    relation: "",
    title: "",
    content:
      '"Happy birthday! We thurly admir what a simple ,good hearted person you are. Connecting with you and building this friendship has been such a blessings for us.wishing you good health and every happiness form our entire family.',
    language: "en",
    tapeText: "",
    tapeColor: "pink",
    tag: "",
    signature: "— Pradeepika and family",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 32,
    author: "Sripali and family",
    relation: "",
    title: "",
    content: `Happy 60th Birthday, Thilakasiri! 🎂🎉💙
              Wishing you a wonderful 60th birthday filled with happiness, laughter and beautiful memories.
              You are truly a good, honest and kind-hearted person. Your sincerity, kindness and positive attitude make you a special person who is appreciated by everyone around you.
              May this new chapter of life bring you good health, endless happiness, success and many more wonderful moments.
              Have a fantastic 60th birthday! 🎉💙`,
    language: "en",
    tapeText: "",
    tapeColor: "pink",
    tag: "",
    signature: "— Sripali and family",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 10,
    author: "Eranda Mahagamage",
    relation: "",
    title: "",
    content: "තිලක සිතට සුන්දරම උපන්දිනයක් වේවා! ❤️🌹",
    language: "si",
    tapeText: "එරන්ද & එරන්දි",
    tapeColor: "gold",
    tag: "",
    signature: "— Eranda Mahagamage",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 11,
    author: "Erandi Amarasekara",
    relation: "",
    title: "",
    content:
      "Wishing you a very happy 60th birthday! ❤️\nSixty years of life, filled with countless memories, experiences, achievements and valuable lessons. Your dedication, hard work and commitment to your profession as an engineer, even while building your career far away from home in Istanbul, Türkiye, are truly admirable. May this beautiful milestone mark the beginning of another wonderful chapter filled with good health, happiness, peace and countless blessings. May you continue to achieve your dreams, create beautiful memories and enjoy every moment of life surrounded by the people who matter most.\nWishing you many more wonderful years ahead. Happy 60th Birthday! 🎂❤️ warm wishes from Erandi",
    language: "en",
    tapeText: "එරන්ද & එරන්දි",
    tapeColor: "blush",
    tag: "",
    signature: "— Erandi Amarasekara",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 13,
    author: "H R Mahindasiri",
    relation: "",
    title: "",
    content:
      "Happy 60th Birthday, My Dear Friend!\n\nSince we first met in 1996, we have shared an incredible journey filled with countless memories, challenges, achievements and dreams. What started as a friendship has grown into a lifelong bond built on trust, respect and loyalty.\n\nFor 23 years, we have also stood together as business partners sharing both successes and challenges.\n\nI feel truly fortunate to have you as one of the closest, most trusted and most important people in my life.\n\nWishing you good health, happiness, and many more wonderful years ahead.\n\nSome friendships are for a lifetime, and ours is certainly one of them!\n\nHappy 60th Birthday, my dear friend!",
    language: "en",
    tapeText: "",
    tapeColor: "gold",
    tag: "",
    signature: "— H R Mahindasiri",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 14,
    author: "ආරියරත්න කලු",
    relation: "",
    title: "",
    content:
      "1. ඔය බෝට්ටුව පෙරලෙනවමයි.\n2. ටෝක්ස් දීල මිහින්තලේ නැගීම.\n3. රමණී බර්තෝලිනියස්.\n\nඔය මාතෘකා තුනෙන් එකක් ගැන විස්තර  අහගන්න.🥰\nT සිතට වාසනාවන්ත උපන්දිනයක් ම වේවා. ❤️🎂❤️",
    language: "si",
    tapeText: "කළු ආරී",
    tapeColor: "pink",
    tag: "",
    signature: "— ආරියරත්න කලු",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 15,
    author: "Shyamli Wanniarachci",
    relation: "",
    title: "",
    content:
      'හැඳිනගත් ඒ පළමු දින\nඅපේ "චූල්ගෙ හස්බන්ඩ්" ගැන\nදුටුවෙ නම් මහ ආඩම්බරකම,\n\nගත නොවී වැඩි දිනක්ම\n " අපරාදෙ එහෙම හිතුවෙ"\n සිතුනෙමි\nනිරහංකාර ඒ "තිලකසිත" ගැන\n\nසොඳුරු මිනිසත්කම\nඅසිරිමත්  ඒ මිතුදම\nසහෝදරයෙක් විලසම\nදැනුනි\nඇසුරෙදි නිබඳවම\n\nවිනෝදයට  බර\nවිනෝද චාරිකා වල\nමිහිරි මතක හරි අපමණ\nතවමත් තුටින් රස විඳින\n\nබදුලු බණ්ඩාරවෙල \nයාපනය ත්‍රිකුණාමලය \nගිය නොයෙක් තැන්වල \nගෙවූ එදවස්  මිහිරිම විය\n\nගී ඇසුවෙ සතුටින්\nගී ගයමින් අප සමගින්\nරස කතා ගොතමින්\nඉමිහිරි මතක තබමින්\n\nරස කතා නම් අපමණ\nතිලකසිත පොතෙත් තරමට නොවන\nලියන්නට යන ඉඩ නිසා අපමණ\nලියා ඇත සියල්ල මතක පොතකම\n\nසුවබර උපන්දිනකට\nනිදුක් නිරෝගී සුව නිති රැඳෙන\nසු\' පැතුම් එක්කරමි මම\nතිලකසිරි  අයියේ,\nහද පත්ලෙන්ම\n\nශම්මි',
    language: "si",
    tapeText: "",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Shyamli Wanniarachci",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 16,
    author: "Adeesha",
    relation: "",
    title: "",
    content:
      "​Dear Thilakasiri Uncle,\n​Wishing you a very happy 60th birthday!\n​Uncle, your gentle heart, soft-spoken kindness, and the way you never lose your temper make you such a wonderful and truly special person. You are also wonderfully smart, and being around you is always a grounding and comforting experience.\n​One of my absolute favorite memories with you is the trip we took to Nuwara Eliya. Sitting together, sharing delicious food, and just talking about old stories and laughing together is something I will always cherish.\n​Thank you for bringing so much warmth and joy to everyone around you. May this milestone year bring you endless happiness, good health, and many more wonderful moments to treasure.\n​Happy 60th Birthday! ❤️",
    language: "en",
    tapeText: "",
    tapeColor: "pink",
    tag: "",
    signature: "— Adeesha",
    authorImage: "",
    authorImageCaption: "",
  },

  {
    id: 19,
    author: "සුලෝචන පල්ලේවෙල",
    relation: "",
    title: "",
    content:
      "ඔබගෙන් ඉගෙන ගත් දේ බොහෝමයි, ඉගෙන ගන්නට ඇති දේ බොහෝමයි. දිගු ඉලක්කයක් ජය ගන්නේ කෙටි පියවර රාශියක් තැබීමෙන් බව ඔබගෙන් උගත් වැදගත්ම පාඩමයි. දිගාසිරි වේවා....!!",
    language: "si",
    tapeText: "",
    tapeColor: "terracotta",
    tag: "",
    signature: "— සුලෝචන පල්ලේවෙල",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 20,
    author: "Saumya Dissanayake",
    relation: "",
    title: "",
    content:
      "සියල්ලටම කලින් සමාව අයදිමි දුරකථන ඇමතුමක්වත් මේ දිනවල ලබාදීමට නොහැකිවීම පිළිබඳව.මෑතකදිත් ඒ ගැන ඔහුගෙන් නෝක්කාඩු  ඇසුවත් ඒත් ලැජ්ජාවක් නැත.කෙසේ වෙතත් ඔහු ගැන මගේ හදවතේ තියෙන  ආදරය ගෞරවය කියා නිම කිරීමට නොහැක.ඔහු ඒ තරම්ම ආදරණීය ගෞරවනීය කෙනෙකි.ඔහුගේ මුවින් පිටවන හැම වචනයකින්ම  අර්ථවත් දෙයක් ජීවිතයට ලබාගන්නට ඇත.ඒ තරම්ම ඔහු ගොඩක් බුද්ධිමත් කෙනෙක්.ජීවිතයේ අපේ වැටීම් තීරණ ගැනීම් වලදී ඔහුට කතා කරද්දී දීපු උපදෙස් කරපු උදවු අදටත් කරන උදවු ඒ වචන අවවාද නිසා හිත හයිය කරගෙන පුළුවන් තරම් ජිවිතය හදාගත්ත අවස්ථා එමටයි. මගේ ජීවිතයේ යම් තරමක් ඉස්සරහට ඇවිල්ලා තියනවනම් ඔහුටත් ණයගැතියි. අපේ පවුලට කියන්න බැරිතරම් වටිනා කෙනෙක්.හරිම ආදරණීය කෙනෙක්.අපේ ආච්චි අම්මාට සීයාට ගොඩාක් පිං ඒ ලස්සන පිංවන්ත පුතා බිහි කරාට.ඉතිං දැන් එයාට 60 යි.චූටි උක්කුං මාමේ සුභම සුභ උපන්දිනයක්.හැම දවසක්ම ආදරෙන් සතුටින් සිනහවෙන් පිරෙන්න කියල හදවතින්ම ප්‍රාර්ථනා කරනවා.♥️💐",
    language: "si",
    tapeText: "",
    tapeColor: "emerald",
    tag: "",
    signature: "— Saumya Dissanayake",
    authorImage: "",
    authorImageCaption: "",
  },

  {
    id: 22,
    author: "Sanka Dissanayake",
    relation: "",
    title: "",
    content:
      "Wishing you a very happy 60th birthday! 🎂 Can't believe you're 60. You look more like 40! 😄 Wishing you continued success, happiness, and a wonderful year ahead. Enjoy your special day!",
    language: "en",
    tapeText: "",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Sanka Dissanayake",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 23,
    author: "Niranga perera",
    relation: "",
    title: "",
    content: "Many happy returns of the day",
    language: "en",
    tapeText: "",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Niranga perera",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 24,
    author: "Anuki",
    relation: "",
    title: "",
    content:
      "Wishing you a very Happy Birthday, Uncle!\n\nHope you have a wonderful day filled with happiness and everything you enjoy. I feel fortunate to have been part of your book launch and I genuinely enjoyed reading the book.\n\nI also have fond memories of the time I got to work with Dewni on a few events after my A/Ls. If I'm remembering correctly, the paycheck you gave me for helping organise one of Procons' seminars was actually my very first paycheck! It's a small memory, but one I still look back on with a smile.\n\nWishing you good health, happiness and plenty of inspiration for all the wonderful things you continue to do. Have a lovely year ahead, Uncle!",
    language: "en",
    tapeText: "",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Anuki",
    authorImage: "",
    authorImageCaption: "",
  },

  {
    id: 26,
    author: "Dharshana Karunathilake",
    relation: "",
    title: "",
    content:
      "තිලකසිරිත්, මමත් එක ම කාර්යාලයක එකට වැඩ කළේ අපි වෘත්තීය ජීවිතය පටන්ගත් කාලෙ. හැමදා ම, මෙතැන ම ඉන්නවා කියලා නොහිතපු කාලෙ. නුදුරු අනාගතයේදි තමන්ගේ ම ව්‍යාපාරයක් ආරම්භ කරන අදහසේ ඔහු හිටපු කාලෙ.\n\nඑදා තිලකසිරි මට කිව්වා මම කවදාහරි එතැනින් ඉවත්වෙලා රැකියාවකට යනවා නම් ඔහුගේ ව්‍යාපාරයට එකතු වෙන්න කියලා.\n\nව්‍යාපාරයක් කරන එක ඉතා ම අභියෝගාත්මක වුණත් ඒකට මාත් එකතු කර ගත යුතුයි කියන තීරණය ගැනීමට ඔහු නිර්භීත වුණේ මාව බොහෝ කලක සිට ඇති ඇඳුනුම්කමක් නිසා නෙවෙයි.\n\nඒ වගේ ම ඒ ආරාධනය ඔස්සේ මා ගැන තැබූ විශ්වාසය මට කිසි දා අමතක වෙන්නේ නෑ.\n\nතිලකසිරි, ඔඛේ ජීවිතය නිරතුරුව ම නිරෝගී සහ ප්‍රීතිමත් වේවා! සුබ උපන්දිනයක් වේවා!",
    language: "si",
    tapeText: "",
    tapeColor: "gold",
    tag: "",
    signature: "— Dharshana Karunathilake",
    authorImage: "",
    authorImageCaption: "",
  },
  {
    id: 27,
    author: "Inoshi Jayaweera",
    relation: "",
    title: "",
    content:
      "Wishing you a truly wonderful 60th birthday filled with happiness, good health, peace, and countless blessings.\n\nI feel genuinely fortunate to have crossed paths with someone like you. Your kindness, generosity, and the countless opportunities you have given me to grow, prove myself, and shine have made a significant impact on my professional journey. You have not only been someone who opened doors for me professionally but also someone whose warmth and kindness have made me feel connected beyond the workplace.\n\nWhat I appreciate most is that your support has never been limited to professional opportunities. Being welcomed with such warmth by you and your family is something I genuinely cherish.\n\nAs you step into this beautiful milestone, I wish you nothing but the very best. May you continue to inspire people around you, enjoy the rewards of everything you have built, and create many more beautiful memories with your loved ones.\n\nThank you for being the wonderful person you are. Here's to 60 incredible years and many more blessed years ahead! ❤️",
    language: "en",
    tapeText: "",
    tapeColor: "emerald",
    tag: "",
    signature: "— Inoshi Jayaweera",
    authorImage: "",
    authorImageCaption: "",
  },

  {
    id: 31,
    author: "Sunil",
    relation: "",
    title: "",
    content:
      "My dear Thilak mallie. . Happy 60th Birthday! Looking at all you have achieved from a respected engineering career overseas to earning the admiration of the literary world with your contributions; books, columns and blogs, it’s amazing how grounded, humble, and kind you have always remained. You have a rare gift for understanding people and it shines through in your both your life and your writing; specially in the affectionate way you weave your wife, Ganga, and two daughters; Owini and Dewni, into your stories. Send you warmest greetings on your Birthday!",
    language: "en",
    tapeText: "සුනිල් - හික්කඩුව",
    tapeColor: "terracotta",
    tag: "",
    signature: "— Sunil",
    authorImage: "",
    authorImageCaption: "",
  },
];
