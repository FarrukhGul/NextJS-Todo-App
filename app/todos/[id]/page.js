import TodoList from "../components/TodoList"
import AddTodo from "../components/AddTodo"
import { FiZap } from 'react-icons/fi'

const TodosPage = () => {
  return (
    <main className="min-h-screen bg-[#080c14]">

      {/* Navbar */}
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <FiZap size={18} className="text-cyan-400" />
          <span className="text-white font-black text-lg tracking-tight">TaskFlow</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400 mb-2">
            Your Workspace
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Todo Board
          </h1>
          <div className="w-10 h-[3px] bg-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Add Todo — left */}
          <div className="w-full lg:w-80 shrink-0">
            <AddTodo />
          </div>

          {/* Todo List — right */}
          <div className="flex-1">
            <TodoList />
          </div>

        </div>
      </div>
    </main>
  )
}

export default TodosPage