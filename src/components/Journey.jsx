import React from 'react'
import {  BsCoin, BsFlower2, BsHouse, BsMailbox2, BsPen, BsTools } from 'react-icons/bs'
import CareerStep from './CareerStep'



const Journey = () => {
  return (
    <div className='w-full mx-auto px-10 bg-green-100'>
        <div className='w-full mx-auto max-w-7xl px-10'>
            <div className='text-center'>
                <p className='text-green-500 pt-6 tracking-[3px] text-[12px] font-bold'>
                    HOW IT WORKS
                </p>
                <p className='text-green-950 font-bold text-2xl'>
                    Your Journey, In 6 Simple Steps
                </p>
                <p className='text-gray-600 text-[13px] pt-1 pb-3 max-w-72 mx-auto'>
                    We make it easy for you to find the right career,
                    learn the skills, build your portfolio and get ready
                    for real opportunities.
                </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mt-4'>
               <CareerStep
               icon={<BsFlower2 color='white'/>}
               number="1"
               title="Take a Career Assessment"
               description="Tell us about your interests, skills, budget and goals."
               iconBg="bg-green-700"
               numberColor="text-green-700"
               />

               <CareerStep
               icon={<BsHouse color='white'/>}
               number="2"
               title="Get Your Personalized Roadmap"
               description="See the best career options for you with a clear learning path."
               iconBg="bg-purple-700"
               numberColor="text-purple-700"
               />

                <CareerStep
               icon={<BsPen color='white'/>}
               number="3"
               title="Learn & Practice"
               description="Access curated resources, exercise and step-by-step guiddes."
               iconBg="bg-blue-700"
               numberColor="text-blue-700"
               />

                <CareerStep
               icon={<BsTools color='white'/>}
               number="4"
               title="Build Reall Projects"
               description="Create a portfolio that shows your skilss to employers."
               iconBg="bg-orange-700"
               numberColor="text-orange-700"
               />

                <CareerStep
               icon={<BsMailbox2 color='white'/>}
               number="5"
               title="Prepare for Opportunities"
               description="Get CV support, interview practice and job recommendations."
               iconBg="bg-purple-700"
               numberColor="text-purple-700"
               />

                <CareerStep
               icon={<BsCoin color='white'/>}
               number="6"
               title="Launch Your Career"
               description="Apply for jobs, freelance opportunities or internships."
               iconBg="bg-green-700"
               numberColor="text-green-700"
               />

            </div>
        </div>
    </div>
  )
}

export default Journey