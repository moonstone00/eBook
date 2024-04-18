import React from 'react'
import { logo } from '../../assets/images'
import { NavbarText } from '../../variables/Text'

export default function Navbar() {
    return (
        <>
            <header className='h-32 sm:flex items-center justify-between py-5 px-1 sm:px-12 md:px-16 '>
                <div className='w-16 h-16 flex flex-col items-center sm:block'>
                    <img src={logo} alt='This is Logo'/>
                    <ul className='sm:hidden text-slate-600 text-sm mt-4 cursive font-light'>
                        <NavbarText/>
                    </ul>
                </div>
                <nav className='hidden sm:block'>
                    <ul className='text-slate-600'>
                        <NavbarText/>
                    </ul>
                </nav>
            </header>
        </>
    )
}
