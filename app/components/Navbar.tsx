"use client"
import React, { useState } from 'react'
import { TbHomeEco } from "react-icons/tb";

interface Link {
    text: string
}

const links: Link[] = [
    { text: "home" },
    { text: "about" },
    { text: "contact" }
]

const Navbar = () => {
    const [theLink, setTheLink] = useState<string>('home')

    return (
        <div className='flex fixed top-8 z-10 max-sm:flex-col max-sm:gap-3 justify-between items-center w-full px-8 mx-auto'>
            <div className='bg-white/30 backdrop-blur-xs max-md:bg-white/60 border flex items-center gap-3 border-white/50 rounded-full w-max pr-5 pl-2 py-2'>
                <div className='bg-white p-2 rounded-full'>
                    <TbHomeEco className='w-6 h-auto max-md:w-5 max-sm:w-4 text-green' />
                </div>
                <h1 className='text-2xl max-md:text-xl max-sm:text-sm text-white font-bold max-md:text-black'>HavenHomes</h1>
            </div>
            <div className='flex bg-white/24 max-md:text-black backdrop-blur-xs gap-2 p-1.5 rounded-full'>
                {links.map((link) => (
                    <a href={`#${link.text}`} key={link.text}>
                        <div onClick={() => setTheLink(link.text)} className={`link ${theLink.includes(link.text) ? "bg-white transition duration-500" : "transition max-md:text-black hover:bg-white/15 text-white duration-500"}`} key={link.text}>
                            <span>{link.text}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Navbar