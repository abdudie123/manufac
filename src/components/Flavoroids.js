import React from "react";
import { calculateStatistics } from "../services/statistiics";
import { data } from "../dummy";

const Flavoroids = () => {
  const alcoholData = data;
  const statistics = calculateStatistics(alcoholData, "Flavanoids");
  return (
    <div>
      {" "}
      <table border="1">
        <tr>
          <th></th>
          {Object.keys(statistics).map((alcoholClass, index) => {
            return <th key={index}>class {index + 1}</th>;
          })}
        </tr>

        <tr>
          <td>Mean</td>
          {Object.values(statistics).map((stats, index) => {
            return <td key={index}>{stats.mean}</td>;
          })}
        </tr>
        <tr>
          <td>Median</td>
          {Object.values(statistics).map((stats, index) => {
            return <td key={index}>{stats.median}</td>;
          })}
        </tr>
        <tr>
          <td>Mode</td>
          {Object.values(statistics).map((stats, index) => {
            return <td key={index}>{stats.mode}</td>;
          })}
        </tr>
      </table>
    </div>
  );
};

export default Flavoroids;
