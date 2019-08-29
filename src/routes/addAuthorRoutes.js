const express=require('express');
const addAuthorRouter = express.Router();
const authorData = require('../model/authorData.js')


function router(nav){
   
addAuthorRouter.route('/').get((req,res) => {
    res.render('addauthor',
        {
            nav,
            title:'Add Author',
            flag:0
        })
    
});
addAuthorRouter.route('/add').get((req,res) => {
    var item={

        Name:req.param('Name'),
        Country:req.param('Country'),
    }
    var author = new authorData(item);
    author.save();
    res.redirect('/authors')    
});

addAuthorRouter.route('/edit/:id').get((req,res) => {
    const id = req.params.id 
    authorData.updateOne({_id:id},{
       
        Name:req.param('Name'),
        Country:req.param('Country'),
        },
        ()=>{ 
        res.redirect('/authors')
        });
});


return addAuthorRouter;
}

module.exports = router;