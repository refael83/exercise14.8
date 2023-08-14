const fs= require('fs');
const lodash=require('lodash')
const dt = require('./lodasModule');
const upThen5= require('./utils')
fs.readFile('data.text','utf-8',(err,data)=>{
    if(err)throw err;
    let array =lodash.words(data)
    dt.print(data);
    dt.printLength(array)
    dt.printRevers(array)
    dt.printUpperCase(array)
    dt.printUniq(array)
    dt.printUniqLength(array)
    upThen5.upThen5(array);
})

