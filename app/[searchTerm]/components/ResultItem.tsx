import Link from 'next/link'

interface Props {
    result: Result
}

export default function ResultItem({ result }: Props) {
    const { title, id } = result

  return (
    <article className="w-2/3 md:w-5/6 text-center border-2 border-black p-4 mb-4 bg-white rounded-md shadow-md ">
        <Link className='text-2xl font-bold text-center cursor-pointer text-red-500 hover:text-red-700'
            href={`/posts/${id}`}>
            {title}
        </Link>
    </article>
  )
}
