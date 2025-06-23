export interface Taxon {
  id: string;
  scientificName: string;
  taxonomicRank: string;
  parent?: any;
  commonName?: string;
  country?: string;
  coordinates?: string[];
}
export interface Parent {
  children: ReactNode;
}
