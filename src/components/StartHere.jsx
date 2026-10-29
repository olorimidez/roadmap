import Image from 'next/image'
import React from 'react'
import lady from "../assets/hero_image.avif"


const StartHere = () => {
  return (
    <div className='bg-green-100 text-black w-full px-10'>
        <div className='w-full max-w-7xl mx-auto px-10'>
           
<div className="grid grid-cols-1 lg:grid-cols-2 pt-10 gap-4 lg:gap-0">
  {/* Text section */}
  <div className="order-2 lg:order-1">
    <p className="bg-green-300 text-green-950 rounded-2xl mb-3 text-center max-w-32">
      Built for you!
    </p>

    <h1 className="text-3xl font-bold md:text-5xl pt-4 pb-6">
      Your Tech Career <br />
      <span className="text-green-700 font-bold">
        Starts Here
      </span>
    </h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptates odit doloribus voluptatem incidunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolorem error provident adipisci consequatur nisi accusamus alias quam quod ex. necessitatibus.
    </p>

    <div className="flex flex-wrap gap-4 mt-8 mb-5">
      <div className="bg-green-950 text-white cursor-pointer rounded-2xl px-4 py-2">
        <button>Start Your Free Assessment</button>
      </div>

      <div className="border border-green-700 bg-white cursor-pointer rounded-2xl px-4 py-2">
        <button>Watch Video</button>
      </div>
    </div>
  </div>

  {/* Image section */}
  <div className="order-1 lg:order-2">
    <Image
    src={lady}
    height={300}
    width={300}
    alt='lady with a laptop'
    className='w-full h-auto'
    />

  </div>
</div>

        </div>
    </div>
  )
}

export default StartHere