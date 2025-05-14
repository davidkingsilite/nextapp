
import React from 'react'

    const Hello = async () => {
    console.log('i am a server component')
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) throw new Error ('failed to fetch data');

    const albums = await response.json();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols'>
      <h1>Home</h1>
    {albums.map((album: {
      url: string, id:number, title:string, thumbnailUrl: string
}) => (
        <div 
          key={ album.id }
          className='bg-white shadow-md rounded-lg p-10 mx-10 my-5 transition t..'
         >
          <h3 className='text-lg font-bold mb-2'>{album.title}</h3>
          <p className='text-grey-600'> Album ID: {album.id}</p>
          

        </div>
    ))}

     
    </div>
  );
}

export default Hello;