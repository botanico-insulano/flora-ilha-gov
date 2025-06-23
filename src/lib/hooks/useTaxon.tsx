import axios from "axios";
import type { Taxon } from "../declarations/interfaces";
import { useEffect, useState } from "react";
export default function useTaxon(id: string): Taxon | null {
  const [taxon, setTaxon] = useState<Taxon | null>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/taxa/${id}`)
      .then((res) => setTaxon(res.data));
  }, [id]);
  return taxon;
}
