import React from "react";
import { useRef } from "react";

function TaskItem(singleTask, deleteFunc) {
  function deleteFuncc() {
    deleteFunc(singleTask);
  }
  return (
    <div className="flex justify-between border-2 items-center">
      <div className="p-2 text-slate-600 text-2xl">{singleTask}</div>
      <div className="p-1 mr-2 cursor-pointer" onClick={deleteFuncc}>
        &#10005;
      </div>
    </div>
  );
}

function TasksDisplay({ tasks, deleteItem }) {
  function deletee(item) {
    deleteItem(item);
  }
  console.log("tasks is ", tasks);
  return (
    <div className="mx-auto w-3/4 flex flex-col shadow-xl shadow-indigo-200 ">
      {tasks.map((item) => TaskItem(item, deletee))}
    </div>
  );
}

export default TasksDisplay;
