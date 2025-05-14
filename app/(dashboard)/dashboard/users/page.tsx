import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
        <h1>Dashboard users</h1>
        <ul className='mt-10' >
            <li> <Link href="/dashboard/users/1"> Users 1</Link></li>
            <li> <Link href="/dashboard/users/2"> Users 2</Link></li>
            <li> <Link href="/dashboard/users/3"> Users 3</Link></li>
            <li> <Link href="/dashboard/users/4"> Users 4</Link></li>
        </ul>

    </div>
  )
}

export default page