// Criação dos tipos
export type Category =
  | "Ciências e Tecnologia"
  | "Ciências Biológicas e da Saúde"
  | "Ciências Ambientais"
  | "Direitos Humanos"
  | "Artes"
  | "Processo Experimental";

export type SortOption = "recente" | "antigas" | "alfabetico" | "destaque";

export type Scientists = 
  | "Ciências e Tecnologia"
  | "Ciências Biológicas e da Saúde"
  | "Ciências Ambientais"
  | "Direitos Humanos"
  | "Artes"
  | "Processo Experimental"
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
  | "Marie Curie"
  | "Papel Tingido com Extrato de Amora"
  | "Pesagem da Cúrcuma"
  | "Extratos de Amora em Três Solventes"
  | "Álcool 54° GL"
  | "Etanol Combustível"
  | "Materiais do Experimento"
  | "Aplicação do Extrato com Pincel"
  | "Pesagem das Amoras"
  | "Comparação dos Extratos"
  | "Medição do Álcool"
  | "Álcool 70%"
  | "Extrato de Cúrcuma"
  | "Cúrcuma em Pó nos Béqueres"
  | "Materiais e Solventes"
  | "Preparando a Pesagem da Cúrcuma";

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
    | "Artes"
    | "Processo Experimental";
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
