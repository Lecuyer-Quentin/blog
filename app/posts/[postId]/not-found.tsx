import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex flex-col flex-start h-screen items-center mt-10">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
        <p className="text-2xl text-center mt-20">
          The requested page could not be found.
        </p>
        <br />
        <Link href="/">Back to Home</Link>
      </div>

    </section>

  )
}
