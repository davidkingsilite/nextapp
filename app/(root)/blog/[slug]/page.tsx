
import Image from 'next/image';
import { notFound } from 'next/navigation';


interface Params {
  slug: string;
}

export default async function BlogPost({ params }: { params:Params }) {

  const { slug } = await params; 

  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, { cache: 'no-store' });

  if (!res.ok){
    throw new Error("Failed");
   } 

  const post = await res.json();

   if (!post) return notFound();


  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
       <div className="h-[400px] w-full mb-10 relative">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                  />
              </div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm font-semibold mb-2 text-gray-600">
                  {post.author} &nbsp; {post.date}
                </p>
      
      <div className="prose lg:prose-xl">{post.content}</div>
    </article>
  );
}
