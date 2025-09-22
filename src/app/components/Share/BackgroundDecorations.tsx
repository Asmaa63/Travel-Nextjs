"use client";

import React, { useEffect, useState } from "react";

type Shape = {
  top: string;
  left?: string;
  right?: string;
  size: number;
  delay: string;
  type: "circle" | "plane";
  color?: string;
};

export default function BackgroundDecorations() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = ["bg-blue-400", "bg-orange-400", "bg-green-400", "bg-pink-400"];

    const generated: Shape[] = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      ...(Math.random() > 0.5
        ? { left: `${Math.random() * 50}%` }
        : { right: `${Math.random() * 50}%` }),
      size: Math.floor(Math.random() * 20) + 8,
      delay: `${Math.random() * 5}s`,
      type: Math.random() > 0.7 ? "plane" : "circle",
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setShapes(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[20]">
      {shapes.map((shape, i) =>
        shape.type === "circle" ? (
          <div
            key={i}
            className={`absolute rounded-full opacity-70 animate-bounce ${shape.color}`}
            style={{
              top: shape.top,
              left: shape.left,
              right: shape.right,
              width: shape.size,
              height: shape.size,
              animationDelay: shape.delay,
            }}
          />
        ) : (
          <div
            key={i}
            className="absolute text-cyan-400 opacity-80 animate-pulse"
            style={{
              top: shape.top,
              left: shape.left,
              right: shape.right,
              animationDelay: shape.delay,
            }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
        )
      )}
    </div>
  );
}
