const dns=require('dns');

// console.log(dns)


// dns.lookup("ZOMato.com",(err,address,family)=>{
//   if(err){
//     console.log(err);
//     throw error;
//   }
//   console.log(`The IP address is ${address}`);
//   console.log("IP Version is :"+(family===4?"IPv4":"IPv6"));
// })


// dns.reverse('8.8.8.8',(err,hostname)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(hostname);
// })


dns.resolve("hp.com","MX",(err,records)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(records);
})