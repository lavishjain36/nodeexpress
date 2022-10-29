// const http=require('http');

// http.createServer((request,response)=>{
//     response.setHeader("Content-Type", "text/plain");
//     response.end("Hello World!");
// }).listen(4000,()=>{
//     console.log("Server running on port 4000")
// })

// const http=require("http");//import modules http from node
// const port=5000; //create a variable for port number

// const server=http.createServer((request,response)=>{
//     // response.setHeader("Content-Type", "text/plain");  
//     // response.end("Hello FOlks")

//     response.writeHeader(200,{'Content-Type': 'text/html'});
//     // let data=`
//     // <div>
//     // <h1>Hello</h1>
//     // <h2>Welcome</h2>
//     // <h3>TO</h3>
//     // <h1>Node.js</h1>
//     // </div>
//     // `

//     let data=[
//         {user:"Ramesh"},
//         {user:"Sohan"}
//     ]

//     response.write(JSON.stringify(data))
// })

// server.listen(port,()=>{
//     console.log(`Server is running on ${port}`)
// })


//Create a Basic server code with the help of express.js framework
const express=require("express");//import 
const app=express();
//setting a port number 
const PORT=process.env.PORT||5000;

let details=[
    {
        id:1,
        name:"John Smith",
        email:"john@gmail.com",
    }
]

// app.get('/all',function(req,res){
//     res.send({
//         status:200,
//         message:"Welcome to Express.js server!"
//     })
// })


app.post('/',(req,res)=>{
  details.push(req.body);
  res.send({message:})
})

app.listen(PORT,()=>console.log("Server is running on port "+ PORT))