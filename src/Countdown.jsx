import { useEffect, useState } from "react";
import { wedding } from "./weddingData";

const target = new Date(wedding.date);
const calc = () => {
  const d = Math.max(0, target - new Date());
  return [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
};
const labels = ["days", "hours", "minutes", "seconds"];

export default function Countdown() {
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return (
    <div className="count">
      {t.map((v, i) => (
        <div className="unit" key={labels[i]}>
          <b>{String(v).padStart(2, "0")}</b>
          <i>{labels[i]}</i>
        </div>
      ))}
    </div>
  );
}
