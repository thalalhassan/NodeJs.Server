const express=require('express');
const addAuthorRouter = express.Router();

function router(nav){
   
addAuthorRouter.route('/').get((req,res) => {
    res.render('addauthor',
        {
            nav,
            title:'Add Author',
        })
    
});



return addAuthorRouter;
}

module.exports = router;