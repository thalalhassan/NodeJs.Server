const express=require('express');
const authorsRouter = express.Router();

function router(nav){
    var authors =[
    {
        title:'Shakespeare.',
        genre:'historic',
        img:'img/b1.jpg'
    },{
        title:'Geoffrey Chaucer ',
        genre:'logic',
        img:'img/b2.jpg'

    },{
        title:'George Orwell',
        genre:'programming',
        img:'img/b3.jpg'

    },
]

authorsRouter.route('/').get((req,res) => {
    res.render('authors',
        {
            nav,
            title:'Authors',
            authors
        })
    
});

authorsRouter.route('/:id').get((req,res)=>{
    const id = req.params.id //id value
    res.render('author',
    {
        nav,
        title:'Author Details',
        author:authors[id]
    })
});

return authorsRouter;
}

module.exports = router;