import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInputComponent from './components/TodoInputComponent'
import Todos from './components/Todos'

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

function App() {

  const [todos, setTodos] = useState([{
    _id: 123,
    title: "Crio -- Checkout page",
    description: "Need to code Checkout page before tomorrow.",
    completed: false
  },]);  

  return (<>
    <TodoInputComponent handleAddTodo={(todo) => setTodos([...todos, todo]) }></TodoInputComponent>
    <Todos todos={todos}></Todos>
  </>)
}

export default App
