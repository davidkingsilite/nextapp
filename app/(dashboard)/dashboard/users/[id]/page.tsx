import React from 'react'

const page = async ({params}:{ params: Promise<{id: string}>}) => {
const id = (await params).id;
 
  return (
    <div>
     
        <h1 className='text-3xl'>user profile: {id}</h1>
        
    </div>
  )
}


export default page