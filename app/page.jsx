import TopicsList from '@/components/TopicsList'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold"> WebDev Topics</h1>
      <p className="mb-4">Learning example of MongoDB CRUD</p>
      <p>Next-auth 인증</p>
      <TopicsList />
    </>
  )
}
