'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'


export default function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchTerm('')
        router.push(`/${searchTerm}`)
    }

  return (
    <form onSubmit={handleSubmit} className='flex items-center mr-6'>
        <input 
            type='text' 
            className='rounded-l-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none' 
            placeholder='Search'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />
        <button type='submit' className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-full leading-tight'>
            Search
        </button>
    </form>
  )
}
