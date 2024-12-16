import React from "react";
import Navbar from "./components/Navbar";
import CardComponent from "./components/CardComponent";
import FAQComponent from "./components/FAQComponent";
import TechStackTable from "./components/TechStackTable";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>High-Performance Analytics Platform</h1>
        <p>Learn how we designed a scalable and reliable analytics platform.</p>
        <h2>Key System Components</h2>
        <CardComponent />
        <h2>Frequently Asked Questions</h2>
        <FAQComponent />
        <h2>Technology Stack</h2>
        <TechStackTable />
      </div>
    </div>
  );
}

export default App;
