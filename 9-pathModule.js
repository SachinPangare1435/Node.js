const path=require('path')
console.log(path.sep)
console.log(path.join)
const filePath=path.join('/content','sub','test.txt')
console.log(filePath)
const base=path.basename(filePath)
console.log(base)
const absolutepath=path.resolve(__dirname,'content','sub','test.txt');
console.log(absolutepath)