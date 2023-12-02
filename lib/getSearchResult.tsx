import { getSortedPostsData } from './posts'

type Props = {
    params: {
        searchTerm: string
    }
}

export default async function getSearchResult({ params: { searchTerm } }: Props) {
    const posts = getSortedPostsData()
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return {
        props: {
            posts: filteredPosts
        }
    }
}