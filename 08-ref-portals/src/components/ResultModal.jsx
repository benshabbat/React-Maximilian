import { forwardRef, useImperativeHandle, useRef } from "react";

//  function ResultModal({ targetTime, result ,ref}) {
//   return (
//     <dialog className="result-modal" ref={ref}>
//       <h2>You {result}</h2>
//       <p>
//         The target time was <strong>{targetTime} seconds.</strong>
//       </p>
//       <p>
//         You stopped the time x <strong>X seconds left</strong>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime ,onReset},
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  const youLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <dialog className="result-modal" ref={dialog}>
      {youLost&&<h2>You Lost</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the time <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
