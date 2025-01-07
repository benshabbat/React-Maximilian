import { createPortal } from "react-dom";
import {useImperativeHandle, useRef } from "react";
export default function Modal({ children ,ref}) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-slate-900/90 p-4 rounded-md shadow-md">
        {children}
    <form method="dialog">
        <button className="px-4 py-2 bg-stone-800 text-stone-50">Close</button>
    </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
