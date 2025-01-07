import { useState,useRef } from "react";
import Input from "./Input";

export default function NewProject({onCancel,onAdd}) {
    const titleRef = useRef()
    const descriptionRef = useRef()
    const dateRef = useRef()
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
        onAdd({
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value,
            id:Math.random()
        })
    }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end gap-4 items-center my-4">
        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button onClick={handleSaveProject} className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
      </menu>
      <div>
        <Input ref={titleRef} name="title"/>
        <Input ref={descriptionRef} name="Description" isTextArea />
        <Input ref={dateRef} name="date" type="date" />
      </div>
    </div>
  );
}
