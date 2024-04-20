import React from 'react'
import { ButtonTextOrderNow, BuyTheBookText, PaperbackText } from '../../variables/Text'
import { amazonePay, ebook } from '../../assets/images'

export default function HomeGetBook() {
    return (
        <section className='flex flex-col justify-center items-center w-full bg-slate-200 min-h-[70vh] p-4 laptop:min-h-screen desktop:min-h-[70vh]'>
            <div className='flex flex-col justify-center gap-12 items-center border h-[600px]'>
                <div className='cursive text-xl uppercase text-center mt-5 tablet:text-3xl laptop:text-4xl laptop:mt-20'>
                    <BuyTheBookText/>
                </div>
                <div className='bg-[#b5c18e] h-min flex justify-center items-center p-4 '>
                    <div className='bg-white flex h-auto laptop:w-[600px] tablet:w-80'>
                        <img className='w-[50%] h-full' src={ebook} alt="This is eBook" />
                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-get-book font-semibold'>
                                <PaperbackText/>
                            </span>
                            <div className='w-[70%] h-16 mb-4 laptop:h-32'>
                                <img src={amazonePay} alt="This is Amazone Pay" />
                            </div>
                            <div className='button-secondary'>
                                <ButtonTextOrderNow/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
