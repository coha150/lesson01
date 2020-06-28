// 配列に変換
const arg1 = [process.argv[2]]
// console.log(arg1)

// 全て小文字にする
let small = [arg1[0].toLowerCase()];
small = small[0].split(',')
// 含まれているもののみ表示
const a = []
for (i = 0; i < small.length; i++) {
    if (small[i].match(/a/)) {
        a.push(small[i])
    }
}

// アルファベット順
a.sort()
console.log(a)
