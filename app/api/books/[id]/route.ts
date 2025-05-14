import books from "../../db";

export async function PUT(request: Request, context: {params:{id : string}}, ){
  const id = Number(context.params.id); //safer than +
  const book = await request.json();

  const index = books.findIndex((b)=> b.id === id);

  if (index === -1){
    return new Response("Book Not Found", { status: 404});
  }

  books[index] = { ...books[index], ...book}; //merge old and new book
  return Response.json(books[index]);
}

export async function DELETE( request: Request, context: {params:{id : string}}){
  const id = +context.params.id;
  const book = await request.json();

  const index = books.findIndex((b)=> b.id === id);
  books.splice(index, 1);
  return Response.json(books);
}