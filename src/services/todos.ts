import { type TodoList } from '../Types'

const BIN_ID = '688424b57b4b8670d8a76e3c'
//const API_KEY = '$2a$10$lK6ieUlT0PV7AAeDrv3xzefLLCqUIe.Hs6gAzUlYm3UzRV.QanxZ2'

const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`

interface Todo {
  id: string
  title: string
  completed: boolean
  order: number
}

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(API_URL)
  if (!res.ok) {
    console.error('Error fetching todos')
    return []
  }

  const { record: todos } = await res.json() as { record: Todo[] }
  return todos
}

export const updateTodos = async ({ todos }: { todos: TodoList }): Promise<boolean> => {
  console.log(import.meta.env.VITE_API_BIN_KEY)
  const res = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': import.meta.env.VITE_API_BIN_KEY
    },
    body: JSON.stringify(todos)
  })

  return res.ok
}