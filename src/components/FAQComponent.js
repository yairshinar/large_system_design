import React from "react";
import faqData from "../data/faqData";

const FAQComponent = () => {
  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <h4>Q: {faq.question}</h4>
          <p>A: {faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
