import { useState } from "react";

function AddtoDoform({ setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  function handleAdd() {
    if (newTodo.trim() === "") return;
    setTodos((prev) => [...prev, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
  }

  return (
    <div className="flex flex-col gap-3 max-w-md">
      <h1 className="text-2xl font-medium">Manage Activities</h1>
      <input
        type="text"
        placeholder="Add your activity here"
        className="border border-black bg-transparent p-1"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="bg-black text-white p-1 rounded" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddtoDoform;