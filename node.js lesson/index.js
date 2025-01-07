// console.log('hello world', __dirname);
// const logger =() => console.log('hello loger', __filename)
// logger();
// // const car ={name:'mers',color:'black'}
// // const carLogger =() => console.log('logger car')
// // const user ={name:'hojiakbar'}
// // const userLogger =()=> console.log('logger user')
// const userData=require('./node-w3schol/user');
// const carData=require('./node-w3schol/car');

// console.log(userData.user)
// userData.userLogger()

// console.log(carData.car)
// carData.carLogger();
//server yaratish
const http = require('http')
const server =http.createServer((req,res)=>{
    //request -serverga so'rov
    //response =javaob
  console.log(req.url)
res.write('<h1>hello4 world3</h1')
res.end()
})
server.listen(3000, ()=>{
    console.log("server has been started on port:3000")
})