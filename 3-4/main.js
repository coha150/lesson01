const a = process.argv[2]
const b = process.argv[3]

// それぞれを逆から配列に入れていく
const arrayA = []
const arrayB = []
for (i = 2; i >= 0; i--) {
    arrayA.push(a[i])
    arrayB.push(b[i])

}

// 配列の中のものを3桁の数字にする
const numA = Number(arrayA.join(''))
const numB = Number(arrayB.join(''))

// 足算
console.log(numA + numB)