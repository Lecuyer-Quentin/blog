import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center py-4 sticky top-0 shadow-md font-mono' >
        
        <h2 className='text-2xl font-bold text-grey-800 ml-6'>My Blog</h2>

        <div className='flex'>
            <Link href='/' className='mr-6 text-grey-800 hover:text-red-600'>
                Home
            </Link>
            <Link href='/blog' className='mr-6 text-grey-800 hover:text-red-600'>
                Blog
            </Link>
            <Link href='/about' className='mr-6 text-grey-800 hover:text-red-600'>
                About
            </Link>
        </div>
        
    </nav>
  )
}