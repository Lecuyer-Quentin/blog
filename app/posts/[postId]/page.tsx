import { notFound } from "next/navigation"
import { getSortedPostsData, getPostData } from "@/lib/posts"
import Link from 'next/link'


type Props = {
    post: BlogPost
}

// This will generate the static paths for the dynamic routes
// Make SSG form dynamic routes
export function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map(post => {
        return {
            params: {
                postId: post.id
            }
        }
    })
}

// This will generate the metadata for the dynamic routes
export function generateMetadata({ params }: {params: {postId: string}}) {
    const posts = getSortedPostsData()
    const postId = params.postId
    const post = posts.find(post => post.id === postId)

    if(!post) return {title :'404 - Page Not Found'}

    return {
        title: post.title,
    }
}



export default async function Post({ params }: {params: {postId: string}}) {
    const posts = getSortedPostsData()
    const postId = params.postId    
    const post = posts.find(post => post.id === postId)

   if(!post) return notFound()

   const { title, date, contentHtml } = await getPostData(postId)


    return (
        <main className="flex flex-col items-center h-screen mt-10">
            <h1 className="text-2xl font-bold">{title}</h1>
            <time dateTime={date}>{date}</time>
            <br />
            <section className="prose prose-sm text-gray-500 text-center">   
                <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </section>
            <Link href="/"> Back to home </Link>
        </main>
    )

}
