const {readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt' , 'utf8');
const second = readFileSync('./content/second.txt' , 'utf8');

writeFileSync('./content/result-sync.txt', `Here is the result : ${first} ${second}`,
{flag : 'a'});


// Further explanation from chatGPT 
// No, the writeFileSync function in Node.js will not create a new file automatically if the file path is not provided. If the specified file does not exist, it will throw an error.

// To create a new file using writeFileSync, you need to provide the file path along with the content to be written. Here's an example:

// const { writeFileSync } = require('fs');
// const filePath = 'newFile.txt';
// const content = 'Hello, World!';
// writeFileSync(filePath, content);
// console.log('File created successfully.');

// In this example, the writeFileSync function is used to write the content 'Hello, World!' to the file specified by filePath. If the file does not exist, it will be created with the provided content. After executing the code, you should see the message "File created successfully" in the console.

// Note that if the file already exists, writeFileSync will overwrite its contents with the new data. If you want to append content to an existing file instead of overwriting it, you can use the fs.appendFileSync function instead.

// Here's an example of appending content to an existing file:


// const { appendFileSync } = require('fs');
// const filePath = 'existingFile.txt';
// const content = 'Additional content';
// appendFileSync(filePath, content);
// console.log('Content appended to the file.');

// In this example, the appendFileSync function is used to append the content 'Additional content' to the file specified by filePath. If the file does not exist, it will be created, and the content will be appended to it.


