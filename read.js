const { readFile , writeFile, read } = require('fs');

console.log('Started the program');

readFile('./content/file2.txt','utf8', (err, result) => {
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
})
console.log('started next task');