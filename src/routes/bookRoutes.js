const express=require('express');
const booksRouter = express.Router();
const bookData = require('../model/bookData.js')

function router(nav){
    

booksRouter.route('/').get((req,res) => {
   bookData.find().then((books)=>{ 
       res.render('books',
        {
            nav,
            title:'Books',
            books
        })
    });
    
});
booksRouter.route('/:id').get((req,res)=>{
    const id = req.params.id //to id value
    bookData.findOne({_id:id}).then((book)=>{ 
    res.render('book',
    {
        nav,
        title:'single Book',
        book
        })
    });
});
booksRouter.route('/delete/:id').get((req,res)=>{
    const id = req.params.id //to id value
    bookData.deleteOne({_id:id}).then(()=>{ 
    res.redirect('/books');
    });
});

booksRouter.route('/editbook/:id').get((req,res)=>{
    const id = req.params.id //to id value
    bookData.findOne({_id:id}).then((book)=>{ 
        res.render('addbook',
        {
            nav,
            title:'Edit Book',
            book,
            flag:1
            })
        });
});


return booksRouter;
}

module.exports = router;