import React from "react";
import { useRef } from "react";

function InputForTask({ addToList }) {
  let inputRef = useRef();
  function addtoListt(e) {
    if (e.key === "Enter" && inputRef.current.value.length > 6) {
      addToList(inputRef.current.value);
      inputRef.current.value = "";
    } else if (e.key === "Enter") {
      alert("Input should be more than 6 Chars");
    }
  }
  return (
    <div className="input-todo w-full mx-auto pt-2 pr-2 pl-2 rounded-md">
      <div className="w-3/4 mx-auto">
        <input
          ref={inputRef}
          type="text"
          maxLength="50"
          className="h-20 text-4xl w-full text-slate-700 focus:outline-none border-b-2"
          placeholder="Enter a Task..."
          onKeyDown={addtoListt}
        />
      </div>
    </div>
  );
}

export default InputForTask;
