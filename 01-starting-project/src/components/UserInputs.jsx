import { useState } from "react";

export default function UserInputs() {
  const [data, setData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(e) {
    const { value, name } = e.traget;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invencment</label>
          <input
            type="number"
            name="initialInvestment"
            placeholder="Initial Invencment"
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Annual Invencment</label>
          <input
            type="number"
            name="annualInvestment"
            placeholder="Annual Invencment"
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </p>

        <p>
          <label>duration</label>
          <input
            type="number"
            name="duration"
            placeholder="Duration"
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
}
