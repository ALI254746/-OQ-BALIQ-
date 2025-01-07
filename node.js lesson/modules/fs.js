const fs = require('fs');
const path = require('path');
//
// fs.mkdir(path.join(__dirname, 'templates'), err => {
//     if (err) throw new Error()

//     console.log('folder was created successfully')
// });

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     console.log(err);
//     if (err) throw new Error();
//     console.log("successfully");
// });
//papaka ochib olish
fs.writeFile(path.join(__dirname, 'notes', 'december.txt'), 'create new course NodeJS', (err) => {
    if (err) throw new Error();
    console.log('file was created successfully');
//papaka ichiga file qo'shish
  fs.appendFile(path.join(__dirname,'notes','december.txt'),"and micro service",err=>{
    if(err) throw new Error();
    console.log("successfully")
    fs.readFile(path.join(__dirname,'notes','december.txt'),(err,data)=>{
      if(err) throw new Error()
        console.log(Buffer.from(data).toString())
    })
  })
});



// fs.readFile(path.join(__dirname,'notes','december.txt'),'utf-8'(err,data)=>{
//   if(err) throw new Error()
//     console.log(data)
// })
