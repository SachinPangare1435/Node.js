require ('./7-mind-grenade');
//Modules- Encapsulated code (only share minimum)
//CommonJS ,every file is module (by default)
//
const names=require('./4-names')
const hi=require('./5-utils')
console.log(names);

hi('sachin')
hi(names.john)
hi(names.peter)