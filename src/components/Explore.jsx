import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsCodeSlash } from 'react-icons/bs'
import man from "../assets/explore_img.avif"


const Explore = () => {
  return (
    <div className='w-full mx-auto p-10 bg-green-100'>
        <div className='w-full max-w-7xl mx-auto p-10 '>
            <p className='text-green-700 border-l-2 border-green-700 px-1'>
                POPULAR CAREER PATHS
            </p>
            <div className='mb-2'>
                <p className='font-bold text-green-950 text-3xl pt-3' >Explore In-Demand Tech Careers</p>
                <p className='text-gray-700'>Choose a career path that matches your interests, background and goals. <br />
                    Each path comes with a step-by-step roadmap, resources and projects.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className="rounded-2xl overflow-hidden bg-gray-100">


                    <div className="h-220px">
                        <Image
                        src={man}
                        alt="Frontend developer"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        />
                    </div>


                    <div className="p-5 rounded-2xl">

                        <div className="bg-purple-700 w-10 h-10 flex items-center justify-center rounded-lg mb-3">
                        <BsCodeSlash color="white" />
                        </div>

                        <p className="font-bold text-green-900">
                        Frontend Development
                        </p>

                        <p className="text-gray-700 pt-2">
                        Build beautiful and interactive web experiences
                        using modern technologies like React & Next.js.
                        </p>

                        <Link
                        href="/"
                        className="text-green-700 flex items-center gap-2 pt-4"
                        >
                        View Roadmap <BsArrowRight />
                        </Link>

                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Explore