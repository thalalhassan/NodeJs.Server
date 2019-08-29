const express=require('express');
const authorsRouter = express.Router();
const authorData = require('../model/authorData.js')


function router(nav){
    authorsRouter.route('/').get((req,res) => {
        authorData.find().then((authors)=>{ 
            res.render('authors',
             {
                 nav,
                 title:'authors',
                 authors
             })
         });
         
     });

authorsRouter.route('/:id').get((req,res)=>{
    const id = req.params.id //to id value
    authorData.findOne({_id:id}).then((author)=>{ 
    res.render('author',
    {
        nav,
        title:'single author',
        author
        })
    });
});
authorsRouter.route('/delete/:id').get((req,res)=>{
    const id = req.params.id //to id value
    authorData.deleteOne({_id:id}).then(()=>{ 
    res.redirect('/authors');
    });
});

authorsRouter.route('/editauthor/:id').get((req,res)=>{
    const id = req.params.id //to id value
    authorData.findOne({_id:id}).then((author)=>{ 
        res.render('addauthor',
        {
            nav,
            title:'Edit author',
            author,
            flag:1
            })
        });
});
return authorsRouter;
}

module.exports = router;