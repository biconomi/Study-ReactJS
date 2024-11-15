import { useState } from "react";
import Todolist from "./Todolist";
const listTodo = [
  {
    id: 1,
    name: "quet nha",
  },
  {
    id: 2,
    name: "lau nha",
  },
  {
    id: 3,
    name: "Cup dien",
  },
];
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [listodo, setTodoList] = useState(listTodo);
  const hanldelonchangeInput = (value) => {
    setTodo(value);
  };

  const handlerAddTodo = () => {
    const addTodo = {
      id: listodo.length + 1,
      name: todo,
    };
    setTodoList([...listodo, addTodo]);
  };

  const deleteTodo = (id) => {
    const updateTodo = listodo.filter((td) => td.id != id);
    setTodoList(updateTodo);
  };

  return (
    <div className="div-contearner">
      <h1>Noi dung</h1>
      <div>
        <input
          type="text"
          onChange={(e) => hanldelonchangeInput(e.target.value)}
        />
        <button onClick={handlerAddTodo}>Them</button>
      </div>
      <Todolist listTodo={listodo} deleteTodo={deleteTodo} />
    </div>
  );
};
export default Todo;
