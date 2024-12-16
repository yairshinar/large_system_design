import React from "react";
import cardsData from "../data/cardsData";

const CardComponent = () => {
  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <h4>Examples:</h4>
          <ul>
            {card.examples.map((example, idx) => (
              <li key={idx}>{example}</li>
            ))}
          </ul>
          <h4>Alternatives:</h4>
          <ul>
            {card.alternatives.map((alt, idx) => (
              <li key={idx}>
                <strong>{alt.name}:</strong> {alt.tradeoff}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
