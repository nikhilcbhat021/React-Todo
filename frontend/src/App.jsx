import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInputComponent from './components/TodoInputComponent'
import Todos from './components/Todos'
import axios from 'axios'

//Goes in Config file.
export const backendendpoint = "http://localhost:3000";

const mockData = [
  {
    "title": "Go to Gym",
    "description": "Need to go to gym to keep my body fit. Don't give in.",
    completed: false
  },
  {
    title: "Get Groceries",
    description: "Need to get the groceries..",
    completed: true
  },
  {
    title: "Balancing Sadhana",
    description: "Going to Shoonya program without prep is like jumping from Airplane without parachute..",
    completed: false
  },
  {
    title: "Crio -- Checkout page",
    description: "Need to code Checkout page before tomorrow.",
    completed: false
  },
]

export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    console.log('in useeffect');
    const token = "403.204.10";
    const onLoadHandler = async () => {
      try {
        const allTodos = await axios.get(`${backendendpoint}/todos` , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(allTodos);
        console.log(allTodos.data.data);

        setTodos(allTodos.data.data);
      } catch(err) {
        console.log(err);
      }
    }

    onLoadHandler();
  }, [])

  return (<>
    <TodoInputComponent handleAddTodo={(todo) => setTodos([...todos, todo])} todoCount={todos.length}></TodoInputComponent>
    <Todos handleTodoCompleted={(todo) => {
        const newArr = todos.map((_td) => {
          let newObj = (_td._id === todo._id ? {...todo, completed:todo.completed} : {..._td});
          console.log(newObj);
          return newObj;
        })

        setTodos(newArr);
      }} todos={todos}></Todos>
  </>)
}

export {
  // backendendpoint
}
// module.exports = {
//   backendendpoint: backendendpoint
// }
