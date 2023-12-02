import Posts from './components/Posts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1 className="text-4xl font-bold mt-12">Welcome to the Blog</h1>
      <p className="text-2xl text-center mt-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, voluptatem, quidem, quia voluptatum quod asperiores
        voluptate autem quibusdam doloribus fugit. Quisquam voluptates,
        voluptatem, quidem, quia voluptatum quod asperiores voluptate autem
        quibusdam doloribus fugit.
      </p>
      <div id='posts' className="flex flex-col items-center mt-20">
        <Posts />
      </div>
    </main>
  )
}
