import React from 'react'
import Creator from './creator/Creator'
import HowToProduct from './howToProduct/HowToProduct'
import { medal } from '../../assets/images'
import Book from './book/Book'
import { ButtonTextOrderNow, OneBestProduct, ProductHuntText } from '../../variables/Text'

export default function HomeIntro() {
    return (
        <div className='laptop:flex flex-col justify-center min-h-[92vh] p-4 mb-12 laptop:p-6 laptop:h-screen-[65vh]'>
            <div className='w-full laptop:flex items-center justify-center gap-40 mt-5 laptop:px-12'>
                <div>
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
                            <span className='text-md font-semibold capitalize tablet:text-lg'>
                                <OneBestProduct/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='max-w-[749px]:w-[35rem] tablet:w-[29rem] laptop:w-[33rem]'>
                    <Book/>
                </div>
            </div>
        </div>
    )
}
