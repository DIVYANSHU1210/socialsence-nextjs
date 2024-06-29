"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";

const Nav = () => {
  return (
    <nav className='flex justify-between w-full mb-16 pt-3 items-center'>
        <Link href='/' className='flex gap-2 items-center'>
            <Image 
                src='/assets/images/logo.svg'
                alt='logo'
                width={30}
                height={30}
                className='object-contain'    
            />
            <p className='logo_text'>Promptopia</p>
        </Link>

        <div className='flex gap-4'>
            <Link href='/'>Dashboard</Link>
            <Link href='/'>Theme</Link>
            <Link href='/user-profile'>Profile</Link>
        </div>

        <div className='flex gap-4 max-sm:hidden'>
            <div className='flex gap-1 border-slate-950 bg-slate-200 rounded-md items-center p-1'>
                <CiSearch/>
                <input type="text" className='bg-transparent outline-none '  placeholder='Search Here'/>
            </div>
            
            <Link href='/'>
                <Image 
                    src='/assets/images/profile.webp'
                    // className='rounded-full'
                    width={38}
                    height={38}/>
            </Link>
        </div>

    </nav>
  )
}

export default Nav