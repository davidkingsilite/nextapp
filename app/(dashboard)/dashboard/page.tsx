import Hello from '@/components/Hello';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <section>
      
       <Suspense fallback={<Loading />}>
        <Hello />
       </Suspense>
       
    </section>
    
  );
}

function Loading() {
  return <h2>🌀 Loading...dashboard</h2>;
}

export default page