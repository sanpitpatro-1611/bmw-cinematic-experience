export interface StoryStage {
  stage: number;
  name: string;
  subtitle: string;
  frameStart: number;
  frameEnd: number;
  description: string;
}

export const TOTAL_FRAMES = 269;

// Array of frame paths formatted as /frames/ezgif-frame-001.jpg -> 269
export const HERO_FRAMES: string[] = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const index = (i + 1).toString().padStart(3, "0");
  return `/frames/ezgif-frame-${index}.jpg`;
});

export const HERO_STAGES: StoryStage[] = [
  {
    stage: 1,
    name: "DARKNESS",
    subtitle: "Absolute Silence",
    frameStart: 1,
    frameEnd: 40,
    description: "In the pitch-black void of the Munich wind tunnel, anticipation gathers form.",
  },
  {
    stage: 2,
    name: "THE EYES",
    subtitle: "Signature Laserlight",
    frameStart: 41,
    frameEnd: 75,
    description: "Hexagonal BMW Laserlight elements awaken with crisp, cold-white luminescence.",
  },
  {
    stage: 3,
    name: "THE FACE",
    subtitle: "Iconic Silhouette",
    frameStart: 76,
    frameEnd: 110,
    description: "Grazing studio light sculpts the hood creases and cascades over the kidney grille.",
  },
  {
    stage: 4,
    name: "THE ROUNDEL",
    subtitle: "A Century of Bavarian Heritage",
    frameStart: 111,
    frameEnd: 140,
    description: "The blue-and-white BMW emblem takes center stage, framed by high-gloss black double-bars.",
  },
  {
    stage: 5,
    name: "THE FORM",
    subtitle: "Dynamic Stance",
    frameStart: 141,
    frameEnd: 180,
    description: "The camera tracks fluidly around the front three-quarter arc, revealing wide M arches and wheels.",
  },
  {
    stage: 6,
    name: "THE PROFILE",
    subtitle: "Aerodynamic Gran Coupé",
    frameStart: 181,
    frameEnd: 225,
    description: "A sweeping coupé roofline flows into muscular rear haunches and sculpted aerodynamic sills.",
  },
  {
    stage: 7,
    name: "THE REVEAL",
    subtitle: "BMW M8 Competition Gran Coupé",
    frameStart: 226,
    frameEnd: 269,
    description: "The machine fully materialized: 617 HP, 4.4L TwinPower Turbo V8, and uncompromising precision.",
  },
];
