const express=require('express');
const signRouter = express.Router();

function router(nav){

signRouter.route('/').get((req,res) => {
    res.render('login',
        {
            nav,
            title:'LogIn',
        })
    
});

signRouter.route('/signup').get((req,res)=>{
    res.render('signup',
    {
        nav,
        title:'SignUp',
    })
});

return signRouter;
}

module.exports = router;