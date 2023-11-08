const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes 

app.post('/book', async (req,res) => {
   try{
         const book = await Book.create(req.body);
         res.status(200).json(book);
   }catch(error){
      console.log(error);
      res.status(500).json({message:error.message});
   }
});

app.get('/book', async (req,res) => {
    try{
        const books = await Book.find({});
        res.status(200).json(books);
  }catch(error){
     console.log(error);
     res.status(500).json({message:error.message});
  }
});

app.get('/book/:id', async (req,res) => {
    try{
        const { id } = req.params;
        const book = await Book.findById(id);

        if(!book){
             res.status(404).send(`No record found with the given ID`);
        }
        res.status(200).json(book);
  }catch(error){
     console.log(error);
     res.status(500).json({message:error.message});
  }
});

app.put('/book/:id',async (req,res) => {
    try{
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id,req.body);
        
        if(!book){
             res.status(404).send(`No record found with the given ID`);
        }

        const updatedBook = await Book.findById(id);
        res.status(200).json(updatedBook);

  }catch(error){
     console.log(error);
     res.status(500).json({message:error.message});
  }
});


app.delete('/book/:id', async (req,res) => {
    try{
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        
        if(!book){
             res.status(404).send(`No record found with the given ID`);
        }
        res.status(200).json({message:"Book Deleted"});
  }catch(error){
     console.log(error);
     res.status(500).json({message:error.message});
  }
});


mongoose.set('strictQuery',false);

mongoose.connect('mongodb+srv://Sahil7194:Sahil7194@cluster0.csinlnf.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000, () =>{
            console.log('app working on 3000 port and connected with databse');
    });
}).catch((error) => {
        console.log(error);
});