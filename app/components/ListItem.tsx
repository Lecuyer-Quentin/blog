import Link from 'next/link'
// import getFormattedDate from '@/lib/getFormattedDate'

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { title, date, id } = post
    const href = `/posts/${id}`

  return (
    <li className="border-b border-gray-300 py-4 text-center">
        <Link href={href} >{title}</Link>
        <br />
        <br />
        <time dateTime={date}>{date}</time>
        <br /> 
    </li>
  )
}