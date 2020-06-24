const time = process.argv[2]
if(time>=24){
console.log(time%24)
}else{
    console.log(time)
}