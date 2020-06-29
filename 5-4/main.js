let json = require('./kobe.json');
// console.log(json)

function findKobe(obj) {
    const keys = Object.keys(obj)
    // console.log(keys)
    for (let key of keys){
        
        if (key === "kobe") {
           console.log(obj[key])
        }

        // valueがobjectのときは繰り返す
    if (typeof obj[key] === "object") {
        findKobe(obj[key])
    }
}
}
findKobe(json)

