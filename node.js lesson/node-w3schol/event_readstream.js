//eadStream obyekti faylni ochish va yopishda hodisalarni ishga tushirish
// let fs =require('fs');
// let rs = fs.createReadStream('./domofile1.html');
// rs.on('open',function (){
//     console.log('the file is open')
// })
//Eventemitter obyekti 
//let events =require('events');
//let eventEmitter =new events.EventEmitter();


//Hodisani yoqish uchun emit()usuldan foydalaning.
let events=require('events');
let eventEmitter =new events.EventEmitter();
//create an event handler
let myEventhandler =function(){
    console.log('i hear a scream!');
}
//assign the event handler to an event:
eventEmitter.on('scream',myEventhandler);
//fire the 'scream' event:
eventEmitter.emit('scream')