import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-pink-200 px-8 py-4">
      <Link className="text-white text-2xl font-bold" href="/">
        MongoDB CRUD
      </Link>
      <Link
        className="bg-blue-100 text-gray-700 font-bold p-3 rounded-lg"
        href="/addTopic"
      >
        Add Topic
      </Link>
    </nav>
  )
}
