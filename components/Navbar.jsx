'use client'

import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const { status, data: session } = useSession()

  return (
    <nav className="flex justify-between items-center bg-red-700 px-8 py-4">
      <Link className="text-white text-2xl font-bold" href="/">
        MongoDB CRUD
      </Link>
      <div className="flex gap-3">
        <Link
          className="bg-green-700 hover:bg-yellow-200 text-white font-bold p-3 rounded-lg"
          href="/addTopic"
        >
          Add Topic
        </Link>
        {status === 'authenticated' ? (
          <>
            <button
              onClick={() => signOut()}
              className="bg-green-700 hover:bg-yellow-200 text-white px-4 py-2 rounded-lg font-bold"
            >
              Sign Out
            </button>
            <div className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src={session?.user?.image}
                width={40}
                height={40}
                alt={session?.user?.name}
              />
              <span className="text-white font-bold">
                {session?.user?.name}
              </span>
            </div>
          </>
        ) : (
          <Link
            href="/signIn"
            className="bg-green-700 hover:bg-yellow-200 text-white px-4 py-3 rounded-lg font-bold"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
