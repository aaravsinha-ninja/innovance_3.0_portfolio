import { User } from "../types/types";

export const userData: User = {
  name: "Alice",
  email: "alice@example.com",
};

export const footer = {
  copyRightText: "all rights reserved",
  email: userData.email,
};

export const navlinks = [
  {
    name: "WORKS",
    link: "",
  },
  {
    name: "CONTACTS",
    link: "",
  },
];

export const navbar_details = {
  logo: "https://static.vecteezy.com/system/resources/previews/006/816/978/non_2x/code-icon-coding-symbol-coding-programming-sign-free-vector.jpg",
  name: userData.name,
};

export const socials = [
  {
    link: "https://dribbble.com/",
    icon: "https://img.icons8.com/?size=100&id=Wkmw3VcFPr8T&format=png&color=000000",
    name: "dribbble",
  },
  {
    link: "https://github.com/",
    icon: "https://img.icons8.com/?size=100&id=63777&format=png&color=000000",
    name: "github",
  },
  {
    link: "https://facebook.com/",
    icon: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000",
    name: "facebook",
  },
  {
    link: "https://twitter.com/",
    icon: "https://img.icons8.com/?size=100&id=13963&format=png&color=000000",
    name: "twitter",
  },
];
