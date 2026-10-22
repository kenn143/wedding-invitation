export default function Names({ text }) {
  let n = 0;
  return (
    <h1 className="names" aria-label={text}>
      {text.split(" ").map((w, wi) => (
        <span key={wi} className={"w" + (w === "&" ? " amp" : "")} aria-hidden="true">
          {w.split("").map((c, i) => (
            <span key={i} className="ch" style={{ animationDelay: `${0.2 + n++ * 0.09}s` }}>{c}</span>
          ))}{" "}
        </span>
      ))}
    </h1>
  );
}
