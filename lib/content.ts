import type { Community, Meeting } from "@/lib/types";

export const site = {
  name: "Conexión",
  description:
    "Una iglesia para gente que no iría a una iglesia. Somos conexión, amor y comunidad.",
  address: "Buenos Aires, Argentina",
  email: "hola@conexioniglesia.com",
};

export const communities: Community[] = [
  {
    slug: "kids",
    name: "Kids",
    eyebrow: "Infancias",
    description: "Un lugar alegre y seguro para conocer a Jesús, aprender y hacer amigos.",
    audience: "Niños y niñas",
    meeting: "Domingos · durante la reunión",
    accent: "#f4520c",
    foreground: "#fff5d0",
  },
  {
    slug: "youth",
    name: "Youth",
    eyebrow: "Adolescentes",
    description: "Una comunidad para crecer, compartir la vida y descubrir propósito.",
    audience: "Adolescentes",
    meeting: "Próximamente",
    accent: "#025eeb",
    foreground: "#ffffff",
  },
  {
    slug: "influence",
    name: "Influence",
    eyebrow: "Jóvenes",
    description: "Fe, vínculos y conversaciones reales para influenciar cada espacio.",
    audience: "Jóvenes",
    meeting: "Próximamente",
    accent: "#694ee8",
    foreground: "#ffffff",
  },
  {
    slug: "culture",
    name: "Culture",
    eyebrow: "Comunidad",
    description: "Familias y personas construyendo una cultura centrada en Jesús.",
    audience: "Todas las edades",
    meeting: "Próximamente",
    accent: "#ffb400",
    foreground: "#202020",
  },
  {
    slug: "united",
    name: "United",
    eyebrow: "Juntos",
    description: "Un espacio para reunirnos, adorar y vivir la fe en comunidad.",
    audience: "Comunidad",
    meeting: "Próximamente",
    accent: "#202020",
    foreground: "#f4f4f4",
  },
  {
    slug: "nosotras",
    name: "Nosotras",
    eyebrow: "Mujeres",
    description: "Un espacio cercano para compartir, crecer y caminar juntas.",
    audience: "Mujeres",
    meeting: "Encuentros especiales",
    accent: "#f83d5a",
    foreground: "#fff5ec",
  },
  {
    slug: "essentials",
    name: "Essentials",
    eyebrow: "Love of God",
    description: "Fundamentos para conocer el amor de Dios y fortalecer la fe.",
    audience: "Para quienes quieren dar el próximo paso",
    meeting: "Próximamente",
    accent: "#0053ad",
    foreground: "#ffffff",
  },
];

export const meetings: Meeting[] = [
  {
    id: "domingo",
    day: "Domingo",
    time: "18:00",
    title: "Reunión general",
    description: "Un tiempo para encontrarnos, adorar y compartir un mensaje de Jesús.",
    location: "Ubicación a confirmar",
  },
];

export const values = [
  ["Jesús", "Es el centro de todo lo que somos y hacemos."],
  ["Personas", "Cada historia importa y siempre hay lugar para alguien más."],
  ["Comunidad", "Creemos que la vida y la fe se construyen mejor juntos."],
  ["Propósito", "Queremos influenciar cada esfera de la sociedad con amor."],
] as const;
