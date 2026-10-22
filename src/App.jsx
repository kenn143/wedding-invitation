import { useState } from "react";
import { wedding } from "./weddingData";
import Reveal from "./Reveal";
import Petals from "./Petals";
import Gate from "./Gate";
import Names from "./Names";
import Countdown from "./Countdown";
import Rsvp from "./Rsvp";

export default function App() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Petals />
      <Gate onOpen={() => setOpened(true)} />
      {opened && (
        <main>
          <div className="hero">
            {/* <div className="blob b1" /><div className="blob b2" /> */}
            <div>
              <div className="together">{wedding.intro}</div>
              <Names text={wedding.names} />
              <div className="line" />
              <div className="date">{wedding.dateText}</div>
              <div className="scroll">Scroll gently ↓</div>
            </div>
          </div>

          <section>
            <Reveal>
              <h2>Join us</h2>
              <p>{wedding.invitation}</p>
            </Reveal>
          </section>

          <section>
            <Reveal><h2>The day</h2></Reveal>
            <div className="grid">
              {wedding.details.map((d, i) => (
                <Reveal key={d.title} delay={i * 150}>
                  <div className="card">
                    <h3>{d.title}</h3>
                    <div className="t">{d.time}</div>
                    <p>{d.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section>
            <Reveal><h2>Counting the days</h2><Countdown /></Reveal>
          </section>

          <section>
            <Reveal>
              <h2>Will you come?</h2>
              <p>Kindly reply by {wedding.rsvpBy}.</p>
              <Rsvp />
            </Reveal>
          </section>

          <footer>
            <div className="names">{wedding.initials}</div>
            With love and gratitude
          </footer>
        </main>
      )}
    </>
  );
}
