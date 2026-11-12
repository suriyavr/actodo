function TodoItem({ todo, index, setTodos }) {
  function handleDelete(id) {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="flex justify-between">
      <p className="mt-2">
        {index + 1}. {todo.text}
      </p>
      <button
        onClick={() => handleDelete(todo.id)}
        className="bg-red-700 text-white py-1 px-3 rounded-md mt-2"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;