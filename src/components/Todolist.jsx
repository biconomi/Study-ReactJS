const Todolist = (props) => {
  const todoList = props.listTodo;
  const deleteTodo = props.deleteTodo;
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <td>STT</td>
            <td>Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td>{todo.name}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Xoa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Todolist;
