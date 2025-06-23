import { useContext } from "react";
import { QueryContext } from "../../components/contexts/QueryContext";
import { QueryState, QueryAction } from "../declarations/reduxInterfaces";
export const useQuery = (): [QueryState, React.Dispatch<QueryAction>] => {
  const ctx = useContext<[QueryState, React.Dispatch<QueryAction>] | undefined>(
    QueryContext
  );
  if (!ctx) throw new Error("useQuery must be used inside QueryProvider");
  return ctx;
};
