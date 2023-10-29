import React from "react";
import { data } from "../dummy";
import { calculateStatistics } from "../services/statistiics";

const Gamma = () => {
  const originalArray = data;
  const newArrayWithGamma = originalArray.map((item) => {
    const gamma = (item.Ash * item.Hue) / item.Magnesium;
    return { ...item, gamma };
  });
  const statisticsWithGama = calculateStatistics(newArrayWithGamma, "gamma");
  console.log(statisticsWithGama);
  return (
    <div>
      <table border="1">
        <tr>
          <th></th>
          {Object.keys(statisticsWithGama).map((alcoholClass, index) => {
            return <th key={index}>class {index + 1}</th>;
          })}
        </tr>

        <tr>
          <td>Mean</td>
          {Object.values(statisticsWithGama).map((stats, index) => {
            return <td key={index}>{stats.mean}</td>;
          })}
        </tr>
        <tr>
          <td>Median</td>
          {Object.values(statisticsWithGama).map((stats, index) => {
            return <td key={index}>{stats.median}</td>;
          })}
        </tr>
        <tr>
          <td>Mode</td>
          {Object.values(statisticsWithGama).map((stats, index) => {
            return <td key={index}>{stats.mode}</td>;
          })}
        </tr>
      </table>
    </div>
  );
};

export default Gamma;
