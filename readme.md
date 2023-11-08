# Book Crud App 

## ref Api

#### To add new book

ulr : localhost:3000/book
method: post 

example request body 

``json
{
  "title":"book 6",
  "author":"author 6",
  "description":"this is good book"
}``

#### To get All books

ulr : localhost:3000/book
method: get 

#### To Get Single book by Id 

ulr : localhost:3000/book/654b0ed47b59b2f5a448c5d2
method: get 

#### To update a single book by id

ulr : localhost:3000/book/654b0ed47b59b2f5a448c5d2
method: put 

example request body

`` json 
{
  "title":"book 10",
  "author":"author 6"
}
``
#### TO Delete Single book by Id

ulr : localhost:3000/book/654b0ed47b59b2f5a448c5d2
method: delete