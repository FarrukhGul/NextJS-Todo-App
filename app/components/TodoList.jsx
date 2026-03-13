import TodoItem from './TodoItem'
import { FiInbox } from 'react-icons/fi'

const TodoList = async () => {

  const res = await fetch('http://localhost:3000/api/todos', {
    cache: 'no-store'
  })

  const data = await res.json()
  const todos = data.getAllTodos || []

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <FiInbox size={32} className="text-slate-200 mb-3" />
        <p className="text-slate-400 text-sm">No tasks yet — add one above!</p>
      </div>
    )
  }

  return (
    <div>

      {/* Count */}
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
        {todos.length} task{todos.length !== 1 ? 's' : ''}
      </p>

      {/* List */}
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>

    </div>
  )
}

export default TodoList