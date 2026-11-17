/**
 * The mythical Roster: every Creature that can appear in this Scene.
 *
 * Creatures from the world's myths and folk tales, gathered in one enchanted
 * valley: the fairy and unicorn of European tales, the kitsune of Japan, the
 * moon rabbit of East Asia, the qilin of China, the bakunawa of the
 * Philippines, the boto of the Amazon and the carbunclo of Chile's mines.
 *
 * Fourteen are drawn so far. The garden gnome, will-o'-the-wisp (both
 * Common) and centaur (Uncommon) are still to come, which will give it the
 * savanna's shape of 8 Common, 6 Uncommon and 3 Rare.
 *
 * Slugs match the SVG filenames in `./creatures/`; `width` is the intended
 * on-screen width against a 1920px-wide Scene. `parts` lists the part-*
 * classes actually present in each file.
 *
 * The Scene has three levels (`scenes/motion.ts`): the meadow, where the
 * walkers stand with their feet on the bottom edge of their viewBox as on the
 * savanna, the lake behind it, where the swimmers are drawn from the waterline
 * up (`swim`), and the sky, for the fliers.
 */

import type { CreatureDef } from "$lib/scenes/types";

export const MYTHICAL_ROSTER: CreatureDef[] = [
  // Common
  {
    slug: "fairy",
    tier: "common",
    width: 36,
    motion: "hover",
    parts: ["part-wings"],
  },
  {
    slug: "moon-rabbit",
    tier: "common",
    width: 44,
    motion: "hop",
    parts: ["part-ears", "part-arms"],
  },
  {
    slug: "carbunclo",
    tier: "common",
    width: 50,
    motion: "graze",
    parts: ["part-ears", "part-pulse"],
  },
  {
    slug: "fire-salamander",
    tier: "common",
    width: 70,
    motion: "graze",
    // Drawn side on, so it turns to face the way it walks.
    flips: true,
    parts: ["part-tail", "part-pulse"],
  },
  {
    slug: "kitsune",
    tier: "common",
    width: 90,
    motion: "trot",
    parts: ["part-ears", "part-tail"],
  },
  {
    slug: "boto",
    tier: "common",
    width: 130,
    motion: "swim",
    parts: ["part-tail"],
  },

  // Uncommon
  {
    slug: "baby-dragon",
    tier: "uncommon",
    width: 80,
    motion: "trot",
    parts: ["part-tail", "part-wings"],
  },
  {
    slug: "mermaid",
    tier: "uncommon",
    width: 110,
    motion: "swim",
    parts: ["part-tail", "part-arms"],
  },
  {
    slug: "griffin",
    tier: "uncommon",
    width: 150,
    motion: "soar",
    parts: ["part-wings", "part-tail"],
  },
  {
    slug: "unicorn",
    tier: "uncommon",
    width: 170,
    motion: "graze",
    parts: ["part-tail", "part-head"],
  },
  {
    slug: "qilin",
    tier: "uncommon",
    width: 170,
    motion: "trot",
    parts: ["part-tail", "part-head"],
  },

  // Rare — the jackpot. One each per Session, at most.
  {
    slug: "phoenix",
    tier: "rare",
    width: 150,
    motion: "soar",
    parts: ["part-wings", "part-tail", "part-pulse"],
  },
  {
    slug: "dragon",
    tier: "rare",
    width: 260,
    motion: "soar",
    parts: ["part-wings", "part-tail"],
  },
  {
    slug: "bakunawa",
    tier: "rare",
    width: 340,
    motion: "swim",
    parts: ["part-body", "part-head"],
  },
];
