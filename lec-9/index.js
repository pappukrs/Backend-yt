const fs=require("fs");






// try {
//     fs.appendFileSync('./TEXT/file1.txt',"\n  Welcome");
//     console.log("appended successful")
// } catch (error) {
//     console.log(error);
// }

try {
    fs.writeFileSync('./TEXT/file1.txt'," Welcome to codeserver");
    console.log("written successful")
} catch (error) {
    console.log(error);
}