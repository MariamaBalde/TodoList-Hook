import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { useState } from "react";

//Utilisat° des hooks useState pour gérer l'état de la saisie et la liste des tâches.
function App() {
  // todo:gérer l'état de la saisie
  const [todo, setTodo] = useState("")
  // gere la liste des tâche
  const [todoList, setTodoList] = useState([])

  // permet de soummettre le formulaire 
  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = { //créAT° d'1 nouvel objet newTodo avec .
      id: Math.floor(Math.random() * 100), // un id unique (généré aléatoirement) 
      value: todo //et la value actuelle de l'état todo
    }

    setTodoList(prev => [...prev, newTodo]) //mis à jour la liste des tâches (todoList) 
    setTodo('') //réinitialisat° du champ de saisie = vider champ
  }
  // permet de supprimer une tache
  const deleteTodo = (todoId) => {
    const newTodos = todoList.filter(todo => todo.id !== todoId)
    setTodoList(newTodos)
  }
  return (
    <div className="w-75 mx-auto py-5">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <div class="mb-3">
          <label className="form-label">Todo</label>
          <input type="text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value)
            }}
            className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
      <h1 className="mt-5">Liste des taches a faire</h1>
      <ul className="p-0">
        {
          todoList.length ?
            todoList.map(todo => {
              return <div key={todo.id} className="d-flex gap-2 mt-3">
                <li>{todo.value}</li>
                <button onClick={() => deleteTodo(todo.id)}>x</button>
              </div>
            }) : <span className="text-danger">Pas encore de todo</span>
        }
      </ul>
    </div>
  );
}

export default App;
