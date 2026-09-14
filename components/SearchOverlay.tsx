"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import type { SearchResult } from "@/lib/site";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchOverlay({ open, onClose }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setStatus("");
      inputRef.current?.focus();
    }
  }, [open]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = query.trim();
    if (!q) return;

    setStatus("Searching…");
    const response = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    const data = (await response.json()) as { results: SearchResult[] };
    setResults(data.results);
    setStatus(data.results.length ? "" : "No matches.");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 grid place-items-center bg-[#081820]/72"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className="absolute top-6 right-8 text-4xl leading-none text-white"
        aria-label="Close search"
        onClick={onClose}
      >
        ×
      </button>
      <form
        className="w-[min(640px,86vw)]"
        role="search"
        onSubmit={onSubmit}
      >
        <label className="sr-only" htmlFor="site-search">
          Search
        </label>
        <input
          ref={inputRef}
          id="site-search"
          name="q"
          type="search"
          placeholder="Search"
          autoComplete="off"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full border-0 border-b-2 border-white bg-transparent py-3.5 text-[28px] text-white outline-none placeholder:text-white/70"
        />
        {status ? <p className="mt-4 text-body text-white/80">{status}</p> : null}
        {results.length > 0 ? (
          <ul className="mt-6 space-y-3">
            {results.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-white hover:underline"
                  onClick={onClose}
                >
                  <span className="font-semibold">{item.title}</span>
                  <span className="mt-1 block text-caption text-white/75">
                    {item.summary}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </form>
    </div>
  );
}
