import dotenv from "dotenv"
import uniqid from 'uniqid';
dotenv.config()
import express from "express"
import TodosRouter from "./src/routes/todos.routes.js";
import connectDB from "./src/db/index.js";
const app = express()
const port = process.env.PORT

app.use(express.json())


// practice work frist time
// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })

// const users = []

// app.get('/', (req,res)=>{
//     res.send('hello world')
//     console.log('world');
    

// })

// // add users
// app.post('/user', (req,res)=>{
//    const {title} = req.body
// if (!title) {
//   res.status(400).json({
//     messege:'Title is required'
//   })
//   return
// }
//     users.push({
//       title,
//       id:uniqid()
//     })
//     res.status(201).json({
//       messege:'user created',
//       data:users
//     })

// })
// // get all users

// app.get('/users',(req, res)=>{

//   if (users.length === 0 ) {
//     res.status(400).json({
//       messege:'please add user'
//     })
//     return
//   }
//   res.status(200).json({
//     data:users
//   })
// })


app.use("/api/v1/",TodosRouter)

connectDB()
.then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port} name ${process.env.USERNAMES}`)
  })

})
.catch((err)=>{
  console.log("MONGO DB connection failed !!! ", err);
})