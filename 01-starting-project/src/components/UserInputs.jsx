export default function UserInputs() {
  return (
    <div id="user-input" className="input-group">
      <div >
        <label>
          Initial Invencment
          <input type="number" />
        </label>

        <label>
          Annual Invencment
          <input type="number" />
        </label>

        <label>
          Expected return
          <input type="number" />
        </label>

        <label>
          duration
          <input type="number" />
        </label>
      </div>
    </div>
  );
}
