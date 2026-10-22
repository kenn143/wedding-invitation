import { useState } from "react";
import { wedding } from "./weddingData";

export default function Gate({ onOpen }) {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);
  const go = () => {
    if (open) return;
    setOpen(true);
    setTimeout(() => { setGone(true); onOpen(); }, 2100);
  };
  return (
    <div className={"gate" + (open ? " open" : "") + (gone ? " gone" : "")}>
      <div className="env">
        <div className="body" />
        <div className="letter"><span>{wedding.names}</span></div>
        <div className="bottom" />
        <div className="flap" />
        <button className="seal" onClick={go} aria-label="Open the invitation">{wedding.initials.replace(/\s/g, "")}</button>
      </div>
      <div className="hint">Tap the seal to open your invitation</div>
    </div>
  );
}
