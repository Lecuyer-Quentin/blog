import React from 'react'
import Link from 'next/link'
import Search from './Search'
import MyProfilePic from './MyProfilePic'

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center py-4 sticky top-0 shadow-md' >
        <MyProfilePic />
        <Search />
    </nav>
  )
}