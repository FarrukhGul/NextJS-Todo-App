import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

export const metadata = {
  title: 'My Tasks | TaskFlow',
}

export default function TodosPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">My Tasks</h1>
          <p className="text-sm text-slate-400 mt-1">Stay on top of your work</p>
        </div>

        {/* Form */}
        <AddTodo />

        {/* Todo List */}
        <TodoList />

      </div>
    </main>
  )
}