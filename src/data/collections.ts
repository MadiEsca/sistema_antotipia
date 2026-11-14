import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    id: "direitos-humanos",
    slug: "direitos-humanos",
    name: "Direitos Humanos",
    description:
      "Mulheres que usaram o conhecimento, a voz e a coragem para defender direitos fundamentais, como o acesso à educação, e para ampliar as oportunidades de quem historicamente foi deixado de fora.",
    coverImage: "/images/artifacts/Malala_Yousafzai.png",
    artifactIds: [
      "ada-lovelace",
      "malala-yousafzai",
    ],
    year: 2024,
  },
  {
    id: "ciencias-e-tecnologia",
    slug: "ciencias-e-tecnologia",
    name: "Ciências e Tecnologia",
    description:
      "Pioneiras da física, da matemática e da computação, que desvendaram as leis da natureza, da matéria e do espaço e construíram as bases da tecnologia moderna, muitas vezes enfrentando o preconceito em áreas dominadas por homens.",
    coverImage: "/images/artifacts/Emmy_Noether.png",
    artifactIds: [
      "lise-meitner",
      "chien-shiung-wu",
      "emmy-noether",
      "elisa-frota-pessoa",
      "katherine-johnson",
    ],
    year: 2024,
  },
  {
    id: "ciencias-biologicas-e-da-saude",
    slug: "ciencias-biologicas-e-da-saude",
    name: "Ciências Biológicas e da Saúde",
    description:
      "Cientistas que investigaram a vida, os genes, as moléculas e as doenças, e cujas descobertas levaram a novos medicamentos, tratamentos e formas de enfrentar epidemias, salvando milhões de vidas.",
    coverImage: "/images/artifacts/Marie_Curie.png",
    artifactIds: [
      "barbara-mcclintock",
      "dorothy-hodgkin",
      "tu-youyou",
      "jaqueline-goes-de-jesus",
      "marie-curie",
    ],
    year: 2024,
  },
  {
    id: "ciencias-ambientais",
    slug: "ciencias-ambientais",
    name: "Ciências Ambientais",
    description:
      "Pesquisadoras e ativistas que estudaram e protegeram a natureza, dos chimpanzés da África às bactérias do solo e às florestas, mostrando que ciência, sustentabilidade e preservação caminham juntas.",
    coverImage: "/images/artifacts/Jane_Goodall.png",
    artifactIds: [
      "johanna-dobereiner",
      "wangari-maathai",
      "jane-goodall",
    ],
    year: 2024,
  },
  {
    id: "artes",
    slug: "artes",
    name: "Artes",
    description:
      "Mulheres que transformaram identidade, cultura e experiência pessoal em expressão artística, tornando-se símbolos de resistência, liberdade e representatividade feminina.",
    coverImage: "/images/artifacts/Frida_Kahlo.png",
    artifactIds: [
      "frida-kahlo",
    ],
    year: 2024,
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
