import { useMemo } from "react";

export default function Petals() {
  const items = useMemo(
    () => Array.from({ length: window.innerWidth < 700 ? 9 : 16 }, () => ({
      left: Math.random() * 100,
      dur: 11 + Math.random() * 10,
      delay: -Math.random() * 18,
      scale: 0.6 + Math.random() * 0.9,
    })),
    []
  );
  return (
    <div className="petals" aria-hidden="true">
      {items.map((p, i) => (
        <span key={i} className="petal"
          style={{ left: p.left + "%", animationDuration: p.dur + "s", animationDelay: p.delay + "s", transform: `scale(${p.scale})` }} />
      ))}
    </div>
  );
}
