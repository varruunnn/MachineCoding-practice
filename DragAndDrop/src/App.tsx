import React, { useState } from "react";
type Todo = {
  id: number;
  content: string;
};
const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [done, setDone] = useState<Todo[]>([]);
  const handleClick = () => {
    if (!todoText) {
      alert("enter the task!");
    }
    setTodos([...todos, { id: Date.now(), content: todoText }]);
    setTodoText("");
  };
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, todo: Todo) => {
    e.dataTransfer.setData("todo", JSON.stringify(todo));
  };
  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    target: "todos" | "done"
  ) => {
    e.preventDefault();
    const dropedTodo: Todo = JSON.parse(e.dataTransfer.getData("todo"));
    if (target === "done") {
      setDone((prev) => [...prev, dropedTodo]);
      setTodos((prev) => prev.filter((t) => t.id !== dropedTodo.id));
    } else {
      setTodos((prev) => [...prev, dropedTodo]);
      setDone((prev) => prev.filter((t) => t.id !== dropedTodo.id));
    }
  };
  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full h-screen text-white gap-8 p-8">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-2xl">
        <input
          className="w-full bg-gray-900/70 text-white border border-gray-600 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200"
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter your task..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
        />
        <button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </div>

      <div className="flex gap-8 flex-1">
        <div
          className="flex-1 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 min-h-[400px] transition-all duration-300 hover:bg-gray-800/40"
          onDrop={(e) => handleDrop(e, "todos")}
          onDragOver={allowDrop}
        >
          <h3 className="text-xl font-bold text-blue-400 mb-6 text-center uppercase tracking-wide">
            📝 To Do
          </h3>
          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                draggable
                onDragStart={(e) => handleDragStart(e, todo)}
                className="bg-gray-900/60 p-4 rounded-lg border border-gray-600/50 cursor-move hover:bg-gray-800/80 hover:border-blue-500/50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-blue-500/20"
              >
                <span className="text-gray-100">{todo.content}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-80 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 min-h-[400px] transition-all duration-300 hover:bg-gray-800/40"
          onDrop={(e) => handleDrop(e, "done")}
          onDragOver={allowDrop}
        >
          <h3 className="text-xl font-bold text-green-400 mb-6 text-center uppercase tracking-wide">
            ✅ Completed
          </h3>
          <div className="space-y-3">
            {done.map((todo) => (
              <div
                key={todo.id}
                draggable
                onDragStart={(e) => handleDragStart(e, todo)}
                className="bg-green-900/40 p-4 rounded-lg border border-green-600/30 cursor-move hover:bg-green-800/50 hover:border-green-500/50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-green-500/20"
              >
                <span className="text-green-100 line-through opacity-80">
                  {todo.content}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
