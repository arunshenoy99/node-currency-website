const request = require('request')
const parser = require('node-html-parser')

const converter = (from,to,fromVal,callback)=>{
    const conv = from+'_'+to
    const url = 'https://free.currconv.com/api/v7/convert?q='+conv+'&compact=ultra&apiKey=52c2ace65f3970098569'
    request({url,json:true},(error,{body})=>{
        if(error){
            return callback('Cannot connect to conversion service',undefined)
        }
        if(body[conv])
        {
        const convVal=fromVal*body[conv]
        callback(undefined,convVal)
        }
        else{
            return callback('Please enter a valid value',undefined)
        }

    })
}
module.exports=converter