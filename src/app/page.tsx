"use client";

import Button from "@/components/Button";
import CardsDisplay from "@/components/CardsDisplay";
import Header from "@/components/Header";
import NumDisplay from "@/components/NumDisplay";
import ResetButton from "@/components/ResetButton";
import ThemeButton from "@/components/ThemeButton";
import {
  Flip,
  RemovebyTotal,
  RemoveDupes,
  SortAsc,
  SortDesc,
  source,
} from "@/utils/utils";
import React, { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState<number[][]>(source);
  const [totalNumber, setTotalNumber] = useState<string>("2");

  return (
    <div className="mx-auto flex size-full max-w-screen-lg flex-grow flex-col px-2 py-10 text-sm font-semibold sm:text-base">
      <Header text="The Dominoes" />
      <div className="mt-5 flex w-full flex-col rounded-2xl border border-neutral-500/50 bg-neutral-400/50 pb-5 transition-colors duration-700 ease-in-out dark:bg-transparent">
        <div className="flex items-center justify-between rounded-t-2xl bg-white/25 py-1 backdrop-blur">
          <div className="w-1/3"></div>
          <p className="w-1/3 text-center">Cards display</p>
          <p className="flex w-1/3 place-content-end">
            <ThemeButton />
          </p>
        </div>
        <CardsDisplay display={display} />
        <NumDisplay display={display} />
        <div className="flex w-full justify-center gap-2 pt-5">
          <button
            onClick={() => setDisplay(SortAsc(display))}
            aria-label="Ascending sort button"
          >
            <Button text="Sort (ASC)" />
          </button>
          <button onClick={() => setDisplay(source)} aria-label="Reset button">
            <ResetButton text="Reset" />
          </button>
          <button
            onClick={() => setDisplay(Flip(display))}
            aria-label="Flip button"
          >
            <Button text="Flip" />
          </button>
        </div>
        <div className="flex w-full justify-center gap-2 pt-2">
          <button
            onClick={() => setDisplay(SortDesc(display))}
            aria-label="Descending sort button"
          >
            <Button text="Sort (DESC)" />
          </button>

          <button
            onClick={() => setDisplay(RemoveDupes(display))}
            aria-label="Remove duplicates button"
          >
            <Button text="Rmv dupes" />
          </button>
        </div>
        <div className="mx-auto flex pt-2">
          <div className="group rounded-full">
            <button
              onClick={() => setDisplay(RemovebyTotal(display, totalNumber))}
              className="rounded-l-full bg-primary py-1 pl-4 pr-1 text-center text-white transition-colors ease-in-out group-hover:bg-accent"
            >
              Rmv by total of
            </button>
            <input
              name="removeTotal"
              id="removeTotal"
              type="number"
              value={totalNumber}
              min={2}
              max={12}
              onChange={(e) => setTotalNumber(e.target.value)}
              className="w-12 rounded-r-full border-y-4 border-r-4 border-primary px-1 transition-colors ease-in-out group-hover:border-accent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
