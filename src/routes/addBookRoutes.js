const express=require('express');
const addBookRouter = express.Router();

function router(nav){
   
addBookRouter.route('/').get((req,res) => {
    res.render('addbook',
        {
            nav,
            title:'Add Book',
        })
    
});



return addBookRouter;
}

module.exports = router;