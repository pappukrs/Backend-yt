const fs=require("fs");


//create
//sync



// try {
//     fs.writeFileSync("./TEXT/file1.txt","\n Welcome to codeserver",{flag:"a"});
//    console.log("Text has been successfully written");
// } catch (error) {
//     console.log("Error: " + error);
// }
// console.log("first");
// fs.writeFile('./TEXT/file2.txt',"\n Pappu Kumar",{flag:"a"},(err) => {
//     if(err){
//         console.log("Error: " + error);
//     }
//     else{
//         console.log("Text has been successfully written");
//     }
// });
// console.log("second");


//delete
//  function DElete(filepath){
//     try {
//         fs.unlinkSync(filepath);
//         console.log("File has been successfully deleted");
//     } catch (error) {
//         console.log("Error: " + error);
//     }
//  }
//  DElete("./TEXT/file1.txt");

//async

console.log("first")
fs.unlink('./Text/file2.txt',(err, data) => {
    if(err){
        console.log("Error: " + err);
    }
    else{
        console.log("File has been successfully unlinked");
    }
})
console.log("second");








  



