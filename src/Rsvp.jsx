import { useState } from "react";

export default function Rsvp() {
  const [going, setGoing] = useState(true);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  // To store replies, send { name, going, guests, note } to your backend or a form service here.
  const submit = (e) => { e.preventDefault(); setSent(true); };

  if (sent)
    return (
      <div className="thanks">
        <p style={{ fontSize: 24, marginTop: 30 }}>
          {going
            ? `Thank you, ${name || "dear friend"}. We can’t wait to celebrate with you!`
            : `Thank you for letting us know, ${name || "dear friend"}. You will be missed.`}
        </p>
      </div>
    );

  return (
    <form onSubmit={submit}>
      <label>Your full name
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Maria Santos" />
      </label>
      <div className="choice">
        <button type="button" className={going ? "on" : ""} onClick={() => setGoing(true)}>Joyfully accepts</button>
        <button type="button" className={!going ? "on" : ""} onClick={() => setGoing(false)}>Regretfully declines</button>
      </div>
      {going && (
        <label>Number of guests
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
      )}
      <label>A note for the couple
        <textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Dietary needs, song requests, or well wishes" />
      </label>
      <button className="send" type="submit">Send my reply</button>
    </form>
  );
}
