"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  format?: "default" | "compact";
}

function formatNumber(n: number, type: "default" | "compact"): string {
  if (type === "compact") {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(0)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  }
  return n.toLocaleString();
}

export function AnimatedCounter({
  value,
  suffix = "",
  format = "default",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        el.textContent = formatNumber(Math.round(obj.val), format) + suffix;
      },
    });
  }, [value, suffix, format]);

  return (
    <span
      ref={ref}
      className="font-heading text-5xl md:text-6xl text-white tabular-nums"
    >
      0{suffix}
    </span>
  );
}
