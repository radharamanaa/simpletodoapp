import React from "react";
import { useState } from "react";
import InputForTask from "./InputForTask";
import TasksDisplay from "./TasksDisplay";

function TaskSection() {
  let [tasks, setTasks] = useState(["Something's not nice!", "anyway"]);
  function addToList(item) {
    console.log(item);
    setTasks((prevState) => [...prevState, item]);
  }
  function deleteItem(item) {
    setTasks((prevSt) => {
      let st = prevSt.filter((arrItem) => arrItem !== item);
      return st;
    });
  }
  return (
    <div className="mx-auto w-3/4 mt-5">
      <InputForTask addToList={addToList} />
      <TasksDisplay tasks={tasks} deleteItem={deleteItem} />
    </div>
  );
}

export default TaskSection;
