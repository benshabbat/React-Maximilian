import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Data({ data }) {
  const res = calculateInvestmentResults(data);
  const initialInvestment =
    res[0].valueEndOfYear - res[0].interest - res[0].annualInvestment;
  console.log(res);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>interest</th>
          <th>value End Of Year</th>
          <th>annual Investment</th>
          <th>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {res.map((res, index) => {
          const totalInterest =
            res.valueEndOfYear -
            res.annualInvestment * res.year -
            initialInvestment;
          return (
            <tr key={index}>
              <td>{res.year}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
              <td>{formatter.format(res.annualInvestment)}</td>
              <td>{formatter.format(totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
