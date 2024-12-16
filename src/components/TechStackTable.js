import React from "react";
import techStackData from "../data/techTableStack";

const TechStackTable = () => {
  return (
    <table className="tech-stack-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {techStackData.map((tech, index) => (
          <tr key={index}>
            <td>{tech.layer}</td>
            <td>{tech.technology}</td>
            <td>{tech.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TechStackTable;
