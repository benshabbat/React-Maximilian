import { useState } from "react";

export default function UserInputs() {
  const [data, setData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invencment</label>
          <input
            type="number"
            name="initialInvestment"
            placeholder="Initial Invencment"
          />
        </p>
        <p>
          <label>Annual Invencment</label>
          <input
            type="number"
            name="annualInvestment"
            placeholder="Annual Invencment"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            name="expectedReturn"
            placeholder="Expected return"
          />
        </p>

        <p>
          <label>duration</label>
          <input type="number" name="duration" placeholder="Duration" />
        </p>
      </div>
    </section>
  );
}
