const express =require('express');
const chalk =require('chalk');
const path=require('path')
const app=express();// new optional

var nav = [
    {
        link:'/books',
        title:'Books'
    },
    {
        link:'/authors',
        title:'Authors'
    },
    {
        link:'/addbook',
        title:'AddBook'
    },
    {
        link:'/login',
        title:'LogIn'
    },
    {
        link:'/login/signup',
        title:'SignUp'
    }
    ];




const booksRouter = require('./src/routes/bookRoutes')(nav); // passing nav to booksRoutes.js (routerFunction)
const authorsRouter = require('./src/routes/authorsRoutes')(nav);
const addBookRouter = require('./src/routes/addBookRoutes')(nav);
const signRouter = require('./src/routes/signRoutes')(nav);


app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',signRouter);
app.use('/addbook',addBookRouter);

app.use(express.static(path.join(__dirname,'public')));
app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
res.render('index',
    {
        nav,
        title:'Library'
    })

}).listen(4000,()=>{
    console.log(`listening to port ${chalk.green('4000')}`)
}); 


