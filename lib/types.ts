export type CommunityTheme =
  | "youth"
  | "influence"
  | "culture"
  | "united"
  | "kids"
  | "nosotras"
  | "essentials";

export type Community = {
  slug: CommunityTheme;
  name: string;
  eyebrow: string;
  description: string;
  audience: string;
  meeting: string;
  accent: string;
  foreground: string;
};

export type Meeting = {
  id: string;
  day: string;
  time: string;
  title: string;
  description: string;
  location: string;
  mapUrl?: string;
};
