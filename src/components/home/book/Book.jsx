import React from 'react'
import { ebook } from '../../../assets/images'

export default function Book() {
    return (
        <div className='h-[33rem] flex justify-center items-center bg-[#D37676]'>
            <div className='w-60 '>
                <img src={ebook} alt="This is eBook" />
            </div>
        </div>
    )
}
