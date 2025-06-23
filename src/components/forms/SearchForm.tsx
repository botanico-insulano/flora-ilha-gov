import React, { useCallback } from "react";
import { Box, TextField, MenuItem, Button, Stack } from "@mui/material";
import { useQuery } from "../../lib/hooks/useQuery";

const RANKS = ["Family", "Genus", "Species", "Subspecies"];

export const SearchForm: React.FC = () => {
  const [{ filters }, dispatch] = useQuery();

  const handleChange = useCallback(
    (key: "name" | "rank" | "country") =>
      (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({
          type: "SET_FILTER",
          payload: { key, value: e.target.value },
        }),
    [dispatch]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "FETCH_START" });

    // === fetch records ===
    const params = new URLSearchParams(filters as any).toString();
    const res = await fetch(`http://localhost:8080/api/taxa/search?${params}`);
    const data = await res.json();
    dispatch({ type: "FETCH_SUCCESS", payload: data });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={2}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          label="Scientific or Common Name"
          value={filters.name}
          onChange={handleChange("name")}
          fullWidth
        />

        <TextField
          select
          label="Rank"
          value={filters.rank}
          onChange={handleChange("rank")}
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          {RANKS.map((r) => (
            <MenuItem key={r} value={r}>
              {r}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Country"
          value={filters.country}
          onChange={handleChange("country")}
          sx={{ minWidth: 160 }}
        />

        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </Stack>
    </Box>
  );
};
