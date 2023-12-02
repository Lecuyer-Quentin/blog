import React from 'react'
import { getSortedPostsData } from '../../lib/posts'
import notFound from './not-found'
import ResultItem from './components/ResultItem'

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const posts = getSortedPostsData()
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

    if(!filteredPosts.length) return {title :'No results found'}

    return {
        title: `Search results for ${searchTerm}`
    }
}

export default function SearchResults({ params: { searchTerm } }: Props) {
    const posts = getSortedPostsData()
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    if(!filteredPosts.length) return notFound()

    return (
        <main className='flex min-h-screen flex-col items-center'>
            <h1 className='text-4xl font-bold mt-12'>Search results for {searchTerm}</h1>
             
            <ul className='flex flex-col items-center mt-20'>
                {filteredPosts.map(post => (
                    <ResultItem key={post.id} result={post} />
                ))}
            </ul>
        </main>
    )
}
