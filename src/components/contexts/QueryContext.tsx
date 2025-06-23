import { createContext, Dispatch, useReducer } from "react";
import {
  QueryAction,
  QueryState,
} from "../../lib/declarations/reduxInterfaces";
import { JSX } from "react/jsx-dev-runtime";
import { Parent } from "../../lib/declarations/interfaces";
export const initialQueryState: QueryState = {
  filters: { name: "", rank: "", country: "", coordinates: [] },
  results: [],
  loading: false,
};
export function queryReducer(
  state: QueryState,
  action: QueryAction
): QueryState {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      };
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    default:
      return state;
  }
}
export const QueryContext = createContext<
  [QueryState, Dispatch<QueryAction>] | undefined
>(undefined);
export default function QueryProvider({ children }: Parent): JSX.Element {
  const value = useReducer(queryReducer, initialQueryState);
  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
}
