/**
 * Archival photo album data — extracted verbatim from reference/code.html.
 *
 * 22 curated Polaroid snapshots spanning Arthur's six decades (1964–2024).
 * Image URLs are preserved exactly as authored in the source.
 */

export type WashiTone = 'terracotta' | 'gold' | 'blush';

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
    id: 1,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI_wPVWZbcFfFe_VKiNjaT2rx0oNRCQtpl1W4pzvIEJ4OW07Mf1K-TRGHSo9CJ62BhIwsaFbOsEz0pepqW0lkCwvAHXQYZh-wKZaw6ADrUJvLdK3zFPQFGWp_VxnBbaVbec4L2OaPkpl3volBmuG7PHsMjkYnWczTnNnc6en8LztmZk6JlRL3yyVqbIBnu9Beklc6-N8OOUQofzdwKQbBlP2BNYub_GAtH6Sq0IZwa",
    title: "Arthur’s First Steps in St. Albans",
    caption: "“Curious eyes, woolen booties, and an endless desire to explore every garden patch.”",
    year: "1964",
    rotation: -1.5,
    tapeTone: "terracotta",
  },
  {
    id: 2,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyMHR_jTV18Ir_oUSC8-J2js6p7vNNSIaZaffX_jiST5lwoisxQOLVTRds5MhzLWxgWflX677Ugkr7dYSpAwrRNLfsAte1L_Qt0rIoWJziFsboN0dR1fFgG3jJ_aw4-196Tg4zwfvWyx7k8pqS75TKef7DMl-KvBkieUaYPVJW6StpyaqJQC6M91BA9sVBwSwGtEigHTRbvbzrewM91MRydcH_HvbzHoTR9hMzna1l",
    title: "Arthur's First Big Bike Ride",
    caption: "“Wind in the hair, salt spray in the air, and training wheels finally tossed away.”",
    year: "1970",
    rotation: 2,
    tapeTone: "gold",
  },
  {
    id: 3,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuO0eSBj6EQVnBtKE0NivIjsiZdg5Xa7N-aeJNLTrMb6FU-QBM4TmncYjdEk7x6XZlZsEjy8kRedYGyJUIwUpRoC4aM5o4HqO9eQa6tCwkGhHEI_h322IehxgTNqZB-X1zzkZtPGwB7JxeIibhedJRFreGDm5FOOCjby-9TI1XBy5hxSEpEt2aw-ChRfVKD9LqOZKspZ5aRJ37OuQIMXyjegsWH0jZN6XHvzF7umk5",
    title: "Devon Coast Summer Holiday",
    caption: "“Eating melted butterscotch ice cream by the stone lighthouse with sister Elena.”",
    year: "1975",
    rotation: -1,
    tapeTone: "blush",
  },
  {
    id: 4,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAaC7F3tQgdzDpsSzKQs4hPNMa5Auel9X56P2zDgOFh7uQHJs-SMSd-RsbNmNm3EqkI1qFlArgxPfWs6R9Zt1Kb_hhB8VHSL6CpanBCQW3Vl01qgYZfqZ3B5s08TwjhwV_sYctInMdYBWYF6gxDwCYZXiXsvNYnu_aQKYidRLw5rSI9sqPwESzp7TBmrHJztE5Iqyt4Unp2MwD-jKAwSvS0NrJ5NYGU1ij-XP8ubow",
    title: "Marcus & Art: University Days",
    caption: "“Shared flats, philosophical debates until 3 AM, and burnt toast dinners.”",
    year: "1978",
    rotation: 1.5,
    tapeTone: "terracotta",
  },
  {
    id: 5,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7eKovRDP396zt0iJf33x2pFjYC7Cn7tansSOCI7xT7AOgBc1ZR-qa4gXReKN0RsZ-yptSV02mMIo3G5ZgF8_8Mykz5tlcxEq4DEGh8vQBixBsU41jbNxcZxQMX-RDfj9qp1LdGP-PfKNOLrSM0wzNQokjbw5Bb3YbMg4w_6Q7gxbwlvl0Etc5d8cK9U97gO7FuIrYLrWZrm_uZFFmP-CHCCLff3N2PdOntblw-SJo",
    title: "Oxford Graduation Day ♥",
    caption: "“The first in the family to hold the scroll. Proud parents beaming through tears.”",
    year: "1984",
    rotation: -2,
    tapeTone: "gold",
  },
  {
    id: 6,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAerGh59XzscT6NQvhXus_w3NJahsNuihfU6pjMZqQ_HA1Fu0urUcX4Hb_-SQQdIltArwG9DaWvMyDB_9rfLa2Tsjukl_7QR8XNPEZr--KncZdbK_Bpxu_hN9mgfecWtiyttmZm8-DOvdKygmbArvwJMbpIfPLW9R6Oc4iSFk5mrFRM9cKqEQm2kIRcTbZX81YCXw6Oo7Q6kS3kxEn3RozosC4iVfRx0qSCw5qvGBgw",
    title: "The Wedding: Arthur & Sarah",
    caption: "“The sweetest day of our lives. A chapel filled with wild lavender and promises.”",
    year: "1988",
    rotation: 1,
    tapeTone: "terracotta",
  },
  {
    id: 7,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuANCYv2mjubZIs36JUX7jE3BzBLIKCDlqULj0f87ly-G-TPlQn3KZSIol1yAhq-z_v_eIKdURBjvSa4oXqXSy6URNjuBq0qwP0QIxV1mjadULQsX5sZhqsN5-C7TR8Myhn0GVEWeSFX5KXnwpd1-r4ASR-2F1GV1oUKtfhOuEihwPUC3MQV8rw1Q1cnqrzHonCpyfHyp0CXR-l7iU-nu7oyBuiPu3FiXll3Bvp8THml",
    title: "First House: Moving into Elmwood",
    caption: "“Paint splatters on your overalls and painting our first living room forest green.”",
    year: "1991",
    rotation: -1.5,
    tapeTone: "blush",
  },
  {
    id: 8,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuO0eSBj6EQVnBtKE0NivIjsiZdg5Xa7N-aeJNLTrMb6FU-QBM4TmncYjdEk7x6XZlZsEjy8kRedYGyJUIwUpRoC4aM5o4HqO9eQa6tCwkGhHEI_h322IehxgTNqZB-X1zzkZtPGwB7JxeIibhedJRFreGDm5FOOCjby-9TI1XBy5hxSEpEt2aw-ChRfVKD9LqOZKspZ5aRJ37OuQIMXyjegsWH0jZN6XHvzF7umk5",
    title: "Welcoming Clara into the World",
    caption: "“A bundle smaller than your forearm, held by the most loving new father.”",
    year: "1993",
    rotation: 1.2,
    tapeTone: "gold",
  },
  {
    id: 9,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVdzjmoK99GcrgPNv2F2rpm8m92aJNDdTldRZ5FOf_1JpjhBmKQFm9f5cFZ2EZpoiryfX2CpPQlMkv2xvsiNGzcPI9wsRd1ATdP2XK1sY-NSTA_W17tqqKNGMDkJgUCtkEGUtG1kKD2-KJHGSzU8K8JqW4ZCDY3LNEVj-jCtlMDJXL0Qnd7kfmEhgH2YIWglL4P5M0W_23osVXfIcuwtthUl6Ysrw1DETTGNXLch-9",
    title: "Julian’s First Camping Trip",
    caption: "“Roasting marshmallows over the fire and teaching young Julian constellations.”",
    year: "1996",
    rotation: -1,
    tapeTone: "terracotta",
  },
  {
    id: 10,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVdzjmoK99GcrgPNv2F2rpm8m92aJNDdTldRZ5FOf_1JpjhBmKQFm9f5cFZ2EZpoiryfX2CpPQlMkv2xvsiNGzcPI9wsRd1ATdP2XK1sY-NSTA_W17tqqKNGMDkJgUCtkEGUtG1kKD2-KJHGSzU8K8JqW4ZCDY3LNEVj-jCtlMDJXL0Qnd7kfmEhgH2YIWglL4P5M0W_23osVXfIcuwtthUl6Ysrw1DETTGNXLch-9",
    title: "Chess by the Hearth with the Kids",
    caption: "“Patience and grace across 64 squares while the winter gale rattled outside.”",
    year: "1998",
    rotation: 1.8,
    tapeTone: "gold",
  },
  {
    id: 11,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuANCYv2mjubZIs36JUX7jE3BzBLIKCDlqULj0f87ly-G-TPlQn3KZSIol1yAhq-z_v_eIKdURBjvSa4oXqXSy6URNjuBq0qwP0QIxV1mjadULQsX5sZhqsN5-C7TR8Myhn0GVEWeSFX5KXnwpd1-r4ASR-2F1GV1oUKtfhOuEihwPUC3MQV8rw1Q1cnqrzHonCpyfHyp0CXR-l7iU-nu7oyBuiPu3FiXll3Bvp8THml",
    title: "Building the Garden Woodshop",
    caption: "“Every timber squared by your own hands. Cedar shavings smelling like autumn.”",
    year: "2001",
    rotation: -0.8,
    tapeTone: "blush",
  },
  {
    id: 12,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuANCYv2mjubZIs36JUX7jE3BzBLIKCDlqULj0f87ly-G-TPlQn3KZSIol1yAhq-z_v_eIKdURBjvSa4oXqXSy6URNjuBq0qwP0QIxV1mjadULQsX5sZhqsN5-C7TR8Myhn0GVEWeSFX5KXnwpd1-r4ASR-2F1GV1oUKtfhOuEihwPUC3MQV8rw1Q1cnqrzHonCpyfHyp0CXR-l7iU-nu7oyBuiPu3FiXll3Bvp8THml",
    title: "Father & Son: First Oak Blanket Chest",
    caption: "“Dovetail joints cut by hand. A workshop moment sealed into living history.”",
    year: "2004",
    rotation: 1.4,
    tapeTone: "terracotta",
  },
  {
    id: 13,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAaC7F3tQgdzDpsSzKQs4hPNMa5Auel9X56P2zDgOFh7uQHJs-SMSd-RsbNmNm3EqkI1qFlArgxPfWs6R9Zt1Kb_hhB8VHSL6CpanBCQW3Vl01qgYZfqZ3B5s08TwjhwV_sYctInMdYBWYF6gxDwCYZXiXsvNYnu_aQKYidRLw5rSI9sqPwESzp7TBmrHJztE5Iqyt4Unp2MwD-jKAwSvS0NrJ5NYGU1ij-XP8ubow",
    title: "Lake District Rambles with Mac",
    caption: "“Wind blowing mist across Derwentwater. Tea never tasted as glorious.”",
    year: "2007",
    rotation: -1.5,
    tapeTone: "gold",
  },
  {
    id: 14,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAerGh59XzscT6NQvhXus_w3NJahsNuihfU6pjMZqQ_HA1Fu0urUcX4Hb_-SQQdIltArwG9DaWvMyDB_9rfLa2Tsjukl_7QR8XNPEZr--KncZdbK_Bpxu_hN9mgfecWtiyttmZm8-DOvdKygmbArvwJMbpIfPLW9R6Oc4iSFk5mrFRM9cKqEQm2kIRcTbZX81YCXw6Oo7Q6kS3kxEn3RozosC4iVfRx0qSCw5qvGBgw",
    title: "Silver Wedding Anniversary in Florence",
    caption: "“Holding Sarah's hand along the Ponte Vecchio at twilight. Twenty-five years young.”",
    year: "2010",
    rotation: 2,
    tapeTone: "terracotta",
  },
  {
    id: 15,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlLKnUu_UzBH_whJmmIBwO0nsVE0PBczg8aXcV5aaUGGbAKPLnhnbcbeDOtkdAxjQcznyt96g5I1UBxL0cAZ9qv3i_M9IxpIjD8kZ079_7S7mCRWHjEkqvbgpB9FNm7e82yALFD5vJ4DxrURS-1DAjKRRfZeygcDpP7u_RIBIqvQsEtNvgAnpv-STjSk1jYz_XXaw5gNpc_DsmNXZRcBeEMqOOt19ODz0pte3HDRwT",
    title: "Arthur’s 50th Birthday Surprise!",
    caption: "“When all fifty guests hid behind the garage shrubs with noisemakers.”",
    year: "2014",
    rotation: -1.2,
    tapeTone: "blush",
  },
  {
    id: 16,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7eKovRDP396zt0iJf33x2pFjYC7Cn7tansSOCI7xT7AOgBc1ZR-qa4gXReKN0RsZ-yptSV02mMIo3G5ZgF8_8Mykz5tlcxEq4DEGh8vQBixBsU41jbNxcZxQMX-RDfj9qp1LdGP-PfKNOLrSM0wzNQokjbw5Bb3YbMg4w_6Q7gxbwlvl0Etc5d8cK9U97gO7FuIrYLrWZrm_uZFFmP-CHCCLff3N2PdOntblw-SJo",
    title: "Clara’s Wedding Day: Father of the Bride",
    caption: "“A tear in your eye and an unforgettable waltz that had everybody crying.”",
    year: "2017",
    rotation: 1,
    tapeTone: "gold",
  },
  {
    id: 17,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuO0eSBj6EQVnBtKE0NivIjsiZdg5Xa7N-aeJNLTrMb6FU-QBM4TmncYjdEk7x6XZlZsEjy8kRedYGyJUIwUpRoC4aM5o4HqO9eQa6tCwkGhHEI_h322IehxgTNqZB-X1zzkZtPGwB7JxeIibhedJRFreGDm5FOOCjby-9TI1XBy5hxSEpEt2aw-ChRfVKD9LqOZKspZ5aRJ37OuQIMXyjegsWH0jZN6XHvzF7umk5",
    title: "Grandpa Arthur Meets Maya",
    caption: "“The gentlest giant. You cradled her tiny head and whispered lifelong promises.”",
    year: "2019",
    rotation: -1.6,
    tapeTone: "terracotta",
  },
  {
    id: 18,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAerGh59XzscT6NQvhXus_w3NJahsNuihfU6pjMZqQ_HA1Fu0urUcX4Hb_-SQQdIltArwG9DaWvMyDB_9rfLa2Tsjukl_7QR8XNPEZr--KncZdbK_Bpxu_hN9mgfecWtiyttmZm8-DOvdKygmbArvwJMbpIfPLW9R6Oc4iSFk5mrFRM9cKqEQm2kIRcTbZX81YCXw6Oo7Q6kS3kxEn3RozosC4iVfRx0qSCw5qvGBgw",
    title: "Quiet Allotment Harvest",
    caption: "“Record-breaking pumpkins and a basket full of sweet heirloom tomatoes.”",
    year: "2021",
    rotation: 1.3,
    tapeTone: "blush",
  },
  {
    id: 19,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuO0eSBj6EQVnBtKE0NivIjsiZdg5Xa7N-aeJNLTrMb6FU-QBM4TmncYjdEk7x6XZlZsEjy8kRedYGyJUIwUpRoC4aM5o4HqO9eQa6tCwkGhHEI_h322IehxgTNqZB-X1zzkZtPGwB7JxeIibhedJRFreGDm5FOOCjby-9TI1XBy5hxSEpEt2aw-ChRfVKD9LqOZKspZ5aRJ37OuQIMXyjegsWH0jZN6XHvzF7umk5",
    title: "Storytime Under the Bedside Lamp",
    caption: "“Doing all the voices from the Peter Rabbit books until Maya fell asleep.”",
    year: "2022",
    rotation: -0.7,
    tapeTone: "gold",
  },
  {
    id: 20,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlLKnUu_UzBH_whJmmIBwO0nsVE0PBczg8aXcV5aaUGGbAKPLnhnbcbeDOtkdAxjQcznyt96g5I1UBxL0cAZ9qv3i_M9IxpIjD8kZ079_7S7mCRWHjEkqvbgpB9FNm7e82yALFD5vJ4DxrURS-1DAjKRRfZeygcDpP7u_RIBIqvQsEtNvgAnpv-STjSk1jYz_XXaw5gNpc_DsmNXZRcBeEMqOOt19ODz0pte3HDRwT",
    title: "Arthur's Famous Summer Backyard BBQ",
    caption: "“Grilling apron on, secret seasoning mix, and laughter rolling across the lawn.”",
    year: "2023",
    rotation: 2,
    tapeTone: "terracotta",
  },
  {
    id: 21,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAerGh59XzscT6NQvhXus_w3NJahsNuihfU6pjMZqQ_HA1Fu0urUcX4Hb_-SQQdIltArwG9DaWvMyDB_9rfLa2Tsjukl_7QR8XNPEZr--KncZdbK_Bpxu_hN9mgfecWtiyttmZm8-DOvdKygmbArvwJMbpIfPLW9R6Oc4iSFk5mrFRM9cKqEQm2kIRcTbZX81YCXw6Oo7Q6kS3kxEn3RozosC4iVfRx0qSCw5qvGBgw",
    title: "Autumn Tea in the Garden Nook",
    caption: "“A calm October afternoon with Arthur savoring Earl Grey and birdsong.”",
    year: "2023",
    rotation: -1.4,
    tapeTone: "gold",
  },
  {
    id: 22,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAerGh59XzscT6NQvhXus_w3NJahsNuihfU6pjMZqQ_HA1Fu0urUcX4Hb_-SQQdIltArwG9DaWvMyDB_9rfLa2Tsjukl_7QR8XNPEZr--KncZdbK_Bpxu_hN9mgfecWtiyttmZm8-DOvdKygmbArvwJMbpIfPLW9R6Oc4iSFk5mrFRM9cKqEQm2kIRcTbZX81YCXw6Oo7Q6kS3kxEn3RozosC4iVfRx0qSCw5qvGBgw",
    title: "The Milestone: Sixty Years Young",
    caption: "“Surrounded by sixty years of love, grandchildren on knees, and hearts full.”",
    year: "2024",
    rotation: 1,
    tapeTone: "terracotta",
  },
];
