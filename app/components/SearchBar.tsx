"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full gap-4 items-center py-8">
      <div className="flex-grow bg-white">
        <TextField
          id="outlined-search"
          color="secondary"
          label="Search movies..."
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
        />
      </div>
      <div className="h-full">
        <Button color="secondary" variant="contained" disableElevation type="submit" size="large" className="h-full">
          Search
        </Button>
      </div>
    </form>
  );
}
