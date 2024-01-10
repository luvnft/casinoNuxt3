import { defineStore } from "pinia";
import Home from "@/app/assets/home.svg";
import Promotion from "@/app/assets/promotion.svg";
import Game from "@/app/assets/game.svg";
import Tourney from "@/app/assets/tourney.svg";
import Support from "@/app/assets/support.svg";

interface navStore {
  label: string;
  icon: string;
  href: string;
}

export const useUnAuthHeaderNav = defineStore("header", {
  state: () => ({
    items: [
      { label: "Home", icon: Home, href: "/" },
      { label: "Promotion", icon: Promotion, href: "/offers" },
      { label: "All Games", icon: Game, href: "/#game" },
      { label: "Tournaments", icon: Tourney, href: "/tournament" },
      { label: "Support", icon: Support, href: "/support" },
    ] as navStore[],
  }),
});
