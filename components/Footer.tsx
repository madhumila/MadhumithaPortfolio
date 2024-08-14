import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-[1px] pb-[6rem] border-gray-400 w-[80%] mx-auto gap-[3rem]'>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[rgb(192,132,252)] '>
                    <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Address</h1>
                    <p className='text-[17px] w-[100%] text-white opacity-60'>723, B1, Pearl Heaven<br/>
                    Thrikkakara P O<br/>
                    Eranakulam-682021 <br/>
                    Kerala, India
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[rgb(192,132,252)] '>
                    <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Phone</h1>
                    <p className='text-[17px] w-[90%] text-white opacity-60'>+919789443183</p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[rgb(192,132,252)] '>
                    <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Send Me Email</h1>
                    <p className='text-[17px] w-[90%] text-white opacity-60'>madhumithakp@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
            <div className='text-[18px] mb-[2rem] md:mb-0 text-white opacity-20'>
                Madhumitha K P 2024 | All Rights are Reserved
            </div>
            <div className='flex items-center space-x-10'>
                <p className='text-[18px] text-white opacity-20'>Terms & Condition</p>
                <p className='text-[18px] text-white opacity-20'>Privacy Policy</p>
                <p className='text-[18px] text-white opacity-20'>Sitemap</p>
            </div>
        </div>
    </div>
  )
}

export default Footer