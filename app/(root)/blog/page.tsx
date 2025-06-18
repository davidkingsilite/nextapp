import BlogSection from '@/components/BlogSection'
import React from 'react'

const page = () => {
   
  return (
    <div className='my-8 mx-8'>
        <div><h1 className='text-3xl font-bold flex justify-center'>Welcome to our Blog</h1></div>
        <BlogSection />
        

    </div>
  )
}

export default page