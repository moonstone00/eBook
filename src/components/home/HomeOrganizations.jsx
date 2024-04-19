import React from 'react'
import { blackLivesMatter, palestine, peace } from '../../assets/images'
import { BlackLivesMatterText, DonateProceedsToOrganizations, PeaceText, SavePalestineText } from '../../variables/Text'

export default function HomeOrganizations() {
    return (
        <section className='flex flex-col justify-center p-4 bg-[#D37676] tablet:min-h-[50vh] laptop:min-h-[110vh] desktop:min-h-[80vh]'>
            <div className='cursive text-lg font-semibold text-white text-center mt-16 mb-8'>
                <DonateProceedsToOrganizations/>
            </div>
            <div className='flex flex-col justify-center gap-3 mb-16 min-[760px]:flex-row'>
                <div className='flex flex-col items-center'>
                    <img className='w-[500px] h-auto' src={blackLivesMatter} alt="This is organizations black lives matter" />
                    <div className='text-white uppercase cursive'>
                        <BlackLivesMatterText/>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='w-[500px] h-auto' src={peace} alt="This is organizations black lives matter" />
                    <div className='text-white uppercase cursive'>
                        <PeaceText/>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='w-[500px] h-auto' src={palestine} alt="This is organizations black lives matter" />
                    <div className='text-white uppercase cursive'>
                        <SavePalestineText/>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ketika pada ukuran table tingginya jangan min-h-screen