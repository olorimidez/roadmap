import React from 'react'
import { BsMapFill, BsPeopleFill, BsStar, BsStarFill } from 'react-icons/bs'

const Rating = () => {
  return (
    <div className='bg-green-50 text-black w-full px-10 pb-2'>
        <div className='w-full max-w-7xl mx-auto scroll-px-10'>
                <div className='grid grid-cols-2 lg:grid-cols-3'>
                    <div className='flex gap-6 px-16 pt-5 relative after:absolute after:right-0 after:top-1/4 after:h-1/2 after:border-r after:border-gray-300'>
                        <BsPeopleFill size={50} className='text-green-800'/>
                        <div className='flex flex-col'>
                            <p className='text-green-950 font-bold text-2xl'>10,000+</p>
                            <p className='text-green-700'>On the path of tech</p>
                        </div>
                    </div>
                     <div className='flex gap-6 px-16 pt-5 relative after:absolute after:right-0 after:top-1/4 after:h-1/2 after:border-r after:border-gray-300'>
                        <BsStarFill size={50} className='text-green-800'/>
                        <div className='flex flex-col'>
                            <p className='text-green-950 font-bold text-2xl'>4.8/5</p>
                            <p className='text-green-700'>Average user rating</p>
                        </div>
                    </div>
                     <div className='flex gap-6 px-16 pt-5 '>
                        <BsMapFill size={50} className='text-green-800'/>
                        <div className='flex flex-col'>
                            <p className='text-green-950 font-bold text-2xl'>100%</p>
                            <p className='text-green-700'>Focused content</p>
                        </div>
                    </div>
                  
                </div>
        </div>
    </div>
  )
}

export default Rating