const express =require('express');
const chalk =require('chalk');
const path=require('path')
const app=express();// new optional
const booksRouter = express.Router();

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/src/views/index.html");
// }).listen(4000,()=>{
//     console.log(`listening to port ${chalk.green(' 4000')}`)
// });//or app.listen(3030)
var books =[
    {
        title:'war and peace',
        genre:'historic',
        author:'Holman'
    },{
        title:'hello world',
        genre:'logic',
        author:'thr'
    },{
        title:'javaScript',
        genre:'programming',
        author:'Douglas Crockford'
    },
]



app.use('/books',booksRouter);
app.use(express.static(path.join(__dirname,'public')));
app.set('views','./src/views');
app.set('view engine','ejs');

booksRouter.route('/').get((req,res) => {
    res.render('books',
        {
            nav:[
                {
                    link:'/books',
                    title:'Books'
                },
                {
                    link:'/authors',
                    title:'Authors'
                }
                ],
            title:'Books',
            books
        })
    
    })

app.get('/',(req,res)=>{
res.render('index',
    {
        nav:[
            {
                link:'/books',
                title:'Books'
            },
            {
                link:'/authors',
                title:'Authors'
            }
            ],
        title:'Library'
    })

}).listen(4000,()=>{
    console.log(`listening to port ${chalk.green(' 4000')}`)
}); 


