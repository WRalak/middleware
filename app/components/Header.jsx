
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className='flex gap-2 font-medium'>
    <Link href="/">Home</Link>
    <Link href="/login">Login</Link>
    <Link href="/register">Register</Link>
    <Link href="/admin">Admin</Link>
    <Link href="/aboutus">About Us</Link>
    <Link href="/profile">Profile</Link>
    <Link href="/order">Order</Link>
      </nav>
    </header>
  )
}

export default Header
