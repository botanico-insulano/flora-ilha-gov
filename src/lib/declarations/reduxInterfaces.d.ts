import type { Taxon } from "./interfaces";

export interface QueryState {
  filters: {
    name: string;
    rank: string;
    country?: string;
    coordinates?: string[];
  };
  results: Taxon[];
  loading: boolean;
}
export type QueryAction =
  | {
      type: "SET_FILTER";
      payload: { key: keyof QueryState["filters"]; value: string };
    }
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: Taxon[] };
