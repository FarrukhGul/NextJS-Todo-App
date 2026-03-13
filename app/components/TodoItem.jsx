'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiEdit2, FiTrash2, FiCheck } from 'react-icons/fi'

const TodoItem = ({ todo }) => {

  const [isEditing, setIsEditing]     = useState(false)
  const [title, setTitle]             = useState(todo.title)
  const [description, setDescription] = useState(todo.description)
  const [priority, setPriority]       = useState(todo.priority)
  const [completed, setCompleted]     = useState(todo.completed)

  const router = useRouter()

  // Toggle Complete
  const handleToggle = async () => {
    setCompleted(!completed)
    await fetch(`/api/todos/${todo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, completed: !completed })
    })
    router.refresh()
  }

  // Delete
  const handleDelete = async () => {
    await fetch(`/api/todos/${todo._id}`, { method: 'DELETE' })
    router.refresh()
  }

  // Update
  const handleUpdate = async () => {
    await fetch(`/api/todos/${todo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, priority, completed })
    })
    setIsEditing(false)
    router.refresh()
  }

  // Edit Mode 
  if (isEditing) {
    return (
      <div className="bg-white border border-blue-200 rounded-xl p-4 flex flex-col gap-2 shadow-sm">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 outline-none focus:border-blue-500"
          placeholder="Title"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 outline-none focus:border-blue-500"
          placeholder="Description"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 outline-none focus:border-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="accent-blue-500 w-4 h-4"
          />
          Mark as completed
        </label>

        <div className="flex gap-2 mt-1">
          <button
            onClick={handleUpdate}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 rounded-lg transition-all"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-500 text-sm font-medium py-2 rounded-lg transition-all"
          >
            Cancel
          </button>
        </div>

      </div>
    )
  }

  // Normal Mode 
  return (
    <div className={`bg-white border rounded-xl px-4 py-4 flex items-center gap-3 shadow-sm transition-all hover:border-blue-200 hover:shadow-md
      ${completed ? 'opacity-50 border-slate-100' : 'border-slate-200'}
    `}>

      {/* Checkbox */}
      <button
        onClick={handleToggle}
        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all
          ${completed
            ? 'bg-blue-500 border-blue-500'
            : 'border-slate-300 hover:border-blue-400'
          }
        `}
      >
        {completed && <FiCheck size={11} className="text-white" strokeWidth={3} />}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate
          ${completed ? 'line-through text-slate-400' : 'text-slate-800'}
        `}>
          {title}
        </p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium
            ${priority === 'high'   ? 'bg-red-100 text-red-600'    : ''}
            ${priority === 'medium' ? 'bg-yellow-100 text-yellow-600' : ''}
            ${priority === 'low'    ? 'bg-blue-100 text-blue-600'   : ''}
          `}>
            {priority}
          </span>
          {todo.dueDate && (
            <span className="text-xs text-slate-400">
              {new Date(todo.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-1 flex-shrink-0 ">
        <button
          onClick={() => setIsEditing(true)}
          className="w-7 h-7 rounded-lg border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 flex items-center justify-center transition-all"
        >
          <FiEdit2 size={12} className="text-blue-500 " />
        </button>
        <button
          onClick={handleDelete}
          className="w-7 h-7 rounded-lg border border-slate-200 bg-slate-50 hover:bg-red-50 hover:border-red-200 flex items-center justify-center transition-all"
        >
          <FiTrash2 size={12} className="text-red-500" />
        </button>
      </div>

    </div>
  )
}

export default TodoItem