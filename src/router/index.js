import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import FAQ from "../views/FAQ.vue";

// PLAYER
import Character from "../views/player/Character.vue";
import Titles from "../views/player/Titles.vue";
import Engraving from "../views/player/Engraving.vue";
import Achievements from "../views/player/Achievements.vue";
import AdventurersTome from "../views/player/AdventurersTome.vue";
import CardCatalog from "../views/player/CardCatalog.vue";
import Guilds from "../views/player/Guilds.vue";

// CLASSES
import Assassin from "../views/classes/Assassin.vue";
import Gunner from "../views/classes/Gunner.vue";
import Mage from "../views/classes/Mage.vue";
import MartialArtist from "../views/classes/MartialArtist.vue";
import Warrior from "../views/classes/Warrior.vue";

// SUBCLASSES
// *Assassin subclasses
import Deathblade from "../views/subclasses/Deathblade.vue";
import Shadowhunter from "../views/subclasses/Shadowhunter.vue";
// *Gunner subclasses
import Gunslinger from "../views/subclasses/Gunslinger.vue";
import Artillerist from "../views/subclasses/Artillerist.vue";
import Deadeye from "../views/subclasses/Deadeye.vue";
import Sharpshooter from "../views/subclasses/Sharpshooter.vue";
// *Mage subclasses
import Bard from "../views/subclasses/Bard.vue";
import Sorceress from "../views/subclasses/Sorceress.vue";
// *Martial Artist subclasses
import Scrapper from "../views/subclasses/Scrapper.vue";
import Soulfist from "../views/subclasses/Soulfist.vue";
import Wardancer from "../views/subclasses/Wardancer.vue";
import Striker from "../views/subclasses/Striker.vue";
// *Warrior subclasses
import Berserker from "../views/subclasses/Berserker.vue";
import Gunlancer from "../views/subclasses/Gunlancer.vue";
import Paladin from "../views/subclasses/Paladin.vue";

// WORLD
import MokokoSeeds from "../views/world/MokokoSeeds.vue";
import SeedLocation from "../views/world/SeedLocation.vue";

const routes = [
  {
    path: "/", // routes should be lowercase
    name: "Main",
    component: Main
  },
  {
    path: "/faq", // routes should be lowercase
    name: "FAQ",
    component: FAQ
  },
  {
    path: "/character-customization", // routes should be lowercase
    name: "Character",
    component: Character
  },
  {
    path: "/titles", // routes should be lowercase
    name: "Titles",
    component: Titles
  },
  {
    path: "/engraving", // routes should be lowercase
    name: "Engraving",
    component: Engraving
  },
  {
    path: "/achievements", // routes should be lowercase
    name: "Achievements",
    component: Achievements
  },
  {
    path: "/adventurers-tome", // routes should be lowercase
    name: "AdventurersTome",
    component: AdventurersTome
  },
  {
    path: "/card-catalog", // routes should be lowercase
    name: "CardCatalog",
    component: CardCatalog
  },
  {
    path: "/guilds", // routes should be lowercase
    name: "Guilds",
    component: Guilds
  },
  // CLASSES
  {
    path: "/classes/assassin", // routes should be lowercase
    name: "Assassin",
    component: Assassin
  },
  {
    path: "/classes/gunner", // routes should be lowercase
    name: "Gunner",
    component: Gunner
  },
  {
    path: "/classes/mage", // routes should be lowercase
    name: "Mage",
    component: Mage
  },
  {
    path: "/classes/martial-artist", // routes should be lowercase
    name: "MartialArtist",
    component: MartialArtist
  },
  {
    path: "/classes/warrior", // routes should be lowercase
    name: "Warrior",
    component: Warrior
  },
  // SUBCLASSES
  // *Assassin subclasses
  {
    path: "/classes/assassin/deathblade", // routes should be lowercase
    name: "Deathblade",
    component: Deathblade
  },
  {
    path: "/classes/assassin/shadowhunter", // routes should be lowercase
    name: "Shadowhunter",
    component: Shadowhunter
  },
  // *Gunner subclasses
  {
    path: "/classes/gunner/gunslinger", // routes should be lowercase
    name: "Gunslinger",
    component: Gunslinger
  },
  {
    path: "/classes/gunner/artillerist", // routes should be lowercase
    name: "Artillerist",
    component: Artillerist
  },
  {
    path: "/classes/gunner/deadeye", // routes should be lowercase
    name: "Deadeye",
    component: Deadeye
  },
  {
    path: "/classes/gunner/sharpshooter", // routes should be lowercase
    name: "Sharpshooter",
    component: Sharpshooter
  },
  // *Mage subclasses
  {
    path: "/classes/mage/bard", // routes should be lowercase
    name: "Bard",
    component: Bard
  },
  {
    path: "/classes/mage/sorceress", // routes should be lowercase
    name: "Sorceress",
    component: Sorceress
  },
  // *Martial Artist subclasses
  {
    path: "/classes/martial-artist/scrapper", // routes should be lowercase
    name: "Scrapper",
    component: Scrapper
  },
  {
    path: "/classes/martial-artist/soulfist", // routes should be lowercase
    name: "Soulfist",
    component: Soulfist
  },
  {
    path: "/classes/martial-artist/wardancer", // routes should be lowercase
    name: "Wardancer",
    component: Wardancer
  },
  {
    path: "/classes/martial-artist/striker", // routes should be lowercase
    name: "Striker",
    component: Striker
  },
  // *Warrior subclasses
  {
    path: "/classes/warrior/berserker", // routes should be lowercase
    name: "Berserker",
    component: Berserker
  },
  {
    path: "/classes/warrior/gunlancer", // routes should be lowercase
    name: "Gunlancer",
    component: Gunlancer
  },
  {
    path: "/classes/warrior/paladin", // routes should be lowercase
    name: "Paladin",
    component: Paladin
  },
  // WORLD
  {
    path: "/classes/world/mokoko-seeds", // routes should be lowercase
    name: "MokokoSeeds",
    component: MokokoSeeds
  },
  {
    path: "/classes/world/mokoko-seeds/:seedLocation", // routes should be lowercase
    name: "SeedLocation",
    component: SeedLocation,
    props: true
  }
];

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "fw-bold", // In the navbar, the active view appears bold
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;