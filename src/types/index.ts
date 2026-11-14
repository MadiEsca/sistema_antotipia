// Criação dos tipos
export type Category =
  | "Ciências e Tecnologia"
  | "Ciências Biológicas e da Saúde"
  | "Ciências Ambientais"
  | "Direitos Humanos"
  | "Artes";

export type SortOption = "recente" | "antigas" | "alfabetico" | "destaque";

export type Scientists = 
  | "Ada Lovelace"
  | "Lise Meitner" 
  | "Barbara McClintock"
  | "Chien-Shiung Wu"
  | "Dorothy Hodgkin"
  | "Emmy Noether"
  | "Tu Youyou"
  | "Jaqueline Goes de Jesus"
  | "Johanna Dobereiner"
  | "Elisa Frota-Pessoa"
  | "Katherine Johnson"
  | "Malala Yousafzai"
  | "Wangari Maathai"
  | "Jane Goodall"
  | "Frida Kahlo"
  | "Marie Curie";

// Criação das interfaces que serão utilizadas
export interface Artifact {
  id: string;
  slug: string;
  name: Scientists;
  category: Category;
  year: number;
  description: string;
  longDescription?: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  collectionIds?: string[];
  status?:
    | "Ciências e Tecnologia"
    | "Ciências Biológicas e da Saúde"
    | "Ciências Ambientais"
    | "Direitos Humanos"
    | "Artes";
  dimensions?: string;
  medium?: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  artifactIds: string[];
  year?: number;
}

export interface SearchFilters {
  query: string;
  category: Category | "";
  sort: SortOption;
}
