'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiPlus } from 'react-icons/fi'

const AddTodo = () => {

  const [title, setTitle]             = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority]       = useState('low')
  const [dueDate, setDueDate]         = useState('')
  const [loading, setLoading]         = useState(false)

  const router = useRouter()

  const handleSubmit = async () => {
    if (!title) return
    setLoading(true)

    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, priority, dueDate })
    })

    const data = await res.json()

    if (res.ok) {
      setTitle('')
      setDescription('')
      setPriority('low')
      setDueDate('')
      router.refresh()
    } else {
      alert(data.message)
    }

    setLoading(false)
  }

  return (
    <div className="max-w-2xl w-full h-auto bg-gray-100 border border-slate-200 rounded-2xl px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-7 lg:py-7 mb-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">

        {/* Title */}
        <div className="sm:col-span-2 flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Title</label>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 py-2.5 rounded-lg  bg-white text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-500 transition-all"
          />
        </div>

        {/* Description */}
        <div className="sm:col-span-2 flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Description</label>
          <textarea
            placeholder="Add details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="px-3 py-2.5 rounded-lg  bg-white text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-500 transition-all resize-none"
          />
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-3 py-2.5 rounded-lg  bg-white text-sm text-slate-800 outline-none focus:border-blue-500 transition-all"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Due Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Due date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="px-3 py-2.5 rounded-lg bg-white text-sm text-slate-800 outline-none focus:border-blue-500 transition-all"
          />
        </div>

      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-medium py-2.5 rounded-lg text-sm transition-all shadow-md shadow-blue-200 mt-6"
      >
        <FiPlus size={15} />
        {loading ? 'Adding...' : 'Add Task'}
      </button>

    </div>
  )
}

export default AddTodo