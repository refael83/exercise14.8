const fs= require('fs');
const lodash=require('lodash')

function print(data){
fs.appendFile('results.text',data +'\n',(err)=>{
    if(err)throw err;
})
}
function printLength(array){
fs.appendFile('results.text',array.length +'\n',(err)=>{
    if(err)throw err;
})
}
function printRevers(array){
let revers=lodash.reverse(array)
fs.appendFile('results.text',lodash.map(revers).join(' ') +'\n',(err)=>{
    if(err)throw err;
})
}
function printUniq(array){
fs.appendFile('results.text',lodash.map(lodash.uniq(array)).join(' ') +'\n',(err)=>{
    if(err)throw err;
})
} 
function printUniqLength(array){
fs.appendFile('results.text',(lodash.uniq(array)).length +'\n',(err)=>{
    if(err)throw err;
})
}
function printUpperCase(array){
fs.appendFile('results.text',lodash.map(array).join(' ').toUpperCase() +'\n',(err)=>{
    if(err)throw err;
})
}

// fs.appendFile('results.text',upThen5 (array).length +'\n',(err)=>{
//     if(err)throw err;
// })
// fs.appendFile('results.text',lodash.map(upThen5 (array)).join(' ') +'\n',(err)=>{
//     if(err)throw err;
// })
module.exports={
    print,
    printLength,
    printRevers,
    printUniq,
    printUniqLength,
    printUpperCase
}