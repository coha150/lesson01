const arg1 = process.argv[2]
let hundred = arg1/100
hundred  = Math.floor(hundred)
let ten = arg1%100/10
ten = Math.floor(ten)
let one = arg1%10
console.log(`100円玉${hundred}枚、10円玉${ten}枚、1円玉${one}枚`)
