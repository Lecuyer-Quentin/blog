import Link from 'next/link'

export default function notFound() {
  return (
    <section className="flex flex-col items-center h-screen mt-10">
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
        <br />
        <p className="text-gray-500 text-center">Sorry, none of the posts match your search term.</p>
        <br />
        <Link href="/"> Back to home </Link>
    </section>

  )
}
