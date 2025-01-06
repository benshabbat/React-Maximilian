import React from "react";
import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <button>Cancel</button>
        <button>Save</button>
      </menu>
      <div>
        <Input name="title" />
        <Input name="Description" isTextArea={true} />
        <Input name="date" type="date"/>
        {/* <p>
          <label>Title</label>
          <input name="title" />
        </p>
        <p>
          <label>Description</label>
          <textarea name="description"/>
        </p>
        <p>
          <label>Due Date</label>
          <input type="date" name="date" />
        </p> */}
      </div>
    </div>
  );
}
