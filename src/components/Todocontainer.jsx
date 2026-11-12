import AddTodoform from "./AddToDoform";
import TodoList from "./ToDolist";
import { useState } from "react";

function Todocontainer() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React"},
    { id: 2, text: "Build a To-Do List App"},
    { id: 3, text: "Deploy the App"},
  ]);

  return (
    <>
      <div>
        <div className="flex gap-5 my-7 flex-wrap">
         <AddTodoform setTodos={setTodos} />
         <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default Todocontainer;
