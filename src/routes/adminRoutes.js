const express=require('express');
const addBookRouter = express.Router();
const bookData = require('../model/bookData.js')

function router(nav){
   


addBookRouter.route('/add').get((req,res) => {
    var item={
        Title:req.param('Title'),
        Author:req.param('Author'),
        Genre:req.param('Genre')
    }
    var book = new bookData(item);
    book.save();
    res.redirect('/books')    
});

addBookRouter.route('/edit').get((req,res) => {
    bookData.update({_id:id},{Title:req.params.Title,Author:req.params.Author,Genre:req.params.Genre},()=>{ 
        res.redirect('/books')
        });
});


return addBookRouter;
}

module.exports = router;