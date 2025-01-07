
 //1-usul file yaratish
// fs.appendFile('mynewfile1.html','hello content!',function(err){
//     if(err) throw err;
//     console.log('saved!')
// })


//2-usul
// let fs = require('fs');
// fs.open("mynewfile2.txt","w", function(err , file){
//     if(err) throw err;
//     console.log('saved!');
// } );
  ///3-usul

// let fs =require('fs');
// fs.writeFile('mynewfile3.html', 'hello content!',function(err){
//  if(err) throw err;
//  console.log('saved');
// });

//4-usul yaratilgan fileni o'chirish fs.unlink()
//  let fs = require('fs');
//  fs.unlink('mynewfile2.txt', function (err){
//     if(err) throw err;
//     console.log('file deleted');
//  });

//  fs.unlink('mynewfile3.html',function(err){
//     if(err) {
//         console.error('xatolik')
//         return
//     }

//     console.log('deleted');

//  });

 //fileni qayta nomlash  fs.rename() orqali
//   let fs=require('fs');
//    fs.rename('mynewfile1.txt','myrenamefile.txt', function (err){
//     if(err) throw err;
//     console.log('file renamed!')
//    });



//url moduli
let url =require('url');
let  adr = 'http://localhost:8080/default.htm?year=2017&month=february';
let q = url.parse(adr,true);
 console.log(q.host);//return 'localhost:8080'
 console.log(q.pathname);//returns '/default.html'
 console.log(q.search);//return  '?year=2017&month=february';
 let qdata =q.query;//return an object:{year:20017,month:february'}
 console.log(qdata.month);//return 'february'