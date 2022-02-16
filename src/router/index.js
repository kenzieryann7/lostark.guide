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
  }
];

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "fw-bold", // In the navbar, the active view appears bold
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;