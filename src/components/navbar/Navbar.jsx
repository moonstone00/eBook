import React from 'react'
import { logo } from '../../assets/images'

export default function Navbar() {
    return (
        <>
            <header className='sm:flex items-center justify-between p-5 sm:px-12 md:px-16'>
                <div className='w-16 h-16 flex flex-col items-center sm:block'>
                    <img src={logo} alt='This is Logo'/>
                    <ul className='sm:hidden text-white'>
                        <li>eBook</li>
                    </ul>
                </div>
                <nav className='hidden sm:block'>
                    <ul className='text-white'>
                        <li>eBook</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
