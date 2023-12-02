import { getSortedPostsData } from "@/lib/posts"
import Link from 'next/link'
import ListItem from "./ListItem"

export default function Posts() {
    const posts = getSortedPostsData()
    

  return (
    <section className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-2xl font-bold">Posts</h2>
        <ul className="list-disc">
            {posts.map(post => (
                <ListItem key={post.id} post={post} />
            ))}
        </ul>
        </section>
  )
}
