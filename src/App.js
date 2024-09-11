import "bulma/css/bulma.css";
import CardHolder from "./CardHolder";
import Chemistry from "./images/chemistry.jpg";
import Economics from "./images/economics.jpg";
import History from "./images/history.jpg";
import Physics from "./images/physics.jpg";
import Psychology from "./images/psychology.jpg";
import Zoology from "./images/zoology.jpg";
import heart from "./images/heart.svg";
import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState([0, 0, 0, 0, 0, 0]);

  const handleClick = (index) => {
    const newClicks = [...clicks];
    newClicks[index] = newClicks[index] + 1;
    setClicks(newClicks);
  };

  return (
    <div className="has-background-light">
      <section className="hero is-dark">
        <div className="hero-body">
          <p className="title">Departments of Boston College</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <CardHolder title="Chemistry Department" desc="Explore the fundamentals of chemical reactions, compounds, and materials" image={Chemistry} />
              <img
                className="heart"
                alt="heart"
                src={heart}
                onClick={() => handleClick(0)}
                style={{ width: 10 + 10 * clicks[0] + "px" }}
              />
            </div>

            <div className="column is-one-third">
              <CardHolder title="Economics Department" desc = "Study the principles of economics, market behavior, and financial systems." image={Economics} />
              <img
                className="heart"
                alt="heart"
                src={heart}
                onClick={() => handleClick(1)}
                style={{ width: 10 + 10 * clicks[1] + "px" }}
              />
            </div>

            <div className="column is-one-third">
              <CardHolder title="History Department" desc="Dive into the events and narratives that have shaped human societies." image={History} />
              <img
                className="heart"
                alt="heart"
                src={heart}
                onClick={() => handleClick(2)}
                style={{ width: 10 + 10 * clicks[2] + "px" }}
              />
            </div>

            <div className="column is-one-third">
              <CardHolder title="Physics Department" desc="Understand the laws of nature through the study of matter, energy, and forces" image={Physics} />
              <img
                className="heart"
                alt="heart"
                src={heart}
                onClick={() => handleClick(3)}
                style={{ width: 10 + 10 * clicks[3] + "px" }}
              />
            </div>

            <div className="column is-one-third">
              <CardHolder title="Psychology Department" desc="Examine human behavior, mental processes, and emotional well-being" image={Psychology} />
              <img
                className="heart"
                alt="heart"
                src={heart}
                onClick={() => handleClick(4)}
                style={{ width: 10 + 10 * clicks[4] + "px" }}
              />
            </div>

            <div className="column is-one-third">
              <CardHolder title="Zoology Department" desc="Learn about animal biology, behavior, and ecosystems" image={Zoology} />
              <img
                className="heart"
                alt="heart"
                src={heart}
                onClick={() => handleClick(5)}
                style={{ width: 10 + 10 * clicks[5] + "px" }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
