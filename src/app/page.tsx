"use client";
import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState<string[]>(["Học React Hooks", "Làm bài tập Next.js"]);
  const [inputVal, setInputVal] = useState("");

  const addTodo = () => {
    if (inputVal.trim() === "") return;
    setTodos([...todos, inputVal]);
    setInputVal("");
  };

  const deleteTodo = (indexToDelete: number) => {
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh sách công việc của tôi</h1>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Nhập việc cần làm..."
          className="border p-2 flex-1 rounded"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
          Thêm
        </button>
      </div>

      <p className="text-gray-600 mb-4">Bạn có {todos.length} việc cần làm.</p>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center p-3 border rounded shadow-sm">
            <span>{todo}</span>
            <button 
              onClick={() => deleteTodo(index)} 
              className="bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
