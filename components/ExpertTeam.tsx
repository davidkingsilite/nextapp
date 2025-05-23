import React from 'react'
import Divider from './Divider'

const ExpertTeam = () => {
  return (
    <div className='py-14'>
        <div className='flex justify-between'>
            <h1 className='font-bevietnam text-3xl font-semibold'>Effective Cleaning Requires <br /> an Expert Cleaning Team</h1>
            <div className='font-bevietnam flex flex-col gap-1'>
                <h1 className='text-black-100 text-[15px]'>Expert Team</h1>
                <p className='text-xs text-grey-100'>We have professional expert cleaning staff ensuring top-<br/>notch cleanliness and hygiene for your space.</p>
            </div>
        </div>
        <Divider />
    </div>
  )
}

export default ExpertTeam