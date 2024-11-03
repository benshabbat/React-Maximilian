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
          <th>Year</th>
          <th>Investment Value</th>
          <th>Ineterst (Year)</th>
          <th>Total Ineterst</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {res.map((res) => {
          const totalInterest =
            res.valueEndOfYear -
            res.annualInvestment * res.year -
            initialInvestment;
          return (
            <tr key={res.year}>
              <td>{res.year}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(res.valueEndOfYear-totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
