import { notFound } from "next/navigation"
import { getSortedPostsData } from "@/lib/posts"
import Link from 'next/link'


type Props = {
    post: BlogPost
}

export function generateMetadata({ params }: {params: {postId: string}}) {
    const posts = getSortedPostsData()
    const postId = params.postId

    const post = posts.find(post => post.id === postId)

    if (!post ) {
        return {
            title: '404 - Page Not Found',
    }}

    return {
        title: post.title,
    }
}



export default function Post({ params }: {params: {postId: string}}) {
    const posts = getSortedPostsData()
    const postId = params.postId    
    const post = posts.find(post => post.id === postId)

   if(!post) {
        return notFound()
    }

    return (
        <section className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <time dateTime={post.date}>{post.date}</time>
            <br />
            
            <Link href="/#posts">Back to Posts</Link>
        </section>
    )

}
