const express=require('express');
const addBookRouter = express.Router();
const bookData = require('../model/bookData.js')

function router(nav){
   
addBookRouter.route('/').get((req,res) => {
    res.render('addbook',
        {
            nav,
            title:'Add Book',

            
        })
    
});

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
    var item={
        Title:req.param('Title'),
        Author:req.param('Author'),
        Genre:req.param('Genre')
    }
    var book = new bookData(item);
    res.redirect('/books')    
});


return addBookRouter;
}

module.exports = router;