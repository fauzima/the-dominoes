"use client";

import { Double } from "@/utils/utils";
import { useEffect, useState } from "react";

export default function NumDisplay({ display }: { display: number[][] }) {
  const [double, setDouble] = useState<number>(0);

  useEffect(() => {
    setDouble(Double(display));
  }, [display]);

  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-white/25 p-2 sm:flex-row text-center">
      <div className="tracking-wide">
        <span>Array display: {"["}</span>
        {display.map((item, idx) => {
          return (
            <span key={idx}>
              {"["}
              {item.map((item, idx) => {
                return (
                  <span key={idx}>
                    {item}
                    {idx == 0 ? "," : ""}
                  </span>
                );
              })}
              {"]"}
              {idx !== display.length - 1 ? "," : "]"}
            </span>
          );
        })}
      </div>
      <p className="hidden sm:block">|</p>
      <p>
        Double number{"(s)"}:{" " + double}
      </p>
    </div>
  );
}
