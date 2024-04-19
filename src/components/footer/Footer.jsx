import React from 'react'
import {Instagram, X, LinkedIn, Link} from '@mui/icons-material';
import { CopyRight, EmailText } from '../../variables/Text';
import { logo } from '../../assets/images';

export default function Footer() {
    return (
        <footer className='min-h-[50vh] p-4'>
            <div className='text-xs cursive text-slate-600 py-12'>
                <EmailText/>
            </div>
            <div className='flex justify-between items-center border-t border-slate-200 pt-12'>
                <div className='w-12 h-12'>
                    <img src={logo} alt="This is logo" />
                </div>
                <div className='flex gap-2'>
                    <Instagram 
                        sx={{ color: '#716e6d' }}
                    />
                    <X
                        sx={{ color: '#716e6d' }}
                    />
                    <LinkedIn
                        sx={{ color: '#716e6d' }}
                    />
                </div>
            </div>
            <div className='text-end text-[#716e6d] text-xs mt-6'>
                <CopyRight/>
            </div>
        </footer>
    )
}
