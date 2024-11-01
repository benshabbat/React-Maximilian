import React from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function Data({ data }) {
  const res = calculateInvestmentResults(data);
  console.log(res);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>interest</th>
          <th>value End Of Year</th>
          <th>annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {res.map((res, index) => {
          return (
            <tr key={index}>
              <td>{res.year}</td>
              <td>{res.interest}</td>
              <td>{res.valueEndOfYear}</td>
              <td>{res.annualInvestment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
