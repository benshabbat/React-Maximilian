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
        <Input name="Description" isTextArea/>
        <Input name="date" type="date"/>
      </div>
    </div>
  );
}
