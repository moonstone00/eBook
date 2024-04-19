import React from 'react'
import { ButtonTextOrderNow, BuyTheBook, PaperbackText } from '../../variables/Text'
import { amazonePay, ebook } from '../../assets/images'

export default function HomeGetBook() {
    return (
        <section className='bg-slate-200 min-h-[80vh] p-4'>
            <div className='cursive text-xl uppercase text-center mb-2 mt-5'>
                <BuyTheBook/>
            </div>
            <div className='border border-black w-full h-min flex justify-center items-center p-4'>
                <div className='bg-white flex w-80 h-60'>
                    <img className='w-[50%] h-full ' src={ebook} alt="This is eBook" />
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-get-book font-semibold'>
                            <PaperbackText/>
                        </span>
                        <div className='w-[70%] h-12 mb-3'>
                            <img src={amazonePay} alt="This is Amazone Pay" />
                        </div>
                        <div className='button-secondary'>
                            <ButtonTextOrderNow/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
