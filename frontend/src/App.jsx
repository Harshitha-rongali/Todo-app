import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <CreateTodo></CreateTodo>
     <Todo todos={[
      {
      title: "Yoga",
      description: "you have to do yoga",
      completed: false
      }
     ]}></Todo>
    </div>
  )
}

export default App
