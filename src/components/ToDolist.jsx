import TodoItem from "./TodoItem";

function ToDolist({ todos, setTodos }) {
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Todays Activity</h1>

      {todos.length === 0 && <p>You have no activities for today.</p>}

      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDolist;