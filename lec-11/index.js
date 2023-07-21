const fs=require("fs/promises");
// console.log(fs)


//read
// console.log("first")
// const prom=fs.readFile('./file1.txt',"utf-8");
// // console.log(prom);
// prom.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


//  async function readFile(filename){
//      try {
//         const data=   await fs.readFile(filename,'utf-8');
//         console.log(data);
//      } catch (error) {
//         console.log(error);
//      }
// }
// readFile('./file1.txt');
// // console.log("second")

//writefile vs appendfile


async function writeMethod(filename){
    try {
        await fs.appendFile(filename,"\n You will get full backend tutorial so please subscribe it");
        console.log("Text has been successfully written")
    } catch (error) {
        console.log("Failed to write:",error);
    }
}

writeMethod('file1.txt');
