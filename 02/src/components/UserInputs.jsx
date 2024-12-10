
export default function UserInputs({handleChange,data}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invencment</label>
          <input
            type="number"
            name="initialInvestment"
            placeholder="Initial Invencment" 
            value={data.initialInvestment}
            onChange={handleChange}
            />
        </p>
        <p>
          <label>Annual Invencment</label>
          <input
            type="number"
            name="annualInvestment"
            placeholder="Annual Invencment"
            value={data.annualInvestment}
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
            value={data.expectedReturn}
            onChange={handleChange}
            />
        </p>

        <p>
          <label>duration</label>
          <input
            type="number"
            name="duration"
            placeholder="Duration"
            value={data.duration}
            onChange={handleChange}
            min={1}
            />
        </p>
      </div>
    </section>
  );
}
