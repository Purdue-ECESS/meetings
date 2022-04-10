// https://stackoverflow.com/questions/45531690/how-to-create-an-infinite-loop-in-nodejs

function logEvery2Seconds(i: number) {
    setTimeout(() => {
        console.log('Infinite Loop Test n:', i);
        logEvery2Seconds(++i);
    }, 2000)
}

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
    console.log('Infinite Loop Test interval n:', i++);
}, 2000)