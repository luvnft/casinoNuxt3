import { defineStore } from "pinia";

interface dropDownStore {
  label: string;
  href: string;
}

export const useDropDown = defineStore("dropdown", {
  state: () => ({
    items: [
      { href: "/account-settings", label: "Account settings" },
      { href: "/support", label: "Support" },
      { href: "/license", label: "License" },
      { href: "/sign-out", label: "Sign out" },
    ] as dropDownStore[],
  }),
});
