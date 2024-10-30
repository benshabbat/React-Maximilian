export default function UserInputs() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invencment</label>
          <input type="number" />
        </p>
        <p>
          <label>Annual Invencment</label>
          <input type="number" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input type="number" />
        </p>

        <p>
          <label>duration</label>
          <input type="number" />
        </p>
      </div>
    </section>
  );
}
