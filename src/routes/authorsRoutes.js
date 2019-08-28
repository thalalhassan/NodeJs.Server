const express=require('express');
const authorsRouter = express.Router();

function router(nav){
var authors =[
    {
        title:'Shakespeare',
        country:'United Kingdom',
        img:'img/ss.jpg'
    },{
        title:'Geoffrey Chaucer ',
        country:'London',
        img:'img/gc.jpg'

    },{
        title:'George Orwell',
        country:'Motihari',
        img:'img/go.jpg'

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