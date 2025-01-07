import { useState, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onCancel, onAdd }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  // const [formData, setFormData] = useState()
  // function handleChange(e) {
  //     setFormData((prevData) => {
  //         return {
  //             ...prevData,
  //             [e.target.name]: e.target.value
  //         }
  //     })
  // }

  function handleSaveProject() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
    });
  }
  return (
    <>
      <Modal ref={modalRef}>
        <div>
          <h2 className="text-xl font-bold my-4 text-stone-500">
            Invalid Input
          </h2>
          <p className="text-stone-400 mb-4">
            Oops... looks like you forgot to enter a value.
          </p>
          <p className="text-stone-400 mb-4">
            Please make sure you provide a valid value for every input field.
          </p>
        </div>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end gap-4 items-center my-4">
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveProject}
            className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </menu>
        <div>
          <Input ref={titleRef} name="title" />
          <Input ref={descriptionRef} name="Description" isTextArea />
          <Input ref={dateRef} name="date" type="date" />
        </div>
      </div>
    </>
  );
}
