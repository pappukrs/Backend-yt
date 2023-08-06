 const EventEmitter = require('events');
 const event=new EventEmitter();


// //register
// //synchronous
// console.log("first")
// event.on("event-A",function(data,name){
//    console.log("1 Event-A get called with data:"+data,name);
// })

// console.log("second")
// event.on("event-A",function(){
//     console.log(" 2 Event-A without parameter get called with data:");
//  })

//  console.log("third")
//  event.on("event-A",function(data){
//     console.log(" 3 Event-A with only data get called with data:"+data);
//  })

// //call

// console.log("fourth")
// event.emit("event-A","codeserver","pappu kumar");

// console.log("fifth");


//register


function something(){
    console.log("Event");
}

// register
event.once("event-trigger",something);

event.emit("event-trigger");
event.emit("event-trigger");
event.emit("event-trigger");

event.emit("event-trigger");
event.emit("event-trigger");
event.emit("event-trigger");
event.emit("event-trigger");
event.emit("event-trigger");
event.emit("event-trigger");
event.emit("event-trigger");
event.emit("event-trigger");
event.emit("event-trigger");




