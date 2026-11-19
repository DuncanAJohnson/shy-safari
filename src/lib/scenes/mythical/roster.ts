/**
 * The mythical Roster: every Creature that can appear in this Scene.
 *
 * Creatures from the world's myths and folk tales, gathered in one enchanted
 * valley: the fairy, unicorn, troll and will-o'-the-wisp of European tales,
 * the nine-tailed kitsune of Japan, the moon rabbit of East Asia, the qilin of
 * China, the haechi of Korea, the bakunawa and duende of the Philippines, the
 * alebrije of Mexico, the carbunclo of Chile's mines and Ogopogo of Canada's
 * Okanagan Lake. Most of the newer ones were picked by followers asked which
 * Creatures from outside Western Europe the Scene should have.
 *
 * It has the savanna's shape of 6 Common, 8 Uncommon and 3 Rare.
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
    slug: "will-o-the-wisp",
    tier: "common",
    width: 30,
    motion: "hover",
    parts: ["part-tail", "part-pulse"],
  },
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
    slug: "duende",
    tier: "common",
    width: 46,
    motion: "hop",
    parts: ["part-arms"],
  },
  {
    slug: "carbunclo",
    tier: "common",
    width: 50,
    motion: "graze",
    parts: ["part-ears", "part-pulse"],
  },
  {
    slug: "alebrije",
    tier: "common",
    width: 75,
    motion: "trot",
    parts: ["part-tail", "part-wings"],
  },

  // Uncommon
  {
    slug: "mermaid",
    tier: "uncommon",
    width: 110,
    motion: "swim",
    parts: ["part-tail", "part-arms"],
  },
  {
    slug: "haechi",
    tier: "uncommon",
    width: 120,
    motion: "trot",
    parts: ["part-tail", "part-head"],
  },
  {
    slug: "griffin",
    tier: "uncommon",
    width: 150,
    motion: "soar",
    parts: ["part-wings", "part-tail"],
  },
  {
    slug: "troll",
    tier: "uncommon",
    width: 150,
    motion: "graze",
    parts: ["part-tail", "part-arms"],
  },
  {
    slug: "kitsune",
    tier: "uncommon",
    width: 160,
    motion: "trot",
    parts: ["part-ears", "part-tail"],
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
  {
    slug: "ogopogo",
    tier: "uncommon",
    width: 230,
    motion: "swim",
    parts: ["part-body", "part-head"],
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
