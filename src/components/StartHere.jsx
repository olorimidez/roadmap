import React from 'react'

const StartHere = () => {
  return (
    <div className='bg-green-100 text-black w-full px-10'>
        <div className='w-full max-w-7xl mx-auto px-10'>
            <div className='flex justify-between pt-10'>
                <div>
                    <p className='bg-green-300 text-green-950 rounded-2xl mb-3 text-center max-w-32'>Built for you!</p>
                    <h1 className='text-3xl font-bold md:text-5xl pb-4'>Your Tech Career <br /> <span className='text-green-700 font-bold'>Starts Here</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit doloribus voluptatem incidunt necessitatibus. Veritatis voluptatem odit facilis voluptate! Deserunt enim non quae accusamus. Et neque unde laudantium aperiam placeat.</p>
                    <div className='flex gap-4 mt-4'>
                        <div className=' bg-green-950 text-white cursor-pointer rounded-2xl px-4 py-2'>
                            <button >Start Your Free Assessment</button>
                        </div>
                        <div className='border border-green-700 bg-white cursor-pointer rounded-2xl px-4 py-2'>
                            <button>Watch Video</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>image</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartHere