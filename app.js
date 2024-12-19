const { readFile, writeFile, read } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try
    {
        const first = await readFilePromise('./content/file1.txt','utf8');
        const second = await writeFilePromise('./content/file2.txt','utf8');
        await writeFilePromise('./content/resultmindgranade.txt',
            `This is awesome ${first} ${second}`
        )
        console.log(first, second);
    }
    catch(err)
    {
        console.log(err);
    }
}