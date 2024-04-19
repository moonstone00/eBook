import React from 'react'
import { ButtonTextOrderNow, BuyTheBook, PaperbackText } from '../../variables/Text'
import { amazonePay, ebook } from '../../assets/images'

export default function HomeGetBook() {
    return (
        <section className='bg-slate-200 min-h-[80vh] p-4'>
            <div className='cursive'>
                <BuyTheBook/>
            </div>
            <div className='border border-black w-full h-min flex justify-center items-center p-4'>
                <div className='bg-white flex w-80 h-60'>
                    <img className='w-[50%] h-full ' src={ebook} alt="This is eBook" />
                    <div>
                        <PaperbackText/>
                        <div>
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
