const express=require('express');
const booksRouter = express.Router();

function router(nav){
    var books =[
    {
        title:'war and peace',
        genre:'historic',
        author:'Holman',
        img:'img/b1.jpg'
    },{
        title:'hello world',
        genre:'logic',
        author:'thr',
        img:'img/b2.jpg'

    },{
        title:'javaScript',
        genre:'programming',
        author:'Douglas Crockford',
        img:'img/b3.jpg'

    },
]

booksRouter.route('/').get((req,res) => {
    res.render('books',
        {
            nav,
            title:'Books',
            books
        })
    
});

booksRouter.route('/:id').get((req,res)=>{
    const id = req.params.id //to id value
    res.render('book',
    {
        nav,
        title:'single Book',
        book:books[id]
    })
});

return booksRouter;
}

module.exports = router;