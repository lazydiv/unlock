import React from 'react'
import { FiGithub } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className='sticky  flex-row items-center justify-between  flex p-10 md:p-10 md:mt-10 md:rounded-3xl bg-none md:bg-white/5 w-full'> 
        <div>
            <h1 className='text-2xl font-semibold'>Lazy<span className='text-blue-500'>Dev</span></h1>

        </div>
        <a className='text-2xl' href='https://github.com/lazydiv'><FiGithub /></a>
    </nav>
  )
}

export default Nav