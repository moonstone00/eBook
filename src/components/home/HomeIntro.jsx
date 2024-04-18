import React from 'react'
import Creator from './creator/Creator'
import HowToProduct from './howToProduct/HowToProduct'
import { medal } from '../../assets/images'
import Book from './book/Book'
import { ButtonTextOrderNow, OneBestProduct, ProductHuntText } from '../../variables/Text'

export default function HomeIntro() {
    return (
        <div className='min-h-screen p-4'>
            <Creator/>
            <HowToProduct/>
            <div className='button-primary capitalize'>
                <ButtonTextOrderNow/>
            </div>
            <div className='w-max flex gap-2 items-center px-4 py-2 pr-8 my-5 text-white cursive bg-[#221d21] rounded-xl'>
                <div className='w-10 h-10'>
                    <img src={medal} alt="This is medal" />
                </div>
                <div>
                    <span className='text-sm uppercase'>
                        <ProductHuntText/>
                    </span>
                    <span className='text-lg font-semibold capitalize'>
                        <OneBestProduct/>
                    </span>
                </div>
            </div>
            <div className='w-full'>
                <Book/>
            </div>
        </div>
    )
}
