'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddTopicForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/topics`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      if (!res.ok) {
        throw new Error('Failed to update topic')
      }
      router.push('/')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic title"
        className="border border-yellow-500 p-4"
      />

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic description"
        className="border border-yellow-500 p-4 h-40"
      />

      <button
        type="submit"
        className="bg-green-700 rounded-lg text-white font-bold py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  )
}
