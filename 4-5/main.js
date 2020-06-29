const argv = process.argv.slice(2)
const sort =[]
for(i=0;i<=9999;i++){
    for(j=0;j<argv.length;j++){
        if(String(i)===argv[j]){
            sort.push(argv[j])
        }
    }
}
console.log(sort)

