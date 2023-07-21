const fs=require("fs");

//update
//fs.readFileSync
//fs.writeFileSync

const filepath='./TEXT/file1.txt';

try {
    //read file
    const existingContent=fs.readFileSync(filepath,'utf-8');
    //update content
    const updatedContent=existingContent+"\n please Subscribe your yt channel codeserver!";
   
    fs.writeFileSync(filepath,updatedContent);

    console.log("updated successfully");

    
} catch (error) {
  console.log(error);  
}

